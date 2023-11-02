<template>
    <div class="col-span-9 mt-1 overflow-hidden">
        <div class="mb-1 flex flex-col space-y-10 bg-white p-10">
            <div class="mx-auto grid grid-cols-2 gap-6">
                <div class="grid grid-cols-8 gap-2">
                    <button
                        type="button"
                        v-for="(tooth, idx) in firstTeeth"
                        :key="tooth"
                        :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'ring-[1px] ring-red-400', 'flex w-10 flex-col items-center justify-end space-y-1']"
                        @click="handleToothChange(tooth)"
                    >
                        <img :src="`/storage/images/site/teeth/${tooth}.svg`" alt="Slika zuba" />
                        <span :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'opacity-100', 'text-sm text-gray-500']">{{ tooth }}</span>
                    </button>
                </div>
                <div class="mx-2 grid grid-cols-8">
                    <button
                        type="button"
                        v-for="(tooth, idx) in secondTeeth"
                        :key="tooth"
                        :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'ring-[1px] ring-red-400', 'flex w-10 flex-col items-center justify-end space-y-1']"
                        @click="handleToothChange(tooth)"
                    >
                        <img :src="`/storage/images/site/teeth/${tooth}.svg`" alt="Slika zuba" />
                        <span :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'opacity-100', 'text-sm text-gray-500']">{{ tooth }}</span>
                    </button>
                </div>
                <div class="mx-2 grid grid-cols-8">
                    <button
                        type="button"
                        v-for="(tooth, idx) in fourthTeeth"
                        :key="tooth"
                        :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'ring-[1px] ring-red-400', 'flex w-10 flex-col items-center justify-start space-y-1']"
                        @click="handleToothChange(tooth)"
                    >
                        <span :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'opacity-100', 'text-sm text-gray-500']">{{ tooth }}</span>
                        <img :src="`/storage/images/site/teeth/${tooth}.svg`" alt="Slika zuba" />
                    </button>
                </div>
                <div class="mx-2 grid grid-cols-8">
                    <button
                        type="button"
                        v-for="(tooth, idx) in thirdTeeth"
                        :key="tooth"
                        :class="[!activeTeeth.includes(tooth) ? 'opacity-60' : 'ring-[1px] ring-red-400', 'flex w-10 flex-col items-center justify-start space-y-1']"
                        @click="handleToothChange(tooth)"
                    >
                        <span :class="[!activeTeeth.includes(tooth) ? 'opacity-80' : 'opacity-100', 'text-sm text-gray-500']">{{ tooth }}</span>
                        <img :src="`/storage/images/site/teeth/${tooth}.svg`" alt="Slika zuba" />
                    </button>
                </div>
            </div>
        </div>

        <div v-if="selectedTooth" class="grid grid-cols-12 gap-1">
            <div class="col-span-2 flex items-center justify-center bg-white px-6 py-3 text-3xl font-medium text-gray-500">
                {{ selectedTooth }}
            </div>
            <div class="col-span-7 flex items-center space-x-1 bg-white px-6 py-3">
                <span class="text-3xl">{{ selectedRecords.length }}</span>
                <span v-if="[1, 21, 31, 41, 51, 61, 71, 81, 91].includes(selectedRecords.length)">karton</span>
                <span v-else>kartona</span>
            </div>
            <div class="col-span-3">
                <button
                    type="button"
                    class="focus-visible:ring-ring inline-flex w-full items-center justify-center space-x-2 bg-pink-200 px-2 py-5 text-base uppercase text-[#8A245B] hover:bg-pink-300/70 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                    @click="
                        () => {
                            recordFormOpen = true
                            selectedRecord.item = null
                        }
                    "
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                        <path
                            d="M8.24992 11H13.7499M8.24992 14.6667H13.7499M15.5833 19.25H6.41659C5.93035 19.25 5.46404 19.0568 5.12022 18.713C4.77641 18.3692 4.58325 17.9029 4.58325 17.4167V4.58333C4.58325 4.0971 4.77641 3.63079 5.12022 3.28697C5.46404 2.94315 5.93035 2.75 6.41659 2.75H11.5371C11.7802 2.75005 12.0133 2.84666 12.1852 3.01858L17.148 7.98142C17.3199 8.15328 17.4165 8.3864 17.4166 8.6295V17.4167C17.4166 17.9029 17.2234 18.3692 16.8796 18.713C16.5358 19.0568 16.0695 19.25 15.5833 19.25Z"
                            stroke="#A960A5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <span class="text-base md:text-sm 2xl:text-base">Dodaj karton</span>
                </button>
            </div>
        </div>

        <div v-if="selectedRecords && selectedTooth" class="grid grid-cols-12 gap-1">
            <div class="col-span-2">
                <ul class="my-1">
                    <li v-for="(record, idx) in selectedRecords" :key="record.id">
                        <button
                            type="button"
                            @click="() => (selectedRecord.item = record)"
                            :class="[{ 'bg-white': selectedRecord?.item?.id === record.id, 'bg-emerald-100': highlightFirstRecord && idx === 0 }, 'flex w-full justify-center px-6 py-3 text-sm']"
                        >
                            {{ new Date(record.date).toLocaleDateString(dateOptions.locale) }}
                        </button>
                    </li>
                </ul>
            </div>
            <div v-if="selectedTooth && selectedRecords.length > 0 && !recordFormOpen && !selectedRecord.item" class="col-span-10 flex items-center my-1 space-x-1 w-full bg-white p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>Odaberi datum levo</span>
            </div>
            <div v-if="recordFormOpen || selectedRecord.item" :key="selectedRecord.item?.id || 999999999" class="col-span-10 w-full bg-white p-6">
                <div class="mb-4 flex justify-between">
                    <h5 v-if="recordFormOpen" class="text-lg font-semibold">Novi karton</h5>

                    <div class="flex items-center space-x-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span>{{ `${selectedDate.getHours()}:${selectedDate.getMinutes()}:${selectedDate.getSeconds()}` }}</span>
                    </div>
                </div>

                <FormPatientRecord
                    :tooth="selectedTooth"
                    :patient="patient"
                    :edit="selectedRecord.item"
                    @success="handleNewRecord"
                    @delete="
                        (id) => {
                            recordFormOpen = false
                            confirmDialogOpen = true
                            deleteRecordId = id
                        }
                    "
                />

                <div class="mt-10 flex items-center justify-end divide-x divide-gray-900 text-sm">
                    <button type="button" class="flex items-center space-x-1 px-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.6 11.5242C5.4 11.5492 5.2 11.5758 5 11.6042M5.6 11.5242C8.52188 11.1576 11.4781 11.1576 14.4 11.5242M5.6 11.5242L5.28333 15M14.4 11.5242C14.6 11.5492 14.8 11.5758 15 11.6042M14.4 11.5242L14.7167 15L14.9075 17.1025C14.9193 17.2322 14.904 17.363 14.8624 17.4864C14.8209 17.6099 14.7541 17.7233 14.6663 17.8195C14.5785 17.9157 14.4716 17.9926 14.3524 18.0452C14.2332 18.0978 14.1044 18.125 13.9742 18.125H6.02583C5.47417 18.125 5.0425 17.6517 5.0925 17.1025L5.28333 15M5.28333 15H4.375C3.87772 15 3.40081 14.8025 3.04917 14.4508C2.69754 14.0992 2.5 13.6223 2.5 13.125V7.88C2.5 6.97917 3.14 6.20083 4.03083 6.0675C4.56079 5.98823 5.09229 5.9196 5.625 5.86167M14.715 15H15.6242C15.8705 15.0001 16.1144 14.9517 16.342 14.8575C16.5695 14.7633 16.7763 14.6252 16.9505 14.4511C17.1247 14.277 17.2629 14.0703 17.3572 13.8427C17.4515 13.6152 17.5 13.3713 17.5 13.125V7.88C17.5 6.97917 16.86 6.20083 15.9692 6.0675C15.4392 5.98823 14.9077 5.9196 14.375 5.86167M14.375 5.86167C11.4669 5.54525 8.53308 5.54525 5.625 5.86167M14.375 5.86167V2.8125C14.375 2.295 13.955 1.875 13.4375 1.875H6.5625C6.045 1.875 5.625 2.295 5.625 2.8125V5.86167M15 8.75H15.0067V8.75667H15V8.75ZM12.5 8.75H12.5067V8.75667H12.5V8.75Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span>Recept</span>
                    </button>
                    <button type="button" class="px-3">Opravdanje</button>
                    <button type="button" class="px-3">Izjava</button>
                </div>
            </div>
        </div>

        <div :class="[{'opacity-75': selectedTooth}, 'grid grid-cols-12 gap-1']">
            <template v-for="(tooth, fdi) in patient.teeth" :key="fdi">
                <div class="col-span-2 flex items-center justify-center bg-white px-6 py-3 text-3xl font-medium text-gray-500">
                    {{ fdi }}
                </div>
                <div class="col-span-10 flex items-center space-x-1 bg-white px-6 py-3">
                    <span class="text-3xl">{{ tooth.length }}</span>
                    <span v-if="[1, 21, 31, 41, 51, 61, 71, 81, 91].includes(tooth.length)">karton</span>
                    <span v-else>kartona</span>
                </div>
            </template>
        </div>
    </div>

    <ConfirmDialog
        :open="confirmDialogOpen"
        @confirm="handleDeleteRecord"
        @cancel="
            () => {
                confirmDialogOpen = false
                deleteRecordId = false
            }
        "
        title="Izbriši karton"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."
    />
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue"
import { dateOptions } from "@/helpers.js"
import FormPatientRecord from "@/Pages/Forms/FormPatientRecord.vue"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm, usePage } from "@inertiajs/vue3"
import { useGlobalStore } from "@/stores.js"

