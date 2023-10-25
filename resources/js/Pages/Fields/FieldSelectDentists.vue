<template>
    <div>
        <label class="relative mb-2 flex text-base sm:mt-px sm:pt-3">
            <span>
                {{ label }}
                <span v-if="required" class="relative -left-1 -top-1 text-red-500">*</span>
            </span>
        </label>
        <div class="mt-1 sm:col-span-2 sm:mt-0">
            <Listbox :multiple="multiple || false" :modelValue="modelValue" @update:modelValue="(value) => $emit('update:modelValue', value)" by="id">
                <div class="relative mt-1">
                    <ListboxButton
                        class="relative h-10 w-full cursor-default rounded-md bg-stone-100 py-2 pl-4 pr-10 text-left text-base focus:outline-none focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span v-if="modelValue" class="block truncate text-base">{{ props.multiple ? modelValue.map((item) => item.name).join(", ") : modelValue.name }}</span>
                        <span v-if="!modelValue && placeholder" class="block truncate text-base text-gray-500">{{ placeholder }}</span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /></span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <ListboxOptions class="absolute z-10 -mt-10 max-h-[500px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                            <ListboxOption v-slot="{ active, selected }" v-for="item in items" :key="item?.id" :value="item" as="template">
                                <li :class="[active ? 'bg-sky-100 text-gray-900' : 'text-gray-900', 'relative cursor-pointer select-none px-4 py-2']">
                                    <div class="inline-flex items-center space-x-4 rounded-md border border-transparent py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out focus:outline-none">
                                        <figure v-if="item?.photo" class="relative h-10 w-10 overflow-hidden rounded-full">
                                            <img :src="item.photo" alt="Slika doktora" class="absolute left-0 top-0 h-full w-full object-cover" />
                                        </figure>

                                        <span class="inline-flex flex-col text-left">
                                            <span class="text-gray-500">{{ item?.role == 2 ? 'Doktor' : 'Stomatološka sestra'}}</span>
                                            <span class="text-lg font-medium">{{ item?.name }}</span>
                                        </span>
                                    </div>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600"><CheckIcon class="h-5 w-5" aria-hidden="true" /></span>
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
import { watch } from "vue"

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
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
    modelValue: {
        type: [Object, null],
        required: true
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
