export default [
  {
    component: () =>
      import("@/layouts/components/DefaultLayoutWithVerticalNav.vue"),
    children: [
      {
        path: "/super-admin-home",
        name: "super-admin-home",
        component: () => import("@/views/superAdmin/index.vue"),
      },
      {
        path: "/super-admin-application-service-bills",
        name: "super-admin-application-service-bills",
        component: () =>
          import(
            "@/views/superAdmin/ApplicationServiceBills/showApplicationServiceBills.vue"
          ),
      },
      {
        path: "/super-admin-show-complexes",
        name: "super-admin-show-complexes",
        component: () =>
          import("@/views/superAdmin/Complexes/showComplexes.vue"),
      },
      {
        path: "/super-admin-show-details-complexe",
        name: "super-admin-show-details-complexe",
        component: () =>
          import("@/views/superAdmin/Complexes/showDetailsComplexe.vue"),
      },
      {
        path: "/super-admin-show-complaints",
        name: "super-admin-show-complaints",
        component: () =>
          import("@/views/superAdmin/Complaints/showComplaints.vue"),
      },
      {
        path: "/super-admin-show-about-us-lamassu",
        name: "super-admin-show-about-us-lamassu",
        component: () =>
          import("@/views/superAdmin/AboutUsLamassu/AboutUsLamassu.vue"),
      },

      // appsVersions
      {
        path: "/admin-apps-versions",
        name: "admin-apps-versions",
        component: () =>
          import("@/views/superAdmin/appsVersions/showAppsVersions.vue"),
      },
      // appsVersions

      // DashboardUpdates
      {
        path: "/admin-show-dashboard-updates",
        name: "admin-show-dashboard-updates",
        component: () =>
          import(
            "@/views/superAdmin/DashboardUpdates/showDashboardUpdates.vue"
          ),
      },
      // DashboardUpdates

      // expenses
      {
        path: "/admin-show-expenses",
        name: "admin-show-expenses",
        component: () => import("@/views/superAdmin/expenses/expenses.vue"),
      },
      {
        path: "/admin-show-expenses-type",
        name: "admin-show-expenses-type",
        component: () => import("@/views/superAdmin/expenses/expensesType.vue"),
      },
      // expenses
    ],
  },
];
