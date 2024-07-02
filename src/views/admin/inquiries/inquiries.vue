<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-card>
          <v-card-title>
            <v-btn
              color="primary"
              v-if="userData.includes('add')"
              text
              class="ml-auto"
              @click="dialog = true"
            >
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة 
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              outlined
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            :items="table.centers"
            :options.sync="tableOptions"
            :server-items-length="table.totalItems"
            :loading="table.loading"
            class="elevation-1"
            no-results-text="لا توجد بيانات !"
            @update:options="getCenter"
          >
            <template v-slot:item.num="{ item }">
              {{ table.centers.indexOf(item) + 1 }}
            </template>
            <template v-slot:item.actions="{ item }">
              <VTooltip bottom v-if="userData.includes('edit')">
                <template #activator="{ attrs }">
                  <v-icon
                    color="rgb(243 216 1)"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </v-icon>
                </template>
                <span>تعديل</span>
              </VTooltip>
              <VTooltip bottom v-if="userData.includes('remove')">
                <template #activator="{ attrs }">
                  <v-icon
                    color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="deleteItem(item)"
                  >
                    mdi-delete-restore
                  </v-icon>
                </template>
                <span>حذف</span>
              </VTooltip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة </v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المتصل</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.nameRules"
                    v-model="data.name"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    v-model="data.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >موظف المبيعات</v-label
                  >
                  <v-autocomplete
                    v-model="data.employee_id"
                    :rules="Rules.employee_id"
                    :items="action"
                    outlined
                    item-text="name"
                    item-value="_id"
                    attach
                    label="موظف المبيعات"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions>
                <v-btn
                  size="large"
                  @click="addCenter"
                  :loading="addBtnLoading"
                  color="primary"
                  :disabled="!isFormvalid"
                  type="submit"
                  text
                  >اٍضافة</v-btn
                >
                <v-btn
                  class="bg-lighterror text-error ml-4"
                  @click="dialog = false"
                  text
                  >أغلاق</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- add -->

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل </v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المتصل</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.nameRules"
                    v-model="editdItem.name"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    v-model="editdItem.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >موظف المبيعات</v-label
                  >
                  <v-autocomplete
                    v-model="editdItem.employee_id"
                    :rules="Rules.employee_id"
                    :items="action"
                    outlined
                    item-text="name"
                    item-value="_id"
                    attach
                    label="موظف المبيعات"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <br />
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions>
                <v-btn
                  size="large"
                  @click="editItemConfirm"
                  :loading="editItemLoading"
                  :disabled="!isFormvalid"
                  color="primary"
                  type="submit"
                  text
                  >تعديل</v-btn
                >
                <v-btn color="primary" text @click="dialogEdit = false">
                  الغاء
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من هذا الحذف ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            حذف
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End delete dailog -->
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      userDataString: null,

      // nav
      page: {
        title: "الاستعلامات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الاستعلامات",
          disabled: true,
        },
      ],
      // nav
      // table
      table: {
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "أسم المتصل", value: "name" },
          { text: "رقم الهاتف", value: "phone" },
          { text: "اسم موظف المبيعات", value: "employee_name" },
          { text: "العمليات", value: "actions" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
      },
      // table
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // add
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      data: {
        name: null,
        title_jop: null,
        phone: null,
        salary: null,
        address: null,
      },
      action: [],
      Rules: {
        nameRules: [(v) => !!v || "يرجى إدخال اسم المتصل"],
        title_jop: [(v) => !!v || "يرجى أختيار العنوان الوظيفي"],
        salary: [(v) => !!v || "يرجى تحديد الراتب"],
        phoneRules: [
          (v) => !!v || "يرجى إدخال رقم الهاتف",
          (v) =>
            (v && /^[0-9]{11}$/.test(v)) ||
            "يرجى إدخال رقم هاتف صحيح (11 أرقام)",
        ],
        employee_id: [(v) => !!v || "الحقل مطلوب"],
      },
      // add
      // edit
      editItemLoading: false,
      dialogEdit: false,
      editdItem: {},
      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        const key = "createdAt";
        const order = "desc";

        const sortByJSON = JSON.stringify({ key, order });

        const response = await API.getSellsEmployee({
          page: 1,
          limit: 1000000000000,
          sortBy: sortByJSON,
          search: null,
          is_deleted: false,
        });
        this.action = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async getCenter() {
      try {
        this.table.loading = true;
        const key =
          this.tableOptions.sortBy.length > 0
            ? this.tableOptions.sortBy[0]
            : "createdAt";
        const order =
          this.tableOptions.sortDesc.length > 0
            ? this.tableOptions.sortDesc[0]
              ? "desc"
              : "asc"
            : "desc";

        const sortByJSON = JSON.stringify({ key, order });

        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
        const response = await API.getInquiries({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          sortBy: sortByJSON,
        });

        this.table.centers = response.data.results.data;
        this.table.totalItems = response.data.results.count;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    async addCenter(event) {
      event.preventDefault();

      this.addBtnLoading = true;
      try {
        const response = await API.addInquiries({
          name: this.data.name,
          phone: this.data.phone,
          employee_id: this.data.employee_id,
        });

        this.addBtnLoading = false;
        this.data.name = null;
        this.data.phone = null;
        this.data.employee_id = null;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.dialog = false;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    editItem(item) {
      this.editdItem = { ...item };
      this.dialogEdit = true;
    },

    async editItemConfirm(event) {
      event.preventDefault();

      this.editItemLoading = true;
      try {
        const response = await API.editInquiries({
          emp_id: this.editdItem._id,
          name: this.editdItem.name,
          phone: this.editdItem.phone,
          employee_id: this.editdItem.employee_id,
        });
        this.editItemLoading = false;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.dialogEdit = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeInquiries(this.deletedItem._id);

        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
  },
};
</script>
