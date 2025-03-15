import login from "@/api/login.js";
import router from "@/router/index";
import { getMessaging, getToken } from "firebase/messaging";
import { createStore } from "vuex";

const store = createStore({
  state: {
    isLogin: false,
    errorM: null,
    lan: localStorage.getItem("selectedLanguage") || "ar",
    logo: localStorage.getItem("logo"),
    Message: false,
    currentPath: "",
  },
  mutations: {
    SET_AUTHENTICATED(state, payload) {
      state.isLogin = payload;
    },
    SET_EREORM(state, payload) {
      state.errorM = payload;
    },
    updateMessage(state, newValue) {
      state.Message = newValue;
    },
    SET_LOGO(state, logo) {
      state.logo = logo;
    },
    SET_CURRENT_PATH(state, path) {
      state.currentPath = path;
    },
    SET_ERROR(state, message) {
      state.errorM = message;
    },
  },
  actions: {
    checkCurrentPath({ commit }) {
      const currentPath = window.location.hostname;
      localStorage.setItem("currentPath", currentPath);
      commit("SET_CURRENT_PATH", currentPath);
    },
    checkAuth() {
      const rawData = localStorage.getItem("results");
      if (rawData == null) {
        router.push("/login");
      }
    },
    async submitLogin({ commit }, { email, password }) {
      const isDevelopment =
        window.location.hostname === "localhost" ||
        window.location.hostname === "admin.myexperience.center";

      const errorMessages = {
        "admin.alrawan.net": "خطأ: الحساب غير صالح لمجمع الروان.",
        "admin.loamrealestate.net": "خطأ: الحساب غير صالح شركة لوم العقارية.",
        "admin.alfakhertowers.com":
          "خطأ: الحساب غير صالح لمجمع الأبراج الفاخر.",
        "admin.karambaghdad.com": "خطأ: الحساب غير صالح لمجمع كرم بغداد.",
        "admin.lamacc.com": "خطأ: الحساب غير صالح لمجمع لاماك.",
        "admin.alwedd.net": "خطأ: الحساب غير صالح لمجمع الود.",
        "admin.aljanain.com": "خطأ: الحساب غير صالح لمجمع الجنائن.",
        "admin.baghdadmarina.com": "خطأ: الحساب غير صالح لمجمع مارينا.",
        "admin.baghdad-residences.com":
          "خطأ: الحساب غير صالح لمجمع بغداد رزدنس.",
        "admin.alkholood.net": "خطأ: الحساب غير صالح لمجمع الخلود.",
        "admin.shatalarab-city.com": "خطأ: الحساب غير صالح لمجمع شط العرب.",
        "admin.buruj-realstate.com": "خطأ: الحساب غير صالح لمجمع البروج.",
      };

      const isValidCenter = (currentPath, centerId) => {
        if (isDevelopment) {
          return true;
        }

        const validCenters = {
          "admin.alrawan.net": "66656b164cdec95cab679181",
          "admin.alfakhertowers.com": "66e9376b2dcd8ef700ac5f01",
          "admin.karambaghdad.com": "66e2c810dec89fdfea71c92b",
          "admin.lamacc.com": "66a8a602996fa363c5a0f6f5",
          "admin.alwedd.net": "66e937122dcd8ef700ac5ed6",
          "admin.aljanain.com": "6725ceff739176087eb6789f",
          "admin.baghdadmarina.com": "6729808e77eecc001eb05f19",
          "admin.baghdad-residences.com": "67cd5beafd9873028f999726",
          "admin.loamrealestate.net": "672981a677eecc001eb05f4a",
          "admin.alkholood.net": "67b5cd5be9db64e0451ea6c1",
          "admin.shatalarab-city.com": "673ca1efc96f983369558fd4",
          "admin.buruj-realstate.com": "67b9a76da56dab25e4b2de01",
        };

        return validCenters[currentPath] === centerId;
      };

      const saveUserData = (results) => {
        const { token, type, center_id, pages } = results;

        localStorage.setItem("accessToken", token);
        localStorage.setItem("account_type", type);
        localStorage.setItem("results", JSON.stringify(results));
        localStorage.setItem("pages", JSON.stringify(pages));

        if (center_id && center_id.logo) {
          commit("SET_LOGO", center_id.logo);
          localStorage.setItem("logo", center_id.logo);
        }
      };

      const redirectUser = (type, pages) => {
        const routes = {
          super_admin: "/super-admin-home",
          super_admin_user: "/super-admin-show-complexes",
          admin: "/admin-index",
          investor: "/admin-index",
          investor_accountant: "/admin-index",
          resident_manager: "/admin-index",
          assistance: getAssistanceRoute(pages),
        };

        router.push(routes[type] || "/");
      };

      const getAssistanceRoute = (pages) => {
        const pageMap = {
          home: "/admin-index",
          "forms-Apartments": "/admin-show-apartment-models",
          forms: "/admin-show-house-models",
          owners: "/admin-show-owners",
          "all-tenants": "/admin-show-all-tenants",
          "owners-recipients": "/admin-show-owners-recipients",
          "owners-non-recipients": "/admin-show-owners-non-recipients",
          "service-contracts": "/admin-show-service-contracts",
          visits: "/admin-show-owners-visits",
          "sells-employee": "/admin-show-sales-staff",
          "call-center": "/admin-show-customer-attendance-form",
          "application-form": "/admin-show-application-form",
          "confirmations-form": "/admin-show-approval-request-form",
          "show-units": "/admin-show-units",
          "show-marketing-call-center": "/admin-show-marketing-call-center",
          inquiries: "/admin-show-queries",
          reservations: "/admin-show-residential-unit-requests",
          salesContracts: "/admin-show-sales-contracts",
          notifications: "/admin-show-notifications",
          bankAccounts: "/admin-show-banks",
          "After-sales-service": "/admin-show-maintenance-staff",
          "maintenance-staff": "/admin-show-maintenance-staff",
          "residents-requests": "/admin-show-residents-requests",
          "maintenance-of-devices": "/admin-show-maintenance-of-devices",
          "service-room-names": "/admin-show-service-room-names",
          "reservation-service": "/admin-show-service-bookings-shipping",
          "service-bookings-shipping": "/admin-show-service-bookings-shipping",
          Services: "/show-services",
          "show-services": "/admin-show-services",
          "services-maintenance": "/admin-show-services-maintenance",
          "Other services": "/admin-show-other-services",
          "other-services": "/admin-show-other-services",
          "other-services-type": "/admin-show-other-services-type",
          "residential-units": "/admin-show-residential-units",
          guards: "/admin-show-guards",
          employees: "/admin-show-staff",
          Users: "/admin-show-users",
          postings: "/admin-show-advertisements",
          advantages: "/admin-show-features",
          how_u_hear_about_us: "/admin-show-how-did-you-hear-about-us",
          complain: "/admin-show-complaints",
        };

        if (pages[0] === "sales" && pages[1] === "sells-employee") {
          return "/admin-show-sales-staff";
        } else if (pages[0] === "sales" && pages[1] === "inquiries") {
          return "/admin-show-queries";
        } else if (pages[0] === "sales" && pages[1] === "call-center") {
          return "/admin-show-customer-attendance-form";
        } else if (pages[0] === "sales" && pages[1] === "application-form") {
          return "/admin-show-application-form";
        } else if (pages[0] === "sales" && pages[1] === "confirmations-form") {
          return "/admin-show-approval-request-form";
        } else if (pages[0] === "sales" && pages[1] === "reservations") {
          return "/admin-show-residential-unit-requests";
        } else if (pages[0] === "sales" && pages[1] === "salesContracts") {
          return "/admin-show-sales-contracts";
        } else if (
          pages[0] === "marketing Residentail" &&
          pages[1] === "show-units"
        ) {
          return "/admin-show-units";
        } else if (
          pages[0] === "marketing Residentail" &&
          pages[1] === "show-marketing-call-center"
        ) {
          return "/show-marketing-call-center";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "maintenance-staff"
        ) {
          return "/admin-show-maintenance-staff";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "residents-requests"
        ) {
          return "/admin-show-residents-requests";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "maintenance-of-devices"
        ) {
          return "/admin-show-maintenance-of-devices";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "service-room-names"
        ) {
          return "/admin-show-service-room-names";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "reservation-service" &&
          pages[2] === "service-bookings-shipping"
        ) {
          return "/admin-show-service-bookings-shipping";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "reservation-service" &&
          pages[2] === "service-bookings-maintenance"
        ) {
          return "/admin-show-service-bookings-maintenance";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "reservation-service-other"
        ) {
          return "/admin-show-reservation-service-other";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "Services" &&
          pages[2] === "show-services"
        ) {
          return "/admin-show-services";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "Services" &&
          pages[2] === "services-maintenance"
        ) {
          return "/admin-show-services-maintenance";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "Other services" &&
          pages[2] === "other-services"
        ) {
          return "/admin-show-other-services";
        } else if (
          pages[0] === "After-sales-service" &&
          pages[1] === "Other services" &&
          pages[2] === "other-services-type"
        ) {
          return "/admin-show-other-services-type";
        } else if (
          pages[0] === "marketing Residentail" &&
          pages[1] === "residential-units"
        ) {
          return "/admin-show-residential-units";
        }

        return pageMap[pages[0]] || "/admin-index";
      };

      try {
        const messaging = getMessaging();
        var token_firebase = await getToken(messaging, {
          vapidKey:
            "BDboAr_RwKcjJqPyHCsWpJExBlEP9gufu70HN6nBerd8h-ZytEWtzMbnWlADbsgQ6KFEEzsiaI95rxuk0Ms7n30",
        });

        if (!token_firebase) {
          token_firebase = null;
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }

      try {
        const response = await login.login({
          email,
          password,
          auth_phone_id: "web",
          auth_firebase: token_firebase,
        });

        const currentPath = window.location.hostname;
        localStorage.setItem("currentPath", currentPath);

        const { type, center_id, token, pages } = response.data.results;

        if (
          ["agent", "accountant_users", "manager_accountant"].includes(type)
        ) {
          commit(
            "SET_ERROR",
            "خطأ: لا يمكن تسجيل الحساب في الادمن الرئيسي. يمكنك تسجيل الدخول في الحسابات فقط."
          );
          return;
        }

        // تأكد من وجود center_id قبل الوصول إلى _id
        if (type === "super_admin") {
          commit("SET_AUTHENTICATED", true);
          saveUserData(response.data.results);
          redirectUser(type, pages);
        } else if (type === "super_admin_user") {
          commit("SET_AUTHENTICATED", true);
          saveUserData(response.data.results);
          redirectUser(type, pages);
        } else if (
          center_id &&
          center_id._id &&
          isValidCenter(currentPath, center_id._id)
        ) {
          commit("SET_AUTHENTICATED", true);
          saveUserData(response.data.results);
          redirectUser(type, pages);
        } else if (center_id) {
          const errorMessage =
            errorMessages[currentPath] || "خطأ: الحساب غير صالح.";
          commit("SET_ERROR", errorMessage);
        } else {
          commit("SET_ERROR", "خطأ: لم يتم العثور على المركز.");
        }
      } catch (error) {
        commit(
          "SET_ERROR",
          "خطأ في تسجيل الدخول. يرجى التحقق من البريد الإلكتروني أو كلمة المرور."
        );
        console.error("Login error:", error);
      }
    },
    async getCenterP({ commit }) {
      try {
        const response = await axiosInstance.get(`/center`);
        if (response) {
          localStorage.setItem("logo", response.data.results.logo);
          commit("SET_LOGO", response.data.results.logo);
        }
      } catch (error) {
        commit("SET_LOGO", null);
        throw error;
      }
    },
    async checkAccessTokenOnLoad({ commit }) {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const account_type = localStorage.getItem("account_type");
        const pages = JSON.parse(localStorage.getItem("pages")) || [];

        const routeMap = {
          super_admin: "/super-admin-home",
          super_admin_user: "/super-admin-show-complexes",
          admin: "/admin-index",
          resident_manager: "/admin-index",
          investor: "/admin-index",
          investor_accountant: "/admin-index",
          assistance: getAssistanceRoute(pages),
        };

        // توجيه المستخدم إلى المسار المناسب
        if (routeMap[account_type]) {
          router.push(routeMap[account_type]);
        }

        commit("SET_AUTHENTICATED", true);
      }
    },
    submitLogout({ commit }) {
      commit("SET_AUTHENTICATED", false);
      localStorage.clear("accessToken");
      localStorage.clear("account_type");
      localStorage.clear("results");
      router.replace("/login");
    },
  },
});

