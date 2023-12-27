<script setup>
const title = ref("Projets");
useHead({
    title: title,
});
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").find()
);
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="projet in projets">
            <a v-if="projet.url" :href="projet.url" target="_blank">
                {{ projet.title }}
            </a>
            <NuxtLink v-else :to="projet._path">
                {{ projet.title }}
            </NuxtLink>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
