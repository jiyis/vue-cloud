import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Course from '../components/Course';
import CourseDetail from '../components/CourseDetail';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import PageDetail from '../components/PageDetail';
import Login from '../view/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        layout: true,
      },
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        layout: true,
      },
    },
    {
      path: '/course/:id',
      name: 'CourseDetail',
      component: CourseDetail,
      meta: {
        layout: true,
      },
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        layout: true,
      },
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        layout: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        layout: false,
      },
    },
    {
      path: '/pages/:category',
      name: 'PageDetail',
      component: PageDetail,
      meta: {
        layout: true,
      },
    },
  ],
});
