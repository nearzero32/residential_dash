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
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة أشعار جديد
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
            <!-- <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                v-model="receiver_type"
                label="نوع الأشعار"
                outlined
              ></v-select>
            </v-col> -->
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
            <template v-slot:item.image="{ item }">
              <img
                v-if="item.image !== null"
                @click="showImgs(item.image)"
                :src="table.content_url + item.image"
                style="
                  width: 60px;
                  border: solid 1px rebeccapurple;
                  cursor: pointer;
                "
              />
            </template>
            <template v-slot:item.receiver_type="{ item }">
              <div v-if="item.receiver_type == 'مالك محدد' || item.receiver_type == 'موظف مبيعات محدد'">
                <p>{{ item.receiver_type }}</p>
                <ul v-for="(receiver, index) in item.receivers" :key="index">
                  <li>{{ receiver.name }}</li>
                </ul>
              </div>
              <div v-else>
                <p>{{ item.receiver_type }}</p>
              </div>
            </template>
            <template v-slot:item.actions="{ item }">
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

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text
          class="headline justify-center"
          v-if="showImg.dataImg !== null"
        >
          <img style="width: 100%" :src="table.content_url + showImg.dataImg" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false">
            إغلاق
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة أشعار جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.title"
                    :rules="Rules.title"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">نوع المستلم</v-label>
                  <v-select
                    :items="items"
                    v-model="data.receiver_type"
                    :rules="Rules.receiver_type"
                    label="نوع المستلم"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6" v-if="type">
                  <v-label class="mb-2 font-weight-medium">الملاك</v-label>
                  <v-autocomplete
                    clearable
                    chips
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    item-text="name"
                    item-value="_id"
                    label="الملاك"
                    :items="OwnersAll"
                    multiple
                    outlined
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  v-else-if="data.receiver_type == 'موظف مبيعات محدد'"
                >
                  <v-label class="mb-2 font-weight-medium"
                    >موظفين المبيعات</v-label
                  >
                  <v-autocomplete
                    clearable
                    chips
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    item-text="name"
                    item-value="_id"
                    label="موظفين المبيعات"
                    :items="SellsEmployee"
                    multiple
                    outlined
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium">صورة </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChange"
                        style="display: none"
                        ref="fileInput"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة"
                        outlined
                        v-model="selectedFile"
                        @click="$refs.fileInput.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.image"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.image"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImage"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الرابط ( اختياري )</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.link"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-label class="mb-2 font-weight-medium">التفاصيل</v-label>
                  <v-textarea
                    variant="outlined"
                    v-model="data.body"
                    :rules="Rules.body"
                    color="primary"
                    outlined
                  ></v-textarea>
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
          هل انت متأكد من حذف هذا الأشعار ؟
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
        title: "الأشعارات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الأشعارات",
          disabled: true,
        },
      ],
      // nav
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: null,
        name: null,
      },
      // showImg

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
          { text: "العنوان", value: "title" },
          { text: "النوع", value: "type" },
          { text: "نوع المستلم", value: "receiver_type" },
          { text: "الصوره", value: "image" },
          { text: "التفاصيل", value: "body" },
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
      selectedFiles: [],
      OwnersAll: [],
      SellsEmployee: [],
      items: [
        { text: "جميع الزبائن", value: "جميع الزبائن" },
        { text: "جميع الملاك", value: "جميع الملاك" },
        { text: "مالك محدد", value: "مالك محدد" },
        { text: "جميع موظفي المبيعات", value: "جميع موظفي المبيعات" },
        { text: "موظف مبيعات محدد", value: "موظف مبيعات محدد" },
      ],
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      type: false,
      receiver_type: null,
      existing_type: "بيع",
      data: {
        title: null,
        link: null,
        body: null,
        image: null,
        receiver_type: null,
        receivers: [],
      },
      selectedFile: null,
      Rules: {
        title: [(v) => !!v || "يرجى أضافة عنوان"],
        body: [(v) => !!v || "يرجى أضافة تفاصيل"],
        receiver_type: [(v) => !!v || "يرجى أدخال نوع المستلم"],
      },
      // add
      // edit
      editItemLoading: false,
      dialogEdit: false,
      old_image: null,
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
    this.getOwnersAll();
    this.getSellsEmployee();
  },
  watch: {
    "data.receiver_type"(newValue) {
      if (newValue === "مالك محدد") {
        this.type = true;
      } else {
        this.type = false;
      }
    },
  },

  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.image = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.data.image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },
    handleFileChangeEdit(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.image = reader.result;
        };

        reader.readAsDataURL(file);
      }

      var oldL = document.getElementById("oldL");
      var newL = document.getElementById("newL");

      if (oldL.style.display == "block") {
        oldL.style.display = "none";
        newL.style.display = "block";
      } else {
        oldL.style.display = "none";
        newL.style.display = "block";
      }
    },
    removeImageEdit() {
      this.editdItem.image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item;
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
        const response = await API.getNotifications({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          is_deleted: false,
          sortBy: sortByJSON,
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

    async getOwnersAll() {
      try {
        const response = await API.getOwnersAll();

        this.OwnersAll = response.data.results;
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

    async getSellsEmployee() {
      const sortByJSON = JSON.stringify({ key: "createdAt", order: "asc" });
      try {
        const response = await API.getSellsEmployee({
          page: 1,
          limit: 10000000000,
          sortBy: sortByJSON,
          search: null,
        });
        this.SellsEmployee = response.data.results.data;
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
        const response = await API.addNotifications({
          title: this.data.title,
          link: this.data.link,
          body: this.data.body,
          image: this.data.image,
          receiver_type: this.data.receiver_type,
          receivers: this.data.receivers,
        });

        this.addBtnLoading = false;
        this.data.title = null;
        this.data.body = null;
        this.data.link = null;
        this.data.receiver_type = null;
        this.data.receivers = null;
        this.data.image = null;
        if (this.selectedFile) {
          this.selectedFile = null;
        }

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
        const response = await API.removeNotifications(this.deletedItem._id);

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
<style>
.v-image {
  height: 100% !important;
}
</style>
