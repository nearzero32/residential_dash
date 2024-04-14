<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-label class="mb-2 font-weight-medium">الأسم</v-label>
            <v-text-field
              v-if="results && results.name !== null && results.name !== undefined"
              variant="outlined"
              v-model="results.name"
              :rules="Rules.name"
              color="primary"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
            <v-text-field
              v-if="results && results.phone !== null && results.phone !== undefined"
              variant="outlined"
              v-model="results.phone"
              :rules="Rules.phone"
              color="primary"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-label class="mb-2 font-weight-medium">العنوان</v-label>
            <v-text-field
              v-if="results && results.address !== null && results.address !== undefined"
              variant="outlined"
              v-model="results.address"
              :rules="Rules.address"
              color="primary"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-label class="mb-2 font-weight-medium">التفاصيل</v-label>
            <v-textarea
              variant="outlined"
              v-if="
                results &&
                results.description !== null &&
                results.description !== undefined
              "
              v-model="results.description"
              :rules="Rules.description"
              color="primary"
              outlined
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الفيديو</v-label>
                <v-text-field
                  variant="outlined"
                  v-if="results && results.video !== null && results.video !== undefined"
                  v-model="results.video"
                  :rules="Rules.video"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <iframe
                  width="200"
                  v-if="results && results.video !== null && results.video !== undefined"
                  height="200"
                  :src="results.video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="mx-auto">
      <v-container>
        <v-btn color="primary" text class="ml-auto" @click="dialog = true">
          <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة نموذج جديد
        </v-btn>

        <v-data-table
          :headers="table.headers"
          loading-text="جاري التحميل ... الرجاء الانتظار"
          :items="table.centers"
          class="elevation-1"
          no-results-text="لا توجد بيانات !"
        >
          <template v-slot:item.num="{ item }">
            {{ table.centers.indexOf(item) + 1 }}
          </template>
          <template v-slot:item.image="{ item }">
            <img
              v-if="item.image !== null"
              @click="showImgs(item.image)"
              :src="isBase64(item.image) ? item.image : content_url + item.image"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </template>
          <template v-slot:item.ac="{ item }">
            <v-btn @click="showDetails(item)">عرض التفاصيل</v-btn>
          </template>
        </v-data-table>
      </v-container>
      <v-card-actions>
        <v-btn
        v-if="userData.includes('edit')"
          size="large"
          @click="editItemConfirm"
          :loading="editItemLoading"
          color="primary"
          type="submit"
          text
          >تعديل</v-btn
        >
      </v-card-actions>
    </v-card>
    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة نموذج جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">الأسم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.building_space"
                    :rules="Rules.building_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة الكلية</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.total_space"
                    :rules="Rules.total_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" style="padding: 10px">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium">صورة</v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChange"
                        style="display: none"
                        ref="fileInput"
                        required
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
                <v-col cols="12" md="6" style="padding: 10px">
                  <p style="padding: 10px; margin: 0px">تفاصيل النموذج</p>
                </v-col>
                <v-col
                  v-for="(dataa, index) in data.details"
                  :key="index"
                  cols="12"
                  md="12"
                >
                  <v-btn @click="deletItme(index)" color="error">حذف الطابق</v-btn>

                  <v-card variant="outlined" class="cardNam">
                    <v-row style="padding: 10px">
                      <v-col cols="12" md="12" style="padding: 10px">
                        <v-label class="mb-2 font-weight-medium">أسم الطابق</v-label>
                        <v-text-field
                          variant="outlined"
                          v-model="dataa.title"
                          :rules="Rules.details.title"
                          color="primary"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="12" style="padding: 10px">
                        <p style="padding: 10px; margin: 0px">تفاصيل النموذج الفرعية</p>
                      </v-col>
                      <v-row v-for="(dat, i) in data.details[index].sub_details" :key="i">
                        <v-col cols="12" md="12" style="padding: 10px">
                          <v-btn @click="deletItm(index, i)" color="error"
                            >حذف تفاصيل الطابق</v-btn
                          >
                        </v-col>

                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">الاسم</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.name"
                            :rules="Rules.details.sub_details.name"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.value"
                            :rules="Rules.details.sub_details.value"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-col cols="12" md="6" style="padding: 10px">
                        <v-btn @click="addNewItem(index)" color="success"
                          >إضافة غرفة جديدة</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="12" md="12" style="padding: 10px">
                  <v-row>
                    <v-col cols="12" md="6" style="padding: 10px">
                      <v-btn @click="addNewItems" color="success">إضافة طابق جديد</v-btn>
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
                  color="primary"
                  :disabled="!isFormvalid"
                  text
                  >معاينة</v-btn
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

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="showDetail.open" max-width="800px">
      <v-toolbar color="primary" dense>{{
        showDetail.bodyText !== null ? showDetail.bodyText.name : ""
      }}</v-toolbar>
      <v-card>
        <v-card-text class="headline justify-center" v-if="showDetail.bodyText !== null">
          <v-carousel>
            <v-carousel-item v-for="(slide, i) in showDetail.bodyText.details" :key="i">
              <v-sheet tile>
                <div
                  class="d-flex fill-height justify-center align-center"
                  style="background: white"
                >
                  <div style="width: 100%; padding: 1% 10%; text-align: right">
                    <v-list density="compact" style="background: white; color: black">
                      <v-list style="background: white; color: black">تفاصيل {{ slide.title }}</v-list>
                      <v-list-item
                        v-for="(item, ind) in slide.sub_details"
                        :key="ind"
                        :value="item"
                        color="primary"
                      >
                        <v-list-item-title>
                          <div style="color: black"
                            >{{ item !== null ? item.name : "" }} :
                            {{ item !== null ? item.value : "" }}</div
                          >
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
          <img
              :src="isBase64(showImg.dataImg) ? showImg.dataImg : content_url + showImg.dataImg"
              style="width: 100%"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false"> إغلاق </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->
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
        title: "الملف الشخصي",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الملف الشخصي",
          disabled: true,
        },
      ],
      // nav
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // showDetail
      showDetail: {
        open: false,
        color: "primary",
        bodyText: null,
      },
      // showDetail
      // add
      selectedFiles: [],
      results: null,
      content_url: null,
      loading: false,
      is_available: true,
      type: "شحن",
      OwnersAll: [],
      items: [
        { text: "مفعلة", value: true },
        { text: "غير مفعلة", value: false },
      ],
      itemsType: [
        { text: "شحن", value: "شحن" },
        { text: "صيانة", value: "صيانة" },
      ],
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      receiver_type: null,
      existing_type: "بيع",
      showAdditionalFields: false,
      data: {
        building_space: null,
        image: null,
        name: null,
        total_space: null,
        details: [
          {
            title: "",
            sub_details: [
              {
                name: "",
                value: "",
              },
            ],
          },
        ],
      },
      selectedFile: null,
      Rules: {
        name: [(value) => !!value || "يرجى أضافة أسم"],
        price: [(value) => !!value || "يرجى أضافة سعر"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        is_available: [
          (value) => (value !== null && value !== undefined) || "يرجى أضافة الحالة",
        ],
        type: [(value) => !!value || "يرجى أدخال نوع الخدمة"],
        details: {
          title: [(value) => !!value || "يرجى أدخال أسم الطابق"],
          sub_details: {
            name: [(value) => !!value || "يرجى أدخال أسم الغرفة"],
            value: [(value) => !!value || "يرجى أدخال مساحة الغرفة"],
          },
        },
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
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: null,
        name: null,
      },
      // showImg

      table: {
        content_url: null,
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "الأسم", value: "name" },
          { text: "الصوره", value: "image" },
          { text: "المساحة", value: "building_space" },
          { text: "المساحة الكلية", value: "total_space" },
          { text: "عرض", value: "ac" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
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
  watch: {
    is_available(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
    type(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
  },
  methods: {
    deletItme(index) {
      this.data.details.splice(index, 1);
    },
    addNewItems() {
      this.data.details.push({
        title: "",
        sub_details: [
          {
            name: "",
            value: "",
          },
        ],
      });
    },
    addNewItem(index) {
      this.data.details[index].sub_details.push({
        name: "",
        value: "",
      });
    },
    deletItm(index, i) {
      this.data.details[index].sub_details.splice(i, 1); // حذف التفاصيل الفرعية للطابق
    },

    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
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
    showDetails(item) {
      this.showDetail.open = true;
      this.showDetail.bodyText = item;
    },

    async getCenter() {
      try {
        // this.table.loading = true;
        const response = await API.getCenter();
        this.content_url = response.data.content_url;
        this.results = response.data.results;
        this.table.centers = response.data.results.forms;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    async addCenter() {
      if (this.data.image == null) {
        this.showDialogfunction("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else if (this.data.details.length === 0) {
        this.showDialogfunction("يرجى إضافة تفاصيل الى النموذج", "#FF5252");
      } else {
        let hasSubDetails = true;
        for (let i = 0; i < this.data.details.length; i++) {
          if (this.data.details[i].sub_details.length === 0) {
            hasSubDetails = false;
            break;
          }
        }
        if (!hasSubDetails) {
          this.showDialogfunction("يرجى إضافة تفاصيل النموذج الفرعية", "#FF5252");
        } else {
          this.results.forms.push(this.data);
          this.dialog = false;
        }
      }
    },

    async editItemConfirm(event) {
      event.preventDefault();
      this.editItemLoading = true;
      try {
        const response = await API.editCenter({
          name: this.results.name,
          phone: this.results.phone,
          address: this.results.address,
          description: this.results.description,
          video: this.results.video,
          forms: this.results.forms,
        });

        this.editItemLoading = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
        // this.dialogEdit = false;
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
        const response = await API.removeServices(this.deletedItem._id);

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
