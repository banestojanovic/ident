<template>
    <Head title="Pacijenti"/>

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <div class="flex-1 flex">
                    <div class="max-w-lg w-full lg:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative text-gray-400 focus-within:text-gray-600">
                            <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true"/>
                            </div>
                            <input id="search"
                                   v-model="form.keyword"
                                   class="block w-full bg-gray-50 py-2 pl-10 pr-3 border border-gray-200 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white focus:border-white sm:text-sm"
                                   placeholder="Pretraži pacijente ili brojeve telefona" type="search" name="search"
                                   autocomplete="off"
                            />
                        </div>
                    </div>
                </div>

                <button type="button"
                    class="inline-flex items-center space-x-2 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 z-10"
                        @click="addPatient()"
                >
                    <UserPlusIcon class="h-5 w-5" aria-hidden="true"/>
                    <span>Dodaj Pacijenta</span>
                </button>
            </div>
        </template>

        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

            <div :class="[loading ? 'opacity-25' : '', 'bg-white shadow overflow-hidden sm:rounded-t-md']">
                <ul role="list" class="divide-y divide-gray-200">
                    <li v-for="patient in patients?.data" :key="patient.id" class="relative">
                        <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="min-w-0 flex-1 flex items-center">
                                <div v-if="patient?.photo" class="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full" :src="patient?.photo" alt=""/>
                                </div>
                                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                        <p class="text-lg font-semibold text-cyan-600 truncate">
                                            {{ patient.id }}. {{ `${patient?.first_name} ${patient?.last_name}` }}</p>
                                        <div>
                                            <p class="text-sm text-gray-500">
                                                Poslednji dolazak{{ ': ' }}
                                                <time :datetime="patient?.last_record">
                                                    {{ patient?.last_record }}
                                                </time>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="hidden md:block space-y-1">
                                        <p v-if="patient?.phone"
                                           class="flex items-center text-sm text-gray-700">
                                            <PhoneIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                                                       aria-hidden="true"/>
                                            <span class="truncate">{{ patient.phone }}</span>
                                        </p>
                                        <p class="flex items-center text-sm text-gray-700">
                                            <MapPinIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                                                        aria-hidden="true"/>
                                            <span class="truncate">{{ `${patient?.address}, ${patient?.city}` }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 z-10"
                                        @click="makeAppointment"
                                >
                                    <CalendarDaysIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true"/>
                                    Zakaži termin
                                </button>

                                <inertia-link :href="route('patients.show', {slug: patient.slug})"
                                              class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 z-10"
                                >
                                    <UserIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true"/>
                                    Karton Pacijenta
                                </inertia-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Pagination :data="patients"/>

        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm} from '@inertiajs/vue3';
import {
    CalendarDaysIcon,
    UserIcon,
    UserPlusIcon,
    MapPinIcon,
    PhoneIcon,
    MagnifyingGlassIcon
} from '@heroicons/vue/24/solid'
import Pagination from "@/Pages/Partials/Pagination.vue";
import {ref, watch} from "vue";
import debounce from 'lodash.debounce'

const props = defineProps({
    patients: true,
})

const loading = ref(false)

const makeAppointment = () => {
    console.log('termin je usesno zakazan')
}

const form = useForm({
    keyword: null,
})

const search = debounce(() => {
    loading.value = true
    form.get(route('dashboard', {keyword: form.keyword}), {
        preserveState: true,
        onFinish: () => {
            loading.value = false
        }
    })
}, 400)

watch(() => form.keyword, (value) => {
    search()
})

const addPatient = () => {
    console.log('added a new patient')
}
</script>

