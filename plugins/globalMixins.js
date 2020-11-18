/**
 * You can register global mixins here
 */
import Vue from 'vue';
Vue.mixin({
    mounted() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
            document.body.classList.add(bodyClass);
        }
    },
    beforeDestroy() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
            document.body.classList.remove(bodyClass);
        }
    }
});