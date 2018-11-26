import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Name from "./views/Name.vue";
import Details from "./views/Details.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/name",
      name: "Name",
      component: Name
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/details",
      name: "Aetails",
      component: Details
    }
  ]
});