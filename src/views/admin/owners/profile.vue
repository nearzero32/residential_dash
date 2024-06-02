<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4" v-if="data">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="12" md="6">
                <div>
                  <strong>أسم المالك : {{ data.name }}</strong>
                  <br />
                  <strong>رقم الهاتف : {{ data.phone }}</strong>
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
                  <div v-else>لا توجد صورة شخصية</div>
                </div>
              </v-col>
            </v-row>
          </v-card-title>
          <hr />
          <v-card-text
            style="display: flex; flex-direction: column; align-items: flex-start"
          >
            <strong>تفاصيل المالك :</strong>
            <br />
            <strong>البريد الألكتروني : {{ data.email }}</strong>
            <br />
            <strong>العنوان : {{ data.address }}</strong>
            <br />
            <strong>كلمة المرور : {{ data.password_show }}</strong>
            <br />
            <div style="width: 100%;">
              <h2><strong>صور العقد :</strong></h2>
              <v-row v-if="data.contract_imgs">
                <v-col
                  cols="12"
                  md="3"
                  v-for="(img, index) in data.contract_imgs"
                  :key="index"
                >
                  <img
                    :src="content_url + img"
                    width="100%"
                    height="150vh"
                    alt="صورة عقد"
                  />
                </v-col>
              </v-row>
              <div v-else>لا يوجد</div>
            </div>
            <br />
            <div style="width: 100%;">
              <h2><strong>صور الهوية :</strong></h2>
              <v-row >
                <v-col cols="12" md="3">
                  <img
                  v-if="data.id_img_front"
                    :src="content_url + data.id_img_front"
                    width="100%"
                    height="150vh"
                    alt="صورة الهوية"
                  />
                  <div v-else>لا يوجد</div>

                </v-col>
                <v-col cols="12" md="3">
                  <img
                  v-if="data.id_img_back"
                    :src="content_url + data.id_img_back"
                    width="100%"
                    height="150vh"
                    alt="صورة الهوية"
                  />
                  <div v-else>لا يوجد</div>

                </v-col>
              </v-row>

            </div>
            <br />
            <div style="width: 100%;">
              <h2><strong>صور بطاقة السكن :</strong></h2>
              <v-row>
                <v-col cols="12" md="3">
                  <img
                  v-if="data.location_img_front"
                    :src="content_url + data.location_img_front"
                    width="100%"
                    height="150vh"
                    alt="صور بطاقة السكن"
                  />
                  <div v-else>لا يوجد</div>

                </v-col>
                <v-col cols="12" md="3">
                  <img
                  v-if="data.location_img_back"
                    :src="content_url + data.location_img_back"
                    width="100%"
                    height="150vh"
                    alt="صور بطاقة السكن"
                  />
                  <div v-else>لا يوجد</div>

                </v-col>
              </v-row>

            </div>
            <br />
            <div style="width: 100%;">

            <div v-if="data.passport_img">
              <h2><strong>صورة الجواز :</strong></h2>
              <v-row v-if="data.passport_img !== null">
                <v-col cols="12" md="3">
                  <img
                    :src="content_url + data.passport_img"
                    width="100%"
                    height="150vh"
                    alt="صورة الجواز"
                  />
                </v-col>
              </v-row>
              <div v-else>لا يوجد</div>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: "الملاك",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الملاك",
          disabled: false,
          to: "/admin-owners",
        },
        {
          text: "الملاك",
          disabled: true,
        },
      ],
      // nav
      id: this.$route.params.id,
      data: null,
      content_url: null,
      loading: null,
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await API.getOneOwner(this.id);
        this.data = response.data.results;
        this.breadcrumbs[2].text = response.data.results.name;
        this.content_url = response.data.content_url;
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
#ImgO {
  text-align: end;
}
strong {
    color: black;
}

@media only screen and (max-width: 600px) {
  #ImgO {
    text-align: start;
  }
}
</style>
