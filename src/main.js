import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins';

// Helper function
import { registerBaseComponents } from './helpers/registerBaseComponents';

// Automatically import and register Base components
registerBaseComponents(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
