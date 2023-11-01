<template>
    <input class="placeholder-text-gray-500 rounded-md border-none bg-slate-100 text-base focus:ring-slate-300" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input" :placeholder="placeholder" />
</template>

<script setup>
import { onMounted, ref } from "vue"

defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    }
})

defineEmits(["update:modelValue"])

const input = ref(null)

onMounted(() => {
    if (input.value.hasAttribute("autofocus")) {
        input.value.focus()
    }
})

defineExpose({ focus: () => input.value.focus() })
</script>
