<template>
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <div class="flex items-center justify-between p-4">
            <h3 class="text-xl font-semibold">Snimci</h3>
            <button
                type="button"
                class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border text-base bg-slate-700 bg-transparent px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            >
                Dodaj snimak
            </button>
        </div>
        <ul role="list" class="divide-y divide-gray-200">
            <li v-for="record in patient?.photos" :key="record.id">
                <div class="grid grid-cols-1 px-4 py-4 sm:grid-cols-3 sm:px-6">
                    <div class="mt-2 sm:mt-0">
                        <p class="truncate text-lg font-medium">
                            {{ new Date(record?.created_at).toLocaleDateString(serbianLocale, options) }}
                        </p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <p class="text-lg text-gray-900">{{ record?.tooth }}</p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.diagnosis }}</div>
                        <div class="text-lg text-gray-500">{{ record?.description }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.therapy?.name }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.therapy?.description }}</div>
                    </div>
                    <div class="mt-2 text-lg font-medium lg:mt-0 lg:text-right">
                        <button type="button" class="text-indigo-600 hover:underline">Izmeni</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    patient: true
})

const serbianLocale = "sr-Latn-SR"

const options = {
    year: "numeric",
    month: "long",
    day: "2-digit"
}

console.log(props.patient)
</script>
