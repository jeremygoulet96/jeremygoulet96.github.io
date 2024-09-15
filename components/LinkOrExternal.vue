<template>
    <div>
        <a v-if="external" :href="to" target="_blank">
            <slot />
        </a>
        <NuxtLink v-else :to="to">
            <slot />
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    external: {
        type: Boolean,
        default: false,
    },
    to: {
        type: String,
        default: "",
    },
});
</script>
