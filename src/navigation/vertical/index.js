const currentPath = window.location.hostname;

export default [
  // super_admin
  {
    title: "Home Page",
    to: { name: "super-admin-home" },
    type: "super_admin",
    icon: { icon: "mdi-home-outline" },
    building_type: "منازل وشقق",
  },
  {
    title: "Complexes",
    to: { name: "super-admin-show-complexes" },
    building_type: "منازل وشقق",
    type: "super_admin",
    icon: { icon: "mdi-office-building-outline" },
  },
  {
    title: "Complaints",
    to: { name: "super-admin-show-complaints" },
    building_type: "منازل وشقق",
    type: "super_admin",
    icon: { icon: "mdi-compare-horizontal" },
  },
  {
    title: "إصدارات تطبيقات",
    to: { name: "admin-apps-versions" },
    type: "super_admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-apps" },
  },
  {
    title: "تحديثات الداشبورد",
    to: { name: "admin-show-dashboard-updates" },
    type: "super_admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-apps" },
  },
  {
    title: "About us lamassu",
    to: { name: "super-admin-show-about-us-lamassu" },
    type: "super_admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-phone-dial" },
  },
  //super_admin

  //admin
  {
    title: "Home Page",
    to: { name: "admin-index" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Accounts",
    href:
      currentPath === "admin.alrawan.net"
        ? "https://counting.alrawan.net/login"
        : currentPath === "admin.karambaghdad.com"
        ? "https://counting.karambaghdad.com/login"
        : currentPath === "admin.alfakhertowers.com"
        ? "https://counting.alfakhertowers.com/login"
        : "https://counting.myexperience.center/login",
    type: "admin",
    target: "_blank",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cash-multiple" },
  },
  {
    title: "Apartment models",
    to: { name: "admin-show-apartment-models" },
    type: "admin",
    building_type: "شقق",
    icon: { icon: "mdi-home-city" },
  },
  {
    title: "House Models",
    to: { name: "admin-show-house-models" },
    type: "admin",
    building_type: "منازل",
    icon: { icon: "mdi-home-variant" },
  },
  {
    title: "Owners",
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-tie" },
    children: [
      { title: "All", to: "admin-show-owners" },
      { title: "All tenants", to: "admin-show-all-tenants" },
      {
        title: "Received the residential unit",
        to: "admin-show-owners-recipients",
      },
      {
        title: "Not received the residential unit",
        to: "admin-show-owners-non-recipients",
      },
    ],
  },
  {
    title: "Owners' visits",
    to: { name: "admin-show-owners-visits" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-clock" },
  },
  {
    title: "Sales",
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-sale" },
    children: [
      { title: "Sales staff", to: "admin-show-sales-staff" },
      { title: "Queries", to: "admin-show-queries" },
      {
        title: "Customer attendance form",
        to: "admin-show-customer-attendance-form",
      },
      {
        title: "Residential Unit Booking Application Form",
        to: "admin-show-application-form",
      },
      {
        title: "Approval Request Form",
        to: "admin-show-approval-request-form",
      },
      {
        title: "Residential Unit Requests",
        to: "admin-show-residential-unit-requests",
      },
      { title: "Sales Contracts", to: "admin-show-sales-contracts" },
    ],
  },
  {
    title: "marketing Residentail",
    type: "admin",
    name: "marketing Residentail",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-city" },
    children: [
      { title: "Complexes", name: "show-units", to: "admin-show-units" },
      {
        title: "marketing call center",
        name: "show-marketing-call-center",
        to: "admin-show-marketing-call-center",
      },
    ],
  },
  {
    title: "Notifications",
    to: { name: "admin-show-notifications" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bell" },
  },
  {
    title: "Banks",
    to: { name: "admin-show-banks" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bank" },
  },
  {
    title: "After-Sales Services",
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cogs" },
    children: [
      { title: "Maintenance Staff", to: "admin-show-maintenance-staff" },
      {
        title: "Service Bookings",
        type: "admin",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-service-bookings-shipping" },
          {
            title: "Maintenance",
            to: "admin-show-service-bookings-maintenance",
          },
        ],
      },
      {
        title: "Services",
        type: "admin",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-services" },
          { title: "Maintenance", to: "admin-show-services-maintenance" },
        ],
      },
      { title: "Residential Units", to: "admin-show-residential-units" },
    ],
  },
  {
    title: "Guards",
    to: { name: "admin-show-guards" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-shield-account" },
  },
  {
    title: "Staff",
    to: { name: "admin-show-staff" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-group" },
  },
  {
    title: "Users",
    to: { name: "admin-show-users" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account" },
  },
  {
    title: "Advertisements",
    to: { name: "admin-show-advertisements" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bullhorn" },
  },
  {
    title: "Features",
    to: { name: "admin-show-features" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-star" },
  },
  {
    title: "How did you hear about u",
    to: { name: "admin-show-how-did-you-hear-about-us" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-help-circle" },
  },
  {
    title: "Complaints",
    to: { name: "admin-show-complaints" },
    type: "admin",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-alert-circle" },
  },
  //admin

  //resident_manager
  {
    title: "Home Page",
    to: { name: "admin-index" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Accounts",
    href:
      currentPath === "admin.alrawan.net"
        ? "https://counting.alrawan.net/login"
        : currentPath === "admin.karambaghdad.com"
        ? "https://counting.karambaghdad.com/login"
        : currentPath === "admin.alfakhertowers.com"
        ? "https://counting.alfakhertowers.com/login"
        : "https://counting.myexperience.center/login",
    type: "admin",
    target: "_blank",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cash-multiple" },
  },
  {
    title: "Apartment models",
    to: { name: "admin-show-apartment-models" },
    type: "resident_manager",
    building_type: "شقق",
    icon: { icon: "mdi-home-city" },
  },
  {
    title: "House Models",
    to: { name: "admin-show-house-models" },
    type: "resident_manager",
    building_type: "منازل",
    icon: { icon: "mdi-home-variant" },
  },
  {
    title: "Owners",
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-tie" },
    children: [
      { title: "All", to: "admin-show-owners" },
      { title: "All tenants", to: "admin-show-all-tenants" },
      {
        title: "Received the residential unit",
        to: "admin-show-owners-recipients",
      },
      {
        title: "Not received the residential unit",
        to: "admin-show-owners-non-recipients",
      },
    ],
  },
  {
    title: "Owners' visits",
    to: { name: "admin-show-owners-visits" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-clock" },
  },
  {
    title: "Sales",
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-sale" },
    children: [
      { title: "Sales staff", to: "admin-show-sales-staff" },
      { title: "Queries", to: "admin-show-queries" },
      {
        title: "Customer attendance form",
        to: "admin-show-customer-attendance-form",
      },
      {
        title: "Residential Unit Booking Application Form",
        to: "admin-show-application-form",
      },
      {
        title: "Approval Request Form",
        to: "admin-show-approval-request-form",
      },
      {
        title: "Residential Unit Requests",
        to: "admin-show-residential-unit-requests",
      },
      { title: "Sales Contracts", to: "admin-show-sales-contracts" },
    ],
  },
  {
    title: "marketing Residentail",
    type: "resident_manager",
    name: "marketing Residentail",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-city" },
    children: [
      { title: "Complexes", name: "show-units", to: "admin-show-units" },
      {
        title: "marketing call center",
        name: "show-marketing-call-center",
        to: "admin-show-marketing-call-center",
      },
    ],
  },
  {
    title: "Notifications",
    to: { name: "admin-show-notifications" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bell" },
  },
  {
    title: "Banks",
    to: { name: "admin-show-banks" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bank" },
  },
  {
    title: "After-Sales Services",
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cogs" },
    children: [
      { title: "Maintenance Staff", to: "admin-show-maintenance-staff" },
      {
        title: "Service Bookings",
        type: "resident_manager",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-service-bookings-shipping" },
          {
            title: "Maintenance",
            to: "admin-show-service-bookings-maintenance",
          },
        ],
      },
      {
        title: "Services",
        type: "resident_manager",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-services" },
          { title: "Maintenance", to: "admin-show-services-maintenance" },
        ],
      },
      { title: "Residential Units", to: "admin-show-residential-units" },
    ],
  },
  {
    title: "Guards",
    to: { name: "admin-show-guards" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-shield-account" },
  },
  {
    title: "Staff",
    to: { name: "admin-show-staff" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-group" },
  },
  {
    title: "Users",
    to: { name: "admin-show-users" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account" },
  },
  {
    title: "Advertisements",
    to: { name: "admin-show-advertisements" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bullhorn" },
  },
  {
    title: "Features",
    to: { name: "admin-show-features" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-star" },
  },
  {
    title: "How did you hear about u",
    to: { name: "admin-show-how-did-you-hear-about-us" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-help-circle" },
  },
  {
    title: "Complaints",
    to: { name: "admin-show-complaints" },
    type: "resident_manager",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-alert-circle" },
  },
  //resident_manager

  //assistance
  {
    title: "Home Page",
    to: { name: "admin-index" },
    type: "assistance",
    name: "home",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Apartment models",
    to: { name: "admin-show-apartment-models" },
    type: "assistance",
    name: "forms-Apartments",
    building_type: "شقق",
    icon: { icon: "mdi-home-city" },
  },
  {
    title: "House Models",
    to: { name: "admin-show-house-models" },
    type: "assistance",
    name: "forms",
    building_type: "منازل",
    icon: { icon: "mdi-home-variant" },
  },
  {
    title: "Owners",
    type: "assistance",
    name: "owners",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-tie" },
    children: [
      { title: "All", to: "admin-show-owners" },
      {
        title: "Received the residential unit",
        to: "admin-show-owners-recipients",
      },
      {
        title: "Not received the residential unit",
        to: "admin-show-owners-non-recipients",
      },
    ],
  },
  {
    title: "Owners' visits",
    to: { name: "admin-show-owners-visits" },
    type: "assistance",
    name: "visits",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-clock" },
  },
  {
    title: "Sales",
    type: "assistance",
    name: "sales",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-sale" },
    children: [
      {
        title: "Sales staff",
        name: "sells-employee",
        to: "admin-show-sales-staff",
      },
      { title: "Queries", name: "inquiries", to: "admin-show-queries" },
      {
        title: "Customer attendance form",
        name: "call-center",
        to: "admin-show-customer-attendance-form",
      },
      {
        title: "Residential Unit Booking Application Form",
        name: "application-form",
        to: "admin-show-application-form",
      },
      {
        title: "Approval Request Form",
        name: "confirmations-form",
        to: "admin-show-approval-request-form",
      },
      {
        title: "Residential Unit Requests",
        name: "reservations",
        to: "admin-show-residential-unit-requests",
      },
      {
        title: "Sales Contracts",
        name: "salesContracts",
        to: "admin-show-sales-contracts",
      },
    ],
  },
  {
    title: "marketing Residentail",
    type: "assistance",
    name: "marketing Residentail",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-city" },
    children: [
      { title: "Complexes", name: "show-units", to: "admin-show-units" },
      {
        title: "marketing call center",
        name: "show-marketing-call-center",
        to: "admin-show-marketing-call-center",
      },
    ],
  },
  {
    title: "Notifications",
    to: { name: "admin-show-notifications" },
    type: "assistance",
    name: "notifications",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bell" },
  },
  {
    title: "Banks",
    to: { name: "admin-show-banks" },
    type: "assistance",
    name: "bankAccounts",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bank" },
  },
  {
    title: "After-Sales Services",
    name: "After-sales-service",
    type: "assistance",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cogs" },
    children: [
      { title: "Maintenance Staff", to: "admin-show-maintenance-staff" },
      {
        title: "Service Bookings",
        type: "admin",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-service-bookings-shipping" },
          {
            title: "Maintenance",
            to: "admin-show-service-bookings-maintenance",
          },
        ],
      },
      {
        title: "Services",
        type: "assistance",
        building_type: "منازل وشقق",
        children: [
          { title: "Shipping", to: "admin-show-services" },
          { title: "Maintenance", to: "admin-show-services-maintenance" },
        ],
      },
      { title: "Residential Units", to: "admin-show-residential-units" },
    ],
  },
  {
    title: "Guards",
    to: { name: "admin-show-guards" },
    type: "assistance",
    name: "guards",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-shield-account" },
  },
  {
    title: "Staff",
    to: { name: "admin-show-staff" },
    type: "assistance",
    name: "employees",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-group" },
  },
  {
    title: "Advertisements",
    to: { name: "admin-show-advertisements" },
    type: "assistance",
    name: "postings",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bullhorn" },
  },
  {
    title: "Features",
    to: { name: "admin-show-features" },
    type: "assistance",
    name: "advantages",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-star" },
  },
  {
    title: "How did you hear about u",
    to: { name: "admin-show-how-did-you-hear-about-us" },
    type: "assistance",
    name: "how_u_hear_about_us",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-help-circle" },
  },
  {
    title: "Complaints",
    to: { name: "admin-show-complaints" },
    type: "assistance",
    name: "complain",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-alert-circle" },
  },
  //admin
];
