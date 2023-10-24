<template>
    <form @submit.prevent="submit" class="space-y-2">
        <FieldSelectDentists v-model="form.dentist_id" type="dentist" :items="$page.props.global.dentists.data" name="dentist_id" label="Izaberite doktora" :error="form.errors?.dentist_id" />
        <FieldCombobox v-if="!newPatient" v-model="form.patient_id" :items="patients" name="patient_id" label="Izaberite pacijenta" :error="form.errors?.patient_id" @searched="(patients) => (searchedValues = patients)" />

        <button
            type="button"
            v-if="searchedValues.length < 1 && !newPatient"
            class="text-red-500 underline"
            @click="
                () => {
                    form.new_patient = true
                    newPatient = true
                }
            "
        >
            Pacijent ne postoji u bazi?
        </button>
        <button
            type="button"
            v-if="searchedValues.length < 1 && newPatient"
            class="pb-2 text-red-500 underline"
            @click="
                () => {
                    form.new_patient = false
                    newPatient = false
                }
            "
        >
            Ponovo pokušaj pretragu?
        </button>

        <div v-if="searchedValues.length < 1 && newPatient" class="border-t pt-2">
            <h5 class="font-semibold">Novi pacijent</h5>
            <FieldInput v-model="form.first_name" name="first_name" label="Ime pacijenta" :error="form.errors?.first_name" />
            <FieldInput v-model="form.last_name" name="last_name" label="Prezime pacijenta" :error="form.errors?.last_name" />
            <FieldInput v-model="form.phone" name="phone" label="Broj telefona pacijenta" :error="form.errors?.phone" />
        </div>

        <div class="flex items-end">
            <button v-if="edit" type="button" @click="$emit('delete', { id: form.record })" class="mr-auto text-red-500 hover:underline">Izbriši karton</button>
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
import { useForm, usePage } from "@inertiajs/vue3"
import FieldSelect from "@/Pages/Fields/FieldSelect.vue"
import { ref } from "vue"
import Loader from "@/Pages/Partials/Loader.vue"
import FieldCombobox from "@/Pages/Fields/FieldCombobox.vue"
import FieldInput from "@/Pages/Fields/FieldInput.vue"
import FieldSelectDentists from "@/Pages/Fields/FieldSelectDentists.vue"

const props = defineProps({
    selectedPatient: {
        type: Object,
        required: false
    },
    date: Object,
    data: {
        type: Object,
        required: false
    },
    edit: {
        type: Boolean,
        required: false
    }
})

const form = useForm({
    date: props.date?.date || null,
    dentist_id: props?.data?.dentist_id || (usePage()?.props.auth?.user?.role === 2 ? usePage()?.props.auth?.user : 0),
    patient_id: props?.data?.patient_id || null,
    new_patient: false,
    first_name: null,
    last_name: null,
    phone: null
})

const emit = defineEmits(["success", "delete"])

const loading = ref(false)
const patients = ref(props.selectedPatient || null)
const newPatient = ref(false)
const searchedValues = ref({})

const submit = () => {
    loading.value = true

    form.post(route("appointments.store"), {
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
