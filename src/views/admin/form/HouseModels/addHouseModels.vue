<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard>
      <VCardText>
        <VForm ref="form">
          <VRow class="mt-5" style="align-items: center">
            <VCol md="4" sm="6" cols="12">
              <VTextField
                v-model="data.name"
                :rules="Rules.name"
                dense
                :label="t('The name')"
                outlined
              />
            </VCol>
            <VCol cols="12" md="12">
              <VRow>
                <VCol cols="12" md="3">
                  <VFileInput
                    multiple
                    v-model="files"
                    :label="t('Model images')"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera-outline"
                    @change="handleFileChange"
                    @click:clear="
                      files = [];
                      data.images = [];
                    "
                  />
                </VCol>
                <VCol cols="12" md="9" v-if="data.images.length">
                  <VCard>
                    <VCardText>
                      <v-row>
                        <v-col
                          cols="12"
                          md="2"
                          v-for="(image, index) in data.images"
                          :key="index"
                          style="padding: 10px"
                        >
                          <VCard
                            style="position: relative"
                            class="imgI"
                            @mouseover="showDeleteIcon(index)"
                            @mouseleave="hideDeleteIcon(index)"
                          >
                            <img
                              style="height: 100px; width: 100%"
                              :src="
                                isBase64(image) ? image : content_url + image
                              "
                              alt="Image"
                              @click.stop
                            />
                            <v-btn
                              fab
                              small
                              color="red"
                              text
                              class="delete-icon"
                              :class="{ visible: visibleDeleteIcons[index] }"
                              @click.stop="deleteImage(index)"
                              style="
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                z-index: 1;
                                opacity: 0;
                                transition: opacity 0.3s;
                                background-color: #faebd700;
                              "
                            >
                              <v-icon color="red" size="30" style="color: red"
                                >mdi-delete</v-icon
                              >
                            </v-btn>
                          </VCard>
                        </v-col>
                      </v-row>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </VCol>
            <VCol cols="12" md="12">
              <v-expansion-panels
                class="my-4"
                variant="popout"
                v-model="panel"
                multiple
              >
                <v-expansion-panel
                  v-for="(Space, index) in data.Spaces"
                  :key="index"
                >
                  <v-expansion-panel-title>
                    <v-row>
                      <v-col cols="6" md="6" style="padding-block: 0px">
                        {{ t("The area") }}
                        <span
                          v-if="
                            Space.total_space !== null &&
                            Space.total_space !== ''
                          "
                          >( {{ Space.total_space }} )</span
                        >
                        <span v-else>( {{ t("New") }} )</span>
                      </v-col>
                      <v-col cols="6" md="6" style="padding: 0px">
                        <v-btn text @click="deleteSpace(index)">
                          <v-icon style="color: red !important"
                            >mdi-delete</v-icon
                          >
                          <span>
                            {{ t("Deleting the area") }}
                            <span
                              v-if="
                                Space.total_space !== null &&
                                Space.total_space !== ''
                              "
                              >( {{ Space.total_space }} )</span
                            >
                            <span v-else>( {{ t("New") }} )</span>
                          </span>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div>
                      <v-row style="align-items: center">
                        <v-col cols="12" md="5" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">{{
                            t("Land area")
                          }}</v-label>
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
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Building area") }}
                          </v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="Space.building_space"
                            :rules="Rules.building_space"
                            :disabled="Space.addSpaceInput"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          md="2"
                          style="padding: 10px"
                          v-if="!Space.addSpaceInput && !Space.isStorg"
                        >
                          <v-btn @click="addS(index)" color="primary">
                            {{ t("Addition") }}
                          </v-btn>
                        </v-col>
                        <v-col
                          cols="12"
                          md="2"
                          style="padding: 10px"
                          v-else-if="Space.addSpaceInput == true"
                        >
                          <v-btn @click="storg(index)" color="primary">
                            {{ t("Edit") }}
                          </v-btn>
                        </v-col>
                        <v-col cols="12" md="2" style="padding: 10px" v-else>
                          <v-btn @click="addSpaceInputF(index)" color="primary">
                            {{ t("Confirmation") }}
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row
                        style="align-items: center"
                        v-if="Space.addSpaceInput == true"
                      >
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Names of residential units") }}
                          </v-label>
                          <vue3-tags-input
                            :tags="Space.tag.tagsHouseNumber"
                            :rules="Rules.houseNumber"
                            dense
                            outlined
                            :placeholder="
                              t(
                                'Please enter the apartment number and press the Enter button'
                              )
                            "
                            @on-tags-changed="
                              (tags) => handleChangeTagHouseNumber(tags, index)
                            "
                          />
                        </v-col>
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Category") }}
                          </v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="Space.tag.category"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("The block") }}
                          </v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="Space.tag.block_number"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Street Number") }}
                          </v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="Space.tag.street_number"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("The type") }}
                          </v-label>
                          <v-radio-group v-model="Space.tag.is_corner" column>
                            <v-radio
                              v-bind:class="{
                                'red-radio': !Space.tag.is_corner,
                                'green-radio': Space.tag.is_corner,
                              }"
                              label="ليس ركن"
                              :value="false"
                            ></v-radio>
                            <v-radio
                              v-bind:class="{
                                'red-radio': !Space.tag.is_corner,
                                'green-radio': Space.tag.is_corner,
                              }"
                              label="ركن"
                              :value="true"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                        <v-col cols="12" md="4" style="padding: 10px">
                          <v-btn
                            @click="addHouesFloor(index)"
                            :loading="checkHousesNamesLoading"
                            color="primary"
                            >التحقق من الوحدات السكنية المكررة</v-btn
                          >
                        </v-col>
                        <v-col
                          cols="12"
                          md="12"
                          style="padding: 10px"
                          v-if="Space.table.length > 0"
                        >
                          <table
                            border="1"
                            style="width: 100%; border-collapse: collapse"
                          >
                            <thead>
                              <tr>
                                <th>{{ t("Names of residential units") }}</th>
                                <th>{{ t("Category") }}</th>
                                <th>{{ t("The block") }}</th>
                                <th>{{ t("Street Number") }}</th>
                                <th>{{ t("The type") }}</th>
                                <th>{{ t("Operations") }}</th>
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
                                        showHouses.HouseNumber.length - 1
                                      "
                                      >,</span
                                    >
                                  </span>
                                </td>
                                <td>{{ showHouses.category }}</td>
                                <td>{{ showHouses.block_number }}</td>
                                <td>{{ showHouses.street_number }}</td>
                                <td>
                                  {{
                                    showHouses.is_corner === true
                                      ? "ركن"
                                      : "ليس ركن"
                                  }}
                                </td>
                                <td>
                                  <VTooltip bottom>
                                    <template #activator="{ attrs }">
                                      <v-icon
                                        color="rgb(243 216 1)"
                                        v-bind="attrs"
                                        size="20"
                                        @click="
                                          editShowHouses(showIndex, index)
                                        "
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
                                          deleteShowHouses(showIndex, index)
                                        "
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
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </VCol>
            <VCol cols="12" md="12">
              <v-btn color="primary" text @click="addSpace">
                {{ t("Adding an area") }}
              </v-btn>
            </VCol>

            <VCol
              v-if="data.Spaces.length > 0"
              v-for="(dataa, ind) in data.floors"
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
                        :rules="Rules.name"
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
                              item-title="name"
                              item-value="name"
                              variant="outlined"
                              v-model="dat.name"
                              :rules="Rules.name"
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
                                            @click.stop="
                                              deleteImageR(index, ind, i)
                                            "
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
            </VCol>
            <VCol
              cols="12"
              md="6"
              style="padding: 10px"
              v-if="data.Spaces.length > 0"
            >
              <v-btn @click="addNewItems" color="success"
                >إضافة طابق جديد</v-btn
              >
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
      <VCardActions class="ml-3">
        <VSpacer />
        <VBtn color="primary" text @click="cancelAdd">
          {{ t("Cancel") }}
        </VBtn>
        <VBtn color="primary" :loading="saveLoading" @click="addCenter">
          {{ t("Addition") }}
        </VBtn>
      </VCardActions>
    </VCard>
    <!-- Message Dialog -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            {{ t("Finish") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";
import Vue3TagsInput from "vue3-tags-input";
import { useToast } from "vue-toastification";

export default {
  components: {
    Vue3TagsInput,
  },
  setup() {
    const { t } = useI18n();
    const toast = useToast();

    return {
      toast,
      t,
      // nav
      page: {
        title: "House Models",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "House Models",
          disabled: false,
          to: "/admin-show-house-models",
        },
        {
          text: "House Models",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      userData: [],
      files: [],
      //   Add Data
      checkHousesNamesLoading: false,
      isTrue: false,
      saveLoading: false,
      visibleDeleteIcons: [],
      housesRoomNames: [],
      panel: [],
      data: {
        name: null,
        BuildingNames: [],
        images: [],
        Spaces: [],
        houses: [],
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
      //   Add Data

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        block_number: [(value) => !!value || this.t("This field is required")],
        total_space: [(value) => !!value || this.t("This field is required")],
        building_space: [
          (value) => !!value || this.t("This field is required"),
        ],
        houseNumber: [(value) => !!value || this.t("This field is required")],
        FloorNumber: [(value) => !!value || this.t("This field is required")],
        housesRoomNames: [
          (value) => !!value || this.t("This field is required"),
        ],
      };
    },
  },
  created() {
    this.getCenter();
  },
  methods: {
    // Tag
    handleChangeTagHouseNumber(tags, index) {
      this.data.Spaces[index].tag.tagsHouseNumber = tags;
    },
    // Tag

    // d
    deletItme(index) {
      this.data.floors.splice(index, 1);
    },
    deletItm(index, i) {
      this.data.floors[index].rooms.splice(i, 1);
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
    deleteImageF(index, ind) {
      this.data.floors[ind].images.splice(index, 1);
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
    deleteImageR(index, ind, i) {
      this.data.floors[ind].rooms[i].image = null;
    },
    // d

    // Spaces
    addSpace() {
      this.data.Spaces.push({
        addSpaceInput: false,
        isStorg: false,
        total_space: null,
        building_space: null,
        tag: {
          houseNumber: "",
          tagsHouseNumber: [],
          category: null,
          block_number: null,
          street_number: null,
          is_corner: false,
        },
        table: [],
        houseNumber: [],
      });
    },
    deleteSpace(index) {
      var item = this.data.Spaces[index];
      this.data.Spaces.splice(index, 1);
    },
    addS(index) {
      if (
        this.data.Spaces[index].total_space !== null &&
        this.data.Spaces[index].total_space !== "" &&
        this.data.Spaces[index].building_space !== null &&
        this.data.Spaces[index].building_space !== ""
      ) {
        this.data.Spaces[index].addSpaceInput = true;
      } else {
        this.showDialogfunction(
          this.t("The building area and land area must be entered."),
          "#FF5252"
        );
      }
    },
    storg(index) {
      var item = this.data.Spaces[index];
      this.building_space = item.building_space;
      this.total_space = item.total_space;

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

      this.data.Spaces[index].addSpaceInput = true;
      this.data.Spaces[index].isStorg = false;
    },
    async addHouesFloor(index) {
      this.checkHousesNamesLoading = true;

      const currentSpace = this.data.Spaces[index];
      const currentTag = currentSpace.tag;

      if (
        currentTag.tagsHouseNumber.length > 0 &&
        currentTag.category !== null &&
        currentTag.category !== "" &&
        currentTag.block_number !== null &&
        currentTag.block_number !== "" &&
        currentTag.street_number !== null &&
        currentTag.street_number !== "" &&
        currentTag.is_corner !== null &&
        currentTag.is_corner !== ""
      ) {
        const duplicateName = this.isDuplicate(currentSpace);
        if (!duplicateName) {
          var housesArray = [];
          var Array = currentTag.tagsHouseNumber;
          for (let ind = 0; ind < Array.length; ind++) {
            const element = Array[ind];
            housesArray.push({
              name: element,
              total_space: currentSpace.total_space,
              building_space: currentSpace.building_space,
            });
          }
          try {
            const response = await adminApi.checkHousesNames({
              id: null,
              houses: housesArray,
            });
            this.checkHousesNamesLoading = false;
            this.isTrue = true;
          } catch (error) {
            if (error.response && error.response.status === 401) {
              this.checkHousesNamesLoading = false;
              this.$store.dispatch("submitLogout");
              this.isTrue = false;
            } else if (error.response && error.response.status === 500) {
              this.checkHousesNamesLoading = false;
              this.isTrue = false;
              this.showDialogfunctionadd(
                error.response.data.message,
                "#FF5252"
              );
            } else if (error.response && error.response.status === 400) {
              this.checkHousesNamesLoading = false;
              this.dialogDataadd.open = true;
              this.dialogDataadd.bodyText = error.response.data.message;
              this.dialogDataadd.bodyTextN = `( ${error.response.data.results} )`;
              this.dialogDataadd.color = "#FF5252";
              this.isTrue = false;
            } else if (error.response && error.response.data.error === true) {
              this.checkHousesNamesLoading = false;
              this.dialogDataadd.open = true;
              this.dialogDataadd.bodyText = error.response.data.message;
              this.dialogDataadd.bodyTextN = `( ${error.response.data.results} )`;
              this.dialogDataadd.color = "#FF5252";
              this.isTrue = false;
              this.showDialogfunction(error.response.data.message, "#FF5252");
            }
          }
          if (this.isTrue) {
            currentSpace.houseNumber = [];
            currentSpace.houseNumber = currentTag.tagsHouseNumber;

            this.data.houses.push({
              names: currentSpace.houseNumber,
              total_space: currentSpace.total_space,
              building_space: currentSpace.building_space,
              category: currentTag.category,
              block_number: currentTag.block_number,
              street_number: currentTag.street_number,
              is_corner: currentTag.is_corner,
            });

            currentSpace.table.push({
              HouseNumber: currentSpace.houseNumber,
              category: currentTag.category,
              block_number: currentTag.block_number,
              street_number: currentTag.street_number,
              is_corner: currentTag.is_corner,
            });

            currentTag.tagsHouseNumber = [];
            currentTag.houseNumber = "";
            currentTag.category = null;
            currentTag.block_number = null;
            currentTag.street_number = null;
            currentTag.is_corner = false;
          } else {
            this.showDialogfunction(
              "اسما الوحدات موجوده في نموذج اخر",
              "#FF5252"
            );
          }
        } else {
          this.checkHousesNamesLoading = false;
          this.showDialogfunction(
            `خطأ, اسماء المنزل مكررة :  (${duplicateName})`,
            "#FF5252"
          );
        }
      } else {
        this.checkHousesNamesLoading = false;
        this.showDialogfunction(
          this.t("Apartment and floor numbers must be entered"),
          "#FF5252"
        );
      }
    },
    isDuplicate(space) {
      for (let house of this.data.houses) {
        for (let name of house.names) {
          if (space.tag.tagsHouseNumber.includes(name)) {
            return name;
          }
        }
      }
      return null;
    },
    isHouseFloorNumberDuplicate(currentIndex) {
      const currentHouseNumbers = this.data.Spaces[
        currentIndex
      ].tag.tagsHouseNumber.map((tag) => tag);
      const currentFloorNumber = this.data.Spaces[currentIndex].tag.FloorNumber;

      for (let i = 0; i < this.data.Spaces.length; i++) {
        if (i !== currentIndex) {
          const space = this.data.Spaces[i];
          const houseNumbers = space.table
            .map((entry) => entry.HouseNumber)
            .flat();
          const floorNumbers = space.table.map((entry) => entry.FloorNumber);

          for (let j = 0; j < houseNumbers.length; j++) {
            if (
              currentHouseNumbers.includes(houseNumbers[j]) &&
              floorNumbers[j] === currentFloorNumber
            ) {
              return true;
            }
          }
        }
      }

      return false;
    },
    editShowHouses(showIndex, index) {
      var item = this.data.Spaces[index];
      var houses = this.data.houses;
      var show = this.data.Spaces[index].table[showIndex];
      var filteredHouses = houses.filter(
        (house) =>
          house.building_space === item.building_space &&
          house.category === show.category &&
          house.block_number === show.block_number &&
          house.street_number === show.street_number &&
          house.is_corner === show.is_corner
      );

      filteredHouses.forEach((house) => {
        for (var i = 0; i < house.names.length; i++) {
          this.data.Spaces[index].tag.tagsHouseNumber.push(house.names[i]);
        }
        this.data.Spaces[index].tag.category = house.category;
        this.data.Spaces[index].tag.block_number = house.block_number;
        this.data.Spaces[index].tag.street_number = house.street_number;
        this.data.Spaces[index].tag.is_corner = house.is_corner;
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
          house.category === show.category &&
          house.block_number === show.block_number &&
          house.street_number === show.street_number &&
          house.is_corner === show.is_corner
      );

      this.data.houses = houses.filter(
        (house) => !filteredHouses.includes(house)
      );
      this.data.Spaces[index].table = this.data.Spaces[index].table.filter(
        (tableItem) => tableItem !== show
      );
    },
    adCopyD(index) {
      this.data.Spaces[index].rooms = [];
      if (
        this.copyD.building_space !== null &&
        this.copyD.total_space !== null
      ) {
        for (var i = 0; i < this.data.Spaces.length; i++) {
          if (
            this.data.Spaces[i].building_space == this.copyD.building_space &&
            this.data.Spaces[i].total_space == this.copyD.total_space
          ) {
            this.data.Spaces[index].rooms = JSON.parse(
              JSON.stringify(this.data.Spaces[i].rooms)
            );
            break;
          }
        }
        this.copyD = null;
      } else {
        this.data.Spaces[index].rooms.push({
          name: null,
          space: null,
          image: null,
        });
      }
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
    openFileInput(ind) {
      this.$refs["fileInput" + ind][0].click();
    },
    openFileInputR(index, ind) {
      this.$refs["fileInput" + index + ind][0].click();
    },
    // Spaces

    // Add Data
    async addCenter() {
      this.saveLoading = true;
      if (this.data.Spaces.length <= 0) {
        this.saveLoading = false;
        this.showDialogfunction(
          this.t("At least one area must be added"),
          "#FF5252"
        );
        return;
      }
      const totalSpaces = this.data.Spaces.map((Space) => Space.total_space);
      const buildingSpace = this.data.Spaces.map(
        (Space) => Space.building_space
      );

      var Spaces = this.data.houses;
      var houses = [];
      for (let index = 0; index < Spaces.length; index++) {
        const element = Spaces[index];
        for (let inde = 0; inde < element.names.length; inde++) {
          const elemen = element.names[inde];
          houses.push({
            name: elemen,
            total_space: element.total_space,
            building_space: element.building_space,
            category: element.category,
            block_number: element.block_number,
            street_number: element.street_number,
            is_corner: element.is_corner,
          });
        }
      }

      try {
        const response = await adminApi.addForms({
          building_type: "منازل",
          name: this.data.name,
          images: this.data.images,
          total_space: totalSpaces,
          building_space: buildingSpace,
          houses: houses,
          floors: this.data.floors,
        });
        this.saveLoading = false;
        this.$router.push({ name: "admin-show-house-models" });
        this.toast.success(response.data.message, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.saveLoading = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.saveLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.saveLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.saveLoading = false;
      }
    },
    // Add Data

    // Get Data
    async getCenter() {
      try {
        const response = await adminApi.housesRoomNames();
        this.housesRoomNames = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    // Get Data

    // images
    handleFileChange(event) {
      const newFiles = Array.from(event.target.files);
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.images.push(reader.result);
          this.visibleDeleteIcons.push(false);
        };
        reader.readAsDataURL(file);
      });
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    deleteImage(index) {
      this.data.images.splice(index, 1);
      this.visibleDeleteIcons.splice(index, 1);
    },
    showDeleteIcon(index) {
      this.visibleDeleteIcons[index] = true;
    },
    hideDeleteIcon(index) {
      this.visibleDeleteIcons[index] = false;
    },
    // images

    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message

    cancelAdd() {
      this.$router.back(1);
    },
  },
};
</script>

<style scoped>
.v3ti {
  border: 1px solid #d2d1d4;
  padding-block: 10px;
  background-color: #fff0;
}
.v3ti--focus {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 0 0 1px rgb(var(--v-theme-primary)) !important;
}
.delete-icon.visible {
  opacity: 1 !important;
}
</style>
