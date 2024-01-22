<template>
    <div>
        <section class="hero">
            <div class="max-width">
                <div class="infos load-anim">
                    <h1 class="title">
                        Bonjour. 👋
                        <br />
                        Je suis Jérémy
                    </h1>
                    <span class="subtitle">
                        Designer graphique et développeur front-end travaillant
                        présentement chez
                        <NuxtLink
                            to="https://www.corroprotec.com"
                            target="_blank"
                            class="link"
                        >
                            Corro-Protec
                        </NuxtLink>
                        .
                    </span>
                </div>
            </div>
        </section>
        <div class="hero-img-container">
            <NuxtImg
                class="hero-img"
                src="/img/hero.jpeg"
                quality="60"
                format="webp"
            />
        </div>
        <section class="projects">
            <div class="max-width">
                <h2 class="title load-anim">Mes projets</h2>
                <ul class="projects-list">
                    <!-- <li
                        v-for="projet in projets"
                        v-jos
                        data-jos_scroll="your_callbackFunction"
                    > -->
                    <li v-for="projet in projets">
                        <a v-if="projet.url" :href="projet.url" target="_blank">
                            <div class="img-container">
                                <NuxtImg
                                    class="project-img"
                                    :src="`/img/projets/${projet.slug}/hero.jpg`"
                                    quality="60"
                                    format="webp"
                                    :alt="`${projet.title}`"
                                />
                            </div>
                            <div class="project-infos">
                                <div class="infos">
                                    <span class="project-title">
                                        {{ projet.title }}
                                    </span>
                                    <span class="project-category">
                                        {{ projet.category }}
                                    </span>
                                </div>
                                <div class="date">
                                    <span class="project-date">
                                        {{
                                            new Date(
                                                projet.createdAt
                                            ).getFullYear()
                                        }}
                                    </span>
                                </div>
                            </div>
                        </a>
                        <NuxtLink v-else :to="projet._path">
                            <div class="img-container">
                                <NuxtImg
                                    class="project-img"
                                    :src="`/img/projets/${projet.slug}/hero.jpg`"
                                    quality="80"
                                    format="webp"
                                    :alt="`${projet.title}`"
                                />
                            </div>
                            <div class="project-infos">
                                <div class="infos">
                                    <span class="project-title">
                                        {{ projet.title }}
                                    </span>
                                    <span class="project-category">
                                        {{ projet.category }}
                                    </span>
                                </div>
                                <div class="date">
                                    <span class="project-date">
                                        {{
                                            new Date(
                                                projet.createdAt
                                            ).getFullYear()
                                        }}
                                    </span>
                                </div>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
const pageTitle = ref("Projets");
useHead({
    title: pageTitle,
});
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").find()
);

// if (process.client) {
//     window.your_callbackFunction = (element) => {
//         element.querySelector(".img-container").style.transform =
//             "perspective(1200px)";
//         element.querySelector(".img-container").style.transform += `
//                 translateY(${element.jos.scrollProgress * 145}px)
//         `;
//         element.querySelector(".img-container").style.transform += `
//                 scale(${1 - element.jos.scrollProgress})
//         `;
//         // console.log("scale: ", 0.5 + (1 - element.jos.scrollProgress));
//         element.querySelector(".img-container").style.transform += `
//                 rotateX(${50 * element.jos.scrollProgress}deg)
//         `;

//         element.querySelector(".project-img").style.transform =
//             "perspective(1200px)";
//         element.querySelector(".project-img").style.transform = `
//             scale(${1.5 + (1 - element.jos.scrollProgress)}px)
//         `;
//         element.querySelector(".project-img").style.transform += `
//                 rotateX(${-40 * element.jos.scrollProgress}deg)
//         `;
//     };
// }
</script>

<style lang="scss" scoped>
.hero {
    height: 70vh;

    .max-width {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .infos {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 40px;

        // Large
        @media (min-width: $mq-lg) {
            align-items: flex-end;
            flex-direction: row;
        }
        .subtitle {
            letter-spacing: 0.2px;
            line-height: 1.6em;
            color: $light-gray;
            max-width: 300px;

            a {
                text-decoration: none;
            }
        }
    }
}

.hero-img-container {
    height: 50vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: $light-gray;

    .hero-img {
        position: absolute;
        width: 100%;
        top: -50%;
    }
}

.projects {
    .projects-list {
        margin: 0;
        margin-top: 2rem;
        padding: 0;

        li {
            margin: 0;
            padding: 0;
            list-style-type: none;

            &:not(last-child) {
                margin-bottom: 2rem;

                // Large
                @media (min-width: $mq-lg) {
                    margin-bottom: 4rem;
                }
            }

            a {
                display: block;
                width: 100%;
                text-decoration: none;
                font-size: $font-size-smaller;

                .img-container {
                    opacity: 1;
                    overflow: hidden;
                    transform: perspective(1200px);
                    // transform: perspective(1200px) translateY(145px) scale(0.5)
                    // rotateX(50deg);

                    .project-img {
                        transform: perspective(1200px);
                        // transform:
                        //     scale(1.5) rotateX(-40deg);

                        width: 100%;
                        border-radius: 10px;
                    }
                }

                .project-infos {
                    padding: 10px 0;
                    display: flex;
                    justify-content: space-between;
                    .infos {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        .project-title {
                            color: $black;
                        }
                        .project-category {
                            color: $light-gray;
                        }
                    }
                    .date {
                        .project-date {
                            color: $black;
                        }
                    }
                }
            }
        }
    }
}
</style>
