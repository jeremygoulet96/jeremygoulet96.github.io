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
                quality="80"
                format="webp"
                width="2560"
                densities="x1 x2"
            />
        </div>
        <section class="projects">
            <div class="max-width">
                <h2 class="title parallax-desktop-only">Mes projets</h2>
                <ul class="no-list projects-list" ref="projectsList">
                    <li v-for="projet in projets">
                        <LinkOrExternal
                            :external="!!projet.url"
                            :to="projet.url || projet._path"
                            :id="projet.slug"
                        >
                            <div class="img-container">
                                <NuxtImg
                                    class="project-img"
                                    :src="`/img/projets/${projet.slug}/hero.jpg`"
                                    format="webp"
                                    quality="60"
                                    width="1440"
                                    densities="1x 2x"
                                    :alt="`${projet.title}`"
                                    placeholder
                                />
                            </div>
                            <div class="project-infos">
                                <div class="infos aos">
                                    <span class="project-title">
                                        {{ projet.title }}
                                    </span>
                                    <span class="project-category">
                                        {{ projet.category }}
                                    </span>
                                </div>
                                <div
                                    v-if="projet.description"
                                    class="project-description aos"
                                >
                                    {{ projet.description }}
                                </div>
                                <div class="date aos">
                                    <span class="project-date">
                                        {{
                                            new Date(
                                                projet.createdAt
                                            ).getFullYear()
                                        }}
                                    </span>
                                </div>
                            </div>
                        </LinkOrExternal>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pageTitle = ref("Projets");
useHead({
    title: pageTitle,
});
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").sort({ createdAt: -1 }).find()
);

gsap.registerPlugin(ScrollTrigger);

const heroImgContainer = ref();
const projectsList = ref();
let heroImgParallax;
let projectsAnim;
let parallax;
let parallaxDesktopOnly;
let aos;

onMounted(() => {
    heroImgParallax = gsap.context((self) => {
        const heroImg = document.querySelector(".hero-img");
        gsap.to(heroImg, {
            yPercent: 15,
            scrollTrigger: {
                trigger: heroImgContainer.value,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                onEnter: () => (heroImg.style.opacity = 1),
            },
        });
    }, heroImgContainer.value); // <- Scope!

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
                    scrub: 1,
                    // markers: true,
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
                    scrub: 1,
                    // markers: true,
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
                    // markers: true,
                },
            });
        });
    }, projectsList.value); // <- Scope!

    parallax = gsap.context((self) => {
        const parallaxItems = self.selector(".parallax");
        parallaxItems.forEach((item) => {
            gsap.from(item, {
                // width: 0,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    // markers: true,
                },
            });
            gsap.to(item, {
                y: 150,
                // width: 0,
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

    //responsive
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        parallaxDesktopOnly = gsap.context((self) => {
            const parallaxItems = self.selector(".parallax-desktop-only");
            parallaxItems.forEach((item) => {
                gsap.from(item, {
                    // width: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        // markers: true,
                    },
                });
                gsap.to(item, {
                    y: 150,
                    // width: 0,
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

    aos = gsap.context((self) => {
        const aosItems = self.selector(".aos");
        aosItems.forEach((item) => {
            gsap.from(item, {
                x: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: item,
                    start: "bottom bottom",
                    end: () => `+=${item.offsetHeight}`,
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
    parallaxDesktopOnly.revert(); // <- Easy Cleanup!
    aos.revert(); // <- Easy Cleanup!
});
</script>

<style lang="scss" scoped>
.max-width {
    max-width: $mq-2xl;
    margin: 0 auto;
    position: relative;
}

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
            // letter-spacing: 0.2px;
            font-size: $font-size-bigger;
            // line-height: 1.6em;
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
        bottom: 0;
        opacity: 0;
        transition: opacity 150ms ease-in-out;
        // top: 50%;
        // transform: translateY(-50%);
    }
}

.projects {
    .title {
        // Large
        @media (min-width: $mq-lg) {
            height: 0;
        }
    }
    .projects-list {
        margin: 0;
        margin-top: 2rem;
        padding: 0;

        li {
            margin: 0;
            padding: 0;
            list-style-type: none;
            // background-color: $background;

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
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    padding: 10px 0;
                    gap: 20px;

                    // Large
                    @media (min-width: $mq-lg) {
                        flex-direction: row;
                        gap: 200px;
                    }
                    .infos {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;

                        .project-title {
                            color: $black;
                            text-decoration: none;
                        }

                        .project-category {
                            color: $light-gray;
                            text-decoration: none;
                        }
                    }
                    .project-description {
                        // align-self: flex-end;
                        display: inline-block;
                        max-width: 350px;
                        color: $light-gray;
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
