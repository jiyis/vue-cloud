<template>
  <div class="course-detail-content" data-widget-cid="widget-0" id="course_details" name="course_details"> 
   <div class="es-piece"> 
    <div class="piece-header" style="border-left: 2px solid #2e87c5;">
      课程介绍 
    </div> 
    <div class="piece-body p-lg"> 
     <p style="text-align: center; font-family:;"><span style="color:#2e87c5;line-height:1.4285;font-size:16px;"><span style="font-weight:700;">颜色大变身</span></span></p> 
     <p style="text-align:center;">&nbsp;</p> 
     <div class="panel panel-default sub-articles"> 
      <div class="panel-heading"> 
       <h3 class="panel-title"><span style="color:#2e87c5;"><strong>课程简介</strong></span></h3> 
      </div> 
      <div class="panel-body"> 
       <div class="media-list" v-html="course.description"> 
       </div> 
      </div> 
     </div> 
     <div class="panel panel-default sub-articles"> 
      <div class="panel-heading"> 
       <h3 class="panel-title"><span style="color:#2e87c5;"><strong>课程目标</strong></span></h3> 
      </div> 
      <div class="panel-body"> 
       <div class="media-list" v-html="course.target"> 
       </div> 
      </div> 
     </div> 
     <div class="panel panel-default sub-articles"> 
      <div class="panel-heading"> 
       <h3 class="panel-title"><span style="color:#2e87c5;"><strong>课程大纲</strong></span></h3> 
      </div> 
      <div class="panel-body"> 
       <div class="media-list" v-html="course.syllabus"> 
       </div> 
      </div> 
     </div> 
    </div> 
   </div> 
  </div>
</template>
<script>
export default {
  name: 'detail',
  data() {
    return {
      title: 'sds',
    };
  },
  props: ['course'],
};
</script>
<style scoped>

.panel-default {
    border-color: #ddd; 
}
.panel {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
}
.p-lg {
  line-height: 30px;
  margin-bottom: 30px;
}
.ml10 {
  margin-left: 10px;
}
.ml25 {
  margin-left: 25px;
}
.mr25 {
  margin-right: 25px;
}
.mr5 {
  margin-right: 5px;
}
.mr10 {
  margin-right: 10px;
}
.inline-block {
  display: inline-block;
}
.text-default {
  text-align: center;
  color: #e0e0e0;
}
.link-dark-wrap > a,
.link-dark {
  color: #212121;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.link-dark-wrap > a:hover,
.link-dark:hover {
  color: #C23D3A;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.link-light-wrap > a,
.link-light {
  color: #616161;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.link-light-wrap > a:hover,
.link-light:hover {
  color: #C23D3A;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
a.transition {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
a.transition:hover {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.underline {
  text-decoration: underline;
}
.underline:hover {
  text-decoration: underline;
}
.es-border {
  border: 1px solid #e0e0e0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.text-overflow {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.panel.panel-default {
  padding: 0 15px;
}
.panel.panel-default > .panel-heading {
  position: relative;
  padding: 15px 0;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}
.panel.panel-default > .panel-heading .panel-title > i {
  vertical-align: middle;
  margin-right: 10px;
}
.panel.panel-default > .panel-heading .more {
  position: absolute;
  top: 7px;
  right: 0;
  display: block;
  color: #9e9e9e;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.panel.panel-default > .panel-heading .more > i {
  font-size: 24px;
}
.panel.panel-default > .panel-heading .more:hover {
  color: #666666;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.panel.panel-default > .panel-heading .panel-bar {
  position: absolute;
  top: 7px;
  right: 0;
  display: block;
}
.panel.panel-default > .panel-footer {
  padding: 15px 0;
  background: none;
}
.panel.panel-default > .panel-body {
  position: relative;
  padding: 15px 0;
}
.lt-ie9 .panel.panel-default {
  border: 1px solid #e0e0e0;
}
.panel.panel-primary > .panel-heading {
  background-color: #C23D3A;
  color: #fff;
}
.panel.panel-primary > .panel-body {
  background: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.es-section {
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.es-section .section-header {
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}
.es-section .section-header h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.es-section .section-header .more {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  color: #9e9e9e;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.es-section .section-header .more:hover {
  color: #616161;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.es-section .section-header .more > i {
  font-size: 24px;
}
.lt-ie9 .es-section {
  border: 1px solid #e0e0e0;
}
.es-piece {
  margin-bottom: 30px;
}
.es-piece .piece-header {
  margin: 5px auto 20px auto;
  padding: 0 10px;
  color: #616161;
  font-size: 16px;
  border-left: 2px solid #C23D3A;
}
.es-piece .piece-body .piece-body-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}
.es-piece .piece-body .piece-body-list > li {
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
}
.media-list {
  font-size: 14px;
}
</style>
