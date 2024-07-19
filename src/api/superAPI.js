import axiosInstance from "@/plugins/axios.js";

class superAPI {
  // Center
  async getCenter() {
    const response = await axiosInstance.get(`/admin/centers`);
    return response;
  }
  async addCenter({ name, phone, building_type, address, qr, is_dollar }) {
    const requestData = {
      name,
      phone,
      building_type,
      address,
      qr,
      is_dollar,
    };
    const response = await axiosInstance.post(`/admin/centers`, requestData);
    return response;
  }
  async editCenter({ center_id, name, phone, building_type, address, qr, is_dollar }) {
    const requestData = {
      center_id,
      name,
      phone,
      building_type,
      address,
      qr,
      is_dollar,
    };
    const response = await axiosInstance.put(`/admin/centers`, requestData);
    return response;
  }
  // CenterUsers
  async getCenterUsers(id) {
    const response = await axiosInstance.get(
      `/admin/centerUsers/center_id/${id}`
    );
    return response;
  }
  async addCenterUsers({
    center_id,
    name,
    email,
    password_show,
    phone,
    address,
  }) {
    const requestData = {
      center_id,
      name,
      email,
      password_show,
      phone,
      address,
    };
    const response = await axiosInstance.post(
      `/admin/centerUsers`,
      requestData
    );
    return response;
  }
  async editCenterUsers({
    account_id,
    name,
    email,
    password_show,
    phone,
    address,
  }) {
    const requestData = {
      account_id,
      name,
      email,
      password_show,
      phone,
      address,
    };
    const response = await axiosInstance.put(`/admin/centerUsers`, requestData);
    return response;
  }
  async removeCenterUsers(id) {
    const response = await axiosInstance.delete(
      `/admin/centerUsers/account_id/${id}`
    );

    return response;
  }
  // CenterUsers
  // Center

  // Complain
  async getComplain({ page, limit, search }) {
    const response = await axiosInstance.get(
      `/admin/complain?page=${page}&limit=${limit}&search=${search}`
    );
    return response;
  }
  async removeComplain(id) {
    const response = await axiosInstance.delete(`/admin/complain/${id}`);
    return response;
  }
  // Complain

  // AboutUsLamassu
  async getAboutUsLamassu() {
    const response = await axiosInstance.get(`/admin/about_us_lamassu`);
    return response;
  }
  async editAboutUsLamassu({
    name,
    description,
    address,
    phone,
    website,
    facebook,
    instagram,
    logo,
  }) {
    const requestData = {
      name,
      description,
      address,
      phone,
      website,
      facebook,
      instagram,
      logo,
    };
    const response = await axiosInstance.put(
      `/admin/about_us_lamassu`,
      requestData
    );
    return response;
  }
  // AboutUsLamassu
}
export default new superAPI();
