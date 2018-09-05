<template>
  <div class="container">
      <div class="pannel">
        <img class="titlepic" :src="course.titlepic">
        <div class="detail">
          <span class="title">{{ course.name }}</span>
          <Rate disabled :value.sync="valueDisabled"></Rate>
          <span class="course-time">{{ course.period }}课时 | {{ course.minute }}分钟</span>
          <span class="age">年龄段：
            <Tag v-for="value in _.filter(course.category, { 'type': '1'})" :key="value.id">{{ value.name }}</Tag>
          </span>
          <span class="stem">侧重： 
            <Tag v-for="value in _.filter(course.category, { 'type': '2'})" :key="value.id">{{ value.name }}</Tag>
          </span>
          <a href="#" class="study">在线学习</a>
        </div>
      </div>
      <div class="recommend">
        <span class="title">推荐课程</span>
        <ul>
          <li v-for="(item, key) in favCourses" :key="key">
            <router-link :to="'/courses/'+item.id"><img :src="item.titlepic" class="titlepic"></router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="left">
          <Tabs active-key="key1" class="tab">
            <Tab-pane label="课程概览" key="key1">
              <detail :course="course"></detail>
            </Tab-pane>
            <Tab-pane label="线上学习" key="key2" v-if="course.content">
              <div class="study-content" v-html="course.content"></div>
            </Tab-pane>
          </Tabs>
        </div>
        <div class="right">
          <span class="title">授课老师</span>
          <img :src="course.teacher.titlepic" class="titlepic">
          <span class="name">{{ course.teacher.name }}</span>
          <span class="desc" v-html="course.teacher.description"></span>
        </div>
      </div>
  </div>
</template>

<script>
import '../assets/css/content.css';

import detail from './Detail';
import config from '../config/config.json';

export default {
  name: 'courseDetail',
  data() {
    return {
      activeKey: 'key2',
      valueDisabled: 5,
      course: {
        titlepic: '',
        teacher: {
          titlepic: '',
        },
      },
      favCourses: {},
    };
  },
  components: {
    detail,
  },
  created() {
    this.getData();
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  methods: {
    getData() {
      this.$axios.all([
        this.$axios.get(`${config.apiDomain}/courses/${this.$route.params.id}`),
        this.$axios.get(`${config.apiDomain}/click/${this.$route.params.id}`),
        this.$axios.get(`${config.apiDomain}/courses?orderBy=updated_at&sortedBy=desc&limit=4`),
      ]).then(
        this.$axios.spread((course, click, favCourses) => {
          this.course = course.data;
          this.favCourses = favCourses.data;
        }, (error) => {
          this.$Message.error(error.toString());
        }));
    },
  },
};
</script>
<style scoped lang="scss">
  .container {
    background: #f8f8f8;
    width: 100%;
    overflow: hidden;
    .pannel {
      width: 1200px;
      height: 330px;
      margin: 30px auto;
      background: #ffffff;
      .titlepic {
        width: 585px;
        height: 330px;
        float: left;
      }
      .detail {
        width: 585px;
        height: 330px;
        float: right;
        padding: 10px 0 0;
        span {
          display: block;
        }
        .title {
          font-size: 24px;
          color: #333333;
          padding-bottom: 30px;
        }
        .course-time, .age, .stem {
          padding: 20px 0 0;
          color: #cccccc;
        }
        .age {
          .ivu-tag {
            line-height: 20px;    
          }
        }
        .study {
          display: block;
          width: 184px;
          height: 50px;
          text-align: center;
          padding: 15px;
          background: #eb2232;
          color: #ffffff;
          margin-top: 40px;
        }
      }
    }
    .recommend {
      width: 1200px;
      margin: 0 auto;
      height: 204px;
      .title {
        color: #333333;
        font-size: 18px;
        display: block;
        padding: 15px 0;
      }
      ul {
        li {
          display: block;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          float: left;
          padding-left: 29.3px;
          &:first-child {
            padding: 0;
          }
        }
        .titlepic {
          width: 278px;
          height: 156px;
        }
      }
    }
    .content {
      width: 1200px;
      margin: 30px auto 0;
      overflow: hidden;
      .left{
        background: #ffffff;
        float: left;
        width: 67%;
        .tab {
          margin: 15px 30px;
          
        }
      }
      .right {
        background: #ffffff;
        width: 30%;
        height: 290px;
        float: right;
        padding: 20px 15px;
        .title {
          display: block;
          font-size: 18px;
          color: #333333;
        }
        .titlepic {
          display: block;
          margin: 20px auto;
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        .name {
          display: block;
          margin: 0 auto;
          text-align: center;
          font-size: 16px;
          color: #666666;
        }
        .desc {
          display: block;
          font-size: 14px;
          padding-top: 15px;
          line-height: 20px;
          color: #666666;
        }
      }
    }
  }
</style>
