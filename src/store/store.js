import { getMessaging, getToken } from "firebase/messaging";
import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/utils/axios";
import CryptoJS from "crypto-js";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    Message: false,
    SidebarColor: "white",
    SidebarBg: "",
    navbarColor: "#fafafa",
    setHorizontalLayout: false,
    logo: localStorage.getItem("logo"),
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: false,
  },
  mutations: {
    updateMessage(state, newValue) {
      state.Message = newValue;
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
    SET_LOGO(state, logo) {
      state.logo = logo;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        
        // Get Firebase Cloud Messaging token
        const messaging = getMessaging();
        var token_firebase = await getToken(messaging, {
          vapidKey:
          "BDboAr_RwKcjJqPyHCsWpJExBlEP9gufu70HN6nBerd8h-ZytEWtzMbnWlADbsgQ6KFEEzsiaI95rxuk0Ms7n30",
        });
        
        if (!token_firebase) {
          token_firebase = null
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
        const hashedPassword = CryptoJS.SHA512(password).toString();

        const requestData = {
          email,
          password: hashedPassword,
          auth_phone_id: null,
          auth_firebase: token_firebase,
        };

        const response = await axiosInstance.post(`/login`, requestData);
        
        if (response.data.error === true) {
          throw new Error(response.data.results);
        }

        commit("SET_AUTHENTICATED", true);
        if (response.data.results.type !== "super_admin") {
          if(response.data.results.center_id.logo !== null) {
            commit("SET_LOGO", response.data.results.center_id.logo);
            localStorage.setItem("logo", response.data.results.center_id.logo);
          }
        }

        localStorage.setItem("user", JSON.stringify(response.data.results));
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.results.token)
        );

        if (response.data.results.type === "super_admin") {
          router.push("/SuperAdminHome");
        } else if (response.data.results.type === "admin") {
          router.push(this.returnUrl || "/Index");
        } else if (response.data.results.type === "assistance") {
          router.push(this.returnUrl || "/Index");
        }

    },
    async logout({ commit }) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axiosInstance.get(`/logout`);
        if (response) {
          commit("SET_AUTHENTICATED", false);
          this.user = null;
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          localStorage.removeItem("logo");
          router.push("/login");
        }
      } catch (error) {
        commit("SET_AUTHENTICATED", false);
        throw error;
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
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getMessage(state) {
      return state.Message;
    },
  },
});
