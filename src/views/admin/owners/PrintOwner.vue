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
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
            "
          >
            <!-- <v-col
              cols="3"
              md="3"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
            >
              <p style="font-size: 14px">
                <strong>{{ dataResidential.center_id.name }}</strong>
              </p>
            </v-col>
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: center; white-space: pre-wrap"
            >
              <div
                style="
                  background-color: #ffd147;
                  padding: 10px;
                  border-radius: 10px;
                "
              >
                <strong style="font-size: 14px"
                  >المالك ( {{ data.name }} )</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center">
              <img
                :src="
                  dataResidential.content_url + dataResidential.center_id.logo
                "
                style="width: 80px"
                alt=""
              />
            </v-col> -->
          </v-row>
        </v-card-title>
        <v-container style="padding-block: 0px; height: 100%">
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
                <p style="margin-bottom: 0px">العنوان : {{ data.address }}</p>
                <p style="margin-bottom: 0px">
                  البريد الألكتروني : {{ data.email }}
                </p>
                <p style="margin-bottom: 0px">
                  كلمة المرور : {{ data.password_show }}
                </p>
                <p style="margin-bottom: 0px">
                  رقم الهوية : {{ data.id_number }}
                </p>
                <p style="margin-bottom: 0px">
                  جهة اصدار الهوية : {{ data.id_place_of_issue }}
                </p>
                <p style="margin-bottom: 0px">
                  تاريخ اصدار الهوية : {{ data.id_issue_date }}
                </p>
                <p style="margin-bottom: 0px">
                  رقم بطاقة السكن : {{ data.residence_card_number }}
                </p>
                <p style="margin-bottom: 0px">
                  جهة اصدار بطاقة السكن :
                  {{ data.residence_card_place_of_issue }}
                </p>
                <p style="margin-bottom: 0px">
                  العنوان الوظيفي : {{ data.owner_title_jop }}
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
                <p>
                  جهة اصدار الهوية : {{ data.another_owner.id_place_of_issue }}
                </p>
                <p>
                  تاريخ اصدار الهوية : {{ data.another_owner.id_issue_date }}
                </p>
                <p>
                  رقم بطاقة السكن :
                  {{ data.another_owner.residence_card_number }}
                </p>
                <p>
                  جهة اصدار بطاقة السكن :
                  {{ data.another_owner.residence_card_place_of_issue }}
                </p>
                <p>
                  العنوان الوظيفي : {{ data.another_owner.owner_title_jop }}
                </p>
              </div>
              <hr style="width: 100%" />
            </v-col>
            <v-col cols="12" md="12" style="text-align: center">
              <p style="text-align: right">
                مرحبًا بسكان مجمع الروان،<br />
                يمكنكم الآن تحميل تطبيق مجمع الروان السكني وبدء استخدامه باتباع
                الخطوات التالية: <br />
                ### لتحميل التطبيق: <br />
                - قوموا بتصوير رمز الاستجابة السريعة (QR) المرفق لتحميل
                التطبيق.<br />
                ### لتسجيل الدخول:<br />
                1. بعد تحميل التطبيق وتثبيته، افتح التطبيق.<br />
                2. أدخل البريد الإلكتروني وكلمة المرور الخاصة بوحدتك السكنية
                لتسجيل الدخول.<br />
                *البريد الإلكتروني*<br />
                *كلمة المرور<br />* باتباع هذه الخطوات، يمكنك البدء في استخدام
                تطبيق مجمع الروان السكني بسهولة ويسر. يتمتع التطبيق بالعديد من
                المميزات، منها: <br />
                - *حساب خاص بكل وحدة سكنية:* يتيح لك التطبيق حسابًا شخصيًا لكل
                وحدة سكنية.<br />
                - *معرفة آخر الأخبار داخل المجمع:* متابعة أحدث الأخبار
                والإعلانات.<br />
                - *إشعارات من قبل إدارة المجمع:* تلقي إشعارات دقيقة حول كل ما
                يحدث داخل المجمع.<br />
                - *طلبات الصيانة:* تقديم طلبات صيانة للوحدة السكنية بسهولة.<br />
                - *شحن الخدمات:* شحن الخدمات مثل الغاز والكهرباء مباشرة عبر
                التطبيق.<br />
                - *استلام فواتير الخدمات:* عرض واستلام فواتير الخدمات وفواتير
                الشحن.<br />
                - *الدفع الإلكتروني:* دفع الفواتير الشهرية للخدمات
                إلكترونيًا.<br />
                - *إشعارات تذكيرية:* تلقي إشعارات تذكيرية بموعد الأقساط للوحدات
                السكنية في حال وجود أقساط.<br />
                نأمل أن يسهم التطبيق في تحسين تجربتكم السكنية وتسهيل إدارة
                شؤونكم اليومية.
              </p>
              <img
                style="width: 120px"
                :src="
                  dataResidential.content_url + dataResidential.center_id.qr
                "
                alt=""
              />
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
              cols="6"
              md="6"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
              v-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'"
              ><v-icon size="20"> mdi-phone </v-icon>4646</v-col
            >
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
              v-else
              ><v-icon size="20"> mdi-phone </v-icon
              >{{ dataResidential.center_id.phone }}</v-col
            >
            <v-col
              cols="6"
              md="6"
              v-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'"
              style="padding: 10px; text-align: left; white-space: pre-wrap"
            >
              العراق – السماوة<br /><a href="mailto:info@nahdda.com"
                >info@nahdda.com</a
              ></v-col
            >
            <v-col
              cols="6"
              md="6"
              v-else
              style="padding: 10px; text-align: left; white-space: pre-wrap"
              >{{ dataResidential.center_id.address }}</v-col
            >
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
export default {
  data() {
    return {
      loading: true,
      data: null,
      user: null,
      dataResidential: null,
      id: JSON.parse(localStorage.getItem("PrintOwner"))._id,
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
  }
}
</style>
