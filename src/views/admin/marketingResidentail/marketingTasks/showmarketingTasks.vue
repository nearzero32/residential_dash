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
      <VCardTitle style="text-align: center">{{ t("Filter") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="4">
            <VAutocomplete
              v-model="is_finished"
              label="الحالة"
              :items="items_is_finished"
              item-title="title"
              item-value="value"
              @update:modelValue="getCenter"
              @click:clear="is_finished = null"
              clearable
            ></VAutocomplete>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="12">
            <VBtn
              tile
              style="margin-inline: 10px"
              color="primary"
              prepend-icon="mdi-plus"
              @click="addDialog.open = true"
              v-if="userData.includes('add')"
            >
              {{ t("Addition") }}
            </VBtn>
            <VBtn
              tile
              style="margin-inline: 10px"
              color="primary"
              prepend-icon="mdi-plus"
              @click="addExcelDialog.open = true"
              v-if="userData.includes('add')"
            >
              إضافة ملف اكسل
            </VBtn>
            <VBtn
              style="margin-inline: 10px"
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
          @deleteItems="deleteItem"
          @editItems="editItem"
          @empSendNotificationsIteme="SendNotificationsIteme"
        />
      </VCardText>
    </VCard>

    <!-- Add Excel Class Dialog -->
    <VDialog v-model="addExcelDialog.open" max-width="800px">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Addition") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="6">
                  <VFileInput
                    v-model="data.excelFile"
                    label="اختيار ملف اكسل"
                    outlined
                    accept=".xls,.xlsx"
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.employee_ids"
                    :rules="Rules.required"
                    label="الموظف"
                    :items="itemss"
                    item-title="name"
                    item-value="_id"
                    multiple
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <strong
                    >يجب ان يحتوي ملف الاكسل على هذه الاعمدة فقط كما موضح في الصورة في
                    الاسفل</strong
                  >
                  <br />
                  <br />
                  <img :src="exle" style="width: 100%" alt="" />
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="addExcelDialog.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="addExcelDialog.saveLoading"
            @click="addExcelCenter"
          >
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Add Excel Class Dialog -->

    <!-- Add Class Dialog -->
    <VDialog v-model="addDialog.open" max-width="800px">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Addition") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.customer_name"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.customer_phone"
                    :rules="Rules.requiredPhone"
                    :label="t(`Phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.employee_id"
                    :rules="Rules.required"
                    label="الموظف"
                    :items="itemss"
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
          <VBtn color="primary" text @click="addDialog.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn color="primary" :loading="addDialog.saveLoading" @click="addCenter">
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Add Class Dialog -->

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
                    v-model="dialogEdit.editedItem.customer_name"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.customer_phone"
                    :rules="Rules.requiredPhone"
                    :label="t(`Phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.employee_id"
                    :rules="Rules.required"
                    label="الموظف"
                    :items="itemss"
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
          <VBtn color="primary" :loading="dialogEdit.loading" @click="editItemConform">
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- dialogSendNotifications Dialog -->
    <VDialog v-model="dialogSendNotifications.open" max-width="800px" max-height="100%">
      <VCard>
        <VCardTitle>
          <span class="headline">ارسال اشعار</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="12">
                  <VTextField
                    v-model="dialogSendNotifications.Item.title"
                    :rules="Rules.required"
                    label="العنوان"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <VTextarea
                    v-model="dialogSendNotifications.Item.body"
                    :rules="Rules.required"
                    label="التفاصيل"
                    outlined
                  />
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="dialogSendNotifications.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="dialogSendNotifications.loading"
            @click="SendNotificationsConform"
          >
            ارسال اشعار
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- Delete Dialog -->
    <VDialog v-model="dialogDelete.open" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure you want to delete?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogDelete.loading"
            @click="deleteItemConfirm"
          >
            {{ t("Delete") }}
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
import numberWithComma from "@/constant/number";
import exle from "@/assets/exle.png";
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
        title: "Marketing Staff Tasks",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Marketing Staff Tasks",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      exle,
      // table
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      residential_id: null,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["حذف", "تعديل", "ارسال اشعار"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      items_is_finished: [
        {
          title: "الكل",
          value: null,
        },
        {
          title: "منتهي",
          value: true,
        },
        {
          title: "غير منتهي",
          value: false,
        },
      ],
      is_finished: null,

      // xlsx
      xlsxData: {
        allData: [],
        listLoading: false,
        filename: `مهام موظفين التسويق.xlsx`,
      },
      // xlsx

      // add
      addDialog: {
        open: false,
        saveLoading: false,
      },
      addExcelDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        customer_name: null,
        customer_phone: null,
        employee_id: null,
        excelFile: null,
        employee_ids: [],
      },
      itemss: [],
      // add

      // dialogSendNotifications
      dialogSendNotifications: {
        open: false,
        Item: {
          title: "الرجاء الإسراع باكمال المهمة",
          body: "",
          employee_id: null,
        },
        isFormValid: false,
        loading: false,
      },
      // dialogSendNotifications

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
    this.getUnits();
  },
  computed: {
    Rules() {
      return {
        required: [(value) => !!value || this.t("This field is required")],
        requiredPhone: [
          (value) => !!value || this.t("This field is required"),
          (value) => /^\d+$/.test(value) || "يجب ان يكون رقم فقط",
          (value) => value.length === 11 || "يجب ان يكون 11 رقما",
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
          title: this.t("The name"),
          type: "strong",
          link: ``,
          key: "customer_name",
        },
        {
          title: this.t("Phone number"),
          type: "strong",
          link: ``,
          key: "customer_phone",
        },
        {
          title: "منتهي",
          type: "strong",
          link: ``,
          key: "is_finished",
        },
        {
          title: "مهتم",
          type: "strong",
          link: ``,
          key: "is_customer_interested",
        },
        {
          title: "يبحث عن قرض عقاري",
          type: "strong",
          link: ``,
          key: "is_customer_locking_for_loan",
        },
        {
          title: "المبلغ",
          type: "strong",
          link: ``,
          key: "customter_price",
        },
        {
          title: "المجمع",
          type: "strong",
          link: ``,
          key: "complex_names",
        },
        {
          title: "الملاحظه",
          type: "strong",
          link: ``,
          key: "note",
        },
        {
          title: "اسم الموظف",
          type: "strong",
          link: ``,
          key: "employee_name",
        },
        {
          title: "التاريخ",
          type: "strong",
          link: ``,
          key: "createdAt",
        },
        {
          title: "تاريخ الانتهاء",
          type: "strong",
          link: ``,
          key: "finish_date",
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
        const response = await adminApi.getMarketingTasks({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          sortBy: sortByJSON,
          is_finished: this.is_finished,
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
    async getUnits() {
      try {
        const response = await adminApi.getSellsEmployee({
          page: 1,
          limit: 99999999999999,
          search: null,
          is_deleted: false,
          sortBy: '{"key": "createdAt", "order": "desc"}',
        });
        this.itemss = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // Get Data

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
        const response = await adminApi.getMarketingTasks({
          page: 1,
          limit: 999999999999999,
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
        } else if (error.response && error.response.data.error === true) {
          this.xlsxData.downloadLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.xlsxData.listLoading = false;
      }
    },
    async handleDownload() {
      const header = [
        "الأسم",
        "رقم الهاتف",
        "منتهي",
        "مهتم",
        "يبحث عن قرض عقاري",
        "المبلغ",
        "المجمع",
        "الملاحظه",
        "اسم الموظف",
        "التاريخ",
        "تاريخ الانتهاء",
      ];

      const dataForExcel = [
        header,
        ...this.xlsxData.allData.map((item) => [
          item.customer_name,
          item.customer_phone,
          item.is_finished ? "نعم" : "كلا",
          item.is_customer_interested ? "نعم" : "كلا",
          item.is_customer_locking_for_loan ? "نعم" : "كلا",
          this.numberWithComma(item.customter_price),
          item.complex_names,
          item.note,
          item.employee_name,
          item.createdAt,
          item.finish_date,
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

    // Add Data Excel
    async addExcelCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        if (!this.data.excelFile) {
          this.showDialogfunction("يرجى تحميل ملف Excel", "#FF5252");
          return;
        }
        this.addExcelDialog.saveLoading = true;

        const formData = new FormData();
        formData.append("data", this.data.excelFile[0]);

        this.data.employee_ids.forEach((id) => {
          formData.append("employee_ids[]", id);
        });

        try {
          const response = await adminApi.addExcelMarketingTasks(formData);

          this.addExcelDialog.saveLoading = false;
          await this.getCenter();
          this.addExcelDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
          this.data.excelFile = null;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addExcelDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.addExcelDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addExcelDialog.saveLoading = false;
        }
      }
    },
    // Add Data Excel

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addMarketingTasks({
            customer_name: this.data.customer_name,
            customer_phone: this.data.customer_phone,
            employee_id: this.data.employee_id,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
          this.data.customer_name = null;
          this.data.customer_phone = null;
          this.data.employee_id = null;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // SendNotificationsIteme
    SendNotificationsIteme(item) {
      this.dialogSendNotifications.Item.employee_id = item._id;
      this.dialogSendNotifications.open = true;
    },
    async SendNotificationsConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogSendNotifications.loading = true;

        try {
          const response = await adminApi.SendNotifications({
            title: this.dialogSendNotifications.Item.title,
            body: this.dialogSendNotifications.Item.body,
            account_id: this.dialogSendNotifications.Item.employee_id,
          });

          this.dialogSendNotifications.open = false;
          this.dialogSendNotifications.loading = false;
          this.getCenter();
          this.dialogSendNotifications.Item.title = "الرجاء الإسراع باكمال المهمة";
          this.dialogSendNotifications.Item.body = null;
          this.dialogSendNotifications.Item.employee_id = null;
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogSendNotifications.open = false;
            this.dialogSendNotifications.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.dialogSendNotifications.open = false;
            this.dialogSendNotifications.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.dialogSendNotifications.loading = false;
        }
      }
    },
    // SendNotificationsIteme

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
          const response = await adminApi.editMarketingTasks({
            id: this.dialogEdit.editedItem._id,
            customer_name: this.dialogEdit.editedItem.customer_name,
            customer_phone: this.dialogEdit.editedItem.customer_phone,
            employee_id: this.dialogEdit.editedItem.employee_id,
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
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.dialogEdit.loading = false;
        }
      }
    },
    // editItem

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.removeMarketingTasks(
          this.dialogDelete.deletedItem._id
        );
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
      }
    },
    // deleteItem

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
