<template>
    <div class="col-span-3 mt-1 overflow-hidden">
        <div v-if="patient?.photos.length > 0" class="bg-white p-6">
            <div class="flow-root">
                <ul role="list" class="grid grid-cols-2 gap-6">
                    <li v-for="photo in patient?.photos" :key="photo.id">
                        <div class="flex w-full flex-col space-y-2">
                            <div class="relative h-[136px] w-full overflow-hidden rounded-lg">
                                <a :href="photo.src" class="glightbox" :data-glightbox="`title: ${photo?.name || ''}; description: ${photo?.description || ''}`">
                                    <img class="absolute left-0 top-0 h-full w-full object-cover" :src="photo.src" alt="Snimak zuba" />
                                </a>
                            </div>
                            <div class="flex flex-col px-2">
                                <button v-if="photo?.name" type="button" class="text-left text-sm leading-tight text-gray-900" @click="handleEditPhoto(photo)">
                                    {{ photo.name }}
                                </button>
                                <button type="button" class="text-left text-xs text-gray-500" @click="handleEditPhoto(photo)">
                                    {{ new Date(photo?.created_at).toLocaleDateString(dateOptions.locale) }}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <button
            type="button"
            class="focus-visible:ring-ring inline-flex w-full items-center justify-center space-x-2 bg-blue-100 px-8 py-9 text-base uppercase text-sky-700 hover:bg-blue-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            @click="() => (photoModal = true)"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.33325 13.3333L7.15492 9.51166C7.46747 9.19921 7.89131 9.02368 8.33325 9.02368C8.77519 9.02368 9.19904 9.19921 9.51158 9.51166L13.3333 13.3333M11.6666 11.6667L12.9883 10.345C13.3008 10.0325 13.7246 9.85702 14.1666 9.85702C14.6085 9.85702 15.0324 10.0325 15.3449 10.345L16.6666 11.6667M11.6666 6.66666H11.6749M4.99992 16.6667H14.9999C15.4419 16.6667 15.8659 16.4911 16.1784 16.1785C16.491 15.8659 16.6666 15.442 16.6666 15V4.99999C16.6666 4.55797 16.491 4.13404 16.1784 3.82148C15.8659 3.50892 15.4419 3.33333 14.9999 3.33333H4.99992C4.55789 3.33333 4.13397 3.50892 3.82141 3.82148C3.50885 4.13404 3.33325 4.55797 3.33325 4.99999V15C3.33325 15.442 3.50885 15.8659 3.82141 16.1785C4.13397 16.4911 4.55789 16.6667 4.99992 16.6667Z"
                    stroke="#005C9E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <span>Dodaj snimak</span>
        </button>
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
            @delete="
                (id) => {
                    photoModal = false
                    confirmDialogOpen = true
                    deletePhotoId = id
                }
            "
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
import { dateOptions } from "../../helpers.js"

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
    _method: "delete"
})

const handleDeletePhoto = () => {
    formDeletePhoto.post(route("photos.delete", { id: deletePhotoId.value.id }), {
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
