import JOS from 'jos-animation/dist/jos.js';

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
    JOS.init({
        passive: true,
        animation: 'fade',
        duration: 0.4,
        rootMargin: '20% 0% 30% 0%',
    });
    nuxtApp.vueApp.directive('jos', {
        mounted(el) {
            el.classList.add('jos');
            JOS.refresh();
        },
    });
    watch(
        () => router.currentRoute.value,
        () => {
            nextTick(() => {
                JOS.refresh();
            });
        }
    );
});
