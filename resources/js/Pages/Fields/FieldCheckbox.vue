<template>
    <div class="relative flex items-center pt-4">
        <input :id="name" :name="name" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" v-model="model" />
        <label :for="name" class="ml-2 block text-sm font-medium text-gray-900">
            {{ label }}
            <span v-if="error" class="absolute -bottom-3.5 left-6 text-xs font-medium text-red-500">{{ error }}</span>
        </label>
    </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        default: "text"
    },
    modelValue: {
        type: [Array, Boolean, Number],
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
    autocomplete: {
        type: String,
        required: false
    }
})

const emit = defineEmits(["update:modelValue"])

const model = computed({
    get() {
        return this.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    }
})

console.log(props.modelValue)
</script>
