<template>
    <Combobox as="div" :model-value="modelValue" @update:modelValue="(value) => $emit('update:modelValue', value)">
        <ComboboxLabel class="block text-sm font-medium text-gray-700">{{ label }}</ComboboxLabel>
        <div class="relative mt-1">
            <ComboboxButton class="relative flex w-full items-center rounded-r-md focus:outline-none">
                <ComboboxInput
                    class="w-full rounded-md border border-gray-300 bg-white py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    @change="query = $event.target.value"
                    placeholder="Počnite da unosite ime pacijenta"
                    autocomplete="off"
                    :display-value="(person) => (person ? `${person?.first_name} ${person?.last_name}` : '')"
                />
                <ChevronUpDownIcon v-if="!loading" class="absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <LoaderSmall v-if="loading" class="absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400" />
            </ComboboxButton>

            <ComboboxOptions v-if="people?.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="person in people" :key="person.id" :value="person" as="template" v-slot="{ active, selected }">
                    <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <div>
                            <span :class="['block truncate', selected && 'font-semibold']">
                                {{ `${person.first_name} ${person.last_name}` }}
                            </span>
                            <span class="text-xs">{{ `${person?.address} ${person?.city}` }}</span>
                            <span class="text-xs">{{ ` | ${person?.phone}` }}</span>
                        </div>

                        <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
            <p v-if="error" class="ml-2 mt-1 text-xs text-red-500">{{ error }}</p>
        </div>
    </Combobox>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/24/outline"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions } from "@headlessui/vue"
import debounce from "lodash.debounce"
import Loader from "@/Pages/Partials/Loader.vue"
import LoaderSmall from "@/Pages/Partials/LoaderSmall.vue"

const props = defineProps({
    name: String,
    label: String,
    items: Object,
    modelValue: Object,
    error: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['update:modelValue', 'searched'])

const people = ref([])
const query = ref("")
const loading = ref(false)

const search = debounce(() => {
    loading.value = true

    axios.get(route("api.patients.index", { query: query.value })).then((response) => {
        people.value = response.data.patients
        emit('searched', response.data.patients)
        loading.value = false
    })
}, 400)

watch(
    () => query.value,
    (value) => {
        search()
    }
)

onMounted(() => {
    if (props?.items?.length < 1) {
        search()
    } else {
        emit('update:modelValue', props.items)
    }
})
</script>
