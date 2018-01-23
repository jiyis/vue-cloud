<template>
<div class="bg">
  <div class="container">
    <left></left>
    <div class="right">
      <div class="Position"><span>你的位置：<a href="/">首页</a> &gt; <a href="/News/">新闻动态</a></span></div>
      <div class="content">
        <ul>
          <li class="item" v-for="(item, key) in items" :key="key">
            <a href="#">特朗普给两亿拨款 推进STEM教育</a><span class="time">[2017-12-26]</span>
          </li>
        </ul>
        <Page :total="100" show-elevator class="pagation"></Page>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import left from './Left';

export default {
  name: 'news',
  data() {
    return {
      name: '111',
      items: {
        name: '1',
        key: '1',
        test: '1',
      },
    };
  },
  components: {
    left,
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
