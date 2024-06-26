import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php", "./storage/framework/views/*.php", "./resources/views/**/*.blade.php", "./resources/js/**/*.vue"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans]
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem"
                }
            },
            maxWidth: {
                "8xl": "85rem"
            },
            boxShadow: {
                search: "0px 10px 5px 0px #EBF2F5"
            },
            keyframes: {
                progress: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(100%)" }
                }
            },
            animation: {
                progress: "progress 3s linear"
            }
        }
    },

    plugins: [forms]
}
