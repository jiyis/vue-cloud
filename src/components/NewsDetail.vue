<template>
<div class="bg">
  <div class="container">
    <left></left>
    <div class="right">
      <div class="Position"><span>你的位置：<a href="/">首页</a> &gt; <router-link class="title" :to="'/news/'">新闻动态</router-link></span></div>
      <div class="content">
        <div class="title"><h3>{{ content.title }}</h3></div>
        <div class="infos">发布时间： {{ content.created_at }}</div>
        <div class="content-item" v-html="content.content">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import left from './Left';
import config from '../config/config.json';

export default {
  name: 'newsDetail',
  data() {
    return {
      content: '',
    };
  },
  components: {
    left,
  },
  created() {
    this.$axios.get(`${config.apiDomain}/lists/news/${this.$route.params.id}`).then((response) => {
      this.content = response.data;
    }, (error) => {
      this.$Message.error(error.toString());
    });
  },
};
</script>
<style scoped lang="scss">
.bg {
  width: 100%;
  background:#f8f8f8;
  overflow: hidden;
}
.HeightTab {
    height: 20px;
    width: 1px;
    overflow: hidden;
}
  .container {
    width: 1200px;
    margin: 30px auto 0;
    .right {
      width: 950px;
      float: right;
      background: #ffffff;
      .Position {
        font-size: 14px;
        line-height: 33px;
        background: url(../assets/images/box_bg5.jpg) repeat left top;
        text-align: right;
        color: #666666;
        span {
          padding-right: 10px;
        }
        a {
          color: #666666;
        }
      }
      .content{
        .title, .infos{
          margin: 20px auto;
          text-align: center;
        }
        .title {
          font-size: 18px;
        }
        .infos {
          color: #666666;
          font-size: 13px;
        }
        .content-item {
          padding: 20px;
          line-height: 35px;
          text-indent: 30px;
        }
      }
    }
  }
</style>
