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
    SET_EREORM(state, payload) {
      state.errorM = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.isLogin = payload;
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

      const isValidCenter = (currentPath, centerId) => {
        if (isDevelopment) {
          return true;
        }

        const validCenters = {
          "counting.alrawan.net": {
            id: "66656b164cdec95cab679181",
            name: "مجمع الروان",
          },
          "counting.alfakhertowers.com": {
            id: "66e9376b2dcd8ef700ac5f01",
            name: "مجمع الفاخر",
          },
          "counting.karambaghdad.com": {
            id: "66e2c810dec89fdfea71c92b",
            name: "مجمع كرم بغداد",
          },
          "counting.lamacc.com": {
            id: "66a8a602996fa363c5a0f6f5",
            name: "مجمع لاماك",
          },
        };

        if (validCenters[currentPath]?.id !== centerId) {
          commit(
            "SET_ERROR",
            `خطأ، الرجاء إدخال حساب ${
              validCenters[currentPath]?.name || "المجمع غير معروف"
            }`
          );
          return false;
        }
        return true;
      };

      // دوال مساعدة (من غير تغيير)
      const saveUserData = (results) => {
        /* نفس الشيفرة */
      };
      const redirectUser = (type, pages) => {
        /* نفس الشيفرة */
      };
      const getAssistanceRoute = (pages) => {
        /* نفس الشيفرة */
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
        commit("SET_ERROR", "خطأ في الاتصال بخدمة Firebase.");
      }

      try {
        const response = await login.login({
          email,
          password,
          auth_phone_id: null,
          auth_firebase: token_firebase,
        });

        const currentPath = window.location.hostname;
        localStorage.setItem("currentPath", currentPath);

        const { type, center_id, token, pages } = response.data.results;

        if (["agent", "accountant_users"].includes(type)) {
          commit(
            "SET_ERROR",
            "خطأ: لا يمكن تسجيل الحساب في الادمن الرئيسي. يمكنك تسجيل الدخول في الحسابات فقط."
          );
          return;
        }

        if (isValidCenter(currentPath, center_id._id)) {
          commit("SET_AUTHENTICATED", true);
          saveUserData(response.data.results);
          redirectUser(type, pages);
        } else {
          commit("SET_ERROR", `خطأ, الرجاء ادخال حساب صالح في ${currentPath}`);
        }
      } catch (error) {
        console.log(error);
        const errorMessage =
          error.response?.data?.results || "حدث خطأ أثناء تسجيل الدخول.";
        commit("SET_ERROR", errorMessage);
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
          admin: "/admin-index",
          resident_manager: "/admin-index",
          investor: "/admin-index",
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
