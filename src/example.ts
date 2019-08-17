import Vue from 'vue'
import App from './example.vue'
import Popup from './index'

Vue.config.productionTip = false

Vue.use(Popup)

new Vue({
  render: h => h(App),
}).$mount('#app')
