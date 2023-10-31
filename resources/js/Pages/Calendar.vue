<template>
    <Head title="Kalendar" />

    <AuthenticatedLayout>
        <div class="mt-1">
            <SearchPatients />
        </div>

        <div class="mt-1 grid grid-cols-8">
            <span class="sr-only text-emerald-400 text-orange-400 text-red-400 text-sky-400"></span>
            <div class="col-span-1 mr-1 flex flex-col space-y-4 bg-white p-6 px-10">
                <h5 class="ml-6 text-gray-500">Doktori</h5>

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
                            <label :for="dentist.name" class="ml-2 block cursor-pointer text-gray-900">
                                {{ dentist.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <FullCalendar ref="calendarEl" :options="calendarOptions" class="col-span-7 h-[80vh] bg-white" />
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
                <div class="flex justify-between">
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

                    <div>
                        <span class="font-semibold">Doktor</span>
                        <h5>{{ selectedEvent.extendedProps.dentist.name }}</h5>
                    </div>
                </div>

                <div class="flex items-end justify-between">
                    <button
                        type="button"
                        @click="
                            () => {
                                confirmDialogOpen = true
                                eventModal = false
                            }
                        "
                        class="text-sm text-red-500 hover:underline"
                    >
                        Izbriši zakazani termin
                    </button>

                    <inertia-link
                        :href="route('patients.show', { slug: selectedEvent.extendedProps.patient.slug })"
                        class="focus-visible:ring-ring inline-flex items-center justify-center space-x-2 rounded-md bg-sky-100 px-4 py-1.5 text-base text-sky-800 transition-colors hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:col-span-3"
                    >
                        Vidi karton pacijenta
                    </inertia-link>
                </div>
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
import SearchPatients from "@/Pages/Patients/SearchPatients.vue"

const props = defineProps({
    patient: Object,
    bookings: Object,
    query: Object
})

const currentDate = new Date()
const calendarEl = ref(null)
const calendarApi = ref(null)
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

const updateForm = useForm({
    _method: "put",
    type: null,
    start_time: null,
    end_time: null
})

const handleEventDrop = (info) => {
    updateForm.type = "drop"
    updateForm.start_time = info.event.start || null

    updateForm.post(route("appointments.update", { id: info?.event?._def?.publicId ?? null }), {
        preserveScroll: true,
        onSuccess: () => {
            updateForm.type = null
            updateForm.start_time = null
            updateForm.end_time = null
        },
        onError: () => {
            info.revert()
        }
    })
}

const handleEventResize = (info) => {
    updateForm.type = "resize"
    updateForm.end_time = info.event.end || null
    updateForm.post(route("appointments.update", { id: info?.event?._def?.publicId ?? null }), {
        preserveScroll: true,
        onSuccess: () => {
            updateForm.type = null
            updateForm.start_time = null
            updateForm.end_time = null
        },
        onError: () => {
            info.revert()
        }
    })
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
            duration: { days: 3 },
            buttonText: "3 dana"
        },
        pet: {
            type: "timeGrid",
            duration: { days: 5 },
            buttonText: "5 dana"
        }
    },
    dateClick: handleDateClick,
    eventClick: handleEventClick,
    eventDrop: handleEventDrop,
    eventResize: handleEventResize,
    events: props.bookings?.data,
    buttonText: {
        today: "Danas",
        month: "Mesec",
        week: "7 Dana",
        day: "1 Dan",
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
    @apply flex flex-col px-6 py-4 md:flex-row;
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
    margin: 0 1px;
    background-color: #ebf2f5;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    border: none;
    color: rgb(0 0 0 / 30%);
}

.fc .fc-button-primary:hover {
    background-color: rgb(235 242 245 / 100%);
    color: rgb(0 0 0 / 100%);
}

.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
.fc .fc-button-primary:not(:disabled):focus,
.fc .fc-button-primary:not(:disabled):active:focus,
.fc .fc-button-primary:not(:disabled).fc-button-active,
.fc .fc-button-primary:not(:disabled):active {
    background-color: #ebf2f5;
    box-shadow: none;
    border: none;
    color: rgb(0 0 0 / 100%);
}

.fc .fc-button-primary.fc-today-button:disabled {
    background-color: #ebf2f5;
    color: rgb(112 117 122 / 30%);
}

.fc .fc-button-primary.fc-today-button {
    background-color: #ebf2f5;
    color: rgb(0 0 0 / 30%);
}

.fc .fc-button-primary.fc-today-button:not(:disabled):hover {
    color: rgb(0 0 0 / 100%);
    background-color: #ebf2f5;
}

.fc-toolbar-title {
    font-size: 16px !important;
    text-transform: uppercase;
    color: black;
}
</style>
