<template>
    <Head title="Pacijent" />

    <AuthenticatedLayout type="patient">
        <div class="flex flex-col">
            <div class="mt-1 grid w-full gap-1 xl:grid-cols-12">
                <div class="col-span-12 flex w-full pl-6 xl:col-span-9">
                    <inertia-link :href="route('calendar.show')" class="group relative mr-1 flex flex-col items-center justify-center space-y-1 bg-white px-4 text-gray-900">
                        <svg class="absolute -left-3 top-8" width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4706 24.9412L1.09021e-06 12.4706L12.4706 1.25343e-05L12.4706 24.9412Z" fill="white" />
                        </svg>

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 8.75V3.75M20 8.75V3.75M8.75 13.75H21.25M6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25Z"
                                stroke="#778D97"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span class="mt-1 text-[11px] uppercase text-[#778D97]">Kalendar</span>
                    </inertia-link>

                    <PatientInformation :patient="patient" />
                </div>

                <div class="col-span-12 grid grid-cols-2 items-center justify-center gap-2 bg-white px-2 xl:px-4 py-2 xl:col-span-3">
                    <button
                        type="button"
                        class="focus-visible:ring-ring inline-flex w-full items-center justify-center space-x-2 rounded-md bg-fuchsia-100 px-2 py-5 text-base uppercase text-fuchsia-700 transition-colors hover:bg-fuchsia-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                        @click="() => (recordModalOpen = true)"
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                            <path
                                d="M8.24992 11H13.7499M8.24992 14.6667H13.7499M15.5833 19.25H6.41659C5.93035 19.25 5.46404 19.0568 5.12022 18.713C4.77641 18.3692 4.58325 17.9029 4.58325 17.4167V4.58333C4.58325 4.0971 4.77641 3.63079 5.12022 3.28697C5.46404 2.94315 5.93035 2.75 6.41659 2.75H11.5371C11.7802 2.75005 12.0133 2.84666 12.1852 3.01858L17.148 7.98142C17.3199 8.15328 17.4165 8.3864 17.4166 8.6295V17.4167C17.4166 17.9029 17.2234 18.3692 16.8796 18.713C16.5358 19.0568 16.0695 19.25 15.5833 19.25Z"
                                stroke="#A960A5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span class="text-base md:text-sm 2xl:text-base">Dodaj karton</span>
                    </button>

                    <inertia-link
                        :href="route('calendar.show')"
                        class="focus-visible:ring-ring inline-flex w-full items-center justify-center space-x-2 rounded-md bg-green-100 px-2 py-5 text-base uppercase text-green-700 transition-colors hover:bg-green-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                            <path
                                d="M7.33333 6.41667V2.75M14.6667 6.41667V2.75M6.41667 10.0833H15.5833M4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V6.41667C19.25 5.93044 19.0568 5.46412 18.713 5.1203C18.3692 4.77649 17.9029 4.58333 17.4167 4.58333H4.58333C4.0971 4.58333 3.63079 4.77649 3.28697 5.1203C2.94315 5.46412 2.75 5.93044 2.75 6.41667V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25Z"
                                stroke="#3E8C41"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span class="text-base md:text-sm 2xl:text-base">Zakaži termin</span>
                    </inertia-link>
                </div>
            </div>

            <div class="grid w-full grid-cols-12 gap-1">
                <PatientHistory :patient="patient" :modalOpen="recordModalOpen" @close-modal="() => (recordModalOpen = false)" @open-modal="() => (recordModalOpen = true)" />

                <PatientPhotos :patient="patient" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { Head } from "@inertiajs/vue3"
import { ArrowLeftIcon } from "@heroicons/vue/20/solid/index.js"
import PatientHistory from "@/Pages/Patient/PatientHistory.vue"
import PatientInformation from "@/Pages/Patient/PatientInformation.vue"
import PatientPhotos from "@/Pages/Patient/PatientPhotos.vue"
import { ref } from "vue"

const props = defineProps({
    patient: true
})

const recordModalOpen = ref(false)

const serbianLocale = "sr-Latn-SR"

const options = {
    year: "numeric",
    month: "long",
    day: "2-digit"
}
</script>
