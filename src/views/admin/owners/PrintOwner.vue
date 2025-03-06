<template>
  <div>
    <v-container id="pri" v-if="loading == false">
      <v-card
        style="
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <v-card-title>
          <div>
            <v-row
              v-if="color.imgTop !== null"
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="12"
                md="12"
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <img :src="color.imgTop" style="width: 100%" alt="" />
              </v-col>
            </v-row>
            <v-row
              v-else
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="4"
                md="4"
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 80px; margin: 13px 0px"
                  alt=""
                />
              </v-col>
              <v-col
                cols="4"
                md="4"
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <h4>{{ color.name }}</h4>
              </v-col>

              <v-col
                cols="4"
                md="4"
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <img :src="lamassu" style="width: 80px; margin: 13px 0px" alt="" />
              </v-col>
            </v-row>
          </div>
        </v-card-title>
        <v-container style="padding-block: 0px; height: 100%">
          <hr />
          <h4
            :style="`
              text-align: center;
              padding: 7px 0px;
              border-radius: 10px;
              color: ${color.color};
              background: ${color.background};
            `"
          >
            المالك ( {{ data.name }} )
          </h4>
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <v-col cols="12" md="12">
              <div>
                <p style="margin-bottom: 0px">أسم المالك : {{ data.name }}</p>
                <p style="margin-bottom: 0px">رقم الهاتف : {{ data.phone }}</p>

                <p style="margin-bottom: 0px">البريد الألكتروني : {{ data.email }}</p>
                <p style="margin-bottom: 0px">كلمة المرور : {{ data.password_show }}</p>

                <p style="margin-bottom: 0px">
                  كود الوحدة السكنية : {{ data.form_code }}
                </p>
              </div>
              <div
                v-if="data.another_owner && data.another_owner.name !== null"
                style="width: 100%"
              >
                <hr style="width: 100%" />
                <p>تفاصيل المالك الثاني :-</p>
                <p>العنوان : {{ data.another_owner.address }}</p>
                <p>رقم الهوية : {{ data.another_owner.id_number }}</p>
                <p>جهة اصدار الهوية : {{ data.another_owner.id_place_of_issue }}</p>
                <p>تاريخ اصدار الهوية : {{ data.another_owner.id_issue_date }}</p>
                <p>
                  رقم بطاقة السكن :
                  {{ data.another_owner.residence_card_number }}
                </p>
                <p>
                  جهة اصدار بطاقة السكن :
                  {{ data.another_owner.residence_card_place_of_issue }}
                </p>
                <p>العنوان الوظيفي : {{ data.another_owner.owner_title_jop }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <hr style="width: 100%" />
              <p style="margin-bottom: 0px">مرحبًا بسكان {{ color.name }}</p>
              <p style="margin-bottom: 0px">
                يمكنكم الآن تحميل تطبيق {{ color.name }} وبدء استخدامه باتباع الخطوات
                التالية:
              </p>
              <br />
              <p
                :style="`
                  text-align: center;
                  color: ${color.color};
                  background: ${color.background};
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                `"
              >
                لتحميل التطبيق:
              </p>
              <p style="margin-bottom: 0px">
                - الرجاء تصوير رمز الاستجابة السريعة (QR) المرفق لتحميل التطبيق.
              </p>
              <div style="text-align: center; margin-block: 10px">
                <img
                  style="width: 70px"
                  :src="dataResidential.content_url + dataResidential.center_id.qr"
                  alt=""
                />
              </div>
              <p
                :style="`
                  text-align: center;
                  color: ${color.color};
                  background: ${color.background};
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                `"
              >
                لتسجيل الدخول:
              </p>
              <p style="margin-bottom: 0px">
                1. بعد تحميل التطبيق وتثبيته، افتح التطبيق.
              </p>
              <p style="margin-bottom: 0px">البريد الإلكتروني</p>
              <p style="margin-bottom: 0px">كلمة المرور</p>
              <p style="margin-bottom: 0px">
                باتباع هذه الخطوات، يمكنك البدء في استخدام تطبيق {{ color.name }} بسهولة
                ويسر. يتمتع التطبيق بالعديد من المميزات، منها:
              </p>
              <p style="margin-bottom: 0px">
                - *حساب خاص بكل وحدة سكنية:* يتيح لك التطبيق حسابًا شخصيًا لكل وحدة سكنية.
              </p>
              <p style="margin-bottom: 0px">
                - *معرفة آخر الأخبار داخل المجمع:* متابعة أحدث الأخبار والإعلانات.
              </p>
              <p style="margin-bottom: 0px">
                - *طلبات الصيانة:* تقديم طلبات صيانة للوحدة السكنية بسهولة.
              </p>
              <p style="margin-bottom: 0px">
                - *شحن الخدمات:* شحن الخدمات مثل الغاز والكهرباء مباشرة عبر التطبيق.
              </p>
              <p style="margin-bottom: 0px">
                - *استلام فواتير الخدمات:* عرض واستلام فواتير الخدمات وفواتير الشحن.
              </p>
              <p style="margin-bottom: 0px">
                - *الدفع الإلكتروني:* دفع الفواتير الشهرية للخدمات إلكترونيًا.
              </p>
              <p style="margin-bottom: 0px">
                - *إشعارات تذكيرية:* تلقي إشعارات تذكيرية بموعد الأقساط للوحدات السكنية في
                حال وجود أقساط.
              </p>
              <p style="margin-bottom: 0px">
                نأمل أن يسهم التطبيق في تحسين تجربتكم السكنية وتسهيل إدارة شؤونكم اليومية.
              </p>
            </v-col>
          </v-row>
          <br />
        </v-container>
        <v-container>
          <hr />
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <v-col
              cols="12"
              md="12"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
            >
              <p
                :style="`
                  text-align: center;
                  color: ${color.color};
                  background: ${color.background};
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                `"
              >
                في حال وجود اي مشكله بالتطبيق يمكن التواصل على الأرقام التاليه
              </p>
            </v-col>
            <v-col
              cols="6"
              md="6"
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                direction: rtl;
                padding: 10px;
                white-space: pre-wrap;
              "
              ><strong>Lamassu <v-icon size="20"> mdi-phone </v-icon> : </strong
              ><strong><a href="tel:07730199178">964 773 019 9178+</a></strong></v-col
            >
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: left; white-space: pre-wrap"
              ><strong><a href="https://lamassuae.com/">lamassuae.com</a></strong></v-col
            >
          </v-row>
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <v-col
              cols="6"
              md="6"
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                direction: rtl;
                padding: 10px;
                white-space: pre-wrap;
              "
              ><strong
                >{{ color.nameEN }} <v-icon size="20"> mdi-phone </v-icon> : </strong
              ><strong
                ><a href="`tel:${ dataResidential.center_id.phone }`">{{
                  dataResidential.center_id.phone
                }}</a></strong
              ></v-col
            >
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: left; white-space: pre-wrap"
              ><strong
                ><a href="https://lamassuae.com/">{{
                  dataResidential.center_id.address
                }}</a></strong
              ></v-col
            >
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import lamassu from "@/assets/images/lamassu.jpg";
import colors from "@/constant/color.js";

export default {
  data() {
    return {
      lamassu,
      loading: true,
      data: null,
      user: null,
      dataResidential: null,
      id: JSON.parse(localStorage.getItem("PrintOwner"))._id,
      color: colors,
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getOneOwner(this.id);
        this.data = response.data.results;
        setTimeout(() => {
          this.printElement();
        }, 500);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },

    printElement() {
      var printContent = document.getElementById("pri").innerHTML;
      var originalContent = document.body.innerHTML;
      var originalStyle = document.head.innerHTML;

      document.body.innerHTML = printContent;

      window.print();

      document.body.innerHTML = originalContent;
      document.head.innerHTML = originalStyle;

      setTimeout(() => {
        this.printing = false;
      }, 100);
    },
  },
};
</script>

<style>
@media print {
  @media print {
    body {
      direction: rtl;
    }

    #pri v-card-title v-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }

    #pri v-card {
      height: 100vh;
    }
  }
}
</style>
