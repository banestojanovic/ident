<template>
    <div class="flex items-center justify-center rounded-b-lg border-t border-gray-200 bg-white px-4 py-3 sm:justify-between sm:px-6">
        <div class="sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-center text-sm text-gray-700 sm:text-left">
                    Prikazuje se
                    {{ " " }}
                    <span class="font-medium">{{ data.meta.from }}</span>
                    -
                    <span class="font-medium">{{ data.meta.to }}</span>
                    {{ " " }}
                    od ukupno
                    {{ " " }}
                    <span class="font-medium">{{ data.meta.total }}</span>
                    {{ " " }}
                    rezultata
                </p>
            </div>
            <div class="mt-1.5 sm:mt-0">
                <nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
                    <template v-for="(link, idx) in data.meta.links" :key="idx">
                        <inertia-link
                            v-if="link.url && link.active"
                            :href="link.url"
                            aria-current="page"
                            class="relative z-10 inline-flex items-center border border-cyan-500 bg-cyan-50 p-2 text-sm font-medium text-cyan-600 sm:px-4 sm:py-2"
                            v-html="link.label"
                        />
                        <inertia-link
                            v-if="link.url && !link.active"
                            :href="link.url"
                            :class="[
                                { 'rounded-l': idx === 0 },
                                { 'rounded-r': idx === data.meta.links.length - 1 },
                                'relative inline-flex items-center border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 sm:px-4 sm:py-2'
                            ]"
                            v-html="link.label"
                        />
                        <span v-if="!link.url && link.label === '...'" class="relative inline-flex items-center border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2" v-html="link.label" />
                    </template>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    data: true
})
</script>
