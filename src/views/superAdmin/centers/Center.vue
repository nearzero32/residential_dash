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
            <v-btn color="primary" text class="ml-auto" @click="dialog = true">
              <vIcon class="mr-2">mdi-plus</vIcon>أضافة حساب جديد
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              append-icon="mdi-magnify"
              label="بحث"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            :items="table.centers"
            :loading="table.loading"
            :search="table.search"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            no-results-text="لا توجد بيانات !"
            class="border"
          >
            <template v-slot:item.num="{ item }">
              {{ table.centers.indexOf(item) + 1 }}
            </template>

            <template v-slot:item.actions="{ item }">
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="rgb(243 216 1)"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </vIcon>
                </template>
                <span>تعديل</span>
              </vTooltip>
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="deleteItem(item)"
                  >
                    mdi-delete-restore
                  </vIcon>
                </template>
                <span>حذف</span>
              </vTooltip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <!-- add -->
    <div class="text-center mt-4 mt-sm-0">
      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <v-card>
            <v-card-title class="text-h5">أضافة حساب جديد</v-card-title>
            <v-divider></v-divider>
            <!----Account Details---->
            <v-card-text class="pb-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2"
                    >أسم المستخدم</v-label
                  >
                  <v-text-field
                    v-model="data.name"
                    :rules="Rules.account_nameRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2"
                    >البريد الألكتروني</v-label
                  >
                  <v-text-field
                    v-model="data.email"
                    :rules="Rules.emailRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">رقم الهاتف</v-label>
                  <v-text-field
                    v-model="data.phone"
                    :rules="Rules.phoneRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">كلمة المرور</v-label>
                  <v-text-field
                    v-model="data.password_show"
                    :rules="Rules.password_showRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-label class="font-weight-medium mb-2"
                    >عنوان </v-label
                  >
                  <v-text-field
                    v-model="data.address"
                    :rules="Rules.addressRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
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
                  :disabled="isFormvalid"
                  type="submit"
                  text
                  >أضافة</v-btn
                >
                <v-btn
                  class="bg-lighterror text-error ml-4"
                  @click="dialog = false"
                  text
                  >أغلاق</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-card>
      </v-dialog>
    </div>
    <!-- add -->

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

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">أسم المستخدم</v-label>
                <v-text-field
                  v-model="editdItem.name"
                  :rules="Rules.account_nameRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2"
                  >البريد الألكتروني</v-label
                >
                <v-text-field
                  v-model="editdItem.email"
                  :rules="Rules.emailRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">رقم الهاتف</v-label>
                <v-text-field
                  v-model="editdItem.phone"
                  :rules="Rules.phoneRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">كلمة المرور</v-label>
                <v-text-field
                  v-model="editdItem.password_show"
                  :rules="Rules.password_showRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-label class="font-weight-medium mb-2">عنوان </v-label>
                <v-text-field
                  v-model="editdItem.address"
                  :rules="Rules.addressRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="editItemConfirm"
                :loading="editItemLoading"
                color="primary"
                :disabled="isFormvalid"
                type="submit"
                text
                >تعديل</v-btn
              >
              <v-btn color="primary" text @click="dialogEdit = false">
                الغاء
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

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
import API from "@/api/superAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: this.$route.params.name,
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/SuperAdminHome",
        },
        {
          text: "المجمعات",
          disabled: false,
          to: "/centers",
        },
        {
          text: this.$route.params.name,
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
            align: "start",
            sortable: false,
            value: "num",
          },
          { text: "أسم المستخدم", value: "name" },
          { text: "البريد الألكتروني", value: "email" },
          { text: "كلمة المرور", value: "password_show" },
          { text: "رقم الهاتف", value: "phone" },
          { text: "العنوان", value: "address" },
          { text: "العمليات", value: "actions" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
        sortBy: "",
        sortDesc: false,
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
        center_id: this.$route.params.id,
        name: "",
        email: "",
        password_show: "",
        phone: "",
        address: "",
      },
      Rules: {
        account_nameRules: [(v) => !!v || "يرجى إدخال اسم "],
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
        addressRules: [(v) => !!v || "يرجى إدخال عنوان "],
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
    this.getCenter();
  },

  methods: {
    async getCenter() {
      this.table.loading = true;

      try {
        const response = await API.getCenterUsers(this.$route.params.id);
        this.table.centers = response.data.results;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async addCenter() {
      this.addBtnLoading = true;

      try {
        const response = await API.addCenterUsers({
          center_id: this.$route.params.id,
          name: this.data.name,
          email: this.data.email,
          password_show: this.data.password_show,
          phone: this.data.phone,
          address: this.data.address,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.email = "";
        this.data.phone = "";
        this.data.password_show = "";
        this.data.address = "";
        await this.getCenter();
        this.dialog = false;
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    editItem(item) {
      this.editdItem = { ...item };
      this.dialogEdit = true;
    },
    async editItemConfirm() {
      this.editItemLoading = true;
      try {
        const response = await API.editCenterUsers({
          account_id: this.editdItem._id,
          name: this.editdItem.name,
          email: this.editdItem.email,
          password_show: this.editdItem.password_show,
          phone: this.editdItem.phone,
          address: this.editdItem.address,
        });
        this.editItemLoading = false;
        this.editdItem = {};
        await this.getCenter();
        this.dialogEdit = false;
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeCenterUsers(this.deletedItem._id);

        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.deleteItemLoading = false;
          if (error.response.data && error.response.data.results) {
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else {
            console.error(
              "Error: Response data or results property is undefined or null."
            );
          }
        } else {
          console.error("Unexpected error:", error);
        }
      }
    },
  },
};
</script>
  