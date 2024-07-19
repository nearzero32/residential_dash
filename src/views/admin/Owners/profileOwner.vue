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
          <h4>تفاصيل المالك :-</h4>
          <br />
          <h4>البريد الألكتروني : {{ data.email }}</h4>
          <br />
          <h4>العنوان : {{ data.address }}</h4>
          <br />
          <h4>كلمة المرور : {{ data.password_show }}</h4>
          <br />
          <h4>رقم الهوية : {{ data.id_number }}</h4>
          <br />
          <h4>جهة اصدار الهوية : {{ data.id_place_of_issue }}</h4>
          <br />
          <h4>تاريخ اصدار الهوية : {{ data.id_issue_date }}</h4>
          <br />
          <h4>رقم بطاقة السكن : {{ data.residence_card_number }}</h4>
          <br />
          <h4>
            جهة اصدار بطاقة السكن : {{ data.residence_card_place_of_issue }}
          </h4>
          <br />
          <h4>العنوان الوظيفي : {{ data.owner_title_jop }}</h4>
          <br />
          <div style="width: 100%">
            <h2><strong>صور العقد :</strong></h2>
            <v-row v-if="data.contract_imgs" style="margin: 0px">
              <v-col
                cols="12"
                md="3"
                v-for="(img, index) in data.contract_imgs"
                :key="index"
              >
                <img
                  :src="content_url + img"
                  style="width: 40%; height: auto"
                  alt="صورة عقد"
                />
              </v-col>
            </v-row>
            <div v-else>لا يوجد</div>
          </div>
          <br />
          <div style="width: 100%">
            <h2><strong>صور الهوية :</strong></h2>
            <v-row style="margin: 0px">
              <v-col cols="12" md="3">
                <img
                  v-if="data.id_img_front"
                  :src="content_url + data.id_img_front"
                  style="width: 40%; height: auto"
                  alt="صورة الهوية"
                />
                <div v-else>لا يوجد</div>
              </v-col>
              <v-col cols="12" md="3">
                <img
                  v-if="data.id_img_back"
                  :src="content_url + data.id_img_back"
                  style="width: 40%; height: auto"
                  alt="صورة الهوية"
                />
                <div v-else>لا يوجد</div>
              </v-col>
            </v-row>
          </div>
          <br />
          <div style="width: 100%">
            <h2><strong>صور بطاقة السكن :</strong></h2>
            <v-row style="margin: 0px">
              <v-col cols="12" md="3">
                <img
                  v-if="data.location_img_front"
                  :src="content_url + data.location_img_front"
                  style="width: 40%; height: auto"
                  alt="صور بطاقة السكن"
                />
                <div v-else>لا يوجد</div>
              </v-col>
              <v-col cols="12" md="3">
                <img
                  v-if="data.location_img_back"
                  :src="content_url + data.location_img_back"
                  style="width: 40%; height: auto"
                  alt="صور بطاقة السكن"
                />
                <div v-else>لا يوجد</div>
              </v-col>
            </v-row>
          </div>
          <br />
          <div style="width: 100%">
            <div v-if="data.passport_img">
              <h2><strong>صورة الجواز :</strong></h2>
              <v-row v-if="data.passport_img !== null" style="margin: 0px">
                <v-col cols="12" md="3">
                  <img
                    :src="content_url + data.passport_img"
                    style="width: 40%; height: auto"
                    alt="صورة الجواز"
                  />
                </v-col>
              </v-row>
              <div v-else>لا يوجد</div>
            </div>
          </div>

          <div
            v-if="data.another_owner && data.another_owner.name !== null"
            style="width: 100%"
          >
            <hr style="width: 100%" />
            <br />
            <h4>تفاصيل المالك الثاني :-</h4>
            <br />
            <h4>العنوان : {{ data.another_owner.address }}</h4>
            <br />
            <h4>رقم الهوية : {{ data.another_owner.id_number }}</h4>
            <br />
            <h4>
              جهة اصدار الهوية : {{ data.another_owner.id_place_of_issue }}
            </h4>
            <br />
            <h4>تاريخ اصدار الهوية : {{ data.another_owner.id_issue_date }}</h4>
            <br />
            <h4>
              رقم بطاقة السكن : {{ data.another_owner.residence_card_number }}
            </h4>
            <br />
            <h4>
              جهة اصدار بطاقة السكن :
              {{ data.another_owner.residence_card_place_of_issue }}
            </h4>
            <br />
            <h4>العنوان الوظيفي : {{ data.another_owner.owner_title_jop }}</h4>
            <br />
            <div style="width: 100%">
              <h2><strong>صور الهوية :</strong></h2>
              <v-row style="margin: 0px">
                <v-col cols="12" md="3">
                  <img
                    v-if="data.another_owner.id_img_front"
                    :src="content_url + data.another_owner.id_img_front"
                    style="width: 40%; height: auto"
                    alt="صورة الهوية"
                  />
                  <div v-else>لا يوجد</div>
                </v-col>
                <v-col cols="12" md="3">
                  <img
                    v-if="data.another_owner.id_img_back"
                    :src="content_url + data.another_owner.id_img_back"
                    style="width: 40%; height: auto"
                    alt="صورة الهوية"
                  />
                  <div v-else>لا يوجد</div>
                </v-col>
              </v-row>
            </div>
            <br />
            <div style="width: 100%">
              <h2><strong>صور بطاقة السكن :</strong></h2>
              <v-row style="margin: 0px">
                <v-col cols="12" md="3">
                  <img
                    v-if="data.another_owner.location_img_front"
                    :src="content_url + data.another_owner.location_img_front"
                    style="width: 40%; height: auto"
                    alt="صور بطاقة السكن"
                  />
                  <div v-else>لا يوجد</div>
                </v-col>
                <v-col cols="12" md="3">
                  <img
                    v-if="data.another_owner.location_img_back"
                    :src="content_url + data.another_owner.location_img_back"
                    style="width: 40%; height: auto"
                    alt="صور بطاقة السكن"
                  />
                  <div v-else>لا يوجد</div>
                </v-col>
              </v-row>
            </div>
            <br />
            <div style="width: 100%">
              <div v-if="data.another_owner.passport_img">
                <h2><strong>صورة الجواز :</strong></h2>
                <v-row
                  v-if="data.another_owner.passport_img !== null"
                  style="margin: 0px"
                >
                  <v-col cols="12" md="3">
                    <img
                      :src="content_url + data.another_owner.passport_img"
                      style="width: 40%; height: auto"
                      alt="صورة الجواز"
                    />
                  </v-col>
                </v-row>
                <div v-else>لا يوجد</div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
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
        title: "Profile",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Owners",
          disabled: false,
          to: "/admin-show-owners",
        },
        {
          text: "Profile",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      id: JSON.parse(sessionStorage.getItem("pageData"))._id,
      data: JSON.parse(sessionStorage.getItem("pageData")),
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

        const response = await adminApi.getOneOwner(this.id);
        this.data = response.data.results;
        console.log(this.data);
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

@media only screen and (max-width: 600px) {
  #ImgO {
    text-align: start;
  }
}
</style>
