import axiosInstance from "@/plugins/axios.js";
import sha512 from "js-sha512";

class login {
  async login({ email, password, auth_phone_id, auth_firebase }) {
    const requestData = {
      email,
      password: sha512(password),
      auth_phone_id,
      auth_firebase,
    };
    const response = await axiosInstance.post(`/login`, requestData);

    return response;
  }
}
export default new login();
