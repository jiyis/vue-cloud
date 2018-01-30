<template>
  <div class="left">
    <div class="Sbox">
      <div class="topic">新闻动态&nbsp;&nbsp;&nbsp;News</div>
      <div class="blank">
        <ul>
          <li v-for="item in category" :key="item.id">
            <router-link  :to="'/'+item.url">{{ item.name }}</router-link>
          </li> 
        </ul>
      </div>
    </div>
    <div class="HeightTab clearfix"></div>
    <div class="Sbox">
      <div class="topic">最新资讯&nbsp;&nbsp;&nbsp;News</div>
      <div class="list">
        <dl>
          <dd v-for="(item, key) in news.slice(0, 3)" :key="key">
            <router-link target="_blank"  :to="'/news/'+item.id">{{ item.title }}</router-link>
          </dd>
        </dl>
      </div>
    </div>
    <div class="HeightTab clearfix"></div>
    <div class="Sbox">
      <div class="topic">联系我们&nbsp;&nbsp;&nbsp;Contact</div>
      <div class="content">
        <p>地址：上海浦东新区巨峰路1200号</p>
        <p>电话：021-68856647</p>
        <p>邮件：info#stemsky.com</p>
        <p>网站：<a href="http://www.stemsky.com" target="_blank">http://www.stemsky.com</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../config/config.json';

export default {
  name: 'left',
  data() {
    return {
      category: '',
      news: '',
      contact: '',
    };
  },
  created() {
    this.$axios.all([
      this.$axios.get(`${config.apiDomain}/category/4`),
      this.$axios.get(`${config.apiDomain}/lists/news`),
      this.$axios.get(`${config.apiDomain}/pages/contact`),
    ]).then(
      this.$axios.spread((category, news, contact) => {
        this.category = category.data.data;
        this.news = news.data.data;
        this.contact = contact.data;
      }, (error) => {
        this.$Message.error(error.toString());
      }));
  },
};
</script>
<style scoped lang="scss">
.left {
  width: 220px;
  float: left;
  background: #ffffff;
  .Sbox {
    border: 1px solid #E5E5E5;
    background: #fff;
    width: 220px;
    font-size: 12px;
    .topic {
      font-size: 18px;
      height: 54px;
      font-family: "Microsoft Yahei";
      margin: 0px 0px 0px 0px;
      line-height: 54px;
      border-bottom: 1px solid #DDDDDD;
      padding-left: 10px;
      color: #ffffff;
      font-weight: normal;
      background: url('../assets/images/tabbg.png');
    }
    ul {
      li {
        cursor: pointer;
        height: 30px;
        list-style: none;
        background: url(../assets/images/link_bg11.gif) no-repeat;
        a {
          display: block;
          color: #333333;
          height: 35px;
          line-height: 30px;
          padding-left: 30px;
          border-bottom: 1px dotted #DDDDDD;
          background: url(../assets/images/link_bg2.gif) no-repeat 12px 10px;
          font-size: 14px;
        }
      }
    }
    .list {
      dl {
        padding: 0px 10px;
        dd{
          line-height: 30px;
          border-bottom: 1px dotted #DDDDDD;
          list-style: circle;
          padding-left: 10px;
          a {
            color: #333333;
          }
          a:active, a:hover {
            color: #0170d9;
          }
        }
      }
    }
    .content{
      padding: 10px;
      line-height: 25px;
    }
  }
}
</style>

