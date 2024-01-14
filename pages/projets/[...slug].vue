<script setup>
const { params } = useRoute();
const { data: projet } = await useAsyncData("projet", () =>
    queryContent(`/projets/${params.slug}`).findOne()
);
</script>

<template>
    <h1>{{ projet.title }}</h1>
    <main>
        <ContentDoc />
    </main>
</template>
