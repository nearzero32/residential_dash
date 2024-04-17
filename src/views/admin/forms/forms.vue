<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
        <v-btn
          color="primary"
          text
          class="ml-auto"
          v-if="userData.includes('add')"
          @click="dialog = true"
        >
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
          <template v-slot:item.images="{ item }">
            <img
              @click="showImgs(item)"
              :src="content_url + item.images[0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </template>
          <template v-slot:item.ac="{ item }">
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
      </v-container>
    </v-card>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة نموذج جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">أسم النموذج</v-label>
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
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">ارقام المنازل</v-label>
                  <vue-tags-input
                    v-model="houses"
                    :tags="tags"
                    @tags-changed="(newTags) => (tags = newTags)"
                    variant="outlined"
                    :rules="Rules.houses"
                    placeholder=" الرجاء إضافة رقم المنزل ثم الضغط على زر الإدخال Entr"
                    color="primary"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="12" style="padding: 10px">
                  <vue-dropzone
                    :options="dropzoneOptions"
                    id="dropzone"
                    @vdropzone-success="handleFileUploadSuccess"
                    @vdropzone-removed-file="handleFileRemoved"
                  >
                  </vue-dropzone>
                </v-col>

                <v-col v-for="(dataa, ind) in data.floors" :key="ind" cols="12" md="12">
                  <v-container>
                    <v-card variant="outlined" class="cardNam">
                      <v-row style="padding: 10px">
                        <v-col cols="12" md="12" style="padding: 10px">
                          <p style="padding: 10px; margin: 0px">تفاصيل النموذج</p>
                        </v-col>
                        <v-col cols="12" md="12" style="padding: 10px">
                          <v-btn @click="deletItme(ind)" color="error">حذف الطابق</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">أسم الطابق</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="dataa.name"
                            :rules="Rules.details.title"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">صور الطابق</v-label>
                          <vue-dropzone
                            :options="dropzoneOptionsFloors"
                            id="dropzone"
                            @vdropzone-success="
                              handleFileUploadSuccessFloors($event, ind)
                            "
                            @vdropzone-removed-file="handleFileRemovedFloors($event, ind)"
                          >
                          </vue-dropzone>
                        </v-col>
                        <v-col cols="12" md="12" style="padding: 10px">
                          <v-container style="border: solid 2px #e5e5e5">
                            <v-row v-for="(dat, i) in data.floors[ind].rooms" :key="i">
                              <v-col cols="12" md="12" style="padding: 10px">
                                <p style="padding: 10px; margin: 0px">
                                  تفاصيل النموذج الفرعية
                                </p>
                              </v-col>
                              <v-col cols="12" md="12" style="padding: 10px">
                                <v-btn @click="deletItm(ind, i)" color="error"
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
                              <v-col cols="12" md="12" style="padding: 10px">
                                <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                                <v-text-field
                                  variant="outlined"
                                  v-model="dat.space"
                                  color="primary"
                                  outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-row>
                                  <v-col
                                    cols="12"
                                    md="12"
                                    style="border: solid 2px #e5e5e5"
                                  >
                                    <v-label class="mb-2 font-weight-medium"
                                      >صورة
                                    </v-label>
                                    <v-row>
                                      <v-col cols="6" md="6">
                                        <input
                                          type="file"
                                          accept="image/png, image/jpeg, image/bmp"
                                          @change="handleFileChange($event, ind, i)"
                                          ref="fileInput"
                                        />
                                      </v-col>
                                      <v-col
                                        cols="6"
                                        md="6"
                                        style="text-align: center"
                                        v-if="dat.image"
                                      >
                                        <div
                                          style="
                                            position: relative;
                                            display: inline-block;
                                          "
                                        >
                                          <img
                                            :src="dat.image"
                                            style="
                                              width: 120px;
                                              border: solid 1px rebeccapurple;
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
                                            @click="removeImage(ind, i)"
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
                          </v-container>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-btn @click="addNewItem(ind)" color="success"
                            >إضافة غرفة جديدة</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-container>
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
                  :loading="addLoading"
                  :disabled="!isFormvalid"
                  text
                  >إضافة</v-btn
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

    <!-- dialogEdit -->
    <v-dialog v-model="dialogEdit" max-width="1000px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة نموذج جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row v-if="editdItem && editdItem.name !== undefined">
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">أسم النموذج</v-label>
                  <v-text-field
                    v-if="editdItem && editdItem.name !== undefined"
                    variant="outlined"
                    v-model="editdItem.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-if="editdItem && editdItem.building_space !== undefined"
                    v-model="editdItem.building_space"
                    :rules="Rules.building_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة الكلية</v-label>
                  <v-text-field
                    variant="outlined"
                    v-if="editdItem && editdItem.total_space !== undefined"
                    v-model="editdItem.total_space"
                    :rules="Rules.total_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">ارقام المنازل</v-label>
                  <vue-tags-input
                    v-model="housesE"
                    :tags="tagsE"
                    @tags-changed="(newTagsE) => (tagsE = newTagsE)"
                    variant="outlined"
                    :rules="Rules.houses"
                    placeholder=" الرجاء إضافة رقم المنزل ثم الضغط على زر الإدخال Entr"
                    color="primary"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="12" style="padding: 10px">
                  <vue-dropzone
                    ref="myVueDropzoneE"
                    id="dropzoneE"
                    :options="dropzoneOptionsE"
                  >
                  </vue-dropzone>
                </v-col>
                <v-col
                  v-for="(dataa, ind) in editdItem.floors"
                  :key="ind"
                  cols="12"
                  md="12"
                >
                  <v-container>
                    <v-card variant="outlined" class="cardNam">
                      <v-row style="padding: 10px">
                        <v-col cols="12" md="12" style="padding: 10px">
                          <p style="padding: 10px; margin: 0px">تفاصيل النموذج</p>
                        </v-col>
                        <v-col cols="12" md="12" style="padding: 10px">
                          <v-btn @click="deletItme(ind)" color="error">حذف الطابق</v-btn>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">أسم الطابق</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="dataa.name"
                            :rules="Rules.details.title"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">صور الطابق</v-label>
                          <vue-dropzone
                            id="dropzoneEF"
                            ref="myVueDropzoneFloors"
                            :options="dropzoneOptionsEFloors"
                            @vdropzone-file-added-manually="
                              myVueDropzoneFloors(ind, $event)
                            "
                            use-custom-slot
                          >
                            <template v-slot:file="{ meta, removeFile }">
                              <div class="d-flex flex-column align-center">
                                <img
                                  :src="meta.upload.dataURL"
                                  height="100"
                                  alt="Uploaded image"
                                />
                                <v-btn text color="error" @click="removeFile(meta.file)"
                                  >Remove</v-btn
                                >
                              </div>
                            </template>
                          </vue-dropzone>
                        </v-col>
                        <v-col cols="12" md="12" style="padding: 10px">
                          <v-container style="border: solid 2px #e5e5e5">
                            <v-row
                              v-for="(dat, i) in editdItem.floors[ind].rooms"
                              :key="i"
                            >
                              <v-col cols="12" md="12" style="padding: 10px">
                                <p style="padding: 10px; margin: 0px">
                                  تفاصيل النموذج الفرعية
                                </p>
                              </v-col>
                              <v-col cols="12" md="12" style="padding: 10px">
                                <v-btn @click="deletItm(ind, i)" color="error"
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
                              <v-col cols="12" md="12" style="padding: 10px">
                                <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                                <v-text-field
                                  variant="outlined"
                                  v-model="dat.space"
                                  color="primary"
                                  outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-row>
                                  <v-col
                                    cols="12"
                                    md="12"
                                    style="border: solid 2px #e5e5e5"
                                  >
                                    <v-label class="mb-2 font-weight-medium"
                                      >صورة
                                    </v-label>
                                    <v-row>
                                      <v-col cols="6" md="6">
                                        <input
                                          type="file"
                                          accept="image/png, image/jpeg, image/bmp"
                                          @change="handleFileChange($event, ind, i)"
                                          ref="fileInput"
                                        />
                                      </v-col>
                                      <v-col
                                        cols="6"
                                        md="6"
                                        style="text-align: center"
                                        v-if="dat.image"
                                      >
                                        <div
                                          style="
                                            position: relative;
                                            display: inline-block;
                                          "
                                        >
                                          <img
                                            :src="dat.image"
                                            style="
                                              width: 120px;
                                              border: solid 1px rebeccapurple;
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
                                            @click="removeImage(ind, i)"
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
                          </v-container>
                        </v-col>
                        <v-col cols="12" md="6" style="padding: 10px">
                          <v-btn @click="addNewItem(ind)" color="success"
                            >إضافة غرفة جديدة</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-container>
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
                  :loading="editItemLoading"
                  :disabled="!isFormvalid"
                  text
                  >إضافة</v-btn
                >
                <v-btn
                  class="bg-lighterror text-error ml-4"
                  @click="dialogEdit = false"
                  text
                  >أغلاق</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- dialogEdit -->

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

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
          <v-carousel>
            <v-carousel-item v-for="(img, i) in showImg.dataImg" :key="i">
              <img :src="content_url + img" style="width: 100%" />
            </v-carousel-item>
          </v-carousel>
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
import VueTagsInput from "@johmun/vue-tags-input";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    VueTagsInput,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      userDataString: null,
      // nav
      page: {
        title: "النماذج",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "النماذج",
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
      // add
      selectedFiles: [],
      tags: [],
      houses: "",
      results: null,
      content_url: null,
      addLoading: false,
      is_available: true,
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      receiver_type: null,
      existing_type: "بيع",
      showAdditionalFields: false,
      uploadedFiles: [],
      data: {
        name: null,
        images: [],
        houses: [],
        total_space: null,
        building_space: null,
        floors: [
          {
            name: "",
            images: [],
            rooms: [
              {
                name: "",
                image: null,
                space: null,
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
        houses: [(value) => !!value || "يرجى أدخال ارقام المنازل"],
        details: {
          title: [(value) => !!value || "يرجى أدخال أسم الطابق"],
          sub_details: {
            name: [(value) => !!value || "يرجى أدخال أسم الغرفة"],
            value: [(value) => !!value || "يرجى أدخال مساحة الغرفة"],
          },
        },
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور المنزل",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
      },
      dropzoneOptionsFloors: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور الطابق",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
      },
      // add
      // edit
      editItemLoading: false,
      dialogEdit: false,
      old_image: null,
      editdItem: {},
      tagsE: [],
      editedImages: [],
      housesE: "",
      dropzoneOptionsE: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        acceptedFiles: "image/*",
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور الطابق",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
        headers: {
          "My-Awesome-Header": "header value",
        },
        files: [],
      },
      dropzoneOptionsEFloors: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        acceptedFiles: "image/*",
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور الطابق",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
        headers: {
          "My-Awesome-Header": "header value",
        },
      },

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
        dataImg: [],
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
          { text: "الصوره", value: "images" },
          { text: "عدد الطوابق", value: "floors.length" },
          { text: "مساحة البناء", value: "building_space" },
          { text: "المساحة الكلية", value: "total_space" },
          { text: "عدد المنازل", value: "houses.length" },
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
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
  },
  watch: {
    tagsE: {
      handler: function () {
        this.addHoE();
      },
      deep: true,
    },
    tags: {
      handler: function () {
        this.addHo();
      },
      deep: true,
    },
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
  computed: {
    editdItemHouses() {
      if (this.editdItem && this.editdItem.houses) {
        return this.editdItem.houses.map((house) => house.name);
      }
      return [];
    },
  },
  methods: {
    addHoE() {
      this.editdItem.houses = [];
      this.tagsE.forEach((tag) => {
        if ("text" in tag) {
          this.editdItem.houses.push(tag.text);
        }
      });
    },
    addHo() {
      this.data.houses = [];
      console.log(this.tags);
      this.tags.forEach((tag) => {
        if ("text" in tag) {
          this.data.houses.push(tag.text);
        }
      });
    },
    handleFileUploadSuccess(file) {
      const dataURL = file.dataURL;
      this.data.images.push(dataURL);
    },
    handleFileRemoved(file) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.images.splice(indexToRemove, 1);
      }
    },
    handleFileUploadSuccessE(file) {
      const dataURL = file.dataURL;
      this.data.images.push(dataURL);
    },
    handleFileRemovedE(file) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.images.splice(indexToRemove, 1);
      }
    },
    handleFileUploadSuccessFloors(file, ind) {
      const dataURL = file.dataURL;
      this.data.floors[ind].images.push(dataURL);
    },
    handleFileRemovedFloors(file, ind) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.floors[ind].images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.floors[ind].images.splice(indexToRemove, 1);
      }
    },
    deletItme(index) {
      this.data.floors.splice(index, 1);
    },
    addNewItems() {
      this.data.floors.push({
        name: "",
        images: [],
        rooms: [
          {
            name: "",
            image: null,
            space: null,
          },
        ],
      });
    },
    addNewItem(index) {
      this.data.floors[index].rooms.push({
        name: "",
        image: null,
        space: null,
      });
    },
    deletItm(index, i) {
      this.data.floors[index].rooms.splice(i, 1);
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    handleFileChange(event, floor, roomIndex) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.floors[floor].rooms[roomIndex].image = reader.result;
        };
        reader.readAsDataURL(file);
      }
      console.log("floors", this.data.floors);
    },
    removeImage(floor, roomIndex) {
      this.data.floors[floor].rooms[roomIndex].image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.images;
    },

    async getCenter() {
      try {
        this.table.loading = true;
        const response = await API.getForms();
        this.content_url = response.data.content_url;
        this.table.centers = response.data.results;
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
    async addCenter(event) {
      if (this.data.images == null) {
        this.showDialogfunction("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else if (this.data.floors.length === 0) {
        this.showDialogfunction("يرجى إضافة تفاصيل الى النموذج", "#FF5252");
      } else if (this.data.houses.length === 0) {
        this.showDialogfunction("يرجى إضافة ارقام المنازل", "#FF5252");
      } else {
        let hasSubDetails = true;
        for (let i = 0; i < this.data.floors.length; i++) {
          if (this.data.floors[i].rooms.length === 0) {
            hasSubDetails = false;
            break;
          }
        }
        if (!hasSubDetails) {
          this.showDialogfunction("يرجى إضافة تفاصيل النموذج الفرعية", "#FF5252");
        } else {
          let allFloorsHaveImages = true;
          for (let i = 0; i < this.data.floors.length; i++) {
            if (this.data.floors[i].images == null) {
              allFloorsHaveImages = false;
              break;
            }
          }
          if (!allFloorsHaveImages) {
            this.showDialogfunction("يرجى إضافة صوره الى الطابق", "#FF5252");
          } else {
            event.preventDefault();
            this.addLoading = true;
            try {
              const response = await API.addForms({
                name: this.data.name,
                total_space: this.data.total_space,
                images: this.data.images,
                houses: this.data.houses,
                floors: this.data.floors,
                building_space: this.data.building_space,
              });
              this.data.name = null;
              this.data.total_space = null;
              this.data.images = [];
              this.data.houses = [];
              this.tags = [];
              this.data.floors = [
                {
                  name: "",
                  images: [],
                  rooms: [
                    {
                      name: "",
                      image: null,
                      space: null,
                    },
                  ],
                },
              ];
              this.data.building_space = null;
              this.dialog = false;
              this.addLoading = false;
              this.getCenter();
              this.showDialogfunction(response.data.message, "primary");
            } catch (error) {
              if (error.response && error.response.status === 401) {
                this.$router.push("/login");
              } else if (error.response && error.response.status === 500) {
                this.showDialogfunction(error.response.data.message, "#FF5252");
              }
            }
          }
        }
      }
    },
    editItem(item) {
      this.editdItem = { ...item };
      this.dialogEdit = true;
      this.tagsE = [];
      for (var i = 0; i < this.editdItem.houses.length; i++) {
        var newData = { text: this.editdItem.houses[i].name, tiClasses: ["ti-valid"] };
        this.tagsE.push(newData);
      }

      this.$nextTick(() => {
        this.$refs.myVueDropzoneE.removeAllFiles();

        var newImages = this.editdItem.images.map((image) => {
          var file = { size: 123, name: "Icon", type: "image/png" };
          var url = this.content_url + image;
          return { file, url };
        });

        newImages.forEach(({ file, url }) => {
          this.$refs.myVueDropzoneE.manuallyAddFile(file, url);
        });
        
        const floorImages = this.editdItem.floors.map((floor) => {
          console.log("floor", floor);
          floor.images.map((image) => {
            console.log("image", image);
            var file = { size: 123, name: "Icon", type: "image/png" };
            var url = this.content_url + image;
            return { file, url };
          });

          return floor;
        });

        console.log("floorImages", floorImages);


        newImages.forEach(({ file, url }) => {
          this.$refs.myVueDropzoneFloors.manuallyAddFile(file, url);
        });
      });
    },
    myVueDropzoneFloors(ind, url) {
      console.log("vdropzone-succeeded triggered");
      const dataa = this.editdItem.floors[ind];
      dataa.images.push(url);
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

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.ti-input[data-v-61d92e31] {
  padding-block: 15px !important;
}
.vue-dropzone > .dz-preview .dz-remove {
  width: 100%;
}
</style>
