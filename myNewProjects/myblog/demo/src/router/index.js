import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home  //两种写法，推荐下面的写法 这种写法就先在上面导入，然后用
  // },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home.vue') //这种直接导入并且使用
  },
  {
    path: '/myself',     // 浏览器输入这个地址，则加载component引入的组件
   name: 'myself',
   component: () => import('../views/myself.vue')
 }
]

const router = new VueRouter({
  routes
})

export default router
