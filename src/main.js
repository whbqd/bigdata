import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './js/axios';
Vue.use(ElementUI);
Vue.use(dataV)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
