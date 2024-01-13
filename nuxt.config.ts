// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxtjs/google-fonts", "@nuxt/image"],
    css: [
        "@/assets/scss/main.scss",
        process.env.NODE_ENV === "development"
            ? "@/assets/scss/debug-mq.scss"
            : "@/assets/scss/blank.scss",
    ],
    app: {
        pageTransition: { name: "page", mode: "in-out" },
        layoutTransition: { name: "layout", mode: "in-out" },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/partials/_variables.scss" as *;
                        @use "@/assets/scss/partials/_mixins.scss" as *; 
                        @use "@/assets/scss/partials/_colors.scss" as *;
                    `,
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