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
      <VCardTitle style="text-align: center">{{ t("Actions") }}</VCardTitle>
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <VBtn
              tile
              color="primary"
              prepend-icon="mdi-plus"
              @click="addDialog.open = true"
            >
              {{ t("Addition") }}
            </VBtn>
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
              :label="t('search')"
              variant="solo"
              hide-details
              single-line
              @click:clear="getDataAxios"
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
          @update:options="getDataAxios"
          @deleteItems="deleteItem"
          @editItems="editItem"
          @printItems="printItem"
        />
      </VCardText>
    </VCard>

    <!-- Edit Class Dialog -->
    <VDialog v-model="dialogEdit.open" max-width="600px" max-height="100%">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("update") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.app"
                    :items="classes"
                    :rules="Rules.app"
                    label="اسم التطبيق"
                    outlined
                  />
                </VCol>
                <VCol cols="12">
                  <VTextField
                    v-model="dialogEdit.editedItem.version"
                    label="نسخة التطبيق"
                    :rules="Rules.version"
                    outlined
                  />
                </VCol>
                <VCol cols="12">
                  <VFileInput
                    v-model="fileArray"
                    :rules="Rules.file"
                    label="Upload APK"
                    outlined
                    accept=".apk"
                    @change="handleFileChange"
                  />
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="dialogEdit.open = false">
            {{ t("cancellation") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="dialogEdit.loading"
            @click="editItemConform"
          >
            {{ t("update") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- Add Class Dialog -->
    <VDialog v-model="addDialog.open" max-width="600px">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Addition") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12">
                  <VAutocomplete
                    v-model="data.app"
                    :items="classes"
                    :rules="Rules.app"
                    label="اسم التطبيق"
                    outlined
                  />
                </VCol>
                <VCol cols="12">
                  <VTextField
                    v-model="data.version"
                    label="نسخة التطبيق"
                    :rules="Rules.version"
                    outlined
                  />
                </VCol>
                <VCol cols="12">
                  <VFileInput
                    v-model="data.file"
                    :rules="Rules.file"
                    label="Upload APK"
                    outlined
                    accept=".apk"
                    @change="handleFileUpload"
                  />
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="addDialog.open = false">
            {{ t("cancellation") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="addDialog.saveLoading"
            @click="AddClass"
          >
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

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
            {{ t("ending") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->

    <!-- Delete Dialog -->
    <VDialog v-model="dialogDelete.open" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure to delete this item?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete.open = false">
            {{ t("cancellation") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogDelete.loading"
            @click="deleteItemConfirm"
          >
            {{ t("delete") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import superAPI from "@/api/superAPI.js";
import Table from "@/components/table.vue";
import { useI18n } from "vue-i18n";

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
        title: "The grade and the class",
      },
      b: [
        {
          text: "Home",
          disabled: false,
          to: "/manager-home",
        },

        {
          text: "The grade and the class",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      study_year: localStorage.getItem("study_year"),
      // table
      content_url: null,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "حذف", "بحث"],
        search: null,
        itemsPerPage: 5,
      },
      // table

      // add
      addDialog: {
        open: false,
        saveLoading: false,
      },
      classes: [],
      data: {
        app: null,
        version: null,
        url: null,
        file: null,
      },
      // add
      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // Delete
      // dialogEdit
      dialogEdit: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit

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
        app: [(value) => !!value || this.t("Field is required")],
        version: [(value) => !!value || this.t("Field is required")],
        url: [(value) => !!value || this.t("Field is required")],
        file: [(value) => !!value || this.t("Field is required")],
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
          title: this.t("اسم التطبيق"),
          type: "strong",
          link: ``,
          key: "app",
        },
        {
          title: this.t("نسحة التطبيق"),
          type: "strong",
          link: ``,
          key: "version",
        },
        {
          title: this.t("الرابط"),
          type: "strong",
          link: ``,
          key: "url",
        },
        {
          title: this.t("Actions"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
  },
  mounted() {
    this.getClasses();
  },
  methods: {
    async getDataAxios(newOptions) {
      if (newOptions) {
        this.tableOptions = newOptions;
      }

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await superAPI.getAppsVersions();

        this.table.Data = response.data.results;
        this.table.totalItems = response.data.results.length;
        this.tableOptions.itemsPerPage = response.data.results.length;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.table.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.table.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    async getClasses() {
      try {
        const response = await superAPI.getAppsVersionsNames();

        this.classes = response.data.results;
      } catch (error) {
        if (error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // add
    async AddClass() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;
        const formData = new FormData();
        formData.append("app", this.data.app);
        formData.append("version", this.data.version);
        formData.append("url", this.data.file[0]);

        try {
          const response = await superAPI.addAppsVersions(formData);

          this.addDialog.open = false;
          this.addDialog.saveLoading = false;
          this.data.app = null;
          this.data.version = null;
          this.data.file = null;
          this.getDataAxios();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addDialog.open = false;
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.addDialog.open = false;
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        }
      }
    },

    // add

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await superAPI.removeAppsVersions(
          this.dialogDelete.deletedItem._id
        );
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getDataAxios();
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

    // editItem
    handleFileChange() {
      if (this.fileArray.length > 0) {
        this.dialogEdit.editedItem.url = this.fileArray[0];
      } else {
        this.dialogEdit.editedItem.url = "";
      }
    },
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      this.dialogEdit.loading = true;

      const formData = new FormData();
      formData.append("app", this.dialogEdit.editedItem.app);
      formData.append("version", this.dialogEdit.editedItem.version);

      if (
        this.dialogEdit.editedItem.url &&
        this.dialogEdit.editedItem.url !== ""
      ) {
        formData.append("url", this.dialogEdit.editedItem.url);
      }

      try {
        const response = await superAPI.editAppsVersions({
          id: this.dialogEdit.editedItem._id,
          formData: formData,
        });

        this.dialogEdit.open = false;
        this.dialogEdit.loading = false;
        this.getDataAxios();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // editItem

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
<style lang="scss">
</style>