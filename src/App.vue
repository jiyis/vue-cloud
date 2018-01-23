<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import headers from './view/Top';
import footers from './view/Bottom';
import './assets/css/reset.css';

Vue.prototype.$axios = axios;
export default {
  name: 'app',
  components: {
    headers,
    footers,
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
