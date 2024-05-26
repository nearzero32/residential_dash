<template>
  <div>
    <v-container fluid class="down-top-padding">
      <v-card class="mx-auto">
        <v-container>
          <v-card-title class="text-h5" style="padding-block: 10px;display: grid; place-items: center"
            ><strong>نموذج ( {{ data.name }} )</strong></v-card-title
          >
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text class="pb-0" style="display: grid; place-items: center">
                  <h5 style="text-align: center;">
                    <strong>أسم النموذج <br>( {{ data.name }} )</strong>
                  </h5>
                  <img style="width: 70px; margin-block: 12px" :src="domain" alt="" />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text class="pb-0" style="display: grid; place-items: center">
                  <h5 style="text-align: center;">
                    <strong>المساحات الكلية <br>( {{ data.total_space }} )</strong>
                  </h5>
                  <img style="width: 70px; margin-block: 12px" :src="space" alt="" />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text class="pb-0" style="display: grid; place-items: center">
                  <h5 style="text-align: center;">
                    <strong>مساحات البناء <br>( {{ data.building_space }} )</strong>
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
                  <h5 style="text-align: center;">
                    <strong>التصنيف ( {{ data.category }} )</strong>
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="data_classification"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text class="pb-0" style="display: grid; place-items: center">
                  <h5 style="text-align: center;">
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
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card>
                <v-card-text class="pb-0" style="display: grid; place-items: center">
                  <h5 style="text-align: center;">
                    <strong>رقم الشارع ( {{ data.street_number }} )</strong>
                  </h5>
                  <img
                    style="width: 70px; margin-block: 12px"
                    :src="location"
                    alt=""
                  />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-card-title class="text-h5" style="padding-block: 10px;display: grid; place-items: center">
            <strong style="color: #fb9778; border-bottom: solid 2px; padding-bottom: 9px"
              >صور النموذج</strong
            ></v-card-title
          >
          <v-carousel :progress="true" progress-color="primary" hide-delimiters style="height: auto !important;">
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
          <v-card-title class="text-h5" style="padding-block: 10px;display: grid; place-items: center">
            <strong style="color: #fb9778; border-bottom: solid 2px; padding-bottom: 9px"
              >الطوابق</strong
            ></v-card-title
          >
          <v-card class="mx-auto" v-for="(floor, ind) in data.floors" :key="ind">
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
              <strong
                >
                <span style="color: rgb(207 104 73)">{{ floor.name }}</span></strong
              >
            </h3>
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
              <strong>صور الطابق</strong>
            </h3>
            <v-carousel :progress="true" progress-color="primary" hide-delimiters style="height: auto !important;">
              <v-carousel-item v-for="(imgFloor, inde) in floor.images" :key="inde">
                <v-sheet height="100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <img style="width: 100%" :src="content_url + imgFloor" alt="" />
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
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
                    <img style="padding-block: 10px;width: 100px" v-if="room.image" :src="content_url + room.image" alt="" />
                    
                    <p v-else>صورة  ( لا توجد صوره ) </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
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

export default {
  data() {
    return {
      data: null,
      space,
      spaceUtilization,
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
      this.data = itemFormData;
    }
  },
};
</script>
