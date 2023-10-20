<template>
    <Head title="Pacijenti" />

    <AuthenticatedLayout>
        <div class="mb-8 flex flex-col space-y-8 px-4 sm:px-0">
            <div class="flex justify-between border-b py-4">
                <inertia-link :href="route('dashboard')" class="group flex items-center space-x-3 text-sm uppercase text-gray-600 hover:text-gray-800">
                    <span class="border-r"><ArrowLeftIcon class="mr-1 h-6 w-6 text-gray-400 group-hover:text-gray-600" aria-hidden="true" /></span>
                    <span>Vrati se nazad</span>
                </inertia-link>

                <inertia-link :href="route('calendar.show')" class="group flex items-center space-x-3 text-gray-600 hover:text-gray-800">
                    <span>Idi na kalendar</span>
                    <CalendarDaysIcon class="h-6 w-6" aria-hidden="true" />
                </inertia-link>
            </div>
        </div>

        <div class="mb-4 flex flex-col gap-4 overflow-hidden bg-white p-4 shadow-sm dark:bg-gray-800 sm:rounded-lg md:flex-row md:items-center md:gap-10">
            <div class="flex flex-col space-y-1 md:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                <label for="search" class="font-medium">Pretraži pacijente</label>
                <div class="relative text-gray-400 focus-within:text-gray-600">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        v-model="form.keyword"
                        class="block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:text-sm"
                        placeholder="Pavle Stojanovic"
                        type="search"
                        name="search"
                        autocomplete="off"
                    />
                </div>
            </div>

            <div class="flex flex-col space-y-1 md:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                <label for="search" class="font-medium">Pretraži brojeve telefona</label>
                <div class="relative text-gray-400 focus-within:text-gray-600">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        v-model="form.phone"
                        class="block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:text-sm"
                        placeholder="0631239873"
                        type="search"
                        name="search"
                        autocomplete="off"
                    />
                </div>
            </div>
        </div>

        <div class="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div class="flex items-center justify-between border-b px-4 py-4 sm:px-6">
                <h1 class="text-xl font-semibold">Pacijenti</h1>
                <button
                    type="button"
                    class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                    @click="() => newPatientModal = true"
                >
                    Dodaj pacijenta
                </button>
            </div>

            <div class="flex min-w-0 flex-1 bg-gray-50 px-4 pb-2 pt-4 sm:px-6">
                <div class="min-w-0 flex-1 md:grid md:grid-cols-3 md:gap-4">
                    <div class="text-sm font-semibold text-gray-500">Pacijent</div>
                    <div class="hidden text-sm font-semibold text-gray-500 md:block">Kontakt informacije</div>
                    <div class="hidden text-sm font-semibold text-gray-500 md:block">SMS</div>
                </div>
                <div class="mr-24 text-sm font-semibold text-gray-500">Akcija</div>
            </div>

            <div :class="[loading ? 'opacity-25' : '', 'overflow-hidden bg-white shadow sm:rounded-t-md']">
                <ul role="list" class="divide-y divide-gray-200">
                    <li v-for="patient in patients?.data" :key="patient.id" class="relative">
                        <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="flex min-w-0 flex-1 items-center">
                                <div v-if="patient?.photo" class="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full" :src="patient?.photo" alt="" />
                                </div>
                                <div class="min-w-0 flex-1 md:grid md:grid-cols-3 md:gap-4">
                                    <div>
                                        <p class="truncate text-lg font-semibold text-gray-800">
                                            {{ `${patient?.first_name} ${patient?.last_name}` }}
                                        </p>
                                    </div>
                                    <div class="space-y-1 md:block">
                                        <p v-if="patient?.phone" class="flex items-center text-sm text-gray-700">
                                            <PhoneIcon class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <span class="truncate">{{ patient.phone }}</span>
                                        </p>
                                        <p class="flex items-center text-sm text-gray-700">
                                            <MapPinIcon class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <span class="truncate">{{ `${patient?.address}, ${patient?.city}` }}</span>
                                        </p>
                                    </div>
                                    <div>{{ patient?.sms ? "DA" : "NE" }}</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 text-lg">
                                <inertia-link :href="route('patients.show', { slug: patient.slug })" class="group flex items-center text-indigo-500 hover:text-indigo-700">
                                    <EyeIcon class="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
                                    <span>Vidi</span>
                                </inertia-link>

                                <button type="button" class="group flex items-center text-indigo-500 hover:text-indigo-800" @click="makeAppointment">
                                    <CalendarDaysIcon class="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
                                    <span>Zakaži</span>
                                </button>
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
            @close="
            () => {
                newPatientModal = false
            }
        "
        >
            <FormPatientDetails :edit="false" @success="() => newPatientModal = false" />
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

const makeAppointment = () => {
    console.log("termin je uspesno zakazan")
}

const form = useForm({
    keyword: null,
    phone: null
})

const search = debounce(() => {
    loading.value = true
    form.get(route("patients.index", { keyword: form.keyword || form.phone }), {
        preserveState: true,
        onFinish: () => {
            loading.value = false
        }
    })
}, 400)

watch(
    () => form.keyword,
    (value) => {
        if (form.keyword && form.phone !== null) {
            form.phone = null
            return
        }
        search("keyword")
    }
)

watch(
    () => form.phone,
    (value) => {
        if (form.phone && form.keyword !== null) {
            form.keyword = null
            return
        }
        search("phone")
    }
)
</script>
