<template>
    <div>
        <label class="relative flex text-sm font-medium text-gray-700 sm:mt-px sm:pt-3">
            <span>
                {{ label }}
                <span v-if="required" class="relative -left-1 -top-1 text-red-500">*</span>
            </span>
        </label>
        <div class="mt-1 sm:col-span-2 sm:mt-0">
            <Listbox :multiple="multiple || false" :modelValue="value" @update:modelValue="(value) => $emit('update:modelValue', value)" by="id">
                <div class="relative mt-1">
                    <ListboxButton
                        class="relative h-10 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span v-if="value" class="block truncate">{{ props.multiple ? value.map((item) => item.name).join(", ") : value.name }}</span>
                        <span v-if="value?.length === 0" class="block truncate text-gray-400">{{ label }}</span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /></span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <ListboxOption v-slot="{ active, selected }" v-for="item in items" :key="item?.id" :value="item" as="template">
                                <li :class="[active ? 'bg-red-100 text-red-900' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-10 pr-4']">
                                    <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ item?.name }}</span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600"><CheckIcon class="h-5 w-5" aria-hidden="true" /></span>
                                    <span v-if="item?.description" class="text-sm text-gray-500">{{ item.description }}</span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
                <p v-if="props.description" class="mt-2 text-sm text-gray-500">{{ props.description }}</p>
            </Listbox>
            <p v-if="error" class="ml-2 mt-1 text-xs text-red-500">{{ error }}</p>
            <div v-if="multiple && value.length > 0" class="mt-0.5 flex flex-wrap items-center space-x-0.5">
                <button
                    type="button"
                    v-for="item in value"
                    :key="item.id"
                    class="mt-0.5 flex items-center justify-center space-x-2 rounded bg-slate-100 py-1 pl-3 pr-2 text-xs text-gray-500 hover:bg-gray-200"
                    @click="
                        () =>
                            $emit(
                                'update:modelValue',
                                value.filter((el) => el.id !== item.id)
                            )
                    "
                >
                    <span>{{ item.name }}</span>
                    <XMarkIcon class="h-3 w-3" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { InformationCircleIcon, CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue"

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    items: {
        type: Object,
        required: true,
        default: []
    },
    value: {
        type: Object,
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
    multiple: {
        type: Boolean,
        required: false
    },
    description: {
        type: String,
        required: false
    }
})
</script>
