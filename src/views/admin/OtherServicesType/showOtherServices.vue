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
              v-model="type"
              :label="t('The type')"
              :items="itemsType"
              item-title="name"
              item-value="name"
              @update:modelValue="getCenter"
              clearable
            ></VAutocomplete>
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
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardTitle>
        <VRow
          justify="space-between"
          style="align-items: center; margin-bottom: 15px"
        >
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
          @showImages="showImage"
        />
      </VCardText>
    </VCard>

    <!-- image -->
    <VDialog v-model="Image.showImageDailog" max-width="600px">
      <VCard>
        <VCardText>
          <VContainer>
            <VForm>
              <VRow class="justify-center">
                <img
                  :src="content_url + Image.imageUrlForShow"
                  alt
                  width="300"
                  height="200"
                />
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <v-btn color="primary" text @click="Image.showImageDailog = false">
            {{ t("Cancel") }}
          </v-btn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- image -->

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
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.name"
                    :rules="Rules.name"
                    :label="t(`Service Name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.price"
                    :rules="Rules.price"
                    :label="t(`Service Amount`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.type"
                    :label="t('The type')"
                    :items="itemsType"
                    item-title="name"
                    item-value="name"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.is_available"
                    :rules="Rules.is_available"
                    :label="t('Status')"
                    :items="itemss"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('The image')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChange"
                        @click:clear="
                          file = null;
                          data.image = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.image"
                        style="width: 130px"
                        :src="
                          isBase64(data.image)
                            ? data.image
                            : content_url + data.image
                        "
                        alt=""
                        @click.stop
                      />
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
          <VBtn
            color="primary"
            :loading="addDialog.saveLoading"
            @click="addCenter"
          >
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
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.name"
                    :rules="Rules.name"
                    :label="t(`Service Name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.price"
                    :rules="Rules.price"
                    :label="t(`Service Amount`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.type"
                    :label="t('The type')"
                    :items="itemsType"
                    item-title="name"
                    item-value="name"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.is_available"
                    :rules="Rules.is_available"
                    :label="t('Status')"
                    :items="itemss"
                    item-title="text"
                    item-value="value"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('The image')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.image = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.image"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.image)
                            ? dialogEdit.editedItem.image
                            : content_url + dialogEdit.editedItem.image
                        "
                        alt=""
                        @click.stop
                      />
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
          <VBtn
            color="primary"
            :loading="dialogEdit.loading"
            @click="editItemConform"
          >
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
        title: "Shipping",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Shipping",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      type: null,
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

      // Image
      Image: {
        showImageDailog: false,
        imageUrlForShow: null,
      },
      // Image

      // add
      file: null,
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        name: null,
        price: null,
        image: null,
        is_available: null,
        type: null,
      },
      itemsType: [],
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
    this.getOtherServicesTypeAll();
  },
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        price: [(value) => !!value || this.t("This field is required")],
        is_available: [
          (value) => value !== null || this.t("This field is required"),
        ],
        type: [(value) => !!value || this.t("This field is required")],
        image: [(value) => !!value || this.t("This field is required")],
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
          title: this.t("Service Name"),
          type: "strong",
          link: ``,
          key: "name",
        },
        {
          title: this.t("Service Amount"),
          type: "strong",
          link: ``,
          key: "price",
        },
        {
          title: this.t("Status"),
          type: "strong",
          link: ``,
          key: "is_availablee",
        },
        {
          title: this.t("The image"),
          type: "strong",
          link: ``,
          key: "image",
        },
        {
          title: this.t("The type"),
          type: "strong",
          link: ``,
          key: "type",
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
        { text: this.t("Activated"), value: true },
        { text: this.t("Deactivated"), value: false },
      ];
    },
    itemsType_of_Service() {
      return [
        { text: this.t("Shipping"), value: "شحن" },
        { text: this.t("Maintenance"), value: "صيانة" },
      ];
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
        const response = await adminApi.getOtherServices({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          is_available: this.is_available,
          sortBy: sortByJSON,
          type: this.type,
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
        }
      } finally {
        this.table.loading = false;
      }
    },
    async getOtherServicesTypeAll() {
      try {
        const response = await adminApi.getOtherServicesTypeAll();
        this.itemsType = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // Get Data

    // Add Data
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
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;

        try {
          const response = await adminApi.addServices({
            name: this.data.name,
            price: this.data.price,
            image: this.data.image,
            is_available: this.data.is_available,
            type: this.data.type,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");

          this.data.name = null;
          this.data.price = null;
          this.data.is_available = null;
          this.data.type = null;
          this.data.image = null;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else {
            this.addDialog.saveLoading = false;
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // showImage
    showImage(item) {
      this.Image.showImageDailog = true;
      this.Image.imageUrlForShow = item.selectable.image;
    },
    // showImage

    // editItem
    handleFileChangeEdit(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.dialogEdit.editedItem.image = reader.result;
        };

        reader.readAsDataURL(file);
      }
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
          const response = await adminApi.editServices({
            service_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            price: this.dialogEdit.editedItem.price,
            is_available: this.dialogEdit.editedItem.is_available,
            type: this.dialogEdit.editedItem.type,
            image: this.dialogEdit.editedItem.image,
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
            this.showDialogfunction(error.response.data.results, "#FF5252");
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
        const response = await adminApi.removeServices(
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
          this.showDialogfunction(error.response.data.results, "#FF5252");
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
