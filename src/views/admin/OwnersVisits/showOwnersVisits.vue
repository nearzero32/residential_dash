<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="3" style="text-align: center">
            <VBtn
              tile
              color="success"
              prepend-icon="fa-download"
              :loading="xlsxData.listLoading"
              @click="getAllDataAxios"
            >
              تحميل اكسل
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
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
import * as XLSX from "xlsx";

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
        title: "Owners' visits",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Owners' visits",
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
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: [],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // xlsx
      xlsxData: {
        allData: [],
        listLoading: false,
        filename: `زيارات الملاك.xlsx`,
      },
      // xlsx

      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg

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
          title: this.t("Owner's name"),
          type: "strong",
          link: ``,
          key: "owner_name",
        },
        {
          title: this.t("Owner's phone number"),
          type: "strong",
          link: ``,
          key: "owner_phone",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
        },
        {
          title: this.t("Guard's name"),
          type: "strong",
          link: ``,
          key: "guard_name",
        },
        {
          title: this.t("Guard's phone number"),
          type: "strong",
          link: ``,
          key: "guard_phone",
        },
        {
          title: this.t("Date"),
          type: "strong",
          link: ``,
          key: "createdAt",
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

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getVisits({
          page,
          limit: itemsPerPage,
          search: this.table.search,
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
        }
      } finally {
        this.table.loading = false;
      }
    },
    // Get Data

    // Download Excel
    async getAllDataAxios() {
      this.xlsxData.listLoading = true;

      try {
        const response = await adminApi.getVisits({
          page: 1,
          limit: 9999999999999,
          search: null,
        });
        this.xlsxData.allData = response.data.results.data;
        this.handleDownload();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.xlsxData.downloadLoading = false;
          this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
        } else {
          console.error(error);
          this.showDialogfunction("حدث خطأ غير متوقع", "#FF5252");
        }
      } finally {
        this.xlsxData.listLoading = false;
      }
    },
    async handleDownload() {
      const header = [
        "أسم المالك",
        "هاتف المالك",
        "كود النموذج",
        "اسم الحارس",
        "هاتف الحارس",
      ];

      const dataForExcel = [
        header,
        ...this.xlsxData.allData.map((item) => [
          item.owner_name,
          item.owner_phone,
          item.form_code,
          item.guard_name,
          item.guard_phone,
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(dataForExcel);

      ws["!cols"] = [
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
        { wch: 30 },
      ];

      const headerStyle = {
        font: { bold: true, color: { rgb: "#9155fd" } },
        fill: { fgColor: { rgb: "0000FF" } },
      };

      header.forEach((col, index) => {
        const cellAddress = XLSX.utils.encode_cell({ r: 0, c: index });
        if (!ws[cellAddress]) ws[cellAddress] = { t: "s", v: col };
        ws[cellAddress].s = headerStyle;
      });

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      this.xlsxData.listLoading = false;

      XLSX.writeFile(wb, this.xlsxData.filename);
    },
    // Download Excel

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
