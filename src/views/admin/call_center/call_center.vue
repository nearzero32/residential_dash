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
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              outlined
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              tile
              color="success"
              :block="isScreenXs"
              @click="handleDownload"
            >
              تحميل اكسل <v-icon right> mdi-download </v-icon>
            </v-btn>
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
            <template v-slot:item.caller_name="{ item }">
              <router-link
                :to="`/admin-call_center_one/${item._id}/${item.caller_name}`"
                >{{ item.caller_name }}</router-link
              >
            </template>

            <template v-slot:item.actions="{ item }">
              <VTooltip bottom v-if="userData.includes('edit')">
                <template #activator="{ attrs }">
                  <v-icon
                    color="primary"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </v-icon>
                </template>
                <span>تعديل</span>
              </VTooltip>
              <VTooltip bottom>
                <template #activator="{ attrs }">
                  <v-icon
                    color="#fffc00"
                    v-bind="attrs"
                    size="20"
                    @click="Print(item)"
                  >
                    mdi-printer
                  </v-icon>
                </template>
                <span>طباعه</span>
              </VTooltip>
              <VTooltip bottom v-if="userData.includes('remove')">
                <template #activator="{ attrs }">
                  <v-icon
                    color="rgb(24, 86, 230)"
                    v-bind="attrs"
                    size="20"
                    @click="changeEmployee(item)"
                  >
                    mdi-swap-horizontal
                  </v-icon>
                </template>
                <span>نقل</span>
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
                  <v-label class="mb-2 font-weight-medium">أسم المتصل</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.caller_name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">هاتف المتصل</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.caller_phone"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >وظيفة المتصل</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.caller_job"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >عنوان المتصل</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.caller_address"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أفراد عائلة المتصل</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.caller_family_members"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >كيف يسمع عنا</v-label
                  >
                  <v-autocomplete
                    variant="outlined"
                    v-model="editdItem.how_he_hear_about_us"
                    color="primary"
                    outlined
                    :items="how_u_hear_about_us"
                    item-text="name"
                    item-value="name"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >المساحة المطلوبة</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.space_required"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >سبب المكالمة</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.call_reason"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">النموذج</v-label>
                  <v-autocomplete
                    variant="outlined"
                    v-model="editdItem.form_id"
                    color="primary"
                    outlined
                    :items="forms"
                    item-text="name"
                    item-value="_id"
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
          هل انت متأكد من الحذف ؟
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

    <!-- delete dialog -->
    <v-dialog v-model="dialogChangeEmployee" max-width="700px">
      <v-card>
        <v-card-title class="text-h5">نقل الى موظف اخر </v-card-title>
        <v-divider></v-divider>

        <v-card-text class="pb-0">
          <v-form v-model="isFormvalidChangeEmployee">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الموظف الحالي</v-label>
                <v-autocomplete
                  variant="outlined"
                  v-model="current_employee_id"
                  color="primary"
                  outlined
                  disabled
                  :items="Employees"
                  item-text="name"
                  item-value="_id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الموظف الجديد</v-label>
                <v-autocomplete
                  variant="outlined"
                  v-model="new_employee_id"
                  :rules="Rules.new_employee_id"
                  color="primary"
                  outlined
                  :items="filteredEmployees"
                  item-text="name"
                  item-value="_id"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogChangeEmployee = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :disabled="!isFormvalidChangeEmployee"
            :loading="ChangeEmployeeItemLoading"
            @click="changeEmployeeItemConfirm"
          >
            نقل
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
        title: "أستفسارات الزبائن",
      },

      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "أستفسارات الزبائن",
          disabled: true,
        },
      ],
      // nav

      // xlsx
      xlsxData: {
        list: null,
        listLoading: true,
        downloadLoading: false,
        filename: "مركز الاتصال",
        autoWidth: true,
        bookType: "xlsx",
      },
      isScreenXs: false,
      // xlsx

      isFormvalid: false,
      // table
      table: {
        content_url: null,
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "أسم المتصل", value: "caller_name" },
          { text: "وظيفة المتصل", value: "caller_job" },
          { text: "هاتف المتصل", value: "caller_phone" },
          { text: "عنوان المتصل", value: "caller_address" },
          { text: "أفراد عائلة المتصل", value: "caller_family_members" },
          { text: "كيف يسمع عنا", value: "how_he_hear_about_us" },
          { text: "المساحة المطلوبة", value: "space_required" },
          { text: "اسم النموذج", value: "form_name" },
          { text: "الموظف الذي تبعه", value: "current_employee.name" },
          { text: "تاريخ المكالمة", value: "createdAt" },
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
      // edit
      editItemLoading: false,
      how_u_hear_about_us: [],
      forms: [],
      dialogEdit: false,
      old_image: null,
      editdItem: {},
      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
      // changeEmployee
      ChangeEmployeeItemLoading: false,
      dialogChangeEmployee: false,
      isFormvalidChangeEmployee: false,
      current_employee_id: null,
      new_employee_id: null,
      changeEmployeeItem: {},
      Employees: [],
      Rules: {
        new_employee_id: [(v) => !!v || "يرجى اختيار الموظف الجديد"],
      },
      // changeEmployee
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
    this.getHowUHearAboutUs();
    this.getForms();
  },
  mounted() {
    this.getEmployees();
  },
  computed: {
    filteredEmployees() {
      return this.Employees.filter(
        (employee) => employee._id !== this.current_employee_id
      );
    },
  },
  methods: {
    Print(item) {
      localStorage.setItem("PrintCallCenter", JSON.stringify(item));
      window.open("/Print-Call-Center", "_blank");
    },
    handleDownload() {
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = [
          "تاريخ المكالمة",
          "أسم المتصل",
          "وظيفة المتصل",
          "هاتف المتصل",
          "عنوان المتصل",
          "أفراد عائلة المتصل",
          "كيف سمع عنا",
          "المساحة المطلوبة",
          "سبب المكالمة",
          "اسم النموذج",
          "الموظف الذي تبعه",
          "نتائج المكالمة",
        ];
        const filterVal = [
          "createdAt",
          "caller_name",
          "caller_job",
          "caller_phone",
          "caller_address",
          "caller_family_members",
          "how_he_hear_about_us",
          "space_required",
          "call_reason",
          "form_name",
          "current_employee.name",
          "results_of_call",
        ];

        const data = this.formatJson(filterVal, this.table.centers);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.xlsxData.filename,
          autoWidth: this.xlsxData.autoWidth,
          bookType: this.xlsxData.bookType,
        });
        this.xlsxData.downloadLoading = false;
      });
    },
    async getEmployees() {
      try {
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

        const response = await API.getSellsEmployee({
          page: 1,
          limit: 10000000000,
          sortBy: sortByJSON,
          search: null,
          is_deleted: false,
        });

        this.Employees = response.data.results.data;
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
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
    exportToExcel() {
      this.$refs.excel.saveExcelData(
        this.table.centers,
        "centers",
        "centers.xlsx"
      );
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
        const response = await API.getCallCenter({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_available: this.is_available,
          existing_type: this.existing_type,
        });

        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
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
    async getHowUHearAboutUs() {
      try {
        this.table.loading = true;
        const response = await API.getHowUHearAboutUs({
          page: 1,
          limit: 10000000000,
        });

        this.how_u_hear_about_us = response.data.results.data;
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
    async getForms() {
      try {
        this.table.loading = true;
        const response = await API.getForms();

        this.forms = response.data.results;
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
    editItem(item) {
      this.$nextTick(() => {
        this.editdItem = { ...item };
        this.dialogEdit = true;
      });
    },

    async editItemConfirm(event) {
      event.preventDefault();

      this.editItemLoading = true;
      try {
        const response = await API.editCallCenter({
          id: this.editdItem._id,
          caller_name: this.editdItem.caller_name,
          caller_phone: this.editdItem.caller_phone,
          caller_job: this.editdItem.caller_job,
          caller_address: this.editdItem.caller_address,
          caller_family_members: this.editdItem.caller_family_members,
          how_he_hear_about_us: this.editdItem.how_he_hear_about_us,
          space_required: this.editdItem.space_required,
          call_reason: this.editdItem.call_reason,
          form_id: this.editdItem.form_id,
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
        const response = await API.removeCallCenter(this.deletedItem._id);

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
    changeEmployee(item) {
      this.changeEmployeeItem = { ...item };
      this.current_employee_id = this.changeEmployeeItem.current_employee_id;
      this.dialogChangeEmployee = true;
    },
    async changeEmployeeItemConfirm() {
      this.ChangeEmployeeItemLoading = true;

      try {
        const response = await API.changeEmployee({
          id: this.changeEmployeeItem._id,
          current_employee_id: this.current_employee_id,
          new_employee_id: this.new_employee_id,
        });

        this.ChangeEmployeeItemLoading = false;
        this.dialogChangeEmployee = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 404) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.ChangeEmployeeItemLoading = false;
      }
    },
  },
};
</script>
<style>
.v-image {
  height: 100% !important;
}
</style>
