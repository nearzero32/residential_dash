import axiosInstance from "@/plugins/axios.js";

class adminApi {
  // index
  async getCounts() {
    const response = await axiosInstance.get(`/counts`);
    return response;
  }
  // index

  // Profile
  async getCenter() {
    const response = await axiosInstance.get(`/center`);
    return response;
  }
  async editCenter({
    name,
    phone,
    address,
    description,
    video,
    facebook,
    instagram,
    snapchat,
    tiktok,
    whatsapp,
    logo,
  }) {
    const requestData = {
      name,
      phone,
      address,
      description,
      video,
      facebook,
      instagram,
      snapchat,
      tiktok,
      whatsapp,
      logo,
    };
    const response = await axiosInstance.put(`/center`, requestData);
    return response;
  }
  // Profile

  // form
  // Apartment
  async getApartmentHouse(id) {
    const response = await axiosInstance.get(
      `/center/forms/apartment/house/${id}`
    );
    return response;
  }
  async getApartments() {
    const response = await axiosInstance.get(`/center/forms/apartment/all`);
    return response;
  }
  async housesRoomNames() {
    const response = await axiosInstance.get(`/houses_room_names`);
    return response;
  }
  async addFormsApartment({
    name,
    block_number,
    images,
    total_space,
    building_space,
    apartment_building,
    houses,
    rooms_for_space,
  }) {
    const requestData = {
      name,
      block_number,
      images,
      total_space,
      building_space,
      apartment_building,
      houses,
      rooms_for_space,
    };
    const response = await axiosInstance.post(
      `/center/forms/apartment`,
      requestData
    );
    return response;
  }
  async getApartmentTowers() {
    const response = await axiosInstance.get(`/center/forms/apartment/towers`);
    return response;
  }
  async getNameFromsApartmentTowers({ name }) {
    const response = await axiosInstance.get(
      `/center/forms/apartment/towers/names/${name}`
    );
    return response;
  }
  async getNameFromsApartmentTowersFloors({ name, form_name }) {
    const response = await axiosInstance.get(
      `/center/forms/apartment/towers/floors/${name}?name=${form_name}`
    );
    return response;
  }
  async cancelPayingHouse({ id }) {
    const response = await axiosInstance.put(
      `center/forms/cancel_paying_house/house_id/${id}`
    );
    return response;
  }
  async getApartment(id) {
    const response = await axiosInstance.get(`/center/forms/apartment/${id}`);
    return response;
  }
  async editApartment({
    id,
    name,
    block_number,
    images,
    total_space,
    building_space,
    apartment_building,
    houses,
    rooms_for_space,
  }) {
    const requestData = {
      name,
      block_number,
      images,
      total_space,
      building_space,
      apartment_building,
      houses,
      rooms_for_space,
    };
    const response = await axiosInstance.put(
      `center/forms/apartment/${id}`,
      requestData
    );
    return response;
  }
  // Apartment
  // form

  // Owners' visits
  async getVisits({ page, limit, search }) {
    const response = await axiosInstance.get(
      `/visits?page=${page}&limit=${limit}&search=${search}`
    );
    return response;
  }
  // Owners' visits

