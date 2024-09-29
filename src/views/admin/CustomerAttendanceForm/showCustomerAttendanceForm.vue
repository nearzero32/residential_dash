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
          <VCol cols="12" md="6">
            <VBtn
              tile
              color="success"
              prepend-icon="fa-download"
              :loading="xlsxData.listLoading"
              @click="getAllDataAxios"
            >
              {{ t("Download Excel") }}
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

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
          @editItems="editItem"
          @emitPrintItems="printItem"
        />
      </VCardText>
    </VCard>

    <!-- Edit Class Dialog -->
    <VDialog v-model="dialogEdit.open" max-width="800px" max-height="100%">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Edit") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.caller_name"
                    :rules="Rules.name"
                    :label="t('Customer name')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.caller_phone"
                    :rules="Rules.phone"
                    :label="t(`Customer's phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.caller_job"
                    :rules="Rules.password_show"
                    :label="t(`Customer's occupation`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.caller_address"
                    :rules="Rules.address"
                    :label="t('Customer address')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.caller_family_members"
                    :rules="Rules.salary"
                    :label="t('Number of family members of the customer')"
                    outlined
                    @keypress="isNumber($event)"
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    variant="outlined"
                    v-model="dialogEdit.editedItem.how_he_hear_about_us"
                    color="primary"
                    :label="t('Number of family members of the customer')"
                    outlined
                    :items="how_u_hear_about_us"
                    :rules="Rules.how_he_hear_about_us"
                    item-title="name"
                    item-value="name"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.space_required"
                    :rules="Rules.space_required"
                    :label="t('Required space')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.call_reason"
                    :rules="Rules.call_reason"
                    :label="t('Call results')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    variant="outlined"
                    v-model="dialogEdit.editedItem.form_id"
                    color="primary"
                    :label="t('Form name')"
                    outlined
                    :items="forms"
                    :rules="Rules.form_id"
                    item-title="name"
                    item-value="_id"
                  ></VAutocomplete>
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="dialogEdit.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="dialogEdit.loading"
            @click="editItemConform"
          >
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

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
        title: "Customer attendance form",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Customer attendance form",
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
        actions: ["تعديل", "طباعة"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // dialogEdit
      how_u_hear_about_us: [],
      forms: [],
      dialogEdit: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit

      // xlsx
      xlsxData: {
        allData: [],
        listLoading: false,
        filename: `استمارة حضور زبون.xlsx`,
      },
      // xlsx

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
    this.getHowUHearAboutUs();
    this.getForms();
  },
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11)
              return this.t("Phone number must be 11 digits");
            return true;
          },
        ],
        password_show: [(value) => !!value || this.t("This field is required")],
        address: [(value) => !!value || this.t("This field is required")],
        form_id: [(value) => !!value || this.t("This field is required")],
        space_required: [
          (value) => !!value || this.t("This field is required"),
        ],
        call_reason: [(value) => !!value || this.t("This field is required")],
        how_he_hear_about_us: [
          (value) => !!value || this.t("This field is required"),
        ],
        salary: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (isNaN(value)) return this.t("Please enter a valid number");
            return true;
          },
        ],
      };
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
          type: "link",
          link: `/admin-profile-customer-attendance-form`,
          key: "caller_name",
        },
        {
          title: this.t("Customer's occupation"),
          type: "strong",
          link: ``,
          key: "caller_job",
        },
        {
          title: this.t("Customer's phone number"),
          type: "strong",
          link: ``,
          key: "caller_phone",
        },
        {
          title: this.t("Province"),
          type: "strong",
          link: ``,
          key: "caller_governorate",
        },
        {
          title: this.t("Customer address"),
          type: "strong",
          link: ``,
          key: "caller_address",
        },
        {
          title: this.t("Number of family members of the customer"),
          type: "strong",
          link: ``,
          key: "caller_family_members",
        },
        {
          title: this.t("How did you hear about us"),
          type: "strong",
          link: ``,
          key: "how_he_hear_about_us",
        },
        {
          title: this.t("Required space"),
          type: "strong",
          link: ``,
          key: "space_required",
        },
        {
          title: this.t("Form name"),
          type: "strong",
          link: ``,
          key: "form_name",
        },
        {
          title: this.t("The employee who followed him"),
          type: "current_employeeName",
          link: ``,
          key: "current_employeeName",
        },
        {
          title: this.t("Form Date"),
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
        const response = await adminApi.getCallCenter({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_available: this.is_available,
          existing_type: this.existing_type,
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
    async getHowUHearAboutUs() {
      try {
        const response = await adminApi.getHowUHearAboutUs({
          page: 1,
          limit: 10000000000,
        });

        this.how_u_hear_about_us = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async getForms() {
      try {
        const response = await adminApi.getFormsSelect();

        this.forms = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // Get Data

    // editItem
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editCallCenter({
            id: this.dialogEdit.editedItem._id,
            caller_name: this.dialogEdit.editedItem.caller_name,
            caller_phone: this.dialogEdit.editedItem.caller_phone,
            caller_job: this.dialogEdit.editedItem.caller_job,
            caller_address: this.dialogEdit.editedItem.caller_address,
            caller_family_members:
              this.dialogEdit.editedItem.caller_family_members,
            how_he_hear_about_us:
              this.dialogEdit.editedItem.how_he_hear_about_us,
            space_required: this.dialogEdit.editedItem.space_required,
            call_reason: this.dialogEdit.editedItem.call_reason,
            form_id: this.dialogEdit.editedItem.form_id,
          });

          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.results, "#FF5252");
          }
        } finally {
          this.dialogEdit.loading = false;
        }
      }
    },
    // editItem

    // Download Excel
    async getAllDataAxios() {
      this.xlsxData.listLoading = true;
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
        const response = await adminApi.getCallCenter({
          page: 1,
          limit: 10000000000,
          sortBy: sortByJSON,
          search: null,
          is_available: this.is_available,
          existing_type: this.existing_type,
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
        "أسم الزبون",
        "وظيفة الزبون",
        "هاتف الزبون",
        "عنوان الزبون",
        "أفراد عائلة الزبون",
        "كيف سمع عنا",
        "تاريخ الاستمارة",
        "المساحة المطلوبة",
        "اسم النموذج",
        "الموظف الذي تبعه",
      ];

      const dataForExcel = [
        header,
        ...this.xlsxData.allData.map((item) => [
          item.caller_name,
          item.caller_job,
          item.caller_phone,
          item.caller_address,
          item.caller_family_members,
          item.how_he_hear_about_us,
          item.createdAt,
          item.space_required,
          item.form_name,
          item.current_employee.name,
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

    // printItem
    printItem(item) {
      localStorage.setItem("CustomerAttendanceForm", JSON.stringify(item));
      let routeData = this.$router.resolve({
        name: `admin-print-customer-attendance-form`,
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
