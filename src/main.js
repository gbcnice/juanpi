import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './module/module'
import './assets/iconfont/iconfont.css'
import './assets/style.css'
import './assets/flexble.js'
import MintUI from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
import {Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
axios.interceptors.request.use((config)=>{
  Indicator.open();
  return config;
})
axios.interceptors.response.use((res)=>{
  Indicator.close();
  return res;
})
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
