<template>
    <div>
        <section class="intro">
            <div class="max-width">
                <div class="description">
                    <p>Bonjour! Je m’appelle Jérémy Goulet.</p>
                    <p>
                        J’ai toujours aimé le design et la technologie. Durant
                        mon parcours scolaire, j’ai étudié en Techniques
                        d’intégration multimédia au CÉGEP de Sainte-Foy. Par la
                        suite, je voulais apprendre quelque chose de nouveau et
                        je me suis inscrit au baccalauréat en design de produits
                        à l’Université Laval. Après une session, je me suis
                        rendu compte que ce n’était pas pour moi. Je suis donc
                        retourné à mes sources et je me suis inscrit au
                        Baccalauréat en design graphique.
                    </p>
                    <p>
                        Ayant accumulé plusieurs cordes à mon arc avec les
                        années, je jongle maintenant entre design, modélisation
                        3D, intégration web et programmation dans mes temps
                        libres.
                    </p>
                    <p>
                        J’aime faire du design et du “reverse engineer” afin de
                        comprendre ce qui a poussé l’auteur d’un design à
                        l’avoir fait ainsi. J’aime aussi créer des sites web et
                        programmer. Je tape couramment en HTML, CSS et
                        JavaScript. J’ai d'ailleurs commencé à apprendre Swift
                        avec Xcode.
                    </p>
                </div>
                <ul class="no-list links">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jeremygoulet/"
                            target="_blank"
                            class="external-link"
                        >
                            Linkedin
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
                <ul class="no-list experiences">
                    <li>
                        <span class="where">
                            Corro-Protec (2023 - Aujourd'hui)
                        </span>
                        <span class="poste">Designer graphique</span>
                        <ul class="no-list two-col">
                            <ul class="col">
                                <li>
                                    Création de logos et de marques pour des
                                    compagnies et des produits de l’entreprise.
                                </li>
                                <li>
                                    Création d’images utilisées sur Amazon et
                                    sur le site web de l’entreprise.
                                </li>
                                <li>
                                    Conception d’emballages, de présentoirs et
                                    de guides d’utilisation pour les produits de
                                    l’entreprise.
                                </li>
                                <li>
                                    Conception de vidéos promotionnels dans
                                    <em>After Effects</em>
                                    et
                                    <em>Premiere Pro.</em>
                                </li>
                            </ul>
                            <ul class="col">
                                <li>Modélisation 3D.</li>
                                <li>
                                    Présentation des projets et itération selon
                                    les commentaires reçus.
                                </li>
                                <li>
                                    Maintien de la cohérence de la marque dans
                                    tous les éléments visuels grâce au respect
                                    du guide de style.
                                </li>
                                <li>
                                    Gestion de plusieurs projets simultanément
                                    en s’assurant de respecter les échéances et
                                    en établissant un ordre de priorité.
                                </li>
                            </ul>
                        </ul>
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
</script>

<style lang="scss">
.max-width {
    max-width: $mq-sm;
    margin: 0 auto;
    position: relative;
}

.description {
    padding-top: 160px;
    line-height: 29px;
    color: $light-gray;
    letter-spacing: 0.2px;
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
    h3 {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 4rem;
    }

    .experiences {
        li {
            .where {
                display: block;
                font-size: 22px;
                font-weight: 600;
            }
            .poste {
                display: block;
                line-height: 29px;
                font-weight: 400;
                padding: 1rem 0;
                color: $light-gray;
            }
            .two-col {
                display: flex;

                .col {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 0;
                    padding-left: 20px;
                    list-style-type: disc;
                    font-size: 15px;
                    line-height: 27px;
                    gap: 5px;
                    color: $light-gray;
                }
            }
        }
    }
}
</style>
