import Vue from 'vue';
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Vidle from 'v-idle'
import { LayoutPlugin, ButtonPlugin } from 'bootstrap-vue';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(Vidle)
Vue.use(LayoutPlugin);
Vue.use(ButtonPlugin)
Vue.use(VueSweetalert2);
Vue.use(VueToast);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');