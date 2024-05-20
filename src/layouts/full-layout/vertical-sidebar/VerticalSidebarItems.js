// var userData = localStorage.getItem("user");
// var formsApartments = null;
// var formsApartmentsAssistance = null;
// if (userData) {
//   var userDataString = JSON.parse(userData);

//   if (userDataString && userDataString.type) {
//     if(userDataString.type == 'super_admin') {
//        formsApartments = null;
//        formsApartmentsAssistance = null;
//     } else {
//       if (userDataString.center_id.building_type == "شقق") {
//         formsApartments = {
//           title: "نماذج شقق",
//           icon: "home",
//           to: "/admin-forms-Apartments",
//           type: "admin",
//         }
//         formsApartmentsAssistance = {
//           title: "نماذج شقق",
//           icon: "home",
//           to: "/admin-forms-Apartments",
//           type: "assistance",
//         }
//       } else if(userDataString.center_id.building_type == "منازل") {
//         formsApartments =   {
//           title: "نماذج منازل",
//           icon: "home",
//           to: "/admin-forms",
//           type: "admin",
//         }
//         formsApartmentsAssistance =   {
//           title: "نماذج منازل",
//           icon: "home",
//           to: "/admin-forms",
//           type: "assistance",
//         }
//       } else if (userDataString.center_id.building_type == "منازل وشقق") {
//         formsApartments =   {
//           title: "نماذج شقق",
//           icon: "home",
//           to: "/admin-forms-Apartments",
//           type: "admin",
//         },
//         {
//           title: "نماذج منازل",
//           icon: "home",
//           to: "/admin-forms",
//           type: "admin",
//         }
//         formsApartmentsAssistance =   {
//           title: "نماذج شقق",
//           icon: "home",
//           to: "/admin-forms-Apartments",
//           type: "assistance",
//         },
//         {
//           title: "نماذج منازل",
//           icon: "home",
//           to: "/admin-forms",
//           type: "assistance",
//         }
//       }
//     }
//   }
// }

