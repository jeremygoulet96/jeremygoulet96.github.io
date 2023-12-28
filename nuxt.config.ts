// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxtjs/google-fonts"],
    css: ["@/assets/_main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "@/assets/_variables.scss" as *; @use "@/assets/_mixins.scss" as *; @use "@/assets/_colors.scss" as *;',
                },
            },
        },
    },
    googleFonts: {
        families: {
            Inter: [400, 500, 600, 800],
        },
    },
});
