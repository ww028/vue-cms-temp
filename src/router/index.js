import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login/login'),
  },

  {
    path: '/',
    component: () => import('@/pages/home/home'),
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/pages/home/home'),
      meta: { title: 'home'}
    }]
  },
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
