import '@babel/polyfill'
import Vue from "vue";
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTreeNavigation from 'vue-tree-navigation';
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";

Vue.use(VueTreeNavigation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");