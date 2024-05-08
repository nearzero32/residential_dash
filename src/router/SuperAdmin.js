import Layout from "@/layouts/full-layout/Layout";
import SuperAdminStarterPage from "@/views/superAdmin/StarterPage.vue";
import Centers from "@/views/superAdmin/centers/centers.vue";
import Center from "@/views/superAdmin/centers/Center.vue";
import complain from "@/views/superAdmin/complain/complain.vue";
import AboutUsLamassu from "@/views/superAdmin/AboutUsLamassu/AboutUsLamassu.vue";

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
    {
      path: "complain",
      component: complain,
      name: "complain",
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
      path: "AboutUsLamassu",
      component: AboutUsLamassu,
      name: "AboutUsLamassu",
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
