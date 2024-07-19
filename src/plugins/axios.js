import router from "@/router/index";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.myexperience.center/api/web",
  timeout: 100000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = token ?? "";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error in axios response interceptor:", error);

    if (error.response && error.response.status === 401) {
      localStorage.clear("accessToken");
      localStorage.clear("results");
      localStorage.setItem("reloaded", "false");
      router.replace("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
