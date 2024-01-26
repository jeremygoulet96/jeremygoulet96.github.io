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
        <div class="hero-img-container" ref="heroImgContainer">
            <NuxtImg
                class="hero-img"
                src="/img/hero.jpeg"
                quality="60"
                format="webp"
                width="1512"
                height="823"
            />
        </div>
        <section class="projects">
            <div class="max-width">
                <h2 class="title parallax">Mes projets</h2>
                <ul class="projects-list" ref="projectsList">
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
                                <div
                                    v-if="projet.description"
                                    class="description"
                                >
                                    <span class="project-desc">
                                        {{ projet.description }}
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
                                <div
                                    v-if="projet.description"
                                    class="description"
                                >
                                    <span class="project-desc">
                                        {{ projet.description }}
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
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImgContainer = ref();
const projectsList = ref();
let heroImgParallax;
let projectsAnim;
let parallax;

onMounted(() => {
    projectsAnim = gsap.context((self) => {
        const imgContainers = self.selector(".img-container");
        const imgs = self.selector(".project-img");
        imgContainers.forEach((imgContainer) => {
            gsap.from(imgContainer, {
                y: 145,
                scale: 0.5,
                rotationX: 50,
                scrollTrigger: {
                    trigger: imgContainer,
                    start: "top bottom",
                    end: "bottom bottom",
                },
            });
            gsap.to(imgContainer, {
                y: 0,
                scale: 1,
                rotationX: 0,
                scrollTrigger: {
                    trigger: imgContainer,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,
                    // markers: true,
                },
            });
        });
        imgs.forEach((img) => {
            gsap.from(img, {
                scale: 1.5,
                rotationX: -40,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom bottom",
                },
            });
            gsap.to(img, {
                scale: 1,
                rotationX: 0,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });
        });
    }, projectsList.value); // <- Scope!

    heroImgParallax = gsap.context((self) => {
        const heroImg = self.selector(".hero-img");
        gsap.to(heroImg, {
            yPercent: 50,
            scrollTrigger: {
                trigger: heroImgContainer.value,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                // markers: true,
            },
        });
    }, heroImgContainer.value); // <- Scope!

    parallax = gsap.context((self) => {
        const parallaxItems = self.selector(".parallax");
        parallaxItems.forEach((item) => {
            gsap.to(item, {
                y: 250,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    // markers: true,
                },
            });
        });
    }, document.querySelector("main")); // <- Scope!
});

onUnmounted(() => {
    heroImgParallax.revert(); // <- Easy Cleanup!
    projectsAnim.revert(); // <- Easy Cleanup!
    parallax.revert(); // <- Easy Cleanup!
});

/////////

const pageTitle = ref("Projets");
useHead({
    title: pageTitle,
});
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").find()
);
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
        top: -100%;
        // transform: translateY(-50%);
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
                    // position: relative;
                    // background-color: red;
                    // height: 80vh;
                    border-radius: 10px;
                    overflow: hidden;
                    transform: perspective(1200px);
                    // transform: perspective(1200px) translateY(145px) scale(0.5) rotateX(50deg);

                    .project-img {
                        // position: absolute;
                        // top: 50%;
                        // left: 0;
                        display: block;
                        transform: perspective(1200px);
                        // transform: translateY(-50%) perspective(1200px);
                        // transform: perspective(1200px) scale(1.5) rotateX(-40deg);
                        width: 100%;
                    }
                }

                .project-infos {
                    padding: 10px 0;
                    gap: 200px;
                    display: flex;
                    justify-content: space-between;
                    .infos {
                        flex-grow: 1;
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
                    .description {
                        // align-self: flex-end;
                        max-width: 350px;
                        .project-desc {
                            color: $light-gray;
                        }
                    }
                    .date {
                        // align-self: flex-end;
                        // max-width: 150px;
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
