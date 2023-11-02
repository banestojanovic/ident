<template>
    <div class="flex flex-col sm:rounded-tl-none sm:rounded-tr-lg md:flex-row md:items-center md:justify-between md:gap-10">
        <div class="grid w-full grid-cols-1 gap-1 lg:grid-cols-12">
            <div class="flex flex-col space-y-1 bg-white px-10 lg:col-span-9 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0" v-click-outside="onClickOutside">
                <Combobox as="div" class="flex w-full items-center space-x-2" @update:modelValue="form.keyword">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                        <path
                            d="M14 14L10 10M11.3333 6.66667C11.3333 7.2795 11.2126 7.88634 10.9781 8.45252C10.7436 9.01871 10.3998 9.53316 9.9665 9.9665C9.53316 10.3998 9.01871 10.7436 8.45252 10.9781C7.88634 11.2126 7.2795 11.3333 6.66667 11.3333C6.05383 11.3333 5.447 11.2126 4.88081 10.9781C4.31462 10.7436 3.80018 10.3998 3.36683 9.9665C2.93349 9.53316 2.58975 9.01871 2.35523 8.45252C2.12071 7.88634 2 7.2795 2 6.66667C2 5.42899 2.49167 4.242 3.36683 3.36683C4.242 2.49167 5.42899 2 6.66667 2C7.90434 2 9.09133 2.49167 9.9665 3.36683C10.8417 4.242 11.3333 5.42899 11.3333 6.66667Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <label for="search" class="shrink-0 pr-2 font-medium">Pretraga pacijenata</label>

                    <div class="relative w-full">
                        <ComboboxInput
                            :class="[
                                open && patients.length > 0 ? 'rounded-b-none' : '',
                                'focus:ring-0.5 block w-full rounded-lg border-0 bg-[#EBF2F5] px-6 py-3 leading-5 text-gray-900 placeholder-[#878787] focus:border-white focus:outline-none focus:ring-white focus:ring-offset-1 focus:ring-offset-cyan-600'
                            ]"
                            placeholder="Klikni ovde i počni da kucaš pacijentovo ime, broj telefona ili adresu..."
                            autocomplete="off"
                            @change="form.keyword = $event.target.value"
                            @click="open = true"
                        />

                        <LoaderSmall v-if="loading" class="absolute -right-10 top-4 text-gray-600" />

                        <TransitionRoot :show="open" as="div" class="border-b-rounded absolute z-10 mt-0.5 w-full rounded-b-xl bg-white shadow-search">
                            <TransitionChild>
                                <ComboboxOptions v-if="!loading && patients.length > 0" static class="max-h-96 scroll-py-3 overflow-y-auto">
                                    <ComboboxOption v-for="item in patients" :key="item.id" :value="item" as="template" v-slot="{ active }">
                                        <li :class="['flex cursor-pointer select-none', active && 'bg-[#F8FBFD]']">
                                            <inertia-link :href="route('patients.show', { slug: item.slug })" class="flex-auto px-6 py-3">
                                                <div class="flex items-center justify-between">
                                                    <div>
                                                        <p :class="['text-base font-medium', active ? 'text-gray-900' : 'text-gray-900']">{{ item.first_name }} {{ item.last_name }}</p>
                                                        <p :class="['text-sm', active ? 'text-gray-700' : 'text-gray-500']">
                                                            {{ `${item.address}, ${item.city}` }}
                                                        </p>
                                                    </div>
                                                    <span class="pr-4">{{ item?.phone }}</span>
                                                </div>
                                            </inertia-link>
                                        </li>
                                    </ComboboxOption>
                                </ComboboxOptions>
                            </TransitionChild>
                        </TransitionRoot>
                    </div>
                </Combobox>
            </div>
            <button
                type="button"
                class="focus-visible:ring-ring flex w-full items-center justify-center space-x-2 bg-red-200 px-4 py-9 text-sm text-red-700 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:col-span-3"
                @click="() => (newPatientModal = true)"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 6.75V9V6.75ZM13.5 9V11.25V9ZM13.5 9H15.75H13.5ZM13.5 9H11.25H13.5ZM9.75 5.25C9.75 6.04565 9.43393 6.80871 8.87132 7.37132C8.30871 7.93393 7.54565 8.25 6.75 8.25C5.95435 8.25 5.19129 7.93393 4.62868 7.37132C4.06607 6.80871 3.75 6.04565 3.75 5.25C3.75 4.45435 4.06607 3.69129 4.62868 3.12868C5.19129 2.56607 5.95435 2.25 6.75 2.25C7.54565 2.25 8.30871 2.56607 8.87132 3.12868C9.43393 3.69129 9.75 4.45435 9.75 5.25V5.25ZM2.25 15C2.25 13.8065 2.72411 12.6619 3.56802 11.818C4.41193 10.9741 5.55653 10.5 6.75 10.5C7.94347 10.5 9.08807 10.9741 9.93198 11.818C10.7759 12.6619 11.25 13.8065 11.25 15V15.75H2.25V15Z"
                        class="stroke-red-700"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span class="uppercase">Dodaj novog pacijenta</span>
            </button>
        </div>
    </div>

    <Modal
        :open="newPatientModal"
        title="Dodaj pacijenta"
        subtitle="Unesi podatke novog pacijenta u bazu podataka"
        type="big"
        @close="
            () => {
                newPatientModal = false
            }
        "
    >
        <FormPatientDetails :edit="false" @success="() => (newPatientModal = false)" />
    </Modal>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref, watch } from "vue"
import debounce from "lodash.debounce"
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, TransitionChild, TransitionRoot } from "@headlessui/vue"
import LoaderSmall from "@/Pages/Partials/LoaderSmall.vue"
import Modal from "@/Pages/Partials/Modal.vue"
import FormPatientDetails from "@/Pages/Forms/FormPatientDetails.vue"

const loading = ref(false)
const newPatientModal = ref(false)
const patients = ref([])
const open = ref(false)

const form = useForm({
    keyword: ""
})

const search = debounce(() => {
    loading.value = true
    axios.get(route("api.patients.index", { query: form.keyword })).then((response) => {
        patients.value = response?.data?.patients || []
        loading.value = false
    })
}, 400)

watch(
    () => form.keyword,
    (value) => {
        search("keyword")
    }
)

const onClickOutside = () => {
    open.value = false
}
</script>
