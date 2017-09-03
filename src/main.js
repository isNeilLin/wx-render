// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'

Vue.config.productionTip = false
// Vue.prototype.ip = 'http://123.206.64.198/admin';
Vue.prototype.ip = 'http://127.0.0.1:3000';
Vue.use(ElementUI)
/* eslint-disable no-new */
import 'element-ui/lib/theme-default/index.css'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
