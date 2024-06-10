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
          <v-card-text class="text-h6" style="padding-block: 5px"
            >اٍضافة نموذج شقق</v-card-text
          >
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
                  <v-label class="mb-2 font-weight-medium"
                    >أسماء العمارات</v-label
                  >
                  <vue-tags-input
                    v-model="BuildingNames"
                    :tags="tagsBuildingNames"
                    @tags-changed="(newTags) => (tagsBuildingNames = newTags)"
                    variant="outlined"
                    :rules="Rules.BuildingNames"
                    placeholder=" الرجاء إضافة أسم العمارة ثم الضغط على زر الإدخال Entr"
                    color="primary"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="4" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium"
                    >البلوك</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="data.block_number"
                    :rules="Rules.block_number"
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

                    <v-icon class="mr-2 iconImg" size="40" v-else
                      >mdi-plus</v-icon
                    >
                  </div>
                </v-col>

                <v-col cols="12" md="12" style="padding: 10px">
                  <v-row justify="center">
                    <v-expansion-panels
                      v-model="panel"
                      :disabled="disabled"
                      multiple
                    >
                      <v-expansion-panel v-for="(Space, index) in data.Spaces"
                        :key="index">
                        <v-expansion-panel-header>
                            <v-row>
                              <v-col cols="6" md="6" style="padding-block: 0px;">
                                المساحة
                                <span v-if="Space.total_space !== null && Space.total_space !== ''">( {{ Space.total_space }} )</span>
                                <span v-else>( جديدة )</span>
                              </v-col>
                              <v-col cols="6" md="6" style="padding: 0px;">
                                <v-btn style="color: red !important; height: auto; padding: 0px;" text @click="deleteSpace(index)">
                                  <v-icon>mdi-delete</v-icon>
                                  <span>
                                    حذف المساحة
                                    <span v-if="Space.total_space !== null && Space.total_space !== ''">( {{ Space.total_space }} )</span>
                                    <span v-else>( جديدة )</span>
                                  </span>
                                </v-btn>
                              </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-row
                            style="border: solid 1px #cccccc; margin-bottom: 15px"
                          >                            
                            <v-col cols="12" md="12" style="padding: 10px">
                              <v-row style="align-items: center;">
                                <v-col cols="12" md="5" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >المساحة الكلية</v-label
                                  >
                                  <v-text-field
                                    variant="outlined"
                                    v-model="Space.total_space"
                                    :rules="Rules.total_space"
                                    :disabled="Space.addSpaceInput"
                                    color="primary"
                                    outlined
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="5" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >مساحة البناء</v-label
                                  >
                                  <v-text-field
                                    variant="outlined"
                                    v-model="Space.building_space"
                                    :rules="Rules.building_space"
                                    :disabled="Space.addSpaceInput"
                                    color="primary"
                                    outlined
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="2" style="padding: 10px" v-if="!Space.addSpaceInput && !Space.isStorg">
                                  <v-btn @click="addS(index)" color="primary">إضافة</v-btn>
                                </v-col>
                                <v-col cols="12" md="2" style="padding: 10px" v-else-if="Space.addSpaceInput == true">
                                  <v-btn @click="storg(index)" color="primary">تعديل</v-btn>
                                </v-col>
                                <v-col cols="12" md="2" style="padding: 10px" v-else>
                                  <v-btn @click="addSpaceInputF(index)" color="primary">تأكيد</v-btn>
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col cols="12" md="12" style="padding: 10px" v-if="Space.addSpaceInput == true">
                              <v-row style="align-items: center;">
                                <v-col cols="12" md="5" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >ارقام الشقق</v-label
                                  >
                                  <vue-tags-input
                                    v-model="Space.tag.houseNumber"
                                    :tags="Space.tag.tagsHouseNumber"
                                    @tags-changed="
                                      (newTags) => (Space.tag.tagsHouseNumber = newTags)
                                    "
                                    variant="outlined"
                                    :rules="Rules.houseNumber"
                                    placeholder=" الرجاء إضافة رقم الشقة ثم الضغط على زر الإدخال Entr"
                                    color="primary"
                                    outlined
                                  />
                                </v-col>
                                <v-col cols="12" md="5" style="padding: 10px">
                                  <v-label class="mb-2 font-weight-medium"
                                    >رقم الطابق</v-label
                                  >
                                  <v-text-field
                                    variant="outlined"
                                    v-model="Space.tag.FloorNumber"
                                    color="primary"
                                    outlined
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="2" style="padding: 10px">
                                  <v-btn @click="addHouesFloor(index)" color="primary"
                                    >ادخال</v-btn
                                  >
                                </v-col>
                                <v-col cols="12" md="12" style="padding: 10px" v-if="Space.table.length > 0">
                                  <table
                                    border="1"
                                    style="width: 100%; border-collapse: collapse"
                                  >
                                    <thead>
                                      <tr style="background-color: #bdd6ee">
                                        <th>ارقام الشقق</th>
                                        <th>رقم الطابق</th>
                                        <th>العمليات</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(showHouses, showIndex) in Space.table"
                                        :key="showIndex"
                                      >
                                        <td>
                                          <span
                                            v-for="(
                                              showHous, index
                                            ) in showHouses.HouseNumber"
                                            :key="index"
                                          >
                                            {{ showHous }}
                                            <span
                                              v-if="
                                                index !==
                                                showHouses.HouseNumber.length - 1"
                                              >,</span
                                            >
                                          </span>
                                        </td>
                                        <td>{{ showHouses.FloorNumber }}</td>
                                        <td>
                                          <VTooltip bottom>
                                            <template #activator="{ attrs }">
                                              <v-icon
                                                color="rgb(243 216 1)"
                                                v-bind="attrs"
                                                size="20"
                                                @click="
                                                  editShowHouses(showIndex, index)"
                                              >
                                                mdi-note-edit
                                              </v-icon>
                                            </template>
                                            <span>تعديل</span>
                                          </VTooltip>
                                          <VTooltip bottom>
                                            <template #activator="{ attrs }">
                                              <v-icon
                                                color="#FF5252"
                                                v-bind="attrs"
                                                size="20"
                                                @click="
                                                  deleteShowHouses(showIndex, index)"
                                              >
                                                mdi-delete-restore
                                              </v-icon>
                                            </template>
                                            <span>حذف</span>
                                          </VTooltip>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col cols="12" md="12" style="padding: 10px"  v-if="Space.addSpaceInput == true && Space.table.length > 0">
                              <v-container>
                                <v-row>
                                  <v-col cols="12" md="6" style="padding: 10px">                            
                                      <v-select
                                        dense
                                        filled
                                        solo
                                        v-model="copyD"
                                        label="نسخ محتوى مساحة اخرى"
                                        :items="itemSp"
                                        item-text="name"
                                        item-value="building_space"
                                        @input="adCopyD(index)"
                                        return-object
                                      ></v-select>
                                  </v-col>
                                </v-row>
                                <v-row
                                  v-for="(room, ind) in data.Spaces[index].rooms"
                                  :key="ind"
                                  style="
                                    border: dashed 1px rgb(251, 151, 120);
                                    margin-bottom: 15px;
                                  "
                                >
                                  <v-col
                                    cols="12"
                                    md="12"
                                    style="
                                      display: flex;
                                      justify-content: space-between;
                                      align-items: center;
                                      flex-direction: row;
                                      padding: 10px;
                                    "
                                  >
                                  <v-row>
                                    <v-col cols="12" md="3" style="padding: 10px">                            
                                      <div class="mb-2 font-weight-medium">
                                        تفاصيل المساحة
                                        <span v-if="Space.building_space !== null"
                                          >( {{ Space.building_space }} )</span
                                        >
                                      </div>
                                    </v-col>
                                    <v-col cols="12" md="3" style="padding: 10px">                            
                                      <div>
                                      <v-btn
                                        style="
                                          color: red !important;
                                          border-radius: 100%;
                                          border: solid 1px red;
                                          min-width: 30px;
                                          height: 30px;
                                          padding: 18px;
                                          width: 30px;
                                        "
                                        text
                                        @click="deleteRoom(index, ind)"
                                      >
                                        <v-icon>mdi-delete</v-icon>
                                      </v-btn>
                                    </div>
                                    </v-col>
                                  </v-row>
                                  </v-col>
                                  <v-col cols="12" md="4" style="padding: 10px">
                                    <v-label class="mb-2 font-weight-medium"
                                      >الأسم
                                    </v-label>
                                    <v-autocomplete
                                      label="الأسم "
                                      :items="housesRoomNames"
                                      item-text="name"
                                      item-value="name"
                                      variant="outlined"
                                      v-model="room.name"
                                      :rules="Rules.housesRoomNames"
                                      color="primary"
                                      outlined
                                    ></v-autocomplete>
                                  </v-col>
                                  <v-col cols="12" md="4" style="padding: 10px">
                                    <v-label class="mb-2 font-weight-medium"
                                      >المساحة ( {{ room.name }} )</v-label
                                    >
                                    <v-text-field
                                      variant="outlined"
                                      v-model="room.space"
                                      :rules="Rules.space"
                                      color="primary"
                                      outlined
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" md="4">
                                    <v-row>
                                      <v-col cols="12" md="12" style="padding: 0px;">
                                        <v-label class="mb-2 font-weight-medium"
                                          >صورة ( {{ room.name }} )</v-label
                                        >
                                        <div
                                          @click="openFileInputR(index, ind)"
                                          class="div-img"
                                          style="z-index: 9999"
                                        >
                                          <input
                                            type="file"
                                            accept="image/png, image/jpeg, image/bmp"
                                            @change="
                                              handleFileChangeR($event, index, ind)
                                            "
                                            :ref="'fileInput' + index + ind"
                                            style="display: none"
                                          />
                                          <div
                                            class="showImg"
                                            v-if="room.image"
                                            style="width: 100%"
                                          >
                                            <v-row>
                                              <v-col
                                                cols="12"
                                                md="12"
                                                style="padding: 0px"
                                              >
                                                <div
                                                  style="text-align: center;position: relative"
                                                  class="imgI"
                                                >
                                                  <img
                                                    style="height: 70px;width: auto;"
                                                    :src="room.image"
                                                    alt="Image"
                                                    @click.stop
                                                  />
                                                  <v-btn
                                                    fab
                                                    small
                                                    color="red"
                                                    class="delete-icon"
                                                    @click.stop="
                                                      deleteImageR(index, ind)"
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
                                <v-btn color="primary" text @click="addRoom(index)">
                                  إضافة محتوى اخر للمساحة
                                  <span v-if="Space.building_space !== null"
                                    >( {{ Space.building_space }} )</span
                                  >
                                </v-btn>
                              </v-container>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </v-col>
              </v-row>
              <v-btn color="primary" text @click="addSpace">
                إضافة مساحة
              </v-btn>
            </v-form>
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
                  >الغاء</v-btn
                >
              </v-card-actions>
          </v-card-text>
        </v-container>
      </v-card>
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
    </v-container>
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
      Rules: {
        name: [(value) => !!value || "الحقل مطلوب"],
        BuildingNames: [(value) => !!value || "الحقل مطلوب"],
        total_space: [
          (value) => !!value || "الحقل مطلوب",
          (value) => !isNaN(value) || "يجب أن تكون قيمة رقمية",
        ],
        building_space: [
          (value) => !!value || "الحقل مطلوب",
          (value) => !isNaN(value) || "يجب أن تكون قيمة رقمية",
        ],
        housesRoomNames: [(value) => !!value || "الحقل مطلوب"],
        space: [
          (value) => !!value || "الحقل مطلوب",
        ],
      },
      panel: [0, 1],
      disabled: false,
      readonly: false,
      isStorg: false,
      isFormvalid: false,
      addLoading: false,
      addSpaceInput: false,
      building_space: null,
      total_space: null,
      copyD: null,
      BuildingNames: "",
      tagsBuildingNames: [],
      itemSp: [{name: 'عدم النسخ', building_space: null, total_space: null}],
      data: {
        name: null,
        BuildingNames: [],
        Spaces: [],
        images: [],
        houses: [],
        apartment_building: null,
        floor_number: null,
        typeFrom: null,
        TotalAreas: [],
        BuildingSpaces: [],
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
  computed: {
      filteredItems() {
          return function(space) {
              return this.itemSp.filter(item => {
                  return item.building_space !== (space?.building_space ?? null);
              });
          };
      },
  },
  watch: {
    BuildingNames: {
      handler: function () {
        this.addTagsBuildingNames();
      },
      deep: true,
    },
  },
  methods: {
    addTagsBuildingNames() {
      this.data.BuildingNames = [];
      this.tagsBuildingNames.forEach((tag) => {
        if (tag.text) {
          this.data.BuildingNames.push(tag.text);
        }
      });
    },
    addHouesFloor(index) {
      if (this.data.Spaces[index].tag.tagsHouseNumber.length > 0 && (this.data.Spaces[index].tag.FloorNumber !== null && this.data.Spaces[index].tag.FloorNumber !== "")) {
        let addedNumbers = [];

        this.data.houses.forEach(house => {
          addedNumbers = addedNumbers.concat(house.names);
        });

        // let duplicateNumbers = this.data.Spaces[index].tag.tagsHouseNumber.filter(tag => {
        //   return addedNumbers.includes(tag.text);
        // });

        // if (duplicateNumbers.length > 0) {
        //   this.showDialogfunction("خطأ: الأرقام المدخلة مكررة", "#FF5252");
        //   return;
        // }

        this.data.Spaces[index].houseNumber = [];
        this.data.Spaces[index].tag.tagsHouseNumber.forEach((tag) => {
          if (tag.text) {
            this.data.Spaces[index].houseNumber.push(tag.text);
          }
        });
        this.data.houses.push({
          names: this.data.Spaces[index].houseNumber,
          total_space: this.data.Spaces[index].total_space,
          building_space: this.data.Spaces[index].building_space,
          apartment_floor_number: this.data.Spaces[index].tag.FloorNumber,
        });
        this.data.Spaces[index].table.push({
          HouseNumber: this.data.Spaces[index].houseNumber,
          FloorNumber: this.data.Spaces[index].tag.FloorNumber,
        });
        this.data.Spaces[index].tag.tagsHouseNumber = [];
        this.data.Spaces[index].tag.houseNumber = "";
        this.data.Spaces[index].tag.FloorNumber = "";
      } else {
        this.showDialogfunction("خطأ: يجب إدخال أرقام الشقق والطوابق", "#FF5252");
      }
    },
    addSpace() {
      this.data.Spaces.push({
        addSpaceInput: false,
        isStorg: false,
        total_space: null,
        building_space: null,
        tag: {
          houseNumber: "",
          tagsHouseNumber: [],
          FloorNumber: "",
        },
        table: [],
        houseNumber: [],
        FloorNumber: [],
        rooms: [
          {
            name: null,
            space: null,
            image: null,
          },
        ],
      });
    },
    addS(index) {
      if ((this.data.Spaces[index].total_space !== null && this.data.Spaces[index].total_space !== "") &&
          (this.data.Spaces[index].building_space !== null && this.data.Spaces[index].building_space !== "")) {
        this.data.Spaces[index].addSpaceInput = true;
        this.itemSp.push({
          name: `${this.data.Spaces[index].building_space} - ${this.data.Spaces[index].total_space}`,
          building_space: this.data.Spaces[index].building_space,
          total_space: this.data.Spaces[index].total_space
        })
      } else {
        this.showDialogfunction("خطأ: يجب إدخال مساحة البناء والمساحة الكلية", "#FF5252");
      }
    },
    deleteSpace(index) {
      var item = this.data.Spaces[index];
      var houses = this.data.houses;
      for(var i = 0; i < this.itemSp.length; i++) {
        if (this.itemSp[i].building_space === item.building_space && this.itemSp[i].total_space === item.total_space) {
          this.itemSp.splice(i, 1);
          break; // Exit loop since item is found and removed
        }
      }

      var filteredHouses = houses.filter(
        (house) =>
          house.building_space === item.building_space &&
          house.total_space === item.total_space
      );
      filteredHouses.forEach((filteredHouse) => {
        var houseIndex = houses.indexOf(filteredHouse);
        if (houseIndex !== -1) {
          houses.splice(houseIndex, 1);
        }
      });
      this.data.Spaces.splice(index, 1);
    },

    adCopyD(index) {
      this.data.Spaces[index].rooms = []
      if(this.copyD.building_space !== null && this.copyD.total_space !== null) {
        for (var i = 0; i < this.data.Spaces.length; i++) {
          if(this.data.Spaces[i].building_space == this.copyD.building_space && this.data.Spaces[i].total_space == this.copyD.total_space){
            this.data.Spaces[index].rooms = JSON.parse(JSON.stringify(this.data.Spaces[i].rooms));
            break;
          }
        }
        this.copyD = null
      } else {
        this.data.Spaces[index].rooms.push({
          name: null,
          space: null,
          image: null,
        })
      }
    },
    backPage() {
      this.dialogData.open = false;
      this.$router.push("/admin-forms");
    },
    editShowHouses(showIndex, index) {
      var item = this.data.Spaces[index];
      var houses = this.data.houses;
      var show = this.data.Spaces[index].table[showIndex];

      var filteredHouses = houses.filter(
        (house) =>
          house.building_space === item.building_space &&
          house.apartment_floor_number === show.FloorNumber
      );

      filteredHouses.forEach((house) => {
        for (var i = 0; i < house.names.length; i++) {
          var newData = { text: house.names[i], tiClasses: ["ti-valid"] };
          this.data.Spaces[index].tag.tagsHouseNumber.push(newData);
        }
        this.data.Spaces[index].tag.FloorNumber = house.apartment_floor_number;
      });

      this.data.houses = houses.filter(
        (house) => !filteredHouses.includes(house)
      );

      this.data.Spaces[index].table = this.data.Spaces[index].table.filter(
        (tableItem) => tableItem !== show
      );
    },
    deleteShowHouses(showIndex, index) {
      var item = this.data.Spaces[index];
      var houses = this.data.houses;
      var show = this.data.Spaces[index].table[showIndex];

      var filteredHouses = houses.filter(
        (house) =>
          house.building_space === item.building_space &&
          house.apartment_floor_number === show.FloorNumber
      );

      this.data.houses = houses.filter(
        (house) => !filteredHouses.includes(house)
      );

      this.data.Spaces[index].table = this.data.Spaces[index].table.filter(
        (tableItem) => tableItem !== show
      );
    },
    storg(index) {
      var item = this.data.Spaces[index];
      this.building_space = item.building_space
      this.total_space = item.total_space

      this.data.Spaces[index].addSpaceInput = false;
      this.data.Spaces[index].isStorg = true;
    },

    addSpaceInputF(index) {
      var houses = this.data.houses;
      var newSpace = this.data.Spaces[index];

      var filteredHouses = houses.filter(
        (house) =>
          house.building_space === this.building_space &&
          house.total_space === this.total_space
      );

      filteredHouses.forEach((house) => {
        house.building_space = newSpace.building_space;
        house.total_space = newSpace.total_space;
      });

      this.data.Spaces[index].addSpaceInput = true
      this.data.Spaces[index].isStorg = false

    },

    addRoom(index) {
      this.data.Spaces[index].rooms.push({
        name: null,
        space: null,
        image: null,
      });
    },
    deleteRoom(index, ind) {
      this.data.Spaces[index].rooms.splice(ind, 1);
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
    async addCenter() {
      if (this.data.Spaces.length <= 0) {
        this.showDialogfunction("خطأ: يجب إضافة مساحة واحدة على الأقل", "#FF5252");
        return;
      }

      for (let i = 0; i < this.data.Spaces.length; i++) {
        const space = this.data.Spaces[i];
        if (space.total_space === null || space.building_space === null) {
          this.showDialogfunction("خطأ: يجب تعبئة جميع البيانات", "#FF5252");
          return;
        }
        for (let j = 0; j < space.rooms.length; j++) {
          const room = space.rooms[j];
          if (room.name === null || room.space === null) {
            this.showDialogfunction("خطأ: يجب أضافة غرفة واحده على الأقل", "#FF5252");
            return;
          }
        }
      }

      this.addLoading = true;
      const totalSpaces = this.data.Spaces.map(Space => Space.total_space);
      const buildingSpace = this.data.Spaces.map(Space => Space.building_space);
      const roomsForSpace = this.data.Spaces.map(Space => {
        const rooms = Space.rooms;
        const buildingSpace = Space.building_space;

        const formattedData = {
          for_space: buildingSpace,
          rooms: rooms.map(room => ({
            name: room.name,
            space: room.space,
            image: room.image
          }))
        };

        return formattedData;
      });

      try {
        const response = await API.addFormsApartment({
          name: this.data.name,
          block_number: this.data.block_number,
          images: this.data.images,
          total_space: totalSpaces,
          building_space: buildingSpace,
          apartment_building: this.data.BuildingNames,
          houses: this.data.houses,
          rooms_for_space: roomsForSpace,
        });
        this.addLoading = false;
        localStorage.setItem("itemFormMass", response.data.message);
        this.$router.push("/admin-forms-Apartments");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.addLoading = false;
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.addLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.addLoading = false;
      }


    },
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
    openFileInputR(index, ind) {
      this.$refs["fileInput" + index + ind][0].click();
    },
    handleFileChangeR(event, index, ind) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.Spaces[index].rooms[ind].image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    deleteImageR(index, ind) {
      this.data.Spaces[index].rooms[ind].image = null;
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>