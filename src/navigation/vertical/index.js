export default [
  // super_admin
  {
    title: "Home Page",
    to: { name: "super-admin-home" },
    type: "super_admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Complexes",
    to: { name: "super-admin-show-complexes" },
    type: "super_admin",
    icon: { icon: "mdi-office-building-outline" },
  },
  {
    title: "Complaints",
    to: { name: "super-admin-show-complaints" },
    type: "super_admin",
    icon: { icon: "mdi-compare-horizontal" },
  },
  {
    title: "About us lamassu",
    to: { name: "super-admin-show-about-us-lamassu" },
    type: "super_admin",
    icon: { icon: "mdi-phone-dial" },
  },
  //super_admin

  //super_admin
  {
    title: "Home Page",
    to: { name: "admin-index" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Accounts",
    href: "https://counting.myexperience.center/ownerBills",
    type: "admin",
    target: "_blank",
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Apartment models",
    to: { name: "admin-show-apartment-models" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "House Models",
    to: { name: "admin-show-house-models" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Owners",
    to: { name: "admin-show-owners" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Owners' visits",
    to: { name: "admin-show-owners-visits" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: 'Sales',
    type: "admin",
    icon: { icon: 'mdi-file-document-outline' },
    children: [
      { title: 'Sales staff', to: 'admin-show-sales-staff' },
      { title: 'Queries', to: 'admin-show-queries' },
      { title: 'Customer attendance form', to: 'admin-show-customer-attendance-form' },
      { title: 'Residential Unit Booking Application Form', to: 'admin-show-application-form' },
      { title: 'Approval Request Form', to: 'admin-show-approval-request-form' },
      { title: 'Residential Unit Requests', to: 'admin-show-residential-unit-requests' },
      { title: 'Sales Contracts', to: 'admin-show-sales-contracts' },
    ],
  },
  {
    title: "Notifications",
    to: { name: "admin-show-notifications" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Banks",
    to: { name: "admin-show-banks" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: 'After-Sales Services',
    type: "admin",
    icon: { icon: 'mdi-file-document-outline' },
    children: [
      { title: 'Maintenance Staff', to: 'admin-show-maintenance-staff' },
      { title: 'Service Bookings', to: 'admin-show-service-bookings' },
      { title: 'Services', to: 'admin-show-services' },
      { title: 'Residential Units', to: 'admin-show-residential-units' },
    ],
  },
  {
    title: "Guards",
    to: { name: "admin-show-guards" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Staff",
    to: { name: "admin-show-staff" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Users",
    to: { name: "admin-show-users" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Advertisements",
    to: { name: "admin-show-advertisements" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Features",
    to: { name: "admin-show-features" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "How did you hear about u",
    to: { name: "admin-show-how-did-you-hear-about-us" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },
  {
    title: "Complaints",
    to: { name: "admin-show-complaints" },
    type: "admin",
    icon: { icon: "mdi-home-outline" },
  },

  //super_admin
];
