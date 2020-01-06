import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon';
import BaseButton from '@/components/BaseButton';
import BaseInput from '@/components/BaseInput';

Vue.component('BaseIcon', BaseIcon);
Vue.component('BaseButton', BaseButton);
Vue.component('BaseInput', BaseInput);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
