<template>
  <div class="bottom" id="footer">
    <section class="section section-f2">
      <div class="container">
        <ul>
          <li style="padding: 0px 40px;"><a href="/Index/news">新闻中心</a></li>
          <li style="padding: 0px 40px;"><a href="/About">关于我们</a></li>
          <li style="padding: 0px 40px;"><a href="/About#contactus">联系我们</a></li>
          <!-- <li><a href="/Index/job">加入我们</a></li> -->
          <li style="padding: 0px 40px;"><a href="/Job">加入我们</a></li>
        </ul>
        <ul>
          <li style="padding: 0px 40px;"><a href="/Speaking">综合口语课程</a></li>
          <!-- <li><a href="/Business">精品商务课程</a></li> -->
          <li style="padding: 0px 40px;"><a href="/Youths">青少儿课程</a></li>
          <li style="padding: 0px 40px;"><a class="btn-reg">免费领取</a></li>
        </ul>
        <ul>
          <li style="padding: 0px 40px;"><a href="/Index/agent_apply" rel="external nofollow">代理招募</a></li>
          <li style="padding: 0px 40px;"><a href="/Index/faq" rel="external nofollow">常见问题</a></li>
          <!--<li><a href="/Index/experience" rel="external nofollow">会员体验</a></li>-->
          <li style="padding: 0px 40px;"><a href="/Index/law" rel="external nofollow">法律声明</a></li>

        </ul>
        <ul>
          <li style="padding: 0px 40px;"><a>友情链接</a></li>
          <li style="padding: 0px 40px;"><a href="http://www.pinghe.com/" target="_blank" rel="external nofollow">平和英语村</a></li>
          <li style="padding: 0px 40px;"><a href="http://www.jiajiaoban.com/" target="_blank" rel="external nofollow">智康1对1</a></li>
        </ul>
        <ul>
          <li style="padding: 0px 40px;"><a href="http://www.topadmitchina.com/" class="ylink" target="_blank" rel="external nofollow" style="text-align: left;">达美云留学</a></li>
          <li style="padding: 0px 40px;"><a href="http://www.jiemo.net/" class="ylink" target="_blank" rel="external nofollow" style="text-align: left;">芥末留学</a></li>
          <li style="padding: 0px 40px;"><a href="http://www.ibantang.com" class="ylink" target="_blank" rel="external nofollow" style="text-align: left;">半塘</a></li>
        </ul>
        <a class="a-ewm a-ewm1"><i></i><span>微信账号：boruiyingyu</span></a>
        <a class="a-ewm a-ewm2"><i></i><span>微信账号：abc360_service</span></a>
      </div>
    </section>
    <section class="section section-f3">
      <div class="container">
        <span class="span-l">Copyright © 2017 杭州旦悦科技有限公司 All Rights Reserved.<br>浙ICP证B2-20150540号 浙ICP备11057852号</span>
        <div class="f-right">
          <span class="span-1"><a href="http://si.trustutn.org/info?sn=688171114030967570338&amp;certType=1" rel="external nofollow" target="_blank"><i></i>中国认证联盟认证</a></span>
          <span class="span-2"><a href="http://www.51honest.org/wscredit/detail.credit?action=preLevel&amp;credcode=NO.20000038073&amp;axbFlag=axb" rel="external nofollow" target="_blank"><i></i>网站信用认证</a></span>
          <span class="span-3"><a href="http://www.anquan.org/authenticate/cert/?site=www.abc360.com&amp;at=realname" target="_blank" rel="external nofollow"><i class="ico_comfirm com_t3"></i>安全联盟认证</a></span>
          <span class="span-4"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802003394" target="_blank" rel="external nofollow"><i class="ico_comfirm com_t3"></i>浙公网安备 33010802003394号</a></span>
        </div>
        <div style="clear:both;"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data() {
    return {
      category: {
        teaching: 'Stemsky授课',
        cooperation: '学校合作',
        'R&D': '课程研发',
        knowledge: '知识天地',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  #footer .section-f1 {
    background-color: rgba(0,0,0,.7);
    color: #fff;
    text-align: left;
    font-size: 22px
  }

  #footer .section-f1-fix {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%
  }

  #footer #f-form div:first-child {
    text-align: right
  }

  #footer .section-f1 .btn-b {
    width: 160px;
    height: 49px;
    line-height: 49px
  }

  #footer .section-f1 .btn-c,#footer .section-f1 input {
    margin: 10px 0
  }

  #footer .section-f1 span {
    display: inline-block;
    margin: 18px 0
  }

  #footer .section-f2 {
    display: block;
    margin: 0 auto;
    background-image: url('../assets/images/bg10.png');
    height: 300px;
  }

  #footer .section-f2 ul {
    float: left;
    height: 120px;
    border-left: 1px solid #000;
    text-align: left
  }

  #footer .section-f2 ul li {
    padding: 0 51px;
    line-height: 2.1
  }

  #footer .section-f2 ul:first-child {
    padding-left: 0;
    border-left: none
  }

  #footer .section-f2 ul li a {
    color: #878787;
    font-size: 14px
  }

  #footer .section-f2 ul li:hover a {
    color: #fff
  }

  #footer .section-f2 .container {
    /*padding: 92px 0 100px;*/
    width: 1200px;
    height: 360px;
    margin: 0 auto;
    padding-top: 60px;
  }

  #footer .section-f2 .a-ewm {
    display: inline-block
  }

  #footer .section-f2 .a-ewm i {
    display: block;
    margin-bottom: 10px;
    width: 141px;
    height: 140px;
    background: url(../assets/images/ewm1.jpg);
    background-size: 100%
  }

  #footer .section-f2 .a-ewm1 {
    margin: 0 30px 0 0
  }

  #footer .section-f2 .a-ewm1 i {
    background: url(../assets/images/ewm1.jpg)
  }

  #footer .section-f2 .a-ewm span {
    color: #878787;
    font-size: 14px
  }

  #footer .section-f2 .a-ewm:hover span {
    color: #fff
  }

  #footer .section-f3 {
    background-color: #181818;
    color: #7b7b7b;
    text-align: left;
    font-size: 13px;
    line-height: 65px
  }

  #footer .section-f3 span a {
    color: #7b7b7b
  }

  #footer .section-f3 span a:hover {
    color: #fff
  }

  #footer .section-f3 .f-right {
    float: right
  }

  #footer .section-f3 .f-right a>i {
    display: inline-block;
    margin: 0 5px -8px 0;
    width: 30px;
    height: 30px;
    background: url(../assets/images/f-icon.png) no-repeat
  }

  #footer .section-f3 .f-right span {
    margin-right: 5px
  }

  #footer .section-f3 .f-right .span-1 i {
    background-position: 0 0
  }

  #footer .section-f3 .f-right .span-2 i {
    width: 26px;
    background-position: -30px 0
  }

  #footer .section-f3 .f-right .span-3 i {
    width: 28px;
    background-position: -55px 0
  }

  #footer .section-f3 .f-right .span-4 i {
    width: 28px;
    background-position: -87px 0
  }

  #footer .section-f3 .span-l {
    float: left;
    display: inline-block;
    padding-top: 12px;
    line-height: 20px
  }
</style>
