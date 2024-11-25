<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="4">
            <VBtn
              tile
              color="primary"
              prepend-icon="mdi-plus"
              @click="addDialog.open = true"
              v-if="userData.includes('add')"
            >
              {{ t("Addition") }}
            </VBtn>
          </VCol>
          <VCol cols="12" md="4" style="text-align: center">
            <VAutocomplete
              v-model="is_available"
              :label="t('Status')"
              :items="itemss"
              item-title="text"
              item-value="value"
              @update:modelValue="getCenter"
            ></VAutocomplete>
          </VCol>
          <VCol cols="12" md="4" style="text-align: center">
            <VAutocomplete
              v-model="Type_of_Service"
              :label="t('The type')"
              :items="itemsType_of_Service"
              item-title="text"
              item-value="value"
              @update:modelValue="getCenter"
            ></VAutocomplete>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardTitle>
        <VRow justify="space-between" style="align-items: center; margin-bottom: 15px">
          <VCol cols="12" sm="12" md="12">
            <VTextField
              v-model="table.search"
              append-inner-icon="mdi-magnify"
              density="compact"
              :label="t('Search')"
              variant="solo"
              hide-details
              single-line
              @click:clear="getCenter"
              @input="getCenter"
              clearable
            />
          </VCol>
        </VRow>
      </VCardTitle>
      <VCardText>
        <Table
          :table="table"
          :content_url="content_url"
          :tableOptions="tableOptions"
          :headers="headers"
          @update:options="getCenter"
          @deleteItems="deleteItem"
          @editItems="editItem"
          @emitShowImgs="showImgs"
        />
      </VCardText>
    </VCard>

    <!-- - showImg -->
    <VDialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <VCard style="padding-top: 20px">
        <VCardText class="headline justify-center" v-if="showImg.dataImg !== null">
          <VCarousel>
            <VCarousel-item v-for="(img, i) in showImg.dataImg" :key="i">
              <img :src="content_url + img" style="width: 100%" />
            </VCarousel-item>
          </VCarousel>
        </VCardText>
        <VCard-actions>
          <VSpacer />
          <VBtn color="primary" text @click="showImg.open = false"> إغلاق </VBtn>
        </VCard-actions>
      </VCard>
    </VDialog>
    <!-- - showImg -->

    <!-- Add Class Dialog -->
    <VDialog v-model="addDialog.open" max-width="800px">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Addition") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="data.name"
                    :rules="Rules.name"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VAutocomplete
                    v-model="data.form"
                    :rules="Rules.name"
                    :items="Forms"
                    outlined
                    :item-title="getItemText"
                    attach
                    return-object
                    @update:modelValue="getHouses"
                    :label="t(`Form name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4" v-if="HousesShow">
                  <VAutocomplete
                    v-model="data.center_form_house_id"
                    :rules="Rules.name"
                    :items="filteredHouses"
                    outlined
                    :item-title="formatHouse"
                    item-value="_id"
                    attach
                    :label="t(`The house`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4">
                  <VAutocomplete
                    v-model="data.is_available"
                    :rules="Rules.is_available"
                    :label="t('Status')"
                    :items="itemss"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4">
                  <VAutocomplete
                    v-model="data.existing_type"
                    :rules="Rules.existing_type"
                    :label="t('The type')"
                    :items="itemsType_of_Service"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VTextarea
                    v-model="data.description"
                    :rules="Rules.description"
                    :label="t(`Details`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="3">
                      <VFileInput
                        v-model="files"
                        :label="t('The image')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChange"
                        multiple
                        @click:clear="
                          files = [];
                          data.image = [];
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="9" v-if="data.image.length">
                      <VCard>
                        <VCardText>
                          <v-row>
                            <v-col
                              cols="12"
                              md="2"
                              v-for="(imag, index) in data.image"
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
                                  :src="isBase64(imag) ? imag : content_url + imag"
                                  alt="Image"
                                  @click.stop
                                />
                                <v-btn
                                  fab
                                  small
                                  color="red"
                                  text
                                  class="delete-icon"
                                  :class="{
                                    visible: visibleDeleteIcons[index],
                                  }"
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
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="addDialog.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn color="primary" :loading="addDialog.saveLoading" @click="addCenter">
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Add Class Dialog -->

    <!-- Edit Class Dialog -->
    <VDialog v-model="dialogEdit.open" max-width="800px" max-height="100%">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Edit") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.name"
                    :rules="Rules.name"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.center_form_id"
                    :rules="Rules.form"
                    :items="Forms"
                    outlined
                    :item-title="
                      (item) =>
                        item.exact_apartment_building
                          ? `${item.exact_apartment_building} - ${item.name}`
                          : item.name
                    "
                    item-value="_id"
                    attach
                    @update:modelValue="
                      (value) => {
                        const selectedItem = Forms.find((item) => item._id === value);
                        getHousesEdit(selectedItem);
                      }
                    "
                    :label="t('Form name')"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.center_form_house_id"
                    :rules="Rules.house_id"
                    :items="Houses"
                    outlined
                    :item-title="formatHouse"
                    item-value="_id"
                    attach
                    :label="t(`The house`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.is_available"
                    :rules="Rules.is_available"
                    :label="t('Status')"
                    :items="itemss"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.existing_type"
                    :rules="Rules.existing_type"
                    :label="t('The type')"
                    :items="itemsType_of_Service"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VTextarea
                    v-model="dialogEdit.editedItem.description"
                    :rules="Rules.description"
                    :label="t(`Details`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="3">
                      <VFileInput
                        v-model="filesE"
                        :label="t('The image')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeE"
                        multiple
                        @click:clear="
                          filesE = [];
                          dialogEdit.editedItem.imgs = [];
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="9" v-if="dialogEdit.editedItem.imgs.length">
                      <VCard>
                        <VCardText>
                          <v-row>
                            <v-col
                              cols="12"
                              md="2"
                              v-for="(imag, index) in dialogEdit.editedItem.imgs"
                              :key="index"
                              style="padding: 10px"
                            >
                              <VCard
                                style="position: relative"
                                class="imgI"
                                @mouseover="showDeleteIconE(index)"
                                @mouseleave="hideDeleteIconE(index)"
                              >
                                <img
                                  style="height: 100px; width: 100%"
                                  :src="isBase64(imag) ? imag : content_url + imag"
                                  alt="Image"
                                  @click.stop
                                />
                                <v-btn
                                  fab
                                  small
                                  color="red"
                                  text
                                  class="delete-icon"
                                  :class="{
                                    visible: visibleDeleteIcons[index],
                                  }"
                                  @click.stop="deleteImageE(index)"
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
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="dialogEdit.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn color="primary" :loading="dialogEdit.loading" @click="editItemConform">
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- Delete Dialog -->
    <VDialog v-model="dialogDelete.open" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure you want to delete?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogDelete.loading"
            @click="deleteItemConfirm"
          >
            {{ t("Delete") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

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
import Table from "@/components/table.vue";

export default {
  components: {
    Table,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "Residential Units",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Residential Units",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      Type_of_Service: "بيع",
      is_available: true,
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["حذف", "تعديل"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg

      // add
      files: [],
      visibleDeleteIcons: [],
      visibleDeleteIconsE: [],
      filesE: [],
      Forms: [],
      Houses: [],
      HousesShow: false,
      building_type: null,
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        name: null,
        description: null,
        form: null,
        center_form_id: null,
        center_form_house_id: null,
        is_available: null,
        existing_type: null,
        image: [],
      },
      // add

      // dialogEdit
      dialogEdit: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit

      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // Delete

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
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getForms();
  },
  watch: {
    "dialogEdit.editedItem.center_form_id": {
      handler(newVal) {
        const selectedItem = this.Forms.find((item) => item._id === newVal);
        if (selectedItem) {
          this.getHousesEditO(selectedItem);
        }
      },
      immediate: true,
    },
  },
  computed: {
    Rules() {
      return {
        image: [(value) => !!value || this.t("This field is required")],
        name: [(value) => !!value || this.t("This field is required")],
        price: [(value) => value !== null || this.t("This field is required")],
        description: [(value) => !!value || this.t("This field is required")],
        rating: [(value) => !!value || this.t("This field is required")],
        living_rooms: [(value) => !!value || this.t("This field is required")],
        bed_rooms: [(value) => !!value || this.t("This field is required")],
        is_available: [(value) => !!value || this.t("This field is required")],
        bath_rooms: [(value) => !!value || this.t("This field is required")],
        space: [(value) => !!value || this.t("This field is required")],
        existing_type: [(value) => !!value || this.t("This field is required")],
      };
    },
    headers() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("The name"),
          type: "strong",
          link: ``,
          key: "name",
        },
        {
          title: this.t("The type"),
          type: "strong",
          link: ``,
          key: "existing_type",
        },
        {
          title: this.t("Details"),
          type: "strong",
          link: ``,
          key: "description",
        },
        {
          title: this.t("Form name"),
          type: "strong",
          link: ``,
          key: "center_form_name",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
        },
        {
          title: this.t("The image"),
          type: "imgs",
          link: ``,
          key: "imgs",
        },
        {
          title: this.t("Status"),
          type: "strong",
          link: ``,
          key: "is_availablee",
        },
        {
          title: this.t("Operations"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
    itemss() {
      return [
        { text: this.t("Available"), value: true },
        { text: this.t("Unavailable"), value: false },
      ];
    },
    itemsType_of_Service() {
      return [
        { text: this.t("Sale"), value: "بيع" },
        { text: this.t("Rent"), value: "ايجار" },
      ];
    },
    filteredHouses() {
      return this.Houses.filter((House) => House.status !== "تم البيع");
    },
  },
  methods: {
    // Get Data
    async getCenter(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
      }

      const key =
        this.tableOptions.sortBy && this.tableOptions.sortBy.length > 0
          ? this.tableOptions.sortBy[0]
          : "createdAt";
      const order =
        this.tableOptions.sortDesc && this.tableOptions.sortDesc.length > 0
          ? this.tableOptions.sortDesc[0]
            ? "desc"
            : "asc"
          : "desc";

      const sortByJSON = JSON.stringify({ key, order });

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getBuyingOffers({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_available: this.is_available,
          existing_type: this.Type_of_Service,
        });

        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    async getForms() {
      try {
        const response = await adminApi.getFormsSelect();

        this.Forms = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    getItemText(item) {
      if (item.building_type === "شقق") {
        return `${item.exact_apartment_building} - ${item.name}`;
      }
      return item.name;
    },
    getHouses() {
      this.data.center_form_id = this.data.form._id;
      this.Houses = this.data.form.houses;
      this.building_type = this.data.form.building_type;
      this.HousesShow = true;
    },
    formatHouse(item) {
      if (this.building_type == "شقق") {
        return `الطابق  ( ${item.apartment_floor_number} ) شقة ( ${item.name} )  الحالة (${item.status})`;
      } else if (this.building_type == "منازل") {
        return `منزل ( ${item.name} ) الحالة  (${item.status})`;
      }
    },
    // Get Data

    // images
    handleFileChange(event) {
      const newFiles = Array.from(event.target.files);
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.image.push(reader.result);
          this.visibleDeleteIcons.push(false);
        };
        reader.readAsDataURL(file);
      });
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    deleteImage(index) {
      this.data.image.splice(index, 1);
      this.visibleDeleteIcons.splice(index, 1);
    },
    showDeleteIcon(index) {
      this.visibleDeleteIcons[index] = true;
    },
    hideDeleteIcon(index) {
      this.visibleDeleteIcons[index] = false;
    },
    // images

    // images
    handleFileChangeE(event) {
      const newFiles = Array.from(event.target.files);
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.imgs.push(reader.result);
          this.visibleDeleteIconsE.push(false);
        };
        reader.readAsDataURL(file);
      });
    },
    deleteImageE(index) {
      this.dialogEdit.editedItem.imgs.splice(index, 1);
      this.visibleDeleteIconsE.splice(index, 1);
    },
    showDeleteIconE(index) {
      this.visibleDeleteIconsE[index] = true;
    },
    hideDeleteIconE(index) {
      this.visibleDeleteIconsE[index] = false;
    },
    // images

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;

        try {
          const response = await adminApi.addBuyingOffers({
            name: this.data.name,
            description: this.data.description,
            center_form_id: this.data.center_form_id,
            center_form_house_id: this.data.center_form_house_id,
            is_available: this.data.is_available,
            existing_type: this.data.existing_type,
            imgs: this.data.image,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");

          this.data.name = null;
          this.data.description = null;
          this.data.center_form_id = null;
          this.data.center_form_house_id = null;
          this.data.is_available = null;
          this.data.existing_type = null;
          this.data.imgs = [];
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // showImgs
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.selectable.imgs;
    },
    // showImgs

    // editItem
    getHousesEditO(item) {
      this.building_type = item.building_type;
      this.Houses = item.houses;
    },
    getHousesEdit(item) {
      this.dialogEdit.editedItem.center_form_house_id = null;
      this.building_type = item.building_type;
      this.Houses = item.houses;
    },
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editBuyingOffers({
            buy_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            description: this.dialogEdit.editedItem.description,
            center_form_id: this.dialogEdit.editedItem.center_form_id,
            center_form_house_id: this.dialogEdit.editedItem.center_form_house_id,
            is_available: this.dialogEdit.editedItem.is_available,
            existing_type: this.dialogEdit.editedItem.existing_type,
            imgs: this.dialogEdit.editedItem.imgs,
          });

          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.dialogEdit.loading = false;
        }
      }
    },
    // editItem

    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.removeBuyingOffers(
          this.dialogDelete.deletedItem._id
        );
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
      }
    },
    // deleteItem

    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message
  },
};
</script>

<style>
.delete-icon.visible {
  opacity: 1 !important;
}
</style>
