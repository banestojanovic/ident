<template>
    <div class="mt-6">
        <nav class="relative z-0 grid grid-cols-2 gap-10" aria-label="Stranice">
            <inertia-link
                v-for="(tab, tabIdx) in tabs"
                :key="tab.name"
                :href="tab.href"
                :class="[
                    tab.current ? 'rounded-xl rounded-b-none bg-white text-gray-900' : 'mb-4 items-center h-20 rounded-xl bg-blue-100 text-sky-700',
                    'group relative flex min-w-0 flex-1 space-x-3 overflow-hidden px-8 py-4 text-xl font-medium focus:z-10'
                ]"
                :aria-current="tab.current ? 'page' : undefined"
            >
                <svg v-if="tabIdx !== 1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H14M10 6V5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V6M10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6M9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12C11 11.4696 10.7893 10.9609 10.4142 10.5858C10.0391 10.2107 9.53043 10 9 10C8.46957 10 7.96086 10.2107 7.58579 10.5858C7.21071 10.9609 7 11.4696 7 12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14ZM9 14C10.306 14 11.417 14.835 11.83 16M9 14C8.37938 13.9998 7.77397 14.1921 7.26715 14.5502C6.76032 14.9084 6.37701 15.4149 6.17 16M15 11H18M15 15H17"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <svg v-if="tabIdx === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span class="inline-flex flex-col leading-none">
                    <span v-if="tab.current" class="text-sm font-light text-green-700">Aktivno</span>
                    <span>{{ tab.name }}</span>
                </span>
            </inertia-link>
        </nav>
    </div>
</template>

<script setup>
const tabs = [
    { name: "Pacijenti", href: route("patients.index"), current: route().current() === "patients.index" || route().current().indexOf("patient") > -1 },
    { name: "Kalendar", href: route("calendar.show"), current: route().current() === "calendar.show" }
]
</script>
