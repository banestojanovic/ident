<template>
    <Head title="Kalendar" />

    <AuthenticatedLayout>
        <div class="mb-8 flex flex-col space-y-8 px-4 sm:px-0">
            <div class="flex justify-between border-b py-4">
                <div class="flex items-center">
                    <inertia-link :href="route('patients.index')" class="group flex items-center space-x-3 text-sm uppercase text-gray-600 hover:text-gray-800">
                        <span class="border-r"><ArrowLeftIcon class="mr-1 h-6 w-6 text-gray-400 group-hover:text-gray-600" aria-hidden="true" /></span>
                        <span>Vrati se nazad</span>
                    </inertia-link>
                    <div v-if="patient?.id" class="ml-2 flex flex-col text-gray-700">
                        <h3>/ zakaži termin za - {{ patient?.first_name }} {{ patient?.last_name }}</h3>
                    </div>
                </div>

                <inertia-link :href="route('patients.index')" class="group flex items-center space-x-3 text-gray-600 hover:text-gray-800">
                    <span>Idi na pacijente</span>
                    <UserGroupIcon class="h-6 w-6" aria-hidden="true" />
                </inertia-link>
            </div>
        </div>

        <FullCalendar ref="calendarEl" :options="calendarOptions" class="h-[80vh]">
            <template v-slot:eventContent="arg">
                <div class="flex flex-col">
                    <span>{{ arg.event.title }}</span>
                    <span>{{ arg.event.extendedProps.patient.first_name }}</span>
                    <span>{{ `${arg.event.start.getHours()}:${arg.event.start.getMinutes()}-${arg.event.end.getHours()}:${arg.event.end.getMinutes()}h` }}</span>
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
import { Head, router, useForm } from "@inertiajs/vue3"
import FullCalendar from "@fullcalendar/vue3"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import Modal from "@/Pages/Partials/Modal.vue"
import { onMounted, onUnmounted, ref, watch } from "vue"
import FormBooking from "@/Pages/Forms/FormBooking.vue"
import { dateOptions } from "@/helpers.js"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { ArrowLeftIcon, CalendarDaysIcon, UserGroupIcon } from "@heroicons/vue/24/solid/index.js"

const props = defineProps({
    patient: Object,
    bookings: Object
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

const currentDate = new Date()
const calendarEl = ref(null)
const calendarApi = ref(null)

const calendarOptions = ref({
    locale: "sr-Latn-RS",
    firstDay: 1,
    slotDuration: "00:05:00",
    allDaySlot: false,
    slotMinTime: "07:00:00",
    slotMaxTime: "20:00:00",
    nowIndicator: true,
    slotEventOverlap: true,
    plugins: [timeGridPlugin, interactionPlugin],
    eventDisplay: "block",
    initialView: "timeGridSevenDay",
    // headerToolbar: {
    //     left: 'prev,next,today',
    //     center: 'title',
    //     right: 'timeGridWeek,timeGridDay'
    // },
    scrollTime: new Date(currentDate.setHours(currentDate.getHours() - 1)).toTimeString(),
    views: {
        timeGridSevenDay: {
            type: "timeGrid",
            duration: { days: 5 }
        },
        timeGridOneDay: {
            type: "timeGrid",
            duration: { days: 1 }
        }
    },
    dateClick: handleDateClick,
    eventClick: handleEventClick,
    events: props.bookings?.data,
    buttonText: {
        today: "Danas",
        month: "Mesec",
        week: "Sedmica",
        day: "Dan",
        list: "Lista"
    }
})

const onResize = () => {
    if (window.innerHeight > 768) {
        calendarApi.value.changeView("timeGridSevenDay")
    } else {
        calendarApi.value.changeView("timeGridOneDay")
    }
}

onMounted(() => {
    calendarApi.value = calendarEl.value.getApi()
    window.addEventListener("resize", onResize)

    if (window.innerHeight > 768) {
        calendarApi.value.changeView("timeGridSevenDay")
    } else {
        calendarApi.value.changeView("timeGridOneDay")
    }})

onUnmounted(() => {
    window.addEventListener("resize", onResize)
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
    if (props.patient) {
        setTimeout(() => {
            router.replace(route("calendar.show"))
        }, 3000)
    } else {
        calendarApi.value.render()
    }
    bookingModal.value = false
}
</script>

<style>
.fc-scrollgrid {
    @apply overflow-hidden rounded bg-white;
}

.fc-event {
    width: 100px;
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
