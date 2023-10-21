<template>
    <div>
        <label :for="name" class="mb-1 block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{{ label }}</label>
        <div :class="['mt-1 sm:col-span-2 sm:mt-0', additional?.fieldClass ? additional?.fieldClass : '']">
            <select
                :value="modelValue"
                :id="name"
                :name="name"
                class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                @change="
                    ($e) => {
                        $emit('update:modelValue', $e.target.value)
                    }
                "
            >
                <option v-for="(value, idx) in items" :key="idx" :value="idx">{{ type === "dentist" && parseInt(idx, 10) !== 0 ? "dr" : ""}} {{ value }}</option>
            </select>
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
    items: {
        type: Object,
        required: true,
        default: []
    },
    value: {
        type: [String, Number, Object],
        required: false
    },
    modelValue: {
        type: [String, Number, Object],
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
    },
    type: {
        required: false,
    }
})
</script>
