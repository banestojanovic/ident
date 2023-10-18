<template>
    <div>
        <label :for="name" class="mb-1 block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{{ label }}</label>
        <div :class="['mt-1 sm:col-span-2 sm:mt-0', additional?.fieldClass ? additional?.fieldClass : '']">
            <textarea
                :value="modelValue"
                :id="name"
                :name="name"
                rows="6"
                class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                @change="
                    ($e) => {
                        $emit('update:modelValue', $e.target.value)
                    }
                "
            />
            <p v-if="error" class="ml-2 mt-1 text-xs text-red-500">{{ error }}</p>
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
        type: String,
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
    additional: {
        type: Object,
        required: false
    }
})
</script>
