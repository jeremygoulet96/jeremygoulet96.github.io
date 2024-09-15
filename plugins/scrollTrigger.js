import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:transition:finish", () => {
        console.log("page");

        ScrollTrigger.refresh();
    });
    nuxtApp.hook("layout:transition:finish", () => {
        console.log("layout");

        ScrollTrigger.refresh();
    });
});
