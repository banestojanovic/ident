<template>
    <div class="col-span-3 mt-1 overflow-hidden bg-white p-4">
        <div class="flex items-center justify-between">
            <h3 class="flex items-center space-x-2 text-xl font-medium">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.66675 14.6667L7.87058 10.4628C8.21438 10.1191 8.68061 9.92606 9.16675 9.92606C9.65288 9.92606 10.1191 10.1191 10.4629 10.4628L14.6667 14.6667M12.8334 12.8333L14.2872 11.3795C14.631 11.0358 15.0973 10.8427 15.5834 10.8427C16.0695 10.8427 16.5358 11.0358 16.8796 11.3795L18.3334 12.8333M12.8334 7.33333H12.8426M5.50008 18.3333H16.5001C16.9863 18.3333 17.4526 18.1402 17.7964 17.7964C18.1403 17.4525 18.3334 16.9862 18.3334 16.5V5.5C18.3334 5.01377 18.1403 4.54745 17.7964 4.20364C17.4526 3.85982 16.9863 3.66667 16.5001 3.66667H5.50008C5.01385 3.66667 4.54754 3.85982 4.20372 4.20364C3.8599 4.54745 3.66675 5.01377 3.66675 5.5V16.5C3.66675 16.9862 3.8599 17.4525 4.20372 17.7964C4.54754 18.1402 5.01385 18.3333 5.50008 18.3333Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span>Snimci</span>
            </h3>
        </div>
        <div class="mt-4">
            <div class="flow-root">
                <ul role="list" class="space-y-4">
                    <li v-for="photo in patient?.photos" :key="photo.id">
                        <div class="flex space-x-4">
                            <div class="flex-shrink-0">
                                <a :href="photo.src" class="glightbox" :data-glightbox="`title: ${photo?.name || ''}; description: ${photo?.description || ''}`">
                                    <img class="h-16 w-20" :src="photo.src" alt="Snimak zuba" />
                                </a>
                            </div>
                            <div class="min-w-0 flex-1">
                                <p v-if="photo?.name" class="truncate text-base text-gray-900">
                                    {{ photo.name }}
                                </p>
                                <p class="truncate text-sm text-gray-500">
                                    {{ new Date(photo?.created_at).toLocaleDateString(dateOptions.locale) }}
                                </p>
                            </div>
                            <div class="mt-auto">
                                <button type="button" class="flex items-center space-x-2 text-gray-500 hover:underline" @click="() => handleEditPhoto(photo)">
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
        </div>
        <button
            type="button"
            class="focus-visible:ring-ring mt-8 inline-flex w-full items-center justify-center space-x-2 rounded-md bg-blue-100 px-8 py-2 text-base text-sky-700 transition-colors hover:bg-blue-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
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
