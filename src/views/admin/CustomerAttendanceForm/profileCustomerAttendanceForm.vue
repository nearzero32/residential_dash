<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)} ( ${data.caller_name} )`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <v-row>
      <v-col cols="12" md="4" style="padding: 10px">
        <v-card>
          <v-card-text style="padding: 10px">
            <v-row style="align-items: center">
              <v-col cols="12" md="6">
                <img :src="user" alt="username" style="width: 60px" />
              </v-col>
              <v-col cols="12" md="6"
                ><strong
                  >{{ t("Caller's name") }} : {{ data.caller_name }}</strong
                ></v-col
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
                ><strong
                  >{{ t("Customer's phone number") }} :
                  {{ data.caller_phone }}</strong
                ></v-col
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
                ><strong>
                  {{ t("Sales representative's name") }} :
                  {{ data.current_employee.name }}</strong
                ></v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <br />
    <v-card :loading="loading">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Caller's name") }} : ( {{ data.caller_name }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Customer's phone number") }} : (
              {{ data.caller_phone }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Province") }} : ( {{ data.caller_governorate }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Customer address") }} : (
              {{ data.caller_address }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Customer's occupation") }} : (
              {{ data.caller_job }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Number of family members of the customer") }} : (
              {{ data.caller_family_members }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("How did you hear about us") }} : (
              {{ data.how_he_hear_about_us }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Required space") }} : ( {{ data.space_required }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong>{{ t("Form name") }} : ( {{ data.form_name }} )</strong>
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong
              >{{ t("Current employee") }} : (
              {{ data.current_employee.name }} )</strong
            >
          </v-col>
          <v-col cols="12" md="12" style="padding: 10px">
            <strong>{{ t("Former sales employees") }} : </strong>
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

    <!-- Message Dialog -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            {{ t("Finish") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";
import user from "@/assets/images/icons/user.png";
import phone_call from "@/assets/images/icons/phone_call.png";
import employee from "@/assets/images/icons/employee.png";

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "Profile",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Customer attendance form",
          disabled: false,
          to: "/admin-show-customer-attendance-form",
        },
        {
          text: "Profile",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      id: JSON.parse(sessionStorage.getItem("pageData"))._id,
      data: JSON.parse(sessionStorage.getItem("pageData")),
      user,
      phone_call,
      employee,
      loading: false,

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getCallCenterOne({
          id: this.id,
        });

        this.data = response.data.results;
        this.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loading = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message
  },
};
</script>
