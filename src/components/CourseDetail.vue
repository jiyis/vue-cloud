<template>
  <div class="container">
      <div class="pannel">
        <img class="titlepic" src="../assets/images/course.jpg">
        <div class="detail">
          <span class="title">让金子发光发掘团队的创新信人才</span>
          <Rate disabled :value.sync="valueDisabled"></Rate>
          <span class="course-time">5课时 | 120分钟</span>
          <span class="age">年龄段：初中 小学</span>
          <span class="stem">侧重： 科学 技术 工程</span>
          <a href="#" class="study">在线学习</a>
        </div>
      </div>
      <div class="recommend">
        <span class="title">推荐课程</span>
        <ul>
          <li v-for="(item, key) in items" :key="key">
            <a href="#"><img src="../assets/images/tj.jpg" class="titlepic"></a>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="left">
          <Tabs active-key="key1" class="tab">
            <Tab-pane label="课程概览" key="key1">
              <detail></detail>
            </Tab-pane>
            <Tab-pane label="线上学习" key="key2">
              <div class="study-content">
                  4455555555555555555555555555
              </div>
            </Tab-pane>
          </Tabs>
        </div>
        <div class="right">
          <span class="title">授课老师</span>
          <img src="../assets/images/avatar.jpg" class="titlepic">
          <span class="name">蔡成功</span>
          <span class="desc">上海STEM云中心资深教师上海STEM云中心资深教师上海STEM云中心资深教师</span>
        </div>
      </div>
  </div>
</template>
<script>
import '../assets/css/content.css';
import detail from './Detail';

export default {
  name: 'courseDetail',
  data() {
    return {
      valueDisabled: 5,
      items: {
        name: 1,
        name1: 1,
        name2: 1,
        name3: 1,
      },
    };
  },
  components: {
    detail,
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
        padding: 30px 0 0;
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
