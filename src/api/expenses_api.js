import axiosInstance from "@/plugins/axios.js";

class expenses_apiInvestor {
  async get({ start_date, end_date, page, limit, search }) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .post(`/counting/expenses/get`, {
        start_date,
        end_date,
        page,
        limit,
        search,
      })
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }

  async getExpenses_api() {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .get(`/counting/services_expenses/get`)
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }
  async addExpenses_api(name, note) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .post(`/counting/services_expenses/add`, {
        name,
        note,
      })
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }
  async editExpenses_api(name, note, id) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .put(`/counting/services_expenses/edit`, {
        name,
        note,
        id,
      })
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }

  async removeExpenses_api(id) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .delete(`/counting/services_expenses/delete/${id}`)
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }

  async add({
    expenses_name,
    invoice_number,
    invoice_receiver,
    money,
    exchange_rate,
    is_dollar,
    date,
    note,
    study_year,
  }) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .post(`/counting/expenses/add`, {
        expenses_name,
        money,
        exchange_rate,
        is_dollar,
        date,
        note,
        invoice_number,
        invoice_receiver,
        study_year,
      })
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }

  async edit({
    expenses_name,
    invoice_number,
    invoice_receiver,
    money,
    date,
    note,
    id,
  }) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .put(`/counting/expenses/edit`, {
        expenses_name,
        invoice_number,
        invoice_receiver,
        money,
        date,
        note,
        id,
      })
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }

  async remove(id) {
    axiosInstance.defaults.headers.common.Authorization =
      localStorage.getItem("accessToken");
    return axiosInstance
      .delete(`/counting/expenses/delete/${id}`)
      .then((Response) => Response)
      .catch((error) => {
        return error.response;
      });
  }
}

export default new expenses_apiInvestor();
