import VueRouter from 'vue-router';
import Vue from "vue";

import Category from "../pages/Category/Category.vue";
import CharShop from "../pages/CharShop/CharShop.vue";
import Home from "../pages/Home/Home.vue";
import My from "../pages/My/My.vue";
import search from "@/pages/search/search.vue";



Vue.use(VueRouter)

export default new VueRouter({
      mode: 'history',
      
      routes: [
        {
          path: '/search',
          component: search,
        },
        {
          path: '/home',    //主页
          component: Home,
          meta: {
            isShowLogin: true
          },
        },
        {
          path: '/category',
          component: Category,
          meta: {
            isShowLogin: true
          }
        },
        {
          path: '/charshop',
          component: CharShop,
          meta: {
            isShowLogin: true
          }
        },
        {
          path: '/my',
          component: My,
          meta: {
            isShowLogin: true
          }
        },
        // 自动重定向的路由
        {
          path: '/',
          redirect: '/home'
        }
      ]

})