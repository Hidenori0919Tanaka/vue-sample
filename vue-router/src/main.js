// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: routes
// });

// const app = new Vue({
//   el: '#app',
//   router
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   components: { App },
   template: '<App/>'
 })
