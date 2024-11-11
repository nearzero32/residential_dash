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
      <VCardText class="custom-table-page">
        <Table
          :table="table"
          :content_url="content_url"
          :tableOptions="tableOptions"
          :headers="headers"
          @update:options="getCenter"
          @deleteItems="deleteItem"
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
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="data.title"
                    :rules="Rules.title"
                    :label="t(`Title`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <v-select
                    :items="items"
                    v-model="data.receiver_type"
                    :rules="Rules.receiver_type"
                    item-title="text"
                    item-value="value"
                    :label="t('Recipient Type')"
                    outlined
                    @update:modelValue="data.receivers = null"
                  ></v-select>
                </VCol>
                <VCol cols="12" md="4" v-if="data.receiver_type == 'مالك محدد'">
                  <VAutocomplete
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    :items="OwnersAll"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    chips
                    multiple
                    :label="t(`Owners`)"
                  ></VAutocomplete>
                </VCol>
                <VCol
                  cols="12"
                  md="4"
                  v-else-if="data.receiver_type == 'موظف مبيعات محدد'"
                >
                  <VAutocomplete
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    :items="SellsEmployee"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    chips
                    multiple
                    :label="t(`Sales staff`)"
                  ></VAutocomplete>
                </VCol>
                <VCol
                  cols="12"
                  md="4"
                  v-else-if="data.receiver_type == 'حارس محدد'"
                >
                  <VAutocomplete
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    :items="GuardsAll"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    chips
                    multiple
                    :label="t(`Guard's name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol
                  cols="12"
                  md="4"
                  v-else-if="data.receiver_type == 'مستاجر محدد'"
                >
                  <VAutocomplete
                    v-model="data.receivers"
                    :rules="Rules.receivers"
                    :items="TenantsAll"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    chips
                    multiple
                    :label="t(`Tenant Name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="data.link"
                    :label="t(`The link (optional)`)"
                    outlined
                  />
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
                <VCol cols="12" md="12">
                  <VTextarea
                    v-model="data.body"
                    :rules="Rules.body"
                    :label="t('Details')"
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
        title: "Notifications",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Notifications",
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
        actions: ["حذف"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      action: [],
      // table

      // add
      file: null,
      TenantsAll: [],
      OwnersAll: [],
      GuardsAll: [],
      SellsEmployee: [],
      addDialog: {
        open: false,
        saveLoading: false,
      },
      data: {
        title: null,
        link: null,
        body: null,
        image: null,
        receiver_type: null,
        receivers: [],
      },
      // add

      // Image
      Image: {
        showImageDailog: false,
        imageUrlForShow: null,
      },
      // Image

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
    this.getSellsEmployee();
    this.getOwnersAll();
    this.getTenantsAll();
    this.getGuardsAll();
  },
  computed: {
    Rules() {
      return {
        title: [(value) => !!value || this.t("This field is required")],
        body: [(value) => !!value || this.t("This field is required")],
        receiver_type: [(value) => !!value || this.t("This field is required")],
        receivers: [(value) => !!value || this.t("This field is required")],
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
          title: this.t("Title"),
          type: "strong",
          link: ``,
          key: "title",
        },
        {
          title: this.t("The type"),
          type: "strong",
          link: ``,
          key: "type",
        },
        {
          title: this.t("Recipient Type"),
          type: "receiver_type",
          link: ``,
          key: "receiver_type",
        },
        {
          title: this.t("The image"),
          type: "strong",
          link: ``,
          key: "image",
        },
        {
          title: this.t("Details"),
          type: "strong",
          link: ``,
          key: "body",
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
    items() {
      return [
        { text: this.t("All Customers"), value: "جميع الزبائن" },
        { text: this.t("All Owners"), value: "جميع الملاك" },
        { text: this.t("Specific Owner"), value: "مالك محدد" },
        { text: this.t("All Sales Staff"), value: "جميع موظفي المبيعات" },
        { text: this.t("Specific Sales Staff"), value: "موظف مبيعات محدد" },
        { text: this.t("All guards"), value: "جميع الحراس" },
        { text: this.t("Specified guard"), value: "حارس محدد" },
        { text: this.t("All tenants"), value: "جميع المستاجرين" },
        { text: this.t("Specified tenant"), value: "مستاجر محدد" },
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
        const response = await adminApi.getNotifications({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          is_deleted: false,
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
    async getSellsEmployee() {
      try {
        const key = "createdAt";
        const order = "desc";

        const sortByJSON = JSON.stringify({ key, order });

        const response = await adminApi.getSellsEmployee({
          page: 1,
          limit: 1000000000000,
          sortBy: sortByJSON,
          search: null,
          is_deleted: false,
        });
        this.SellsEmployee = response.data.results.data;
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
    async getOwnersAll() {
      try {
        const response = await adminApi.getOwnersAll();

        this.OwnersAll = response.data.results;
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
    async getGuardsAll() {
      try {
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

        const response = await adminApi.getGuards({
          page: 1,
          limit: 9999999999999,
          sortBy: sortByJSON,
          search: null,
          is_deleted: false,
        });

        this.GuardsAll = response.data.results.data;
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
    async getTenantsAll() {
      try {
        const response = await adminApi.getAllTenants();

        this.TenantsAll = response.data.results;
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
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },

    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        if (this.data.receiver_type === "موظف مبيعات محدد") {
          if (this.data.receivers.length === 0) {
            this.showDialogfunction("يرجى اختيار موظف مبيعات", "#FF5252");
            return;
          }
        } else if (this.data.receiver_type === "مالك محدد") {
          if (this.data.receivers.length === 0) {
            this.showDialogfunction("يرجى اختيار مالك", "#FF5252");
            return;
          }
        } else if (this.data.receiver_type === "حارس محدد") {
          if (this.data.receivers.length === 0) {
            this.showDialogfunction("يرجى اختيار حارس", "#FF5252");
            return;
          }
        } else if (this.data.receiver_type === "مستاجر محدد") {
          if (this.data.receivers.length === 0) {
            this.showDialogfunction("يرجى اختيار مستاجر", "#FF5252");
            return;
          }
        }

        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addNotifications({
            title: this.data.title,
            link: this.data.link,
            body: this.data.body,
            image: this.data.image,
            receiver_type: this.data.receiver_type,
            receivers: this.data.receivers,
          });

          this.addDialog.saveLoading = false;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
          this.data.title = null;
          this.data.link = null;
          this.data.body = null;
          this.data.image = null;
          this.data.receiver_type = null;
          this.data.receivers = [];
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

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.removeNotifications(
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

    // showImage
    showImage(item) {
      this.Image.showImageDailog = true;
      this.Image.imageUrlForShow = item.selectable.image;
    },
    // showImage

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
.custom-table-page
  .v-table--density-default
  > .v-table__wrapper
  > table
  > tbody
  > tr
  > td,
.custom-table-page
  .v-table--density-default
  > .v-table__wrapper
  > table
  > thead
  > tr
  > td,
.custom-table-page
  .v-table--density-default
  > .v-table__wrapper
  > table
  > tfoot
  > tr
  > td {
  block-size: auto !important;
  min-height: 40px;
}
.custom-table-page
  .v-table
  .v-table__wrapper
  table
  .v-data-table__tbody
  tr
  td
  div {
  padding-block: 10px;
}
</style>
