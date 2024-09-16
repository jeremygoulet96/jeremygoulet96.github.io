<template>
    <div>
        <section class="intro">
            <div class="max-width">
                <div class="about-description">
                    <p>Bonjour!</p>
                    <p>
                        Je m’appelle Jérémy Goulet et je suis passionné par le
                        design et la technologie.
                    </p>
                    <p>
                        Ayant accumulé plusieurs cordes à mon arc avec les
                        années, je jongle maintenant entre design, modélisation
                        3D, intégration web et programmation dans mes temps
                        libres.
                    </p>
                    <p>
                        Au fil des années, j’ai développé une expertise
                        diversifiée qui inclut le design, la modélisation 3D,
                        l’intégration web et la programmation. Je m'intéresse
                        par l'analyse de concepts de design ("reverse
                        engineering") pour comprendre les choix qui ont guidé
                        leur conception. J’aime également créer des sites web.
                    </p>
                </div>
                <ul class="no-list links">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jeremygoulet/"
                            target="_blank"
                            class="external-link"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.twitter.com/jeremygoulet/"
                            target="_blank"
                            class="external-link"
                        >
                            Twitter (X)
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="cv">
            <div class="max-width">
                <h3>Expérience professionnelle</h3>
                <ul class="no-list experiences" ref="experiencesList">
                    <li
                        v-for="experience in experiences"
                        class="single-experience"
                    >
                        <div class="where">
                            <a class="company link" href="#">
                                {{ experience.title }}
                            </a>
                            <span class="timeline">
                                {{ experience.timeline }}
                            </span>
                        </div>
                        <span class="poste">{{ experience.poste }}</span>
                        <ContentRendererMarkdown
                            class="no-list two-col"
                            :value="experience"
                        />
                    </li>
                </ul>
                <h3>Éducation</h3>
                <ul class="no-list experiences">
                    <li v-for="school in education" class="single-experience">
                        <div class="where">
                            {{ school.title }}
                        </div>
                        <span class="poste">{{ school.poste }}</span>
                        <ContentRendererMarkdown class="what" :value="school" />
                    </li>
                    <li class="single-experience">
                        <span class="where">Cégep de Sainte-Foy</span>
                        <span class="poste">
                            Techniques d’intégration multimédia (Finissant 2018)
                        </span>
                        <span class="what">
                            Réalisation de sites web et produits interactifs de
                            toutes sortes : applications mobiles, e-learning,
                            jeux en ligne et présentations multimédias. Design
                            UI/UX et développement web Front-End et Back-End.
                        </span>
                    </li>
                </ul>
                <h3>Prix et distinctions</h3>
                <ul class="no-list experiences">
                    <li class="single-experience">
                        <span class="where">
                            Prix coup de cœur - Projet Emballage (mai 2022)
                        </span>
                        <span class="poste">
                            École de design de l'Université Laval
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
const pageTitle = ref("À propos");
useHead({
    title: pageTitle,
});

const { data: experiences } = await useAsyncData("experiences", () =>
    queryContent("/experiences").sort({ createdAt: -1 }).find()
);
const { data: education } = await useAsyncData("education", () =>
    queryContent("/education").sort({ createdAt: -1 }).find()
);
</script>

<style lang="scss">
.max-width {
    max-width: $mq-sm;
    margin: 0 auto;
    position: relative;
}

.intro {
    padding-top: 160px;
    padding-bottom: 0;
}

.about-description {
    font-size: $font-size-bigger;
    // padding-top: 160px;
    line-height: 1.5em;
    color: $light-gray;
    // letter-spacing: 0.2px;
}

.links {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 5rem;

    li {
        display: block;
        width: 100%;

        a {
            display: block;
            color: $black;
            text-decoration: none;
            transition: color 0.2s;
            padding: 16px;
            background-color: rgba($black, 0.05);
            font-size: 22px;
            font-weight: $font-weight-medium;
            text-align: center;
            border-radius: 12px;
            transition: background-color 0.2s;

            &:hover {
                color: $light-gray;
                background-color: rgba($black, 0);
            }

            &.external-link {
                &::after {
                    display: inline-block;
                    content: "↗";
                    margin-left: 5px;
                    transition: transform 0.2s;
                }

                &:hover {
                    &::after {
                        transform: translateX(5px) translateY(-5px);
                    }
                }
            }
        }
    }
}

.cv {
    display: block;
    // padding: 0;
    padding-bottom: 6rem;
    // margin: 0;

    h3 {
        font-size: 40px;
        line-height: 1em;
        font-weight: $font-weight-bold;
        margin: 0;
        margin: 6rem 0;
    }

    .experiences {
        .single-experience {
            font-size: $font-size-smaller;
            color: $light-gray;

            .where {
                display: block;
                font-size: $font-size-biggest;
                font-weight: $font-weight-semibold;
                color: $black;

                .company {
                    color: $black;
                    text-decoration: none;
                }

                .timeline {
                    display: inline-block;
                    margin-left: 6px;
                    font-weight: $font-weight-medium;
                    color: $light-gray;
                }
            }

            .poste {
                display: block;
                font-size: $font-size-bigger;
                // line-height: 29px;
                // font-weight: 400;
                padding: 1em 0;
                color: $light-gray;
            }

            .what {
                font-size: $font-size-smaller;
                color: $light-gray;

                p {
                    margin: 0;
                    padding: 0;
                }
            }

            ul {
                // column-count: 1;
                padding-left: 20px;
                list-style-type: disc;
                // // font-size: $font-size-smaller;
                // column-gap: 30px;
                // color: $light-gray;

                // Large
                @media (min-width: $mq-md) {
                    column-count: 2;
                    column-gap: 30px;
                }

                li {
                    break-inside: avoid-column;
                    margin-bottom: 8px;
                }
            }

            &:not(first-child) {
                margin-top: 6rem;
            }
        }
    }
}
</style>
