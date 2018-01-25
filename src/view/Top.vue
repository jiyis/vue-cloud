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
                <li v-for="(item, index) in menus" :key="index">
                    <router-link :to="item.url">{{ item.title }}</router-link>
                </li>
                <div style="clear:both;"></div>
            </ul>
            <div class="login"><Icon type="ios-person" size="25"></Icon><router-link to="/login">登录</router-link></div>
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
        home: {
          title: '首页',
          url: '/',
        },
        course: {
          title: '在线课程',
          url: '/course',
        },
        news: {
          title: '新闻资讯',
          url: '/news',
        },
        teams: {
          title: '合作伙伴',
          url: '/pages/teams',
        },
        jobs: {
          title: '人才招聘',
          url: '/pages/jobs',
        },
        contact: {
          title: '联系我们',
          url: '/pages/contact',
        },
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
        .login {
            display: block;
            float: left;
            height: 50px;
            i {
                padding:16px 8px;
            }
            a {
                display: block;
                float: right;
                line-height: 57px;
            }
        }
    }
    .menu {
        display: block;
        width: 90%;
        float: left;
        li{
            float: left;
            width: 15%;
            list-style: none;
            color: #333333;
            padding-left: 3%;
            text-align: center;
            a {
                display: block;
                color: #333333;
                text-decoration: none;
                padding: 17px 0 9px;
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