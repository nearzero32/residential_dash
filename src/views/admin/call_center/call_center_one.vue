<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div v-if="data">
      <div class="mt-4">
        <v-row>
          <v-col cols="12" md="4" style="padding: 10px">
            <v-card>
              <v-card-text style="padding: 10px">
                <v-row style="align-items: center">
                  <v-col cols="12" md="6">
                    <img :src="user" alt="username" style="width: 60px" />
                  </v-col>
                  <v-col cols="12" md="6"
                    ><strong>أسم المتصل : {{ data.caller_name }}</strong></v-col
                  >
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" style="padding: 10px">
            <v-card>
              <v-card-text style="padding: 10px">
                <v-row style="align-items: center">
                  <v-col cols="12" md="6">
                    <img :src="phone_call" alt="username" style="width: 60px" />
                  </v-col>
                  <v-col cols="12" md="6"
                    ><strong>رقم العاتف : {{ data.caller_phone }}</strong></v-col
                  >
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" style="padding: 10px">
            <v-card>
              <v-card-text style="padding: 10px">
                <v-row style="align-items: center">
                  <v-col cols="12" md="6">
                    <img :src="employee" alt="username" style="width: 60px" />
                  </v-col>
                  <v-col cols="12" md="6"
                    ><strong
                      >موظف المبيعات : {{ data.current_employee.name }}</strong
                    ></v-col
                  >
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card :loading="loading">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>اسم المتصل : ( {{ data.caller_name }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>هاتف المتصل : ( {{ data.caller_phone }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>المحافظة : ( {{ data.caller_governorate }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>عنوان المتصل : ( {{ data.caller_address }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>وظيفة المتصل : ( {{ data.caller_job }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong
                  >عدد افراد عائلة المتصل : ( {{ data.caller_family_members }} )</strong
                >
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>كيف سمع عنا : ( {{ data.how_he_hear_about_us }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>المساحة المطلوبة : ( {{ data.space_required }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>أسم النموذج : ( {{ data.form_name }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>الموظف الحالي : ( {{ data.current_employee.name }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>نتائج المكالمة : ( {{ data.results_of_call }} )</strong>
              </v-col>
              <v-col cols="12" md="12" style="padding: 10px">
                <strong>موظفين المبيعات السابقين : </strong>
                <strong
                  v-for="(old_employees, index) in data.old_employees"
                  :key="old_employees._id"
                >
                  {{ old_employees.name }}
                  <span v-if="index !== data.old_employees.length - 1">, </span>
                </strong>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
import API from "@/api/adminAPI";
import user from "@/assets/images/icons/user.png";
import phone_call from "@/assets/images/icons/phone_call.png";
import employee from "@/assets/images/icons/employee.png";

export default {
  data() {
    return {
      userDataString: null,

      // nav
      page: {
        title: this.$route.params.name,
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "أستفسارات الزبائن",
          disabled: false,
          to: "/admin-call-center",
        },
        {
          text: this.$route.params.name,
          disabled: true,
        },
      ],
      // nav
      data: null,
      id: this.$route.params.id,
      loading: false,
      user,
      phone_call,
      employee,
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await API.getCallCenterOne({
          id: this.id,
        });

        this.data = response.data.results;
        this.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loading = false;
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
