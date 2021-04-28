import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Vuelidate from 'vuelidate'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
