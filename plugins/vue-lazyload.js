import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    preLoad: 1.77777777778,
    observer: true,
    loading: '/img/loading.gif',
    // optional
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
    }
});