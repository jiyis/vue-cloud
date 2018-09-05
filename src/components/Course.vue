<template>
  <div class="content">
    <div class="filter">
      <div class="filter-tab" v-for="(item, key) in category" :key="key">
        <div class="title">{{ item }}：</div>
        <div class="filter-item">
          <div class="item all-title"><a @click="searchCategory(key, {name:'全部',id: ''})" :class="activeFilter[key] === '全部' ? 'active' : ''" href="javascript:void(0)">全部</a></div>
          <div class="right">
            <div class="item" v-for="(value) in categoryItem[key]" :key="value.id" >
              <a href="javascript:void(0)" @click="searchCategory(key, value)" :class="activeFilter[key] === value.name ? 'active' : ''">{{value.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="hot-tab">
      <a href="javascript:void(0)" :class="sortActive ? 'active' : 'title'" @click="sortActive=true;sortCourse('updated_at')">近期热门</a>
      <a href="javascript:void(0)" :class="!sortActive ? 'active' : 'title'" @click="sortActive=false;sortCourse('click')">最受欢迎</a>
    </div>
    <div class="search">
      <i-input class="search-input" v-model="search" size="large" placeholder="请输入课程名称">
        <i-button slot="append" icon="ios-search" @click="searchCourse"></i-button>
      </i-input>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="(item, key) in courses.data" :key="key">
          <img class="titlepic" :src="item.titlepic">
          <div class="right">
            <span class="title"><router-link :to="'/courses/'+item.id">{{ item.name }}</router-link></span>
            <span class="content" v-html="item.description"></span>
            <span class="icon">
              <span class="border"><Icon type="thumbsup"></Icon>{{ item.click }}</span>
              <span class="border"><Icon type="android-contacts"></Icon>{{ item.period }}课时</span>
              <span class="border"><Icon type="clock"></Icon>{{ item.minute }}分钟</span>
              <span class="border"><Tag color="blue" v-for="value in _.filter(item.category, { 'type': '适用年龄'})" :key="value.id">{{ value.name }}</Tag></span>
            </span>
          </div>
          <div class="clear"></div>
        </li>
      </ul>
      <Page :total="total " :page-size="per_page" @on-change="changepage"  show-elevator class="pagation"></Page>
    </div>
  </div>
</template>

<script>
import config from '../config/config.json';

export default {
  name: 'Course',
  data() {
    return {
      category: {
        age: '适用年龄',
        stem: 'STEM侧重',
        hangye: '行业领域',
      },
      categoryItem: {
        age: '',
        stem: '',
      },
      courses: '',
      total: 5,
      per_page: 10,
      search: '',
      searchCate: '',
      filterItem: {},
      activeFilter: {
        age: '全部',
        stem: '全部',
        price: '全部',
        hangye: '全部',
      },
      sortActive: true,
      sortFilter: 'updated',
    };
  },
  created() {
    this.$axios.all([
      this.$axios.get(`${config.apiDomain}/category/1`),
      this.$axios.get(`${config.apiDomain}/category/2`),
      this.$axios.get(`${config.apiDomain}/category/5`),
      this.$axios.get(`${config.apiDomain}/courses`),
    ]).then(
      this.$axios.spread((age, stem, price, hangye, courses) => {
        this.categoryItem.age = age.data.data;
        this.categoryItem.stem = stem.data.data;
        this.categoryItem.hangye = hangye.data.data;
        this.courses = courses.data;
        this.total = courses.data.meta.total;
        this.per_page = courses.data.meta.per_page;
      }, (error) => {
        this.$Message.error(error.toString());
      }));
  },
  methods: {
    changepage(index) {
      this.$axios.get(`${config.apiDomain}/courses?page=${index}`).then((response) => {
        this.courses = response.data;
      }, (error) => {
        this.$Message.error(error.toString());
      });
    },
    searchCourse() {
      if (!this.search) {
        this.$Message.error('请输入搜索关键字');
        return false;
      }

      const params = `search=name:${this.search};description:${this.search}&searchFields=name:like;description:like`;
      let query = `?${params}`;
      if (this.searchCate) {
        query = `${this.searchCate}&${params}`;
      }
      this.$axios.get(`${config.apiDomain}/courses/search${query}`).then((response) => {
        this.courses = response.data;
      }, (error) => {
        this.$Message.error(error.toString());
      });
      return true;
    },
    searchCategory(key, item) {
      this.activeFilter[key] = item.name;
      this.filterItem[key] = item.id;

      const query = this._.reduce(this._.pickBy(this.filterItem), (result, value, index) => `${result}${index}=${value}&`, '?');
      this.searchCate = this._.trim(query, '&');

      this.$axios.get(`${config.apiDomain}/courses/search${this.searchCate}`).then((response) => {
        this.courses = response.data;
      }, (error) => {
        this.$Message.error(error.toString());
      });
      return true;
    },
    sortCourse(key) {
      const query = `?orderBy=${key}&sortedBy=desc`;
      this.$axios.get(`${config.apiDomain}/courses/search${query}`).then((response) => {
        this.courses = response.data;
      }, (error) => {
        this.$Message.error(error.toString());
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .clear {
    clear: both;
  }
  .content{
    width: 100%;
    background: #f8f8f8;
    margin: 0;
    padding: 0;
    overflow: hidden;
    .filter{
      width: 1200px;
      margin: 0 auto;
      margin-top: 30px;
      background: #f1f1f1;
      height: 260px;
      .filter-tab {
        padding: 8px 50px 21px;
        color: #666666;
        border-bottom: 1px dashed #e9e9e9; 
        .title {
          float: left;
          color: #333333;
          font-weight: bold;
          width: 10%;
          padding-top:18px;
        }
        .filter-item {
          width: 96%;
          .all-title {
            padding-top:20px !important;
          }
          .item {
            float:left;
            padding-left: 0px;
            padding-top:16px;
            a{
              padding: 6px 18px;
              color: #333333;
            }
          }
          .right {
            float:left;
            width:80%;
            line-height: 30px;
          }
          .active {
            color: #ffffff !important;
            border-radius: 5px;
            background: #eb2232;
          }
        }
      }
    }
    .hot-tab {
      width: 1200px;
      height: 50px;
      background: #f1f1f1;
      margin: 30px auto 0;
      color: #333333;
      font-size: 18px;
      .title, a {
        display:block;
        float: left;
        padding-left: 40px;
        line-height: 50px;
        color: #333333;
        &:last-child {
          padding-left: 40px;
        }
      }
      a:hover, a:active, .active {
        color: #eb2232;
      }
    }

    .search {
      width: 1200px;
      margin: 25px auto 10px;
      height: 50px;
      .search-input {
        width: 250px;
        float: right;
      }
    }
    .list-content {
      width: 1200px;
      margin: 0 auto;
      ul {
        li {
          margin-bottom: 20px;
          background: #ffffff;
          .titlepic {
            width: 282px;
            height: 158px;
            float: left;
          }
          .right {
            width: 75%;
            float: left;
            padding: 10px 20px;
            .title {
              display: block;
              color: #333333;
              font-size: 19px;
            }
            .content {
              padding: 15px 0;
              display: block;
              background: #ffffff;
              line-height: 25px;
              font-size: 14px;
              color: #808080;
            }
            .icon {
              float: right;
              width: 60%;
              text-align: left;
              color: #808080;
              .border {
                width: 85px;
                display: block;
                float: left;
                margin-left: 15px;
              }
              .border:first {
                width: 50px;
              }
              .border:last-child {
                width: auto;
                margin-left: 5px;
              }
              .ivu-icon {
                padding-right: 8px;
              }
              .ivu-tag {
                margin-right: 16px;
                margin-top: -3px;
              }
            }
          }  
        }
      }
      .pagation {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 15px 0 35px;
      }
    }
  }
</style>

