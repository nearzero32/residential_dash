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
import profile from "@/views/admin/owners/profile.vue";
import forms from "@/views/admin/forms/forms.vue";
import add from "@/views/admin/forms/add.vue";
import formShow from "@/views/admin/forms/profile/index.vue";
import how_u_hear_about_us from "@/views/admin/how_u_hear_about_us/how_u_hear_about_us.vue";
import confirmations_form from "@/views/admin/confirmations_form/confirmations_form.vue";
import profileConfirmations_form from "@/views/admin/confirmations_form/profileConfirmations_form.vue";
import profileHouse from "@/views/admin/forms/profileHouse.vue";
import visits from "@/views/admin/visits/visits.vue";
import complain from "@/views/admin/complain/complain.vue";
import addApartments from "@/views/admin/forms/Apartments/addApartments.vue";
import profileApartments from "@/views/admin/forms/Apartments/profile/index.vue";
// import salesContracts from "@/views/admin/salesContracts/salesContracts.vue";

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
      name: "addApartments",
      path: "/addApartments",
      component: addApartments,
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
      path: "/admin-reservation-service",
      name: "admin-reservation-service",
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
    {
      path: "/admin-confirmations-form",
      name: "admin-confirmations-form",
      component: confirmations_form,
    },
    {
      path: "/admin-profileHouse/form_id/:form_id/house_id/:house_id/name/:name",
      name: "admin-profileHouse",
      component: profileHouse,
    },
    {
      path: "/admin-visits",
      name: "admin-visits",
      component: visits,
    },
    {
      path: "/admin-profileConfirmations_form/:name",
      name: "admin-profileConfirmations_form",
      component: profileConfirmations_form,
    },
    {
      path: "/admin-complain",
      name: "admin-complain",
      component: complain,
    },
    {
      path: "/admin-profileApartments/:ac",
      name: "admin-profileApartments",
      component: profileApartments,
    },

  ],
};

export default Admin;
