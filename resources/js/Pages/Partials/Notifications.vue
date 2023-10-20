<template>
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="open" aria-live="assertive" class="pointer-events-none fixed inset-0 bottom-0 left-0 top-auto flex items-center justify-end px-4 py-6 sm:p-6 z-20">

            <div class="flex w-full flex-col items-center space-y-4">
                <div class="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <CheckCircleIcon v-if="notification?.group === 'success'" class="h-6 w-6 text-green-400" aria-hidden="true" />
                                <ExclamationTriangleIcon v-if="notification?.group === 'error'" class="h-6 w-6 text-red-400" aria-hidden="true" />
                            </div>
                            <div class="ml-3 w-0 flex-1">
                                <p v-if="notification?.title" class="text-base font-medium text-gray-900">
                                    {{ notification.title }}
                                </p>
                                <p v-if="notification?.text" class="mt-0.5 text-sm text-gray-500">
                                    {{ notification.text }}
                                </p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button @click="open = false" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -bottom-4 mb-4 h-0.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div class="h-0.5 absolute right-0 rounded-full bg-green-600 dark:bg-green-500 w-full transform translate-x-full transition animate-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from "@heroicons/vue/20/solid/index.js"
import { computed, onMounted, ref, watch } from "vue"
import { usePage } from "@inertiajs/vue3"

const open = ref(false)

const notification = computed(() => {
    return usePage().props.notification
})

onMounted(() => {
    if (notification.value) {
        open.value = true
        setTimeout(() => {
            open.value = false
        }, 3000)
    }
})

watch(
    () => notification.value,
    (value) => {
        if (value) {
            open.value = true
            setTimeout(() => {
                open.value = false
            }, 3000)
        }
    }
)
</script>
