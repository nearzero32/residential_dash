<template>
  <div>
    <v-container fluid class="down-top-padding">
      <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
      ></BaseBreadcrumb>
      <v-card :loading="loading" v-if="data !== null">
        <v-container fluid class="down-top-padding">
          <p v-if="data && data.name">رقم الوحدة السكنية : {{ data.name }}</p>
          <p v-if="data && data.status">حالة الوحدة السكنية : {{ data.status }}</p>
          <p v-if="data && data.owners">المالك الحالي : {{ data.owners.name }}</p>
          <p v-if="data && data.owners">رقم هاتف المالك الحالي : {{ data.owners.phone }}</p>
          <p v-if="data && data.current_owner">تاريخ الشراء : {{ data.current_owner.date }}</p>
          <p>الملاك السابقين :
          <ul
            style="list-style-type: disclosure-closed; margin-right: 65px"
            v-if="data.previous_owners_data.length > 0"
          >
            <li v-for="(item, i) in data.previous_owners_data" :key="i">
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
          <span v-else>لا يوحد</span>
          </p>
          <p>الحالات السابقة :</p>
          <ul style="list-style-type: disclosure-closed; margin-right: 65px" v-if="data.previous_status.length > 0">
            <li v-for="(ite, i) in data.previous_status" :key="i">
              <p>{{ ite }}</p>
            </li>
          </ul>
          <v-container>
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
              <strong>محتويات الوحدة السكنية</strong>
            </h3>
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
                    <img style="padding-block: 10px;width: 100px" v-if="room.image" :src="content_url + room.image" alt="" />
                    
                    <p v-else>صورة  ( لا توجد صوره ) </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
        </v-container>
      </v-card>
    </v-container>
    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->
  </div>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: "المنزل",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "النماذج",
          disabled: false,
          to: "/admin-forms",
        },
        {
          text: this.$route.params.name,
          disabled: true,
        },
      ],
      // nav

      form_id: this.$route.params.form_id,
      house_id: this.$route.params.house_id,
      loading: false,
      data: null,
      content_url: null,

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
  methods: {
    async getCenter() {
      try {
        this.loading = true;
        const response = await API.getProfileHouse({
          form_id: this.form_id,
          house_id: this.house_id,
        });
        this.content_url = response.data.content_url;
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
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>
