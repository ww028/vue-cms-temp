import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login/login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/pages/home/home'),
      meta: { title: '首页'}
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/form',
    name: 'Example',
    meta: { title: 'Example' },
    children: [
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/pages/editForm'),
        meta: { title: '表单' }
      },
      {
        path: 'sortTable',
        name: 'SortTable',
        component: () => import('@/pages/sortTable'),
        meta: { title: '表格' },
        children: [
          {
            path: 'sortTable',
            name: 'SortTable',
            component: () => import('@/pages/sortTable'),
            meta: { title: '表格1-1' }
          }
        ]
      },
    ]
  },
  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://github.com/PanJiaChen/vue-element-admin",
        meta: { title: "外链"}
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
