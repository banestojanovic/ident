<template>
    <div>
        <label :for="name" :class="[{ 'sr-only': hideLabel }, 'mb-3 flex space-x-2 sm:mt-px sm:pt-2']">
            <slot name="icon" />
            <span>{{ label }}</span>
        </label>
        <div class="relative mt-1 sm:col-span-2">
            <div class="flex items-center space-x-2">
                <VueDatePicker :model-value="modelValue" locale="sr-Latn-SR" format="d/MM/YYY" :auto-apply="true" :enable-time-picker="false" @update:model-value="handleDate" class="block w-full rounded-md border-0 bg-stone-100 placeholder-gray-400 focus:border-stone-300 focus:ring-stone-300" />
            </div>
            <p v-if="error" class="ml-2 mt-1 text-xs text-red-500">{{ error }}</p>
            <p v-if="props.description" class="ml-2 mt-1 text-xs text-gray-500">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup>
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
        type: Date,
        required: false
    },
    required: {
        type: Boolean,
        required: false
    },
    error: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
})

const emit = defineEmits(["update:modelValue"])

const handleDate = (modelData) => {
    emit("update:modelValue", modelData)
}
</script>

<style>
input.dp__pointer {
    background-color: transparent;
    border: 0;
    @apply rounded-lg focus:border-stone-300 focus:ring-stone-300;
}
</style>
