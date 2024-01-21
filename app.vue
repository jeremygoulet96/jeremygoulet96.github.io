<template>
    <DevOnly>
        <div class="mq">
            <span id="xsmall">X-Small</span>
            <span id="sm">Small</span>
            <span id="md">Medium</span>
            <span id="lg">Large</span>
            <span id="xl">X-Large</span>
            <span id="xxl">2X-Large</span>
        </div>
    </DevOnly>
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

<style lang="scss">
.page-enter-active,
.page-leave-active {
    overflow: hidden;
    transition: filter 0.5s, opacity 0.5s;
}

.page-enter-from,
.page-leave-to {
    position: absolute;
    width: 100%;
    opacity: 0;
    filter: blur(20px);
}

.layout-enter-active,
.layout-leave-active {
    transition: filter 0.5s, opacity 0.5s;
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(20px);
}
main {
    transition: filter 0.5s;

    &.nav-is-open {
        filter: blur(20px);
    }
}
</style>
