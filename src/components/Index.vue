<template>
  <div class="index">
    <banner></banner>
    <div class="top">
      <ul>
        <li v-for="(value, key) in category" :key="key" class="category">
          <div class="category-top">
            <span class="titlepic"></span>
            <span class="title"> <router-link class="title" :to="'/pages/'+key">{{ value.title }}</router-link></span>
            <span class="subtitle">{{ value.subTitle }}</span>
          </div>
          <div class="news" v-html="value.description">
          </div>
        </li>
      </ul>
    </div>
    <div class="content-border">
      <div class="bottom">
        <div class="company-news">
          <div class="title-red">专家咨询</div>
          <div class="content" v-for="(item, key) in news" :key="key">
            <router-link class="title" :to="'/industry/'+item.id">{{ item.title }}</router-link>
            <a class="title" href="#"></a>
            <span class="desc" v-html="item.description"></span>
            <span class="time">{{ item.created_at}}</span>
          </div>
        </div>
        <div class="about">
          <div class="title-red">关于我们<router-link :to="'/pages/contact'" class="more">更多 >></router-link></div>
          <img :src="contact.titlepic" class="about-img" />
          <span class="about-content" v-html="contact.description">
          </span>
        </div>
      </div> 
    </div>
</div>
</template>

<script>
import banner from '../components/Banner';
import config from '../config/config.json';

export default {
  name: 'Index',
  data() {
    return {
      category: {
        teaching: {
          title: 'Stemsky授课',
          subTitle: 'teaching',
          description: '',
        },
        cooperation: {
          title: '学校合作',
          subTitle: 'cooperation',
          description: '',
        },
        research: {
          title: '课程研发',
          subTitle: 'R&D',
          description: '',
        },
        knowledge: {
          title: '知识天地',
          subTitle: '',
          description: '',
        },
      },
      news: '',
      contact: '',
    };
  },
  components: {
    banner,
  },
  created() {
    this.$axios.all([
      this.$axios.get(`${config.apiDomain}/pages/teaching`),
      this.$axios.get(`${config.apiDomain}/pages/cooperation`),
      this.$axios.get(`${config.apiDomain}/pages/research`),
      this.$axios.get(`${config.apiDomain}/pages/knowledge`),
      this.$axios.get(`${config.apiDomain}/lists/industry?limit=3`),
      this.$axios.get(`${config.apiDomain}/pages/contact`),
    ]).then(
      this.$axios.spread((teaching, cooperation, research, knowledge, newsContent, contact) => {
        this.category.teaching.description = teaching.data.description;
        this.category.cooperation.description = cooperation.data.description;
        this.category.research.description = research.data.description;
        this.category.knowledge.description = knowledge.data.description;
        this.news = newsContent.data.data;
        this.contact = contact.data;
      }, (error) => {
        this.$Message.error(error.toString());
      }));
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
      height: 361px;
      border-right: 1px solid #eeeeee;
      &:last-child {
        border-right: none;
      }
      .category-top {
        width: 160px;
        margin: 0 auto;
        .titlepic {
          display: block;
          background: url('../assets/images/category.png');
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
      }​​
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
        height: 130px;
        font-size: 14px;
        line-height: 26px;
        text-indent: 16px;
        text-align: left;
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
