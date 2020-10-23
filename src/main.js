import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueGeolocation from 'vue-browser-geolocation'

Vue.use(VueGeolocation)
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyAf9mwc-FqKONtCae9zD4b4LTL1DmR0l-E'
  },
 
})

// Routing Paths and Data
import VueRouter from 'vue-router'
import Viewdata from './components/Viewdata'
import HelloWorld from './components/HelloWorld'
import Add from './components/Add'
import Dashboard from './components/Admin/Dashboard'
import Postapi from './components/Postapi'
import err404 from './components/404'
import Map from './components/Map'

Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [
  { path: '/', component: HelloWorld },
  { path: '/Viewdata', component: Viewdata },
  { path: '/add', component: Add },
  { path: '/admin', component: Dashboard },
  { path: '/postapi', component: Postapi },
  { path: '/Map', component: Map },
  { path: '*', component: err404 },
]


const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
