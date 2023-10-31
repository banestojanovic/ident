<template>
    <div class="col-span-9 overflow-hidden mt-0.5">
        <div class="flex min-w-0 flex-1 bg-stone-50 mb-0.5 px-4 py-2 sm:px-6">
            <div class="min-w-0 flex-1 md:grid md:grid-cols-5 md:gap-4">
                <div class="text-xs font-light uppercase text-gray-500">Datum dolaska</div>
                <div class="hidden text-xs font-light uppercase text-gray-500 md:block">Zub</div>
                <div class="hidden text-xs font-light uppercase text-gray-500 md:block">Dijagnoza</div>
                <div class="hidden text-xs font-light uppercase text-gray-500 md:block">Terapija</div>
                <div class="hidden text-xs font-light uppercase text-gray-500 md:block">Opis</div>
            </div>
            <div class="mr-28 text-xs font-light uppercase text-gray-500">Akcija</div>
        </div>
        <ul role="list" class="divide-y divide-gray-200 bg-white overflow-y-auto max-h-[540px]">
            <li v-for="(record, idx) in patient?.records" :key="record.id" class="py-2">
                <div :class="[highlightFirstRecord && idx === 0 ? 'bg-gray-100' : '', 'grid grid-cols-1 px-4 py-4 transition-all sm:grid-cols-3 sm:px-6 lg:grid-cols-6']">
                    <div class="flex items-center space-x-2 mt-2 sm:mt-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p class="truncate text-base">
                            {{ new Date(record?.date).toLocaleDateString(dateOptions.locale) }}
                        </p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <p class="text-base text-gray-900">{{ record?.tooth }}</p>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <div class="text-base text-gray-900">{{ record?.diagnosis }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-base text-gray-900">{{ record?.therapy?.name }}</div>
                    </div>
                    <div class="mt-2 lg:mt-0">
                        <div class="text-base text-gray-900">{{ record?.description }}</div>
                    </div>
                    <div class="mt-2 text-base font-medium lg:mt-0 lg:text-right">
                        <button type="button" class="flex items-center space-x-2 text-gray-500 hover:underline" @click="() => handleEditRecord(record)">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.25 3.75H4.5C4.10218 3.75 3.72064 3.90803 3.43934 4.18934C3.15804 4.47064 3 4.85217 3 5.25V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H12.75C13.1478 15 13.5294 14.842 13.8107 14.5607C14.092 14.2794 14.25 13.8978 14.25 13.5V9.75M13.1895 2.6895C13.3279 2.54623 13.4934 2.43196 13.6764 2.35335C13.8594 2.27473 14.0562 2.23335 14.2554 2.23162C14.4546 2.22989 14.6521 2.26785 14.8364 2.34327C15.0208 2.41869 15.1883 2.53007 15.3291 2.67091C15.4699 2.81175 15.5813 2.97922 15.6567 3.16357C15.7322 3.34791 15.7701 3.54543 15.7684 3.7446C15.7666 3.94377 15.7253 4.1406 15.6467 4.32361C15.568 4.50661 15.4538 4.67213 15.3105 4.8105L8.871 11.25H6.75V9.129L13.1895 2.6895Z"
                                    stroke="#737373"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span class="text-sm">Izmeni</span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <Modal
        :open="modalOpen"
        :title="edit ? 'Izmeni karton' : 'Dodaj karton'"
        :subtitle="edit ? 'Uredi podatke kartona pacijenta' : 'Dodaj novi karton za pacijenta'"
        @close="
            () => {
                $emit('closeModal')
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
        title="Izbriši karton"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."
    />
</template>

<script setup>
import Modal from "@/Pages/Partials/Modal.vue"
import { ref, watch } from "vue"
import { dateOptions } from "@/helpers.js"
import FormPatientRecord from "@/Pages/Forms/FormPatientRecord.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm } from "@inertiajs/vue3"
import { useGlobalStore } from "@/stores.js"

const props = defineProps({
    patient: true,
    modalOpen: false,
})

const emit = defineEmits(['closeModal', 'openModal'])

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
    highlightFirstRecord.value = true
    edit.value = null

    setTimeout(() => {
        highlightFirstRecord.value = false
    }, 3000)
}

const handleEditRecord = (record) => {
    emit('openModal')
    edit.value = record
}

const deleteForm = useForm({
    _method: "delete"
})

const handleDeleteRecord = () => {
    loading.value = true
    deleteForm.post(route("records.delete", { id: deleteRecordId.value?.id }), {
        onFinish: () => {
            emit('closeModal')
            confirmDialogOpen.value = false
            loading.value = false
        }
    })
}
</script>