const getAssistanceRoute = (pages) => {
  const pageMap = {
    home: "/admin-index",
    "forms-Apartments": "/admin-show-apartment-models",
    forms: "/admin-show-house-models",
    owners: "/admin-show-owners",
    visits: "/admin-show-owners-visits",
    notifications: "/admin-show-notifications",
    guards: "/admin-show-guards",
    employees: "/admin-show-staff",
    postings: "/admin-show-advertisements",
    advantages: "/admin-show-features",
    how_u_hear_about_us: "/admin-show-how-did-you-hear-about-us",
    complain: "/admin-show-complaints",
  };

  // خريطة للمسارات المتعلقة بـ "sales"
  const salesMap = {
    "sells-employee": "/admin-show-sales-staff",
    "call-center": "/admin-show-customer-attendance-form",
    inquiries: "/admin-show-queries",
    "application-form": "/admin-show-application-form",
    "confirmations-form": "/admin-show-approval-request-form",
    reservations: "/admin-show-residential-unit-requests",
  };

  // تحقق من الصفحات لمعرفة ما إذا كانت تنتمي إلى "sales"
  if (pages[0] === "sales" && salesMap[pages[1]]) {
    return salesMap[pages[1]];
  }

  return pageMap[pages[0]] || "/admin-index";
};

export default store;
