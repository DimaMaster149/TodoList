import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
