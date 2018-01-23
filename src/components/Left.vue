<template>
  <div class="left">
    <div class="Sbox">
      <div class="topic">新闻动态&nbsp;&nbsp;&nbsp;News</div>
      <div class="blank">
        <ul>
          <li><a href="/News/CompanyNews">Stemsky新闻</a></li> 
          <li><a href="/News/IndustryNews">行业新闻</a></li> 
          <li><a href="/News/Report">专题报道</a></li> 
        </ul>
      </div>
    </div>
    <div class="HeightTab clearfix"></div>
    <div class="Sbox">
      <div class="topic">最新资讯&nbsp;&nbsp;&nbsp;News</div>
      <div class="list">
        <dl>
          <dd><a href="/html/4108361941.html" target="_blank" title="特朗普给两亿拨款 推进STEM教育">特朗普给两亿拨款 推进STE</a></dd>
          <dd><a href="/html/0123571317.html" target="_blank" title="教育的大国利器：美国教育起死回生的大杀器，STEM模式">教育的大国利器：美国教育起死</a></dd><dd><a href="/html/452801811.html" target="_blank" title="美国的stem教育要求的实质是什么？">美国的stem教育要求的实质</a></dd>
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
export default {
  name: 'left',
  data() {
    return {
      name: '111',
    };
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

