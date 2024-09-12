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
      <VCardTitle> تفاصيل حجز المالك : ( {{ Data.name }} ) </VCardTitle>
      <VCardText>
        <p>اسم المالك : {{ Data.name }}</p>
        <br />
        <p>هاتف المالك : {{ Data.phone }}</p>
        <br />
        <p>عنوان المالك : {{ Data.address }}</p>
        <br />
        <p>اسم الخدمة : {{ Data.service.name }}</p>
        <br />
        <p>مبلغ الخدمة : {{ Data.service.price }}</p>
        <br />
        <p>نوع الخدمة : {{ Data.service.type }}</p>
        <br />
        <p>تاريخ طلب الخدمة : {{ Data.createdAt }}</p>
        <br />
        <p>حالات الخدمة : 
            <ul style="margin-inline: 10%;">
                <li v-for="(item, index) in Data.status" :key="index">
                    <ul style="margin-block: 10px;
    border-bottom: solid 1px;
    padding-bottom: 10px;">
                        <li style="margin-bottom: 6px;">الحالة : {{ item.type }}</li>
                        <li style="margin-bottom: 6px;">تاريخ الحالة : {{ item.createdAt }}</li>
                        <li style="margin-bottom: 6px;">الملاحظة : {{ item.note }}</li>
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
      id: JSON.parse(sessionStorage.getItem("pageData"))._id,
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
    this.getCenter();
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
        }
      } finally {
        this.loading = false;
      }
    },
    // Get Data
  },
};
</script>
