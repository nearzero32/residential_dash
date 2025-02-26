const currentPath = window.location.hostname;

export default [
  // super_admin
  {
    title: "Home Page",
    to: { name: "super-admin-home" },
    type: ["super_admin"],
    icon: { icon: "mdi-home-outline" },
    building_type: "منازل وشقق",
  },
  {
    title: "المصاريف",
    to: { name: "admin-show-expenses" },
    type: ["super_admin"],
    icon: { icon: "mdi-card-account-details-outline" },
    building_type: "منازل وشقق",
  },
  {
    title: "انواع المصاريف",
    to: { name: "admin-show-expenses-type" },
    type: ["super_admin"],
    icon: { icon: "mdi-card-account-details-outline" },
    building_type: "منازل وشقق",
  },
  {
    title: "Complexes",
    to: { name: "super-admin-show-complexes" },
    building_type: "منازل وشقق",
    type: ["super_admin", "super_admin_user"],
    icon: { icon: "mdi-office-building-outline" },
  },
  {
    title: "Complaints",
    to: { name: "super-admin-show-complaints" },
    building_type: "منازل وشقق",
    type: ["super_admin"],
    icon: { icon: "mdi-compare-horizontal" },
  },
  {
    title: "إصدارات تطبيقات",
    to: { name: "admin-apps-versions" },
    type: ["super_admin"],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-apps" },
  },
  {
    title: "تحديثات الداشبورد",
    to: { name: "admin-show-dashboard-updates" },
    type: ["super_admin"],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-apps" },
  },
  {
    title: "About us lamassu",
    type: ["super_admin"],
    to: { name: "super-admin-show-about-us-lamassu" },
    building_type: "منازل وشقق",
    icon: { icon: "mdi-phone-dial" },
  },
  //super_admin

  //admin
  {
    title: "Home Page",
    to: { name: "admin-index" },
    name: "home",
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Accounts",
    name: "Accounts",
    href:
      currentPath === "admin.alrawan.net"
        ? "https://counting.alrawan.net/login"
        : currentPath === "admin.alkholood.net"
        ? "https://counting.alkholood.net/login"
        : currentPath === "admin.buruj-realstate.com"
        ? "https://counting.buruj-realstate.com/login"
        : currentPath === "admin.karambaghdad.com"
        ? "https://counting.karambaghdad.com/login"
        : currentPath === "admin.alfakhertowers.com"
        ? "https://counting.alfakhertowers.com/login"
        : currentPath === "admin.loamrealestate.net"
        ? "https://counting.loamrealestate.net/login"
        : currentPath === "admin.lamacc.com"
        ? "https://counting.lamacc.com/login"
        : currentPath === "admin.alwedd.net"
        ? "https://counting.alwedd.net/login"
        : currentPath === "admin.aljanain.com"
        ? "https://counting.aljanain.com/login"
        : currentPath === "admin.baghdadmarina.com"
        ? "https://counting.baghdadmarina.com/login"
        : "https://counting.myexperience.center/login",
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    target: "_blank",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cash-multiple" },
  },
  {
    title: "Apartment models",
    name: "forms-Apartments",
    to: { name: "admin-show-apartment-models" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "شقق",
    icon: { icon: "mdi-home-city" },
  },
  {
    title: "House Models",
    name: "forms",
    to: { name: "admin-show-house-models" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل",
    icon: { icon: "mdi-home-variant" },
  },
  {
    title: "Owners",
    name: "owners",
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-tie" },
    children: [
      {
        title: "All",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "owners",
        to: "admin-show-owners",
      },
      {
        title: "All tenants",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "all-tenants",
        to: "admin-show-all-tenants",
      },
      {
        title: "Received the residential unit",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "owners-recipients",
        to: "admin-show-owners-recipients",
      },
      {
        title: "Not received the residential unit",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "owners-non-recipients",
        to: "admin-show-owners-non-recipients",
      },
    ],
  },
  {
    title: "Owners' visits",
    name: "visits",
    to: { name: "admin-show-owners-visits" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-clock" },
  },
  {
    title: "Sales",
    name: "sales",
    type: ["admin", "investor", "investor_accountant", "assistance"],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-sale" },
    children: [
      {
        title: "Sales staff",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "sells-employee",
        to: "admin-show-sales-staff",
      },
      {
        title: "Queries",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "inquiries",
        to: "admin-show-queries",
      },
      {
        title: "Customer attendance form",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "call-center",
        to: "admin-show-customer-attendance-form",
      },
      {
        title: "Residential Unit Booking Application Form",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "application-form",
        to: "admin-show-application-form",
      },
      {
        title: "Approval Request Form",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "confirmations-form",
        to: "admin-show-approval-request-form",
      },
      {
        title: "Residential Unit Requests",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "reservations",
        to: "admin-show-residential-unit-requests",
      },
      {
        title: "Sales Contracts",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "salesContracts",
        to: "admin-show-sales-contracts",
      },
    ],
  },
  {
    title: "marketing Residentail",
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    name: "marketing Residentail",
    building_type: "منازل وشقق",
    icon: { icon: "mdi-home-city" },
    children: [
      {
        title: "Complexes",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "show-units",
        to: "admin-show-units",
      },
      {
        title: "marketing call center",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "show-marketing-call-center",
        to: "admin-show-marketing-call-center",
      },
    ],
  },
  {
    title: "Notifications",
    name: "notifications",
    to: { name: "admin-show-notifications" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bell" },
  },
  {
    title: "Banks",
    name: "bankAccounts",
    to: { name: "admin-show-banks" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bank" },
  },
  {
    title: "After-Sales Services",
    name: "After-sales-service",
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-cogs" },
    children: [
      {
        title: "Residents' Requests",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "residents-requests",
        to: "admin-show-residents-requests",
      },
      {
        title: "Maintenance Staff",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "maintenance-staff",
        to: "admin-show-maintenance-staff",
      },
      // {
      //   title: "Maintenance of Devices",
      //   type: ["admin", "investor", "investor_accountant", "resident_manager", "assistance"],
      //   name: "maintenance-of-devices",
      //   to: "admin-show-maintenance-of-devices",
      // },
      {
        title: "Service Room Names",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "service-room-names",
        to: "admin-show-service-room-names",
      },
      {
        title: "Service Bookings",
        name: "reservation-service",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        building_type: "منازل وشقق",
        children: [
          {
            title: "Shipping",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "service-bookings-shipping",
            to: "admin-show-service-bookings-shipping",
          },
          {
            title: "Maintenance",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "service-bookings-maintenance",
            to: "admin-show-service-bookings-maintenance",
          },
          {
            title: "Other services",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "reservation-service-other",
            to: "admin-show-reservation-service-other",
          },
        ],
      },
      {
        title: "Services",
        name: "Services",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        building_type: "منازل وشقق",
        children: [
          {
            title: "Shipping",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "show-services",
            to: "admin-show-services",
          },
          {
            title: "Maintenance",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "services-maintenance",
            to: "admin-show-services-maintenance",
          },
        ],
      },
      {
        title: "Other services",
        name: "Other services",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        building_type: "منازل وشقق",
        children: [
          {
            title: "Display",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "other-services",
            to: "admin-show-other-services",
          },
          {
            title: "Types of services",
            type: [
              "admin",
              "investor",
              "investor_accountant",
              "resident_manager",
              "assistance",
            ],
            name: "other-services-type",
            to: "admin-show-other-services-type",
          },
        ],
      },
      {
        title: "Residential Units",
        type: [
          "admin",
          "investor",
          "investor_accountant",
          "resident_manager",
          "assistance",
        ],
        name: "residential-units",
        to: "admin-show-residential-units",
      },
    ],
  },
  {
    title: "Guards",
    name: "guards",
    to: { name: "admin-show-guards" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-shield-account" },
  },
  {
    title: "Staff",
    name: "employees",
    to: { name: "admin-show-staff" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account-group" },
  },
  {
    title: "Users",
    name: "Users",
    to: { name: "admin-show-users" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-account" },
  },
  {
    title: "Advertisements",
    name: "postings",
    to: { name: "admin-show-advertisements" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-bullhorn" },
  },
  {
    title: "Features",
    name: "advantages",
    to: { name: "admin-show-features" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-star" },
  },
  {
    title: "How did you hear about u",
    name: "how_u_hear_about_us",
    to: { name: "admin-show-how-did-you-hear-about-us" },
    type: ["admin", "investor", "investor_accountant", "assistance"],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-help-circle" },
  },
  {
    title: "Complaints",
    name: "complain",
    to: { name: "admin-show-complaints" },
    type: [
      "admin",
      "investor",
      "investor_accountant",
      "resident_manager",
      "assistance",
    ],
    building_type: "منازل وشقق",
    icon: { icon: "mdi-alert-circle" },
  },
  //admin
];
