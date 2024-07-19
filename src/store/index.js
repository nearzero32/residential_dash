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
  },
  actions: {
    checkAuth() {
      const rawData = localStorage.getItem("results");
      if (rawData == null) {
        router.push("/login");
      }
    },
    async submitLogin({ commit }, { email, password }) {
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
          auth_phone_id: null,
          auth_firebase: token_firebase,
        });
        console.log(response);
        commit("SET_AUTHENTICATED", true);
        localStorage.setItem("accessToken", response.data.results.token);
        localStorage.setItem("account_type", response.data.results.type);
        localStorage.setItem("results", JSON.stringify(response.data.results));
        if (
          response.data.results.center_id &&
          response.data.results.center_id.logo !== null
        ) {
          commit("SET_LOGO", response.data.results.center_id.logo);
          localStorage.setItem("logo", response.data.results.center_id.logo);
        }
        if (response.data.results.type === "super_admin") {
          router.push("/super-admin-home");
        } else if (response.data.results.type === "admin") {
          router.push("/admin-index");
        }
      } catch (error) {
        if (error.response.data.error == true) {
          commit("SET_EREORM", error.response.data.results);
        }
      }
    },
    async checkAccessTokenOnLoad({ commit }) {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const account_type = localStorage.getItem("account_type");
        if (account_type == "super_admin") {
          router.push("/super-admin-home");
        } else if (account_type === "admin") {
          router.push("/manager-home");
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

export default store;
