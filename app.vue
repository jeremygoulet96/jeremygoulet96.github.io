<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Jérémy Goulet` : "Jérémy Goulet";
    },
});
</script>

<script>
import "normalize.css";
</script>

<style>
@import url("normalize.css");
.visuallyHidden {
    @include visuallyhidden();
}
</style>
