<script setup>
const { params } = useRoute();
const { data: projet } = await useAsyncData("projet", () =>
    queryContent(`/projets/${params.slug}`).findOne()
);
</script>

<template>
    <div>
        <section>
            <div class="max-width">
                <h1>{{ projet.title }}</h1>
                <main>
                    <ContentDoc />
                </main>
            </div>
        </section>
    </div>
</template>
