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
              v-if="userData.includes('add')"
              color="primary"
              text
              class="ml-auto"
              @click="dialog = true"
            >
              <v-icon class="mr-2">mdi-plus</v-icon>إضافة ميزة جديدة
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              single-line
              outlined
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
            <template v-slot:item.image="{ item }">
              <img
                @click="showImgs(item.image)"
                :src="table.content_url + item.image"
                style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
              />
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
          <v-card-title class="text-h5">اٍضافة ميزة جديدة</v-card-title>
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
                    <v-col cols="6" md="6" style="text-align: center" v-if="data.image">
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.image"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="position: absolute; top: 0; right: 0; cursor: pointer"
                          @click="removeImage"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
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
                <v-btn class="bg-lighterror text-error ml-4" @click="dialog = false" text
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
          <v-card-title class="text-h5">تعديل الميزة</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.title"
                    :rules="Rules.title"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium">صورة </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEdit"
                        style="display: none"
                        ref="fileInput"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة"
                        v-model="selectedFile"
                        outlined
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
                      v-if="editdItem.image"
                    >
                      <div style="position: relative; display: inline-block" id="bll">
                        <img
                          id="oldL"
                          :src="table.content_url + old_image"
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <img
                          id="newL"
                          :src="editdItem.image"
                          style="
                            display: none;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="position: absolute; top: 0; right: 0; cursor: pointer"
                          @click="removeImageEdit"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
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
                <v-btn color="primary" text @click="dialogEdit = false"> الغاء </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
          <img style="width: 100%" :src="table.content_url + showImg.dataImg" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false"> إغلاق </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذه الميزة ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false"> الغاء </v-btn>
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
        title: "المميزات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "المميزات",
          disabled: true,
        },
      ],
      // nav
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: null,
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
          { text: "الأسم", value: "title" },
          { text: "صورة", value: "image" },
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
        title: null,
        image: null,
      },
      selectedFile: null,
      Rules: {
        title: [(v) => !!v || "يرجى أضافة عنوان"],
        image: [(v) => !!v || "يرجى أضافة صورة"],
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
      this.userData = ['add', 'edit', 'remove']
    }
    this.getCenter();
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

        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
        const response = await API.getAdvantages({
          page,
          limit: itemsPerPage,
          search: this.table.search,
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
    async addCenter(event) {
      event.preventDefault();
      this.addBtnLoading = true;

      if (this.data.image === null) {
        this.addBtnLoading = false;
        this.showDialogfunction("يرجى أضافة صورة", "primary");
      }
      try {
        const response = await API.addAdvantages({
          title: this.data.title,
          image: this.data.image,
        });

        this.addBtnLoading = false;
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
      this.$nextTick(() => {
        this.editdItem = { ...item };
        this.old_image = item.image;
        this.dialogEdit = true;
        var oldL = document.getElementById("oldL");
        var newL = document.getElementById("newL");

        if (oldL && newL) {
          if (oldL.style.display == "none") {
            oldL.style.display = "block";
            newL.style.display = "none";
          } else {
            oldL.style.display = "block";
            newL.style.display = "none";
          }
        }
      });
    },

    async editItemConfirm(event) {
      event.preventDefault();

      this.editItemLoading = true;
      if (this.editdItem.image === null) {
        this.editItemLoading = false;
        this.showDialogfunction("يرجى أضافة صورة", "primary");
      }
      try {
        const response = await API.editAdvantages({
          advantage_id: this.editdItem._id,
          title: this.editdItem.title,
          image: this.editdItem.image,
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
        const response = await API.removeAdvantages(this.deletedItem._id);

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
.v-sheet.v-card {
  border-radius: 0px !important;
}
.v-responsive__sizer {
  padding-bottom: 52.9735% !important;
}
</style>
