<template>
<div>
    <div class="header" style="background:#ffffff;"> <!--:style="{backgroundImage: 'url(' + headerBg + ')'}"-->
        <div class="top">
            <div class="logo">
                <span class="img"><img src="../assets/images/logo.png"/></span>
                <span class="title">江苏STEM云中心</span>
            </div>
        </div>
        <div class="nav">
            <ul class="menu">
                <li v-for="(item, index) in menus" :key="index">
                    <router-link :to="item.url" :class="current == item.name ? 'active' : ''">{{ item.title }}</router-link>
                </li>
                <div style="clear:both;"></div>
            </ul>
            <div class="login">
                <Icon type="ios-cart" class="myicon" size="25"></Icon>
                <router-link to="/pages/cart" v-if="!name">购物车</router-link>
                <Icon type="android-exit" class="myicon" size="25"></Icon>
                <router-link to="/login" v-if="!name">登录</router-link>
                <Icon type="ios-person" class="myicon" size="25"></Icon>
                <router-link to="/pages/register" v-if="!name">注册</router-link>
                <Dropdown v-if="name">
                    <a href="javascript:void(0)">
                        {{ name }}
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem @click.native="center">个人中心</DropdownItem>
                        <DropdownItem @click.native="logout">注销</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import config from '../config/config.json';

const headerBg = require('../assets/images/header_bg.png');

export default {
  name: 'Top',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      headerBg,
      name: '',
      menus: {
        home: {
          title: '首页',
          url: '/',
          name: 'Index',
        },
        course: {
          title: '在线课程',
          url: '/courses',
          name: 'Course',
        },
        news: {
          title: '新闻资讯',
          url: '/news',
          name: 'News',
        },
        teams: {
          title: '合作伙伴',
          url: '/pages/teams',
          name: 'teams',
        },
        jobs: {
          title: '人才招聘',
          url: '/pages/jobs',
          name: 'jobs',
        },
        contact: {
          title: '联系我们',
          url: '/pages/contact',
          name: 'contact',
        },
      },
      current: '',
    };
  },
  created() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    },
  },
  methods: {
    init() {
      this.name = localStorage.name;
      this.current = this.$route.name;
      if (this.$route.name === 'PageDetail') {
        this.current = this.$route.params.category;
      }
      if (this.$route.name === 'NewsDetail') {
        this.current = 'News';
      }
      if (this.$route.name === 'CourseDetail') {
        this.current = 'Course';
      }
    },
    center() {
      this.$router.push('center');
    },
    logout() {
      this.$axios.post(`${config.apiDomain}/auth/logout`)
          .then(() => {
            localStorage.removeItem('name');
            localStorage.removeItem('token_expire');
            localStorage.removeItem('token');
            this.$router.go(0);
          })
          .catch((err) => {
            this.$Message.error(err.toString());
          });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .myicon {
        display: block !important;
        float: left;
    }
    .header{
       width: 100%;
       max-width: 1920px;
       height: 71px;
       position: relative;
    }
    .top {
        width: 18%;
        float: left;
        .logo{
            overflow: hidden;
            .img {
                margin-left: 50px;
                margin-right: 10px;
                margin-top: -5px;
                display: block;
                float: left;
                width: 80px;
                height: 71px;
            }
            .title {
                line-height: 71px;
                border-left: 1px dashed #57a3f3;
                padding: 8px;
                padding-left: 23px;
            }
        }
    }
    .top img {

    }
    .nav {
        width: 82%;
        float: left;
        height: 50px;
        //border: 1px solid #dcdcdc;
        background: #ffffff;
        margin:auto;
        .login {
            display: block;
            float: right;
            border-left: 1px solid #dcdcdc;
            i {
                padding:22px 8px;
            }
            a {
                display: block;
                float: left;
                padding-right: 20px;
                padding-top: 22px;
            }
        }
    }
    .menu {
        display: block;
        width: 65%;
        float: left;
        li{
            float: left;
            width: 100px;
            list-style: none;
            color: #333333;
            padding-left: 3%;
            text-align: center;
            a {
                display: block;
                color: #333333;
                text-decoration: none;
                padding: 20px 0 27px;
                cursor: pointer;
                font-weight: 800px; 
                font-size: 16px;
            }
            a:hover,a:active,.active {
                border-bottom: 2px solid #eb2232;
            }
        }
         
    }
</style>