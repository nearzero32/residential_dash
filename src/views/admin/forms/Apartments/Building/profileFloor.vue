<template>
  <div>
    <v-container fluid class="down-top-padding">
      <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
      ></BaseBreadcrumb>
      <v-card>
        <div v-if="data.status == 'تم البيع'">
          <v-btn
            color="primary"
            class="ml-auto"
            v-if="data.status == 'تم البيع'"
            @click="cancelPayingHouse"
          >
            اعادة بيع الوحدة السكنية
          </v-btn>
          <br />
          <br />
          <hr />
          <br />
        </div>
        <v-card-text>
          <strong>رقم الشقة : ( {{ data.name }} )</strong>
          <br />
          <br />
          <strong>اسم العمارة : ( {{ data.exact_apartment_building }} )</strong>
          <br />
          <br />
          <strong>رقم الطابق : ( {{ data.apartment_floor_number }} )</strong>
          <br />
          <br />
          <strong>مساحة الأرض : ( {{ data.total_space }} )</strong>
          <br />
          <br />
          <strong>مساحة البناء : ( {{ data.building_space }} )</strong>
          <br />
          <br />
          <strong>الحالة : ( {{ data.status }} )</strong>
          <br />
          <br />
          <strong v-if="data.previous_status.length > 0"
            >الحالات السابقة :
            <br />
            <br />
            <ul style="list-style-type: disclosure-closed; margin-right: 65px">
              <li v-for="(ite, i) in data.previous_status" :key="i">
                <p>{{ ite }}</p>
              </li>
            </ul>
          </strong>
          <strong v-if="data.previous_owners.length > 0"
            >الملاك السابقين :
            <br />
            <br />
            <ul style="list-style-type: disclosure-closed; margin-right: 65px">
              <li v-for="(item, i) in data.previous_owners" :key="i">
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                  "
                >
                  <p style="margin-left: 83px">الأسم : {{ item.name }}</p>
                  <p>رقم الهاتف : {{ item.phone }}</p>
                </div>
              </li>
            </ul>
          </strong>
          <strong v-if="data.current_owner.date !== null"
            >تاريخ الشراء : {{ data.current_owner.date }}</strong
          >
          <br />
          <br />
          <v-container>
            <strong>مكونات الشقة</strong>
            <v-row v-for="(room, indR) in data.rooms" :key="indR">
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
  </div>
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
          disabled: false,
          to: "/admin-showBuilding",
        },
        {
          text: "نماذج شقق",
          disabled: true,
        },
      ],
      // nav
      data: JSON.parse(localStorage.getItem("profileFloor")),
      content_url: null,
    };
  },
  created() {
    this.breadcrumbs[3].text = this.data.name;
    const user = JSON.parse(localStorage.getItem("user"));
    this.content_url = user.content_url;
  },
  methods: {
    async cancelPayingHouse() {
      try {
        this.loading = true;
        const response = await API.cancelPayingHouse({ id: this.data._id });
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
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
  },
};
</script>

<style>
</style>