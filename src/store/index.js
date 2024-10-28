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
    currentPath: "",
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
    SET_CURRENT_PATH(state, path) {
      state.currentPath = path;
    },
  },
  actions: {
    checkCurrentPath({ commit }) {
      const currentPath = window.location.hostname;
      localStorage.setItem("currentPath", currentPath);
      commit("SET_CURRENT_PATH", currentPath);
    },
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
        var i = 1;
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

        const currentPath = window.location.hostname;
        localStorage.setItem("currentPath", currentPath);
        if (
          response.data.results.type === "agent" ||
          response.data.results.type === "accountant_users"
        ) {
          commit(
            "SET_EREORM",
            "خطأ: لا يمكن تسجيل الحساب في الادمن الرئيسي يمكنك تسجيل الدخول في الحسابات فقط"
          );
        } else {
          if (currentPath == "admin.alrawan.net") {
            if (
              response.data.results.center_id._id == "66656b164cdec95cab679181"
            ) {
              commit("SET_AUTHENTICATED", true);
              localStorage.setItem("accessToken", response.data.results.token);
              localStorage.setItem("account_type", response.data.results.type);
              localStorage.setItem(
                "results",
                JSON.stringify(response.data.results)
              );
              localStorage.setItem(
                "pages",
                JSON.stringify(response.data.results.pages)
              );
              if (
                response.data.results.center_id &&
                response.data.results.center_id.logo !== null
              ) {
                commit("SET_LOGO", response.data.results.center_id.logo);
                localStorage.setItem(
                  "logo",
                  response.data.results.center_id.logo
                );
              }
              if (response.data.results.type === "super_admin") {
                router.push("/super-admin-home");
              } else if (response.data.results.type === "admin") {
                router.push("/admin-index");
              } else if (response.data.results.type === "investor") {
                router.push("/admin-index");
              } else if (response.data.results.type === "resident_manager") {
                router.push("/admin-index");
              } else if (response.data.results.type === "assistance") {
                var pages = response.data.results.pages[0];
                if (pages == "home") {
                  router.push(this.returnUrl || "/admin-index");
                } else if (pages == "forms-Apartments") {
                  router.push(this.returnUrl || "/admin-show-apartment-models");
                } else if (pages == "forms") {
                  router.push(this.returnUrl || "/admin-show-house-models");
                } else if (pages == "owners") {
                  router.push(this.returnUrl || "/admin-show-owners");
                } else if (pages == "visits") {
                  router.push(this.returnUrl || "/admin-show-owners-visits");
                } else if (pages == "sales") {
                  if (response.data.results.pages[1] == "sells-employee") {
                    router.push(this.returnUrl || "/admin-show-sales-staff");
                  } else if (response.data.results.pages[1] == "call-center") {
                    router.push(
                      this.returnUrl || "/admin-show-customer-attendance-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "salesContracts"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-sales-contracts"
                    );
                  } else if (response.data.results.pages[1] == "inquiries") {
                    router.push(this.returnUrl || "/admin-show-queries");
                  } else if (
                    response.data.results.pages[1] == "application-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-application-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "confirmations-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-approval-request-form"
                    );
                  } else if (response.data.results.pages[1] == "reservations") {
                    router.push(
                      this.returnUrl || "/admin-show-residential-unit-requests"
                    );
                  }
                } else if (pages == "notifications") {
                  router.push(this.returnUrl || "/admin-show-notifications");
                } else if (pages == "bankAccounts") {
                  router.push(this.returnUrl || "/admin-show-banks");
                } else if (pages == "After-sales-service") {
                  if (response.data.results.pages[1] == "maintenance-staff") {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-staff"
                    );
                  } else if (
                    response.data.results.pages[1] == "maintenance-of-devices"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-of-devices"
                    );
                  } else if (
                    response.data.results.pages[1] == "service-room-names"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-room-names"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-shipping"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings-shipping"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-maintenance"
                  ) {
                    router.push(
                      this.returnUrl ||
                        "/admin-show-service-bookings-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "show-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "services-maintenance"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-services-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "other-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-other-services");
                  } else if (
                    response.data.results.pages[1] == "other-services-type"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-other-services-type"
                    );
                  } else if (
                    response.data.results.pages[1] == "residential-units"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  } else if (
                    response.data.results.pages[1] == "reservation-service"
                  ) {
                    if (
                      response.data.results.pages[2] ==
                      "service-bookings-shipping"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-shipping"
                      );
                    } else if (
                      response.data.results.pages[2] ==
                      "service-bookings-maintenance"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-maintenance"
                      );
                    }
                  } else if (response.data.results.pages[1] == "Services") {
                    if (response.data.results.pages[2] == "show-services") {
                      router.push(this.returnUrl || "/admin-show-services");
                    } else if (
                      response.data.results.pages[2] == "services-maintenance"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-services-maintenance"
                      );
                    }
                  } else if (
                    response.data.results.pages[1] == "Other services"
                  ) {
                    if (response.data.results.pages[2] == "other-services") {
                      router.push(
                        this.returnUrl || "/admin-show-other-services"
                      );
                    } else if (
                      response.data.results.pages[2] == "other-services-type"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-other-services-type"
                      );
                    }
                  }
                } else if (pages == "marketing Residentail") {
                  if (response.data.results.pages[1] == "admin-show-units") {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings"
                    );
                  } else if (response.data.results.pages[1] == "services") {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "buying-offers"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  }
                } else if (pages == "guards") {
                  router.push(this.returnUrl || "/admin-show-guards");
                } else if (pages == "employees") {
                  router.push(this.returnUrl || "/admin-show-staff");
                } else if (pages == "Users") {
                  router.push(this.returnUrl || "/admin-show-users");
                } else if (pages == "postings") {
                  router.push(this.returnUrl || "/admin-show-advertisements");
                } else if (pages == "advantages") {
                  router.push(this.returnUrl || "/admin-show-features");
                } else if (pages == "how_u_hear_about_us") {
                  router.push(
                    this.returnUrl || "/admin-show-how-did-you-hear-about-us"
                  );
                } else if (pages == "complain") {
                  router.push(this.returnUrl || "/admin-show-complaints");
                }
              }
            } else {
              commit("SET_EREORM", "خطأ, الرجاء ادخال حساب مجمع الروان");
            }
          } else if (currentPath == "admin.alfakhertowers.com") {
            if (
              response.data.results.center_id._id == "66e9376b2dcd8ef700ac5f01"
            ) {
              commit("SET_AUTHENTICATED", true);
              localStorage.setItem("accessToken", response.data.results.token);
              localStorage.setItem("account_type", response.data.results.type);
              localStorage.setItem(
                "results",
                JSON.stringify(response.data.results)
              );
              localStorage.setItem(
                "pages",
                JSON.stringify(response.data.results.pages)
              );
              if (
                response.data.results.center_id &&
                response.data.results.center_id.logo !== null
              ) {
                commit("SET_LOGO", response.data.results.center_id.logo);
                localStorage.setItem(
                  "logo",
                  response.data.results.center_id.logo
                );
              }
              if (response.data.results.type === "super_admin") {
                router.push("/super-admin-home");
              } else if (response.data.results.type === "resident_manager") {
                router.push("/admin-index");
              } else if (response.data.results.type === "admin") {
                router.push("/admin-index");
              } else if (response.data.results.type === "investor") {
                router.push("/admin-index");
              } else if (response.data.results.type === "assistance") {
                var pages = response.data.results.pages[0];
                if (pages == "home") {
                  router.push(this.returnUrl || "/admin-index");
                } else if (pages == "forms-Apartments") {
                  router.push(this.returnUrl || "/admin-show-apartment-models");
                } else if (pages == "forms") {
                  router.push(this.returnUrl || "/admin-show-house-models");
                } else if (pages == "owners") {
                  router.push(this.returnUrl || "/admin-show-owners");
                } else if (pages == "visits") {
                  router.push(this.returnUrl || "/admin-show-owners-visits");
                } else if (pages == "sales") {
                  if (response.data.results.pages[1] == "sells-employee") {
                    router.push(this.returnUrl || "/admin-show-sales-staff");
                  } else if (response.data.results.pages[1] == "call-center") {
                    router.push(
                      this.returnUrl || "/admin-show-customer-attendance-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "salesContracts"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-sales-contracts"
                    );
                  } else if (response.data.results.pages[1] == "inquiries") {
                    router.push(this.returnUrl || "/admin-show-queries");
                  } else if (
                    response.data.results.pages[1] == "application-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-application-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "confirmations-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-approval-request-form"
                    );
                  } else if (response.data.results.pages[1] == "reservations") {
                    router.push(
                      this.returnUrl || "/admin-show-residential-unit-requests"
                    );
                  }
                } else if (pages == "notifications") {
                  router.push(this.returnUrl || "/admin-show-notifications");
                } else if (pages == "bankAccounts") {
                  router.push(this.returnUrl || "/admin-show-banks");
                } else if (pages == "After-sales-service") {
                  if (response.data.results.pages[1] == "maintenance-staff") {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-staff"
                    );
                  } else if (
                    response.data.results.pages[1] == "maintenance-of-devices"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-of-devices"
                    );
                  } else if (
                    response.data.results.pages[1] == "service-room-names"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-room-names"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-shipping"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings-shipping"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-maintenance"
                  ) {
                    router.push(
                      this.returnUrl ||
                        "/admin-show-service-bookings-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "show-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "services-maintenance"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-services-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "other-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-other-services");
                  } else if (
                    response.data.results.pages[1] == "other-services-type"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-other-services-type"
                    );
                  } else if (
                    response.data.results.pages[1] == "residential-units"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  } else if (
                    response.data.results.pages[1] == "reservation-service"
                  ) {
                    if (
                      response.data.results.pages[2] ==
                      "service-bookings-shipping"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-shipping"
                      );
                    } else if (
                      response.data.results.pages[2] ==
                      "service-bookings-maintenance"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-maintenance"
                      );
                    }
                  } else if (response.data.results.pages[1] == "Services") {
                    if (response.data.results.pages[2] == "show-services") {
                      router.push(this.returnUrl || "/admin-show-services");
                    } else if (
                      response.data.results.pages[2] == "services-maintenance"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-services-maintenance"
                      );
                    }
                  } else if (
                    response.data.results.pages[1] == "Other services"
                  ) {
                    if (response.data.results.pages[2] == "other-services") {
                      router.push(
                        this.returnUrl || "/admin-show-other-services"
                      );
                    } else if (
                      response.data.results.pages[2] == "other-services-type"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-other-services-type"
                      );
                    }
                  }
                } else if (pages == "marketing Residentail") {
                  if (response.data.results.pages[1] == "admin-show-units") {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings"
                    );
                  } else if (response.data.results.pages[1] == "services") {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "buying-offers"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  }
                } else if (pages == "guards") {
                  router.push(this.returnUrl || "/admin-show-guards");
                } else if (pages == "employees") {
                  router.push(this.returnUrl || "/admin-show-staff");
                } else if (pages == "Users") {
                  router.push(this.returnUrl || "/admin-show-users");
                } else if (pages == "postings") {
                  router.push(this.returnUrl || "/admin-show-advertisements");
                } else if (pages == "advantages") {
                  router.push(this.returnUrl || "/admin-show-features");
                } else if (pages == "how_u_hear_about_us") {
                  router.push(
                    this.returnUrl || "/admin-show-how-did-you-hear-about-us"
                  );
                } else if (pages == "complain") {
                  router.push(this.returnUrl || "/admin-show-complaints");
                }
              }
            } else {
              commit("SET_EREORM", "خطأ, الرجاء ادخال حساب مجمع الفاخر");
            }
          } else if (currentPath == "admin.karambaghdad.com") {
            if (
              response.data.results.center_id._id == "66e2c810dec89fdfea71c92b"
            ) {
              commit("SET_AUTHENTICATED", true);
              localStorage.setItem("accessToken", response.data.results.token);
              localStorage.setItem("account_type", response.data.results.type);
              localStorage.setItem(
                "results",
                JSON.stringify(response.data.results)
              );
              localStorage.setItem(
                "pages",
                JSON.stringify(response.data.results.pages)
              );
              if (
                response.data.results.center_id &&
                response.data.results.center_id.logo !== null
              ) {
                commit("SET_LOGO", response.data.results.center_id.logo);
                localStorage.setItem(
                  "logo",
                  response.data.results.center_id.logo
                );
              }
              if (response.data.results.type === "super_admin") {
                router.push("/super-admin-home");
              } else if (response.data.results.type === "resident_manager") {
                router.push("/admin-index");
              } else if (response.data.results.type === "admin") {
                router.push("/admin-index");
              } else if (response.data.results.type === "investor") {
                router.push("/admin-index");
              } else if (response.data.results.type === "assistance") {
                var pages = response.data.results.pages[0];
                if (pages == "home") {
                  router.push(this.returnUrl || "/admin-index");
                } else if (pages == "forms-Apartments") {
                  router.push(this.returnUrl || "/admin-show-apartment-models");
                } else if (pages == "forms") {
                  router.push(this.returnUrl || "/admin-show-house-models");
                } else if (pages == "owners") {
                  router.push(this.returnUrl || "/admin-show-owners");
                } else if (pages == "visits") {
                  router.push(this.returnUrl || "/admin-show-owners-visits");
                } else if (pages == "sales") {
                  if (response.data.results.pages[1] == "sells-employee") {
                    router.push(this.returnUrl || "/admin-show-sales-staff");
                  } else if (response.data.results.pages[1] == "call-center") {
                    router.push(
                      this.returnUrl || "/admin-show-customer-attendance-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "salesContracts"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-sales-contracts"
                    );
                  } else if (response.data.results.pages[1] == "inquiries") {
                    router.push(this.returnUrl || "/admin-show-queries");
                  } else if (
                    response.data.results.pages[1] == "application-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-application-form"
                    );
                  } else if (
                    response.data.results.pages[1] == "confirmations-form"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-approval-request-form"
                    );
                  } else if (response.data.results.pages[1] == "reservations") {
                    router.push(
                      this.returnUrl || "/admin-show-residential-unit-requests"
                    );
                  }
                } else if (pages == "notifications") {
                  router.push(this.returnUrl || "/admin-show-notifications");
                } else if (pages == "bankAccounts") {
                  router.push(this.returnUrl || "/admin-show-banks");
                } else if (pages == "After-sales-service") {
                  if (response.data.results.pages[1] == "maintenance-staff") {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-staff"
                    );
                  } else if (
                    response.data.results.pages[1] == "maintenance-of-devices"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-maintenance-of-devices"
                    );
                  } else if (
                    response.data.results.pages[1] == "service-room-names"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-room-names"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-shipping"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings-shipping"
                    );
                  } else if (
                    response.data.results.pages[1] ==
                    "service-bookings-maintenance"
                  ) {
                    router.push(
                      this.returnUrl ||
                        "/admin-show-service-bookings-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "show-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "services-maintenance"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-services-maintenance"
                    );
                  } else if (
                    response.data.results.pages[1] == "other-services"
                  ) {
                    router.push(this.returnUrl || "/admin-show-other-services");
                  } else if (
                    response.data.results.pages[1] == "other-services-type"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-other-services-type"
                    );
                  } else if (
                    response.data.results.pages[1] == "residential-units"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  } else if (
                    response.data.results.pages[1] == "reservation-service"
                  ) {
                    if (
                      response.data.results.pages[2] ==
                      "service-bookings-shipping"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-shipping"
                      );
                    } else if (
                      response.data.results.pages[2] ==
                      "service-bookings-maintenance"
                    ) {
                      router.push(
                        this.returnUrl ||
                          "/admin-show-service-bookings-maintenance"
                      );
                    }
                  } else if (response.data.results.pages[1] == "Services") {
                    if (response.data.results.pages[2] == "show-services") {
                      router.push(this.returnUrl || "/admin-show-services");
                    } else if (
                      response.data.results.pages[2] == "services-maintenance"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-services-maintenance"
                      );
                    }
                  } else if (
                    response.data.results.pages[1] == "Other services"
                  ) {
                    if (response.data.results.pages[2] == "other-services") {
                      router.push(
                        this.returnUrl || "/admin-show-other-services"
                      );
                    } else if (
                      response.data.results.pages[2] == "other-services-type"
                    ) {
                      router.push(
                        this.returnUrl || "/admin-show-other-services-type"
                      );
                    }
                  }
                } else if (pages == "marketing Residentail") {
                  if (response.data.results.pages[1] == "admin-show-units") {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings"
                    );
                  } else if (response.data.results.pages[1] == "services") {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[1] == "buying-offers"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-residential-units"
                    );
                  }
                } else if (pages == "guards") {
                  router.push(this.returnUrl || "/admin-show-guards");
                } else if (pages == "employees") {
                  router.push(this.returnUrl || "/admin-show-staff");
                } else if (pages == "Users") {
                  router.push(this.returnUrl || "/admin-show-users");
                } else if (pages == "postings") {
                  router.push(this.returnUrl || "/admin-show-advertisements");
                } else if (pages == "advantages") {
                  router.push(this.returnUrl || "/admin-show-features");
                } else if (pages == "how_u_hear_about_us") {
                  router.push(
                    this.returnUrl || "/admin-show-how-did-you-hear-about-us"
                  );
                } else if (pages == "complain") {
                  router.push(this.returnUrl || "/admin-show-complaints");
                }
              }
            } else {
              commit("SET_EREORM", "خطأ, الرجاء ادخال حساب مجمع كرم بغداد");
            }
          } else {
            commit("SET_AUTHENTICATED", true);
            localStorage.setItem("accessToken", response.data.results.token);
            localStorage.setItem("account_type", response.data.results.type);
            localStorage.setItem(
              "results",
              JSON.stringify(response.data.results)
            );
            localStorage.setItem(
              "pages",
              JSON.stringify(response.data.results.pages)
            );
            if (
              response.data.results.center_id &&
              response.data.results.center_id.logo !== null
            ) {
              commit("SET_LOGO", response.data.results.center_id.logo);
              localStorage.setItem(
                "logo",
                response.data.results.center_id.logo
              );
            }
            if (response.data.results.type === "super_admin") {
              router.push("/super-admin-home");
            } else if (response.data.results.type === "admin") {
              router.push("/admin-index");
            } else if (response.data.results.type === "investor") {
              router.push("/admin-index");
            } else if (response.data.results.type === "assistance") {
              var pages = response.data.results.pages[0];
              if (pages == "home") {
                router.push(this.returnUrl || "/admin-index");
              } else if (pages == "forms-Apartments") {
                router.push(this.returnUrl || "/admin-show-apartment-models");
              } else if (pages == "forms") {
                router.push(this.returnUrl || "/admin-show-house-models");
              } else if (pages == "owners") {
                router.push(this.returnUrl || "/admin-show-owners");
              } else if (pages == "visits") {
                router.push(this.returnUrl || "/admin-show-owners-visits");
              } else if (pages == "sales") {
                if (response.data.results.pages[1] == "sells-employee") {
                  router.push(this.returnUrl || "/admin-show-sales-staff");
                } else if (response.data.results.pages[1] == "call-center") {
                  router.push(
                    this.returnUrl || "/admin-show-customer-attendance-form"
                  );
                } else if (response.data.results.pages[1] == "salesContracts") {
                  router.push(this.returnUrl || "/admin-show-sales-contracts");
                } else if (response.data.results.pages[1] == "inquiries") {
                  router.push(this.returnUrl || "/admin-show-queries");
                } else if (
                  response.data.results.pages[1] == "application-form"
                ) {
                  router.push(this.returnUrl || "/admin-show-application-form");
                } else if (
                  response.data.results.pages[1] == "confirmations-form"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-approval-request-form"
                  );
                } else if (response.data.results.pages[1] == "reservations") {
                  router.push(
                    this.returnUrl || "/admin-show-residential-unit-requests"
                  );
                }
              } else if (pages == "notifications") {
                router.push(this.returnUrl || "/admin-show-notifications");
              } else if (pages == "bankAccounts") {
                router.push(this.returnUrl || "/admin-show-banks");
              } else if (pages == "After-sales-service") {
                if (response.data.results.pages[1] == "maintenance-staff") {
                  router.push(
                    this.returnUrl || "/admin-show-maintenance-staff"
                  );
                } else if (
                  response.data.results.pages[1] == "maintenance-of-devices"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-maintenance-of-devices"
                  );
                } else if (
                  response.data.results.pages[1] == "service-room-names"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-service-room-names"
                  );
                } else if (
                  response.data.results.pages[1] == "service-bookings-shipping"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-service-bookings-shipping"
                  );
                } else if (
                  response.data.results.pages[1] ==
                  "service-bookings-maintenance"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-service-bookings-maintenance"
                  );
                } else if (response.data.results.pages[1] == "show-services") {
                  router.push(this.returnUrl || "/admin-show-services");
                } else if (
                  response.data.results.pages[1] == "services-maintenance"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-services-maintenance"
                  );
                } else if (response.data.results.pages[1] == "other-services") {
                  router.push(this.returnUrl || "/admin-show-other-services");
                } else if (
                  response.data.results.pages[1] == "other-services-type"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-other-services-type"
                  );
                } else if (
                  response.data.results.pages[1] == "residential-units"
                ) {
                  router.push(
                    this.returnUrl || "/admin-show-residential-units"
                  );
                } else if (
                  response.data.results.pages[1] == "reservation-service"
                ) {
                  if (
                    response.data.results.pages[2] ==
                    "service-bookings-shipping"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-service-bookings-shipping"
                    );
                  } else if (
                    response.data.results.pages[2] ==
                    "service-bookings-maintenance"
                  ) {
                    router.push(
                      this.returnUrl ||
                        "/admin-show-service-bookings-maintenance"
                    );
                  }
                } else if (response.data.results.pages[1] == "Services") {
                  if (response.data.results.pages[2] == "show-services") {
                    router.push(this.returnUrl || "/admin-show-services");
                  } else if (
                    response.data.results.pages[2] == "services-maintenance"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-services-maintenance"
                    );
                  }
                } else if (response.data.results.pages[1] == "Other services") {
                  if (response.data.results.pages[2] == "other-services") {
                    router.push(this.returnUrl || "/admin-show-other-services");
                  } else if (
                    response.data.results.pages[2] == "other-services-type"
                  ) {
                    router.push(
                      this.returnUrl || "/admin-show-other-services-type"
                    );
                  }
                }
              } else if (pages == "marketing Residentail") {
                if (response.data.results.pages[1] == "admin-show-units") {
                  router.push(this.returnUrl || "/admin-show-service-bookings");
                } else if (response.data.results.pages[1] == "services") {
                  router.push(this.returnUrl || "/admin-show-services");
                } else if (response.data.results.pages[1] == "buying-offers") {
                  router.push(
                    this.returnUrl || "/admin-show-residential-units"
                  );
                }
              } else if (pages == "guards") {
                router.push(this.returnUrl || "/admin-show-guards");
              } else if (pages == "employees") {
                router.push(this.returnUrl || "/admin-show-staff");
              } else if (pages == "Users") {
                router.push(this.returnUrl || "/admin-show-users");
              } else if (pages == "postings") {
                router.push(this.returnUrl || "/admin-show-advertisements");
              } else if (pages == "advantages") {
                router.push(this.returnUrl || "/admin-show-features");
              } else if (pages == "how_u_hear_about_us") {
                router.push(
                  this.returnUrl || "/admin-show-how-did-you-hear-about-us"
                );
              } else if (pages == "complain") {
                router.push(this.returnUrl || "/admin-show-complaints");
              }
            }
          }
        }
      } catch (error) {
        if (error.response.data.error == true) {
          commit("SET_EREORM", error.response.data.results);
        }
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

    async checkAccessTokenOnLoad({ commit }) {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const account_type = localStorage.getItem("account_type");
        if (account_type == "super_admin") {
          router.push("/super-admin-home");
        } else if (account_type === "admin") {
          router.push("/admin-index");
        } else if (account_type === "resident_manager") {
          router.push("/admin-index");
        } else if (account_type === "investor") {
          router.push("/admin-index");
        } else if (account_type === "assistance") {
          const pages = JSON.parse(localStorage.getItem("pages"));

          if (pages == "home") {
            router.push(this.returnUrl || "/admin-index");
          } else if (pages == "forms-Apartments") {
            router.push(this.returnUrl || "/admin-show-apartment-models");
          } else if (pages == "forms") {
            router.push(this.returnUrl || "/admin-show-house-models");
          } else if (pages == "owners") {
            router.push(this.returnUrl || "/admin-show-owners");
          } else if (pages == "visits") {
            router.push(this.returnUrl || "/admin-show-owners-visits");
          } else if (pages == "sales") {
            if (response.data.results.pages[1] == "sells-employee") {
              router.push(this.returnUrl || "/admin-show-sales-staff");
            } else if (response.data.results.pages[1] == "call-center") {
              router.push(
                this.returnUrl || "/admin-show-customer-attendance-form"
              );
            } else if (response.data.results.pages[1] == "inquiries") {
              router.push(this.returnUrl || "/admin-show-queries");
            } else if (response.data.results.pages[1] == "application-form") {
              router.push(this.returnUrl || "/admin-show-application-form");
            } else if (response.data.results.pages[1] == "confirmations-form") {
              router.push(
                this.returnUrl || "/admin-show-approval-request-form"
              );
            } else if (response.data.results.pages[1] == "reservations") {
              router.push(
                this.returnUrl || "/admin-show-residential-unit-requests"
              );
            }
          } else if (pages == "notifications") {
            router.push(this.returnUrl || "/admin-show-notifications");
          } else if (pages == "After-sales-service") {
            if (response.data.results.pages[1] == "reservation-service") {
              router.push(this.returnUrl || "/admin-show-service-bookings");
            } else if (response.data.results.pages[1] == "services") {
              router.push(this.returnUrl || "/admin-show-services");
            } else if (response.data.results.pages[1] == "buying-offers") {
              router.push(this.returnUrl || "/admin-show-residential-units");
            }
          } else if (pages == "guards") {
            router.push(this.returnUrl || "/admin-show-guards");
          } else if (pages == "employees") {
            router.push(this.returnUrl || "/admin-show-staff");
          } else if (pages == "accounts-staff") {
            router.push(this.returnUrl || "/admin-show-accounts-staff");
          } else if (pages == "postings") {
            router.push(this.returnUrl || "/admin-show-advertisements");
          } else if (pages == "advantages") {
            router.push(this.returnUrl || "/admin-show-features");
          } else if (pages == "how_u_hear_about_us") {
            router.push(
              this.returnUrl || "/admin-show-how-did-you-hear-about-us"
            );
          } else if (pages == "complain") {
            router.push(this.returnUrl || "/admin-show-complaints");
          }
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
