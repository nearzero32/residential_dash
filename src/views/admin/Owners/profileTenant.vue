<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <div class="mt-4" v-if="data">
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <div>
                <strong>{{ t("Tenant Name") }} : {{ data.name }}</strong>
                <br />
                <strong>{{ t("Phone number") }} : {{ data.phone }}</strong>
              </div>
            </v-col>
            <v-col cols="12" md="6" id="ImgO">
              <div>
                <img
                  v-if="data.image"
                  style="width: 55px"
                  :src="content_url + data.image"
                  :alt="data.name"
                />
                <div v-else>{{ t("No profile picture") }}</div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <hr />
        <v-card-text
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <h4>{{ t("Tenant details") }} :-</h4>
          <br />
          <h4>{{ t("Email") }} : {{ data.email }}</h4>
          <br />
          <h4>{{ t("Address") }} : {{ data.address }}</h4>
          <br />
          <h4>{{ t("Password") }} : {{ data.password_show }}</h4>
          <br />
          <h4>
            {{ t("National Identification Number") }} : {{ data.id_number }}
          </h4>
          <br />
          <h4>
            {{ t("Issuing Authority of the Identification Card") }} :
            {{ data.id_place_of_issue }}
          </h4>
          <br />
          <h4>
            {{ t("Date of Issuance of the Identification Card") }} :
            {{ data.id_issue_date }}
          </h4>
          <br />
          <h4>
            {{ t("Residence Card Number") }} : {{ data.residence_card_number }}
          </h4>
          <br />
          <h4>
            {{ t("Issuing Authority of the Residence Card") }} : {{ data.rec }}
          </h4>

          <br />
          <h4>{{ t("Job Title") }} : {{ data.owner_title_jop }}</h4>
          <br />
          <div style="width: 100%">
            <v-row style="margin: 0px">
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("ID pictures") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.id_img_front"
                        :src="content_url + data.id_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                      <img
                        v-if="data.id_img_back"
                        :src="content_url + data.id_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("Housing card pictures") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.location_img_front"
                        :src="content_url + data.location_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                      <img
                        v-if="data.location_img_back"
                        :src="content_url + data.location_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("Passport Photo") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.passport_img"
                        :src="content_url + data.passport_img"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الجواز"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
            </v-row>
          </div>
          <br />
        </v-card-text>
      </v-card>
    </div>
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

export default {
  setup() {
    const { t } = useI18n();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };
    return {
      format,
      t,
      // nav
      page: {
        title: "All tenants",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "All tenants",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      id: null,
      data: {},
      loading: null,
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
    if (this.$route.query.data) {
      const itemData = JSON.parse(this.$route.query.data);
      this.id = itemData;
      this.getCenter();
    }
  },
  methods: {
    // Get Data
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getOneTenant(this.id);
        this.data = response.data.results;
        console.log(response.data.results);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    // Get Data

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
#ImgO {
  text-align: end;
}

@media only screen and (max-width: 600px) {
  #ImgO {
    text-align: start;
  }
}
</style>
