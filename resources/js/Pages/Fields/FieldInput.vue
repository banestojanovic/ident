<template>
    <div>
        <label :for="name" :class="[{ 'sr-only': hideLabel }, 'mb-3 flex space-x-1 sm:mt-px sm:pt-2']">
            <slot name="icon" />
            <span>{{ label }}</span>
        </label>
        <div :class="[hideLabel ? 'mt-1 sm:col-span-2 sm:mt-11' : 'mt-1 sm:col-span-2 sm:mt-0', additional?.fieldClass ? additional?.fieldClass : '']">
            <input
                :value="modelValue"
                :id="name"
                :name="name"
                autocomplete="off"
                class="block w-full rounded-md border-0 bg-slate-100 px-4 placeholder-gray-400 focus:border-slate-300 focus:ring-slate-300"
                :placeholder="placeholder"
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
    },
    placeholder: {
        type: String,
        required: false
    }
})
</script>
