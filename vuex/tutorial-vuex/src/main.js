//import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Vue from 'vue'
//createApp(App).mount('#app')
Vue.config.productionTip = false

new Vue({
  //MENGGUNAKAN VUEX YANG TELAH DIDEFINISIKAN
  store,
  render: h => h(App)
}).$mount('#app')

