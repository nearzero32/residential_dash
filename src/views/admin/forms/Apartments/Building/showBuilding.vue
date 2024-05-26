<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <v-card class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-label class="mb-2 font-weight-medium">اسماء العمارات</v-label>
            <v-autocomplete
              dense
              filled
              solo
              v-model="name"
              label="اسماء العمارات"
              :loading="loadingApartmentTowers"
              :items="ApartmentTowers"
              item-text="exact_apartment_building"
              item-value="exact_apartment_building"
              @input="getNameFromsApartmentTowers"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-card class="mx-auto">
          <v-card-title>النماذج</v-card-title>
          <v-spacer></v-spacer>
          <v-item-group
            class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
            style="flex-wrap: wrap; justify-content: flex-start !important"
          >
            <v-item v-for="(Building, index) in Buildings" :key="index">
              <VTooltip top v-if="Building.name == null">
                <template #activator="{ on, attrs }">
                  <v-btn
                    style="margin: 5px"
                    :height="40"
                    :width="40"
                    :color="Building._id === activeBuilding ? 'primary' : ''"
                    :border="true"
                    v-bind="attrs"
                    v-on="on"
                    @click="setActiveBuilding(Building._id, Building.name)"
                  >
                    الكل
                  </v-btn>
                </template>
                <span>الكل</span>
              </VTooltip>
              <VTooltip top v-else>
                <template #activator="{ on, attrs }">
                  <v-btn
                    style="margin: 5px"
                    :height="40"
                    :width="40"
                    :border="true"
                    :color="Building._id === activeBuilding ? 'primary' : ''"
                    v-bind="attrs"
                    v-on="on"
                    @click="setActiveBuilding(Building._id, Building.name)"
                  >
                    {{ Building.name }}
                  </v-btn>
                </template>
                <span>{{ Building.name }}</span>
              </VTooltip>
            </v-item>
          </v-item-group>
        </v-card>
      </v-container>
    </v-card>
    <br />
    <v-card class="mx-auto" :loading="loadingFloors">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="2"
            style="
              background-color: cornsilk;
              text-align: center;
              margin-right: 10px;
            "
            >رقم الطابق</v-col
          >
          <v-col
            cols="12"
            md="9"
            style="
              background-color: cornsilk;
              text-align: center;
              margin-right: 10px;
            "
            >رقم الشقق</v-col
          >
        </v-row>
        <v-row
          v-for="(Floor, index) in Floors"
          :key="index"
          style="align-items: center"
        >
          <v-col cols="12" md="2" style="margin-right: 10px; text-align: center"
            >{{ Floor.apartment_floor_number }}
            <v-icon class="mr-2" size="50" color="#fb9778"
              >mdi-arrow-left-bold-box</v-icon
            ></v-col
          >
          <v-col
            cols="12"
            md="9"
            style="
              margin-right: 10px;
              border: solid 1px #fb9778;
              margin-block: 10px;
            "
          >
            <v-item-group
              class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
              style="flex-wrap: wrap; justify-content: flex-start !important"
            >
              <v-item v-for="(item, index) in Floor.houses" :key="index">
                <VTooltip top>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      style="margin: 5px"
                      :style="
                        item.status === 'تم البيع' ? 'color: white' : 'black'
                      "
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
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ item.name }}
                    </v-btn>
                  </template>
                  <span>{{ item.status }}</span>
                </VTooltip>
              </v-item>
            </v-item-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: "نماذج شقق",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "نماذج شقق",
          disabled: false,
          to: "/admin-forms-Apartments",
        },
        {
          text: "العمارات",
          disabled: true,
        },
      ],
      // nav

      // Apartment
      name: null,
      ApartmentTowers: [],
      loadingApartmentTowers: false,
      // Apartment
      // Buildings
      nameBuildings: null,
      Buildings: [],
      activeBuilding: null,
      headers: [
        {
          text: "#",
          value: "num",
        },
        { text: "الأسم", value: "name" },
        // { text: "العمليات", value: "ac" },
      ],
      loadingBuildings: false,
      // Apartment
      // Floors
      loadingFloors: false,
      Floors: [],
      form_name: null,
      // Apartment
    };
  },
  created() {
    this.getApartmentTowers();
  },
  methods: {
    async getApartmentTowers() {
      try {
        this.loadingApartmentTowers = true;
        const response = await API.getApartmentTowers();
        this.ApartmentTowers = response.data.results;
        this.name = this.ApartmentTowers[0].exact_apartment_building;
        this.getNameFromsApartmentTowers();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingApartmentTowers = false;
      }
    },
    async getNameFromsApartmentTowers() {
      try {
        this.loadingBuildings = true;
        const response = await API.getNameFromsApartmentTowers({
          name: this.name,
        });
        this.Buildings = [];
        this.Buildings.push({
          _id: null,
          name: null,
        });
        this.Buildings.push(...response.data.results);
        this.activeBuilding = null;
        this.getNameFromsApartmentTowersFloors();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingBuildings = false;
      }
    },
    async getNameFromsApartmentTowersFloors() {
      try {
        this.loadingFloors = true;
        const response = await API.getNameFromsApartmentTowersFloors({
          name: this.name,
          form_name: this.form_name,
        });
        this.Floors = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
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
    goHouse(item) {
      localStorage.setItem("profileFloor", JSON.stringify(item));
      this.$router.push(`/admin-profileFloor`);
    },
  },
};
</script>

<style>
</style>