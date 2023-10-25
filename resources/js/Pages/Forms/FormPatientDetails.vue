<template>
    <form @submit.prevent="submit" class="grid gap-4 sm:grid-cols-2">
        <FieldInput v-model="form.first_name" name="first_name" placeholder="Ime pacijenta..." label="Ime i prezime" :error="form?.errors?.first_name">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" fill="white" />
                    <path
                        d="M12.3569 8.19036C12.982 7.56523 13.3332 6.71739 13.3332 5.83333C13.3332 4.94928 12.982 4.10143 12.3569 3.47631C11.7317 2.85119 10.8839 2.5 9.99984 2.5C9.11578 2.5 8.26794 2.85119 7.64281 3.47631C7.01769 4.10143 6.6665 4.94928 6.6665 5.83333C6.6665 6.71739 7.01769 7.56523 7.64281 8.19036C8.26794 8.81548 9.11578 9.16667 9.99984 9.16667C10.8839 9.16667 11.7317 8.81548 12.3569 8.19036Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M5.87505 13.3752C6.96901 12.2812 8.45274 11.6667 9.99984 11.6667C11.5469 11.6667 13.0307 12.2812 14.1246 13.3752C15.2186 14.4692 15.8332 15.9529 15.8332 17.5H4.1665C4.1665 15.9529 4.78109 14.4692 5.87505 13.3752Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldInput>
        <FieldInput v-model="form.last_name" name="last_name" placeholder="Prezime pacijenta..." label="Prezime" :hide-label="true" :error="form?.errors?.last_name" />
        <FieldInput v-model="form.phone" name="phone" placeholder="Telefon pacijenta..." label="Broj telefona" :error="form?.errors?.phone">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldInput>
        <FieldInput v-model="form.email" name="email" placeholder="Email pacijenta..." label="Email" :error="form?.errors?.email">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.5 6.66667L9.075 11.05C9.34888 11.2327 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2327 10.925 11.05L17.5 6.66667M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83334C17.5 5.39131 17.3244 4.96739 17.0118 4.65483C16.6993 4.34227 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34227 2.98816 4.65483C2.67559 4.96739 2.5 5.39131 2.5 5.83334V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldInput>
        <FieldInput v-model="form.city" name="city" label="Grad" placeholder="Grad..." :error="form?.errors?.city">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.7143 13.8808L11.1785 17.4167C11.0239 17.5715 10.8402 17.6942 10.6381 17.778C10.436 17.8618 10.2194 17.9049 10.0006 17.9049C9.78179 17.9049 9.56515 17.8618 9.36303 17.778C9.16092 17.6942 8.9773 17.5715 8.82267 17.4167L5.286 13.8808C4.35368 12.9485 3.71878 11.7606 3.46157 10.4674C3.20437 9.17419 3.33641 7.83376 3.841 6.61561C4.3456 5.39745 5.20008 4.35628 6.2964 3.62376C7.39272 2.89123 8.68164 2.50024 10.0002 2.50024C11.3187 2.50024 12.6076 2.89123 13.7039 3.62376C14.8003 4.35628 15.6547 5.39745 16.1593 6.61561C16.6639 7.83376 16.796 9.17419 16.5388 10.4674C16.2816 11.7606 15.6466 12.9485 14.7143 13.8808V13.8808Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86774 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 10 6.66667C9.33696 6.66667 8.70107 6.93006 8.23223 7.3989C7.76339 7.86774 7.5 8.50363 7.5 9.16667C7.5 9.82971 7.76339 10.4656 8.23223 10.9344C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldInput>
        <FieldInput v-model="form.address" name="address" placeholder="Ulica i broj" :hide-label="true" label="Ulica i broj" :error="form?.errors?.address" />
        <FieldDatePicker v-model="form.dob" name="dob" label="Datum Rođenja" :error="form?.errors?.dob">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldDatePicker>
        <FieldSelect v-model="form.sms" :items="{ 0: 'NE', 1: 'DA' }" name="sms" label="SMS notifikacije" :error="form?.errors?.sms">
            <template #icon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 15H10.0083M6.66667 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0118C14.8244 16.6993 15 16.2754 15 15.8333V4.16667C15 3.72464 14.8244 3.30072 14.5118 2.98816C14.1993 2.67559 13.7754 2.5 13.3333 2.5H6.66667C6.22464 2.5 5.80072 2.67559 5.48816 2.98816C5.17559 3.30072 5 3.72464 5 4.16667V15.8333C5 16.2754 5.17559 16.6993 5.48816 17.0118C5.80072 17.3244 6.22464 17.5 6.66667 17.5Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </FieldSelect>

        <div class="mt-2 flex flex-col-reverse items-end sm:col-span-2 sm:flex-row">
            <button v-if="edit" type="button" @click="$emit('delete')" class="flex items-center space-x-1 text-red-500 hover:underline sm:mr-auto">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                        stroke="#E24D4D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span>Izbriši pacijenta</span>
            </button>
            <button
                type="submit"
                :class="[
                    loading ? 'opacity-25' : '',
                    'focus-visible:ring-ring border-input mb-4 ml-auto inline-flex w-full items-center justify-center space-x-2 rounded-xl border bg-emerald-600 px-6 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:mt-4 sm:w-[200px]'
                ]"
            >
                <svg v-if="!loading" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 7.5V10M10 10V12.5M10 10H12.5M10 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span v-if="!loading">{{ edit ? "Sačuvaj izmene" : "Dodaj pacijenta" }}</span>
                <Loader v-if="loading" class="w-[56px]" />
            </button>
        </div>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3"
import FieldDatePicker from "@/Pages/Fields/FieldDatePicker.vue"
import FieldSelect from "@/Pages/Fields/FieldSelect.vue"
import FieldInput from "@/Pages/Fields/FieldInput.vue"
import { ref } from "vue"
import Loader from "@/Pages/Partials/Loader.vue"

const props = defineProps({
    patient: {
        type: Object,
        required: false
    },
    edit: Boolean
})

const form = useForm({
    _method: "put",
    first_name: props.patient?.first_name || null,
    last_name: props.patient?.last_name || null,
    email: props.patient?.email || null,
    phone: props.patient?.phone || null,
    address: props.patient?.address || null,
    city: props.patient?.city || null,
    dob: props.patient?.dob ? new Date(props.patient.dob) : null,
    sms: props.patient?.sms || 1
})

const emit = defineEmits(["success", "delete"])

const loading = ref(false)

const submit = () => {
    loading.value = true

    form._method = props.edit ? "put" : "post"

    form.post(props.edit ? route("patients.update", { id: props.patient?.id }) : route("patients.store"), {
        preserveScroll: true,
        onSuccess: () => {
            emit("success")
        },
        onFinish: () => {
            loading.value = false
        }
    })
}
</script>
