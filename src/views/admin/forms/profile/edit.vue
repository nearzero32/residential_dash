<template>
  <div>
    <v-container fluid class="down-top-padding">
      <v-card class="mx-auto">
        <v-container>
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">أسم النموذج</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium"
                    >مساحات الأرض</v-label
                  >
                  <vue-tags-input
                    v-model="tagsTotalAreass"
                    :tags="tagsTotalAreas"
                    @tags-changed="(newTags) => (tagsTotalAreas = newTags)"
                    variant="outlined"
                    :rules="Rules.tagsTotalAreas"
                    placeholder=" الرجاء إضافة المساحة ثم الضغط على زر الإدخال Entr"
                    color="primary"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium"
                    >مساحات البناء
                  </v-label>
                  <vue-tags-input
                    v-model="tagsBuildingSpacess"
                    :tags="tagsBuildingSpaces"
                    @tags-changed="(newTags) => (tagsBuildingSpaces = newTags)"
                    variant="outlined"
                    :rules="Rules.BuildingSpaces"
                    placeholder=" الرجاء إضافة المساحة ثم الضغط على زر الإدخال Entr"
                    color="primary"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="3" style="padding-block: 4%">
                  <v-btn @click="addHouesS" color="primary"
                    >إضافة وحدات سكنية الى المساحات</v-btn
                  >
                </v-col>

                <v-col
                  cols="12"
                  md="12"
                  style="padding: 10px"
                  v-if="housesNumbers && housesNumbers.length > 0"
                >
                  <v-row
                    v-for="(SpacesItem, index) in housesNumbers"
                    :key="index"
                  >
                    <v-col cols="12" md="4" style="padding: 10px">
                      <v-label class="mb-2 font-weight-medium"
                        >ارقام الوحدات السكنية</v-label
                      >
                      <vue-tags-input
                        v-model="SpacesItem.houses"
                        :tags="SpacesItem.tags"
                        @tags-changed="(newTags) => addHo(newTags, index)"
                        variant="outlined"
                        :rules="Rules.houses"
                        placeholder=" الرجاء إضافة رقم المنزل ثم الضغط على زر الإدخال Entr"
                        color="primary"
                        outlined
                      />
                      <!-- <v-checkbox
                        label="الملء التلقائي"
                        v-model="SpacesItem.automatic"
                      ></v-checkbox>
                      <v-row v-if="SpacesItem.automatic == true">
                        <v-col cols="12" md="5" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">من</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="SpacesItem.from"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="5" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">الى</v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="SpacesItem.to"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="2" style="padding: 10px">
                          <v-btn
                            size="large"
                            @click="addAutomatic(index)"
                            color="primary"
                            text
                            >ادخال</v-btn
                          >
                        </v-col>
                      </v-row> -->
                    </v-col>
                    <v-col cols="12" md="3" style="padding: 10px">
                      <v-label class="mb-2 font-weight-medium"
                        >مساحة الأرض</v-label
                      >
                      <v-text-field
                        variant="outlined"
                        :value="SpacesItem.total_space"
                        disabled
                        color="primary"
                        outlined
                      ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="3" style="padding: 10px">
                      <v-label class="mb-2 font-weight-medium"
                        >مساحة البناء</v-label
                      >
                      <v-text-field
                        variant="outlined"
                        :value="SpacesItem.building_space"
                        disabled
                        color="primary"
                        outlined
                      ></v-text-field>
                    </v-col>

                  </v-row>
                  <div style="padding-block: 4%">
                    <v-btn
                      @click="checkHousesNames"
                      :loading="checkHousesNamesLoading"
                      color="primary"
                      >التحقق من الوحدات السكنية المكررة</v-btn
                    >
                  </div>
                </v-col>
                <v-row v-if="isTrue == true">
                  <v-col
                    cols="12"
                    md="4"
                    style="padding: 10px"
                    v-if="data.building_type == 'منازل'"
                  >
                    <v-label class="mb-2 font-weight-medium">التصنيف</v-label>
                    <v-text-field
                      variant="outlined"
                      v-model="data.category"
                      :rules="Rules.category"
                      color="primary"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    style="padding: 10px"
                    v-if="data.building_type == 'منازل'"
                  >
                    <v-label class="mb-2 font-weight-medium"
                      >رقم الشارع</v-label
                    >
                    <v-text-field
                      variant="outlined"
                      v-model="data.street_number"
                      :rules="Rules.street_number"
                      color="primary"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" style="padding: 10px">
                    <v-label class="mb-2 font-weight-medium">البلوك</v-label>
                    <v-text-field
                      variant="outlined"
                      v-model="data.block_number"
                      :rules="Rules.block_number"
                      color="primary"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" style="padding: 10px">
                    <v-label class="mb-2 font-weight-medium"
                      >صور النموذج</v-label
                    >
                    <div
                      @click="$refs.fileInputt.click()"
                      class="div-img"
                      style="z-index: 9999"
                    >
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChange"
                        ref="fileInputt"
                        style="display: none"
                        multiple
                      />
                      <div
                        class="showImg"
                        v-if="data.images && data.images.length > 0"
                        style="width: 100%"
                      >
                        <v-row>
                          <v-col
                            cols="12"
                            md="2"
                            v-for="(image, index) in data.images"
                            :key="index"
                            style="padding: 10px"
                          >
                            <div style="position: relative" class="imgI">
                              <img
                                style="height: 100px; width: 100%"
                                :src="
                                isBase64(image)
                                  ? image
                                  : content_url + image
                              "
                                alt="Image"
                                @click.stop
                              />
                              <v-btn
                                fab
                                small
                                color="red"
                                class="delete-icon"
                                @click.stop="deleteImage(index)"
                                style="
                                  position: absolute;
                                  top: 50%;
                                  left: 50%;
                                  transform: translate(-50%, -50%);
                                  z-index: 1;
                                  opacity: 0;
                                "
                              >
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </div>

                      <v-icon class="mr-2 iconImg" size="40" v-else
                        >mdi-plus</v-icon
                      >
                    </div>
                  </v-col>
                  <v-col
                    v-for="(dataa, ind) in data.floors"
                    :key="ind"
                    cols="12"
                    md="12"
                  >
                    <v-container>
                      <v-card variant="outlined" class="cardNam">
                        <v-row style="padding: 10px">
                          <v-col cols="12" md="12" style="padding: 10px">
                            <p style="padding: 10px; margin: 0px">
                              تفاصيل النموذج
                            </p>
                          </v-col>
                          <v-col cols="12" md="12" style="padding: 10px">
                            <v-btn @click="deletItme(ind)" color="error"
                              >حذف الطابق</v-btn
                            >
                          </v-col>
                          <v-col cols="12" md="6" style="padding: 10px">
                            <v-label class="mb-2 font-weight-medium"
                              >أسم الطابق</v-label
                            >
                            <v-text-field
                              variant="outlined"
                              v-model="dataa.name"
                              :rules="Rules.details.title"
                              color="primary"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="12" style="padding: 10px">
                            <v-label class="mb-2 font-weight-medium"
                              >صور الطابق {{ dataa.name }}</v-label
                            >
                            <div
                              @click="openFileInput(ind)"
                              class="div-img"
                              style="z-index: 9999"
                            >
                              <input
                                type="file"
                                accept="image/png, image/jpeg, image/bmp"
                                @change="handleFileChangeF($event, ind)"
                                :ref="'fileInput' + ind"
                                style="display: none"
                                multiple
                              />
                              <div
                                class="showImg"
                                v-if="dataa.images && dataa.images.length > 0"
                                style="width: 100%"
                              >
                                <v-row>
                                  <v-col
                                    cols="12"
                                    md="2"
                                    v-for="(imageF, index) in dataa.images"
                                    :key="index"
                                    style="padding: 10px"
                                  >
                                    <div
                                      style="position: relative"
                                      class="imgI"
                                    >
                                      <img
                                        style="height: 100px; width: 100%"
                                        :src="
                                          isBase64(imageF)
                                            ? imageF
                                            : content_url + imageF
                                        "
                                        alt="Image"
                                        @click.stop
                                      />
                                      <v-btn
                                        fab
                                        small
                                        color="red"
                                        class="delete-icon"
                                        @click.stop="deleteImageF(index, ind)"
                                        style="
                                          position: absolute;
                                          top: 50%;
                                          left: 50%;
                                          transform: translate(-50%, -50%);
                                          z-index: 1;
                                          opacity: 0;
                                        "
                                      >
                                        <v-icon>mdi-delete</v-icon>
                                      </v-btn>
                                    </div>
                                  </v-col>
                                </v-row>
                              </div>
                              <v-icon class="mr-2 iconImg" size="40" v-else
                                >mdi-plus</v-icon
                              >
                            </div>
                          </v-col>

                          <v-col cols="12" md="12" style="padding: 10px">
                            <v-container style="border: solid 2px #e5e5e5">
                              <v-row
                                v-for="(dat, i) in data.floors[ind].rooms"
                                :key="i"
                              >
                                <v-col cols="12" md="12" style="padding: 10px">
                                  <p style="padding: 10px; margin: 0px">
                                    محتويات {{ dataa.name }}
                                  </p>
                                </v-col>
                                <v-col cols="12" md="12" style="padding: 10px">
                                  <v-btn @click="deletItm(ind, i)" color="error"
                                    >حذف محتويات الطابق</v-btn
                                  >
                                </v-col>

                                <v-col cols="12" md="6" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >الأسم
                                  </v-label>
                                  <v-autocomplete
                                    label="الأسم "
                                    :items="housesRoomNames"
                                    item-text="name"
                                    item-value="name"
                                    variant="outlined"
                                    v-model="dat.name"
                                    :rules="Rules.details.sub_details.name"
                                    color="primary"
                                    outlined
                                  ></v-autocomplete>
                                </v-col>
                                <v-col cols="12" md="12" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >المساحة ( {{ dat.name }} )</v-label
                                  >
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
                                      style="padding: 10px"
                                    >
                                      <v-label class="mb-2 font-weight-medium"
                                        >صورة ( {{ dat.name }} )</v-label
                                      >
                                      <div
                                        @click="openFileInputR(ind, i)"
                                        class="div-img"
                                        style="z-index: 9999"
                                      >
                                        <input
                                          type="file"
                                          accept="image/png, image/jpeg, image/bmp"
                                          @change="
                                            handleFileChangeR($event, ind, i)
                                          "
                                          :ref="'fileInput' + ind + i"
                                          style="display: none"
                                        />
                                        <div
                                          class="showImg"
                                          v-if="dat.image"
                                          style="width: 100%"
                                        >
                                          <v-row>
                                            <v-col
                                              cols="12"
                                              md="2"
                                              style="padding: 10px"
                                            >
                                              <div
                                                style="position: relative"
                                                class="imgI"
                                              >
                                                <img
                                                  style="
                                                    height: 100px;
                                                    width: 100%;
                                                  "
                                                  :src="
                                                    isBase64(dat.image)
                                                      ? dat.image
                                                      : content_url + dat.image
                                                  "
                                                  alt="Image"
                                                  @click.stop
                                                />
                                                <v-btn
                                                  fab
                                                  small
                                                  color="red"
                                                  class="delete-icon"
                                                  @click.stop="
                                                    deleteImageR(index, ind, i)"
                                                  style="
                                                    position: absolute;
                                                    top: 50%;
                                                    left: 50%;
                                                    transform: translate(
                                                      -50%,
                                                      -50%
                                                    );
                                                    z-index: 1;
                                                    opacity: 0;
                                                  "
                                                >
                                                  <v-icon>mdi-delete</v-icon>
                                                </v-btn>
                                              </div>
                                            </v-col>
                                          </v-row>
                                        </div>
                                        <v-icon
                                          class="mr-2 iconImg"
                                          size="40"
                                          v-else
                                          >mdi-plus</v-icon
                                        >
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-col>
                          <v-col cols="12" md="6" style="padding: 10px">
                            <v-btn @click="addNewItem(ind)" color="success"
                              >إضافة محتوى جديد للطابق</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12" style="padding: 10px">
                    <v-row>
                      <v-col cols="12" md="6" style="padding: 10px">
                        <v-btn @click="addNewItems" color="success"
                          >إضافة طابق جديد</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-row>
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions v-if="isTrue == true">
                <v-btn
                  size="large"
                  @click="addCenter"
                  color="primary"
                  :loading="addLoading"
                  :disabled="!isFormvalid"
                  text
                  >تعديل</v-btn
                >
                <v-btn
                  class="bg-lighterror text-error ml-4"
                  @click="backPage"
                  text
                  >أغلاق</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-container>
      </v-card>
    </v-container>

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogDataadd.open" max-width="500px">
      <v-toolbar :color="dialogDataadd.color" dense />
      <v-card>
        <v-card-title class="headline justify-center"> </v-card-title>
        <v-card-text>
          <h3>{{ dialogDataadd.bodyText }}</h3>
          <br />
          <h3 v-if="dialogDataadd.bodyTextN !== null">
            {{ dialogDataadd.bodyTextN }}
          </h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDataadd.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- - Dailog for show info to user -->
    <v-dialog
      v-model="dialogData.open"
      max-width="500px"
      style="z-index: 2147483647"
    >
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" text @click="backPage">
            الرجوع الى صفحة النماذج
          </v-btn>
          <v-spacer />
          <v-btn color="primary" text @click="Continuation">
            الاستمرار في اٍضافة نماذج
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import API from "@/api/adminAPI";

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      userDataString: null,
      // addData

      isTrue: false,
      isFormvalid: false,
      automatic: false,
      from: null,
      content_url: null,
      to: null,
      checkHousesNamesLoading: false,
      addLoading: false,
      Rules: {
        floor_number: [(value) => !!value || "الحقل مطلوب"],
        apartment_building: [(value) => !!value || "الحقل مطلوب"],
        building_type: [(value) => !!value || "يرجى تحديد نوع النموذج"],
        BuildingSpaces: [
          (value) => !!value || "يرجى ادخال مساحات البناء النكوذج المتوفرة",
        ],
        TotalAreas: [
          (value) => !!value || "يرجى ادخال مساحات البناء النكوذج المتوفرة",
        ],
        name: [(value) => !!value || "يرجى أضافة أسم"],
        price: [(value) => !!value || "يرجى أضافة سعر"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        is_available: [
          (value) =>
            (value !== null && value !== undefined) || "يرجى أضافة الحالة",
        ],
        type: [(value) => !!value || "يرجى أدخال نوع الخدمة"],
        houses: [(value) => !!value || "يرجى أدخال ارقام الوحدات السكنية"],
        category: [(value) => !!value || "الحقل مطلوب"],
        block_number: [(value) => !!value || "الحقل مطلوب"],
        street_number: [(value) => !!value || "الحقل مطلوب"],
        details: {
          title: [(value) => !!value || "يرجى أدخال أسم الطابق"],
          sub_details: {
            name: [(value) => !!value || "يرجى أدخال أسم الغرفة"],
            value: [(value) => !!value || "يرجى أدخال مساحة الغرفة"],
          },
        },
      },
      SpacesItems: [],
      tagsBuildingSpaces: [],
      tagsBuildingSpacess: "",
      tagsTotalAreas: [],
      tagsTotalAreass: "",
      tags: [],
      houses: "",
      data: {
        id: null,
        building_type: "منازل",
        apartment_building: null,
        floor_number: null,
        typeFrom: null,
        name: null,
        images: [],
        TotalAreas: [],
        BuildingSpaces: [],
        houses: [],
        total_space: null,
        building_space: null,
        category: null,
        block_number: null,
        street_number: null,
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
      housesRoomNames: [],
      housesNumbers: [],
      // addData

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message

      // message
      dialogDataadd: {
        open: false,
        color: "primary",
        bodyText: "test",
        bodyTextN: null,
      },
      // message
    };
  },
  created() {
    const itemForm = JSON.parse(localStorage.getItem("itemForm"));
    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.data.id = itemForm._id
    this.data.name = itemForm.name
    this.data.category = itemForm.category
    this.data.street_number = itemForm.street_number
    this.data.block_number = itemForm.block_number
    this.data.images = itemForm.images
    this.data.floors = itemForm.floors
    this.content_url = userDataString.content_url
    itemForm.building_space.forEach((tag) => {
      let numberString = tag.toString();
      let newData = { text: numberString, tiClasses: ["ti-valid"] }
      this.tagsBuildingSpaces.push(newData)
    })
    itemForm.total_space.forEach((tag) => {
      let numberString = tag.toString();
      let newData = { text: numberString, tiClasses: ["ti-valid"] }
      this.tagsTotalAreas.push(newData)
    })
    
    let housesData = JSON.parse(JSON.stringify(itemForm.houses));

    housesData.sort((a, b) => a.building_space - b.building_space || a.total_space - b.total_space);

    let housesNumber = [];
    let currentGroup = null;

    housesData.forEach((house) => {
        if (!currentGroup || currentGroup.building_space !== house.building_space || currentGroup.total_space !== house.total_space) {
            if (currentGroup) {
                housesNumber.push(currentGroup);
            }
            currentGroup = {
                house: [],
                tags: [],
                houses: "",
                building_space: house.building_space,
                total_space: house.total_space,
                automatic: false
            };
        }
        currentGroup.tags.push({ text: house.name, tiClasses: ["ti-valid"] });
        currentGroup.house.push(house.name);
    });

    if (currentGroup) {
        housesNumber.push(currentGroup);
    }
    this.housesNumbers = housesNumber
    this.getCenter();
  },
  watch: {
    tagsBuildingSpaces: {
      handler: function () {
        this.addTagsBuildingSpaces();
      },
      deep: true,
    },
    tagsTotalAreas: {
      handler: function () {
        this.addTagsTotalAreas();
      },
      deep: true,
    },
  },
  methods: {
    async getCenter() {
      try {
        const response = await API.housesRoomNames();
        this.housesRoomNames = response.data.results;
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
    addTagsBuildingSpaces() {
      this.data.BuildingSpaces = [];
      this.data.building_space = [];
      this.tagsBuildingSpaces.forEach((tag) => {
        let tagText = typeof tag === 'object' && tag.text ? tag.text : tag;
        if (typeof tagText === 'number') {
          tagText = tagText.toString();
        }
        this.data.BuildingSpaces.push(tagText);
        this.data.building_space.push(tagText);
      });
      this.isTrue = true;
    },

    addTagsTotalAreas() {
      this.data.TotalAreas = [];
      this.data.total_space = [];
      this.tagsTotalAreas.forEach((tag) => {
        if (tag.text) {
          let tagText = typeof tag === 'object' && tag.text ? tag.text : tag;
          if (typeof tagText === 'number') {
            tagText = tagText.toString();
          }
          this.data.TotalAreas.push(tagText);
          this.data.total_space.push(tagText);
        }
      });
      this.isTrue = true;
    },
    addHouesS() {
      if (this.data.BuildingSpaces.length === this.data.TotalAreas.length) {
        // this.housesNumbers = [];
        let errorOccurred = false;

        this.data.TotalAreas.forEach((totalArea, index) => {
          const buildingSpace = this.data.BuildingSpaces[index];
          if (parseInt(totalArea) < parseInt(buildingSpace)) {
            this.showDialogfunctionadd(
              `خطأ: مساحة الأرض (${totalArea}) اصغر من مساحة البناء الخاصة بها (${buildingSpace})`,
              "#FF5252"
            );
            errorOccurred = true;
          }
        });

        if (errorOccurred) {
          return;
        }
          let tempData = JSON.parse(JSON.stringify(this.housesNumbers));

          this.housesNumbers = [];

          this.data.TotalAreas.forEach((area, index) => {
              let found = tempData.find(item => item.total_space.toString() === area);
              if (found) {
                  this.housesNumbers.push(found);
              } else {
                  let newObj = {
                      house: [],
                      tags: [],
                      houses: "",
                      building_space: this.data.BuildingSpaces[index],
                      total_space: area,
                      automatic: false
                  };
                  this.housesNumbers.push(newObj);
              }
          });
      } else {
        this.SpacesItems = [];
        var maxLength = Math.max(
          this.data.BuildingSpaces.length,
          this.data.TotalAreas.length
        );

        if (maxLength === this.data.BuildingSpaces.length) {
          this.showDialogfunctionadd(
            `خطأ: عدد مساحات البناء اكثر من عدد مساحات الأرض`,
            "#FF5252"
          );
        } else if (maxLength === this.data.TotalAreas.length) {
          this.showDialogfunctionadd(
            `خطأ: عدد مساحات الأرض اكثر من عدد مساحات البناء`,
            "#FF5252"
          );
        }
      }
    },
    addHo(newTags, index) {
      this.housesNumbers[index].house = []
      let dd = newTags.map(tag => typeof tag === 'object' && tag.text ? tag.text : tag);

      let found = false;
      let numberx = null;
      outerLoop:
      for (let i = 0; i < dd.length; i++) {
        let number = dd[i];
        for (let j = 0; j < this.housesNumbers.length; j++) {
          let housea = this.housesNumbers[j];
          for (let k = 0; k < housea.house.length; k++) {
            let tag = housea.house[k];
            if (tag == number) {
              numberx = number;
              found = true;
              break outerLoop;
            }
          }
        }
      }
      if (found) {
        this.housesNumbers[index].house = [];
        this.housesNumbers[index].tags = [];
        this.housesNumbers[index].houses = "";
        this.showDialogfunctionadd(
          `خطأ: تم إضافة المنزل (${numberx}) في مساحات أخرى`,
          "#FF5252"
        );
        for (let i = 0; i < dd.length; i++) {
          if(numberx !== dd[i]) {
            this.housesNumbers[index].house.push(dd[i]);
            this.housesNumbers[index].tags.push({ text: dd[i], tiClasses: ["ti-valid"] });
          }
        }
      } else {
        this.housesNumbers[index].house = [];
        this.housesNumbers[index].tags = [];
        for (let i = 0; i < dd.length; i++) {
          this.housesNumbers[index].house.push(dd[i]);
          this.housesNumbers[index].tags.push({ text: dd[i], tiClasses: ["ti-valid"] });
        }
      }
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },

    isHouseAlreadyAdded(newHouse, currentIndex, duplicateHouses) {
      for (let i = 0; i < this.SpacesItems.length; i++) {
        if (
          i !== currentIndex &&
          this.SpacesItems[i].house &&
          this.SpacesItems[i].house.includes(newHouse)
        ) {
          duplicateHouses.push(newHouse);
          return true;
        }
      }
      return false;
    },
    addAutomatic(index) {
      if (this.SpacesItems[index].from && this.SpacesItems[index].to) {
        let fromNumber = parseInt(this.SpacesItems[index].from);
        let toNumber = parseInt(this.SpacesItems[index].to);

        if (fromNumber <= toNumber) {
          let tempTags = [];

          for (let i = fromNumber; i <= toNumber; i++) {
            let numberString = i.toString();
            let newData = { text: numberString, tiClasses: ["ti-valid"] };

            if (
              !this.SpacesItems[index].house.some(
                (item) => item.text === numberString
              )
            ) {
              tempTags.push(newData);
            }
          }

          this.SpacesItems[index].house =
            this.SpacesItems[index].house.concat(tempTags);
          this.SpacesItems[index].tags =
            this.SpacesItems[index].tags.concat(tempTags);
          this.addHo(this.SpacesItems[index].tags, index);
        } else {
          this.showDialogfunctionadd(
            'قيمة "من" يجب أن تكون أقل من أو تساوي قيمة "إلى"',
            "#FF5252"
          );
        }
      } else {
        this.showDialogfunctionadd(
          'يرجى إدخال قيمة لـ "من" و "إلى"',
          "#FF5252"
        );
      }
    },

    equals(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    },
    backPage() {
      this.dialogData.open = false;
      this.$router.push("/admin-forms");
    },
    Continuation() {
      this.SpacesItems = [];
      this.data.BuildingSpaces = [];
      this.data.building_space = [];
      this.tagsBuildingSpaces = [];
      this.isTrue = false;
      this.tagsTotalAreas = [];
      this.houses = "";
      this.data = {
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
      };
      this.dialogData.open = false;
    },

    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },

    showDialogfunctionadd(bodyText, color) {
      this.dialogDataadd.open = true;
      this.dialogDataadd.bodyText = bodyText;
      this.dialogDataadd.color = color;
    },

    openFileInput(ind) {
      this.$refs["fileInput" + ind][0].click();
    },
    openFileInputR(ind, i) {
      this.$refs["fileInput" + ind + i][0].click();
    },

    handleFileChange(event) {
      const files = event.target.files;

      if (files) {
        const imagesArray = [];
        const readersArray = [];

        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          const file = files[i];

          readersArray.push(reader);

          reader.onload = () => {
            imagesArray.push(reader.result);

            if (imagesArray.length === files.length) {
              this.data.images = this.data.images.concat(imagesArray);
            }
          };

          reader.readAsDataURL(file);
        }
      }
    },
    deleteImage(index) {
      this.data.images.splice(index, 1);
    },
    handleFileChangeF(event, ind) {
      const files = event.target.files;

      if (files) {
        const imagesArrayy = [];
        const readersArrayy = [];

        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          const file = files[i];

          readersArrayy.push(reader);

          reader.onload = () => {
            imagesArrayy.push(reader.result);

            if (imagesArrayy.length === files.length) {
              this.data.floors[ind].images =
                this.data.floors[ind].images.concat(imagesArrayy);
            }
          };

          reader.readAsDataURL(file);
        }
      }
    },
    handleFileChangeR(event, ind, i) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.floors[ind].rooms[i].image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    deleteImageF(index, ind) {
      this.data.floors[ind].images.splice(index, 1);
    },
    deleteImageR(index, ind, i) {
      this.data.floors[ind].rooms[i].image = null;
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
    deletItme(index) {
      this.data.floors.splice(index, 1);
    },
    deletItm(index, i) {
      this.data.floors[index].rooms.splice(i, 1);
    },
    async addCenter(event) {
      if (this.data.images == null) {
        this.showDialogfunctionadd("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else if (this.data.floors.length === 0) {
        this.showDialogfunctionadd("يرجى إضافة تفاصيل الى النموذج", "#FF5252");
      } else {
        let hasSubDetails = true;
        for (let i = 0; i < this.data.floors.length; i++) {
          if (this.data.floors[i].rooms.length === 0) {
            hasSubDetails = false;
            break;
          }
        }
        if (!hasSubDetails) {
          this.showDialogfunctionadd(
            "يرجى إضافة تفاصيل النموذج الفرعية",
            "#FF5252"
          );
        } else {
          let allFloorsHaveImages = true;
          for (let i = 0; i < this.data.floors.length; i++) {
            if (this.data.floors[i].images == null) {
              allFloorsHaveImages = false;
              break;
            }
          }
          if (!allFloorsHaveImages) {
            this.showDialogfunctionadd("يرجى إضافة صوره الى الطابق", "#FF5252");
          } else {
            event.preventDefault();
            this.addLoading = true;
            var houseGroups = {};

            for (var ind = 0; ind < this.housesNumbers.length; ind++) {
              var elm = this.housesNumbers[ind];
              for (var indH = 0; indH < elm.house.length; indH++) {
                var houseNumber = elm.house[indH];
                if (!houseGroups[houseNumber]) {
                  houseGroups[houseNumber] = {
                    total_space: parseInt(elm.total_space),
                    building_space: parseInt(elm.building_space),
                  };
                } else {
                  houseGroups[houseNumber].total_space += parseInt(
                    elm.total_space
                  );
                  houseGroups[houseNumber].building_space += parseInt(
                    elm.building_space
                  );
                }
              }
            }

            var housesArray = Object.keys(houseGroups)
              .map(function (houseNumber) {
                return {
                  name: houseNumber,
                  total_space: houseGroups[houseNumber].total_space,
                  building_space: houseGroups[houseNumber].building_space,
                };
              })
              .sort(function (a, b) {
                return parseInt(a.name) - parseInt(b.name);
              });
            try {
              const response = await API.editForms({
                id: this.data.id,
                building_type: this.data.building_type,
                name: this.data.name,
                images: this.data.images,
                total_space: this.data.total_space,
                building_space: this.data.building_space,
                category: this.data.category,
                block_number: this.data.block_number,
                street_number: this.data.street_number,
                apartment_building: this.data.apartment_building,
                floor_number: this.data.floor_number,
                houses: housesArray,
                floors: this.data.floors,
              });
              this.addLoading = false;
              localStorage.setItem("itemFormMass", response.data.message);
              this.$router.push("/admin-forms");
            } catch (error) {
              if (error.response && error.response.status === 401) {
                this.$router.push("/login");
              } else if (error.response && error.response.status === 500) {
                this.showDialogfunction(error.response.data.message, "#FF5252");
              }
            } finally {
        this.addLoading = false;
      }
          }
        }
      }
    },
    async checkHousesNames() {
      this.checkHousesNamesLoading = true;
      var houseGroups = {};

      for (var ind = 0; ind < this.housesNumbers.length; ind++) {
        var elm = this.housesNumbers[ind];
        for (var indH = 0; indH < elm.house.length; indH++) {
          var houseNumber = elm.house[indH];
          if (!houseGroups[houseNumber]) {
            houseGroups[houseNumber] = {
              total_space: parseInt(elm.totalArea),
              building_space: parseInt(elm.buildingArea),
            };
          } else {
            houseGroups[houseNumber].total_space += parseInt(elm.totalArea);
            houseGroups[houseNumber].building_space += parseInt(
              elm.buildingArea
            );
          }
        }
      }

      var housesArray = Object.keys(houseGroups)
        .map(function (houseNumber) {
          return {
            name: houseNumber,
            total_space: houseGroups[houseNumber].total_space,
            building_space: houseGroups[houseNumber].building_space,
          };
        })
        .sort(function (a, b) {
          return parseInt(a.name) - parseInt(b.name);
        });

      try {
        const response = await API.checkHousesNames({
          id: this.data.id,
          houses: housesArray,
        });
        console.log(response);
        this.checkHousesNamesLoading = false;
        this.isTrue = true;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.checkHousesNamesLoading = false;
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.checkHousesNamesLoading = false;
          this.showDialogfunctionadd(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.checkHousesNamesLoading = false;
          this.dialogDataadd.open = true;
          this.dialogDataadd.bodyText = error.response.data.message;
          this.dialogDataadd.bodyTextN = `( ${error.response.data.results} )`;
          this.dialogDataadd.color = "#FF5252";
        }
      }
    },
  },
};
</script>

<style>
.div-img {
  width: 100%;
  height: auto;
  background-color: #0000000f;
  border-radius: 10px;
  display: grid;
  place-items: center;
  padding: 15px;
}
.imgI:hover .delete-icon {
  opacity: 1 !important;
}
</style>