export default [
  // super_admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/SuperAdminHome",
    type: "super_admin",
    building_type: "منازل وشقق",
  },
  {
    title: "المجمعات",
    icon: "pie-chart",
    to: "/centers",
    type: "super_admin",
    building_type: "منازل وشقق",
  },
  {
    title: "الشكاوي",
    icon: "pie-chart",
    to: "/complain",
    type: "super_admin",
    building_type: "منازل وشقق",
  },
  {
    title: "معلومات عنا",
    icon: "pie-chart",
    to: "/AboutUsLamassu",
    type: "super_admin",
    building_type: "منازل وشقق",
  },
  // super_admin
  // admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/Index",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "الحسابات",
    icon: "dollar-sign",
    href: "https://counting.myexperience.center/ownerBills",
    type: "admin",
    target: "_blank",
  },
  {
    title: "نماذج شقق",
    icon: "home",
    to: "/admin-forms-Apartments",
    type: "admin",
    building_type: "شقق",
  },
  {
    title: "نماذج منازل",
    icon: "home",
    to: "/admin-forms",
    type: "admin",
    building_type: "منازل",
  },
  {
    title: "الملاك",
    icon: "users",
    to: "/admin-owners",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "زيارات الملاك",
    icon: "users",
    to: "/admin-visits",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "المبيعات",
    type: "admin",
    building_type: "منازل وشقق",
    children: [
      {
        title: "موظفين المبيعات",
        icon: "user",
        to: "admin-sells-employee",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "أستفسارات الزبائن",
        icon: "phone",
        to: "admin-call-center",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "أستماراة طلب حجز وحدة سكنية",
        icon: "pen-tool",
        to: "admin-application-form",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "أستماراة طلب موافقة",
        icon: "pen-tool",
        to: "admin-confirmations-form",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "طلبات وحدة سكنية",
        icon: "arrow-left",
        to: "admin-reservations",
        type: "admin",
        building_type: "منازل وشقق",
      },
      // {
      //   title: "عقود المبيعات",
      //   icon: "arrow-left",
      //   to: "admin-salesContracts",
      //   type: "admin",
      // building_type: "منازل وشقق",
      // },
    ],
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/admin-notifications",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "خدمات ما بعد البيع",
    type: "admin",
    building_type: "منازل وشقق",
    children: [
      {
        title: "حجوزات الخدمات",
        icon: "award",
        to: "admin-reservation-service",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "الخدمات",
        icon: "award",
        to: "admin-services",
        type: "admin",
        building_type: "منازل وشقق",
      },
      {
        title: "الوحدات السكنية",
        icon: "home",
        to: "admin-buying-offers",
        type: "admin",
        building_type: "منازل وشقق",
      },
    ],
  },
  {
    title: "الحراس",
    icon: "users",
    to: "/admin-guards",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "الموظفين",
    icon: "user",
    to: "/admin-employees",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "المستخدمين",
    icon: "users",
    to: "/users",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-postings",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "المميزات",
    icon: "codesandbox",
    to: "/admin-advantages",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "كيف سمع عنا",
    icon: "codesandbox",
    to: "/admin-how_u_hear_about_us",
    type: "admin",
    building_type: "منازل وشقق",
  },
  {
    title: "الشكاوي",
    icon: "codesandbox",
    to: "/admin-complain",
    type: "admin",
    building_type: "منازل وشقق",
  },
  // admin
  // assistance
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/Index",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "نماذج شقق",
    icon: "home",
    to: "/admin-forms-Apartments",
    type: "assistance",
    building_type: "شقق",
  },
  {
    title: "نماذج منازل",
    icon: "home",
    to: "/admin-forms",
    type: "assistance",
    building_type: "منازل",
  },
  {
    title: "الملاك",
    icon: "users",
    to: "/admin-owners",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "زيارات الملاك",
    icon: "users",
    to: "/admin-visits",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "المبيعات",
    type: "assistance",
    building_type: "منازل وشقق",
    children: [
      {
        title: "موظفين المبيعات",
        icon: "user",
        to: "admin-sells-employee",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "أستفسارات الزبائن",
        icon: "phone",
        to: "admin-call-center",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "أستماراة طلب حجز وحدة سكنية",
        icon: "pen-tool",
        to: "admin-application-form",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "أستماراة طلب موافقة",
        icon: "pen-tool",
        to: "admin-confirmations-form",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "طلبات وحدة سكنية",
        icon: "arrow-left",
        to: "admin-reservations",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      // {
      //   title: "عقود المبيعات",
      //   icon: "arrow-left",
      //   to: "admin-salesContracts",
      //   type: "assistance",
      // building_type: "منازل وشقق",
      // },
    ],
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/admin-notifications",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "خدمات ما بعد البيع",
    type: "assistance",
    building_type: "منازل وشقق",
    children: [
      {
        title: "حجوزات الخدمات",
        icon: "award",
        to: "admin-reservation-service",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "الخدمات",
        icon: "award",
        to: "admin-services",
        type: "assistance",
        building_type: "منازل وشقق",
      },
      {
        title: "الوحدات السكنية",
        icon: "home",
        to: "admin-buying-offers",
        type: "assistance",
        building_type: "منازل وشقق",
      },
    ],
  },
  {
    title: "الحراس",
    icon: "users",
    to: "/admin-guards",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "الموظفين",
    icon: "user",
    to: "/admin-employees",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-postings",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "المميزات",
    icon: "codesandbox",
    to: "/admin-advantages",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "كيف سمع عنا",
    icon: "codesandbox",
    to: "/admin-how_u_hear_about_us",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  {
    title: "الشكاوي",
    icon: "codesandbox",
    to: "/admin-complain",
    type: "assistance",
    building_type: "منازل وشقق",
  },
  // assistance
];
