<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VRow class="mb-2" style="justify-content: center">
      <VCol cols="12" sm="6" md="4" v-if="Statistics.is_paid">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.is_paid.total_price) }}
              </h2>
              <span>
                <span v-if="Statistics.is_paid">الفواتير الكلية المسددة</span>
                ( {{ numberWithComma(Statistics.is_paid.total) }} )</span
              >
            </div>

            <VIcon size="30" color="primary" class="rounded-0">
              mdi-cash-register
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" sm="6" md="4" v-if="Statistics.is_un_paid">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.is_un_paid.total_price) }}
              </h2>
              <span>
                <span v-if="Statistics.is_un_paid.is_paid == false"
                  >الفواتير الكلية الغير مسددة</span
                >
                ( {{ numberWithComma(Statistics.is_un_paid.total) }} )</span
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
        md="4"
        v-if="Statistics.is_un_paid && Statistics.is_paid"
      >
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{
                  numberWithComma(
                    Statistics.is_un_paid.total_price -
                      Statistics.is_paid.total_price
                  )
                }}
              </h2>
              <span>
                <span v-if="Statistics.is_un_paid && Statistics.is_paid"
                  >الفواتير الكلية المتبقية</span
                >
                (
                {{
                  numberWithComma(
                    Statistics.is_un_paid.total - Statistics.is_paid.total
                  )
                }}
                )</span
              >
            </div>

            <VIcon size="30" color="secondary" class="rounded-0">
              mdi-cash
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" sm="6" md="3" v-if="Statistics.today">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.today.total_price) }}
              </h2>
              <span>
                الفواتير الكلية اليوم (
                {{ numberWithComma(Statistics.today.total) }} )</span
              >
            </div>

            <VIcon size="30" color="primary" class="rounded-0">
              mdi-cash-check
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VRow class="mb-2" style="justify-content: center">
      <VCol cols="12" sm="6" md="3" v-if="Statistics.house_number">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.house_number) }}
              </h2>
              <span>العدد الكلي للوحدات السكنية</span>
            </div>

            <VIcon size="30" color="primary" class="rounded-0">
              mdi-home-group
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" sm="6" md="3" v-if="Statistics.sold_house_number">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ numberWithComma(Statistics.sold_house_number) }}
              </h2>
              <span>عدد الوحدات السكنية المبيوعه</span>
            </div>

            <VIcon size="30" color="#7eae76" class="rounded-0">
              mdi-home-group-plus
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" sm="6" md="3" v-if="Statistics.sold_house_number">
        <VCard :loading="Statistics.loading">
          <VCardText class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{
                  numberWithComma(
                    Statistics.house_number - Statistics.sold_house_number
                  )
                }}
              </h2>
              <span>عدد الوحدات السكنية الغير المبيوعه</span>
            </div>

            <VIcon size="30" color="#ed4141" class="rounded-0">
              mdi-home-group-remove
            </VIcon>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VCard>
      <VCardTitle>
        <h4 style="text-align: center">تقارير تطبيق الهاتف</h4>
        <br />
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
          @editItems="editItem"
          @emitGoToPage="GoToPage"
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
import { useI18n } from "vue-i18n";
import Table from "@/components/table.vue";
import superAPI from "@/api/superAPI.js";
import numberWithComma from "@/constant/number";

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
        title: "Home Page",
      },
      b: [
        {
          text: "Home Page",
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
      dataSerch: [],
      // table

      // Statistics
      Statistics: {
        loading: false,
        today: {},
        is_paid: {},
        is_un_paid: {},
      },
      // Statistics

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
          title: this.t("Name of the complex"),
          type: "link",
          link: `/super-admin-application-service-bills`,
          key: "name",
        },
        {
          title: "سعر الاشتراك ",
          type: "mobile_bill_price",
          link: ``,
          key: "mobile_bill_price",
        },
        {
          title: this.t("Number of property owners"),
          type: "strong",
          link: ``,
          key: "owner_number",
        },
        {
          title: "عدد الوحدات السكنية",
          type: "strong",
          link: ``,
          key: "house_number",
        },
        {
          title: this.t("Number of tenants"),
          type: "strong",
          link: ``,
          key: "tenant_number",
        },
        {
          title: "عدد الفواتير الغير المسدده",
          type: "strong",
          link: ``,
          key: "number_mobile_bill_service_un_paid",
        },
        {
          title: "عدد الفواتير المسدده",
          type: "strong",
          link: ``,
          key: "number_mobile_bill_service_paid",
        },
        {
          title: "المبلغ الكلي",
          type: "total_price",
          link: ``,
          key: "total_price",
        },
        {
          title: "المبلغ الكلي للفواتير المسدده",
          type: "total_paid_price",
          link: ``,
          key: "total_paid_price",
        },
        {
          title: "المبلغ الكلي للفواتير الغير مسدده",
          type: "total_un_paid_price",
          link: ``,
          key: "total_un_paid_price",
        },
        {
          title: "عدد المنازل المستلمه",
          type: "strong",
          link: ``,
          key: "house_received_number",
        },
      ];
    },
  },
  created() {
    this.getMobileBillService();
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
        const response = await superAPI.getHome({
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
    async getMobileBillService() {
      this.Statistics.loading = true;

      const response = await superAPI.getMobileBillService();

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.Statistics.loading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.Statistics.loading = false;
        this.Statistics.today = response.data.results.today;
        this.Statistics.is_paid =
          response.data.results.all[0].is_paid == true
            ? response.data.results.all[0]
            : response.data.results.all[1];
        this.Statistics.is_un_paid =
          response.data.results.all[0].is_paid == false
            ? response.data.results.all[0]
            : response.data.results.all[1];
        this.Statistics.sold_house_number =
          response.data.results.sold_house_number;
        this.Statistics.house_number = response.data.results.house_number;
      }
    },
    // Get Data

    GoToPage(item) {
      this.$router.push("/super-admin-application-service-bills");
    },
    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message

    numberWithComma,
  },
};
</script>
