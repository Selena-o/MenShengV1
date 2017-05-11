import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import welcome from '@/pages/welcome/welcome'

import personal_detail from '@/pages/personal/personal_detail'
import sidebar from '@/pages/personal/sidebar'
import myCourse_option from '@/pages/personal/myCourse_option'
import messageCenter_option from '@/pages/personal/messageCenter_option'
import setting_option from '@/pages/personal/setting_option'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import course_setting from '@/pages/course/course_setting'

Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },

    
    {
      path: '/personal_detail',
      name: 'personal_detail',
      component: personal_detail
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: sidebar
    },
    {
      path: '/myCourse_option',
      name: 'myCourse_option',
      component: myCourse_option
    },
    {
      path: '/messageCenter_option',
      name: 'messageCenter_option',
      component: messageCenter_option
    },
    {
      path: '/setting_option',
      name: 'setting_option',
      component: setting_option
    },
    {
      path: '/course_setting',
      name: 'course_setting',
      component: course_setting
    }
  ]
})
