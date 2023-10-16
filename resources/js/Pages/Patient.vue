<template>
    <Head title="Pacijent"/>

    <AuthenticatedLayout>
        <div class="">
            <nav class="h-full overflow-y-auto" aria-label="Directory">
                <div v-for="(history, date) in patient.history" :key="date" class="relative">
                    <div
                        class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-lg font-medium text-gray-500">
                        <h3>{{ new Date(date).toLocaleDateString(serbianLocale, options) }}</h3>
                    </div>
                    <ul role="list" class="relative z-0 divide-y divide-gray-200">
                        <li v-for="(visit, idx) in history" :key="visit.id" class="bg-white">
                            <div
                                class="relative px-6 py-5 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                <div class="flex flex-col flex-shrink-0">
                                    <span class="text-gray-400">Dijagnoza </span>
                                    <div class="flex flex-col">
                                        <span>{{ visit.diagnosis }}</span>
                                        <span>{{ visit.description }}</span>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <a href="#" class="focus:outline-none">
                                        <!-- Extend touch target to entire panel -->
                                        <span class="absolute inset-0" aria-hidden="true"/>
                                        <p class="text-sm font-medium text-gray-900">
                                            {{ patient.name }}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm} from '@inertiajs/vue3';

const props = defineProps({
    patient: true,
})

const serbianLocale = "sr-Latn-SR"; // Serbian locale

const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
};

console.log(props.patient.history)
</script>

