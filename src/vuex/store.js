import Vue from 'vue';
import Vuex from 'vuex';
import home from "./modules/home";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex)

export default new Vuex.Store({  //创建store核心对象
  actions,
  mutations,
  getters,
  modules: {
    home
  }
})