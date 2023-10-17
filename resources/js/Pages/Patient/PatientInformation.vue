<template>
    <div class="flex items-start justify-between px-6 sm:px-0">
        <div class="space-y-1">
            <h1 class="text-4xl font-semibold">{{ `${patient?.first_name} ${patient?.last_name}` }}</h1>
            <p class="text-lg">{{ `${patient?.address}, ${patient?.city}` }}</p>
        </div>

        <button
            type="button"
            class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border text-xl bg-slate-700 bg-transparent px-12 py-3 font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
        >
            Zakaži
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    patient: true
})
</script>
