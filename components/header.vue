<template>
    <header>
        <nav class="nav">
            <NuxtLink
                to="mailto:info@jeremygoulet.ca"
                target="_blank"
                class="contact-me blurred-nav"
            >
                <span class="visuallyHidden">Contactez-moi</span>
            </NuxtLink>
            <ul class="nav-list blurred-nav">
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
                <span class="line" aria-hidden="true"></span>
                <span class="line" aria-hidden="true"></span>
                <span class="line" aria-hidden="true"></span>
                <span class="visuallyHidden">Ouvrir le menu</span>
            </button>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: fixed;
    padding: $padding-sm-side;
    width: 100%;
    .nav {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .blurred-nav {
            display: block;
            backdrop-filter: blur(10px);
            background-color: rgba($white, 0.5);
            border-radius: 500px;
            box-shadow: rgba($black, 0.1) 0px 24px 48px 8px;
            padding: 6px;
            height: 60px;
        }

        .contact-me {
            width: 60px;
        }

        .nav-list {
            display: flex;
            justify-content: space-between;

            li {
                display: flex;
                align-items: center;
                border-radius: 500px;
                // font-size: 16px;
                padding: 0 16px;

                a {
                    color: $black;
                    text-decoration: none;
                    font-weight: 500;
                }

                &:has(a.active) {
                    background-color: $white;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
                }
            }
        }

        .btn-menu {
            position: relative;
            width: 60px;
            z-index: 999;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background: 0 0;
            padding: 0;
            color: $black;
            transition: transform 0.2s ease-in-out;

            &:active {
                transform: scale(0.75);
            }

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
                    &:first-child {
                        transform: translateY(5px) rotate(45deg);
                    }
                    &:last-child {
                        transform: translateY(-6px) rotate(-45deg);
                    }
                }
            }
        }
    }
}
</style>
