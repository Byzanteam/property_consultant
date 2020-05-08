// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/svg/style.css'
import { Tabbar, TabbarItem, Collapse, CollapseItem, List, Field, Picker, Cell, Popup, RadioGroup, Radio, Calendar, DatetimePicker } from 'vant'
import axios from 'axios' // 全局注册，使用方法为:this.$axios

Vue.prototype.$axios = axios

Vue.use(DatetimePicker)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(List)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Calendar)
Vue.use(Cell)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
