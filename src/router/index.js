import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// vue2.0创建路由 new VueRouter({})
// vue3.0 createRouter({}) 创建路由实例
const routes = [
//   {
//   // path: '/layout',
//   // name: 'Layout',
//   // component: () => import('@/views/layout')
// }
]

const router = createRouter(
  {
  // 使用hash模式的路由
    history: createWebHashHistory(),
    routes
  })

export default router
