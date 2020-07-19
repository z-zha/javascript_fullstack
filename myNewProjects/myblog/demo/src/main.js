import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'; //引入antd的样式库
import antd from 'ant-design-vue' //引入antd

Vue.use(antd) //作为中间件使用
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
