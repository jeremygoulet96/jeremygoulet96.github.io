<template>
    <header class="header">
        <nav class="nav">
            <div class="contact-me-box">
                <NuxtLink
                    to="mailto:info@jeremygoulet.ca"
                    target="_blank"
                    class="contact-me blurred-nav"
                >
                    <NuxtImg
                        class="memoji"
                        src="/img/memoji.png"
                        quality="60"
                        format="webp"
                        width="40"
                        height="40"
                        alt="Memoji Jérémy"
                    />
                </NuxtLink>
                <span class="message">Contactez-moi! 🤝</span>
            </div>
            <ul
                class="nav-list blurred-nav"
                :class="{
                    'is-about': $route.name === 'a-propos',
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
            <button type="button" class="btn-menu blurred-nav">
                <span class="line line-1" aria-hidden="true"></span>
                <span class="line line-2" aria-hidden="true"></span>
                <span class="line line-3" aria-hidden="true"></span>
                <span class="visually-hidden">Ouvrir le menu</span>
            </button>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
$header-height: 60px;
$border-radius: 100px;
.header {
    display: fixed;
    padding: $padding-sm;
    width: 100%;

    // Large
    @media (min-width: $mq-lg) {
        padding: $padding-lg;
    }
    .nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        min-width: 316px;

        .blurred-nav {
            display: block;
            backdrop-filter: blur(10px);
            background-color: rgba($white, 0.5);
            border-radius: $border-radius;
            box-shadow: rgba($black, 0.1) 0px 24px 48px 8px;
            padding: 6px;
            height: $header-height;
        }

        .btn-menu,
        .contact-me {
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

        .contact-me-box {
            position: relative;

            &:has(.contact-me:hover) {
                .message {
                    opacity: 1;
                    transform: translateY(175%);

                    // Large
                    @media (min-width: $mq-lg) {
                        transform: translateY(-50%);
                    }
                }
            }

            .contact-me {
                display: flex;
                justify-content: center;
                align-items: center;
                width: $header-height;
                overflow: hidden;

                .memoji {
                    width: 40px;
                    transition: transform $transition-short;
                }
            }

            .message {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                color: $white;
                background-color: $pale-blue;
                border-radius: $border-radius;
                white-space: nowrap;
                padding: 10px 18px;
                opacity: 0;
                font-size: $font-size-smaller;
                transform: translateY(50%);
                transform-origin: 0 0;
                transition: transform $transition-normal,
                    opacity $transition-normal;

                // Large
                @media (min-width: $mq-lg) {
                    transform-origin: 0 50%;
                    top: 50%;
                    left: 125%;
                    transform: translateY(-50%) translateX(-50%);
                }
            }
        }

        .nav-list {
            display: flex;
            justify-content: space-between;
            position: relative;

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
                border-radius: $border-radius;
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
                border-radius: $border-radius;
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
                        font-size: $font-size-base;
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
                transition: transform 0.3s ease-in-out;
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
}
</style>
