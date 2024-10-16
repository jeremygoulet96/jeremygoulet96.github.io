// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/content",
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "@hypernym/nuxt-gsap",
    ],

    gsap: {
        extraPlugins: {
            scrollTrigger: true,
        },
    },

    css: [
        "@/assets/scss/main.scss",
        process.env.NODE_ENV === "development"
            ? "@/assets/scss/debug-mq.scss"
            : "@/assets/scss/blank.scss",
    ],

    content: {
        markdown: {
            anchorLinks: false,
        },
    },

    app: {
        pageTransition: { name: "page", mode: "in-out" },
        layoutTransition: { name: "layout", mode: "in-out" },
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/img/favicon.png",
                },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ["legacy-js-api"],
                    additionalData: `
                      @use "@/assets/scss/partials/_variables.scss" as *;
                      @use "@/assets/scss/partials/_mixins.scss" as *;
                      @use "@/assets/scss/partials/_colors.scss" as *;
                      @use "@/assets/scss/partials/_animations.scss" as *;
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

    build: {
        transpile: ["gsap"],
    },

    compatibilityDate: "2024-08-28",
});
