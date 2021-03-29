import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './commons/store';
import '@/views/filters/index';
import '@/commons/assets/styles/style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
