import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()

App.mpType = 'app'

// 引入Router
import Router from './router'

// 引入全局uView
import uView from "uview-ui"
Vue.use(uView)

import store from '@/store'
let vuexStore = require("@/store/$u.mixin.js")
Vue.mixin(vuexStore);

const app = new Vue({
  store,
   ...App
})
app.$mount()
