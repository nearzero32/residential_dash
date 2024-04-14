import Layout from "@/layouts/full-layout/Layout";
import SuperAdminStarterPage from "@/views/superAdmin/StarterPage.vue";
import Centers from "@/views/superAdmin/centers/centers.vue";
import Center from "@/views/superAdmin/centers/Center.vue";

const SuperAdmin = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "SuperAdminHome",
      component: SuperAdminStarterPage,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "centers",
      component: Centers,
      name: "centers",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "center/:id/:name",
      component: Center,
      name: "center",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
};

export default SuperAdmin;
