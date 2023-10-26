<template>
    <Head title="Kalendar" />

    <AuthenticatedLayout>
        <div>
            <FieldSelectDentists v-model="dentistForm.dentist" :items="$page.props.global.dentists.data" name="dentist" label="Izaberite doktora" />
        </div>

        <FullCalendar ref="calendarEl" :options="calendarOptions" class="h-[80vh] bg-white p-10">
            <template v-slot:eventContent="arg">
                <div class="flex flex-col">
                    <span>{{ arg.event.title }}</span>
                    <span>{{ arg.event.extendedProps.patient.first_name }}</span>
                </div>
            </template>
        </FullCalendar>

        <Modal
            :open="bookingModal"
            :title="`Termin - ${selectedDate?.date.toLocaleString(dateOptions.locale)}`"
            subtitle="Unesite odabrani termin u bazu podataka"
            @close="
                () => {
                    bookingModal = false
                }
            "
        >
            <FormBooking :date="selectedDate" :selected-patient="patient" @success="handleAppointmentSuccess" />
        </Modal>

        <Modal
            :open="eventModal"
            :title="`Pregled Termina`"
            subtitle="Detaljan pregled zakazanog termina"
            @close="
                () => {
                    eventModal = false
                }
            "
        >
            <div class="flex flex-col space-y-6">
                <div>
                    <span class="font-semibold">Doktor</span>
                    <h5>{{ selectedEvent.extendedProps.dentist.name }}</h5>
                </div>

                <div class="flex flex-col space-y-3">
                    <div>
                        <span class="font-semibold">Pacijent</span>
                        <h5>
                            {{ `${selectedEvent.extendedProps.patient.first_name} ${selectedEvent.extendedProps.patient.last_name}` }}
                        </h5>
                        <div v-if="selectedEvent.extendedProps.patient?.address">
                            {{ `${selectedEvent.extendedProps.patient?.address}, ${selectedEvent.extendedProps?.patient?.city}` }}
                        </div>
                        <div>{{ `${selectedEvent.extendedProps.patient?.phone}` }}</div>
                    </div>
                </div>

                <button
                    type="button"
                    @click="
                        () => {
                            confirmDialogOpen = true
                            eventModal = false
                        }
                    "
                    class="absolute bottom-4 right-10 text-red-500 hover:underline"
                >
                    Izbriši zakazani termin
                </button>
            </div>
        </Modal>

        <ConfirmDialog
            :open="confirmDialogOpen"
            @confirm="handleDeleteAppointment"
            @cancel="
                () => {
                    confirmDialogOpen = false
                    eventModal = true
                }
            "
            title="Izbriši zakazani termin"
            subtitle="Ovo je nepovratna akcija nakon koje će ovaj zakazani termin biti trajno uklonjen iz baze podataka."
        />
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { Head, router, useForm, usePage } from "@inertiajs/vue3"
import FullCalendar from "@fullcalendar/vue3"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import Modal from "@/Pages/Partials/Modal.vue"
import { ref, watch } from "vue"
import FormBooking from "@/Pages/Forms/FormBooking.vue"
import { dateOptions } from "@/helpers.js"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import FieldSelectDentists from "@/Pages/Fields/FieldSelectDentists.vue"

const props = defineProps({
    patient: Object,
    bookings: Object,
    query: Object
})

const loading = ref(false)
const bookingModal = ref(false)
const eventModal = ref(false)
const confirmDialogOpen = ref(false)
const selectedDate = ref(null)
const selectedEvent = ref(null)

const handleDateClick = (date) => {
    selectedDate.value = date
    bookingModal.value = true
}

const handleEventClick = (info, date) => {
    selectedEvent.value = info.event
    eventModal.value = true
}

const dentistForm = useForm({
    dentist: props.query.dentist
})

watch(
    () => dentistForm.dentist,
    (value) => {
        if (dentistForm.dentist?.id) {
            router.visit(route("calendar.show", { dentist: dentistForm.dentist.id || null }), {
                preserveScroll: true,
            })
        } else {
            router.visit(route("calendar.show"), {
                preserveScroll: true,
            })
        }
    }
)

const currentDate = new Date()
const calendarEl = ref(null)
const calendarApi = ref(null)

const calendarOptions = ref({
    locale: "sr-Latn-RS",
    firstDay: 1,
    slotDuration: "00:30:00",
    allDaySlot: false,
    slotMinTime: "07:00:00",
    slotMaxTime: "20:00:00",
    nowIndicator: true,
    slotEventOverlap: false,
    plugins: [timeGridPlugin, interactionPlugin],
    eventDisplay: "block",
    initialView: "timeGridWeek",
    headerToolbar: {
        left: "title",
        center: "",
        right: "prev,next,today,timeGridDay,dva,pet,timeGridWeek"
    },
    scrollTime: new Date(currentDate.setHours(currentDate.getHours() - 1)).toTimeString(),
    views: {
        dva: {
            type: "timeGrid",
            duration: { days: 2 },
            buttonText: "Dva dana"
        },
        pet: {
            type: "timeGrid",
            duration: { days: 5 },
            buttonText: "Pet dana"
        }
    },
    dateClick: handleDateClick,
    eventClick: handleEventClick,
    events: props.bookings?.data,
    buttonText: {
        today: "Vrati se",
        month: "Mesec",
        week: "Sedmica",
        day: "Dan",
        list: "Lista"
    }
})

watch(
    () => props.bookings,
    () => {
        calendarOptions.value.events = props.bookings.data
    }
)

const deleteAppointmentForm = useForm({
    _method: "delete"
})
const handleDeleteAppointment = () => {
    loading.value = true
    deleteAppointmentForm.post(route("appointments.delete", { id: selectedEvent.value?._def?.publicId }), {
        preserveScroll: true,
        onSuccess: () => {
            confirmDialogOpen.value = false
        },
        onFinish: () => {
            loading.value = false
        }
    })
}

const handleAppointmentSuccess = () => {
    bookingModal.value = false
    if (props.patient) {
        setTimeout(() => {
            router.replace(route("calendar.show"))
        }, 3000)
    } else {
        calendarApi?.value?.render()
    }
}
</script>

<style>
.fc .fc-timegrid-slot {
    height: 4rem;
}

.fc-scrollgrid {
    @apply overflow-hidden rounded bg-white;
}

.fc-event-main {
    @apply flex flex-col;
}

.fc-header-toolbar.fc-toolbar {
    @apply flex flex-col md:flex-row;
}

.fc-timegrid-slot-lane {
    cursor: pointer;
}
</style>
