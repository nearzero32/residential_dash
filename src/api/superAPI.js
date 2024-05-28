import axiosInstance from "@/utils/axios";

class Api {
  // Complain
  async getComplain({ page, limit }) {
    const response = await axiosInstance.get(`/admin/complain?page=${page}&limit=${limit}`);
    return response;
  }
  async removeComplain(id) {
    const response = await axiosInstance.delete(
      `/admin/complain/${id}`
    );
    return response;
  }
  // Complain
  // Complain
  async getAboutUsLamassu() {
    const response = await axiosInstance.get(`/admin/about_us_lamassu`);
    return response;
  }
  async editAboutUsLamassu({ name, description, address, phone, website, facebook, instagram, logo }) {
    const requestData = {
      name, description, address, phone, website, facebook, instagram, logo
    };
    const response = await axiosInstance.put(`/admin/about_us_lamassu`, requestData);
    return response;
  }
  // Complain

  // Center
  async addCenter({ name, phone, building_type, address, qr }) {
    const requestData = {
      name,
      phone,
      building_type,
      address,
      qr,
    };
    const response = await axiosInstance.post(`/admin/centers`, requestData);
    return response;
  }
  async editCenter({ center_id, name, phone, building_type, address, qr }) {
    const requestData = {
      center_id,
      name,
      phone,
      building_type,
      address,
      qr,
    };
    const response = await axiosInstance.put(`/admin/centers`, requestData);
    return response;
  }
  async getCenter() {
    const response = await axiosInstance.get(`/admin/centers`);
    return response;
  }
  async removeCenter(id) {
    const response = await axiosInstance.delete(
      `/admin/centers/center_id/${id}`
    );
    return response;
  }
  // Center

  // CenterUsers
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
  async getCenterUsers(id) {
    const response = await axiosInstance
      .get(`/admin/centerUsers/center_id/${id}`);
    return response;
  }
  async removeCenterUsers(id) {
    const response = await axiosInstance.delete(
      `/admin/centerUsers/account_id/${id}`
    );

    return response;
  }
  // CenterUsers
}

export default new Api();
