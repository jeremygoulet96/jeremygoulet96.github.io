<template>
    <div>
        <header class="header">
            <div class="max-width">
                <nav class="header-nav">
                    <button type="button" @click="goBack">Back</button>
                </nav>
            </div>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>
const router = useRouter();
const { params } = useRoute();
const nuxtApp = useNuxtApp();
const goBack = () => {
    // const slug = params.slug;
    // router.push("/").then(() => {
    //     nuxtApp.hook("page:transition:finish", () => {
    //         document.getElementById(slug).scrollIntoView({
    //             block: "center",
    //             inline: "center",
    //         });
    //     });
    // });
};
</script>
