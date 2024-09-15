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
          :dataSerch="dataSerch"
          :search="table.search"
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
                    :label="t('Name of the complex')"
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
                  <VAutocomplete
                    v-model="data.building_type"
                    :items="items"
                    item-title="name"
                    item-value="value"
                    :rules="Rules.building_type"
                    :label="t('Building type')"
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
                <v-col cols="12" md="6" style="margin-block: 10px">
                  <v-autocomplete
                    v-model="data.is_dollar"
                    :rules="Rules.is_dollar"
                    :items="is_dollarType"
                    item-title="text"
                    item-value="value"
                    outlined
                    dense
                    label="نوع العملة"
                    @click:clear="data.is_dollar = null"
                  ></v-autocomplete>
                </v-col>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('QR code')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChange"
                        @click:clear="
                          file = null;
                          data.qr = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.qr"
                        style="width: 130px"
                        :src="
                          isBase64(data.qr) ? data.qr : content_url + data.qr
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
                    :label="t('Name of the complex')"
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
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.building_type"
                    :items="items"
                    item-title="name"
                    item-value="value"
                    :rules="Rules.building_type"
                    :label="t('Building type')"
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
                <v-col cols="12" md="6" style="margin-block: 10px">
                  <v-autocomplete
                    v-model="dialogEdit.editedItem.is_dollar"
                    :rules="Rules.is_dollar"
                    :items="is_dollarType"
                    item-title="text"
                    item-value="value"
                    outlined
                    dense
                    label="نوع العملة"
                    @click:clear="data.is_dollar = null"
                  ></v-autocomplete>
                </v-col>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('QR code')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.qr = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.qr"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.qr)
                            ? dialogEdit.editedItem.qr
                            : content_url + dialogEdit.editedItem.qr
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
        title: "Complexes",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/super-admin-home",
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
        actions: ["تعديل", "بحث"],
        search: null,
        itemsPerPage: 5,
      },
      dataSerch: [],
      // table

      // add
      is_dollarType: [
        {
          text: "دينار",
          value: false,
        },
        {
          text: "دولار",
          value: true,
        },
      ],
      addDialog: {
        open: false,
        saveLoading: false,
      },
      items: [
        { name: "شقق", value: "شقق" },
        { name: "منازل", value: "منازل" },
        { name: "منازل وشقق", value: "منازل وشقق" },
      ],
      file: null,
      data: {
        qr: null,
        is_dollar: null,
        name: "",
        building_type: "",
        phone: "",
        address: "",
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
        is_dollar: [
          (value) => value !== null || this.t("This field is required"),
        ],
        name: [(value) => !!value || this.t("This field is required")],
        building_type: [(value) => !!value || this.t("This field is required")],
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
          title: this.t("Name of the complex"),
          type: "link",
          link: `/super-admin-show-details-complexe`,
          key: "name",
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
          title: this.t("Building type"),
          type: "strong",
          link: ``,
          key: "building_type",
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
  mounted() {
    this.getCenter();
  },
  methods: {
    // Get Data
    async getCenter() {
      try {
        const response = await superAPI.getCenter();

        this.table.Data = response.data.results;
        this.dataSerch = response.data.results;
        this.table.totalItems = response.data.results.length;
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
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.qr = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;

        try {
          const response = await superAPI.addCenter({
            name: this.data.name,
            phone: this.data.phone,
            building_type: this.data.building_type,
            address: this.data.address,
            qr: this.data.qr,
            is_dollar: this.data.is_dollar,
          });

          this.addDialog.saveLoading = false;
          this.data.name = "";
          this.data.phone = "";
          this.data.building_type = "";
          this.data.address = "";
          this.data.qr = null;
          this.data.is_dollar = null;
          await this.getCenter();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
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
    handleFileChangeEdit(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.dialogEdit.editedItem.qr = reader.result;
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
          const response = await superAPI.editCenter({
            center_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            phone: this.dialogEdit.editedItem.phone,
            building_type: this.dialogEdit.editedItem.building_type,
            address: this.dialogEdit.editedItem.address,
            qr: this.dialogEdit.editedItem.qr,
            is_dollar: this.dialogEdit.editedItem.is_dollar,
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
