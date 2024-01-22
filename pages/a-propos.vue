<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <Footer />
    </div>
</template>

<script setup>
const pageTitle = ref("À propos");
useHead({
    title: pageTitle,
});
</script>

<style lang="scss"></style>
