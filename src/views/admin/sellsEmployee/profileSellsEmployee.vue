<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-card v-if="loading == true" style="text-align: center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="#fb9778"
            indeterminate
          ></v-progress-circular>
        </v-card>
        <v-card v-else>
          <v-card-title
            style="display: flex; flex-direction: row; align-items: center"
          >
            <v-icon class="mr-2" size="40" color="#fb9778"
              >mdi-account-tie</v-icon
            >
            {{ data.name }}
            <v-spacer
              style="width: 100%; height: 1px; background-color: #00000036"
            ></v-spacer>
          </v-card-title>
          <v-card-text>
            <h3><strong>البريد الألكتروني : </strong> {{ data.email }}</h3>
            <br />
            <h3><strong>كلمة المرور : </strong>  {{ data.password_show }}</h3>
            <br />
            <h3><strong>رقم الهاتف : </strong>  {{ data.phone }}</h3>
            <br />
            <h3><strong>الراتب : </strong>  {{ data.salary }}</h3>
            <br />
            <h3><strong>عدد الأشعارات : </strong>  {{ data.notifications_count }}</h3>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

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
          text: "موظفين المبيعات",
          disabled: false,
          to: "/admin-sells-employee",
        },
        {
          text: this.$route.params.name,
          disabled: true,
        },
      ],
      // nav
      //   data
      id: this.$route.params.id,
      data: {},
      loading: false,
      //   data
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
        const response = await API.getSellsEmployeeOne(this.id);
        this.data = response.data.results;
        console.log(this.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
