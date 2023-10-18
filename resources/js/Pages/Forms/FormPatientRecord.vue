<template>
    <form @submit.prevent="submit" class="space-y-2">
        <FieldDatePicker v-model="form.date" :value="form.date" name="date" label="Izaberi datum" :error="form?.errors?.date" />
        <FieldSelect v-model="form.tooth" :items="$page.props.global.teeth" name="tooth" label="Izaberi zub (FDI)" :error="form?.errors?.tooth" />
        <FieldInput v-model="form.diagnosis" name="diagnosis" label="Upiši dijagnozu" :error="form?.errors?.diagnosis" />
        <FieldSelectObject v-model="form.therapy" :value="form.therapy" :items="$page.props.global.therapies" name="therapy" label="Izaberi terapiju" :error="form?.errors.therapy" />
        <FieldTextarea v-model="form.description" name="description" label="Dodatne informacije" :error="form?.errors?.description" />

        <div class="flex items-end">
            <button type="button" @click="$emit('delete', {id: form.record })" class="mr-auto text-red-500 hover:underline">Izbriši karton</button>
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

const props = defineProps({
    patient: Object,
    edit: Object
})

const form = useForm({
    patient_id: props.patient.id,
    record: props?.edit?.id || null,
    date: props.edit?.date ? new Date(props.edit?.date) : new Date(),
    tooth: props.edit?.tooth || null,
    diagnosis: props.edit?.diagnosis || null,
    therapy: props.edit?.therapy || null,
    description: props.edit?.description || null
})

const emit = defineEmits(["success", "delete"])

const loading = ref(false)

const submit = () => {
    loading.value = true

    form.post(route(props.edit ? "records.update" : "records.store"), {
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