  // SellsEmployee
  async getSellsEmployee({ page, limit, sortBy, search, is_deleted }) {
    const response = await axiosInstance.get(
      `/sellsEmployee?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
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
  async getSellsEmployeeOne(id) {
    const response = await axiosInstance.get(`/sellsEmployee/${id}`);

    return response;
  }
  async disableSellsEmployee(id) {
    const response = await axiosInstance.put(`/sellsEmployee/disable/id/${id}`);

    return response;
  }
  // SellsEmployee

  // Queries
  async getQueries({ page, limit, search, sortBy }) {
    const response = await axiosInstance.get(
      `/inquiries?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}`
    );
    return response;
  }
  async addQueries({ name, phone, employee_id }) {
    const requestData = {
      name,
      phone,
      employee_id,
    };
    const response = await axiosInstance.post(`/inquiries`, requestData);
    return response;
  }
  async editQueries({ emp_id, name, phone, employee_id }) {
    const requestData = {
      name,
      phone,
      employee_id,
    };
    const response = await axiosInstance.put(
      `/inquiries/${emp_id}`,
      requestData
    );
    return response;
  }
  async removeQueries(id) {
    const response = await axiosInstance.delete(`/inquiries/${id}`);
    return response;
  }
  // Queries

  // CallCenter
  async getCallCenter({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/call_center?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );
    return response;
  }
  async getCallCenterOne({ id }) {
    return axiosInstance
      .get(`/call_center/${id}`)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editCallCenter({
    id,
    caller_name,
    caller_phone,
    caller_job,
    caller_address,
    caller_family_members,
    how_he_hear_about_us,
    space_required,
    call_reason,
    form_id,
  }) {
    const requestData = {
      caller_name,
      caller_phone,
      caller_job,
      caller_address,
      caller_family_members,
      how_he_hear_about_us,
      space_required,
      call_reason,
      form_id,
    };
    const response = await axiosInstance.put(`/call_center/${id}`, requestData);
    return response;
  }
  async changeEmployee({ id, current_employee_id, new_employee_id }) {
    const requestData = {
      current_employee_id: current_employee_id,
      new_employee_id: new_employee_id,
    };
    const response = await axiosInstance.put(
      `/call_center/change_employee/${id}`,
      requestData
    );
    return response;
  }
  async removeCallCenter(id) {
    const response = await axiosInstance.delete(`/call_center/id/${id}`);

    return response;
  }
  // CallCenter

  // getHowUHearAboutUs
  async getHowUHearAboutUs({ page, limit }) {
    const response = await axiosInstance.get(
      `/how_u_hear_about_us?page=${page}&limit=${limit}`
    );
    return response;
  }
  async addHowUHearAboutUs({ name }) {
    const requestData = {
      name,
    };
    const response = await axiosInstance.post(
      `/how_u_hear_about_us`,
      requestData
    );
    return response;
  }
  async removeHowUHearAboutUs(id) {
    const response = await axiosInstance.delete(`/how_u_hear_about_us/${id}`);
    return response;
  }
  async getFormsSelect() {
    const response = await axiosInstance.get(`/center/forms/select`);
    return response;
  }
  // getHowUHearAboutUs

  // ApplicationForm
  async getApplicationForm({
    page,
    limit,
    sortBy,
    search,
    status,
    is_deleted,
  }) {
    const response = await axiosInstance.get(
      `/application_form?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}&is_deleted=${is_deleted}&status=${status}`
    );

    return response;
  }
  async cancelApplicationForm(id) {
    const response = await axiosInstance.put(`/application_form/cancel/${id}`);

    return response;
  }
  async confirmApplicationForm(id) {
    const response = await axiosInstance.put(`/application_form/confirm/${id}`);

    return response;
  }
  async removeApplicationForm(id) {
    const response = await axiosInstance.delete(`/application_form/id/${id}`);

    return response;
  }
  // ApplicationForm

  // confirmations_form
  async getConfirmationsForm({ page, limit, search, sortBy }) {
    const response = await axiosInstance.get(
      `/confirmations_form?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );
    return response;
  }
  // confirmations_form

  // Reservations
  async getReservations({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/reservations?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  // Reservations

  // OwnersContract
  async getOwnersContract({ page, limit, search, sortBy }) {
    const response = await axiosInstance.get(
      `/owners/contracts?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );
    return response;
  }
  // OwnersContract

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
  async addNotifications({
    title,
    link,
    body,
    image,
    receiver_type,
    receivers,
  }) {
    const requestData = {
      title,
      link,
      body,
      image,
      receiver_type,
      receivers,
    };
    const response = await axiosInstance.post(`/notifications`, requestData);
    return response;
  }
  async removeNotifications(id) {
    const response = await axiosInstance.delete(
      `/notifications/notification_id/${id}`
    );
    return response;
  }
  // Notifications

  // bankAccounts
  async getBankAccounts({ page, limit, search, sortBy, is_disabled }) {
    const response = await axiosInstance.get(
      `/owners/bank_accounts?page=${page}&limit=${limit}&search=${search}&is_disabled=${is_disabled}&sortBy=${sortBy}`
    );
    return response;
  }
  async addBankAccounts({ name, account_number, account_name }) {
    const requestData = {
      name,
      account_number,
      account_name,
    };
    const response = await axiosInstance.post(
      `/owners/bank_accounts`,
      requestData
    );
    return response;
  }
  async editBankAccounts({ id, name, account_number, account_name }) {
    const requestData = {
      name,
      account_number,
      account_name,
    };
    const response = await axiosInstance.put(
      `/owners/bank_accounts/${id}`,
      requestData
    );
    return response;
  }
  async removeBankAccounts(id) {
    const response = await axiosInstance.delete(`/owners/bank_accounts/${id}`);
    return response;
  }
  // bankAccounts

  // MaintenanceEmployee
  async getMaintenanceEmployee({ page, limit, search, is_deleted, sortBy }) {
    const response = await axiosInstance.get(
      `/maintenance_employee?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
    );
    return response;
  }
  async addMaintenanceEmployee({
    name,
    phone,
    email,
    password_show,
    salary,
    address,
  }) {
    const requestData = {
      name,
      phone,
      email,
      password_show,
      salary,
      address,
    };
    const response = await axiosInstance.post(
      `/maintenance_employee`,
      requestData
    );
    return response;
  }
  async editMaintenanceEmployee({
    emp_id,
    name,
    phone,
    email,
    password_show,
    salary,
    address,
  }) {
    const requestData = {
      id: emp_id,
      name,
      phone,
      email,
      password_show,
      salary,
      address,
    };
    const response = await axiosInstance.put(
      `/maintenance_employee`,
      requestData
    );
    return response;
  }
  async removeMaintenanceEmployee(id) {
    const response = await axiosInstance.delete(
      `/maintenance_employee/id/${id}`
    );
    return response;
  }
  // MaintenanceEmployee

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
  // BuyingOffers

  // guards
  async getGuards({ page, limit, sortBy, search, is_deleted }) {
    return axiosInstance
      .get(
        `/guards?page=${page}&limit=${limit}&search=${search}&is_deleted=${is_deleted}&sortBy=${sortBy}`
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
  async addUsers({
    name,
    email,
    password_show,
    phone,
    address,
    actions,
    pages,
  }) {
    const requestData = {
      name,
      email,
      password_show,
      phone,
      address,
      actions: actions,
      pages: pages,
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
    pages,
  }) {
    const requestData = {
      user_id,
      name,
      email,
      password_show,
      phone,
      address,
      actions,
      pages,
    };
    const response = await axiosInstance.put(`/users`, requestData);
    return response;
  }
  async removeUsers(id) {
    const response = await axiosInstance.delete(`/users/user_id/${id}`);

    return response;
  }
  // users

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
  // Advantages

  // getHowUHearAboutUs
  async getHowUHearAboutUs({ page, limit }) {
    const response = await axiosInstance.get(
      `/how_u_hear_about_us?page=${page}&limit=${limit}`
    );
    return response;
  }
  async addHowUHearAboutUs({ name }) {
    const requestData = {
      name,
    };
    const response = await axiosInstance.post(
      `/how_u_hear_about_us`,
      requestData
    );
    return response;
  }
  async removeHowUHearAboutUs(id) {
    const response = await axiosInstance.delete(`/how_u_hear_about_us/${id}`);
    return response;
  }
  // getHowUHearAboutUs

  // Complain
  async getComplain({ page, limit }) {
    const response = await axiosInstance.get(
      `/complain?page=${page}&limit=${limit}`
    );
    return response;
  }
  async removeComplain(id) {
    const response = await axiosInstance.delete(`/complain/${id}`);
    return response;
  }
  // Complain

  // Forms
  async getForms() {
    const response = await axiosInstance.get(`/center/forms`);
    return response;
  }
  async checkHousesNames({ houses, id }) {
    const requestData = {
      id,
      houses,
    };
    const response = await axiosInstance.post(
      `/center/forms/check_houses_names`,
      requestData
    );
    return response;
  }
  async addForms({
    building_type,
    name,
    images,
    total_space,
    building_space,
    houses,
    floors,
  }) {
    const requestData = {
      building_type,
      name,
      images,
      total_space,
      building_space,
      houses,
      floors,
    };
    const response = await axiosInstance.post(`/center/forms`, requestData);
    return response;
  }
  async getProfileHouse({ form_id, house_id }) {
    const response = await axiosInstance.get(
      `/center/forms/form_id/${form_id}/house_id/${house_id}`
    );
    return response;
  }
  async cancelPayingHouse({ id }) {
    const response = await axiosInstance.put(
      `center/forms/cancel_paying_house/house_id/${id}`
    );
    return response;
  }
  async getDataHouse(id) {
    const response = await axiosInstance.get(`center/forms/for_edit/${id}`);
    return response;
  }
  async editForms({
    id,
    building_type,
    name,
    images,
    total_space,
    building_space,
    houses,
    floors,
  }) {
    const requestData = {
      building_type,
      name,
      images,
      total_space,
      building_space,
      houses,
      floors,
    };
    const response = await axiosInstance.put(
      `/center/forms/${id}`,
      requestData
    );
    return response;
  }
  // Forms

  // Owners
  async getOwners({
    page,
    limit,
    search,
    is_deleted,
    sortBy,
    is_house_received,
  }) {
    const response = await axiosInstance.get(
      `/owners?page=${page}&limit=${limit}&search=${search}&is_disabled=${is_deleted}&sortBy=${sortBy}&is_house_received=${is_house_received}`
    );
    return response;
  }
  async addOwners({
    name,
    phone,
    password_show,
    email,
    address,
    form_id,
    house_id,
    contract_imgs,
    id_img_front,
    id_img_back,
    location_img_front,
    location_img_back,
    passport_img,
    id_number,
    id_place_of_issue,
    id_issue_date,
    residence_card_number,
    residence_card_place_of_issue,
    owner_title_jop,
    bank_id,
    residence_card_issue_date,
  }) {
    const requestData = {
      name,
      phone,
      password_show,
      email,
      address,
      form_id,
      house_id,
      contract_imgs,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
      id_number,
      id_place_of_issue,
      id_issue_date,
      residence_card_number,
      residence_card_place_of_issue,
      owner_title_jop,
      bank_id,
      residence_card_issue_date,
    };
    const response = await axiosInstance.post(`/owners`, requestData);
    return response;
  }
  async getOneOwner(id) {
    const response = await axiosInstance.get(`/owners/owner_id/${id}`);
    return response;
  }
  async editOwners({
    owner_id,
    name,
    phone,
    password_show,
    email,
    address,
    form_id,
    house_id,
    contract_imgs,
    id_img_front,
    id_img_back,
    location_img_front,
    location_img_back,
    passport_img,
    id_number,
    id_place_of_issue,
    id_issue_date,
    residence_card_number,
    residence_card_place_of_issue,
    owner_title_jop,
    bank_id,
    residence_card_issue_date,
  }) {
    const requestData = {
      owner_id,
      name,
      phone,
      password_show,
      email,
      address,
      form_id,
      house_id,
      contract_imgs,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
      id_number,
      id_place_of_issue,
      id_issue_date,
      residence_card_number,
      residence_card_place_of_issue,
      owner_title_jop,
      bank_id,
      residence_card_issue_date,
    };
    const response = await axiosInstance.put(`/owners`, requestData);
    return response;
  }
  async disableOwners({ id, disable }) {
    const response = await axiosInstance.put(`/owners/disable/owner_id/${id}`, {
      is_disabled: disable,
    });
    return response;
  }

  async editOwnerIsHouseReceived({ id }) {
    const response = await axiosInstance.put(`/owners/IsHouseReceived/${id}`);
    return response;
  }
  // Owners

  // AnotherOwner
  async getAnotherOwner({ id }) {
    const response = await axiosInstance.get(
      `/owners/another_owners/owner_id/${id}`
    );
    return response;
  }
  async addAnotherOwner({
    owner_id,
    name,
    phone,
    id_place_of_issue,
    id_issue_date,
    residence_card_number,
    residence_card_issue_date,
    residence_card_place_of_issue,
    owner_title_jop,
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
      id_place_of_issue,
      id_issue_date,
      residence_card_number,
      residence_card_issue_date,
      residence_card_place_of_issue,
      owner_title_jop,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
    };
    const response = await axiosInstance.post(
      `/owners/another_owners`,
      requestData
    );
    return response;
  }
  async editAnotherOwner({
    id,
    owner_id,
    name,
    phone,
    id_place_of_issue,
    id_issue_date,
    residence_card_number,
    residence_card_issue_date,
    residence_card_place_of_issue,
    owner_title_jop,
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
      id_place_of_issue,
      id_issue_date,
      residence_card_number,
      residence_card_issue_date,
      residence_card_place_of_issue,
      owner_title_jop,
      id_img_front,
      id_img_back,
      location_img_front,
      location_img_back,
      passport_img,
    };
    const response = await axiosInstance.put(
      `/owners/another_owners/${id}`,
      requestData
    );
    return response;
  }
  async removeAnotherOwner(id) {
    const response = await axiosInstance.delete(`/owners/another_owners/${id}`);
    return response;
  }

  // AnotherOwner

  // Units
  async getUnits({ page, limit, search, sortBy }) {
    const response = await axiosInstance.get(
      `/marketing_residential/market_residential_units?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );
    return response;
  }
  async addUnits({ name, note }) {
    const requestData = {
      name,
      note,
    };
    const response = await axiosInstance.post(
      `/marketing_residential/market_residential_units`,
      requestData
    );
    return response;
  }
  async editUnits({ id, name, note }) {
    const requestData = {
      id,
      name,
      note,
    };
    const response = await axiosInstance.put(
      `/marketing_residential/market_residential_units/${id}`,
      requestData
    );
    return response;
  }
  async removeUnits(id) {
    const response = await axiosInstance.delete(
      `/marketing_residential/market_residential_units/${id}`
    );
    return response;
  }
  // Units

  // MarketingCallCenter
  async getMarketingCallCenter({
    page,
    limit,
    search,
    residential_id,
    sortBy,
  }) {
    const response = await axiosInstance.get(
      `/marketing_residential/marketing_call_center?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}&residential_id=${residential_id}`
    );
    return response;
  }
  async addMarketingCallCenter({ name, phone, money, residential_id }) {
    const requestData = {
      name,
      phone,
      money,
      residential_id,
    };
    const response = await axiosInstance.post(
      `/marketing_residential/marketing_call_center`,
      requestData
    );
    return response;
  }
  async editMarketingCallCenter({ id, name, phone, money, residential_id }) {
    const requestData = {
      id,
      name,
      phone,
      money,
      residential_id,
    };
    const response = await axiosInstance.put(
      `/marketing_residential/marketing_call_center/${id}`,
      requestData
    );
    return response;
  }
  async removeMarketingCallCenter(id) {
    const response = await axiosInstance.delete(
      `/marketing_residential/marketing_call_center/${id}`
    );
    return response;
  }
  // Units
}
export default new adminApi();
