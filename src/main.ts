import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import JQuery from 'jquery';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

window.$ = JQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
