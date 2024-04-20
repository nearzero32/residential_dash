<template>
  <div>
    <v-container fluid class="down-top-padding">
      <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
      ></BaseBreadcrumb>
      <v-card class="mx-auto">
        <v-container>
          <v-card-title class="text-h5">اٍضافة نموذج جديد</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="4" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">أسم النموذج</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.name"
                    :rules="Rules.name"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.building_space"
                    :rules="Rules.building_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">المساحة الكلية</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.total_space"
                    :rules="Rules.total_space"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
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
                  <v-checkbox label="الملء التلقائي" v-model="automatic"></v-checkbox>
                  <v-row v-if="automatic == true">
                    <v-col cols="12" md="5" style="padding: 10px">
                      <v-label class="mb-2 font-weight-medium">من</v-label>
                      <v-text-field
                        variant="outlined"
                        v-model="from"
                        color="primary"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" style="padding: 10px">
                      <v-label class="mb-2 font-weight-medium">الى</v-label>
                      <v-text-field
                        variant="outlined"
                        v-model="to"
                        color="primary"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2" style="padding: 10px">
                      <v-btn size="large" @click="addAutomatic" color="primary" text
                        >إضافة</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">التصنيف</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.category"
                    :rules="Rules.category"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">البلوك</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.block_number"
                    :rules="Rules.block_number"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">رقم الشارع</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.street_number"
                    :rules="Rules.street_number"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">صور النموذج</v-label>
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
                              :src="image"
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

                    <v-icon class="mr-2 iconImg" size="40" v-else>mdi-plus</v-icon>
                  </div>
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
                                  <div style="position: relative" class="imgI">
                                    <img
                                      style="height: 100px; width: 100%"
                                      :src="imageF"
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
                            <v-row v-for="(dat, i) in data.floors[ind].rooms" :key="i">
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
                                <v-label class="mb-2 font-weight-medium">الأسم </v-label>
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
                                  <v-col cols="12" md="12" style="padding: 10px">
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
                                        @change="handleFileChangeR($event, ind, i)"
                                        :ref="'fileInput' + ind + i"
                                        style="display: none"
                                      />
                                      <div
                                        class="showImg"
                                        v-if="dat.image"
                                        style="width: 100%"
                                      >
                                        <v-row>
                                          <v-col cols="12" md="2" style="padding: 10px">
                                            <div style="position: relative" class="imgI">
                                              <img
                                                style="height: 100px; width: 100%"
                                                :src="dat.image"
                                                alt="Image"
                                                @click.stop
                                              />
                                              <v-btn
                                                fab
                                                small
                                                color="red"
                                                class="delete-icon"
                                                @click.stop="deleteImageR(index, ind, i)"
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
                <v-btn class="bg-lighterror text-error ml-4" @click="backPage" text
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
        <v-card-title class="headline justify-center">
          {{ dialogDataadd.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDataadd.open = false"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px" style="z-index: 2147483647">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" text @click="backPage"> الرجوع الى صفحة النماذج </v-btn>
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
      // nav
      page: {
        title: "اٍضافة نموذج جديد",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "النماذج",
          disabled: false,
          to: "/admin-forms",
        },
        {
          text: "اٍضافة نموذج جديد",
          disabled: true,
        },
      ],
      // nav

      // addData
      isFormvalid: false,
      automatic: false,
      from: null,
      to: null,
      addLoading: false,
      Rules: {
        name: [(value) => !!value || "يرجى أضافة أسم"],
        price: [(value) => !!value || "يرجى أضافة سعر"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        is_available: [
          (value) => (value !== null && value !== undefined) || "يرجى أضافة الحالة",
        ],
        type: [(value) => !!value || "يرجى أدخال نوع الخدمة"],
        houses: [(value) => !!value || "يرجى أدخال ارقام المنازل"],
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
      tags: [],
      houses: "",
      data: {
        name: null,
        images: [],
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
      },
      // message
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
    tags: {
      handler: function () {
        this.addHo();
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
    addHo() {
      this.data.houses = [];
      this.tags.forEach((tag) => {
        if ("text" in tag) {
          this.data.houses.push(tag.text);
        }
      });
    },
    addAutomatic() {
      if (this.from && this.to) {
        let fromNumber = parseInt(this.from);
        let toNumber = parseInt(this.to);

        if (fromNumber <= toNumber) {
          let tempTags = [];

          for (let i = fromNumber; i <= toNumber; i++) {
            let numberString = i.toString();
            if (!this.tags.includes(numberString)) {
              tempTags.push(numberString);
            }
          }

          this.tags = this.tags.concat(tempTags);
        } else {
          this.showDialogfunctionadd(
            'قيمة "من" يجب أن تكون أقل من أو تساوي قيمة "إلى"',
            "#FF5252"
          );
        }
      } else {
        this.showDialogfunctionadd('يرجى إدخال قيمة لـ "من" و "إلى"', "#FF5252");
      }
    },
    backPage() {
      this.dialogData.open = false;
      this.$router.push("/admin-forms");
    },
    Continuation() {
      this.tags = [];
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
              this.data.floors[ind].images = this.data.floors[ind].images.concat(
                imagesArrayy
              );
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
      } else if (this.data.houses.length === 0) {
        this.showDialogfunctionadd("يرجى إضافة ارقام المنازل", "#FF5252");
      } else {
        let hasSubDetails = true;
        for (let i = 0; i < this.data.floors.length; i++) {
          if (this.data.floors[i].rooms.length === 0) {
            hasSubDetails = false;
            break;
          }
        }
        if (!hasSubDetails) {
          this.showDialogfunctionadd("يرجى إضافة تفاصيل النموذج الفرعية", "#FF5252");
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
            try {
              const response = await API.addForms({
                name: this.data.name,
                total_space: this.data.total_space,
                images: this.data.images,
                houses: this.data.houses,
                floors: this.data.floors,
                building_space: this.data.building_space,
                category: this.data.category,
                block_number: this.data.block_number,
                street_number: this.data.street_number,
              });
              this.addLoading = false;
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
  },
};
</script>

<style>
.div-img {
  width: 100%;
  height: auto;
  background-color: #00000026;
  border-radius: 10px;
  display: grid;
  place-items: center;
  padding: 15px;
}
.imgI:hover .delete-icon {
  opacity: 1 !important;
}
</style>