const props = defineProps({
    patient: true,
    modalOpen: false
})

const emit = defineEmits(["closeModal", "openModal"])

const loading = ref(false)
const edit = ref(null)
const deleteRecordId = ref(null)
const recordModalOpen = ref(false)
const recordFormOpen = ref(false)
const confirmDialogOpen = ref(false)
const highlightFirstRecord = ref(false)
const selectedTooth = ref(null)
const selectedRecord = reactive({
    item: null
})
const selectedDate = computed(() => {
    return selectedRecord.item?.date ? new Date(selectedRecord.item.date) : new Date()
})
const store = useGlobalStore()

const selectedRecords = computed(() => {
    return props.patient.teeth?.[selectedTooth.value] ?? []
})

const handleNewRecord = () => {
    highlightFirstRecord.value = true
    edit.value = null
    recordFormOpen.value = false
    selectedRecord.item = selectedRecords.value[0] || null

    setTimeout(() => {
        highlightFirstRecord.value = false
    }, 3000)
}

const deleteForm = useForm({
    _method: "delete"
})

const handleDeleteRecord = () => {
    loading.value = true
    deleteForm.post(route("records.delete", { id: deleteRecordId.value?.id }), {
        onFinish: () => {
            recordFormOpen.value = false
            selectedRecord.item = null
            confirmDialogOpen.value = false
            loading.value = false
        }
    })
}

const firstTeeth = ["18", "17", "16", "15", "14", "13", "12", "11"]
const secondTeeth = ["21", "22", "23", "24", "25", "26", "27", "28"]
const thirdTeeth = ["31", "32", "33", "34", "35", "36", "37", "38"]
const fourthTeeth = ["48", "47", "46", "45", "44", "43", "42", "41"]

const activeTeeth = computed(() => Object.keys(props.patient.teeth))

const handleToothChange = (tooth) => {
    selectedTooth.value = tooth
    selectedRecord.item = null
    recordFormOpen.value = false
}

console.log(props.patient.teeth)
</script>
