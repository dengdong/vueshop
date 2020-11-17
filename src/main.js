// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  store from './store'

import  {Button} from 'mint-ui'

import VueLazyload from 'vue-lazyload'

import  './mock/mockServer' //加载mockServer

import loading from './common/imgs/loading.gif'

import './filters' //加载过滤器

Vue.config.productionTip = false

Vue.component(Button.name , Button)

Vue.use(VueLazyload , { // 内部自定义一个指令 lazy

  loading:loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router, //vue-router
  store // vuex
})
