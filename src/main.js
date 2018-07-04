// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import $ from 'jquery'

Vue.config.productionTip = false
 
Vue.use(BaiduMap,{
	ak:'FrhWprB7aQaDRdyPctmRR1n6VeoG6CA8'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  BaiduMap,
  render:h=>h(App)
})
