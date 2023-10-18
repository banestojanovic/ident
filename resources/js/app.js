import "./bootstrap"
import "@vuepic/vue-datepicker/dist/main.css"
import "../css/app.css"

import { createApp, h } from "vue"
import { createInertiaApp, Link } from "@inertiajs/vue3"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m"
import { createPinia } from "pinia"
import { useGlobalStore } from "@/stores.js"
import VueDatePicker from "@vuepic/vue-datepicker"
import Notifications from "notiwind"

const pinia = createPinia()

const appName = import.meta.env.VITE_APP_NAME || "Dentister"

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(ZiggyVue, Ziggy)
            .use(Notifications)
            .component("inertia-link", Link)
            .component("VueDatePicker", VueDatePicker)
            .mount(el)
    },
    progress: {
        color: "#4B5563"
    }
})

useGlobalStore(pinia)
