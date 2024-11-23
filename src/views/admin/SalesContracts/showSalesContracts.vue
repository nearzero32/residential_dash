<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <VCard>
      <VCardTitle>
        <VRow
          justify="space-between"
          style="align-items: center; margin-bottom: 15px"
        >
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
          @emitPrintItems="printItem"
        />
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
        title: "Sales Contracts",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Sales Contracts",
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
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["طباعة"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      status: null,
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
  computed: {
    headers() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("The name"),
          type: "strong",
          link: ``,
          key: "owner_name",
        },
        {
          title: this.t("Phone number"),
          type: "strong",
          link: ``,
          key: "owner_phone",
        },
        {
          title: this.t("Job Title"),
          type: "strong",
          link: ``,
          key: "owner_title_jop",
        },
        {
          title: this.t("Contract Number"),
          type: "strong",
          link: ``,
          key: "contract_id",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
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
        const response = await adminApi.getOwnersContract({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          sortBy: sortByJSON,
        });
        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
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

    // printItem
    printItem(item) {
      const results = JSON.parse(localStorage.getItem("results"));
      if (results.center_id._id === "65e818b420bce937fbf81fe4") {
        localStorage.setItem("PrintNahdda", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-alnahdaa`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66e9376b2dcd8ef700ac5f01") {
        localStorage.setItem("PrintAlfakher", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-alfakher`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "665d7276f4c4a964001e12ab") {
        localStorage.setItem("PrintAbsly", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-abasly`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66656b164cdec95cab679181") {
        localStorage.setItem("PrintAlrawan", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-alrawan`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "6667fa62668eb9af32976f03") {
        localStorage.setItem("PrintAlrtaj", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-alrtaj`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66e2c810dec89fdfea71c92b") {
        localStorage.setItem("PrintKaramBagdad", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-karam-bagdad`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66a8a602996fa363c5a0f6f5") {
        localStorage.setItem("PrintLamac", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-sales-contracts-lamac`,
        });
        window.open(routeData.href, "_blank");
      }
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
