<script setup>
definePageMeta({
    layout: "projet",
});
const { params, path } = useRoute();
const { data: projet } = await useAsyncData("projet", () =>
    queryContent(`/projets/${params.slug}`).findOne()
);
const { data: surrounds } = await useAsyncData("surrounds", () =>
    queryContent(`/projets`).sort({ createdAt: 1 }).findSurround(path)
);
const [prev, next] = surrounds.value;
</script>

<template>
    <div>
        <section>
            <div class="max-width">
                <!-- <h1>{{ projet.title }}</h1> -->
                <main>
                    <ContentDoc />
                </main>
            </div>
        </section>
        <section>
            <div class="max-width">
                <!-- <h1>{{ projet.title }}</h1> -->
                <main>
                    <LinkOrExternal
                        :external="!!next.url"
                        :to="next.url || next._path"
                    >
                        {{ next.title }}
                        <NuxtImg
                            class="project-img"
                            :src="`/img/projets/${next.slug}/hero.jpg`"
                            format="webp"
                            quality="60"
                            width="1440"
                            densities="1x 2x"
                            :alt="`${next.title}`"
                            placeholder
                        />
                    </LinkOrExternal>
                </main>
            </div>
        </section>
    </div>
</template>
