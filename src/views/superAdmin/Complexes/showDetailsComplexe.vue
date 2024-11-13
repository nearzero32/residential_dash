<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)}`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
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
              :label="t('Search')"
              variant="solo"
              hide-details
              single-line
              @click:clear="getCenter"
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
                    :rules="Rules.name"
                    :label="t('Username')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.email"
                    :rules="Rules.email"
                    :label="t('Email')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.phone"
                    :rules="Rules.phone"
                    :label="t('Phone number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.password_show"
                    :rules="Rules.password_show"
                    :label="t('Password')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.address"
                    :rules="Rules.address"
                    :label="t('Address')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VSelect
                    :items="items"
                    v-model="data.type"
                    :rules="Rules.address"
                    item-title="text"
                    item-value="value"
                    label="النوع"
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
                    :label="t('Username')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.email"
                    :rules="Rules.email"
                    :label="t('Email')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.phone"
                    :rules="Rules.phone"
                    :label="t('Phone number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.password_show"
                    :rules="Rules.password_show"
                    :label="t('Password')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.address"
                    :rules="Rules.address"
                    :label="t('Address')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VSelect
                    :items="items"
                    v-model="dialogEdit.editedItem.type"
                    :rules="Rules.address"
                    item-title="text"
                    item-value="value"
                    label="النوع"
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
import { useI18n } from "vue-i18n";
import Table from "@/components/table.vue";
import superAPI from "@/api/superAPI.js";

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
        title: "Complex",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/super-admin-home",
        },
        {
          text: "Complexes",
          disabled: false,
          to: "/super-admin-show-complexes",
        },
        {
          text: "Complex",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      pageData: null,
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "بحث", "حذف"],
        search: null,
        itemsPerPage: 5,
      },
      // table

      // add
      items: [
        { text: "ادمن", value: "admin" },
        { text: "محاسب", value: "manager_accountant" },
        { text: "أداري مجمع", value: "resident_manager" },
        { text: "مستثمر", value: "investor" },
      ],
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        center_id: null,
        name: "",
        email: "",
        password_show: "",
        phone: "",
        address: "",
        type: null,
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
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        email: [
          (value) => !!value || this.t("This field is required"),
          (value) =>
            /.+@.+\..+/.test(value) ||
            this.t("Please enter a valid email address"),
        ],
        password_show: [(value) => !!value || this.t("This field is required")],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11)
              return this.t("Phone number must be 11 digits");
            return true; // Validation passed
          },
        ],
        address: [(value) => !!value || this.t("This field is required")],
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
          title: this.t("Username"),
          type: "strong",
          link: ``,
          key: "name",
        },
        {
          title: this.t("Email"),
          type: "strong",
          link: ``,
          key: "email",
        },
        {
          title: this.t("Password"),
          type: "strong",
          link: ``,
          key: "password_show",
        },
        {
          title: this.t("Phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("Address"),
          type: "strong",
          link: ``,
          key: "address",
        },
        {
          title: this.t("النوع"),
          type: "typeAdmin",
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
  },
  created() {
    if (this.$route.query.data) {
      const itemData = JSON.parse(this.$route.query.data);
      this.data.center_id = itemData;
      this.pageData = itemData;
      this.getCenter();
    }
  },
  methods: {
    // Get Data
    async getCenter(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
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
        const response = await superAPI.getCenterUsers(this.pageData);

        this.table.Data = response.data.results;
        this.table.totalItems = response.data.results.length;
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
    // Get Data

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;

        try {
          const response = await superAPI.addCenterUsers({
            center_id: this.pageData,
            name: this.data.name,
            email: this.data.email,
            password_show: this.data.password_show,
            phone: this.data.phone,
            address: this.data.address,
            type: this.data.type,
          });
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");

          this.addDialog.saveLoading = false;
          this.data.name = "";
          this.data.phone = "";
          this.data.email = "";
          this.data.password_show = "";
          this.data.address = "";
          this.data.type = null;
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
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;
        console.log(this.dialogEdit.editedItem.type);
        try {
          const response = await superAPI.editCenterUsers({
            account_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            email: this.dialogEdit.editedItem.email,
            password_show: this.dialogEdit.editedItem.password_show,
            phone: this.dialogEdit.editedItem.phone,
            address: this.dialogEdit.editedItem.address,
            type: this.dialogEdit.editedItem.type,
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
        const response = await superAPI.removeCenterUsers(
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
