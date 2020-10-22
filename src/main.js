import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Viewdata from './components/Viewdata'
import HelloWorld from './components/HelloWorld'
import Add from './components/Add'
import Dashboard from './components/Admin/Dashboard'

Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [

  { path: '/', component: HelloWorld },
  { path: '/Viewdata', component: Viewdata },
  { path: '/add', component: Add },
  { path: '/admin', component: Dashboard },
]


const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
