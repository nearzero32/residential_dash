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
            <VAutocomplete
              dense
              filled
              solo
              v-model="name"
              :label="t('Names of the buildings')"
              :loading="loadingApartmentTowers"
              :items="ApartmentTowers"
              item-title="exact_apartment_building"
              item-value="exact_apartment_building"
              @update:modelValue="getNameFromsApartmentTowers"
            ></VAutocomplete>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mb-6" :loading="loadingBuildings">
      <VCardTitle style="text-align: center">{{ t("Forms") }}</VCardTitle>
      <VCardText>
        <VItemGroup
          class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
          style="flex-wrap: wrap; justify-content: flex-start !important"
        >
          <VItem v-for="(Building, index) in Buildings" :key="index">
            <VTooltip top v-if="Building.name === null">
              <template v-slot:activator="{ props }">
                <VBtn
                  style="margin: 5px"
                  :height="40"
                  :color="Building._id === activeBuilding ? 'primary' : ''"
                  :border="true"
                  v-bind="props"
                  v-on="on"
                  @click="setActiveBuilding(Building._id, Building.name)"
                >
                  {{ t("All") }}
                </VBtn>
              </template>
              <span>{{ t("All") }}</span>
            </VTooltip>
            <VTooltip top v-else>
              <template v-slot:activator="{ props }">
                <v-btn
                  style="margin: 5px"
                  :height="40"
                  :border="true"
                  :color="Building._id === activeBuilding ? 'primary' : ''"
                  v-bind="props"
                  v-on="on"
                  @click="setActiveBuilding(Building._id, Building.name)"
                >
                  {{ Building.name }}
                </v-btn>
              </template>
              <span>{{ Building.name }}</span>
            </VTooltip>
          </VItem>
        </VItemGroup>
      </VCardText>
    </VCard>

    <VCard class="mb-6" :loading="loadingFloors">
      <VCardTitle style="text-align: center">{{ t("Apartments") }}</VCardTitle>
      <VCardText>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="2"
              style="
                border: solid 1px;
                border-radius: 10px;
                text-align: center;
                margin-right: 10px;
              "
            >
              {{ t("Floor number") }}
            </v-col>
            <v-col
              cols="12"
              md="9"
              style="
                border: solid 1px;
                border-radius: 10px;
                text-align: center;
                margin-right: 10px;
              "
            >
              {{ t("Apartment number") }}
            </v-col>
          </v-row>
          <v-row
            v-for="(Floor, index) in Floors"
            :key="index"
            style="align-items: center"
          >
            <v-col cols="12" md="2" style="margin-right: 10px; text-align: center"
              >{{ Floor.apartment_floor_number }}
              <v-icon class="mr-2" size="50" color="primary"
                >mdi-arrow-left-bold-box</v-icon
              ></v-col
            >
            <v-col
              cols="12"
              md="9"
              style="margin-right: 10px; border: solid 1px; margin-block: 10px"
            >
              <v-item-group
                class="d-flex justify-sm-space-between px-6 pt-2 pb-2"
                style="flex-wrap: wrap; justify-content: center !important"
              >
                <v-item v-for="(item, index) in Floor.houses" :key="index">
                  <VTooltip top>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        style="margin: 5px"
                        :style="item.status === 'تم البيع' ? 'color: white' : 'black'"
                        :height="40"
                        @click="goHouse(item)"
                        :color="
                          item.status === 'حجز مبدئي'
                            ? 'rgb(217 217 217)'
                            : item.status === 'محجوز'
                            ? 'rgb(249, 249, 134)'
                            : item.status === 'تم البيع'
                            ? 'rgb(34 208 220)'
                            : item.status === 'غير محجوز'
                            ? 'rgb(255 255 255)'
                            : ''
                        "
                        :width="40"
                        :border="true"
                        v-bind="props"
                        v-on="on"
                      >
                        {{ item.name }}
                      </v-btn>
                    </template>
                    <span
                      >{{ t("Status") }} : {{ item.status }} <br />
                      {{ t("Owner's name") }}: {{ item.current_owner_name }}</span
                    >
                  </VTooltip>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
        </v-container>
      </VCardText>
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
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "Displaying the buildings",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Apartment models",
          disabled: false,
          to: "/admin-show-apartment-models",
        },
        {
          text: "Displaying the buildings",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,

      // data
      name: null,
      form_name: null,
      loadingApartmentTowers: false,
      ApartmentTowers: [],
      loadingBuildings: false,
      Buildings: [],
      activeBuilding: null,
      loadingFloors: false,
      Floors: [],
      // data

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
    this.getApartmentTowers();
  },
  methods: {
    // Get Data
    async getApartmentTowers() {
      try {
        this.loadingApartmentTowers = true;
        const response = await adminApi.getApartmentTowers();
        this.ApartmentTowers = response.data.results;
        this.name = this.ApartmentTowers[0].exact_apartment_building;
        this.getNameFromsApartmentTowers();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingApartmentTowers = false;
      }
    },
    async getNameFromsApartmentTowers() {
      try {
        this.loadingBuildings = true;
        const response = await adminApi.getNameFromsApartmentTowers({
          name: this.name,
        });
        this.Buildings = [];
        this.Buildings.push({
          _id: null,
          name: null,
        });
        this.activeBuilding = null;
        this.form_name = null;
        this.Buildings.push(...response.data.results);
        this.getNameFromsApartmentTowersFloors();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingBuildings = false;
      }
    },
    async getNameFromsApartmentTowersFloors() {
      try {
        this.loadingFloors = true;
        const response = await adminApi.getNameFromsApartmentTowersFloors({
          name: this.name,
          form_name: this.form_name,
        });
        this.Floors = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingFloors = false;
      }
    },
    setActiveBuilding(id, form_name) {
      this.activeBuilding = id;
      this.form_name = form_name;
      this.getNameFromsApartmentTowersFloors();
    },
    // Get Data

    // Go To Page
    goHouse(item) {
      this.$router.push(`/admin-show-profile-floor/${item._id}`);
    },
    // Go To Page

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
