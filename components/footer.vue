<template>
    <footer class="footer">
        <div class="max-width">
            <span class="emoji title load-anim">✌️</span>
            <div class="content">
                <div class="cta load-anim">
                    <span class="title">
                        Travaillons
                        <br />
                        ensemble.
                    </span>
                    <ContactMeBtn />
                </div>
                <div class="footer-nav load-anim">
                    <div class="contact-me">
                        <small>Contactez-moi</small>
                        <NuxtLink
                            to="mailto:info@jeremygoulet.ca"
                            target="_blank"
                            class="link"
                        >
                            info@jeremygoulet.ca
                        </NuxtLink>
                    </div>
                    <nav>
                        <ul class="no-list nav-list">
                            <li>
                                <NuxtLink
                                    to="/"
                                    class="link"
                                    activeClass="active"
                                >
                                    Projets
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/a-propos"
                                    class="link"
                                    activeClass="active"
                                >
                                    À propos
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="all-rights">
                        <small>Tous droits réservés.</small>
                        <span>© Jérémy Goulet 2023</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: $black;
    height: 100vh;
    position: relative;
    z-index: 999;

    .max-width {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        // Large
        @media (min-width: $mq-lg) {
            align-items: unset;
        }

        .content {
            .cta {
                margin-bottom: 6rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                // Large
                @media (min-width: $mq-lg) {
                    display: block;
                }

                span {
                    color: $white;
                }

                .contact-me-box {
                    margin-top: 2rem;

                    // MOBILE ONLY
                    @media (max-width: $mq-lg) {
                        .message {
                            left: 50%;
                            transform: translateX(-50%);
                        }

                        &:has(.contact-me:hover) {
                            .message {
                                opacity: 1;
                                transform: translateX(-50%) translateY(175%);
                            }
                        }
                    }
                }
            }

            .footer-nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                gap: 40px;

                // Large
                @media (min-width: $mq-lg) {
                    flex-direction: row;
                    align-items: flex-end;
                }

                .contact-me,
                .all-rights {
                    text-align: center;

                    // Large
                    @media (min-width: $mq-lg) {
                        text-align: left;
                    }

                    small {
                        display: block;
                        font-size: $font-size-smallest;
                        color: $light-gray;
                        margin-bottom: 5px;
                    }

                    a,
                    span {
                        display: block;
                        font-size: 14px;
                        color: $white;
                    }
                }

                .all-rights {
                    // Large
                    @media (min-width: $mq-lg) {
                        text-align: right;
                    }
                }

                nav {
                    .nav-list {
                        display: flex;
                        gap: 20px;

                        li {
                            a {
                                font-size: 14px;
                                color: $white;

                                &::after {
                                    background-color: $white;
                                }

                                &.active {
                                    &::after {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
