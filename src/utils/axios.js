import axios from "axios";
import router from "../router/index";

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const axiosInstance = axios.create({
  baseURL: "https://api.myexperience.center/api/web",
  timeout: 100000,

});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = JSON.parse(token) ?? "";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error in axios response interceptor:', error);

    if (error.response && error.response.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
