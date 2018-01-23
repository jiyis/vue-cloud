<template>
  <div class="index">
    <banner></banner>
    <div class="top">
      <ul>
        <li v-for="(value, key) in category" :key="key" class="category">
          <div class="category-top">
            <span class="titlepic"></span>
            <span class="title">{{ value }}</span>
            <span class="subtitle">{{ key }}</span>
          </div>
          <div class="news">
            <div><span class="icon">1</span><a href="#">平时我们常常在国外报纸,在国外报纸</a></div>
            <div><span class="icon">2</span><a href="#">平时我们常常在国外报纸,在国外报纸</a></div>
            <div><span class="icon">3</span><a href="#">平时我们常常在国外报纸,在国外报纸</a></div>
          </div>
          <div class="more">
            更多 >>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-border">
      <div class="bottom">
        <div class="company-news">
          <div class="title-red">公司新闻</div>
          <div class="content">
            <a class="title" href="#">机构网培训</a>
            <span class="desc">萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所</span>
            <span class="time">2018.1.21</span>
          </div>
          <div class="content">
            <a class="title" href="#">机构网培训</a>
            <span class="desc">萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所</span>
            <span class="time">2018.1.21</span>
          </div>
          <div class="content">
            <a class="title" href="#">机构网培训</a>
            <span class="desc">萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所大大所萨达所大所大所</span>
            <span class="time">2018.1.21</span>
          </div>
        </div>
        <div class="about">
          <div class="title-red">关于我们<a href="#" class="more">更多>></a></div>
          <img src="../assets/images/about.png" class="about-img" />
          <span class="about-content">
            平时我们常常在国外报纸、英文文章、国外网站看见文章中英文单词或拼音的首个字母大写，或文章中拼音或英文单词字母全小写或全大写，今天DIVCSS5为大家介绍让英文单词或拼音首个字母大写、全文中英文单词全大写或小写的方法教程.章、国外网站看见文章中英文单词或拼音的首个字母大写，或文章中拼音或英
          </span>
        </div>
      </div> 
    </div>
</div>
</template>

<script>
import banner from '../components/Banner';

export default {
  name: 'Index',
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
  components: {
    banner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top{
    width: 100%;
    height: 425px;
    background: #ffffff;
  }
  .content-border {
    width: 100%;
    height: 510px;
    background: #f8f8f8;
    .bottom {
      width: 1200px;
      margin: 0 auto;
      .company-news, .about {
        margin-top: 40px;
        width: 50%;
        float: left;
        color: #eb2232;
        font-size: 22px;
      }
      .title-red {
        width: 92%;
        font-weight: bold;
        .more {
          color: #808080;
          font-size: 12px;
          float: right;
          padding-top: 8px;
        }
      }
      .company-news {
        font-weight: normal;
        a {
          text-decoration: none;
          display: block;
          color: #333333;
          font-size: 18px;
          font-weight: normal;
        }
        .content {
          padding-top: 25px;
          padding-bottom: 10px;
          width: 90%;
          color: #808080;
          border-bottom: 1px solid #d3d3d3;
          &:last-child {
            border-bottom: none;
          }
        }
        .desc {
          display: block;
          padding: 10px 0 0;
          color: #808080;
          font-size: 14px;
          line-height: 26px;
        }
        .time {
          display: block;
          font-size: 13px;
          text-align: right;
        }

      }
      .about-img {
        padding-top: 25px;
      }
      .about-content {
        width: 93%;
        display: block;
        color: #333333;
        font-size: 14px;
        padding-top:10px;
        line-height: 32px;
      }
      
    }
  }
  
  ul {
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    .category {
      float: left;
      width: 24%;
      margin: 0 auto;
      text-align: center;
      border-right: 1px solid #eeeeee;
      &:last-child {
        border-right: none;
      }
      .category-top {
        width: 160px;
        margin: 0 auto;
        .titlepic {
          display: block;
          background: url('../assets/images/category.png') center;
          width: 70px;
          height: 70px;
        }
        span {
          display: block;
          margin: 0 auto;
        }
        .title {
          font-size: 22px;
          color: #333333;
          height: 20px;
          padding-top: 20px;
          padding-bottom: 40px;
        }
        .subtitle {
          font-size: 16px;
          color: #333333;
          height: 20px;
          text-transform:uppercase;
        }
      }
      &:first-child {
        .titlepic {
          background-position: 0px 70px;
        } 
      }
      &:nth-child(2) {
        .titlepic {
          background-position: -82px 70px;
        } 
      }
      &:nth-child(3) {
        .titlepic {
          background-position: -164px 70px;
        } 
      }
      &:nth-child(4) {
        .titlepic {
          background-position: 70px 70px;
        } 
      }
      .news {
        width: 90%;
        margin: 30px auto 0;
        div {
          padding: 15px 0;
          &:first-child{
            .icon {
              background: #f66600;
            }
          }
          &:nth-child(2){
            .icon {
              background: #e7aa32;
            }
          }
          &:nth-child(3){
            .icon {
              background: #808080;
            }
          }
        }
        a {
          display: block;
          color: #000000;
          text-decoration: none;
          font-size: 14px;
          text-align: left;
          text-indent: 0.8em;
        }
        .icon {
          display: block;
          float: left;
          width: 18px;
          height: 18px;
          font-size: 10px;
          color: #ffffff;
          line-height: 18px;
        }
      }
      .more {
        float: right;
        color: #999999;
        font-size: 16px;
        margin-top: 30px;
        margin-right: 15px;
      }
    }

  }
</style>
