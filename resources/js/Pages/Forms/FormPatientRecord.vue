<template>
    <form @submit.prevent="submit" class="flex flex-col space-y-2">
        <FieldTextarea v-model="form.diagnosis" name="diagnosis" label="Dijagnoza" :error="form?.errors?.diagnosis" />
        <FieldSelectObject v-model="form.therapy" :value="form.therapy" :items="$page.props.global.therapies" name="therapy" label="Odaberi terapiju" :error="form?.errors.therapy" />
        <FieldTextarea v-model="form.description" name="description" label="Opis terapije" :error="form?.errors?.description" class="sm:col-span-2" />

        <div class="mt-2 flex flex-col-reverse items-end sm:col-span-2 sm:flex-row">
            <button v-if="edit" type="button" @click="$emit('delete', {id: form.record })" class="flex items-center space-x-1 text-red-500 hover:underline sm:mr-auto">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                        stroke="#E24D4D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span>Izbriši karton</span>
            </button>

            <button
                type="submit"
                :class="[
                    loading ? 'opacity-25' : '',
                    'focus-visible:ring-ring border-input mb-4 ml-auto inline-flex w-full items-center justify-center space-x-2 rounded bg-emerald-100 px-6 py-2 text-base text-emerald-700 transition-colors hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:mt-4 sm:w-[200px]'
                ]"
            >
                <svg v-if="!loading" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 7.5V10M10 10V12.5M10 10H12.5M10 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                        class="stroke-current"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span v-if="!loading">{{ edit ? "Sačuvaj izmene" : "Dodaj karton" }}</span>
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
    edit: Object,
    tooth: String,
})

const form = useForm({
    patient_id: props.patient.id,
    record: props?.edit?.id || null,
    date: props.edit?.date ? new Date(props.edit?.date) : new Date(),
    tooth: props.tooth,
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
