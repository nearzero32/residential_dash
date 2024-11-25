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
        />
      </VCardText>
    </VCard>

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
                    :rules="Rules.required"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                  v-if="results.center_id._id === '672981a677eecc001eb05f4a'"
                >
                  <VAutocomplete
                    v-model="data.center_form_ids"
                    :rules="Rules.required"
                    :items="Forms"
                    item-value="_id"
                    outlined
                    :item-title="getItemText"
                    attach
                    multiple
                    :label="t(`Form name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                  v-if="results.center_id._id === '672981a677eecc001eb05f4a'"
                >
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
                          data.logo = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.logo"
                        style="width: 130px"
                        :src="isBase64(data.logo) ? data.logo : content_url + data.logo"
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <v-textarea
                    v-model="data.note"
                    :rules="Rules.required"
                    :label="t(`Note`)"
                    outlined
                  />
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
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.name"
                    :rules="Rules.required"
                    :label="t(`The name`)"
                    outlined
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                  v-if="results.center_id._id === '672981a677eecc001eb05f4a'"
                >
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.center_form_ids"
                    :rules="Rules.required"
                    :items="Forms"
                    outlined
                    :item-title="getItemText"
                    item-value="_id"
                    attach
                    multiple
                    :label="t(`Form name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                  v-if="results.center_id._id === '672981a677eecc001eb05f4a'"
                >
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
                          dialogEdit.editedItem.logo = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.logo"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.logo)
                            ? dialogEdit.editedItem.logo
                            : content_url + dialogEdit.editedItem.logo
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <v-textarea
                    v-model="dialogEdit.editedItem.note"
                    :rules="Rules.required"
                    :label="t(`Note`)"
                    outlined
                  />
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
        title: "Complexes",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Complexes",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
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

      // add
      results: {},
      Forms: [],
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        name: null,
        note: null,
        logo: null,
        center_form_ids: [],
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
    this.results = JSON.parse(localStorage.getItem("results"));
    this.getForms();
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
  },
  computed: {
    Rules() {
      return {
        required: [(value) => !!value || this.t("This field is required")],
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
          title: this.t("Note"),
          type: "strong",
          link: ``,
          key: "note",
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
        const response = await adminApi.getUnits({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          sortBy: sortByJSON,
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
    // Get Data

    // Add Data
    getItemText(item) {
      if (item.building_type === "شقق") {
        return `${item.exact_apartment_building} - ${item.name}`;
      }
      return item.name;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.logo = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        if (this.results.center_id._id === "672981a677eecc001eb05f4a") {
          if (this.data.logo === null) {
            this.showDialogfunction("يجب اضافة لوكو", "#FF5252");
            return;
          }
          if (this.data.center_form_ids.length <= 0) {
            this.showDialogfunction("يجب اختيار نموذج واحد على الاقل", "#FF5252");
            return;
          }
        }
        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addUnits({
            name: this.data.name,
            note: this.data.note,
            center_form_ids: this.data.center_form_ids,
            logo: this.data.logo,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
          this.data.name = null;
          this.data.note = null;
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

    // editItem
    handleFileChangeEdit(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.dialogEdit.editedItem.logo = reader.result;
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
        if (this.results.center_id._id === "672981a677eecc001eb05f4a") {
          if (this.dialogEdit.editedItem.logo === null) {
            this.showDialogfunction("يجب اضافة لوكو", "#FF5252");
            return;
          }
          if (this.dialogEdit.editedItem.center_form_ids.length <= 0) {
            this.showDialogfunction("يجب اختيار نموذج واحد على الاقل", "#FF5252");
            return;
          }
        }
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editUnits({
            id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            note: this.dialogEdit.editedItem.note,
            center_form_ids: this.dialogEdit.editedItem.center_form_ids,
            logo: this.dialogEdit.editedItem.logo,
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

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.removeUnits(this.dialogDelete.deletedItem._id);
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
