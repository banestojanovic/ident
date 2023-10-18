<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="$emit('close')">
            <div class="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                <DialogOverlay class="fixed inset-0 bg-white/80 backdrop-blur-sm transition-opacity" />

                <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                <TransitionChild
                    as="template"
                    enter="ease-out duration-200"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-100"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div class="relative inline-block w-full transform rounded-lg border border-gray-300 bg-white px-4 pb-4 pt-5 text-left shadow-lg transition-all sm:my-8 sm:max-w-xl sm:p-6 sm:align-middle">
                        <button type="button" class="absolute right-6 top-6" @click="$emit('close')">
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div>
                            <div class="flex flex-col">
                                <DialogTitle v-if="title" as="h3" class="text-2xl font-semibold leading-6 text-gray-900">
                                    {{ title }}
                                </DialogTitle>
                                <p v-if="subtitle" class="mt-1 text-gray-500">{{ subtitle }}</p>
                                <div class="mt-4">
                                    <slot />
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 flex justify-end sm:mt-6">
                            <button
                                v-if="button?.title"
                                type="button"
                                class="inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                @click="$emit('close')"
                            >
                                {{ button.title }}
                            </button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue"
import { XMarkIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
    open: Boolean,
    title: String,
    subtitle: String,
    button: Object
})
</script>
