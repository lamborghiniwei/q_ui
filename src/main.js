import Vue from 'vue'
import App from './App.vue'
//  引入q_ui
import q_ui from './packages/index'
Vue.use(q_ui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
