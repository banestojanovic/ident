<template>
    <div class="bg-white px-4 py-3 flex items-center justify-center sm:justify-between border-t border-gray-200 sm:px-6">
        <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700 text-center sm:text-left">
                    Prikazuje se
                    {{ ' ' }}
                    <span class="font-medium">{{ data.meta.from }}</span>
                    -
                    <span class="font-medium">{{ data.meta.to }}</span>
                    {{ ' ' }}
                    od ukupno
                    {{ ' ' }}
                    <span class="font-medium">{{ data.meta.total }}</span>
                    {{ ' ' }}
                    rezultata
                </p>
            </div>
            <div class="mt-1.5 sm:mt-0">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <template v-for="(link, idx) in data.meta.links" :key="idx">
                        <inertia-link v-if="link.url && link.active" :href="link.url" aria-current="page" class="z-10 bg-cyan-50 border-cyan-500 text-cyan-600 relative inline-flex items-center p-2 sm:px-4 sm:py-2 border text-sm font-medium" v-html="link.label" />
                        <inertia-link v-if="link.url && !link.active" :href="link.url" :class="[{'rounded-l': idx === 0}, {'rounded-r': idx === data.meta.links.length - 1},'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center p-2 sm:px-4 sm:py-2 border text-sm font-medium']" v-html="link.label"/>
                        <span v-if="!link.url && link.label === '...'" class="relative inline-flex items-center p-2 sm:px-4 sm:py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700" v-html="link.label"/>
                    </template>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
    data: true,
})
</script>
