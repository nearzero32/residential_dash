<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <v-row>
      <v-col cols="12" md="4">
        <v-card color="#FBC02D">
          <v-card-text style="text-align: center">
            <h4>
              <strong
                >{{ t("Number of Pending Requests") }} ( {{ table.pending }} )</strong
              >
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="#388E3C">
          <v-card-text style="text-align: center">
            <h4>
              <strong
                >{{ t("Number of Confirmed Requests") }} ( {{ table.approved }} )</strong
              >
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="#D32F2F">
          <v-card-text style="text-align: center">
            <h4>
              <strong
                >{{ t("Number of Cancelled Requests") }} ( {{ table.canceled }} )</strong
              >
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="4">
            <VAutocomplete
              dense
              filled
              solo
              v-model="status"
              :label="t('Status')"
              :items="items"
              item-title="text"
              item-value="value"
              @update:modelValue="getCenter"
            ></VAutocomplete>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardTitle>
        <VRow justify="space-between" style="align-items: center; margin-bottom: 15px">
          <VCol cols="12" sm="12" md="12">
            <VTextField
              v-model="table.search"
              append-inner-icon="mdi-magnify"
              density="compact"
              :label="t('Search')"
              variant="solo"
              hide-details
              single-line
              @click:clear="getCenter"
              clearable
            />
          </VCol>
        </VRow>
      </VCardTitle>
      <VCardText>
        <Table
          :table="table"
          :content_url="content_url"
          :tableOptions="tableOptions"
          :headers="headers"
          @update:options="getCenter"
          @empConfirmIteme="confirmIteme"
          @empCancelIteme="cancelIteme"
          @emitPrintItems="printItem"
        />
      </VCardText>
    </VCard>

    <!-- dialogConfirm -->
    <VDialog v-model="dialogConfirm" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure about approving this request?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogConfirm = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="confirmItemLoading"
            @click="confirmItemConfirm"
          >
            {{ t("Confirmation") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- dialogConfirm -->

    <!-- dialogCancel -->
    <VDialog v-model="dialogCancel" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure about rejecting this request?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogCancel = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="cancelItemLoading"
            @click="cancelItemConfirm"
          >
            {{ t("Confirmation") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- dialogCancel -->

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
        title: "Residential Unit Booking Application Form",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Residential Unit Booking Application Form",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      is_deleted: false,
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        approved: 0,
        canceled: 0,
        pending: 0,
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["موافقة", "طباعة", "الغاء"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      status: null,
      // table

      // confirm
      confirmItemLoading: false,
      dialogConfirm: false,
      confirmItem: {},
      // confirm

      // cancel
      cancelItemLoading: false,
      dialogCancel: false,
      cancelItem: {},
      // cancel

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  computed: {
    items() {
      return [
        {
          text: this.t("All"),
          value: null,
        },
        {
          text: this.t("Pending"),
          value: "معلق",
        },
        {
          text: this.t("Confirmed"),
          value: "مؤكد",
        },
        {
          text: this.t("Cancelled"),
          value: "ملغي",
        },
      ];
    },
    itemss() {
      return [
        { text: this.t("Deleted"), value: true },
        { text: this.t("Not deleted"), value: false },
      ];
    },
    headers() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Customer name"),
          type: "buyer_info.customer_name",
          link: ``,
          key: "buyer_info.customer_name",
        },
        {
          title: this.t("Customer's phone number"),
          type: "strong",
          link: ``,
          key: "buyer_info.customer_phone",
        },
        {
          title: this.t("Secondary Phone Number"),
          type: "strong",
          link: ``,
          key: "buyer_info.customer_phone_two",
        },
        {
          title: this.t("Form name"),
          type: "strong",
          link: ``,
          key: "form_name",
        },
        JSON.parse(localStorage.getItem("results")).building_type == "شقق"
          ? { text: "اسم العمارة", value: "exact_apartment_building" }
          : {},
        {
          title: this.t("Residential unit name"),
          type: "strong",
          link: ``,
          key: "house_name",
        },
        {
          title: this.t("Land area"),
          type: "strong",
          link: ``,
          key: "house_total_space",
        },
        {
          title: this.t("Building area"),
          type: "strong",
          link: ``,
          key: "house_building_space",
        },
        {
          title: this.t("Price"),
          type: "strong",
          link: ``,
          key: "price",
        },
        {
          title: this.t("Sales representative's name"),
          type: "strong",
          link: ``,
          key: "employee_name",
        },
        {
          title: this.t("Date"),
          type: "strong",
          link: ``,
          key: "createdAt",
        },
        {
          title: this.t("Operations"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
  },
  methods: {
    // Get Data
    async getCenter(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
      }

      const key =
        this.tableOptions.sortBy && this.tableOptions.sortBy.length > 0
          ? this.tableOptions.sortBy[0]
          : "createdAt";
      const order =
        this.tableOptions.sortDesc && this.tableOptions.sortDesc.length > 0
          ? this.tableOptions.sortDesc[0]
            ? "desc"
            : "asc"
          : "desc";

      const sortByJSON = JSON.stringify({ key, order });

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getApplicationForm({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: this.is_deleted,
          status: this.status,
        });
        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.table.approved = response.data.results.approved;
        this.table.canceled = response.data.results.canceled;
        this.table.pending = response.data.results.pending;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    // Get Data

    // confirmIteme
    confirmIteme(item) {
      this.confirmItem = { ...item };
      this.dialogConfirm = true;
    },
    async confirmItemConfirm() {
      this.confirmItemLoading = true;

      try {
        const response = await adminApi.confirmApplicationForm(this.confirmItem._id);

        this.confirmItemLoading = false;
        this.dialogConfirm = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.confirmItemLoading = false;
          this.dialogConfirm = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.confirmItemLoading = false;
          this.dialogConfirm = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.confirmItemLoading = false;
          this.dialogConfirm = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // confirmIteme

    // cancelIteme
    cancelIteme(item) {
      this.cancelItem = { ...item };
      this.dialogCancel = true;
    },
    async cancelItemConfirm() {
      this.cancelItemLoading = true;

      try {
        const response = await adminApi.cancelApplicationForm(this.cancelItem._id);

        this.cancelItemLoading = false;
        this.dialogCancel = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.cancelItemLoading = false;
          this.dialogCancel = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.cancelItemLoading = false;
          this.dialogCancel = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.cancelItemLoading = false;
          this.dialogCancel = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // cancelIteme

    // printItem
    printItem(item) {
      const results = JSON.parse(localStorage.getItem("results"));
      if (results.center_id._id === "65e818b420bce937fbf81fe4") {
        localStorage.setItem("printApplicationFormAlnahdaa", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-alnahdaa`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66e9376b2dcd8ef700ac5f01") {
        localStorage.setItem("printApplicationFormAlfakher", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-alfakher`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "665d7276f4c4a964001e12ab") {
        localStorage.setItem("printApplicationFormAbasly", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-abasly`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66656b164cdec95cab679181") {
        localStorage.setItem("printApplicationFormAlrawan", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-alrawan`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "6667fa62668eb9af32976f03") {
        localStorage.setItem("printApplicationFormAlrtaj", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-alrtaj`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66e2c810dec89fdfea71c92b") {
        localStorage.setItem("printApplicationFormKaramBagdad", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-karam-bagdad`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "672981a677eecc001eb05f4a") {
        localStorage.setItem("printApplicationFormLoam", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-application-form-loam`,
        });
        window.open(routeData.href, "_blank");
      }
      //   localStorage.setItem("CustomerAttendanceForm", JSON.stringify(item));
      //   let routeData = this.$router.resolve({
      //     name: `admin-profile-customer-attendance-form`,
      //   });
      //   window.open(routeData.href, "_blank");
    },
    // printItem

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
