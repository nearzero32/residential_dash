export default [
  // super_admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/SuperAdminHome",
    type: "super_admin",
  },
  {
    title: "المجمعات",
    icon: "pie-chart",
    to: "/centers",
    type: "super_admin",
  },
  // super_admin
  // admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/Index",
    type: "admin",
  },
  {
    title: "الحسابات",
    icon: "dollar-sign",
    href: "http://counting.myexperience.center/#/",
    type: "admin",
    target: "_blank",
  },
  {
    title: "النماذج",
    icon: "home",
    to: "/admin-forms",
    type: "admin",
  },
  {
    title: "الملاك",
    icon: "users",
    to: "/admin-owners",
    type: "admin",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "المبيعات",
    type: "admin",
    children: [
      {
        title: "موظفين المبيعات",
        icon: "user",
        to: "admin-sells-employee",
        type: "admin",
      },
      {
        title: "أستفسارات الزبائن",
        icon: "phone",
        to: "admin-call-center",
        type: "admin",
      },
      {
        title: "أستماراة طلب حجز وحدة سكنية",
        icon: "pen-tool",
        to: "admin-application-form",
        type: "admin",
      },
      {
        title: "أستماراة طلب موافقة",
        icon: "pen-tool",
        to: "admin-confirmations_form",
        type: "admin",
      },
      {
        title: "طلبات المنازل",
        icon: "arrow-left",
        to: "admin-reservations",
        type: "admin",
      },
    ],
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/admin-notifications",
    type: "admin",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "خدمات ما بعد البيع",
    type: "admin",
    children: [
      {
        title: "حجوزات الخدمات",
        icon: "award",
        to: "admin-reservations-service",
        type: "admin",
      },
      {
        title: "الخدمات",
        icon: "award",
        to: "admin-services",
        type: "admin",
      },
      {
        title: "المنازل",
        icon: "home",
        to: "admin-buying-offers",
        type: "admin",
      },
    ],
  },
  {
    title: "الحراس",
    icon: "users",
    to: "/admin-guards",
    type: "admin",
  },
  {
    title: "الموظفين",
    icon: "user",
    to: "/admin-employees",
    type: "admin",
  },
  {
    title: "المستخدمين",
    icon: "users",
    to: "/users",
    type: "admin",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-postings",
    type: "admin",
  },
  {
    title: "المميزات",
    icon: "codesandbox",
    to: "/admin-advantages",
    type: "admin",
  },
  {
    title: "كيف سمع عنا",
    icon: "codesandbox",
    to: "/admin-how_u_hear_about_us",
    type: "admin",
  },
  // admin
  // assistance
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/Index",
    type: "assistance",
  },
  {
    title: "النماذج",
    icon: "home",
    to: "/admin-forms",
    type: "assistance",
  },
  {
    title: "الملاك",
    icon: "users",
    to: "/admin-owners",
    type: "assistance",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "المبيعات",
    type: "assistance",
    children: [
      {
        title: "موظفين المبيعات",
        icon: "user",
        to: "admin-sells-employee",
        type: "assistance",
      },
      {
        title: "أستفسارات الزبائن",
        icon: "phone",
        to: "admin-call-center",
        type: "assistance",
      },
      {
        title: "أستماراة طلب حجز وحدة سكنية",
        icon: "pen-tool",
        to: "admin-application-form",
        type: "assistance",
      },
      {
        title: "أستماراة طلب موافقة",
        icon: "pen-tool",
        to: "admin-confirmations_form",
        type: "assistance",
      },
      {
        title: "طلبات المنازل",
        icon: "arrow-left",
        to: "admin-reservations",
        type: "assistance",
      },
    ],
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/admin-notifications",
    type: "assistance",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "خدمات ما بعد assistance",
    type: "assistance",
    children: [
      {
        title: "حجوزات الخدمات",
        icon: "award",
        to: "admin-reservations-service",
        type: "assistance",
      },
      {
        title: "الخدمات",
        icon: "award",
        to: "admin-services",
        type: "assistance",
      },
      {
        title: "المنازل",
        icon: "home",
        to: "admin-buying-offers",
        type: "assistance",
      },    
    ],
  },
  {
    title: "الحراس",
    icon: "users",
    to: "/admin-guards",
    type: "assistance",
  },
  {
    title: "الموظفين",
    icon: "user",
    to: "/admin-employees",
    type: "assistance",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-postings",
    type: "assistance",
  },
  {
    title: "المميزات",
    icon: "codesandbox",
    to: "/admin-advantages",
    type: "assistance",
  },
  {
    title: "كيف سمع عنا",
    icon: "codesandbox",
    to: "/admin-how_u_hear_about_us",
    type: "assistance",
  },
  // assistance
];
