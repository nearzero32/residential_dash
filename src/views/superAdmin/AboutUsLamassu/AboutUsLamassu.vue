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
        <VContainer>
          <VForm ref="form">
            <VRow>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.name"
                  :rules="Rules.name"
                  :label="t('Name of the complex')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.phone"
                  :rules="Rules.phone"
                  :label="t('Phone number')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.address"
                  :rules="Rules.address"
                  :label="t('Address')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.website"
                  :label="t('Website')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.facebook"
                  :label="t('Facebook')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField
                  v-model="data.instagram"
                  :label="t('Instagram')"
                  outlined
                />
              </VCol>
              <VCol cols="12" md="12">
                <VRow>
                  <VCol cols="12" md="6">
                    <VFileInput
                      v-model="file"
                      :label="t('Logo')"
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
                      :src="
                        isBase64(data.logo)
                          ? data.logo
                          : content_url + data.logo
                      "
                      alt=""
                      @click.stop
                    />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12" md="12">
                <VTextarea
                  v-model="data.description"
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
        <VBtn color="primary" text @click="cancelAdd">
          {{ t("Cancel") }}
        </VBtn>
        <VBtn color="primary" :loading="saveLoading" @click="editItemConform">
          {{ t("Edit") }}
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
import { useI18n } from "vue-i18n";
import superAPI from "@/api/superAPI.js";

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "About us lamassu",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/super-admin-home",
        },

        {
          text: "About us lamassu",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,

      // add
      file: null,
      saveLoading: false,
      loading: false,
      data: {},
      // add

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
    this.getCenter();
  },
  computed: {
    Rules() {
      return {
        name: [(value) => !!value || this.t("This field is required")],
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
  },
  methods: {
    // Get Data
    async getCenter() {
      this.loading = true;

      try {
        const response = await superAPI.getAboutUsLamassu();

        this.data = response.data.results;
        this.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    // Get Data

    // add
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
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.saveLoading = true;

        try {
          const response = await superAPI.editAboutUsLamassu({
            name: this.data.name,
            description: this.data.description,
            address: this.data.address,
            phone: this.data.phone,
            website: this.data.website,
            facebook: this.data.facebook,
            instagram: this.data.instagram,
            logo: this.data.logo,
          });

          this.saveLoading = false;
          await this.getCenter();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
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
      }
    },

    // add
    cancelAdd() {
      this.$router.back(1);
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
