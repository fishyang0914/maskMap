import '@babel/polyfill';
import Vue from 'vue'
import App from 'App';
import store from 'store';
import router from 'route';
import VueCookie from "lib/VueCookie.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'scss/global/global.scss';

Vue.use(VueCookie);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    store,
    router,
    render: h=>h(App),
}); 