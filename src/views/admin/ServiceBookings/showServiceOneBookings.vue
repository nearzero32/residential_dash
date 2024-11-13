<template>
  <div>
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard :loading="loading" v-if="Data">
      <VCardTitle> {{ t("Owner reservation details") }} : ( {{ Data.name }} ) </VCardTitle>
      <VCardText>
        <p>{{ t("Owner's name") }} : {{ Data.name }}</p>
        <br />
        <p>{{ t("Owner's phone number") }} : {{ Data.phone }}</p>
        <br />
        <p>{{ t("Form Code") }} : {{ Data.form_code }}</p>
        <br />
        <p>{{ t("Service Name") }} : {{ Data.service ? Data.service.name : '' }}</p>
        <br />
        <p>{{ t("Service Amount") }} : {{ Data.service ? numberWithComma(Data.service.price) : '' }}</p>
        <br />
        <p>{{ t("Service type") }} : {{ Data.service ? Data.service.type : '' }}</p>
        <br />
        <p>{{ t("Service request date") }} : {{ Data.createdAt }}</p>
        <br />
        <p>{{ t("Service status") }} : 
            <ul style="margin-inline: 10%;">
                <li v-for="(item, index) in Data.status" :key="index">
                    <ul style="margin-block: 10px;
    border-bottom: solid 1px;
    padding-bottom: 10px;">
                        <li style="margin-bottom: 6px;">{{ t("Status") }} : {{ item.type }}</li>
                        <li style="margin-bottom: 6px;">{{ t("Status date") }} : {{ item.createdAt }}</li>
                        <li style="margin-bottom: 6px;">{{ t("Note") }} : {{ item.note }}</li>
                    </ul>
                </li>
            </ul>
        </p>
        <br />
      </VCardText>
    </VCard>
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";
import numberWithComma from "@/constant/number";

export default {
  setup() {
    const { t } = useI18n();
    return {
      t,
      // nav
      page: {
        title: "Service Bookings",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Service Bookings",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      id: null,
      Data: {},
      loading: false,
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    if (this.$route.query.data) {
      const itemData = JSON.parse(this.$route.query.data);
      this.id = itemData;
      this.getCenter();
    }
  },
  methods: {
    // Get Data
    async getCenter() {
      this.loading = true;

      try {
        const response = await adminApi.getReservationsServiceOne(this.id);
        this.Data = response.data.results;
        this.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loading = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    // Get Data

    numberWithComma,
  },
};
</script>
