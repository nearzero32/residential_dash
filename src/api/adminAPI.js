import axiosInstance from "@/utils/axios";

class Api {
  async getReports() {
    const response = await axiosInstance.get(`/reports`);

    return response;
  }

  // guards
  async getGuards({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/guards?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async addGuards({ name, email, password_show, phone, address, salary }) {
    const requestData = {
      name,
      email,
      password_show,
      phone,
      address,
      salary,
    };
    return axiosInstance
      .post(`/guards`, requestData)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editGuards({ id, name, email, password_show, phone, address, salary }) {
    const requestData = {
      id,
      name,
      email,
      password_show,
      phone,
      address,
      salary,
    };
    const response = await axiosInstance.put(`/guards`, requestData);
    return response;
  }
  async removeGuards(id) {
    const response = await axiosInstance.delete(`/guards/id/${id}`);

    return response;
  }
  // guards

  // SellsEmployee
  async getSellsEmployee({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/sellsEmployee?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async addSellsEmployee({
    name,
    email,
    password_show,
    phone,
    address,
    salary,
  }) {
    const requestData = {
      name,
      email,
      password_show,
      phone,
      address,
      salary,
    };
    return axiosInstance
      .post(`/sellsEmployee`, requestData)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editSellsEmployee({
    id,
    name,
    email,
    password_show,
    phone,
    address,
    salary,
  }) {
    const requestData = {
      id,
      name,
      email,
      password_show,
      phone,
      address,
      salary,
    };
    const response = await axiosInstance.put(`/sellsEmployee`, requestData);
    return response;
  }
  async removeSellsEmployee(id) {
    const response = await axiosInstance.delete(`/sellsEmployee/id/${id}`);

    return response;
  }
  // SellsEmployee

  // users
  async getUsers({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/users?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async addUsers({ name, email, password_show, phone, address, actions }) {
    const requestData = {
      name,
      email,
      password_show,
      phone,
      address,
      actions: actions,
    };
    return axiosInstance
      .post(`/users`, requestData)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editUsers({
    user_id,
    name,
    email,
    password_show,
    phone,
    address,
    actions,
  }) {
    const requestData = {
      user_id,
      name,
      email,
      password_show,
      phone,
      address,
      actions,
    };
    const response = await axiosInstance.put(`/users`, requestData);
    return response;
  }
  async removeUsers(id) {
    const response = await axiosInstance.delete(`/users/user_id/${id}`);

    return response;
  }
  // users

  // CallCenter
  async getCallCenter({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/call_center?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editCallCenter({ id, employee_that_followed, results_of_call }) {
    const requestData = {
      id,
      employee_that_followed,
      results_of_call,
    };
    const response = await axiosInstance.put(`/call_center`, requestData);
    return response;
  }
  async removeCallCenter(id) {
    const response = await axiosInstance.delete(`/call_center/id/${id}`);

    return response;
  }
  // users

  // ApplicationForm
  async getApplicationForm({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/application_form?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async removeApplicationForm(id) {
    const response = await axiosInstance.delete(`/application_form/id/${id}`);

    return response;
  }
  // ApplicationForm

  async getCounts() {
    const response = await axiosInstance.get(`/counts`);
    return response;
  }
  // Postings
  async getPostings({ page, limit, search }) {
    const response = await axiosInstance.get(
      `/postings?page=${page}&limit=${limit}&search=${search}`
    );
    return response;
  }
  async addPostings({ image, title, description }) {
    const requestData = {
      title,
      description,
      image,
    };
    const response = await axiosInstance.post(`/postings`, requestData);
    return response;
  }
  async editPostings({ image, postings_id, title, description }) {
    const requestData = {
      title,
      description,
      image,
      postings_id,
    };
    const response = await axiosInstance.put(`/postings`, requestData);
    return response;
  }
  async removePostings(id) {
    const response = await axiosInstance.delete(`/postings/postings_id/${id}`);
    return response;
  }
  // Postings

  // Advantages
  async getAdvantages({ page, limit }) {
    const response = await axiosInstance.get(
      `/advantages?page=${page}&limit=${limit}`
    );
    return response;
  }
  async addAdvantages({ image, title }) {
    const requestData = {
      title,
      image,
    };
    const response = await axiosInstance.post(`/advantages`, requestData);
    return response;
  }
  async editAdvantages({ advantage_id, title, image }) {
    const requestData = {
      advantage_id,
      title,
      image,
    };
    const response = await axiosInstance.put(`/advantages`, requestData);
    return response;
  }
  async removeAdvantages(id) {
    const response = await axiosInstance.delete(
      `/advantages/advantage_id/${id}`
    );
    return response;
  }
  // Ads

  // BuyingOffers
  async getBuyingOffers({
    page,
    limit,
    search,
    is_available,
    sortBy,
    existing_type,
  }) {
    const response = await axiosInstance.get(
      `/houses?page=${page}&limit=${limit}&search=${search}&is_available=${is_available}&sortBy=${sortBy}&existing_type=${existing_type}`
    );
    return response;
  }
  async addBuyingOffers({
    image,
    name,
    price,
    description,
    rating,
    living_rooms,
    bath_rooms,
    bed_rooms,
    space,
    is_available,
    existing_type,
  }) {
    const requestData = {
      imgs: image,
      name,
      price,
      description,
      rating,
      living_rooms,
      bath_rooms,
      bed_rooms,
      space,
      is_available,
      existing_type,
    };
    const response = await axiosInstance.post(`/houses`, requestData);
    return response;
  }
  async editBuyingOffers({
    buy_id,
    image,
    name,
    price,
    description,
    rating,
    living_rooms,
    bath_rooms,
    bed_rooms,
    space,
    is_available,
    existing_type,
  }) {
    const requestData = {
      house_id: buy_id,
      imgs: image,
      name,
      price,
      description,
      rating,
      living_rooms,
      bath_rooms,
      bed_rooms,
      space,
      is_available,
      existing_type,
    };
    const response = await axiosInstance.put(`/houses`, requestData);
    return response;
  }
  async removeBuyingOffers(id) {
    const response = await axiosInstance.delete(`/houses/house_id/${id}`);
    return response;
  }
  // Ads

  // Owners
  async getOwners({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/owners?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  async getOneOwner(id) {
    const response = await axiosInstance.get(
      `/owners/owner_id/${id}`
    );
    return response;
  }
  async getHouses() {
    const response = await axiosInstance.get(`/houses/all_no_bill`);
    return response;
  }
  async addOwners({
    name,
    phone,
    password_show,
    email,
    address,
    house_id,
    contract_imgs,
    id_img_front,
    id_img_back,
    location_img_front,
    location_img_back,
    passport_img,
  }) {
    const requestData = {
      name,
      phone,
      password_show,
      email,
      address,
      house_id,
      contract_imgs,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
    };
    const response = await axiosInstance.post(`/owners`, requestData);
    return response;
  }
  async editOwners({
    owner_id,
    name,
    phone,
    password_show,
    email,
    address,
    house_id,
    contract_imgs,
    id_img_front,
    id_img_back,
    location_img_front,
    location_img_back,
    passport_img,
  }) {
    const requestData = {
      owner_id,
      name,
      phone,
      password_show,
      email,
      address,
      house_id,
      contract_imgs,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
    };
    const response = await axiosInstance.put(`/owners`, requestData);
    return response;
  }
  async removeOwners(id) {
    const response = await axiosInstance.delete(`/owners/owner_id/${id}`);
    return response;
  }
  // Owners

  // Employees
  async getEmployees({ page, limit, search, sortBy }) {
    const response = await axiosInstance.get(
      `/employees?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );
    return response;
  }
  async addEmployees({ name, phone, title_jop, salary, address }) {
    const requestData = {
      name,
      phone,
      title_jop,
      salary,
      address,
    };
    const response = await axiosInstance.post(`/employees`, requestData);
    return response;
  }
  async editEmployees({ emp_id, name, phone, title_jop, salary, address }) {
    const requestData = {
      emp_id,
      name,
      phone,
      title_jop,
      salary,
      address,
    };
    const response = await axiosInstance.put(`/employees`, requestData);
    return response;
  }
  async removeEmployees(id) {
    const response = await axiosInstance.delete(`/employees/emp_id/${id}`);
    return response;
  }
  // Employees

  // Services
  async getServices({ page, limit, search, is_available, sortBy, type }) {
    const response = await axiosInstance.get(
      `/services?page=${page}&limit=${limit}&search=${search}&is_available=${is_available}&sortBy=${sortBy}&type=${type}`
    );
    return response;
  }
  async addServices({ name, price, is_available, type, image }) {
    const requestData = {
      name,
      price,
      is_available,
      type,
      image,
    };
    const response = await axiosInstance.post(`/services`, requestData);
    return response;
  }
  async editServices({ service_id, name, price, is_available, type, image }) {
    const requestData = {
      service_id,
      name,
      price,
      is_available,
      type,
      image,
    };
    const response = await axiosInstance.put(`/services`, requestData);
    return response;
  }
  async removeServices(id) {
    const response = await axiosInstance.delete(`/services/service_id/${id}`);
    return response;
  }
  // Services

  // Profile
  async getCenter() {
    const response = await axiosInstance.get(`/center`);
    return response;
  }

  async editCenter({ name, phone, address, description, video, forms }) {
    const requestData = {
      name,
      phone,
      address,
      description,
      video,
      forms,
    };
    const response = await axiosInstance.put(`/center`, requestData);
    return response;
  }
  // Profile

  // Notifications
  async getNotifications({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/notifications?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  async getOwnersAll() {
    const response = await axiosInstance.get(`/owners/getAll`);
    return response;
  }
  async addNotifications({ title, body, image, receiver_type, receivers }) {
    const requestData = {
      title,
      body,
      image,
      receiver_type,
      receivers,
    };
    console.log(requestData);
    const response = await axiosInstance.post(`/notifications`, requestData);
    return response;
  }
  async removeNotifications(id) {
    const response = await axiosInstance.delete(
      `/notifications/notification_id/${id}`
    );
    return response;
  }
  // Owners

  // Reservations
  async getReservations({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/reservations?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  async removeReservations(id) {
    const response = await axiosInstance.delete(
      `/reservations/reserve_id/${id}`
    );
    return response;
  }
  // Reservations

  // ReservationsService
  async getReservationsService({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/reservations/service?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  async removeReservationsService(id) {
    const response = await axiosInstance.delete(
      `/reservations/service/reserve_id/${id}`
    );
    return response;
  }
  // Reservations
}

export default new Api();
