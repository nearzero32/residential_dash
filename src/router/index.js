import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";
import SuperAdmin from "./SuperAdmin";
import Admin from "./Admin.js";
// import Blanklayout from "@/layouts/blank-layout/Blanklayout";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/login/FullLogin"),
    },
    {
      path: "/Print",
      name: "Print",
      component: () => import("@/views/admin/application_form/Print.vue"),
      meta: { target: "_blank" }
    },

    {
      name: "/",
      path: "/",
      component: () => import("@/views/login/FullLogin"),
    },
    SuperAdmin,
    Admin,
    {
      path: "/authentication",
      component: () => import("@/layouts/blank-layout/Blanklayout"),
      children: [
        {
          name: "FullRegister",
          path: "fullregister",
          component: () => import("@/views/authentication/FullRegister"),
        },
        {
          name: "Error",
          path: "error",
          component: () => import("@/views/authentication/Error"),
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  const userSession = JSON.parse(localStorage.getItem("user"));

  if (!userSession && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
});
import NProgress from "nprogress";

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start(800);
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});


export default router;
