// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(iView);

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限 localStorage.token
//     if (localStorage.token) {  // 通过获取当前的token是否存在
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath },  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       });
//     }
//   } else {
//     next();
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
