import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Get from '../views/GetView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'get',
    component: Get
  },
  {
    path: '/set',
    name: 'set',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SetView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
