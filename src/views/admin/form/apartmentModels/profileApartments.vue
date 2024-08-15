<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)} ( ${data.name} )`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <v-row style="justify-content: center">
      <v-col cols="12" md="4" style="padding: 10px">
        <v-card>
          <v-card-text class="pb-0" style="display: grid; place-items: center">
            <h5>
              <strong>أسم النموذج <br />( {{ data.name }} )</strong>
            </h5>
            <img style="width: 70px; margin-block: 12px" :src="domain" alt="" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" style="padding: 10px">
        <v-card>
          <v-card-text class="pb-0" style="display: grid; place-items: center">
            <h5>
              <strong>المساحة الكلية <br />( {{ data.total_space }} )</strong>
            </h5>
            <img style="width: 70px; margin-block: 12px" :src="space" alt="" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" style="padding: 10px">
        <v-card>
          <v-card-text class="pb-0" style="display: grid; place-items: center">
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
          <v-card-text class="pb-0" style="display: grid; place-items: center">
            <h5>
              <strong>اسماء العمارات ( {{ data.apartment_building }} )</strong>
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
          <v-card-text class="pb-0" style="display: grid; place-items: center">
            <h5>
              <strong>البلوك ( {{ data.block_number }} )</strong>
            </h5>
            <img style="width: 70px; margin-block: 12px" :src="street" alt="" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <br />
    <VCard>
      <VCardTitle class="text-h5" style="display: grid; place-items: center">
        <strong
          style="
            color: rgb(145 85 253);
            border-bottom: solid 2px;
            padding-bottom: 9px;
          "
          >صور النموذج</strong
        >
      </VCardTitle>
      <VCardText>
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
      </VCardText>
    </VCard>
    <br />
    <VCard>
      <VCardTitle class="text-h5" style="display: grid; place-items: center">
        <strong
          style="
            color: rgb(145 85 253);
            border-bottom: solid 2px;
            padding-bottom: 9px;
          "
          >تفاصيل مساحات النموذج</strong
        >
      </VCardTitle>
      <VCardText>
        <VCard
          class="mx-auto"
          v-for="(space, ind) in data.spaces"
          :key="ind"
          style="margin-bottom: 15px"
        >
          <VCardText>
            <strong
              >{{ ind + 1 }} - ( المساحة الكلية {{ space.total_space }} - مساحة
              البناء {{ space.building_space }} )</strong
            >
            <VContainer>
              <strong>الوحدات السكنية</strong>
              <div
                v-for="(houses, floor) in groupHousesByFloor(space.houses)"
                :key="floor"
              >
                <h3>الطابق ( {{ floor }} )</h3>
                <v-item-group
                  class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
                  style="
                    flex-wrap: wrap;
                    justify-content: flex-start !important;
                  "
                >
                  <v-item v-for="(item, index) in houses" :key="index">
                    <VTooltip top>
                      <template v-slot:activator="{ props }">
                        <v-btn
                          style="margin: 5px"
                          :style="
                            item.status === 'تم البيع'
                              ? 'color: white'
                              : 'black'
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
                          v-bind="props"
                          v-on="on"
                        >
                          {{ item.name }}
                        </v-btn>
                      </template>
                      <span>
                        الطابق ( {{ item.apartment_floor_number }} )
                        <br />
                        الحالة ( {{ item.status }} )
                      </span>
                    </VTooltip>
                  </v-item>
                </v-item-group>
              </div>
              <strong>المكونات</strong>
              <br />
              <br />
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
            </VContainer>
          </VCardText>
        </VCard>
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
import { useToast } from "vue-toastification";
import space from "@/assets/images/icons/space.png";
import spaceUtilization from "@/assets/images/icons/space-utilization.png";
import domain from "@/assets/images/icons/domain.png";
import location from "@/assets/images/icons/location.png";
import street from "@/assets/images/icons/street.png";
import data_classification from "@/assets/images/icons/data_classification.png";
import skyscraper from "@/assets/images/icons/skyscraper.png";

export default {
  setup() {
    const { t } = useI18n();
    const toast = useToast();

    return {
      toast,
      t,
      // nav
      page: {
        title: "Form details",
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
          text: "Form details",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      data: JSON.parse(sessionStorage.getItem("pageData")),
      loading: false,
      space,
      spaceUtilization,
      skyscraper,
      domain,
      street,
      location,
      data_classification,
      id: JSON.parse(sessionStorage.getItem("pageData"))._id,

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
    this.getHouse();
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
        const response = await adminApi.getApartment(this.id);

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
    goHouse(item) {
      localStorage.setItem("profileFloor", JSON.stringify(item));
      this.$router.push(`/admin-show-profile-floor`);
    },
  },
};
</script>
