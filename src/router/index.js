import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Course from '../components/Course';
import CourseDetail from '../components/CourseDetail';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
    },
    {
      path: '/course/:id',
      name: 'CourseDetail',
      component: CourseDetail,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: NewsDetail,
    },
  ],
});
