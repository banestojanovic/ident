<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label class="block text-base mb-2">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
