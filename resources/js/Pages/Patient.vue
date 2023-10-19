<template>
    <Head title="Pacijent" />

    <AuthenticatedLayout type="patient">
        <div class="flex flex-col space-y-8">
            <div class="border-b py-4">
                <inertia-link :href="route('patients.index')" class="group flex items-center space-x-3 text-sm uppercase text-gray-600 hover:text-gray-800">
                    <span class="border-r"><ArrowLeftIcon class="mr-1 h-6 w-6 text-gray-400 group-hover:text-gray-600" aria-hidden="true" /></span>
                    <span>Vrati se nazad</span>
                </inertia-link>
            </div>

            <PatientInformation :patient="patient" />

            <PatientHistory :patient="patient" />

            <PatientPhotos :patient="patient" />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head } from '@inertiajs/vue3'
import { ArrowLeftIcon } from '@heroicons/vue/20/solid/index.js'
import PatientHistory from '@/Pages/Patient/PatientHistory.vue'
import PatientInformation from '@/Pages/Patient/PatientInformation.vue'
import PatientPhotos from '@/Pages/Patient/PatientPhotos.vue'

const props = defineProps({
    patient: true
})

const serbianLocale = 'sr-Latn-SR'

const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
}
</script>
