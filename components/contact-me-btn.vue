<template>
    <div class="contact-me-box">
        <NuxtLink
            to="mailto:info@jeremygoulet.ca"
            target="_blank"
            class="contact-me blurred-nav"
        >
            <NuxtImg
                class="memoji"
                format="webp"
                src="/img/memoji.png"
                quality="60"
                width="60"
                height="60"
                densities="x1 x2"
                alt="Memoji Jérémy"
            />
        </NuxtLink>
        <span class="message">Contactez-moi! 🤝</span>
    </div>
</template>

<style lang="scss" scoped>
.contact-me-box {
    position: relative;
    display: inline-block;
    transition: opacity 0.5s;

    &.nav-is-open {
        opacity: 0;

        .contact-me {
            pointer-events: none;
        }
    }

    &:has(.contact-me:hover) {
        .message {
            opacity: 1;
            transform: translateY(175%);

            // Large
            @media (min-width: $mq-lg) {
                transform: translateY(-50%) translateX(80px);
            }
        }
    }

    .contact-me {
        height: $header-height;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: $header-height;
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

        .memoji {
            width: 40px;
            height: 40px;
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
        border-radius: $header-border-radius;
        white-space: nowrap;
        padding: 10px 18px;
        opacity: 0;
        // font-size: $font-size-smaller;
        transform: translateY(50%);
        // transform-origin: 0 0;
        transition: transform $transition-normal, opacity $transition-normal;

        // Large
        @media (min-width: $mq-lg) {
            // transform-origin: 0 50%;
            top: 50%;
            // left: 125%;
            left: 0;
            transform: translateY(-50%);
            font-size: $font-size-bigger;
        }
    }
}
</style>
