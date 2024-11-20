<template>
  <div>
    <VCard class="primary-shade--light pa-3">
      <h1 class="text-center subtitle-4 black--text">{{ t("المصاريف") }}</h1>
      <VRow>
        <VCol cols="12">
          <VBtn
            tile
            color="warning"
            class="ml-2 mb-4 mb-md-0 mb-sm-0"
            append-icon="fa-plus"
            :block="isScreenXs"
            @click="addDialog.open = true"
          >
            {{ t("اضافة صرف") }}
          </VBtn>
          <VBtn
            tile
            color="success"
            :loading="xlsxData.downloadLoading"
            class="ml-2 mb-4 mb-md-0 mb-sm-0"
            append-icon="fa-download"
            :block="isScreenXs"
            @click="getAllDataAxios"
          >
            {{ t("تحميل اكسل") }}
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol md="4" cols="12">
          <VLabel>{{ t("من") }}</VLabel>
          <AppDateTimePicker
            v-model="tableModifier.start_date"
            density="compact"
            clearable
          />
          <DemoDateTimePickerBasic />
        </VCol>
        <VCol md="4" cols="12">
          <VLabel>{{ t("الى") }}</VLabel>
          <AppDateTimePicker
            v-model="tableModifier.end_date"
            density="compact"
            clearable
          />
          <DemoDateTimePickerBasic />
        </VCol>
        <VSpacer />
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
                    {{ index + 1 }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("نوع الصرف") }}</div>
                  <div class="l">
                    {{ item.selectable.service_name }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("المبلغ") }}</div>
                  <div class="l">
                    {{ numberWithComma(item.selectable.money) }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("التاريخ") }}</div>
                  <div class="l">
                    {{ item.selectable.date }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("مستلم الفاتورة") }}</div>
                  <div class="l">
                    {{ item.selectable.invoice_receiver }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("رقم الوصل") }}</div>
                  <div class="l">
                    {{ item.selectable.invoice_number }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("الملاحظة") }}</div>
                  <div class="l">
                    {{ item.selectable.note }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("العمليات") }}</div>
                  <div class="l">
                    <VTooltip bottom>
                      <template #activator="{ props }">
                        <VIcon
                          style="margin-inline: 5px"
                          color="primary"
                          v-bind="props"
                          size="20"
                          @click="editItem(item.selectable)"
                        >
                          fa-edit
                        </VIcon>
                      </template>
                      <span>{{ t("تعديل") }}</span>
                    </VTooltip>
                    <VTooltip bottom>
                      <template #activator="{ props }">
                        <VIcon
                          style="margin-inline: 5px"
                          color="#FF5252"
                          v-bind="props"
                          size="20"
                          @click="deleteItem(item.selectable)"
                        >
                          mdi-delete-restore
                        </VIcon>
                      </template>
                      <span>{{ t("حذف") }}</span>
                    </VTooltip>
                  </div>
                </td>
              </tr>
              <hr />
            </template>
            <template v-else #item.actions="{ item }">
              <VTooltip bottom>
                <template #activator="{ props }">
                  <VIcon
                    style="margin-inline: 5px"
                    color="primary"
                    v-bind="props"
                    size="20"
                    @click="editItem(item.selectable)"
                  >
                    fa-edit
                  </VIcon>
                </template>
                <span>{{ t("تعديل") }}</span>
              </VTooltip>
              <VTooltip bottom>
                <template #activator="{ props }">
                  <VIcon
                    style="margin-inline: 5px"
                    color="#FF5252"
                    v-bind="props"
                    size="20"
                    @click="deleteItem(item.selectable)"
                  >
                    mdi-delete-restore
                  </VIcon>
                </template>
                <span>{{ t("حذف") }}</span>
              </VTooltip>
            </template>
            <template v-if="!isMobile" #item.num="{ index }">
              {{ index + 1 }}
            </template>
            <template v-if="!isMobile" #item.money="{ item }">
              {{ numberWithComma(item.selectable.money) }}
            </template>
          </VDataTableServer>
        </VCol>
      </VRow>
    </VCard>
    <!-- add dialog -->
    <v-dialog v-model="addDialog.open" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ t("إضافة") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model="addData.expenses_name"
                    :rules="rules.expenses_name"
                    :loading="ownerLoading"
                    :items="servicesData"
                    item-title="name"
                    item-value="_id"
                    clearable
                    outlined
                    dense
                    :label="t('نوع الصرف')"
                    @click:clear="addData.expenses_name = null"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="addDataMoney"
                    :label="t('المبلغ')"
                    :rules="rules.money"
                    outlined
                    required
                    @keypress="isNumber($event)"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    type="date"
                    show-adjacent-months
                    v-model="addData.date"
                    :rules="rules.date"
                    density="compact"
                    :label="t('التاريخ')"
                  />
                  <DemoDateTimePickerBasic />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="addData.invoice_number"
                    :label="t('رقم الوصل')"
                    outlined
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="addData.invoice_receiver"
                    :label="t('مستلم الفاتورة')"
                    outlined
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    rows="2"
                    row-height="10"
                    v-model="addData.note"
                    :label="t('الملاحظة')"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="ml-3">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addDialog.open = false">
            {{ t("الغاء") }}
          </v-btn>
          <v-btn
            color="primary"
            :loading="addDialog.loading"
            @click="addownerBillsData"
          >
            {{ t("إضافة") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- add Class dialog -->

    <!-- edit Class dialog -->
    <v-dialog v-model="dialogEdit.open" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ t("تعديل") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model="editedItem.expenses_name"
                    :rules="rules.expenses_name"
                    :loading="ownerLoading"
                    :items="servicesData"
                    item-title="name"
                    item-value="_id"
                    clearable
                    outlined
                    dense
                    :label="t('نوع الصرف')"
                    @click:clear="editedItem.expenses_name = null"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItemMoney"
                    :label="t('المبلغ')"
                    :rules="rules.money"
                    outlined
                    required
                    @keypress="isNumber($event)"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    type="date"
                    show-adjacent-months
                    v-model="editedItem.date"
                    :rules="rules.date"
                    density="compact"
                    :label="t('التاريخ')"
                  />
                  <DemoDateTimePickerBasic />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.invoice_number"
                    :label="t('رقم الوصل')"
                    outlined
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="editedItem.invoice_receiver"
                    :label="t('مستلم الفاتورة')"
                    outlined
                    required
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    rows="4"
                    row-height="20"
                    v-model="editedItem.note"
                    :label="t('الملاحظة')"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="ml-3">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogEdit.open = false">
            {{ t("الغاء") }}
          </v-btn>
          <v-btn
            color="primary"
            :loading="dialogEdit.loading"
            @click="editItemConform"
          >
            {{ t("تعديل") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- edit Class dialog -->

    <!-- delete dialog -->
    <VDialog v-model="dialogDelete" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("هل أنت متأكد أنك تريد الحذف؟") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete = false">
            {{ t("الغاء") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            {{ t("حذف") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- delete dialog -->

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
            {{ t("انهاء") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import expenses_api from "@/api/expenses_api";
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import * as XLSX from "xlsx";
import { useI18n } from "vue-i18n";

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
        filename: "المصاريف.xlsx",
      },
      // xlsx

      // tableModifier
      tableModifier: {
        start_date: null,
        end_date: null,
        isDeleted: false,
      },

      // tableModifier

      // add
      addDialog: {
        open: false,
        isFormValidAdd: false,
        saveLoading: false,
        loading: false,
      },
      addData: {
        expenses_name: null,
        money: null,
        date: getCurrentDateInString(),
        note: null,
        invoice_number: null,
        all_money: null,
        invoice_receiver: null,
        exchange_rate: null,
        is_dollar: false,
        money_type: "عراقي",
      },
      // add

      // Delete
      deletedItem: {},
      dialogDelete: false,
      deleteItemLoading: false,

      // Delete

      // dialogData
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // dialogData

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
          title: this.t("نوع الصرف"),
          sortable: false,
          key: "service_name",
        },
        { title: this.t("المبلغ"), key: "money" },
        { title: this.t("التاريخ"), sortable: false, key: "date" },
        {
          title: this.t("مستلم الفاتورة"),
          sortable: false,
          key: "invoice_receiver",
        },
        { title: this.t("رقم الوصل"), sortable: false, key: "invoice_number" },
        { title: this.t("الملاحظة"), sortable: false, key: "note" },
        {
          title: this.t("العمليات"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
    rules() {
      return {
        expenses_name: [(value) => !!value || this.t("الحقل مطلوب")],
        money: [(value) => !!value || this.t("الحقل مطلوب")],
        date: [(value) => !!value || this.t("الحقل مطلوب")],
      };
    },
    addDataMoney: {
      get() {
        if (this.addData.money === null) {
          return "";
        }
        return this.addData.money
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      set(value) {
        const numValue = value.replace(/,/g, "");
        this.addData.money = numValue;
      },
    },
    editedItemMoney: {
      get() {
        if (this.editedItem.money === null) {
          return "";
        }
        return this.editedItem.money
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      set(value) {
        const numValue = value.replace(/,/g, "");
        this.editedItem.money = numValue;
      },
    },
  },
  watch: {
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
    this.getServicesExpenses();
  },
  methods: {
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

      const response = await expenses_api.get({
        start_date: this.tableModifier.start_date,
        end_date: this.tableModifier.end_date,
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
    // getData

    // add
    async addownerBillsData() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.addDialog.loading = true;

        const response = await expenses_api.add({
          expenses_name: this.addData.expenses_name,
          money: this.addData.money,
          date: this.addData.date,
          invoice_number: this.addData.invoice_number,
          invoice_receiver: this.addData.invoice_receiver,
          is_dollar: this.addData.money_type === "دولار" ? true : false,
          exchange_rate: this.addData.exchange_rate,
          note: this.addData.note,
        });

        if (response.status === 200 && response.data.error == true) {
          this.showDialogfunction(response.data.results, "#FF5252");
        }
        if (response.status === 401) {
          this.addDialog.loading = false;
          this.addDialog.open = false;
          this.$store.dispatch("submitLogout");
        } else if (response.status === 500) {
          this.addDialog.loading = false;
          this.addDialog.open = false;
          this.showDialogfunction(response.data.results, "#FF5252");
        } else {
          this.addDialog.loading = false;
          this.addDialog.open = false;

          // set addData to null
          this.addData.expenses_name = null;
          this.addData.money = null;
          this.addData.date = getCurrentDateInString();
          this.addData.note = null;
          this.addData.invoice_number = null;
          this.addData.invoice_receiver = null;

          this.showDialogfunction(response.data.results, "primary");
          this.getDataAxios();
        }
      }
    },
    // add

    // goPage
    goToAddPage() {
      this.$router.push({ path: `/salariesShow/add` });
    },
    goToSalariesShowDiscountsPage() {
      this.$router.push("salariesShowDiscounts");
    },

    // goPage

    // delete
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      const response = await expenses_api.remove(this.deletedItem._id);

      if (response.status === 200 && response.data.error == true) {
        this.showDialogfunction(response.data.results, "#FF5252");
      }
      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.deleteItemLoading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getDataAxios();
        this.showDialogfunction(response.data.results, "primary");
      }
    },
    // delete

    // editItem
    editItem(item) {
      this.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.dialogEdit.open = true;
        this.dialogEdit.loading = true;

        const response = await expenses_api.edit({
          expenses_name: this.editedItem.expenses_name,
          money: this.editedItem.money,
          date: this.editedItem.date,
          note: this.editedItem.note,
          invoice_number: this.editedItem.invoice_number,
          invoice_receiver: this.editedItem.invoice_receiver,
          id: this.editedItem._id,
        });

        if (response.status === 200 && response.data.error == true) {
          this.showDialogfunction(response.data.results, "#FF5252");
        }
        if (response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (response.status === 500) {
          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
        } else {
          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.getDataAxios();
          this.showDialogfunction(response.data.results, "primary");
        }
      }
    },
    // editItem

    // getServicesExpenses
    async getServicesExpenses() {
      this.serviceLoading = true;

      const response = await expenses_api.getExpenses_api();

      if (response.status === 401) {
        this.serviceLoading = false;
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.serviceLoading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.serviceLoading = false;
        this.servicesData = response.data.results;
      }
    },
    // getServicesExpenses

    // Show Message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // Show Message

    // xlsxData
    async getAllDataAxios() {
      this.xlsxData.downloadLoading = true;

      let { search } = this.table;
      if (!search) {
        search = "";
      }

      const response = await expenses_api.get({
        start_date: this.tableModifier.start_date,
        end_date: this.tableModifier.end_date,
        page: 1,
        limit: 1000000000000,
        search,
      });

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.xlsxData.downloadLoading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.xlsxData.allData = response.data.results.data;
        this.handleDownload();
      }
    },
    async handleDownload() {
      const dataForExcel = [
        [
          this.t("نوع الصرف"),
          this.t("المبلغ"),
          this.t("التاريخ"),
          this.t("مستلم الفاتورة"),
          this.t("رقم الوصل"),
          this.t("الملاحظة"),
        ],
        ...this.xlsxData.allData.map((item) => [
          item.service_name,
          item.money,
          item.date,
          item.invoice_receiver,
          item.invoice_number,
          item.note,
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(dataForExcel);
      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      this.xlsxData.listLoading = false;

      XLSX.writeFile(wb, this.xlsxData.filename);
    },
    // xlsxData

    isNumber(evt) {
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keyPressed = evt.key;
      if (!keysAllowed.includes(keyPressed)) {
        evt.preventDefault();
      }
    },
    numberWithComma,
  },
};
</script>
