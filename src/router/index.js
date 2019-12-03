import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/login.vue')
const index = () => import('@/index.vue')
const home = () => import('@/pages/home.vue')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index,
      redirect: "/home",
      children: [{
          path: '/home',
          component: home
        },
        {
          path: '/sortTable',
          component: () => import('@/pages/sortTable.vue')
        },
        {
          path: '/editForm',
          component: () => import('@/pages/editForm.vue')
        }
      ]
    }
  ]
})
