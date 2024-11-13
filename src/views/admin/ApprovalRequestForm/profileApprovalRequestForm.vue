<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <v-card>
      <v-container>
        <p>{{ this.t("Customer name") }} : {{ data.customer_name }}</p>
        <p>
          {{ this.t("Customer's phone number") }} : {{ data.customer_phone }}
        </p>
        <p>{{ this.t("Details") }} : {{ data.details }}</p>
        <p>{{ this.t("Employee name") }} : {{ data.employee_name }}</p>
        <p>{{ this.t("Form name") }} : {{ data.form_name }}</p>
        <p>{{ this.t("Form Code") }} : {{ data.form_code }}</p>
        <p>{{ this.t("Land area") }} : {{ data.form_total_space }}</p>
        <p>{{ this.t("Building area") }} : {{ data.form_building_space }}</p>
        <p>{{ this.t("The block") }} : {{ data.form_block_number }}</p>
        <p>{{ this.t("Street Number") }} : {{ data.form_street_number }}</p>
        <p>{{ this.t("Category") }} : {{ data.form_category }}</p>
        <p>{{ this.t("Residential unit name") }} : {{ data.house_name }}</p>
        <p>{{ this.t("Date") }} : {{ data.createdAt }}</p>
      </v-container>
      <v-card-actions>
        <v-btn color="secondary" @click="Print()" depressed elevation="24" text
          >{{ t("Print") }}
        </v-btn>
      </v-card-actions>
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
import Table from "@/components/table.vue";

export default {
  components: {
    Table,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "Approval Request Form",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Approval Request Form",
          disabled: false,
          to: "/admin-show-approval-request-form",
        },
        {
          text: "Approval Request Form",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      data: {},
      user: JSON.parse(localStorage.getItem("results")),

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
      this.data = itemData;
    }
  },
  methods: {
    Print() {
      localStorage.setItem(
        "PrintApprovalRequestForm",
        JSON.stringify(this.data)
      );
      window.open("/admin-print-approval-request-form", "_blank");
    },
  },
};
</script>
