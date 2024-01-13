<script setup>
const title = ref("À propos");
useHead({
    title: title,
});
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <Footer />
    </div>
</template>

<style lang="scss"></style>
