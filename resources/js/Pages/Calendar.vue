<template>
    <Head title="Kalendar" />

    <AuthenticatedLayout>
        <div class="grid grid-cols-12 bg-white">
            <span class="sr-only text-emerald-400 text-orange-400 text-red-400 text-sky-400"></span>
            <div class="col-span-1 mt-2 flex flex-col space-y-4 p-10">
                <h5 class="font-semibold text-gray-600">Doktori</h5>

                <div class="flex flex-col space-y-2.5">
                    <div v-for="(dentist, idx) in $page.props.global.dentists.data" :key="dentist.id">
                        <div class="relative flex items-center">
                            <input
                                v-model="dentistForm.dentists"
                                :id="dentist.name"
                                :name="dentist.name"
                                :value="dentist.id"
                                type="checkbox"
                                :class="[dentist?.color ? `text-${dentist.color}-400` : ' text-red-600 focus:ring-gray-100', 'h-4 w-4 cursor-pointer rounded border-gray-300']"
                            />
                            <label :for="dentist.name" class="ml-2 block cursor-pointer text-sm text-gray-600">
                                {{ dentist.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <FullCalendar ref="calendarEl" :options="calendarOptions" class="col-span-11 h-[80vh] bg-white p-10">
                <!--            <template v-slot:eventContent="arg">-->
                <!--                <div class="flex flex-col truncate">-->
                <!--                    <span>{{ arg.event.title }}</span>-->
                <!--                    <span>{{ arg.event.extendedProps.patient.first_name }}</span>-->
                <!--                    <span>{{ `${arg.event.start.getHours()}:${arg.event.start.getMinutes()}-${arg.event.end.getHours()}:${arg.event.end.getMinutes()}h` }}</span>-->
                <!--                </div>-->
                <!--            </template>-->
            </FullCalendar>
        </div>

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
    dentists: props.query?.dentists || usePage().props.global.dentists?.data?.map((item) => item.id)
})

watch(
    () => dentistForm.dentists,
    (value) => {
        if (dentistForm.dentists) {
            router.visit(route("calendar.show", { dentists: dentistForm.dentists || null }), {
                preserveScroll: true
            })
        }
    }
)

const currentDate = new Date()
const calendarEl = ref(null)
const calendarApi = ref(null)

const calendarOptions = ref({
    editable: true,
    locale: "sr-Latn-RS",
    firstDay: 1,
    slotDuration: "00:15:00",
    slotLabelInterval: "00:15:00",
    slotLabelFormat: {
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: false,
        meridiem: "short"
    },
    expandRows: true,
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
        right: "today,prev,next,timeGridDay,dva,pet,timeGridWeek"
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
    height: 2rem;
}

.fc-theme-standard .fc-scrollgrid {
    border: none;
}

.fc .fc-timegrid-axis-cushion,
.fc .fc-timegrid-slot-label-cushion {
    color: rgba(112, 117, 122, 0.7);
    background-color: #fff;
    font-size: 14px;
}

.fc-theme-standard td,
.fc-theme-standard th {
    border-color: rgb(218, 220, 224);
}

.fc .fc-timegrid-slot-minor {
    border-color: rgba(218, 220, 224, 0.8);
}

.fc-col-header-cell-cushion {
    color: #70757a;
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

.fc-timegrid-event-harness-inset .fc-timegrid-event,
.fc-timegrid-event.fc-event-mirror,
.fc-timegrid-more-link {
    padding: 6px;
    font-weight: 600;
}

.fc .fc-timegrid-col.fc-day-today {
    background-color: rgb(255 220 40 / 5%);
}

.fc .fc-button-primary {
    margin: 0 2px;
    background-color: transparent;
    font-weight: 500;
    border: none;
    color: rgb(112 117 122 / 70%);
}

.fc .fc-button-primary:hover {
    background-color: rgb(0 0 0 / 3%);
    color: rgb(112 117 122 / 70%);
}

.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
.fc .fc-button-primary:not(:disabled):focus,
.fc .fc-button-primary:not(:disabled):active:focus,
.fc .fc-button-primary:not(:disabled).fc-button-active,
.fc .fc-button-primary:not(:disabled):active {
    background-color: #f0f9ff;
    box-shadow: none;
    border: none;
    color: #075985;
}

.fc .fc-button-primary.fc-today-button:disabled {
    background-color: transparent;
    color: rgb(112 117 122 / 30%);
}

.fc .fc-button-primary.fc-today-button {
    background-color: transparent;
    color: rgb(112 117 122 / 70%);
}

.fc .fc-button-primary.fc-today-button:not(:disabled):hover {
    background-color: rgb(0 0 0 / 3%);
}

.fc-toolbar-title {
    font-size: 24px !important;
    color: rgb(112 117 122 / 100%);
}
</style>
