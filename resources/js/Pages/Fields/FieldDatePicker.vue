<template>
    <div>
        <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            <span>
                {{ label }}
                <span v-if="required" class="relative -left-1 -top-1 text-red-500">*</span>
            </span>
        </label>
        <div class="relative mt-1 sm:col-span-2">
            <div class="flex items-center space-x-2">
                <VueDatePicker :model-value="modelValue" locale="sr-Latn-SR" format="d/MM/YYY" :auto-apply="true" :enable-time-picker="false" @update:model-value="handleDate" class="shadow-sm" />
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
    }
})

const emit = defineEmits(["update:modelValue"])

const handleDate = (modelData) => {
    emit("update:modelValue", modelData)
}
</script>
