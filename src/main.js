import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./vuex/store";
import 'lib-flexible/flexible'

Vue.config.productionTip = false

Vue.prototype.$eventBUS = new Vue
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
