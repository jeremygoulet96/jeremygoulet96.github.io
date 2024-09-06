<template>
    <header class="header">
        <div class="max-width">
            <nav class="header-nav">
                <ContactMeBtn />
                <ul
                    class="no-list nav-list blurred-nav"
                    :class="{
                        'is-about': $route.name === 'a-propos',
                        'nav-is-open': isOpen,
                    }"
                >
                    <li>
                        <NuxtLink to="/" activeClass="active">Projets</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/a-propos" activeClass="active">
                            À propos
                        </NuxtLink>
                    </li>
                </ul>
                <button
                    type="button"
                    class="btn-menu blurred-nav"
                    @click="toggleNav"
                    :class="{ 'is-open': isOpen }"
                >
                    <span class="line line-1" aria-hidden="true"></span>
                    <span class="line line-2" aria-hidden="true"></span>
                    <span class="line line-3" aria-hidden="true"></span>
                    <span class="visually-hidden">Ouvrir le menu</span>
                </button>
            </nav>
        </div>
        <ul
            class="no-list secondary-nav-list blurred-nav"
            ref="secondaryNavList"
            :class="{ 'is-open': isOpen }"
        >
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
                    href="https://twitter.com/jeremygoulet"
                    target="_blank"
                    class="external-link"
                >
                    Twitter
                </a>
            </li>
            <li>
                <a
                    href="https://www.dropbox.com/s/0albikmt9h7o8jm/CV_JeremyGoulet.pdf?dl=0"
                    target="_blank"
                    class="external-link"
                >
                    C.V.
                </a>
            </li>
            <li class="blurred-btn">
                <a href="mailto:info@jeremygoulet.ca" target="_blank">
                    Me contacter
                </a>
            </li>
        </ul>
    </header>
</template>

<script setup>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const isOpen = ref(false);
const secondaryNavList = ref();

function toggleNav(e) {
    e && e.preventDefault();
    isOpen.value ? closeNav() : openNav();
}

function openNav() {
    isOpen.value = true;
    console.log(document.querySelector("main"));
    document
        .querySelector(".header .contact-me-box")
        .classList.add("nav-is-open");
    document.querySelector("main").classList.add("nav-is-open");
    disableBodyScroll(secondaryNavList.value);
}

function closeNav() {
    isOpen.value = false;
    document
        .querySelector(".header .contact-me-box")
        .classList.remove("nav-is-open");
    document.querySelector("main").classList.remove("nav-is-open");
    enableBodyScroll(secondaryNavList.value);
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    padding: $padding-sm;
    width: 100%;
    z-index: 998;

    // Large
    @media (min-width: $mq-lg) {
        padding: $padding-lg;
    }

    .header-nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        min-width: 316px;

        .btn-menu {
            position: relative;
            z-index: 0;
            transition: transform $transition-normal;

            &:hover,
            &:active {
                overflow: visible;
                transform: scale(1.1);

                .memoji {
                    transform: scale(1.1);
                }
            }
        }

        .nav-list {
            display: flex;
            justify-content: space-between;
            position: relative;
            height: $header-height;
            transition: opacity 0.5s;

            &.nav-is-open {
                opacity: 0;

                li a {
                    pointer-events: none;
                }
            }

            &::after {
                content: "";
                display: block;
                position: absolute;
                top: 6px;
                bottom: 6px;
                left: 6px;
                right: 54%;
                z-index: -1;
                background-color: $white;
                box-shadow: rgba($black, 0.1) 0px 8px 16px 0px;
                border-radius: $header-border-radius;
                transition: left 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                    right 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            }

            &.is-about {
                &::after {
                    left: 46%;
                    right: 6px;
                }
            }

            li {
                display: flex;
                align-items: center;
                border-radius: $header-border-radius;
                padding: 16px;

                a {
                    color: $black;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: $font-size-smaller;
                    transition: transform $transition-short;
                    cursor: default;

                    &:not(.active) {
                        transition: transform $transition-short;

                        &:hover {
                            transform: scale(1.1);
                            cursor: pointer;
                        }
                    }

                    // Large
                    @media (min-width: $mq-lg) {
                        font-size: $font-size-bigger;
                    }
                }
            }
        }

        .btn-menu {
            position: relative;
            width: $header-height;
            z-index: 999;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background: 0 0;
            padding: 0;
            color: $black;
            cursor: pointer;

            .line {
                width: 22px;
                height: 2px;
                border-radius: 2px;
                background-color: currentColor;
                display: block;
                margin: 6px auto;
                transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            }

            &.is-open {
                .line {
                    &.line-1 {
                        opacity: 1;
                        transform: translateY(8px) rotate(45deg);
                    }
                    &.line-2 {
                        opacity: 0;
                    }
                    &.line-3 {
                        opacity: 1;
                        transform: translateY(-7.5px) rotate(-45deg);
                    }
                }
            }
        }
    }

    .secondary-nav-list {
        display: flex;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translateX(-50%) translateY(100vh);
        min-width: 250px;
        flex-direction: column;
        align-items: center;
        transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);

        &.is-open {
            transform: translateX(-50%) translateY(-50%);
        }

        li {
            padding: 16px;

            &.blurred-btn {
                display: flex;
                justify-content: center;
                border-radius: $header-border-radius;
                background-color: $white;
                box-shadow: rgba($black, 0.1) 0px 8px 16px 0px;
                width: 100%;
            }
            a {
                font-size: $font-size-bigger;
                font-weight: $font-weight-medium;
                color: $black;
                text-decoration: none;
                transition: color 0.2s;

                &:hover {
                    color: $light-gray;
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
}
</style>
