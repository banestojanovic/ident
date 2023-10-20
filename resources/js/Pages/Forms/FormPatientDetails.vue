<template>
    <form @submit.prevent="submit" class="space-y-2">
        <FieldInput v-model="form.first_name" name="first_name" label="Ime" :error="form?.errors?.first_name" />
        <FieldInput v-model="form.last_name" name="last_name" label="Prezime" :error="form?.errors?.last_name" />
        <FieldInput v-model="form.phone" name="phone" label="Broj telefona" :error="form?.errors?.phone" />
        <FieldInput v-model="form.email" name="email" label="Imejl adresa" :error="form?.errors?.email" />
        <FieldInput v-model="form.address" name="address" label="Address" :error="form?.errors?.address" />
        <FieldInput v-model="form.city" name="city" label="Grad" :error="form?.errors?.city" />
        <FieldDatePicker v-model="form.dob" name="dob" label="Datum Rođenja" :error="form?.errors?.dob" />
        <FieldSelect v-model="form.sms" :items="{ 0: 'NE', 1: 'DA' }" name="sms" label="SMS notifikacije" :error="form?.errors?.sms" />

        <div class="flex items-end">
            <button v-if="edit" type="button" @click="$emit('delete')" class="mr-auto text-red-500 hover:underline">Izbriši pacijenta</button>
            <button
                type="submit"
                :class="[
                    loading ? 'opacity-25' : '',
                    'focus-visible:ring-ring border-input ml-auto mt-4 inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'
                ]"
            >
                <span v-if="!loading">Sačuvaj</span>
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
import FieldSelectObject from "@/Pages/Fields/FieldSelectObject.vue"
import FieldTextarea from "@/Pages/Fields/FieldTextarea.vue"
import { ref } from "vue"
import Loader from "@/Pages/Partials/Loader.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import FieldCheckbox from "@/Pages/Fields/FieldCheckbox.vue"

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
    dob: props.patient?.dob ? new Date(props.patient.dob) : new Date(),
    sms: props.patient?.sms
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
