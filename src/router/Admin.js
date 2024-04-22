import Layout from "@/layouts/full-layout/Layout";
import Index from "@/views/admin/index.vue";
import showUsers from "@/views/admin/users/showUsers.vue";
import postings from "@/views/admin/postings/postings.vue";
import advantages from "@/views/admin/advantages/advantages.vue";
import BuyingOffers from "@/views/admin/BuyingOffers/BuyingOffers.vue";
import owners from "@/views/admin/owners/owners.vue";
import reservations from "@/views/admin/Reservations/Reservations.vue";
import notifications from "@/views/admin/notifications/notifications.vue";
import services from "@/views/admin/services/services.vue";
import Profile from "@/views/admin/Profile/Profile.vue";
import employees from "@/views/admin/employees/employees.vue";
import reservationsService from "@/views/admin/reservationsService/reservationsService.vue";
import guards from "@/views/admin/guards/guards.vue";
import sellsEmployee from "@/views/admin/sellsEmployee/sellsEmployee.vue";
import application_form from "@/views/admin/application_form/application_form.vue";
import call_center from "@/views/admin/call_center/call_center.vue";
import call_center_one from "@/views/admin/call_center/call_center_one.vue";
// import Print from "@/views/admin/application_form/Print.vue";
import profile from "@/views/admin/owners/profile.vue";
import forms from "@/views/admin/forms/forms.vue";
import add from "@/views/admin/forms/add.vue";
import formShow from "@/views/admin/forms/profile/index.vue";
import how_u_hear_about_us from "@/views/admin/how_u_hear_about_us/how_u_hear_about_us.vue";

const Admin = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "/Index",
      component: Index,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "admin" || isAuthenticated && isAuthenticated.type === "assistance") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      name: "users",
      path: "/users",
      component: showUsers,
    },
    {
      path: "/admin-postings",
      name: "admin-postings",
      component: postings,
    },
    {
      path: "/admin-advantages",
      name: "admin-advantages",
      component: advantages,
    },
    {
      path: "/admin-buying-offers",
      name: "admin-buying-offers",
      component: BuyingOffers,
    },
    {
      path: "/admin-owners",
      name: "admin-owners",
      component: owners,
    },
    {
      path: "/admin-reservations",
      name: "admin-reservations",
      component: reservations,
    },
    {
      path: "/admin-notifications",
      name: "admin-notifications",
      component: notifications,
    },
    {
      path: "/admin-services",
      name: "admin-services",
      component: services,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: profile,
    },
    {
      path: "/admin-application-form",
      name: "admin-application-form",
      component: application_form,
    },
    {
      path: "/admin-call-center",
      name: "admin-call-center",
      component: call_center,
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/admin-employees",
      name: "admin-employees",
      component: employees,
    },
    {
      path: "/admin-reservations-service",
      name: "admin-reservations-service",
      component: reservationsService,
    },
    {
      path: "/admin-guards",
      name: "admin-guards",
      component: guards,
    },
    {
      path: "/admin-sells-employee",
      name: "admin-sells-employee",
      component: sellsEmployee,
    },
    {
      path: "/admin-forms",
      name: "admin-forms",
      component: forms,
    },
    {
      path: "/admin-add-forms",
      name: "admin-add-forms",
      component: add,
    },
    {
      path: "/forms/:ac",
      name: "admin-ac-forms",
      component: formShow,
    },
    {
      path: "/admin-how_u_hear_about_us",
      name: "admin-how_u_hear_about_us",
      component: how_u_hear_about_us,
    },
    {
      path: "/admin-call_center_one/:id/:name",
      name: "admin-call_center_one",
      component: call_center_one,
    },

  ],
};

export default Admin;
