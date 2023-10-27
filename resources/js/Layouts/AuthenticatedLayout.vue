<template>
    <div>
        <div class="relative min-h-screen bg-sky-50">
            <nav class="">
                <!-- Primary Navigation Menu -->
                <div class="mx-auto rounded-b-lg bg-white px-8 py-4">
                    <div class="flex h-16 justify-between">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex shrink-0 items-center">
                                <Link :href="route('patients.index')">
                                    <ApplicationLogo class="h-9 fill-current" />
                                </Link>
                            </div>
                        </div>

                        <div class="hidden sm:ml-6 sm:flex sm:items-center">
                            <!-- Settings Dropdown -->
                            <div class="relative ml-3">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <div class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center space-x-4 rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out focus:outline-none">
                                                <figure v-if="$page.props.auth?.photo" class="relative h-10 w-10 overflow-hidden rounded-full">
                                                    <img :src="$page.props.auth.photo" alt="Slika doktora" class="absolute left-0 top-0 h-full w-full object-cover" />
                                                </figure>

                                                <span class="inline-flex flex-col text-left">
                                                    <span class="text-gray-500">{{ $page.props.auth.user.role === 2 ? 'Doktor' : 'Stomatološka sestra'}}</span>
                                                    <span class="text-lg font-medium">{{ $page.props.auth.user.name }}</span>
                                                </span>
                                            </button>
                                        </div>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')">Nalog</DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">Izloguj se</DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
                    <div class="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink :href="route('patients.index')" :active="route().current('patients.index')">Nalog</ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div class="px-4">
                            <div class="text-base font-medium text-gray-800 dark:text-gray-200">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="text-sm font-medium text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')">Nalog</ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">Izloguj se</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow dark:bg-gray-800" v-if="$slots.header">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <div class="">
                    <Tabs />
                    <slot />
                </div>
            </main>
        </div>
    </div>

    <Footer />

    <Notifications />
</template>

<script setup>
import { computed, ref, watch } from "vue"
import Dropdown from "@/Components/Dropdown.vue"
import DropdownLink from "@/Components/DropdownLink.vue"
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue"
import { Link, usePage } from "@inertiajs/vue3"
import Tabs from "@/Pages/Tabs.vue"
import Notifications from "@/Pages/Partials/Notifications.vue"
import ApplicationLogo from "@/Components/ApplicationLogo.vue"
import Footer from "@/Components/Footer.vue"

const props = defineProps({
    type: {
        type: String,
        default: () => "default"
    }
})

const showingNavigationDropdown = ref(false)
</script>
