import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'

   





Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(Vuex);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
