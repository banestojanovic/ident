<template>
    <Head title="Pacijenti" />

    <AuthenticatedLayout>
        <div class="flex flex-col overflow-hidden bg-white px-8 py-6 sm:rounded-tl-none sm:rounded-tr-lg md:flex-row md:items-center md:justify-between md:gap-10">
            <div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
                <div class="flex flex-col space-y-1 lg:col-span-9 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
                    <div class="flex items-center space-x-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                            <path
                                d="M14 14L10 10M11.3333 6.66667C11.3333 7.2795 11.2126 7.88634 10.9781 8.45252C10.7436 9.01871 10.3998 9.53316 9.9665 9.9665C9.53316 10.3998 9.01871 10.7436 8.45252 10.9781C7.88634 11.2126 7.2795 11.3333 6.66667 11.3333C6.05383 11.3333 5.447 11.2126 4.88081 10.9781C4.31462 10.7436 3.80018 10.3998 3.36683 9.9665C2.93349 9.53316 2.58975 9.01871 2.35523 8.45252C2.12071 7.88634 2 7.2795 2 6.66667C2 5.42899 2.49167 4.242 3.36683 3.36683C4.242 2.49167 5.42899 2 6.66667 2C7.90434 2 9.09133 2.49167 9.9665 3.36683C10.8417 4.242 11.3333 5.42899 11.3333 6.66667Z"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <label for="search" class="shrink-0 font-medium">Pretraga pacijenata</label>
                    </div>
                    <div class="relative flex w-full text-gray-400 focus-within:text-gray-600 lg:pl-6">
                        <input
                            id="search"
                            v-model="form.keyword"
                            class="block w-full rounded-lg border-0 bg-[#EBF2F5] px-4 py-3 leading-5 text-gray-900 placeholder-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                            placeholder="Klikni ovde i počni da kucaš pacijentovo ime pa prezime..."
                            type="search"
                            name="search"
                            autocomplete="off"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    class="focus-visible:ring-ring inline-flex items-center justify-center space-x-2 rounded-md bg-red-100 px-4 py-3 text-base font-medium text-red-700 transition-colors hover:bg-red-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:col-span-3"
                    @click="() => (newPatientModal = true)"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 6.75V9V6.75ZM13.5 9V11.25V9ZM13.5 9H15.75H13.5ZM13.5 9H11.25H13.5ZM9.75 5.25C9.75 6.04565 9.43393 6.80871 8.87132 7.37132C8.30871 7.93393 7.54565 8.25 6.75 8.25C5.95435 8.25 5.19129 7.93393 4.62868 7.37132C4.06607 6.80871 3.75 6.04565 3.75 5.25C3.75 4.45435 4.06607 3.69129 4.62868 3.12868C5.19129 2.56607 5.95435 2.25 6.75 2.25C7.54565 2.25 8.30871 2.56607 8.87132 3.12868C9.43393 3.69129 9.75 4.45435 9.75 5.25V5.25ZM2.25 15C2.25 13.8065 2.72411 12.6619 3.56802 11.818C4.41193 10.9741 5.55653 10.5 6.75 10.5C7.94347 10.5 9.08807 10.9741 9.93198 11.818C10.7759 12.6619 11.25 13.8065 11.25 15V15.75H2.25V15Z"
                            stroke="#9B1C1C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <span>Dodaj novog pacijenta</span>
                </button>
            </div>
        </div>

        <div class="rounded-b-lg mt-0.5 overflow-hidden bg-white shadow-sm">
            <h1 class="sr-only">Pacijenti</h1>

            <div class="flex min-w-0 flex-1 bg-gray-50/60 px-4 py-2 sm:px-6">
                <div class="min-w-0 flex-1 md:grid md:grid-cols-3 md:gap-4">
                    <div class="text-xs font-light uppercase text-gray-500">Ime i prezime</div>
                    <div class="hidden text-xs font-light uppercase text-gray-500 md:block">Kontakt informacije</div>
                    <div class="hidden text-xs font-light uppercase text-gray-500 md:block">SMS podsetnik</div>
                </div>
                <div class="mr-28 text-xs font-light uppercase text-gray-500">Karton pacijenta i zakazivanje</div>
            </div>

            <div :class="[loading ? 'opacity-25' : '', 'overflow-hidden bg-white shadow sm:rounded-t-md']">
                <ul role="list" class="divide-y divide-gray-200">
                    <li v-for="patient in patients?.data" :key="patient.id" class="relative">
                        <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="flex min-w-0 flex-1 items-center items-center">
                                <div v-if="patient?.photo" class="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full" :src="patient?.photo" alt="" />
                                </div>
                                <div class="min-w-0 flex-1 items-center md:grid md:grid-cols-3 md:gap-4">
                                    <p class="truncate text-xl">
                                        {{ `${patient?.first_name} ${patient?.last_name}` }}
                                    </p>
                                    <div class="space-y-2 md:block">
                                        <div v-if="patient?.phone" class="flex space-x-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative top-1">
                                                <path
                                                    d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z"
                                                    stroke="#3E8C41"
                                                    stroke-opacity="0.6"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-500">Telefon</span>
                                                <span class="truncate tracking-wide">{{ patient.phone }}</span>
                                            </div>
                                        </div>
                                        <div v-if="patient?.address" class="flex space-x-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.7142 13.8808L11.1783 17.4167C11.0237 17.5715 10.8401 17.6942 10.638 17.778C10.4358 17.8618 10.2192 17.9049 10.0004 17.9049C9.78162 17.9049 9.56498 17.8618 9.36286 17.778C9.16075 17.6942 8.97713 17.5715 8.8225 17.4167L5.28583 13.8808C4.35352 12.9485 3.71861 11.7606 3.4614 10.4674C3.2042 9.17419 3.33624 7.83376 3.84083 6.61561C4.34543 5.39745 5.19991 4.35628 6.29623 3.62376C7.39255 2.89123 8.68147 2.50024 10 2.50024C11.3185 2.50024 12.6074 2.89123 13.7038 3.62376C14.8001 4.35628 15.6546 5.39745 16.1592 6.61561C16.6638 7.83376 16.7958 9.17419 16.5386 10.4674C16.2814 11.7606 15.6465 12.9485 14.7142 13.8808V13.8808Z"
                                                    stroke="#005C9E"
                                                    stroke-opacity="0.6"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86774 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 10 6.66667C9.33696 6.66667 8.70107 6.93006 8.23223 7.3989C7.76339 7.86774 7.5 8.50363 7.5 9.16667C7.5 9.82971 7.76339 10.4656 8.23223 10.9344C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344Z"
                                                    stroke="#005C9E"
                                                    stroke-opacity="0.6"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>

                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-500">Adresa</span>
                                                <span class="truncate">{{ `${patient?.address}, ${patient?.city || ""}` }}</span>
                                            </div>
                                        </div>
                                        <div v-if="patient?.email" class="flex space-x-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.5 6.66667L9.075 11.05C9.34888 11.2327 9.67075 11.3302 10 11.3302C10.3292 11.3302 10.6511 11.2327 10.925 11.05L17.5 6.66667M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z"
                                                    stroke="#C892C6"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>

                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-500">Email adresa</span>
                                                <span class="truncate">{{ patient?.email }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div :class="[patient?.sms ? 'text-green-700' : 'text-red-700', 'flex items-center space-x-1']">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 15H10.0083M6.66667 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0118C14.8244 16.6993 15 16.2754 15 15.8333V4.16667C15 3.72464 14.8244 3.30072 14.5118 2.98816C14.1993 2.67559 13.7754 2.5 13.3333 2.5H6.66667C6.22464 2.5 5.80072 2.67559 5.48816 2.98816C5.17559 3.30072 5 3.72464 5 4.16667V15.8333C5 16.2754 5.17559 16.6993 5.48816 17.0118C5.80072 17.3244 6.22464 17.5 6.66667 17.5Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <span>{{ patient?.sms ? "DA" : "NE" }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 text-lg">
                                <inertia-link :href="route('patients.show', { slug: patient.slug })" class="group flex items-center space-x-2 rounded-lg bg-blue-100 px-6 py-2 text-sm text-sky-800 hover:bg-blue-200">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.50002 10H12.5M7.50002 13.3333H12.5M14.1667 17.5H5.83335C5.39133 17.5 4.9674 17.3244 4.65484 17.0118C4.34228 16.6993 4.16669 16.2754 4.16669 15.8333V4.16667C4.16669 3.72464 4.34228 3.30072 4.65484 2.98816C4.9674 2.67559 5.39133 2.5 5.83335 2.5H10.4884C10.7093 2.50005 10.9213 2.58788 11.0775 2.74417L15.5892 7.25583C15.7455 7.41208 15.8333 7.624 15.8334 7.845V15.8333C15.8334 16.2754 15.6578 16.6993 15.3452 17.0118C15.0326 17.3244 14.6087 17.5 14.1667 17.5Z"
                                            stroke="#005C9E"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <span>Vidi karton</span>
                                </inertia-link>

                                <inertia-link :href="route('calendar.show', { patient_id: patient.id })" class="group flex items-center space-x-2 rounded-lg bg-green-100 px-6 py-2 text-sm text-green-800 hover:bg-green-200">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 5.25V2.25M12 5.25V2.25M5.25 8.25H12.75M3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <span>Zakaži termin</span>
                                </inertia-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Pagination :data="patients" />
        </div>

        <Modal
            :open="newPatientModal"
            title="Dodaj pacijenta"
            subtitle="Unesi podatke novog pacijenta u bazu podataka"
            type="big"
            @close="
                () => {
                    newPatientModal = false
                }
            "
        >
            <FormPatientDetails :edit="false" @success="() => (newPatientModal = false)" />
        </Modal>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { Head, useForm } from "@inertiajs/vue3"
import { EyeIcon, MapPinIcon, PhoneIcon, ArrowLeftIcon, CalendarDaysIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid"
import Pagination from "@/Pages/Partials/Pagination.vue"
import { ref, watch } from "vue"
import debounce from "lodash.debounce"
import Modal from "@/Pages/Partials/Modal.vue"
import FormPatientDetails from "@/Pages/Forms/FormPatientDetails.vue"

const props = defineProps({
    patients: true
})

const loading = ref(false)
const newPatientModal = ref(false)

const form = useForm({
    keyword: null
})

const search = debounce(() => {
    loading.value = true
    form.get(route("patients.index", { keyword: form.keyword }), {
        preserveState: true,
        onFinish: () => {
            loading.value = false
        }
    })
}, 400)

watch(
    () => form.keyword,
    (value) => {
        search("keyword")
    }
)
</script>
