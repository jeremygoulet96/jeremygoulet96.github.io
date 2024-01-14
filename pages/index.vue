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
    <div>
        <section class="hero">
            <h1>
                Bonjour. 👋
                <br />
                Je suis Jérémy
            </h1>
            <span class="my-description">
                Designer graphique et développeur front-end travaillant
                présentement chez
                <NuxtLink to="https://www.corroprotec.com" target="_blank">
                    Corro-Protec
                </NuxtLink>
                .
            </span>
        </section>
        <section class="projects">
            <h2>Mes projets</h2>
            <ul>
                <li v-for="projet in projets">
                    <a v-if="projet.url" :href="projet.url" target="_blank">
                        <NuxtImg
                            class="project-img"
                            :src="`/img/projets/${projet.slug}/hero.jpg`"
                            quality="60"
                            format="webp"
                            :alt="`${projet.title}`"
                        />
                        {{ projet.title }}
                        {{ new Date(projet.createdAt).getFullYear() }}
                        {{ projet.category }}
                    </a>
                    <NuxtLink v-else :to="projet._path">
                        <NuxtImg
                            class="project-img"
                            :src="`/img/projets/${projet.slug}/hero.jpg`"
                            quality="80"
                            format="webp"
                            :alt="`${projet.title}`"
                        />
                        {{ projet.title }}
                        {{ new Date(projet.createdAt).getFullYear() }}
                        {{ projet.category }}
                    </NuxtLink>
                </li>
            </ul>
        </section>
        <Footer />
    </div>
</template>

<style lang="scss" scoped></style>
