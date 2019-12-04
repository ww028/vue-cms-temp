import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/login.vue')
const index = () => import('@/index.vue')
const home = () => import('@/pages/home.vue')
const sortTable = () => import('@/pages/sortTable.vue')
const editForm = () => import('@/pages/editForm.vue')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: "/home",
      children: [{
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/sortTable',
          name: 'sortTable',
          component: sortTable
        },
        {
          path: '/editForm',
          name: 'editForm',
          component: editForm
        }
      ]
    }
  ]
})
