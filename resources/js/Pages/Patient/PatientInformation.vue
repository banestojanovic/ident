<template>
    <div class="flex items-center justify-between bg-stone-100 px-6 py-4">
        <div class="space-y-1">
            <h1 class="text-2xl font-semibold">{{ `${patient?.first_name} ${patient?.last_name}` }}</h1>
        </div>

        <button type="button" class="ml-auto flex items-center space-x-2 text-gray-500" @click="() => (editPatientModalOpen = true)">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.25 3.75H4.5C4.10218 3.75 3.72064 3.90803 3.43934 4.18934C3.15804 4.47064 3 4.85217 3 5.25V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H12.75C13.1478 15 13.5294 14.842 13.8107 14.5607C14.092 14.2794 14.25 13.8978 14.25 13.5V9.75M13.1895 2.6895C13.3279 2.54623 13.4934 2.43196 13.6764 2.35335C13.8594 2.27473 14.0562 2.23335 14.2554 2.23162C14.4546 2.22989 14.6521 2.26785 14.8364 2.34327C15.0208 2.41869 15.1883 2.53007 15.3291 2.67091C15.4699 2.81175 15.5813 2.97922 15.6567 3.16357C15.7322 3.34791 15.7701 3.54543 15.7684 3.7446C15.7666 3.94377 15.7253 4.1406 15.6467 4.32361C15.568 4.50661 15.4538 4.67213 15.3105 4.8105L8.871 11.25H6.75V9.129L13.1895 2.6895Z"
                    stroke="#737373"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <span class="text-sm">Izmeni podatke o pacijentu</span>
        </button>
    </div>

    <div class="min-w-0 flex-1 py-6 px-10 items-center bg-white md:grid md:grid-cols-5 md:gap-4">
        <div v-if="patient?.phone" class="flex space-x-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative top-1">
                <path
                    d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z"
                    stroke="#3E8C41"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <div class="flex flex-col">
                <span class="text-sm text-gray-500">Telefon</span>
                <span class="truncate tracking-wide">{{ patient.phone }}</span>
            </div>
        </div>
        <div v-if="patient?.address" class="flex space-x-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.7142 13.8808L11.1783 17.4167C11.0237 17.5715 10.8401 17.6942 10.638 17.778C10.4358 17.8618 10.2192 17.9049 10.0004 17.9049C9.78162 17.9049 9.56498 17.8618 9.36286 17.778C9.16075 17.6942 8.97713 17.5715 8.8225 17.4167L5.28583 13.8808C4.35352 12.9485 3.71861 11.7606 3.4614 10.4674C3.2042 9.17419 3.33624 7.83376 3.84083 6.61561C4.34543 5.39745 5.19991 4.35628 6.29623 3.62376C7.39255 2.89123 8.68147 2.50024 10 2.50024C11.3185 2.50024 12.6074 2.89123 13.7038 3.62376C14.8001 4.35628 15.6546 5.39745 16.1592 6.61561C16.6638 7.83376 16.7958 9.17419 16.5386 10.4674C16.2814 11.7606 15.6465 12.9485 14.7142 13.8808V13.8808Z"
                    stroke="#005C9E"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86774 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 10 6.66667C9.33696 6.66667 8.70107 6.93006 8.23223 7.3989C7.76339 7.86774 7.5 8.50363 7.5 9.16667C7.5 9.82971 7.76339 10.4656 8.23223 10.9344C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344Z"
                    stroke="#005C9E"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div class="flex flex-col">
                <span class="text-sm text-gray-500">Adresa</span>
                <span class="truncate">{{ `${patient?.address}, ${patient?.city || ""}` }}</span>
            </div>
        </div>
        <div class="flex space-x-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 6.66667L9.075 11.05C9.34888 11.2327 9.67075 11.3302 10 11.3302C10.3292 11.3302 10.6511 11.2327 10.925 11.05L17.5 6.66667M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z"
                    stroke="#C892C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div class="flex flex-col">
                <span class="text-sm text-gray-500">Email adresa</span>
                <span class="truncate">{{ patient?.email || 'Nema' }}</span>
            </div>
        </div>
        <div v-if="patient?.dob" class="flex space-x-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" fill="white"/>
                <path d="M12.3571 8.19036C12.9822 7.56523 13.3334 6.71739 13.3334 5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333C6.66675 6.71739 7.01794 7.56523 7.64306 8.19036C8.26818 8.81548 9.11603 9.16667 10.0001 9.16667C10.8841 9.16667 11.732 8.81548 12.3571 8.19036Z" stroke="#DEC361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.87529 13.3752C6.96925 12.2812 8.45299 11.6667 10.0001 11.6667C11.5472 11.6667 13.0309 12.2812 14.1249 13.3752C15.2188 14.4692 15.8334 15.9529 15.8334 17.5H4.16675C4.16675 15.9529 4.78133 14.4692 5.87529 13.3752Z" stroke="#DEC361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div class="flex flex-col">
                <span class="text-sm text-gray-500">Datum rođenja</span>
                <span class="truncate">{{ new Date(patient?.dob).toLocaleDateString(dateOptions.locale, dateOptions.options) }}</span>
            </div>
        </div>
        <div :class="[patient?.sms ? 'text-green-700' : 'text-red-700', 'flex flex/col']">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 15H10.0083M6.66667 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0118C14.8244 16.6993 15 16.2754 15 15.8333V4.16667C15 3.72464 14.8244 3.30072 14.5118 2.98816C14.1993 2.67559 13.7754 2.5 13.3333 2.5H6.66667C6.22464 2.5 5.80072 2.67559 5.48816 2.98816C5.17559 3.30072 5 3.72464 5 4.16667V15.8333C5 16.2754 5.17559 16.6993 5.48816 17.0118C5.80072 17.3244 6.22464 17.5 6.66667 17.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div class="flex flex-col">
                <span class="text-sm text-gray-500">SMS Obaveštenja</span>
                <span>{{ patient?.sms ? "DA" : "NE" }}</span>
            </div>
        </div>
    </div>

    <Modal
        :open="editPatientModalOpen"
        title="Promeni podatke"
        subtitle="Promeni podatke pacijenta u bazi podataka"
        type="big"
        @close="
            () => {
                editPatientModalOpen = false
            }
        "
    >
        <FormPatientDetails
            :patient="patient"
            :edit="true"
            @success="() => (editPatientModalOpen = false)"
            @delete="
                () => {
                    editPatientModalOpen = false
                    confirmDialogOpen = true
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
                editPatientModalOpen = true
            }
        "
        title="Izbriši pacijenta"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj pacijent i svi podaci vezano za njega biti trajno uklonjeni iz baze podataka."
    />
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/Pages/Partials/Modal.vue"
import FormPatientDetails from "@/Pages/Forms/FormPatientDetails.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm } from "@inertiajs/vue3"
import { dateOptions } from "../../helpers.js"

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

console.log(props.patient)
</script>
