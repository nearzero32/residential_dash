import admin from "@/router/admin";
import superAdmin from "@/router/superAdmin";
import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...superAdmin, ...admin, ...setupLayouts(routes)],
});

function isLoggedIn() {
  return !!localStorage.getItem("accessToken");
}

router.beforeEach((to, from, next) => {
  if (!isLoggedIn() && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
