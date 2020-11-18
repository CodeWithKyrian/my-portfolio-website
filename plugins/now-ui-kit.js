import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/now-ui-kit.scss';
import '@/assets/demo/demo.css';
import globalComponents from './globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);
Vue.use(globalComponents);