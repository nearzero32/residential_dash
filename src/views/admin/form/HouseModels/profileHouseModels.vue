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
              <strong>مساحة الأرض <br />( {{ data.total_space }} )</strong>
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
          >منازل النموذج</strong
        >
      </VCardTitle>
      <VCardText>
        <VDataTableVirtual
          :headers="headers"
          :items="houses"
          item-value="name"
          height="400"
        >
          <template v-slot:item.is_corner="{ item }">
            <div v-if="item.selectable.is_corner == true">ركن</div>
            <div v-else>ليس ركن</div>
          </template>
          <template v-slot:item.actions="{ item }">
            <VTooltip bottom>
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="primary"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="goHouse(item.selectable)"
                >
                  fa-eye
                </VIcon>
              </template>
              <span>عرض</span>
            </VTooltip>
          </template>
        </VDataTableVirtual>
      </VCardText>
    </VCard>
    <br />
    <VCard>
      <v-container>
        <v-card-title
          class="text-h5"
          style="padding-block: 10px; display: grid; place-items: center"
        >
          <strong
            style="
              color: rgb(145 85 253);
              border-bottom: solid 2px;
              padding-bottom: 9px;
            "
            >الطوابق</strong
          ></v-card-title
        >
        <v-card class="mx-auto" v-for="(floor, ind) in data.floors" :key="ind">
          <h3
            style="display: grid; place-items: center; padding-block: 10px 20px"
          >
            <strong>
              <span style="color: rgb(207 104 73)">{{
                floor.name
              }}</span></strong
            >
          </h3>
          <h3
            style="display: grid; place-items: center; padding-block: 10px 20px"
          >
            <strong>صور الطابق</strong>
          </h3>
          <v-carousel
            :progress="true"
            progress-color="primary"
            hide-delimiters
            style="height: auto !important"
          >
            <v-carousel-item
              v-for="(imgFloor, inde) in floor.images"
              :key="inde"
            >
              <v-sheet height="100%">
                <div class="d-flex fill-height justify-center align-center">
                  <img
                    style="width: 100%"
                    :src="content_url + imgFloor"
                    alt=""
                  />
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <h3
            style="display: grid; place-items: center; padding-block: 10px 20px"
          >
            <strong>محتويات الطابق ( {{ floor.name }} )</strong>
          </h3>
          <v-container>
            <v-row v-for="(room, indR) in floor.rooms" :key="indR">
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
                    style="padding-block: 10px; width: 100px"
                    v-if="room.image"
                    :src="content_url + room.image"
                    alt=""
                  />

                  <p v-else>صورة ( لا توجد صوره )</p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
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
import { VDataTableVirtual } from "vuetify/labs/VDataTable";

export default {
  components: {
    VDataTableVirtual,
  },
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
          text: "House Models",
          disabled: false,
          to: "/admin-show-house-models",
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
      houses: JSON.parse(sessionStorage.getItem("pageData")).houses,
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
    headers() {
      return [
        {
          title: this.t("Residential unit name"),
          type: "strong",
          key: "name",
        },
        {
          title: this.t("Status"),
          type: "strong",
          key: "status",
        },
        {
          title: this.t("Building areas"),
          type: "strong",
          link: ``,
          key: "building_space",
        },
        {
          title: this.t("Land areas"),
          type: "strong",
          link: ``,
          key: "total_space",
        },
        {
          title: this.t("The block"),
          type: "strong",
          link: ``,
          key: "block_number",
        },
        {
          title: this.t("Category"),
          type: "strong",
          link: ``,
          key: "categories",
        },
        {
          title: this.t("Street Number"),
          type: "strong",
          link: ``,
          key: "street_number",
        },
        {
          title: this.t("The type"),
          type: "strong",
          link: ``,
          key: "is_corner",
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
    goHouse(item) {
      localStorage.setItem("profileFloor", JSON.stringify(item));
      this.$router.push(`/admin-profile-house/${this.id}`);
    },
  },
};
</script>
