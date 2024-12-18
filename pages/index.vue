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
                    <span class="subtitle">Designer graphique et web</span>
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
        <section class="projects-section">
            <div class="max-width">
                <h2 class="title parallax-desktop-only">Mes projets</h2>
                <ul class="no-list projects-list" ref="projectsList">
                    <li v-for="projet in projets" class="project-item">
                        <LinkOrExternal
                            :external="!!projet.url"
                            :to="projet.url || projet._path"
                            :id="projet.slug"
                            class="project-link"
                        >
                            <div class="img-container">
                                <NuxtImg
                                    class="project-img"
                                    :src="`/img/projets/${projet.slug}/hero.jpg`"
                                    format="webp"
                                    quality="90"
                                    width="1440"
                                    densities="1x 2x"
                                    :alt="`${projet.title}`"
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
const { $gsap, $ScrollTrigger } = useNuxtApp();

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const pageTitle = ref("Projets");
useHead({
    title: pageTitle,
});
const { data: projets } = await useAsyncData("projets", () =>
    queryContent("/projets").sort({ createdAt: -1 }).find()
);

const heroImgContainer = ref();
const projectsList = ref();
let anims;
let mm = $gsap.matchMedia();

onMounted(() => {
    anims = $gsap.context((self) => {
        const projectsItems = self.selector(".project-item");
        projectsItems.forEach((project) => {
            const imgContainer = project.querySelector(".img-container");
            $gsap.set(imgContainer, {
                scale: 0.5,
                rotationX: 50,
            });
            $gsap.to(imgContainer, {
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,
                    // markers: true,
                },
                scale: 1,
                rotationX: 0,
            });

            const img = imgContainer.querySelector(".project-img");
            $gsap.set(img, {
                scale: 1.5,
                rotationX: -40,
            });
            $gsap.to(img, {
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,
                    // markers: true,
                },
                scale: 1,
                rotationX: 0,
            });
        });

        const heroImg = document.querySelector(".hero-img");
        $gsap.to(heroImg, {
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

        mm.add("(min-width: 800px)", () => {
            const parallaxItems = self.selector(".parallax-desktop-only");
            document.querySelector(".projects-section .title").style.height = 0;
            parallaxItems.forEach((item) => {
                $gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        // markers: true,
                    },
                    y: 150,
                });
            });
        });

        const aosItems = self.selector(".aos");
        aosItems.forEach((item) => {
            $gsap.from(item, {
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
    // window.scrollTo(0, 0);
    // Easy Cleanup!
    anims.revert();
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
    }
}

// .projects-section {
//     .title {
//         // Large
//         @media (min-width: $mq-lg) {
//             height: 0;
//         }
//     }
// }

.projects-list {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    list-style-type: none;

    li {
        margin: 0;
        padding: 0;
        // background: rgba(red, 0.25);

        &:not(last-child) {
            margin-bottom: 2rem;

            // Large
            @media (min-width: $mq-lg) {
                margin-bottom: 4rem;
            }
        }
    }
}

.project-link {
    display: block;
    width: 100%;
    text-decoration: none;
    font-size: $font-size-smaller;

    .img-container {
        border-radius: 10px;
        overflow: hidden;
        transform: perspective(1200px);

        .project-img {
            display: block;
            transform: perspective(1200px);
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
</style>
