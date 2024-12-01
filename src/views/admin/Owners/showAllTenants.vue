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
              @input="getCenter"
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
          :headers="headersTenants"
          @update:options="getCenter"
          @editItems="editItemTenants"
          @emitDisable="emitDisableTenants"
          @emitPrintItems="printItem"
          @pageData="handlePageData"
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
import { VDataTable } from "vuetify/labs/VDataTable";
import Table from "@/components/table.vue";

export default {
  components: {
    VDataTable,
    Table,
  },
  setup() {
    const { t } = useI18n();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };
    return {
      format,
      t,
      // nav
      page: {
        title: "All tenants",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "All tenants",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      loading: null,

      // table
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      is_disabledItem: [
        { text: "موقف", value: true },
        { text: "غير موقف", value: false },
      ],
      table: {
        is_disabled: false,
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["طباعة"],
        search: null,
        itemsPerPage: 5,
      },
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
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
  },
  computed: {
    headersTenants() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Tenant Name"),
          type: "linkURL",
          link: `/admin-profile-tenant`,
          key: "name",
        },
        {
          title: this.t("Phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("Email"),
          type: "strong",
          link: ``,
          key: "email",
        },
        {
          title: this.t("Password"),
          type: "strong",
          link: ``,
          key: "password_show",
        },
        {
          title: this.t("Address"),
          type: "strong",
          link: ``,
          key: "address",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
        },
        {
          title: this.t("Job Title"),
          type: "strong",
          link: ``,
          key: "owner_title_jop",
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
        const response = await adminApi.getShowAllTenants({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
        });
        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.table.loading;
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.table.loading;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.table.loading;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading;
      }
    },
    // Get Data

    // printItem
    printItem(item) {
      localStorage.setItem("PrintTenant", item._id);
      let routeData = this.$router.resolve({
        name: `admin-print-tenant`,
      });
      window.open(routeData.href, "_blank");
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
