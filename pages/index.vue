<template>
    <h1>Accueil</h1>
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

<script setup>
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").find()
);
</script>

<style lang="scss" scoped>
a {
    color: $primary;
}
</style>
