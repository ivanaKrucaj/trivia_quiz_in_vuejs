import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// relative dependency:
import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
