<template>
    <form @submit.prevent="submit" class="space-y-2">
        <FieldPhoto v-if="!edit" v-model="form.photo" name="photo" label="Dodaj nov snimak" :error="form?.errors?.photo" />
        <FieldInput v-model="form.name" name="name" label="Naslov snimka" :error="form?.errors?.photo" />
        <FieldTextarea v-model="form.description" name="description" label="Dodatni opis" :error="form?.errors?.description" />

        <div class="flex items-end">
            <button v-if="edit" type="button" @click="$emit('delete', {id: form.photo_id })" class="mr-auto text-red-500 hover:underline">Izbriši snimak</button>
            <button
                type="submit"
                :class="[
                    loading ? 'opacity-25' : '',
                    'focus-visible:ring-ring border-input ml-auto mt-4 inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'
                ]"
            >
                <span v-if="!loading">{{ edit ? "Izmeni snimak" : "Dodaj snimak" }}</span>
                <Loader v-if="loading" class="w-[56px]" />
            </button>
        </div>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref } from "vue"
import Loader from "@/Pages/Partials/Loader.vue"
import FieldPhoto from "@/Pages/Fields/FieldPhoto.vue"
import FieldInput from "@/Pages/Fields/FieldInput.vue"
import FieldTextarea from "@/Pages/Fields/FieldTextarea.vue"
import { dateOptions } from "@/helpers.js"

const props = defineProps({
    patient: Object,
    edit: Object
})

const form = useForm({
    patient_id: props.patient.id,
    photo_id: props.edit?.id || null,
    photo: null,
    name: props.edit?.name || `Snimak - ${new Date().toLocaleDateString(dateOptions.locale, dateOptions.options)}`,
    description: props.edit?.description || null
})

const emit = defineEmits(["success"])

const loading = ref(false)

const submit = () => {
    loading.value = true

    form.post(route(props.edit ? "photos.update" : "photos.store"), {
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
