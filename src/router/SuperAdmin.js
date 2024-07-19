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
    ],
  },
];
