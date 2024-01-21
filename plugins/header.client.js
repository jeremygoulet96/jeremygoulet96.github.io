import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default defineNuxtPlugin(() => {
    let navIsOpen = false;

    document.querySelector(".btn-menu").addEventListener("click", openCloseNav);

    function openCloseNav(e) {
        e && e.preventDefault();
        navIsOpen ? closeNav() : openNav();
    }

    function openNav() {
        navIsOpen = true;
        document.querySelector(".btn-menu").classList.add("is-open");
        document.querySelector(".secondary-nav-list").classList.add("is-open");
        document.querySelector(".contact-me-box").classList.add("nav-is-open");
        document.querySelector(".nav-list").classList.add("nav-is-open");
        document.querySelector("main").classList.add("nav-is-open");
        disableBodyScroll(document.querySelector(".secondary-nav-list"));
    }

    function closeNav() {
        navIsOpen = false;
        document.querySelector(".btn-menu").classList.remove("is-open");
        document
            .querySelector(".secondary-nav-list")
            .classList.remove("is-open");
        document
            .querySelector(".contact-me-box")
            .classList.remove("nav-is-open");
        document.querySelector(".nav-list").classList.remove("nav-is-open");
        document.querySelector("main").classList.remove("nav-is-open");
        enableBodyScroll(document.querySelector(".secondary-nav-list"));
    }
});
