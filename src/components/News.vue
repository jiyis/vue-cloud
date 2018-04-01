<template>
<div class="bg">
  <div class="container">
    <left></left>
    <div class="right">
      <div class="Position"><span>你的位置：<a href="/">首页</a> &gt; <a href="/News/">{{ getRouteName() }}</a></span></div>
      <div class="content">
        <ul>
          <li v-if="news.data.length === 0">暂无信息</li>
          <li class="item" v-for="(item, key) in news.data" :key="key">
            <router-link target="_blank"  :to="'/'+$route.params.category+'/'+item.id">{{ item.title }}</router-link>
            <span class="time">[{{ item.created_at }}]</span>
          </li>
        </ul>
        <Page :total="total" :page-size="per_page" @on-change="changepage"  show-elevator class="pagation"></Page>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import left from './Left';
import config from '../config/config.json';

export default {
  name: 'news',
  data() {
    return {
      news: '',
      total: 5,
      per_page: 10,
    };
  },
  components: {
    left,
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  methods: {
    changepage(index) {
      this.$axios.get(`${config.apiDomain}/lists/${this.$route.params.category}?page=${index}`).then((response) => {
        this.news = response.data;
      }, (error) => {
        this.$Message.error(error.toString());
      });
    },
    getData() {
      this.$axios.get(`${config.apiDomain}/lists/${this.$route.params.category}`).then((response) => {
        this.news = response.data;
        this.total = response.data.meta.total;
        this.per_page = response.data.meta.per_page;
      }, (error) => {
        this.$Message.error(error.toString());
      });
    },
    getRouteName() {
      let name = '';
      if (this.$route.params.category === 'news') {
        name = '新闻资讯';
      } else if (this.$route.params.category === 'industry') {
        name = '行业新闻';
      } else { // seminar
        name = '专题报道';
      }
      return name;
    },
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
        padding: 0 15px;
        ul{
          padding: 20px 0;
          .item{
            border-bottom: 1px dashed #CCC;
            line-height: 40px;
            padding-top: 8px;
            .time {
              float: right;
              padding-right: 10px;
            }
          }
        }
        a {
          color: #333333;
        }
        a:active, a:hover {
          color: #fe2323;
        }
      }
    }
  }
</style>
