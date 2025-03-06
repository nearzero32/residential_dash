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
import { getCurrentDateInString } from "@/constant/date";
import * as XLSX from "xlsx";

export default {
  components: {
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
        title: "Service Contracts",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Service Contracts",
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

      is_house_received: null,

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
      },
      userData: [],
      action: [],
      // table

      // xlsx
      xlsxData: {
        allData: [],
        listLoading: false,
        filename: `الملاك المستلمين.xlsx`,
      },
      // xlsx

      // add
      visibleDeleteIcons: [],
      Forms: [],
      files: [],
      BankAccounts: [],
      Houses: [],
      file: null,
      building_type: null,
      HousesShow: false,
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        contract_imgs: [],
        name: null,
        email: null,
        residence_card_issue_date: null,
        phone: null,
        id_number: null,
        id_place_of_issue: null,
        id_issue_date: null,
        residence_card_number: null,
        residence_card_place_of_issue: null,
        owner_title_jop: null,
        password_show: null,
        address: null,
        bank_id: null,
        form: null,
        form_id: null,
        house_id: null,
        id_img_front: null,
        id_img_back: null,
        location_img_front: null,
        location_img_back: null,
        passport_img: null,
      },
      // add

      // dialogEdit
      dialogEdit: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit

      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },

      // received house
      dialogReceivedHouse: {
        open: false,
        receivedItem: null,
        loading: false,
        isFormValid: false,
        data: {
          received_date: getCurrentDateInString(),
          received_monthly_payment_date: null,
        },
      },

      // Delete

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
  watch: {
    "dialogEdit.editedItem.form_id": {
      handler(newVal) {
        const selectedItem = this.Forms.find((item) => item._id === newVal);
        if (selectedItem) {
          this.getHousesEditO(selectedItem);
        }
      },
      immediate: true,
    },
  },
  computed: {
    Rules() {
      return {
        passport_img: [(value) => !!value || this.t("This field is required")],
        location_img_back: [(value) => !!value || this.t("This field is required")],
        location_img_front: [(value) => !!value || this.t("This field is required")],
        id_img_back: [(value) => !!value || this.t("This field is required")],
        id_img_front: [(value) => !!value || this.t("This field is required")],
        house_id: [(value) => !!value || this.t("This field is required")],
        form_id: [(value) => !!value || this.t("This field is required")],
        form: [(value) => !!value || this.t("This field is required")],
        bank_id: [(value) => !!value || this.t("This field is required")],
        address: [(value) => !!value || this.t("This field is required")],
        password_show: [(value) => !!value || this.t("This field is required")],
        owner_title_jop: [(value) => !!value || this.t("This field is required")],
        residence_card_place_of_issue: [
          (value) => !!value || this.t("This field is required"),
        ],
        residence_card_number: [(value) => !!value || this.t("This field is required")],
        id_issue_date: [(value) => !!value || this.t("This field is required")],
        id_place_of_issue: [(value) => !!value || this.t("This field is required")],
        name: [(value) => !!value || this.t("This field is required")],
        contract_imgs: [(value) => !!value || this.t("This field is required")],
        residence_card_issue_date: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_number: [(value) => !!value || this.t("This field is required")],
        email: [
          (value) => !!value || this.t("This field is required"),
          (value) =>
            /.+@.+\..+/.test(value) || this.t("Please enter a valid email address"),
        ],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11) return this.t("Phone number must be 11 digits");
            return true;
          },
        ],
        password_show: [(value) => !!value || this.t("This field is required")],
      };
    },

    headers() {
      const buildingType = JSON.parse(localStorage.getItem("results"))?.center_id
        ?.building_type;

      const baseHeaders = [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Owner's name"),
          type: "strong",
          link: ``,
          key: "name",
        },
        {
          title: this.t("Owner's phone number"),
          type: "strong",
          link: ``,
          key: "phone",
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
      return baseHeaders;
    },

    filteredHouses() {
      return this.Houses.filter((House) => House.status !== "تم البيع");
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
        const response = await adminApi.getOwners({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: this.is_deleted,
          is_house_received: true,
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
      if (results.center_id._id === "66e937122dcd8ef700ac5ed6") {
        localStorage.setItem("PrintServiceContractsAlwud", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-service-contracts-alwud`,
        });
        window.open(routeData.href, "_blank");
      } else if (results.center_id._id === "66656b164cdec95cab679181") {
        localStorage.setItem("PrintServiceContractsAlrawan", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-service-contracts-alrawan`,
        });
        window.open(routeData.href, "_blank");
      } else {
        localStorage.setItem("PrintServiceContractsComplexes", JSON.stringify(item));
        let routeData = this.$router.resolve({
          name: `admin-print-service-contracts-complexes`,
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
  },
};
</script>
