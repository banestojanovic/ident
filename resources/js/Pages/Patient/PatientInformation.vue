<template>
    <div class="flex items-start justify-between px-6 sm:px-0">
        <div class="space-y-1">
            <h1 class="text-4xl font-semibold">{{ `${patient?.first_name} ${patient?.last_name}` }}</h1>
            <p v-if="patient?.address" class="text-lg">{{ `${patient?.address || ''}, ${patient?.city || ''}` }}</p>
            <button
                type="button"
                class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-2 py-1 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                @click="() => (editPatientModalOpen = true)"
            >
                Promeni podatke
            </button>
        </div>

        <inertia-link
            :href="route('calendar.show', {patient_id: patient.id})"
            class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-12 py-3 text-xl font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
        >
            Zakaži
        </inertia-link>
    </div>
    <Modal
        :open="editPatientModalOpen"
        title="Promeni podatke"
        subtitle="Promeni podatke pacijenta u bazi podataka"
        @close="
            () => {
                editPatientModalOpen = false
            }
        "
    >
        <FormPatientDetails :patient="patient" :edit="true" @success="() => editPatientModalOpen = false" @delete="() => {
            editPatientModalOpen = false
            confirmDialogOpen = true
        }" />
    </Modal>
    <ConfirmDialog
        :open="confirmDialogOpen"
        @confirm="handleDeleteRecord"
        @cancel="
            () => {
                confirmDialogOpen = false
                editPatientModalOpen = true
            }
        "
        title="Izbrišite karton"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."
    />
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/Pages/Partials/Modal.vue"
import FormPatientDetails from "@/Pages/Forms/FormPatientDetails.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm } from "@inertiajs/vue3"

const props = defineProps({
    patient: true
})

const editPatientModalOpen = ref(false)
const confirmDialogOpen = ref(false)

const deletePatientForm = useForm({
    _method: "delete"
})

const handleDeleteRecord = () => {
    deletePatientForm.post(route("patients.delete", { id: props.patient.id }), {
        preserveState: false,
        onSuccess: () => {
            editPatientModalOpen.value = false
            confirmDialogOpen.value = false
        }
    })
}
</script>
