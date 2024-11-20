<template>
  <div class="team">
    <v-card class="primary-shade--light pa-3">
      <h1 class="text-center mb-3 subtitle-4 black--text">
        {{ t("انواع المصروفات") }}
      </h1>
      <v-row>
        <v-col md="3" sm="3" cols="12" align-self="center">
          <VBtn
            tile
            color="primary"
            class="ml-2 mb-4 mb-md-0 mb-sm-0"
            append-icon="fa-plus"
            :block="isScreenXs"
            @click="addDialog.open = true"
          >
            {{ t("اضافة نوع") }}
          </VBtn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col md="12" sm="12" cols="12">
          <VTextField
            v-model="table.search"
            :label="t('بحث')"
            prepend-inner-icon="fa-search"
            density="compact"
            outlined
            dense
            @input="getData"
          />
        </v-col>
      </v-row>
      <VRow>
        <VCol cols="12">
          <VDataTable
            :loading-text="t('جاري التحميل ... الرجاء الانتظار')"
            class="elevation-1"
            :headers="isMobile ? [] : headers"
            :items="table.Data"
            :search="table.search"
            :loading="table.loading"
            :items-length="table.totalItems"
            :no-data-text="t('لا توجد بيانات متاحة')"
            @update:options="getData"
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
                  <div class="r">{{ t("الاسم") }}</div>
                  <div class="l">
                    {{ item.selectable.name }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("الملاحظات") }}</div>
                  <div class="l">
                    {{ item.selectable.note }}
                  </div>
                </td>
                <td class="alll">
                  <div class="r">{{ t("إضيف بواسطة") }}</div>
                  <div class="l">
                    {{ item.selectable.insert_by_name }}
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
          </VDataTable>
        </VCol>
      </VRow>
    </v-card>

    <!-- add dialog -->
    <v-dialog v-model="addDialog.open" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ t("إضافة") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="addData.name"
                    :label="t('الاسم')"
                    :rules="rules.name"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="addData.note"
                    outlined
                    :label="t('الملاحظة')"
                    rows="3"
                    hide-details="auto"
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
            @click="addActionsData"
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
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.name"
                    :label="t('الاسم')"
                    :rules="rules.name"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="editedItem.note"
                    outlined
                    :label="t('الملاحظة')"
                    rows="3"
                    hide-details="auto"
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

    <!--- Dailog for show info to user-->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense></v-toolbar>
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogData.open = false">
            {{ t("انهاء") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          {{ t("هل أنت متأكد أنك تريد الحذف؟") }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogDelete = false">
            {{ t("الغاء") }}
          </v-btn>
          <v-btn
            color="primary"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            {{ t("حذف") }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script>
import expenses_api from "@/api/expenses_api";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";

export default {
  components: {
    VDataTable,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      addDialog: {
        open: false,
        isFormValidAdd: false,
        saveLoading: false,
        loading: false,
      },

      addData: {
        name: null,
        note: null,
      },

      deleteItemLoading: false,

      dialogDelete: false,

      editedItem: {},

      class_data: {
        selectedClass: null,
        class_school_leader: null,
      },

      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },

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
      },
      // table

      dialogEdit: {
        open: false,
        isFormValid: false,
        loading: false,
      },

      driversData: [],
      deleteItemLoading: false,
      dialogDelete: false,
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
        { title: this.t("الاسم"), sortable: false, key: "name" },
        { title: this.t("الملاحظة"), sortable: false, key: "note" },
        {
          title: this.t("إضيف بواسطة"),
          sortable: false,
          key: "insert_by_name",
        },
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
        name: [(value) => !!value || this.t("الحقل مطلوب")],
      };
    },
  },
  methods: {
    async getData() {
      this.table.loading = true;

      const response = await expenses_api.getExpenses_api();

      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.table.loading = false;
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.table.loading = false;
        this.table.Data = response.data.results;
        this.table.totalItems = response.data.results.length;
      }
    },

    async addActionsData() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.loading = true;

        const response = await expenses_api.addExpenses_api(
          this.addData.name,
          this.addData.note
        );

        if (response.status === 200 && response.data.error == true) {
          this.showDialogfunction(response.data.results, "#FF5252");
        }
        if (response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (response.status === 500) {
          this.addDialog.loading = false;
          this.addDialog.open = false;
          this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
        } else {
          this.addData.name = null;
          this.addData.note = null;

          this.addDialog.loading = false;
          this.addDialog.open = false;
          this.getData();
          this.showDialogfunction(response.data.results, "primary");
        }
      }
    },

    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      const response = await expenses_api.removeExpenses_api(
        this.deletedItem._id
      );

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
        this.getData();
        this.showDialogfunction(response.data.results, "primary");
      }
    },

    editItem(item) {
      this.editedItem = { ...item };
      this.dialogEdit.open = true;
    },

    async editItemConform() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.dialogEdit.loading = true;

        const response = await expenses_api.editExpenses_api(
          this.editedItem.name,
          this.editedItem.note,
          this.editedItem._id
        );

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
          this.getData();
          this.showDialogfunction(response.data.results, "primary");
        }
      }
    },

    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>
  
  <style>
.teacher_image_table {
  cursor: pointer;
}
</style>
  
  <style scoped>
a {
  text-decoration: none;
}
</style>
  