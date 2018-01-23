<template>
<div>
    <div class="header" :style="{backgroundImage: 'url(' + headerBg + ')'}">
        <div class="top">
            <div class="logo">
                <img src="../assets/images/logo.png"/>
            </div>
        </div>
        <div class="nav">
            <ul class="menu">
                <li  v-for="(item, index) in menus" :key="index">
                    <a href="#"> {{ item }} </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
const headerBg = require('../assets/images/header_bg.png');

export default {
  name: 'Top',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      headerBg,
      menus: {
        home: '首页',
        course: '在线课程',
        news: '新闻资讯',
        teams: '合作伙伴',
        jobs: '人才招聘',
        contact: '联系我们',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header{
       width: 100%;
       max-width: 1920px;
       height: 188px;
       position: relative;
    }
    .top {
        width: 1200px;
        margin: 0 auto;
    }
    .top img {
        margin-top: 45px;
    }
    .nav {
        width: 1200px;
        height: 50px;
        border: 1px solid #dcdcdc;
        background: #ffffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
    }
    .menu {
        li{
            float: left;
            width: 15%;
            list-style: none;
            color: #333333;
            padding-left: 7%;
            text-align: center;
            a {
                display: block;
                color: #333333;
                text-decoration: none;
                padding: 17px 0 13px;
                cursor: pointer;
                font-weight: 800px; 
                font-size: 16px;
            }
            a:hover,a:active {
                border-bottom: 2px solid #eb2232;
            }
        }
         
    }
</style>