import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";
import SuperAdmin from "./SuperAdmin";
import Admin from "./Admin.js";

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
      path: "/Print-Owner",
      name: "Print-Owner",
      component: () => import("@/views/admin/owners/PrintOwner.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Sells-Employee",
      name: "Print-Sells-Employee",
      component: () => import("@/views/admin/sellsEmployee/PrintSellsEmployee.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Call-Center",
      name: "Print-Call-Center",
      component: () => import("@/views/admin/call_center/PrintCallCenter.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Confirmations-Form",
      name: "Print-Confirmations-Form",
      component: () => import("@/views/admin/confirmations_form/PrintConfirmationsForm.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Reservations",
      name: "Print-Reservations",
      component: () => import("@/views/admin/Reservations/PrintReservations.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/admin-print-alfakher",
      name: "admin-print-alfakher",
      component: () => import("@/views/admin/salesContracts/PrintAlfakher.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/admin-print-absly",
      name: "admin-print-absly",
      component: () => import("@/views/admin/salesContracts/PrintAbsly.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Guards",
      name: "Print-Guards",
      component: () => import("@/views/admin/guards/PrintGuards.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-Employees",
      name: "Print-Employees",
      component: () => import("@/views/admin/employees/PrintEmployees.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/Print-User",
      name: "Print-User",
      component: () => import("@/views/admin/users/PrintUser.vue"),
      meta: { target: "_blank" }
    },
    {
      path: "/admin-salesContracts-nahdda",
      name: "admin-salesContracts-nahdda",
      component: () => import("@/views/admin/salesContracts/PrintsalesContractsNahdda.vue"),
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
