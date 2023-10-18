<template>
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <div class="flex items-center justify-between border-b p-4">
            <h3 class="text-xl font-semibold">Karton</h3>
            <button
                type="button"
                class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                @click="addRecord()"
            >
                Dodaj karton
            </button>
        </div>
        <ul role="list" class="divide-y divide-gray-200">
            <li v-for="(record, idx) in patient?.records" :key="record.id">
                <div :class="[highlightFirstRecord && idx === 0 ? 'bg-gray-100' : '', 'grid grid-cols-1 px-4 py-4 transition-all sm:grid-cols-3 sm:px-6 lg:grid-cols-6']">
                    <div class="mt-2 sm:mt-0">
                        <p class="truncate text-lg font-medium">
                            {{ new Date(record?.date).toLocaleDateString(dateOptions.locale, dateOptions.options) }}
                        </p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <p class="text-lg text-gray-900">{{ record?.tooth }}</p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.diagnosis }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.therapy?.name }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-lg text-gray-500">{{ record?.description }}</div>
                    </div>
                    <div class="mt-2 text-lg font-medium lg:mt-0 lg:text-right">
                        <button type="button" class="text-indigo-600 hover:underline" @click="() => handleEditRecord(record)">Izmeni</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <Modal
        :open="recordModalOpen"
        title="Dodaj karton"
        subtitle="Dodaj novi karton za pacijenta"
        @close="
            () => {
                recordModalOpen = false
                edit = null
            }
        "
    >
        <FormPatientRecord
            :patient="patient"
            :edit="edit"
            @success="handleNewRecord"
            @delete="
                (id) => {
                    recordModalOpen = false
                    confirmDialogOpen = true
                    deleteRecordId = id
                }
            "
        />
    </Modal>
    <ConfirmDialog
        :open="confirmDialogOpen"
        @confirm="handleDeleteRecord"
        @cancel="
            () => {
                confirmDialogOpen = false
                recordModalOpen = true
                deleteRecordId = false
            }
        "
        title="Izbrišite karton"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."
    />
</template>

<script setup>
import Modal from "@/Pages/Partials/Modal.vue"
import { ref } from "vue"
import { dateOptions } from "@/helpers.js"
import FormPatientRecord from "@/Pages/Forms/FormPatientRecord.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm } from "@inertiajs/vue3"
import { useGlobalStore } from "@/stores.js"

const props = defineProps({
    patient: true
})

const loading = ref(false)
const edit = ref(null)
const deleteRecordId = ref(null)
const recordModalOpen = ref(false)
const confirmDialogOpen = ref(false)
const highlightFirstRecord = ref(false)
const store = useGlobalStore()


const addRecord = () => {
    recordModalOpen.value = true
}

const handleNewRecord = () => {
    recordModalOpen.value = false
    highlightFirstRecord.value = true
    edit.value = null

    setTimeout(() => {
        highlightFirstRecord.value = false
    }, 3000)
}

const handleEditRecord = (record) => {
    recordModalOpen.value = true
    edit.value = record
}

const deleteForm = useForm({
    _method: "delete"
})

const handleDeleteRecord = () => {
    loading.value = true
    deleteForm.post(route("records.delete", { id: deleteRecordId.value?.id }), {
        onFinish: () => {
            recordModalOpen.value = false
            confirmDialogOpen.value = false
            loading.value = false
        }
    })
}
</script>
