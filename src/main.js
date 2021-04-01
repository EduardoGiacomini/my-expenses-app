import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import store from './commons/store'
import i18n from './commons/plugins/i18n'
import '@/views/filters/index'
import '@/commons/assets/styles/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
