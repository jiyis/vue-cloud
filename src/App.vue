<template>
  <div id="app">
    <headers v-show="this.$route.meta.layout"></headers>
    <router-view/>
    <footers v-show="this.$route.meta.layout"></footers>
  </div>
</template>

<script>
import lodash from 'lodash';
import Vue from 'vue';
import axios from 'axios';
import headers from './view/Top';
import footers from './view/Bottom';
import './assets/css/reset.css';
import config from './config/config.json';

Vue.prototype.$axios = axios;
Vue.prototype._ = lodash;

export default {
  name: 'app',
  components: {
    headers,
    footers,
  },
  methods: {
    check() {
      this.$axios.get(`${config.apiDomain}/auth/expire`)
          .then((res) => {
            if (res.data.expire) {
              localStorage.removeItem('name');
              localStorage.removeItem('token_expire');
              localStorage.removeItem('token');
              this.$router.push({ path: '/' });
            }
          })
          .catch((err) => {
            this.$Message.error(err.toString());
          });
    },
  },
  created() {
    // 自定义的 axios 响应拦截器
    this.$axios.interceptors.request.use((request) => {
      const token = localStorage.token;
      if (token) {
        return {
          ...request,
          headers: {
            Authorization: token,
          },
        };
      }
      return request;
    }, error => Promise.reject(error));

    // this.$axios.interceptors.response.use((response) => {
    //   // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    //   const restoken = response.headers.authorization;
    //   if (restoken) {
    //     // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
    //     this.$store.dispatch('refreshToken', restoken);
    //   }
    //   return response;
    // }, (error) => {
    //   switch (error.response.status) {
    //     // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
    //     case 401:
    //       return true;
    //     // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
    //     case 400:
    //       return this.$Message.error(error.response.data.error);
    //     default:
    //       break;
    //   }
    //   return Promise.reject(error);
    // });
    // 先检验是否token过期，如果存在并且过期，跳转到登录页面，不存在就继续
    // this.check();
  },
};
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}
</style>
