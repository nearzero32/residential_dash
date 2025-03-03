export default [
  {
    component: () =>
      import("@/layouts/components/DefaultLayoutWithVerticalNav.vue"),
    children: [
      {
        path: "/admin-index",
        name: "admin-index",
        component: () => import("@/views/admin/index.vue"),
      },
      {
        path: "/admin-show-profile",
        name: "admin-show-profile",
        component: () => import("@/views/admin/Profile/showProfile.vue"),
      },
      // Apartments
      // serviceContracts
      {
        path: "/admin-show-service-contracts",
        name: "admin-show-service-contracts",
        component: () =>
          import("@/views/admin/serviceContracts/showserviceContracts.vue"),
      },
      // serviceContracts
      // Apartments
      {
        path: "/admin-show-apartment-models",
        name: "admin-show-apartment-models",
        component: () =>
          import("@/views/admin/form/apartmentModels/showApartmentModels.vue"),
      },
      {
        path: "/admin-add-apartment-models",
        name: "admin-add-apartment-models",
        component: () =>
          import("@/views/admin/form/apartmentModels/addApartmentModels.vue"),
      },
      {
        path: "/admin-show-building",
        name: "admin-show-building",
        component: () =>
          import("@/views/admin/form/apartmentModels/showBuilding.vue"),
      },
      {
        path: "/admin-show-profile-floor/:id",
        name: "admin-show-profile-floor",
        component: () =>
          import("@/views/admin/form/apartmentModels/profileFloor.vue"),
      },
      {
        path: "/admin-show-profile-apartments",
        name: "admin-show-profile-apartments",
        component: () =>
          import("@/views/admin/form/apartmentModels/profileApartments.vue"),
      },
      {
        path: "/admin-edit-apartments-models",
        name: "admin-edit-apartments-models",
        component: () =>
          import("@/views/admin/form/apartmentModels/editApartmentModels.vue"),
      },
      // Apartments

      // Owners' visits
      {
        path: "/admin-show-owners-visits",
        name: "admin-show-owners-visits",
        component: () =>
          import("@/views/admin/OwnersVisits/showOwnersVisits.vue"),
      },
      // Owners' visits

      // SalesStaff
      {
        path: "/admin-show-sales-staff",
        name: "admin-show-sales-staff",
        component: () => import("@/views/admin/SalesStaff/showSalesStaff.vue"),
      },
      {
        path: "/admin-profile-sales-staff",
        name: "admin-profile-sales-staff",
        component: () =>
          import("@/views/admin/SalesStaff/profileSalesStaff.vue"),
      },
      // SalesStaff

      // Queries
      {
        path: "/admin-show-queries",
        name: "admin-show-queries",
        component: () => import("@/views/admin/Queries/showQueries.vue"),
      },
      // Queries

      // ResidentsRequests
      {
        path: "/admin-show-residents-requests",
        name: "admin-show-residents-requests",
        component: () =>
          import("@/views/admin/ResidentsRequests/shoeResidentsRequests.vue"),
      },
      // ResidentsRequests

      // CustomerAttendanceForm
      {
        path: "/admin-show-customer-attendance-form",
        name: "admin-show-customer-attendance-form",
        component: () =>
          import(
            "@/views/admin/CustomerAttendanceForm/showCustomerAttendanceForm.vue"
          ),
      },
      {
        path: "/admin-profile-customer-attendance-form",
        name: "admin-profile-customer-attendance-form",
        component: () =>
          import(
            "@/views/admin/CustomerAttendanceForm/profileCustomerAttendanceForm.vue"
          ),
      },
      // CustomerAttendanceForm

      // applicationForm
      {
        path: "/admin-show-application-form",
        name: "admin-show-application-form",
        component: () =>
          import("@/views/admin/applicationForm/showApplicationForm.vue"),
      },
      // applicationForm

      // ApprovalRequestForm
      {
        path: "/admin-show-approval-request-form",
        name: "admin-show-approval-request-form",
        component: () =>
          import(
            "@/views/admin/ApprovalRequestForm/showApprovalRequestForm.vue"
          ),
      },
      {
        path: "/admin-profile-approval-request-form",
        name: "admin-profile-approval-request-form",
        component: () =>
          import(
            "@/views/admin/ApprovalRequestForm/profileApprovalRequestForm.vue"
          ),
      },
      // ApprovalRequestForm

      // ResidentialUnitRequests
      {
        path: "/admin-show-residential-unit-requests",
        name: "admin-show-residential-unit-requests",
        component: () =>
          import(
            "@/views/admin/ResidentialUnitRequests/showResidentialUnitRequests.vue"
          ),
      },
      // ResidentialUnitRequests

      // SalesContracts
      {
        path: "/admin-show-sales-contracts",
        name: "admin-show-sales-contracts",
        component: () =>
          import("@/views/admin/SalesContracts/showSalesContracts.vue"),
      },
      // SalesContracts

      // Notifications
      {
        path: "/admin-show-notifications",
        name: "admin-show-notifications",
        component: () =>
          import("@/views/admin/Notifications/showNotifications.vue"),
      },
      // Notifications

      // Banks
      {
        path: "/admin-show-banks",
        name: "admin-show-banks",
        component: () => import("@/views/admin/Banks/showBanks.vue"),
      },
      // Banks

      // Maintenance of Devices
      {
        path: "/admin-show-maintenance-of-devices",
        name: "admin-show-maintenance-of-devices",
        component: () =>
          import(
            "@/views/admin/MaintenanceOfDevices/showMaintenanceOfDevices.vue"
          ),
      },
      // Maintenance of Devices

      // MaintenanceStaff
      {
        path: "/admin-show-maintenance-staff",
        name: "admin-show-maintenance-staff",
        component: () =>
          import("@/views/admin/MaintenanceStaff/showMaintenanceStaff.vue"),
      },
      // MaintenanceStaff

      // ServiceRoomNames
      {
        path: "/admin-show-service-room-names",
        name: "admin-show-service-room-names",
        component: () =>
          import("@/views/admin/ServiceRoomNames/showServiceRoomNames.vue"),
      },
      // ServiceRoomNames

      // Other services
      {
        path: "/admin-show-other-services-type",
        name: "admin-show-other-services-type",
        component: () =>
          import("@/views/admin/OtherServicesType/showOtherServicesType.vue"),
      },
      {
        path: "/admin-show-other-services",
        name: "admin-show-other-services",
        component: () =>
          import("@/views/admin/OtherServicesType/showOtherServices.vue"),
      },
      // Other services

      // ServiceBookings
      {
        path: "/admin-show-service-bookings-shipping",
        name: "admin-show-service-bookings-shipping",
        component: () =>
          import("@/views/admin/ServiceBookings/showServiceBookings.vue"),
      },
      {
        path: "/admin-show-service-bookings-maintenance",
        name: "admin-show-service-bookings-maintenance",
        component: () =>
          import(
            "@/views/admin/ServiceBookings/showServiceBookingsMaintenance.vue"
          ),
      },
      {
        path: "/admin-show-service-one-bookings",
        name: "admin-show-service-one-bookings",
        component: () =>
          import("@/views/admin/ServiceBookings/showServiceOneBookings.vue"),
      },
      // ServiceBookings

      // Services
      {
        path: "/admin-show-services",
        name: "admin-show-services",
        component: () => import("@/views/admin/Services/showServices.vue"),
      },
      {
        path: "/admin-show-services-maintenance",
        name: "admin-show-services-maintenance",
        component: () =>
          import("@/views/admin/Services/showServicesMaintenance.vue"),
      },
      // Services

      // ResidentialUnits
      {
        path: "/admin-show-residential-units",
        name: "admin-show-residential-units",
        component: () =>
          import("@/views/admin/ResidentialUnits/showResidentialUnits.vue"),
      },
      // ResidentialUnits

      // ServiceBookings
      {
        path: "/admin-show-reservation-service-other",
        name: "admin-show-reservation-service-other",
        component: () =>
          import("@/views/admin/ServiceBookings/ReservationServiceOther.vue"),
      },
      // ServiceBookings

      // Guards
      {
        path: "/admin-show-guards",
        name: "admin-show-guards",
        component: () => import("@/views/admin/Guards/showGuards.vue"),
      },
      // Guards

      // Staff
      {
        path: "/admin-show-staff",
        name: "admin-show-staff",
        component: () => import("@/views/admin/Staff/showStaff.vue"),
      },
      // Staff

      // Users
      {
        path: "/admin-show-users",
        name: "admin-show-users",
        component: () => import("@/views/admin/Users/showUsers.vue"),
      },
      // Users

      // Advertisements
      {
        path: "/admin-show-advertisements",
        name: "admin-show-advertisements",
        component: () =>
          import("@/views/admin/Advertisements/showAdvertisements.vue"),
      },
      // Advertisements

      // Features
      {
        path: "/admin-show-features",
        name: "admin-show-features",
        component: () => import("@/views/admin/Features/showFeatures.vue"),
      },
      // Features

      // HowDidYouHearAboutUs
      {
        path: "/admin-show-how-did-you-hear-about-us",
        name: "admin-show-how-did-you-hear-about-us",
        component: () =>
          import(
            "@/views/admin/HowDidYouHearAboutUs/showHowDidYouHearAboutUs.vue"
          ),
      },
      // HowDidYouHearAboutUs

      // Complaints
      {
        path: "/admin-show-complaints",
        name: "admin-show-complaints",
        component: () => import("@/views/admin/Complaints/showComplaints.vue"),
      },
      // Complaints

      // Owners
      {
        path: "/admin-show-all-tenants",
        name: "admin-show-all-tenants",
        component: () => import("@/views/admin/Owners/showAllTenants.vue"),
      },
      {
        path: "/admin-profile-tenant",
        name: "admin-profile-tenant",
        component: () => import("@/views/admin/Owners/profileTenant.vue"),
      },
      {
        path: "/admin-show-owners",
        name: "admin-show-owners",
        component: () => import("@/views/admin/Owners/showOwners.vue"),
      },
      {
        path: "/admin-show-owners-recipients",
        name: "admin-show-owners-recipients",
        component: () =>
          import("@/views/admin/Owners/showOwnersRecipients.vue"),
      },
      {
        path: "/admin-show-owners-non-recipients",
        name: "admin-show-owners-non-recipients",
        component: () =>
          import("@/views/admin/Owners/showOwnersNonRecipients.vue"),
      },
      {
        path: "/admin-profile-owner",
        name: "admin-profile-owner",
        component: () => import("@/views/admin/Owners/profileOwner.vue"),
      },
      // Owners

      // HouseModels
      {
        path: "/admin-show-house-models",
        name: "admin-show-house-models",
        component: () =>
          import("@/views/admin/form/HouseModels/showHouseModels.vue"),
      },
      {
        path: "/admin-add-house-models",
        name: "admin-add-house-models",
        component: () =>
          import("@/views/admin/form/HouseModels/addHouseModels.vue"),
      },
      {
        path: "/admin-profile-house-models",
        name: "admin-profile-house-models",
        component: () =>
          import("@/views/admin/form/HouseModels/profileHouseModels.vue"),
      },
      {
        path: "/admin-profile-house/:id",
        name: "admin-profile-house",
        component: () =>
          import("@/views/admin/form/HouseModels/profileHouse.vue"),
      },
      {
        path: "/admin-edit-house-models/:id",
        name: "admin-edit-house-models",
        component: () =>
          import("@/views/admin/form/HouseModels/editHouseModels.vue"),
      },
      // HouseModels

      // marketingResidentail
      {
        path: "/admin-show-units",
        name: "admin-show-units",
        component: () =>
          import("@/views/admin/marketingResidentail/units/showUnits.vue"),
      },
      {
        path: "/admin-show-marketing-call-center",
        name: "admin-show-marketing-call-center",
        component: () =>
          import(
            "@/views/admin/marketingResidentail/marketingCallCenter/showMarketingCallCenter.vue"
          ),
      },
      {
        path: "/admin-show-marketing-tasks",
        name: "admin-show-marketing-tasks",
        component: () =>
          import(
            "@/views/admin/marketingResidentail/marketingTasks/showmarketingTasks.vue"
          ),
      },
      // marketingResidentail
    ],
  },
  {
    path: "/admin-print-sales-staff",
    name: "admin-print-sales-staff",
    component: () => import("@/views/admin/SalesStaff/printSalesStaff.vue"),
  },
  {
    path: "/admin-print-customer-attendance-form",
    name: "admin-print-customer-attendance-form",
    component: () =>
      import(
        "@/views/admin/CustomerAttendanceForm/printCustomerAttendanceForm.vue"
      ),
  },
  {
    path: "/admin-print-application-form-alnahdaa",
    name: "admin-print-application-form-alnahdaa",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormAlnahdaa.vue"
      ),
  },
  {
    path: "/admin-print-application-form-marina-baghdad",
    name: "admin-print-application-form-marina-baghdad",
    component: () =>
      import("@/views/admin/applicationForm/print/printMarinaBaghdad.vue"),
  },
  {
    path: "/admin-print-application-form-lamassu",
    name: "admin-print-application-form-lamassu",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormLamassu.vue"
      ),
  },
  {
    path: "/admin-print-application-form-loam",
    name: "admin-print-application-form-loam",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormLoam.vue"
      ),
  },
  {
    path: "/admin-print-application-form-alfakher",
    name: "admin-print-application-form-alfakher",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormAlfakher.vue"
      ),
  },
  {
    path: "/admin-print-application-form-abasly",
    name: "admin-print-application-form-abasly",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormAbasly.vue"
      ),
  },
  {
    path: "/admin-print-application-form-alrawan",
    name: "admin-print-application-form-alrawan",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormAlrawan.vue"
      ),
  },
  {
    path: "/admin-print-application-form-alrtaj",
    name: "admin-print-application-form-alrtaj",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormAlrtaj.vue"
      ),
  },
  {
    path: "/admin-print-application-form-karam-bagdad",
    name: "admin-print-application-form-karam-bagdad",
    component: () =>
      import(
        "@/views/admin/applicationForm/print/printApplicationFormKaramBagdad.vue"
      ),
  },
  {
    path: "/admin-print-approval-request-form",
    name: "admin-print-approval-request-form",
    component: () =>
      import("@/views/admin/ApprovalRequestForm/PrintApprovalRequestForm.vue"),
  },
  {
    path: "/admin-print-residential-unit-requests",
    name: "admin-print-residential-unit-requests",
    component: () =>
      import("@/views/admin/ResidentialUnitRequests/PrintReservations.vue"),
  },
  {
    path: "/admin-print-sales-contracts-marina-baghdad",
    name: "admin-print-sales-contracts-marina-baghdad",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintMarinaBaghdad.vue"),
  },
  {
    path: "/admin-print-sales-contracts-aljanain",
    name: "admin-print-sales-contracts-aljanain",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintAljanain.vue"),
  },
  {
    path: "/admin-print-sales-contracts-lamassu",
    name: "admin-print-sales-contracts-lamassu",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintLamassu.vue"),
  },
  {
    path: "/admin-print-sales-contracts-abasly",
    name: "admin-print-sales-contracts-abasly",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintAbsly.vue"),
  },
  {
    path: "/admin-print-sales-contracts-alfakher",
    name: "admin-print-sales-contracts-alfakher",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintAlfakher.vue"),
  },
  {
    path: "/admin-print-sales-contracts-alrawan",
    name: "admin-print-sales-contracts-alrawan",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintAlrawan.vue"),
  },
  {
    path: "/admin-print-sales-contracts-alrtaj",
    name: "admin-print-sales-contracts-alrtaj",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintAlrtaj.vue"),
  },
  {
    path: "/admin-print-sales-contracts-alnahdaa",
    name: "admin-print-sales-contracts-alnahdaa",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintNahdda.vue"),
  },
  {
    path: "/admin-print-sales-contracts-karam-bagdad",
    name: "admin-print-sales-contracts-karam-bagdad",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintKaramBagdad.vue"),
  },
  {
    path: "/admin-print-sales-contracts-lamac",
    name: "admin-print-sales-contracts-lamac",
    component: () =>
      import("@/views/admin/SalesContracts/print/PrintLamac.vue"),
  },
  {
    path: "/admin-print-maintenance-staff",
    name: "admin-print-maintenance-staff",
    component: () =>
      import("@/views/admin/MaintenanceStaff/printMaintenanceStaff.vue"),
  },
  {
    path: "/admin-print-guards",
    name: "admin-print-guards",
    component: () => import("@/views/admin/Guards/PrintGuards.vue"),
  },
  {
    path: "/admin-print-staff",
    name: "admin-print-staff",
    component: () => import("@/views/admin/Staff/PrintEmployees.vue"),
  },
  {
    path: "/admin-print-owner",
    name: "admin-print-owner",
    component: () => import("@/views/admin/Owners/printOwner.vue"),
  },
  {
    path: "/admin-print-tenant",
    name: "admin-print-tenant",
    component: () => import("@/views/admin/Owners/PrintTenant.vue"),
  },
  {
    path: "/admin-print-service-bookings",
    name: "admin-print-service-bookings",
    component: () =>
      import("@/views/admin/ServiceBookings/PrintServiceBookings.vue"),
  },
  {
    path: "/admin-print-residents-requests",
    name: "admin-print-residents-requests",
    component: () =>
      import("@/views/admin/ResidentsRequests/PrintResidentsRequests.vue"),
  },
  {
    path: "/admin-print-customer-attendance-form-loam",
    name: "admin-print-customer-attendance-form-loam",
    component: () =>
      import("@/views/admin/CustomerAttendanceForm/prinLoam.vue"),
  },
  {
    path: "/admin-print-customer-attendance-form-marina-baghdad",
    name: "admin-print-customer-attendance-form-marina-baghdad",
    component: () =>
      import(
        "@/views/admin/CustomerAttendanceForm/printCustomerAttendanceFormMarinaBaghdad.vue"
      ),
  },

  // service-contracts
  {
    path: "/admin-print-service-contracts-alwud",
    name: "admin-print-service-contracts-alwud",
    component: () => import("@/views/admin/serviceContracts/print/alwedd.vue"),
  },
  {
    path: "/admin-print-sales-contracts-alrawan",
    name: "admin-print-sales-contracts-alrawan",
    component: () => import("@/views/admin/serviceContracts/print/alrawan.vue"),
  },
  // service-contracts
];
