import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from "./routers";
import store from "./store";
import VueCookies from 'vue-cookies'


Vue.config.productionTip = false


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueCookies)
