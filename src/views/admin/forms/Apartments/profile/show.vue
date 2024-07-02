<template>
  <div>
    <div class="text-center" v-if="loading == true">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container fluid class="down-top-padding" v-else>
      <v-card class="mx-auto">
        <v-container>
          <v-card-title
            class="text-h5"
            style="padding-block: 10px; display: grid; place-items: center"
            ><strong>نموذج ( {{ data.name }} )</strong></v-card-title
          >
          <v-divider></v-divider>
          <v-row style="justify-content: center">
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text
                  class="pb-0"
                  style="display: grid; place-items: center"
                >
                  <h5>
                    <strong>أسم النموذج <br />( {{ data.name }} )</strong>
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="domain"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text
                  class="pb-0"
                  style="display: grid; place-items: center"
                >
                  <h5>
                    <strong
                      >مساحة الأرض <br />( {{ data.total_space }} )</strong
                    >
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="space"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text
                  class="pb-0"
                  style="display: grid; place-items: center"
                >
                  <h5>
                    <strong
                      >مساحات البناء <br />
                      ( {{ data.building_space }} )</strong
                    >
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="spaceUtilization"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text
                  class="pb-0"
                  style="display: grid; place-items: center"
                >
                  <h5>
                    <strong
                      >اسماء العمارات ( {{ data.apartment_building }} )</strong
                    >
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="skyscraper"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text
                  class="pb-0"
                  style="display: grid; place-items: center"
                >
                  <h5>
                    <strong>البلوك ( {{ data.block_number }} )</strong>
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="street"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-card-title
            class="text-h5"
            style="padding: 10px; display: grid; place-items: center"
          >
            <strong
              style="
                color: #fb9778;
                border-bottom: solid 2px;
                padding-bottom: 9px;
              "
              >صور النموذج</strong
            ></v-card-title
          >
          <v-carousel
            :progress="true"
            progress-color="primary"
            hide-delimiters
            style="height: auto !important"
          >
            <v-carousel-item v-for="(slide, i) in data.images" :key="i">
              <v-sheet height="100%">
                <div class="d-flex fill-height justify-center align-center">
                  <img style="width: 100%" :src="content_url + slide" alt="" />
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-container>
        <v-container>
          <v-card-title
            class="text-h5"
            style="display: grid; place-items: center"
          >
            <strong
              style="
                color: #fb9778;
                border-bottom: solid 2px;
                padding-bottom: 9px;
              "
              >تفاصيل مساحات النموذج</strong
            ></v-card-title
          >
          <v-card
            class="mx-auto"
            v-for="(space, ind) in data.spaces"
            :key="ind"
            style="margin-bottom: 15px"
          >
            <v-card-text>
              <strong
                >{{ ind + 1 }} - ( مساحة الأرض {{ space.total_space }} -
                مساحة البناء {{ space.building_space }} )</strong
              >
              <v-container>
                <strong>الوحدات السكنية</strong>
                <div
                  v-for="(houses, floor) in groupHousesByFloor(space.houses)"
                  :key="floor"
                >
                  <h3>الطابق  ( {{ floor }} )</h3>
                  <v-item-group
                    class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
                    style="
                      flex-wrap: wrap;
                      justify-content: flex-start !important;
                    "
                  >
                    <v-item v-for="(item, index) in houses" :key="index">
                      <VTooltip top>
                        <template #activator="{ on, attrs }">
                          <v-btn
                            style="margin: 5px"
                            :style="
                              item.status === 'تم البيع'
                                ? 'color: white'
                                : 'black'
                            "
                            :height="40"
                            @click="goHouse(item._id, item.name)"
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
                        <span
                          > الطابق ( {{ item.apartment_floor_number }} )
                          <br />
                          الحالة ( {{ item.status }} )
                        </span>
                      </VTooltip>
                    </v-item>
                  </v-item-group>
                </div>
                <strong>المكونات</strong>
                <v-row v-for="(room, indR) in space.rooms" :key="indR">
                  <v-col cols="12" md="4" style="padding: 10px">
                    <v-card
                      class="mx-auto"
                      style="height: 100%; display: grid; place-items: center"
                      >{{ room.name }}</v-card
                    >
                  </v-col>
                  <v-col cols="12" md="4" style="padding: 10px">
                    <v-card
                      class="mx-auto"
                      style="height: 100%; display: grid; place-items: center"
                      >مساحة {{ room.space }}</v-card
                    >
                  </v-col>
                  <v-col cols="12" md="4" style="padding: 10px">
                    <v-card
                      class="mx-auto"
                      style="height: 100%; display: grid; place-items: center"
                    >
                      <img
                        style="padding-block: 0px; width: 100px"
                        v-if="room.image"
                        :src="content_url + room.image"
                        alt=""
                      />
                      <p v-else>صورة ( لا توجد صوره )</p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import space from "@/assets/images/icons/space.png";
import spaceUtilization from "@/assets/images/icons/space-utilization.png";
import domain from "@/assets/images/icons/domain.png";
import location from "@/assets/images/icons/location.png";
import street from "@/assets/images/icons/street.png";
import data_classification from "@/assets/images/icons/data_classification.png";
import skyscraper from "@/assets/images/icons/skyscraper.png";
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      data: null,
      id: null,
      loading: false,
      space,
      spaceUtilization,
      skyscraper,
      domain,
      street,
      location,
      data_classification,
      content_url: "",
    };
  },
  created() {
    const itemForm = localStorage.getItem("itemForm");
    const user = JSON.parse(localStorage.getItem("user"));
    this.content_url = user.content_url;

    if (itemForm) {
      const itemFormData = JSON.parse(itemForm);
      this.id = itemFormData._id;
      this.getHouse();
    }
  },
  methods: {
    groupHousesByFloor(houses) {
      return houses.reduce((acc, house) => {
        const floor = house.apartment_floor_number;
        if (!acc[floor]) {
          acc[floor] = [];
        }
        acc[floor].push(house);
        return acc;
      }, {});
    },

    async getHouse() {
      this.loading = true;
      try {
        const response = await API.getApartment(this.id);

        this.data = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    goHouse(id, name) {
      this.$router.push(`/admin-profileHouse/${id}/${name}`);
    },
  },
};
</script>
