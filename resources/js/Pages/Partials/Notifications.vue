<template>
    <NotificationGroup group="success">
        <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
            <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Notification
                    v-slot="{ notifications }"
                    enter-active-class="transform ease-out duration-300 transition"
                    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div  v-for="notification in notifications"
                          :key="notification.id"  class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                                </div>
                                <div class="ml-3 w-0 flex-1">
                                    <p v-if="notification?.title" class="text-base font-medium text-gray-900">{{ notification.title }}</p>
                                    <p v-if="notification?.text" class="mt-0.5 text-sm text-gray-500">{{ notification.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
    <NotificationGroup group="error">
        <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
            <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Notification
                    v-slot="{ notifications }"
                    enter-active-class="transform ease-out duration-300 transition"
                    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div  v-for="notification in notifications"
                          :key="notification.id"  class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <ExclamationTriangleIcon class="h-6 w-6 text-red-400" aria-hidden="true" />
                                </div>
                                <div class="ml-3 w-0 flex-1">
                                    <p v-if="notification?.title" class="text-base font-medium text-gray-900">{{ notification.title }}</p>
                                    <p v-if="notification?.text" class="mt-0.5 text-sm text-gray-500">{{ notification.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
</template>
<script setup>
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/20/solid/index.js"

const props = defineProps({
    show: Boolean,
    title: String,
    subtitle: String,
})
</script>
