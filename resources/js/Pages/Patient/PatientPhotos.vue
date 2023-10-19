<template>
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <div class="flex items-center justify-between border-b p-4">
            <h3 class="text-xl font-semibold">Snimci</h3>
            <button
                type="button"
                class="focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                @click="() => (photoModal = true)"
            >
                Dodaj snimak
            </button>
        </div>
        <div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200">
                    <li v-for="photo in patient?.photos" :key="photo.id" class="p-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="h-16 w-20 rounded" :src="photo.src" alt="Snimak zuba" />
                            </div>
                            <div class="min-w-0 flex-1">
                                <p v-if="photo?.name" class="truncate text-lg font-medium text-gray-900">
                                    {{ photo.name }}
                                </p>
                                <p class="truncate text-sm text-gray-500">
                                    {{ photo?.created_at_human }}
                                </p>
                                <a :href="photo.src" :data-glightbox="`title: ${photo?.name || ''}; description: ${photo?.description || ''}`" class="glightbox text-sm font-medium text-indigo-600 hover:underline">Prikaži</a>
                            </div>
                            <div>
                                <button type="button" class="text-lg font-medium text-indigo-600 hover:underline" @click="() => handleEditPhoto(photo)">Izmeni</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Modal
        :open="photoModal"
        title="Dodaj snimak"
        subtitle="Dodaj novi snimak za pacijenta"
        @close="
            () => {
                photoModal = false
                edit = null
            }
        "
    >
        <FormPatientPhoto
            :patient="patient"
            :edit="edit"
            @delete="(id) => {
                photoModal = false
                confirmDialogOpen = true
                deletePhotoId = id
            }"
            @success="
                () => {
                    photoModal = false
                    edit = null
                    lightbox.reload()
                }
            "
        />
    </Modal>
    <ConfirmDialog
        :open="confirmDialogOpen"
        @confirm="handleDeletePhoto"
        @cancel="
            () => {
                confirmDialogOpen = false
                photoModal = true
                deletePhotoId = null
            }
        "
        title="Izbrišite snimak"
        subtitle="Ovo je nepovratna akcija nakon koje će ovaj snimak biti trajno uklonjen iz baze podataka."
    />
</template>

<script setup>
import Modal from "@/Pages/Partials/Modal.vue"
import { onMounted, ref } from "vue"
import FormPatientPhoto from "@/Pages/Forms/FormPatientPhoto.vue"
import Glightbox from "glightbox/src/js/glightbox.js"
import ConfirmDialog from "@/Pages/Partials/ConfirmDialog.vue"
import { useForm } from "@inertiajs/vue3"

const props = defineProps({
    patient: true
})

const photoModal = ref(false)
const confirmDialogOpen = ref(false)
const edit = ref(null)
const deletePhotoId = ref(null)
const lightbox = ref(null)

const handleEditPhoto = (photo) => {
    edit.value = photo
    photoModal.value = true
}

const formDeletePhoto = useForm({
    _method: 'delete',
})

const handleDeletePhoto = () => {
    formDeletePhoto.post(route('photos.delete', {id: deletePhotoId.value.id}), {
        preserveScroll: true,
        onFinish: () => {
            photoModal.value = false
            confirmDialogOpen.value = false
            deletePhotoId.value = null
        }
    })
}

onMounted(() => {
    lightbox.value = Glightbox({})
})
</script>
