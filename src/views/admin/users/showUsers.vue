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
              @click="getEmailSymbol()"
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
          @emitPrintItems="printItem"
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
                <VCol cols="12" md="6" v-if="email_symbol !== null">
                  <VTextField
                    v-model="data.email"
                    :rules="Rules.account_email"
                    dense
                    :label="t('Email')"
                    outlined
                  >
                    <template #prepend-inner>{{ email_symbol }}</template>
                  </VTextField>
                </VCol>
                <VCol cols="12" md="6" v-else>
                  <VTextField
                    v-model="data.email"
                    :rules="Rules.email"
                    :label="t(`Email`)"
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
                  <VAutocomplete
                    v-model="data.action"
                    :rules="Rules.action"
                    :items="action"
                    outlined
                    item-title="text"
                    item-value="value"
                    attach
                    multiple
                    :label="t('User Permissions')"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.pages"
                    :rules="Rules.pages"
                    :items="pages"
                    outlined
                    item-title="text"
                    item-value="value"
                    attach
                    multiple
                    :label="t('User Pages')"
                  ></VAutocomplete>
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
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.privileges.actions"
                    :rules="Rules.action"
                    :items="action"
                    outlined
                    item-title="text"
                    item-value="value"
                    attach
                    multiple
                    :label="t('User Permissions')"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.pages"
                    :rules="Rules.pages"
                    :items="pages"
                    outlined
                    item-title="text"
                    item-value="value"
                    attach
                    multiple
                    :label="t('User Pages')"
                  ></VAutocomplete>
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
        title: "Users",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Users",
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
      email_symbol: null,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["حذف", "تعديل", "طباعة"],
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
        action: [],
        pages: [],
        address: null,
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
  },
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
        pages: [(value) => !!value || this.t("This field is required")],
        account_email: [
          (value) => !!value || this.t("This field is required"),
          (v) => {
            const hasEnglishCharacters = /[a-zA-Z]/.test(v);
            if (!hasEnglishCharacters) {
              return this.t("The email must contain English characters");
            }
            return true;
          },
          (v) => {
            const hasAtSign = /@/.test(v);
            if (hasAtSign) {
              return this.t("The email must not contain the symbol") + " ( @ ) ";
            }
            return true;
          },
          (v) => {
            const hasSpace = /\s/.test(v);
            if (hasSpace) {
              return this.t("The email must not contain spaces between characters");
            }
            return true;
          },
          (v) => {
            const hasDot = /\./.test(v);
            if (hasDot) {
              return this.t("The email must not contain the symbol") + " ( . ) ";
            }
            return true;
          },
        ],
        action: [(value) => !!value || this.t("This field is required")],
        password_show: [(value) => !!value || this.t("This field is required")],
        email: [
          (value) => !!value || this.t("This field is required"),
          (value) =>
            /.+@.+\..+/.test(value) || this.t("Please enter a valid email address"),
        ],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11) return this.t("Phone number must be 11 digits");
            return true;
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
          title: this.t("The name"),
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
          title: this.t("User Permissions"),
          type: "privileges.actions",
          link: ``,
          key: "privileges.actions",
        },
        {
          title: this.t("User Pages"),
          type: "strong",
          link: ``,
          key: "pages",
        },
        {
          title: this.t("Address"),
          type: "strong",
          link: ``,
          key: "address",
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
    action() {
      return [
        { text: this.t("Addition"), value: "add" },
        { text: this.t("Remove"), value: "remove" },
        { text: this.t("Edit"), value: "edit" },
      ];
    },
    pages() {
      return [
        { text: this.t("Home Page"), value: "home" },
        { text: this.t("Accounts"), value: "Accounts" },
        { text: this.t("Apartment models"), value: "forms-Apartments" },
        { text: this.t("House Models"), value: "forms" },
        { text: this.t("All Owners"), value: "owners" },
        { text: this.t("All tenants"), value: "all-tenants" },
        {
          text: this.t("Received the residential unit"),
          value: "owners-recipients",
        },
        {
          text: this.t("Not received the residential unit"),
          value: "owners-non-recipients",
        },
        { text: this.t("Owners' visits"), value: "visits" },

        { text: this.t("Sales"), value: "sales" },
        { text: this.t("Sales staff"), value: "sells-employee" },
        { text: this.t("Queries"), value: "inquiries" },
        { text: this.t("Customer attendance form"), value: "call-center" },
        {
          text: this.t("Residential Unit Booking Application Form"),
          value: "application-form",
        },
        { text: this.t("Approval Request Form"), value: "confirmations-form" },
        { text: this.t("Residential Unit Requests"), value: "reservations" },
        { text: this.t("Sales Contracts"), value: "salesContracts" },

        // {
        //   text: this.t("marketing Residentail"),
        //   value: "marketing Residentail",
        // },
        // {
        //   text: this.t("Complexes"),
        //   value: "show-units",
        // },
        // {
        //   text: this.t("marketing call center"),
        //   value: "show-marketing-call-center",
        // },

        { text: this.t("Notifications"), value: "notifications" },
        { text: this.t("Banks"), value: "bankAccounts" },

        { text: this.t("After-Sales Services"), value: "After-sales-service" },
        { text: this.t("Residents' Requests"), value: "residents-requests" },
        { text: this.t("Maintenance Staff"), value: "maintenance-staff" },
        { text: this.t("Other services"), value: "reservation-service-other" },
        {
          text: this.t("Maintenance of Devices"),
          value: "maintenance-of-devices",
        },
        { text: this.t("Service Room Names"), value: "service-room-names" },
        { text: this.t("Service Bookings"), value: "reservation-service" },
        { text: this.t("Shipping"), value: "service-bookings-shipping" },
        { text: this.t("Maintenance"), value: "service-bookings-maintenance" },
        { text: this.t("Services"), value: "Services" },
        { text: this.t("Shipping"), value: "show-services" },
        { text: this.t("Maintenance"), value: "services-maintenance" },
        { text: this.t("Other services"), value: "Other services" },
        { text: this.t("Display"), value: "other-services" },
        { text: this.t("Types of services"), value: "other-services-type" },
        { text: this.t("Residential Units"), value: "residential-units" },

        { text: this.t("Guards"), value: "guards" },
        { text: this.t("Staff"), value: "employees" },
        { text: this.t("Users"), value: "Users" },
        { text: this.t("Advertisements"), value: "postings" },
        { text: this.t("Features"), value: "advantages" },
        {
          text: this.t("How did you hear about us?"),
          value: "how_u_hear_about_us",
        },
        { text: this.t("Complaints"), value: "complain" },
      ];
    },
  },
  methods: {
    // Get Data
    async getEmailSymbol() {
      try {
        const response = await adminApi.getEmailSymbol();
        this.email_symbol = response.data.results;
        this.addDialog.open = true;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
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
        const response = await adminApi.getUsers({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
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
    // Get Data

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;

        try {
          const response = await adminApi.addUsers({
            name: this.data.name,
            email:
              this.email_symbol !== null
                ? this.data.email + this.email_symbol
                : this.data.email,
            password_show: this.data.password_show,
            phone: this.data.phone,
            address: this.data.address,
            actions: this.data.action,
            pages: this.data.pages,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");

          this.data.name = null;
          this.data.email = null;
          this.data.password_show = null;
          this.data.phone = null;
          this.data.action = [];
          this.data.address = null;
          this.data.pages = [];
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

        try {
          const response = await adminApi.editUsers({
            user_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            email: this.dialogEdit.editedItem.email,
            password_show: this.dialogEdit.editedItem.password_show,
            phone: this.dialogEdit.editedItem.phone,
            address: this.dialogEdit.editedItem.address,
            actions: this.dialogEdit.editedItem.privileges.actions,
            pages: this.dialogEdit.editedItem.pages,
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
        const response = await adminApi.removeUsers(this.dialogDelete.deletedItem._id);
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

    // printItem
    printItem(item) {
      localStorage.setItem("PrintEmployees", JSON.stringify(item));
      let routeData = this.$router.resolve({
        name: `admin-print-staff`,
      });
      window.open(routeData.href, "_blank");
    },
    // printItem

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
