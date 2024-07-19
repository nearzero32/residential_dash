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
          <VCol cols="12" md="3" style="text-align: center">
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
          <VCol cols="12" md="3" style="text-align: center">
            <VAutocomplete
              v-model="is_deleted"
              :label="t('Data type')"
              :items="items"
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
          @editItems="editItem"
          @emitPrintItems="printItem"
          @emitDisable="emitDisable"
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
                    :label="t('The name')"
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
                  <VTextField
                    v-model="data.salary"
                    :rules="Rules.salary"
                    :label="t('Salary')"
                    outlined
                    @keypress="isNumber($event)"
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
                    :label="t('The name')"
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
                  <VTextField
                    v-model="dialogEdit.editedItem.salary"
                    :rules="Rules.salary"
                    :label="t('Salary')"
                    outlined
                    @keypress="isNumber($event)"
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
          {{ t("Are you sure you want to deactivate this account?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            {{ t("Deactivate") }}
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
        title: "Sales staff",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Sales staff",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      is_deleted: false,
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "طباعة", "ايقاف"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // add
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        name: null,
        email: null,
        phone: null,
        password_show: null,
        address: null,
        salary: null,
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

      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg

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
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11)
              return this.t("Phone number must be 11 digits");
            return true;
          },
        ],
        password_show: [(value) => !!value || this.t("This field is required")],
        address: [(value) => !!value || this.t("This field is required")],
        salary: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (isNaN(value)) return this.t("Please enter a valid number");
            return true;
          },
        ],
      };
    },
    items() {
      return [
        { text: this.t("Deleted"), value: true },
        { text: this.t("Not deleted"), value: false },
      ];
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
          title: this.t("Employee name"),
          type: "link",
          link: `/admin-profile-sales-staff`,
          key: "name",
        },
        {
          title: this.t("Number of application forms"),
          type: "strong",
          link: ``,
          key: "application_form_count",
        },
        {
          title: this.t("Number of customer inquiries"),
          type: "strong",
          link: ``,
          key: "call_center_count",
        },
        {
          title: this.t("Number of approval requests"),
          type: "strong",
          link: ``,
          key: "confirmations_form_count",
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
        const response = await adminApi.getSellsEmployee({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: this.is_deleted,
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
    // Get Data

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addSellsEmployee({
            name: this.data.name,
            phone: this.data.phone,
            password_show: this.data.password_show,
            email: this.data.email,
            address: this.data.address,
            salary: this.data.salary,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
          this.data.name = "";
          this.data.phone = "";
          this.data.password_show = "";
          this.data.email = "";
          this.data.address = "";
          this.data.salary = "";
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

    // editItem
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editSellsEmployee({
            id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            phone: this.dialogEdit.editedItem.phone,
            password_show: this.dialogEdit.editedItem.password_show,
            email: this.dialogEdit.editedItem.email,
            address: this.dialogEdit.editedItem.address,
            salary: this.dialogEdit.editedItem.salary,
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

    // printItem
    printItem(item) {
      localStorage.setItem("printSalesStaff", JSON.stringify(item));
      let routeData = this.$router.resolve({
        name: `admin-print-sales-staff`,
      });
      window.open(routeData.href, "_blank");
    },
    // printItem

    // deleteItem
    emitDisable(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.disableSellsEmployee(
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

    isNumber(evt) {
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keyPressed = evt.key;
      if (!keysAllowed.includes(keyPressed)) {
        evt.preventDefault();
      }
    },

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
