<template>
    <div>
        <label :for="name" :class="[{ 'sr-only': hideLabel }, 'mb-3 flex space-x-1 sm:mt-px sm:pt-2']">
            <slot name="icon" />
            <span>{{ label }}</span>
        </label>
        <div class="mt-1 sm:col-span-2 sm:mt-0">
            <div class="relative flex max-w-lg justify-center rounded-md bg-slate-100 border border-dashed border-gray-300 px-6 pb-6 pt-5">
                <input
                    id="photo"
                    name="photo"
                    type="file"
                    ref="el"
                    class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
                    accept="image/*"
                    @change="updateImages"
                    multiple
                    @input="($e) => $emit('update:modelValue', $e.target.files)"
                />
                <figure v-for="(image, index) in images" class="relative mx-px h-20 w-20 cursor-pointer overflow-hidden">
                    <button type="button" @click="removeImage(index)" class="absolute z-10 flex h-full w-full items-center justify-center rounded-lg bg-black opacity-0 transition hover:opacity-50">
                        <component :is="TrashIcon" class="w-10 text-white" />
                    </button>
                    <img :src="image" alt="Snimak zuba" class="absolute h-full w-full rounded object-cover" />
                </figure>
                <div v-if="images.length === 0" class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                        <div class="relative cursor-pointer rounded-md font-medium text-slate-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Klikni da dodaš snimak</span>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG</p>
                </div>
            </div>
            <p v-if="error" class="ml-2 mt-1 text-xs text-red-500">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { TrashIcon } from "@heroicons/vue/24/solid"

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    hideLabel: {
        type: Boolean,
        required: false,
        default: () => false
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [FileList, Array],
        required: false
    },
    value: {
        type: [FileList, Array],
        required: false
    },
    required: {
        type: Boolean,
        required: false
    },
    error: {
        type: String,
        required: false
    }
})

const emit = defineEmits(["update:modelValue"])

let el = ref(null)
let images = ref([])

const updateImages = (e) => {
    const files = el.value.files

    if (files) {
        Array.from(files).forEach((file) => {
            images.value.push(URL.createObjectURL(file))
        })
    }
}

const removeImage = (image) => {
    images.value.splice(image, 1)
    let fileImages = props.value ? Array.from(props.value) : []
    fileImages.splice(image, 1)
    emit("update:modelValue", fileImages)
}
</script>
