<template>
  <div>
    <v-container fluid class="down-top-padding">
      <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
      ></BaseBreadcrumb>
      <v-card>
        <v-container>
          <p>اسم الزبون : {{ data.customer_name }}</p>
          <p>هاتف الزبون : {{ data.customer_phone }}</p>
          <p>تفاصيل : {{ data.details }}</p>
          <p>أسم الموظف : {{ data.employee_name }}</p>
          <p>أسم النموذج : {{ data.form_name }}</p>
          <p>المساحة الكلية : {{ data.form_total_space }}</p>
          <p>مساحة البناء : {{ data.form_building_space }}</p>
          <p>البلوك : {{ data.form_block_number }}</p>
          <p>رقم الشارع : {{ data.form_street_number }}</p>
          <p>التصنيف : {{ data.form_category }}</p>
          <p>كود النموذج : {{ data.form_code }}</p>
          <p>رقم المنزل : {{ data.house_name }}</p>
          <p>التاريخ : {{ data.createdAt }}</p>
        </v-container>
        <v-card-actions>
          <v-btn color="secondary" @click="Print()" depressed elevation="24" text>طباعه</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // nav
      page: {
        title: this.$router.currentRoute.params.name,
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "أستماراة طلب موافقة",
          disabled: false,
          to: "/admin-confirmations-form",
        },
        {
          text: this.$router.currentRoute.params.name,
          disabled: true,
        },
      ],
      // nav

      data: null,
      user: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("profileConfirmations_form"));
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    Print() {
      localStorage.setItem("PrintConfirmationsForm", JSON.stringify(this.data));
      window.open("/Print-Confirmations-Form", "_blank");
    },
  },
};
</script>
