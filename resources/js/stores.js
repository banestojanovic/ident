import { defineStore } from "pinia"
import { notify } from "notiwind"

export const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            modal: {
                open: null
            },
            notify: false
        }
    },
    actions: {
        fireNotificaiton(state) {
            this.notify = true
            notify({
                group: state?.group || "success",
                title: state?.title || "",
                text: state?.text || ""
            }, 4000)
        }
    }
})
