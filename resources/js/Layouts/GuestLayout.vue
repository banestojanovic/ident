<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue"
import { Link } from "@inertiajs/vue3"
</script>

<template>
    <div class="flex min-h-screen flex-col items-center justify-center bg-[#EBF2F5] pt-6 sm:pt-0">
        <div class="w-full sm:max-w-[500px] sm:rounded-lg">
            <Link href="/">
                <ApplicationLogo class="h-10 fill-current" />
            </Link>
            <div class="mt-6 w-full bg-white p-10 sm:rounded-lg">
                <slot />
            </div>
        </div>
    </div>
</template>
