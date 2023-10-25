<template>
    <GuestLayout>
        <Head title="Prijavite se" />

        <h1 class="mb-4 flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H14M10 6V5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V6M10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6M9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12C11 11.4696 10.7893 10.9609 10.4142 10.5858C10.0391 10.2107 9.53043 10 9 10C8.46957 10 7.96086 10.2107 7.58579 10.5858C7.21071 10.9609 7 11.4696 7 12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14ZM9 14C10.306 14 11.417 14.835 11.83 16M9 14C8.37938 13.9998 7.77397 14.1921 7.26715 14.5502C6.76032 14.9084 6.37701 15.4149 6.17 16M15 11H18M15 15H17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <span class="text-xl font-medium">Prijavite se</span>
        </h1>

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <FieldSelectDentists v-model="form.id" :items="$page.props.global.users?.data" name="id" label="Vaše ime" placeholder="Izaberite" :error="form.errors?.id" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Vaša lozinka" />

                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" placeholder="Upišite lozinku" />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-6 block">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Zapamti me</span>
                </label>
            </div>

            <div class="mt-4 flex items-center justify-end">

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Prijavi me</PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import Checkbox from "@/Components/Checkbox.vue"
import GuestLayout from "@/Layouts/GuestLayout.vue"
import InputError from "@/Components/InputError.vue"
import InputLabel from "@/Components/InputLabel.vue"
import PrimaryButton from "@/Components/PrimaryButton.vue"
import TextInput from "@/Components/TextInput.vue"
import { Head, Link, useForm } from "@inertiajs/vue3"
import FieldSelectDentists from "@/Pages/Fields/FieldSelectDentists.vue"

defineProps({
    canResetPassword: {
        type: Boolean
    },
    status: {
        type: String
    }
})

const form = useForm({
    id: null,
    password: "",
    remember: false
})

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password")
    })
}
</script>
