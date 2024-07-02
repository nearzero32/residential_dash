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
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة موظف جديد
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
            <template v-slot:item.name="{ item }">
              <router-link
                :to="`admin-profileSellsEmployee/${item._id}/${item.name}`"
              >
                {{ item.name }}
              </router-link>
            </template>
            <template v-slot:item.salary="{ item }">
              {{ $func(item.salary) }}
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
              <VTooltip bottom>
                <template #activator="{ attrs }">
                  <v-icon
                  color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="disable(item)"
                  >
                  mdi-pause-octagon
                  </v-icon>
                </template>
                <span>أيقاف</span>
              </VTooltip>

              <!-- <VTooltip bottom v-if="userData.includes('remove')">
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
              </VTooltip> -->
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

    <!-- disable dialog -->
    <v-dialog v-model="dialogDisable" max-width="500px">
      <v-card>
        <v-card-title
          class="headline justify-center"
        >
          هل انت متأكد من أيقاف هذا الحساب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDisable = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="disableItemLoading"
            @click="disableItemConfirm"
          >
            <span>أيقاف</span>
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End disable dailog -->

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة موظف جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المستخدم</v-label
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
                  <v-label class="mb-2 font-weight-medium"
                    >البريد الألكتروني</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.emailRules"
                    outlined
                    v-model="data.email"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.phoneRules"
                    v-model="data.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">كلمة المرور</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.password_showRules"
                    v-model="data.password_show"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.address"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الراتب</v-label>
                  <v-currency-field
                    :rules="Rules.salary"
                    v-model="data.salary"
                    dense
                    label="الراتب"
                    outlined
                  />
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
          <v-card-title class="text-h5">تعديل الحساب</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المستخدم</v-label
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
                  <v-label class="mb-2 font-weight-medium"
                    >البريد الألكتروني</v-label
                  >
                  <v-text-field
                    outlined
                    variant="outlined"
                    :rules="Rules.emailRules"
                    v-model="editdItem.email"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.phoneRules"
                    outlined
                    v-model="editdItem.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">كلمة المرور</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.password_showRules"
                    outlined
                    v-model="editdItem.password_show"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    v-model="editdItem.address"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الراتب</v-label>
                  <v-currency-field
                    :rules="Rules.salary"
                    v-model="editdItem.salary"
                    dense
                    label="الراتب"
                    outlined
                  />
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
          هل انت متأكد من حذف هذا الحساب ؟
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
        title: "موظفين المبيعات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "موظفين المبيعات",
          disabled: true,
        },
      ],
      // nav
      // disableItem
      disableItemLoading: false,
      dialogDisable: false,
      disableItem: {},
      // disableItem

      // table
      table: {
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "أسم الموظف", value: "name" },
          { text: "عدد استمارات الطلب", value: "application_form_count" },
          { text: "عدد استفسارات الزبائن", value: "call_center_count" },
          { text: "عدد طلبات الموافقة", value: "confirmations_form_count" },
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
      Houses: [],
      data: {
        name: null,
        email: null,
        phone: null,
        password_show: null,
        address: null,
        salary: null,
      },
      Rules: {
        nameRules: [(v) => !!v || "يرجى إدخال اسم المستخدم"],
        emailRules: [
          (v) => !!v || "يرجى إدخال عنوان البريد الإلكتروني",
          (v) => /.+@.+\..+/.test(v) || "يرجى إدخال عنوان بريد إلكتروني صحيح",
        ],
        password_showRules: [
          (v) => !!v || "يرجى إدخال كلمة المرور",
          (v) =>
            (v && v.length >= 8) ||
            "يجب أن تكون كلمة المرور أكثر من ثمانية أحرف",
          (v) => /\d/.test(v) || "يجب أن تحتوي كلمة المرور على أرقام",
          (v) => /[a-zA-Z]/.test(v) || "يجب أن تحتوي كلمة المرور على حروف",
        ],
        phoneRules: [
          (v) => !!v || "يرجى إدخال رقم الهاتف",
          (v) =>
            (v && /^[0-9]{11}$/.test(v)) ||
            "يرجى إدخال رقم هاتف صحيح (11 أرقام)",
        ],
        // addressRules: [(v) => !!v || "يرجى إدخال عنوان المستخدم"],
        house_id: [(v) => !!v || "يرجى اختيار المنزل"],
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
  },
  methods: {
    Print(item) {
      localStorage.setItem("PrintSellsEmployee", JSON.stringify(item));
      window.open("/Print-Sells-Employee", "_blank");
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
        const response = await API.getSellsEmployee({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: false,
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
        const response = await API.addSellsEmployee({
          name: this.data.name,
          phone: this.data.phone,
          password_show: this.data.password_show,
          email: this.data.email,
          address: this.data.address,
          salary: this.data.salary,
        });

        this.addBtnLoading = false;
        this.data.name = null;
        this.data.email = null;
        this.data.phone = null;
        this.data.password_show = null;
        this.data.address = null;
        this.data.salary = null;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.dialog = false;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
          this.addBtnLoading = false;
        } else if (error.response.status === 400) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
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
        const response = await API.editSellsEmployee({
          id: this.editdItem._id,
          name: this.editdItem.name,
          phone: this.editdItem.phone,
          password_show: this.editdItem.password_show,
          email: this.editdItem.email,
          address: this.editdItem.address,
          salary: this.editdItem.salary,
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
        const response = await API.removeSellsEmployee(this.deletedItem._id);

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
    disable(item) {
      this.disableItem = { ...item };
      this.dialogDisable = true;
    },
    async disableItemConfirm() {
      this.disableItemLoading = true;
      try {
        const response = await API.disableSellsEmployee(this.disableItem._id);

        this.disableItemLoading = false;
        this.dialogDisable = false;
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
