<template>
  <div class="content">
    <div class="filter">
      <div class="filter-tab" v-for="(item, key) in items" :key="key">
        <span class="title">适用年龄：</span>
        <div class="filter-item">
          <span class="item"><a class="active" href="#">全部</a></span>
          <span class="item"><a href="#">科学</a></span>
          <span class="item"><a href="#">技术</a></span>
          <span class="item"><a href="#">工程</a></span>
          <span class="item"><a href="#">数学</a></span>
        </div>
      </div>
    </div>
    <div class="hot-tab">
      <a href="#" class="title active">近期热门</a>
      <a href="#" class="title">最受欢迎</a>
    </div>
    <div class="search">
      <i-input class="search-input" size="large" placeholder="请输入课程名称">
        <i-button slot="append" icon="ios-search"></i-button>
      </i-input>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="(item, key) in items" :key="key">
          <img class="titlepic" src="../assets/images/course.jpg">
          <div class="right">
            <span class="title">精彩演讲稿从演讲开始</span>
            <span class="content">我们花费了几年的时间，终于让 Bootstrap 4 到来了！简直无法用言语来描述整个团队和我对于这个版本的兴奋之情，但是我会尽全力。感谢每个人，特别是整个团队，以及所有对项目代码进行贡献和提出问题的每个人。谢谢你们。从上个正式版本开始，我们致力于让我们的 CSS 几个关键的部分变稳定
            </span>
            <span class="icon">
              <Icon type="android-contacts"></Icon>11课时
              <Icon type="clock"></Icon>120分钟
              <Tag color="blue">小学</Tag>
              <Tag color="green">幼儿园</Tag>
            </span>
          </div>
          <div class="clear"></div>
        </li>
      </ul>
      <Page :total="100" show-elevator class="pagation"></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data() {
    return {
      items: {
        teaching: 'Stemsky授课',
        cooperation: '学校合作',
        'R&D': '课程研发',
      },
    };
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
      height: 200px;
      .filter-tab {
        padding: 26px 50px 15px;
        color: #666666;
        border-bottom: 1px dashed #e9e9e9; 
        .title {
          float: left;
          color: #333333;
          font-weight: bold;
        }
        .filter-item {
          .item {
            padding-left: 30px;
            a{
              padding: 6px 18px;
              color: #333333;
            }
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
              color: #808080;
              .ivu-icon {
                padding-left: 50px;
                padding-right: 6px;
                padding-top: 5px;
              }
              .ivu-tag {
                margin-left: 30px;
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

