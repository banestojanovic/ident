<template>
    <div class="mb-6">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Izaberite stranicu</label>
            <select id="tabs" name="tabs"
                    class="block w-full focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block">
            <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Stranice">
                <inertia-link v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href"
                   :class="[tab.current ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-lg font-medium text-center hover:bg-gray-50 focus:z-10']"
                   :aria-current="tab.current ? 'page' : undefined">
                    <span>{{ tab.name }}</span>
                    <span aria-hidden="true"
                          :class="[tab.current ? 'bg-cyan-500' : '', 'absolute inset-x-0 bottom-0 h-1']"/>
                </inertia-link>
            </nav>
        </div>
    </div>
</template>

<script setup>
const tabs = [
    {name: 'Pacijenti', href: route('dashboard'), current: route().current() === 'dashboard' || route().current().indexOf('patient') > -1},
    {name: 'Kalendar', href: route('calendar.show'), current: route().current() === 'calendar.show'},
]

</script>
