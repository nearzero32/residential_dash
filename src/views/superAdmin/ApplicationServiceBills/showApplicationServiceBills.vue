<template>
  <div>
    <VRow class="mb-2" style="justify-content: center">
      <VCol
        cols="12"
        sm="6"
        md="3"
        v-if="Statistics.is_paid && Statistics.is_paid"
      >
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.is_paid.total_price) }}
              </h2>
              <span>
                الفواتير الاجمالية المسددة (
                {{ Statistics.is_paid.total }} )</span
              >
            </div>

            <VIcon size="30" color="primary" class="rounded-0">
              mdi-cash-check
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="6"
        md="3"
        v-if="Statistics.is_un_paid && Statistics.is_un_paid"
      >
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.is_un_paid.total_price) }}
              </h2>
              <span>
                الفواتير الاجمالية الغير المسددة (
                {{ Statistics.is_un_paid.total }} )</span
              >
            </div>

            <VIcon size="30" color="error" class="rounded-0">
              mdi-cash-multiple
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="6"
        md="3"
        v-if="Statistics.Todayis_paid && Statistics.Todayis_paid"
      >
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.Todayis_paid.total_price) }}
              </h2>
              <span>
                الفواتير المسددة اليوم (
                {{ Statistics.Todayis_paid.total }} )</span
              >
            </div>

            <VIcon size="30" color="primary" class="rounded-0">
              mdi-cash-check
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VCard class="primary-shade--light pa-3">
      <h1 class="text-center subtitle-4 black--text">
        فواتير خدمات التطبيق {{ parsedData.name }}
      </h1>
      <br />
      <VRow style="align-items: center">
        <VCol md="3" cols="12">
          <VBtn
            tile
            color="success"
            prepend-icon="fa-download"
            :block="isScreenXs"
            :loading="xlsxData.listLoading"
            @click="getAllDataAxios"
            style="margin-inline: 5px"
          >
            تحميل اكسل
          </VBtn>
        </VCol>
        <!-- <VCol md="3" cols="12">
          <v-label>اختيار نوع الفاتورة</v-label>
          <VSelect
            density="compact"
            v-model="tableModifier.billType"
            :items="billsTypeSelectItems"
            dense
            outlined
            item-title="text"
            item-value="value"
          ></VSelect>
        </VCol>
        <VCol md="3" cols="12">
          <VLabel>من</VLabel>
          <AppDateTimePicker
            v-model="tableModifier.start_date"
            density="compact"
            clearable
          />
          <DemoDateTimePickerBasic />
        </VCol>
        <VCol md="3" cols="12">
          <VLabel>الى</VLabel>
          <AppDateTimePicker
            v-model="tableModifier.end_date"
            density="compact"
            clearable
          />
          <DemoDateTimePickerBasic />
        </VCol> -->
      </VRow>
      <VRow>
        <VCol md="12" cols="12">
          <div class="d-flex flex-row">
            <VTextField
              v-model="table.search"
              :label="t('بحث')"
              prepend-inner-icon="fa-search"
              density="compact"
              outlined
              dense
              @input="getDataAxios"
            />
          </div>
        </VCol>
        <VSpacer />
      </VRow>
      <VRow>
        <VCol cols="12">
          <VDataTableServer
            v-model:options="tableOptions"
            :loading-text="t('جاري التحميل ... الرجاء الانتظار')"
            class="elevation-1"
            :headers="isMobile ? [] : headers"
            :items="table.Data"
            :loading="table.loading"
            :items-per-page="tableOptions.itemsPerPage"
            :items-length="table.totalItems"
            :no-data-text="t('لا توجد بيانات متاحة')"
            :items-per-page-options="[
              { value: 5, title: '5' },
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              {
                value: table.totalItems,
                title: '$vuetify.dataFooter.itemsPerPageAll',
              },
            ]"
            @update:options="getDataAxios"
          >
            <template v-if="isMobile" #item="{ item, index }">
              <tr variant="tonal" class="all">
                <td class="alll">
                  <div class="r">#</div>
                  <div class="l">
                    {{
                      table.totalItems -
                      ((tableOptions.page - 1) * tableOptions.itemsPerPage +
                        index)
                    }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">الاسم</div>
                  <div class="l">
                    {{ item.selectable.name }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">النوع</div>
                  <div class="l">
                    <span v-if="item.selectable.type == 'tenant'"> مستأجر</span>
                    <span v-else> مالك</span>
                  </div>
                </td>
                <td class="alll">
                  <div class="r">الهاتف</div>
                  <div class="l">
                    {{ item.selectable.phone }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">كود النموذج</div>
                  <div class="l">
                    {{ item.selectable.form_code }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">المبلغ</div>
                  <div class="l">
                    {{ numberWithComma(item.selectable.price) }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">التاريخ</div>
                  <div class="l">
                    {{ item.selectable.createdAt }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">تاريخ التسديد</div>
                  <div class="l">
                    {{ item.selectable.paying_date }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">سدد بواسطة</div>
                  <div class="l">
                    {{ item.selectable.paying_by }}
                  </div>
                </td>
                <!-- <td class="alll">
                  <div class="r">العمليات</div>
                  <div class="l">
                    <VTooltip>
                      <template #activator="{ props }">
                        <VIcon
                          style="margin-inline: 5px"
                          color="rgb(227 255 10) !important"
                          v-bind="props"
                          size="20"
                          @click="printItem(item.selectable)"
                        >
                          mdi-printer
                        </VIcon>
                      </template>
                      <span>طباعة</span>
                    </VTooltip>
                  </div>
                </td> -->
              </tr>
              <hr />
            </template>
            <template v-else #item.actions="{ item }">
              <VTooltip>
                <template #activator="{ props }">
                  <VIcon
                    style="margin-inline: 5px"
                    color="rgb(227 255 10) !important"
                    v-bind="props"
                    size="20"
                    @click="printItem(item.selectable)"
                  >
                    mdi-printer
                  </VIcon>
                </template>
                <span>طباعة</span>
              </VTooltip>
            </template>
            <template v-if="!isMobile" #item.num="{ index }">
              {{
                table.totalItems -
                ((tableOptions.page - 1) * tableOptions.itemsPerPage + index)
              }}
            </template>
            <template v-if="!isMobile" #item.price="{ item }">
              {{ numberWithComma(item.selectable.price) }}
            </template>
            <template v-if="!isMobile" #item.type="{ item }">
              <span v-if="item.selectable.type == 'tenant'"> مستأجر</span>
              <span v-else> مالك</span>
            </template>
          </VDataTableServer>
        </VCol>
      </VRow>
    </VCard>

    <!-- - dialog for show info to user -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="blue darken-1 justify-start"
            text
            @click="dialogData.open = false"
          >
            انهاء
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import superAPI from "@/api/superAPI";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import numberWithComma from "@/constant/number";
import { useI18n } from "vue-i18n";
import * as XLSX from "xlsx";

export default {
  components: {
    VDataTableServer,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      panel: [1],
      // table
      isMobile: false,
      content_url: null,
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
        sortBy: "",
        sortDesc: false,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        search: null,
        itemsPerPage: 5,
        ownerData: {
          currency: " IQD ",
          salaryAmountowner: 0,
          discountAmountowner: 0,
          paymentAmountowner: 0,
        },
      },
      // table

      // xlsx
      xlsxData: {
        allData: [],
        listLoading: false,
        filename: "فواتير خدمات التطبيق.xlsx",
      },
      // xlsx

      // tableModifier
      tableModifier: {
        billType: null,
        isDeleted: false,
        start_date: null,
        end_date: null,
        class_school_id: null,
      },
      // tableModifier

      // Statistics
      account_type: null,
      Statistics: {
        loading: false,
        is_paid: [],
        is_un_paid: [],
        Todayis_paid: [],
        Todayis_un_paid: [],
      },
      // Statistics

      // dialogData
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // dialogData
      parsedData: JSON.parse(sessionStorage.getItem("pageData")),

      // dialogEdit
      editedItem: {},
      dialogEdit: {
        open: false,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit
    };
  },
  watch: {
    "tableModifier.billType": {
      handler() {
        this.getDataAxios();
      },
      // deep: true,
    },
    "tableModifier.start_date": {
      handler() {
        this.getDataAxios();
      },
      // deep: true,
    },

    "tableModifier.end_date": {
      handler() {
        this.getDataAxios();
      },
      // deep: true,
    },
  },
  created() {
    this.account_type = JSON.parse(localStorage.getItem("results")).type;
    window.addEventListener("resize", this.onResize);
    this.onResize();
    this.getMonthlyUtilityBillsStatistics();
    this.getMonthlyUtilityBillsStatisticsToday();
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
          title: "الاسم",
          sortable: false,
          key: "name",
        },
        {
          title: "النوع",
          type: "strong",
          link: ``,
          key: "type",
        },
        { title: "الهاتف", key: "phone" },
        { title: "كود النموذج", key: "form_code" },
        { title: this.t("المبلغ"), sortable: false, key: "price" },
        {
          title: "التاريخ",
          sortable: false,
          key: "date_inserted",
        },
        {
          title: "تاريخ التسديد",
          sortable: false,
          key: "paying_date",
        },
        {
          title: "سدد بواسطة",
          sortable: false,
          key: "paying_by",
        },
        // {
        //   title: "العمليات",
        //   key: "actions",
        //   sortable: false,
        //   type: "strong",
        //   link: "",
        // },
      ];
    },
    // billsTypeSelectItems() {
    //   return [
    //     { text: this.t("الكل"), value: null },
    //     { text: this.t("المدفوعة"), value: true },
    //     { text: this.t("غير المدفوعة"), value: false },
    //   ];
    // },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onResize() {
      if (window.innerWidth < 769) this.isMobile = true;
      else this.isMobile = false;
    },
    // getData
    async getDataAxios() {
      let { search } = this.table;
      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;
      if (!search) {
        search = "";
      }

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      const response = await superAPI.getApplicationServiceBills({
        center_id: this.parsedData._id,
        page,
        limit: itemsPerPage,
        search: this.table.search,
      });

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.table.loading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.table.loading = false;
        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.content_url = response.data.content_url;
      }
    },
    async getMonthlyUtilityBillsStatistics() {
      this.Statistics.loading = true;

      const response = await superAPI.getApplicationServiceBillsStatistics(
        this.parsedData._id
      );

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.Statistics.loading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.Statistics.loading = false;
        this.Statistics.is_paid =
          response.data.results[0].is_paid == true
            ? response.data.results[0]
            : response.data.results[1];
        this.Statistics.is_un_paid =
          response.data.results[0].is_paid == false
            ? response.data.results[0]
            : response.data.results[1];
      }
    },
    async getMonthlyUtilityBillsStatisticsToday() {
      this.Statistics.loading = true;

      const response = await superAPI.getApplicationServiceBillsStatisticsToday(
        this.parsedData._id
      );

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.Statistics.loading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.Statistics.loading = false;
        this.Statistics.Todayis_paid = response.data.results;
      }
    },
    // getData

    // printItem
    // printItem(item) {
    //   let routeData = this.$router.resolve({
    //     path: `/print-application-service-bills/${item._id}`,
    //   });
    //   window.open(routeData.href, "_blank");
    // },
    // printItem

    // Download Excel
    async getAllDataAxios() {
      this.xlsxData.listLoading = true;

      const response = await superAPI.getApplicationServiceBillsAll({
        search: this.table.search,
        is_paid: this.tableModifier.billType,
        start_date: this.tableModifier.start_date,
        end_date: this.tableModifier.end_date,
      });

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.xlsxData.downloadLoading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.xlsxData.allData = response.data.results;
        this.handleDownload();
      }
    },
    async handleDownload() {
      const dataForExcel = [
        [
          this.t("الاسم"),
          this.t("الهاتف"),
          this.t("النوع"),
          this.t("كود النموذج"),
          this.t("المبلغ"),
          this.t("الحالة"),
          this.t("التاريخ"),
          this.t("تاريخ التسديد"),
          "سدد بواسطة",
        ],
        ...this.xlsxData.allData.map((item) => [
          item.name,
          item.phone,
          item.type === "owner" ? "مالك" : "مستاجر",
          item.form_code,
          this.numberWithComma(item.price),
          item.is_paid === true ? "مسددة" : "غير مسددة",
          item.date_inserted,
          item.paying_date,
          item.paying_by,
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(dataForExcel);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      this.xlsxData.listLoading = false;

      XLSX.writeFile(wb, this.xlsxData.filename);
    },
    // Download Excel

    // Show Message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // Show Message

    numberWithComma,
  },
};
</script>

<style lang="scss">
.apexcharts-legend-marker {
  margin-inline: 10px;
}
</style>