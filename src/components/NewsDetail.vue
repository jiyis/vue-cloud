<template>
<div class="bg">
  <div class="container">
    <left></left>
    <div class="right">
      <div class="Position"><span>你的位置：<a href="/">首页</a> &gt; <a href="/News/">新闻动态</a></span></div>
      <div class="content">
        <div class="title"><h3>特朗普给两亿拨款 推进STEM教育</h3></div>
        <div class="infos">2017-12-26 14:19:41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;219</div>
        <div class="content-item">
近日，美国总统特朗普签署意向备忘录，拨款2亿美元加大对科学、技术、工程以及数学(STEM)专业教育的支持，尤其注重计算机科学和编程方面的学校教育。为了强调这一倡议的必要性，白宫援引统计数据显示：目前只有不到一半的高中提供计算机编程；在2015年，近40%的高中没有提供物理课程。

特朗普的女儿伊万卡将于周二前往底特律，会见科技公司的高管并宣布Facebook, Google, Amazon, Quicken Loans, 和通用汽车的部分私营部门将要加入这一倡议。这代表着科技行业的一次罕见的胜利。因为这届政府在公立学校的课程设置中优先考虑编程的问题，长期以来一直是苹果首席执行官蒂姆库克的(Tim Cook)和微软(Microsoft)总裁布拉德·史密斯(Brad Smith)等人关注的焦点。

在发布的一份声明中，微软(Microsoft)总裁布拉德·史密斯(Brad Smith)说:“我们的国家正面临着两代人都未能解决解决的挑战:重新设计教育体系，跟上技术进步的步伐。在上世纪50年代，太空竞赛促使学校开始教授物理学。今天，一切都是关于计算机科学教育的。微软期待与其他公司、非营利组织以及联邦政府和州政府合作，帮助将计算机科学引入美国的主流教育课程。这对我们的国家、我们的企业、最重要的是我们国家的年轻人都有好处。”




全文翻译后内容如下：



对美国劳动力的承诺:美国总统特朗普致力于帮助美国工作者争取成功

政府的首要任务之一是为更多的美国人提供获得相关教育和技能的机会，从而使他们找到一份好工作。

我们必须采取更多措施帮助美国人取得他们在当今就业市场上所需要的技能。

      根据劳工统计局的数据，就业率低至是62.9%，很多美国人都在努力寻找全职工作。


        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import left from './Left';

export default {
  name: 'newsDetail',
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
