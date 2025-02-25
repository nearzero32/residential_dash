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
            <VCol md="4" sm="6" cols="12">
              <vue3-tags-input
                :tags="tagsBuildingNames"
                :rules="Rules.tagsBuildingNames"
                dense
                :label="t('Names of the buildings')"
                outlined
                :placeholder="
                  t('Please enter the building name and then press the Enter key.')
                "
                @on-tags-changed="handleChangeTag"
              />
            </VCol>
            <VCol md="4" sm="6" cols="12">
              <VTextField
                v-model="data.block_number"
                :rules="Rules.block_number"
                dense
                :label="t('The block')"
                outlined
              />
            </VCol>
            <VCol md="4" sm="6" cols="12">
              <vue3-tags-input
                :tags="tagsType"
                dense
                :label="t('The type')"
                outlined
                placeholder="يرجى ادخال النوع وبعد ذالك اضغط على زر الادخال"
                @on-tags-changed="handleChangeTagType"
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
                              :src="isBase64(image) ? image : content_url + image"
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
              <v-expansion-panels class="my-4" variant="popout" v-model="panel" multiple>
                <v-expansion-panel v-for="(Space, index) in data.Spaces" :key="index">
                  <v-expansion-panel-title>
                    <v-row>
                      <v-col cols="6" md="6" style="padding-block: 0px">
                        {{ t("The area") }}
                        <span
                          v-if="Space.total_space !== null && Space.total_space !== ''"
                          >( {{ Space.total_space }} )</span
                        >
                        <span v-else>( {{ t("New") }} )</span>
                      </v-col>
                      <v-col cols="6" md="6" style="padding: 0px">
                        <v-btn text @click="deleteSpace(index)">
                          <v-icon style="color: red !important">mdi-delete</v-icon>
                          <span>
                            {{ t("Deleting the area") }}
                            <span
                              v-if="
                                Space.total_space !== null && Space.total_space !== ''
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
                            t("Total area")
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
                        <v-col cols="12" md="3" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Apartment numbers") }}
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
                        <v-col cols="12" md="3" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("Floor number") }}
                          </v-label>
                          <v-text-field
                            variant="outlined"
                            v-model="Space.tag.FloorNumber"
                            color="primary"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" style="padding: 10px">
                          <v-label class="mb-2 font-weight-medium">
                            {{ t("The type") }}
                          </v-label>
                          <v-select
                            dense
                            filled
                            solo
                            v-model="Space.tag.type"
                            :label="t('The type')"
                            :items="tagsType"
                            return-object
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="3" style="padding: 10px">
                          <v-btn @click="addHouesFloor(index)" color="primary"
                            >ادخال</v-btn
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
                                <th>ارقام الشقق</th>
                                <th>رقم الطابق</th>
                                <th>النوع</th>
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
                                    v-for="(showHous, index) in showHouses.HouseNumber"
                                    :key="index"
                                  >
                                    {{ showHous }}
                                    <span
                                      v-if="index !== showHouses.HouseNumber.length - 1"
                                      >,</span
                                    >
                                  </span>
                                </td>
                                <td>{{ showHouses.FloorNumber }}</td>
                                <td>{{ showHouses.type }}</td>
                                <td>
                                  <VTooltip bottom>
                                    <template #activator="{ attrs }">
                                      <v-icon
                                        color="rgb(243 216 1)"
                                        v-bind="attrs"
                                        size="20"
                                        @click="editShowHouses(showIndex, index)"
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
                                        @click="deleteShowHouses(showIndex, index)"
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
                      <v-container
                        v-if="Space.addSpaceInput == true && Space.table.length > 0"
                      >
                        <v-row>
                          <v-col cols="12" md="6" style="padding-block: 30px">
                            <v-select
                              dense
                              filled
                              solo
                              v-model="copyD"
                              :label="t('Copying content from another area')"
                              :items="itemSp"
                              item-title="name"
                              item-value="building_space"
                              @update:modelValue="adCopyD(index)"
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
                                  {{ t("Area details") }}
                                  <span v-if="Space.building_space !== null"
                                    >( {{ Space.building_space }} )</span
                                  >
                                </div>
                              </v-col>
                              <v-col cols="12" md="3" style="padding: 10px">
                                <div>
                                  <v-btn
                                    icon="$vuetify"
                                    variant="outlined"
                                    text
                                    color="red"
                                    @click="deleteRoom(index, ind)"
                                  >
                                    <v-icon style="color: red">mdi-delete</v-icon>
                                  </v-btn>
                                </div>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col cols="12" md="4" style="padding: 10px">
                            <v-label class="mb-2 font-weight-medium"
                              >{{ t("The name") }}
                            </v-label>
                            <VAutocomplete
                              v-model="room.name"
                              variant="outlined"
                              :rules="Rules.housesRoomNames"
                              color="primary"
                              outlined
                              :items="housesRoomNames"
                              item-title="name"
                              item-value="name"
                            />
                          </v-col>
                          <v-col cols="12" md="4" style="padding: 10px">
                            <v-label class="mb-2 font-weight-medium"
                              >{{ t("The area") }} ( {{ room.name }} )</v-label
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
                              <v-col cols="12" md="12" style="padding: 0px">
                                <v-label class="mb-2 font-weight-medium"
                                  >{{ t("The image") }} ( {{ room.name }} )</v-label
                                >
                                <div
                                  @click="openFileInputR(index, ind)"
                                  class="div-img"
                                  style="text-align: center"
                                >
                                  <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/bmp"
                                    @change="handleFileChangeR($event, index, ind)"
                                    :ref="'fileInput' + index + ind"
                                    style="display: none"
                                  />
                                  <div
                                    class="showImg"
                                    v-if="room.image"
                                    style="width: 100%"
                                  >
                                    <v-row>
                                      <v-col cols="12" md="12" style="padding: 0px">
                                        <div
                                          style="text-align: center; position: relative"
                                          class="imgI"
                                        >
                                          <img
                                            style="height: 70px; width: auto"
                                            :src="room.image"
                                            alt="Image"
                                            @click.stop
                                          />
                                          <v-btn
                                            fab
                                            small
                                            color="red"
                                            class="delete-icon"
                                            @click.stop="deleteImageR(index, ind)"
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
        title: "Adding a new model",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Apartment models",
          disabled: false,
          to: "/admin-show-apartment-models",
        },
        {
          text: "Adding a new model",
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
      saveLoading: false,
      copyD: null,
      tagsBuildingNames: [],
      tagsType: [],
      visibleDeleteIcons: [],
      housesRoomNames: [],
      panel: [],
      data: {
        name: null,
        type: null,
        BuildingNames: [],
        images: [],
        block_number: null,
        Spaces: [],
        houses: [],
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
    itemSp() {
      return [
        {
          name: this.t("No copying"),
          building_space: null,
          total_space: null,
        },
      ];
    },
    filteredItems() {
      return (space) => {
        return this.itemSp.filter((item) => {
          return item.building_space !== (space?.building_space ?? null);
        });
      };
    },
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        type: [(value) => !!value || this.t("This field is required")],
        tagsBuildingNames: [(value) => !!value || this.t("This field is required")],
        block_number: [(value) => !!value || this.t("This field is required")],
        total_space: [(value) => !!value || this.t("This field is required")],
        building_space: [(value) => !!value || this.t("This field is required")],
        houseNumber: [(value) => !!value || this.t("This field is required")],
        FloorNumber: [(value) => !!value || this.t("This field is required")],
        housesRoomNames: [(value) => !!value || this.t("This field is required")],
      };
    },
  },
  created() {
    this.getCenter();
  },
  methods: {
    // Tag
    handleChangeTag(tags) {
      this.data.BuildingNames = tags;
    },
    handleChangeTagType(tags) {
      this.tagsType = tags;
      console.log("New Value:", this.tagsType);
    },
    handleChangeTagHouseNumber(tags, index) {
      this.data.Spaces[index].tag.tagsHouseNumber = tags;
    },
    // Tag

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
          FloorNumber: "",
          type: "",
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
    deleteSpace(index) {
      var item = this.data.Spaces[index];
      var houses = this.data.houses;
      for (var i = 0; i < this.itemSp.length; i++) {
        if (
          this.itemSp[i].building_space === item.building_space &&
          this.itemSp[i].total_space === item.total_space
        ) {
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
    addS(index) {
      if (
        this.data.Spaces[index].total_space !== null &&
        this.data.Spaces[index].total_space !== "" &&
        this.data.Spaces[index].building_space !== null &&
        this.data.Spaces[index].building_space !== ""
      ) {
        this.data.Spaces[index].addSpaceInput = true;
        this.itemSp.push({
          name: `${this.data.Spaces[index].building_space} - ${this.data.Spaces[index].total_space}`,
          building_space: this.data.Spaces[index].building_space,
          total_space: this.data.Spaces[index].total_space,
        });
      } else {
        this.showDialogfunction(
          this.t("The building area and Total area must be entered."),
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
    addHouesFloor(index) {
      if (
        this.data.Spaces[index].tag.tagsHouseNumber.length > 0 &&
        this.data.Spaces[index].tag.FloorNumber !== null &&
        this.data.Spaces[index].tag.FloorNumber !== ""
      ) {
        let existingFloorNumbers = this.data.Spaces[index].table.map(
          (space) => space.FloorNumber
        );
        if (existingFloorNumbers.includes(this.data.Spaces[index].tag.FloorNumber)) {
          this.showDialogfunction(
            this.t("Floor number is duplicated within the same area"),
            "#FF5252"
          );
          return;
        }
        if (this.isHouseFloorNumberDuplicate(index)) {
          this.showDialogfunction(
            this.t("The apartment number and floor number exist in another area"),
            "#FF5252"
          );
          return;
        }

        this.data.Spaces[index].houseNumber = [];
        this.data.Spaces[index].houseNumber = this.data.Spaces[index].tag.tagsHouseNumber;

        this.data.houses.push({
          names: this.data.Spaces[index].houseNumber,
          total_space: this.data.Spaces[index].total_space,
          building_space: this.data.Spaces[index].building_space,
          apartment_floor_number: this.data.Spaces[index].tag.FloorNumber,
          type: this.data.Spaces[index].tag.type,
        });

        this.data.Spaces[index].table.push({
          HouseNumber: this.data.Spaces[index].houseNumber,
          FloorNumber: this.data.Spaces[index].tag.FloorNumber,
          type: this.data.Spaces[index].tag.type,
        });

        this.data.Spaces[index].tag.tagsHouseNumber = [];
        this.data.Spaces[index].tag.houseNumber = "";
        this.data.Spaces[index].tag.FloorNumber = "";
        this.data.Spaces[index].tag.type = "";
      } else {
        this.showDialogfunction(
          this.t("Apartment and floor numbers must be entered"),
          "#FF5252"
        );
      }
    },
    isHouseFloorNumberDuplicate(currentIndex) {
      const currentHouseNumbers = this.data.Spaces[currentIndex].tag.tagsHouseNumber.map(
        (tag) => tag
      );
      const currentFloorNumber = this.data.Spaces[currentIndex].tag.FloorNumber;

      for (let i = 0; i < this.data.Spaces.length; i++) {
        if (i !== currentIndex) {
          const space = this.data.Spaces[i];
          const houseNumbers = space.table.map((entry) => entry.HouseNumber).flat();
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
          house.apartment_floor_number === show.FloorNumber
      );

      filteredHouses.forEach((house) => {
        for (var i = 0; i < house.names.length; i++) {
          this.data.Spaces[index].tag.tagsHouseNumber.push(house.names[i]);
        }
        this.data.Spaces[index].tag.FloorNumber = house.apartment_floor_number;
        this.data.Spaces[index].tag.type = house.type;
      });

      this.data.houses = houses.filter((house) => !filteredHouses.includes(house));

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

      this.data.houses = houses.filter((house) => !filteredHouses.includes(house));
      this.data.Spaces[index].table = this.data.Spaces[index].table.filter(
        (tableItem) => tableItem !== show
      );
    },
    adCopyD(index) {
      this.data.Spaces[index].rooms = [];
      if (this.copyD.building_space !== null && this.copyD.total_space !== null) {
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
    // Spaces

    // Add Data
    async addCenter() {
      this.saveLoading = true;

      if (this.data.Spaces.length <= 0) {
        this.showDialogfunction(this.t("At least one area must be added"), "#FF5252");
        return;
      }

      for (let i = 0; i < this.data.Spaces.length; i++) {
        const space = this.data.Spaces[i];
        if (space.total_space === null || space.building_space === null) {
          this.showDialogfunction(this.t("All fields must be filled out"), "#FF5252");
          return;
        }
        for (let j = 0; j < space.rooms.length; j++) {
          const room = space.rooms[j];
          if (room.name === null || room.space === null) {
            this.showDialogfunction(this.t("At least one room must be added"), "#FF5252");
            return;
          }
        }
      }

      const totalSpaces = this.data.Spaces.map((Space) => Space.total_space);
      const buildingSpace = this.data.Spaces.map((Space) => Space.building_space);
      const roomsForSpace = this.data.Spaces.map((Space) => {
        const rooms = Space.rooms;
        const buildingSpace = Space.building_space;
        console.log(Space);

        const formattedData = {
          for_space: buildingSpace,
          rooms: rooms.map((room) => ({
            name: room.name,
            space: room.space,
            image: room.image,
          })),
        };

        return formattedData;
      });
      try {
        const response = await adminApi.addFormsApartment({
          name: this.data.name,
          block_number: this.data.block_number,
          type: this.data.type,
          images: this.data.images,
          total_space: totalSpaces,
          building_space: buildingSpace,
          apartment_building: this.data.BuildingNames,
          houses: this.data.houses,
          rooms_for_space: roomsForSpace,
        });
        this.saveLoading = false;
        this.$router.push({ name: "admin-show-apartment-models" });
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
          this.$router.push("/login");
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
