<template>
    <div class="block">
        <nav class="relative grid gap-2 md:grid-cols-2 md:gap-6" aria-label="Stranice">
            <inertia-link
                v-for="(tab, tabIdx) in tabs"
                :key="tab.name"
                :href="tab.href"
                :class="[tab.current ? 'text-gray-900' : 'opacity-50 hover:text-gray-700 hover:opacity-100', 'group relative flex-1 overflow-hidden rounded bg-white px-4 py-28 text-center text-5xl font-bold shadow focus:z-10 md:py-44']"
                :aria-current="tab.current ? 'page' : undefined"
            >
                <span>{{ tab.name }}</span>
            </inertia-link>
        </nav>
    </div>
</template>

<script setup>
const tabs = [
    { name: "Pacijenti", href: route("patients.index"), current: route().current() === "patients" || route().current().indexOf("patient") > -1 },
    { name: "Kalendar", href: route("calendar.show"), current: route().current() === "calendar.show" }
]
</script>
