<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <!-- <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="4">
            <VAutocomplete
              v-model="is_deleted"
              :label="t('Data type')"
              :items="itemss"
              item-title="text"
              item-value="value"
              @update:modelValue="getCenter"
            ></VAutocomplete>
          </VCol>
        </VRow>
      </VCardText>
    </VCard> -->

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
          @empConfirmIteme="ConfirmIteme"
          @empConsentIteme="RejectIteme"
          @empFinishIteme="FinishIteme"
          @emitPrintItems="printItem"
        />
      </VCardText>
    </VCard>

    <!-- image -->
    <VDialog v-model="Image.showImageDailog" max-width="600px">
      <VCard>
        <VCardText>
          <VContainer>
            <VForm>
              <VRow class="justify-center">
                <img
                  :src="content_url + Image.imageUrlForShow"
                  alt
                  width="300"
                  height="200"
                />
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <v-btn color="primary" text @click="Image.showImageDailog = false">
            {{ t("Cancel") }}
          </v-btn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- image -->

    <!-- Delete Dialog -->
    <VDialog v-model="dialogConfirmIteme.open" max-width="1000px">
      <VCard>
        <VCardTitle class="headline justify-center">
          الموافقة على الطلب
        </VCardTitle>
        <VCardText>
          <VForm ref="form">
            <VRow>
              <VCol cols="12" md="12">
                <VTextarea
                  rows="5"
                  style="height: 379px"
                  label="الملاحظة"
                  :rules="Rules.required"
                  v-model="note"
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="blue darken-1"
            text
            @click="dialogConfirmIteme.open = false"
          >
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogConfirmIteme.loading"
            @click="ConfirmItemeItemConfirm"
          >
            {{ t("Approval") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

    <!-- dialogRejectIteme -->
    <VDialog v-model="dialogRejectIteme.open" max-width="1000px">
      <VCard>
        <VCardTitle class="headline justify-center"> رفض الطلب </VCardTitle>
        <VCardText>
          <VForm ref="form">
            <VRow>
              <VCol cols="12" md="12">
                <VTextarea
                  rows="5"
                  label="سبب الرفض"
                  v-model="dialogRejectIteme.reason_to_reject"
                  :rules="Rules.required"
                />
              </VCol>
              <VCol cols="12" md="12">
                <VTextarea
                  rows="5"
                  label="الملاحظة "
                  v-model="dialogRejectIteme.note"
                  :rules="Rules.required"
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="blue darken-1"
            text
            @click="dialogRejectIteme.open = false"
          >
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogRejectIteme.loading"
            @click="RejectItemeConfirm"
          >
            {{ t("Refusal") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

    <!-- dialogFinishIteme -->
    <VDialog v-model="dialogFinishIteme.open" max-width="1000px">
      <VCard>
        <VCardTitle class="headline justify-center"> انهاء الطلب </VCardTitle>
        <VCardText>
          <VForm ref="form">
            <VRow>
              <VCol cols="12" md="12">
                <VTextarea
                  rows="5"
                  label="الملاحظة"
                  v-model="dialogFinishIteme.note"
                  :rules="Rules.required"
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="blue darken-1"
            text
            @click="dialogFinishIteme.open = false"
          >
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogFinishIteme.loading"
            @click="FinishItemeConfirm"
          >
            {{ t("Finish") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

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
import { format as formatDate } from "date-fns";

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
        actions: ["موافقه", "رفض", "انهاء", "طباعة"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // Image
      Image: {
        showImageDailog: false,
        imageUrlForShow: null,
      },
      // Image

      // dialogConfirmIteme
      Employees: [],
      employee_id: null,
      date_to_work: null,
      note: null,
      isoDatee: null,
      dialogConfirmIteme: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // dialogConfirmIteme

      // dialogRejectIteme
      dialogRejectIteme: {
        open: false,
        deletedItem: null,
        loading: false,
        reason_to_reject: null,
        note: null,
      },
      // dialogRejectIteme

      // dialogFinishIteme
      dialogFinishIteme: {
        open: false,
        deletedItem: null,
        loading: false,
        note: null,
      },
      // dialogRejectIteme

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
    this.getMaintenanceEmployee();
  },
  computed: {
    headers() {
      const headersArray = [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Owner's name"),
          type: "link",
          link: `/admin-show-service-one-bookings`,
          key: "name",
        },
        {
          title: this.t("Owner's phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("Service Name"),
          type: "strong",
          link: ``,
          key: "service.name",
        },
        {
          title: this.t("Service Amount"),
          type: "strong",
          link: ``,
          key: "service.price",
        },
        {
          title: this.t("Refusal"),
          type: "current_status",
          link: ``,
          key: "current_status.type",
        },
        {
          title: this.t("Accept"),
          type: "Accept",
          link: ``,
          key: "Accept",
        },
        {
          title: this.t("Completion has been achieved"),
          type: "strong",
          link: ``,
          key: "current_status",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
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

      return headersArray;
    },
    itemss() {
      return [
        { text: this.t("Deleted"), value: true },
        { text: this.t("Not deleted"), value: false },
      ];
    },
    Rules() {
      return {
        required: [(value) => !!value || this.t("This field is required")],
      };
    },
  },
  watch: {
    date_to_work(val) {
      if (val) {
        const isoDate = val.toISOString();
        this.isoDatee = isoDate;
      }
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
        const response = await adminApi.getReservationsService({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          is_deleted: this.is_deleted,
          sortBy: sortByJSON,
          type: "شحن",
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
    async getMaintenanceEmployee(newOptions) {
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

      try {
        const response = await adminApi.getMaintenanceEmployee({
          page: 1,
          limit: 999999999999,
          search: null,
          is_deleted: false,
          sortBy: sortByJSON,
        });
        this.Employees = response.data.results.data;
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

    // ConfirmIteme
    format(date) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      return new Intl.DateTimeFormat("en-EG", options).format(date);
    },
    ConfirmIteme(item) {
      this.dialogConfirmIteme.deletedItem = { ...item };
      this.dialogConfirmIteme.open = true;
    },
    async ConfirmItemeItemConfirm() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogConfirmIteme.loading = true;
        try {
          const response = await adminApi.acceptService({
            id: this.dialogConfirmIteme.deletedItem._id,
            employee_id: null,
            date_to_work: null,
            note: this.note,
          });
          this.dialogConfirmIteme.loading = false;
          this.dialogConfirmIteme.open = false;
          this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.dialogConfirmIteme.loading = false;
            this.dialogConfirmIteme.open = false;
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogConfirmIteme.loading = false;
            this.dialogConfirmIteme.open = false;
            this.showDialogfunction(error.response.data.results, "#FF5252");
          }
        } finally {
          this.dialogConfirmIteme.loading = false;
          this.dialogConfirmIteme.open = false;
        }
      }
    },
    // ConfirmIteme

    // RejectIteme
    RejectIteme(item) {
      this.dialogRejectIteme.deletedItem = { ...item };
      this.dialogRejectIteme.open = true;
    },
    async RejectItemeConfirm() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogRejectIteme.loading = true;
        try {
          const response = await adminApi.rejectService({
            id: this.dialogRejectIteme.deletedItem._id,
            reason_to_reject: this.dialogRejectIteme.reason_to_reject,
            note: this.dialogRejectIteme.note,
          });
          this.dialogRejectIteme.loading = false;
          this.dialogRejectIteme.open = false;
          this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.dialogRejectIteme.loading = false;
            this.dialogRejectIteme.open = false;
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogRejectIteme.loading = false;
            this.dialogRejectIteme.open = false;
            this.showDialogfunction(error.response.data.results, "#FF5252");
          }
        } finally {
          this.dialogRejectIteme.loading = false;
          this.dialogRejectIteme.open = false;
        }
      }
    },
    // RejectIteme

    // FinishIteme
    FinishIteme(item) {
      this.dialogFinishIteme.deletedItem = { ...item };
      this.dialogFinishIteme.open = true;
    },
    async FinishItemeConfirm() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogFinishIteme.loading = true;
        try {
          const response = await adminApi.FinishService({
            id: this.dialogFinishIteme.deletedItem._id,
            note: this.dialogFinishIteme.note,
          });
          this.dialogFinishIteme.loading = false;
          this.dialogFinishIteme.open = false;
          this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.dialogFinishIteme.loading = false;
            this.dialogFinishIteme.open = false;
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogFinishIteme.loading = false;
            this.dialogFinishIteme.open = false;
            this.showDialogfunction(error.response.data.results, "#FF5252");
          }
        } finally {
          this.dialogFinishIteme.loading = false;
          this.dialogFinishIteme.open = false;
        }
      }
    },
    // RejectIteme

    // printItem
    printItem(item) {
      localStorage.setItem("PrintServiceBookings", JSON.stringify(item));
      let routeData = this.$router.resolve({
        name: `admin-print-service-bookings`,
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
