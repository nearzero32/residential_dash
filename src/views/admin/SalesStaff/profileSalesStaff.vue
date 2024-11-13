<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)} ( ${data.name} )`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <VCard>
      <VCardTitle
        style="display: flex; flex-direction: row; align-items: center"
      >
        <v-icon class="mr-2" size="40" color="#fb9778">mdi-account-tie</v-icon>
        {{ data.name }}
      </VCardTitle>
      <v-spacer
        style="width: 100%; height: 1px; background-color: #00000036"
      ></v-spacer>
      <VCardText>
        <h3><strong>البريد الألكتروني : </strong> {{ data.email }}</h3>
        <br />
        <h3><strong>كلمة المرور : </strong> {{ data.password_show }}</h3>
        <br />
        <h3><strong>رقم الهاتف : </strong> {{ data.phone }}</h3>
        <br />
        <h3><strong>الراتب : </strong> {{ data.salary }}</h3>
        <br />
        <h3>
          <strong>عدد الأشعارات : </strong> {{ data.notifications_count }}
        </h3>
      </VCardText>
    </VCard>

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
          text: "Sales staff",
          disabled: false,
          to: "/admin-show-sales-staff",
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
      // table
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      id: null,
      data: {},
      // table

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
    if (this.$route.query.data) {
      const itemData = JSON.parse(this.$route.query.data);
      this.id = itemData;
      this.getCenter();
    }
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;
        const response = await adminApi.getSellsEmployeeOne(this.id);
        this.data = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
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
