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
            <v-btn color="primary" v-if="userData.includes('add')" text class="ml-auto" @click="dialog = true">
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة منزل جديد
            </v-btn>

            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="items"
                v-model="is_available"
                label="الحالة"
                outlined
              ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="itemsExisting_type"
                v-model="existing_type"
                label="النوع الموجود"
                outlined
              ></v-select>
            </v-col>
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
            <template v-slot:item.imgs="{ item }">
              <img
                @click="showImgs(item.imgs, item.name)"
                :src="table.content_url + item.imgs[0]"
                style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
              />
            </template>
            <template v-slot:item.is_available="{ item }">
              <v-icon v-if="item.is_available === true" color="#02ff00" class="mr-2"
                >mdi-check</v-icon
              >
              <v-icon v-else color="rgb(255 0 0)" class="mr-2">mdi-close-circle</v-icon>
            </template>
            <template v-slot:item.price="{ item }">
              {{ $func(item.price) }}
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

    <!-- - showImg -->
    <div id="crdS">
      <v-dialog v-model="showImg.open" max-width="800px">
        <v-card>
          <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
            <v-card-title class="text-h5" style="padding: 10px !important"
              >صور المنزل ( {{ showImg.name }} )</v-card-title
            >
            <v-divider></v-divider>
            <v-carousel style="height: 350px">
              <v-carousel-item
                style="height: 100%"
                v-for="(img, index) in showImg.dataImg"
                :key="index"
              >
                <img
                  style="width: 100%; height: 100%"
                  :src="table.content_url + img"
                  alt=""
                />
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="showImg.open = false"> إغلاق </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- - showImg -->

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة منزل جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الأسم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">السعر</v-label>
                  <v-currency-field
                    v-model="data.price"
                    :rules="Rules.price"
                    dense
                    label="السعر"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">التقييم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.rating"
                    :rules="Rules.rating"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">غرف المعيشة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.living_rooms"
                    :rules="Rules.living_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الحمامات</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.bath_rooms"
                    :rules="Rules.bath_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">غرف النوم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.bed_rooms"
                    :rules="Rules.bed_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.space"
                    :rules="Rules.space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الحالة</v-label>
                  <v-select
                    :items="items"
                    v-model="data.is_available"
                    :rules="Rules.is_available"
                    label="حدد الحالة"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">النوع الموجود</v-label>
                  <v-select
                    :items="itemsExisting_type"
                    v-model="data.existing_type"
                    :rules="Rules.existing_type"
                    label="النوع الموجود"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="12">
                  <v-label class="mb-2 font-weight-medium">التفاصيل</v-label>
                  <v-textarea
                    variant="outlined"
                    v-model="data.description"
                    :rules="Rules.description"
                    color="primary"
                    outlined
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium">الصور </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChange"
                        style="display: none"
                        ref="fileInput"
                        multiple
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        :rules="Rules.image"
                        label="الصور"
                        outlined
                        :value="selectedFiles.map((file) => file.file.name).join(', ')"
                        @click="$refs.fileInput.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="6" md="6">
                      <v-row>
                        <v-col
                          v-for="(file, index) in selectedFiles"
                          :key="index"
                          cols="3"
                          md="3"
                          style="text-align: center"
                        >
                          <div style="position: relative; display: inline-block">
                            <img
                              :src="file.base64"
                              style="
                                max-width: 100%;
                                max-height: 100%;
                                display: block;
                                margin: 0 auto;
                                border: solid 1px rebeccapurple;
                                width: 60px;
                                height: 60px;
                              "
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
                              @click="removeImage(index)"
                            >
                              mdi-close
                            </v-icon>
                          </div>
                        </v-col>
                      </v-row>
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
          <v-card-title class="text-h5">تعديل المنزل</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الأسم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">السعر</v-label>
                  <v-currency-field
                    v-model="editdItem.price"
                    :rules="Rules.price"
                    dense
                    label="السعر"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">التقييم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.rating"
                    :rules="Rules.rating"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">غرف المعيشة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.living_rooms"
                    :rules="Rules.living_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الحمامات</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.bath_rooms"
                    :rules="Rules.bath_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">غرف النوم</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.bed_rooms"
                    :rules="Rules.bed_rooms"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.space"
                    :rules="Rules.space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الحالة</v-label>
                  <v-select
                    :items="items"
                    v-model="editdItem.is_available"
                    :rules="Rules.is_available"
                    label="حدد الحالة"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">النوع الموجود</v-label>
                  <v-select
                    :items="itemsExisting_type"
                    v-model="editdItem.existing_type"
                    :rules="Rules.existing_type"
                    label="النوع الموجود"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="12">
                  <v-label class="mb-2 font-weight-medium">التفاصيل</v-label>
                  <v-textarea
                    variant="outlined"
                    v-model="editdItem.description"
                    :rules="Rules.description"
                    color="primary"
                    outlined
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium">الصور </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEdit"
                        style="display: none"
                        ref="fileInput"
                        multiple
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="الصور"
                        outlined
                        :value="selectedFiles.map((file) => file.file.name).join(', ')"
                        @click="$refs.fileInput.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="6" md="6">
                      <v-row>
                        <v-col
                          v-for="(file, index) in editdItem.imgs"
                          :key="index"
                          cols="3"
                          md="3"
                          style="text-align: center"
                        >
                          <div
                            style="
                              position: relative;
                              display: inline-block;
                              text-align: center;
                            "
                          >
                            <div style="display: inline-block; position: relative">
                              <img
                                v-if="!file.startsWith('data:image')"
                                :src="table.content_url + file"
                                alt="Image"
                                style="
                                  max-width: 100%;
                                  max-height: 100%;
                                  display: block;
                                  margin: 0 auto;
                                  border: solid 1px rebeccapurple;
                                  width: 60px;
                                  height: 60px;
                                "
                              />
                              <img
                                v-else
                                :src="file"
                                alt="Image"
                                style="
                                  max-width: 100%;
                                  max-height: 100%;
                                  display: block;
                                  margin: 0 auto;
                                  border: solid 1px rebeccapurple;
                                  width: 60px;
                                  height: 60px;
                                "
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
                                @click="removeImageEdit(index)"
                              >
                                mdi-close
                              </v-icon>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
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
          هل انت متأكد من حذف هذا المنزل ؟
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
        title: "المنازل",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "المنازل",
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
          { text: "الأسم", value: "name" },
          { text: "السعر", value: "price" },
          { text: "التفاصيل", value: "description" },
          { text: "تقييم", value: "rating" },
          { text: "المساحة", value: "space" },
          { text: "غرف المعيشة", value: "living_rooms" },
          { text: "غرف النوم", value: "bed_rooms" },
          { text: "الحمامات", value: "bath_rooms" },
          { text: "الصور", value: "imgs" },
          { text: "الحالة", value: "is_available" },
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
      items: [
        { text: "متاح", value: true },
        { text: "غير متاح", value: false },
      ],
      itemsExisting_type: [
        { text: "بيع", value: "بيع" },
        { text: "ايجار", value: "ايجار" },
      ],
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      is_available: true,
      existing_type: "بيع",
      data: {
        image: null,
        name: null,
        price: null,
        description: null,
        rating: null,
        living_rooms: null,
        bath_rooms: null,
        bed_rooms: null,
        space: null,
        is_available: null,
        existing_type: null,
      },
      selectedFile: null,
      Rules: {
        image: [(v) => !!v || "يرجى أضافة صورة واحدة على الأقل"],
        name: [(v) => !!v || "يرجى أضافة الأسم"],
        price: [(v) => !!v || "يرجى أدخال السعر (رقم فقط)"],
        description: [(v) => !!v || "يرجى التفاصيل"],
        rating: [(v) => /^[0-9]+$/.test(v) || "يرجى أدخال التقييم (رقم فقط)"],
        living_rooms: [(v) => /^[0-9]+$/.test(v) || "يرجى أدخال عدد غرف المعيشة (رقم فقط)"],
        bath_rooms: [(v) => /^[0-9]+$/.test(v) || "يرجى أدخال عدد الحمامات (رقم فقط)"],
        bed_rooms: [(v) => /^[0-9]+$/.test(v) || "يرجى أدخال عدد غرف النوم (رقم فقط)"],
        space: [(v) => /^[0-9]+$/.test(v) || "يرجى أدخال المساحة (رقم فقط)"],
        is_available: [(v) => v !== null || "يرجى تحديد الحالة"],
        existing_type: [(v) => v !== null || "يرجى تحديد النوع"],
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
  watch: {
    is_available(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
    existing_type(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
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
      this.selectedFiles = [];
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.data.image = this.data.image || [];
          this.data.image.push(e.target.result);
          this.selectedFiles.push({
            file: file,
            base64: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.selectedFiles.splice(index, 1);
    },
    handleFileChangeEdit(event) {
      this.selectedFiles = [];
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.editdItem.image = this.editdItem.image || [];
          this.editdItem.imgs.push(e.target.result);
          this.selectedFiles.push({
            file: file,
            base64: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    removeImageEdit(index) {
      this.editdItem.imgs.splice(index, 1);
    },

    showImgs(item, name) {
      this.showImg.open = true;
      this.showImg.dataImg = item;
      this.showImg.name = name;
    },

    async getCenter() {
      try {
        this.table.loading = true;

        const key =
          this.tableOptions.sortBy.length > 0 ? this.tableOptions.sortBy[0] : "createdAt";
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
        const response = await API.getBuyingOffers({
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
    async addCenter(event) {
      event.preventDefault();
      this.addBtnLoading = true;
      try {
        const response = await API.addBuyingOffers({
          image: this.data.image,
          name: this.data.name,
          price: this.data.price,
          description: this.data.description,
          rating: this.data.rating,
          living_rooms: this.data.living_rooms,
          bath_rooms: this.data.bath_rooms,
          bed_rooms: this.data.bed_rooms,
          space: this.data.space,
          is_available: this.data.is_available,
          existing_type: this.data.existing_type,
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
        const img = [...item.imgs];
        this.editdItem.imgs = img; // Correct the property name here
        this.dialogEdit = true;
      });
    },

    async editItemConfirm(event) {
      event.preventDefault();

      this.editItemLoading = true;
      try {
        const response = await API.editBuyingOffers({
          buy_id: this.editdItem._id,
          image: this.editdItem.imgs,
          name: this.editdItem.name,
          price: this.editdItem.price,
          description: this.editdItem.description,
          rating: this.editdItem.rating,
          living_rooms: this.editdItem.living_rooms,
          bath_rooms: this.editdItem.bath_rooms,
          bed_rooms: this.editdItem.bed_rooms,
          space: this.editdItem.space,
          is_available: this.editdItem.is_available,
          existing_type: this.editdItem.existing_type,
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
        const response = await API.removeBuyingOffers(this.deletedItem._id);

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
