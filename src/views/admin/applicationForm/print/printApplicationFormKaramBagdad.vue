<template>
  <div>
    <v-container id="pri" v-if="data !== null">
      <v-card>
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: center; white-space: pre-wrap"
          >
            <img :src="logo1" style="width: 50%" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: center; white-space: pre-wrap"
          >
            <img
              :src="
                dataResidential.content_url + dataResidential.center_id.logo
              "
              style="width: 80px"
              alt=""
            />
          </v-col>
        </v-row>
        <hr style="border-color: rgb(141 96 67)" />
        <v-container>
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
            "
          >
            <v-col cols="6" md="6" style="padding: 10px; text-align: right">
              التاريخ: {{ date }}
            </v-col>
            <v-col cols="6" md="6" style="text-align: left">
              رقــم الاســتمارة :
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <h4
            style="
              text-align: center;
              color: black;
              padding: 7px 0px;
              border-radius: 10px;
              background: linear-gradient(
                190deg,
                rgba(141, 96, 67, 1) 0%,
                rgba(255, 198, 132, 1) 100%
              );
            "
          >
            استمارة شــراء شـــقـــة
          </h4>
        </v-container>
        <v-container>
          <div style="text-align: center">معلومات المشتري</div>
          <br />
          <div style="border: solid 1px; padding: 15px">
            <v-row>
              <v-col cols="12" md="12" style="text-align: center">
                ألاسم الرباعي واللقب :
                <span style="padding-inline: 10px">{{
                  data.buyer_info.customer_name
                }}</span></v-col
              >
              <v-col cols="6" md="6">
                رقم الهوية:
                <span style="padding-inline: 70px">{{
                  data.buyer_info.id_number
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                تاريخ الإصدار :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.id_issue_date
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                رقم بطاقة السكن :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.skn_identity
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                تاريخ الإصدار :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.skn_identity_date
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                عنوان السكن المحافظة :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.caller_governorate
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                المدينة :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.address.street
                }}</span>
              </v-col>
              <v-col cols="12" md="12" style="text-align: center">
                المحلة :
                <span style="border-bottom: none; margin-inline: 10px">
                  {{ data.buyer_info.address.city }} </span
                >الزقاق :
                <span style="border-bottom: none; margin-inline: 10px">{{
                  data.buyer_info.address.state
                }}</span
                >الدار :
                <span style="margin-inline: 10px">{{
                  data.buyer_info.address.house
                }}</span>
              </v-col>
              <v-col cols="12" md="12">
                رقم الهاتف :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.customer_phone
                }}</span>
              </v-col>
              <v-col cols="12" md="12">
                البريد الالكتروني :
                <span style="padding-inline: 145px"></span>
              </v-col>
            </v-row>
          </div>
          <br />
          <div style="text-align: center">تــفاصــيــل الشقـــة السكنــية</div>
          <br />
          <div style="border: solid 1px; padding: 15px">
            <v-row>
              <v-col cols="3" md="3">
                المســاحة :
                <span style="padding-inline: 10px">{{
                  data.house_total_space
                }}</span></v-col
              >
              <v-col cols="3" md="3">
                رقــم البناية :
                <span style="padding-inline: 10px">{{
                  data.exact_apartment_building
                }}</span></v-col
              >
              <v-col cols="3" md="3">
                رقم الطابق :
                <span style="padding-inline: 10px">{{
                  data.apartment_floor_number
                }}</span></v-col
              >
              <v-col cols="3" md="3">
                رقم الشقة :
                <span style="padding-inline: 10px">{{
                  data.house_name
                }}</span></v-col
              >
              <v-col cols="4" md="4">
                ســعـر المتــر :
                <span style="padding-inline: 10px"></span
              ></v-col>
              <v-col cols="4" md="4">
                الســعر رقمأ :
                <span style="padding-inline: 10px"></span
              ></v-col>
              <v-col cols="4" md="4">
                السعــر كتــابــة :
                <span style="padding-inline: 10px"></span
              ></v-col>
              <v-col cols="12" md="12">
                طريـــقة الـــدفـــع <br /><br />
                نقداً:
                <span
                  style="
                    border: solid 1px rgb(141 96 67);
                    padding-inline: 30px;
                    border-radius: 5px;
                  "
                  ><v-icon v-if="data.payment_info.payment_type !== 'دفعات'">
                    mdi-check</v-icon
                  ></span
                >اقساط:
                <span
                  style="
                    border: solid 1px rgb(141 96 67);
                    padding-inline: 30px;
                    border-radius: 5px;
                  "
                  ><v-icon v-if="data.payment_info.payment_type == 'دفعات'">
                    mdi-check</v-icon
                  ></span
                ></v-col
              >
            </v-row>
          </div>
        </v-container>
        <v-container>
          <h4
            style="
              text-align: center;
              color: black;
              padding: 7px 0px;
              border-radius: 10px;
              background: linear-gradient(
                190deg,
                rgba(141, 96, 67, 1) 0%,
                rgba(255, 198, 132, 1) 100%
              );
            "
          >
            أقرار وتعهد
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              أني الموقع ادناه أقر بأني قرأت جميع بنود هذه الاستمارة وتفاصيلها
              وبنود عقد بيع لتملك شقة من مجمع كرم بغداد السكني واتعهد بالالتزام
              بكافة الشروط واتحمل كافة الشروط والتبعات المالية والقانونية
              <br />
              <strong> ملاحظة : الدفع حسب تعليمات البنك المركزي. </strong>
              <br />
              <strong>
                ملاحظة : تكون بداية دفع الاقساط بعد مرور شهر من تاريخ الدفعة
                المقدمة
              </strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              أسم موظـف المبيــعات :<span style="padding-inline: 10px 5%">
                {{ data.employee_name }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              إسم المشتري :<span style="padding-inline: 10px 5%">
                {{ data.buyer_info.customer_name }}</span
              ></v-col
            >
          </v-row>
          <v-row style="justify-content: flex-end">
            <v-col cols="6" md="6">
              التوقيع : <span style="padding-inline: 10px 50%"> </span
            ></v-col>
          </v-row>
          <v-row style="justify-content: flex-end">
            <v-col cols="6" md="6">
              التــاريــــخ : <span style="padding-inline: 10px 50%"></span
            ></v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import logo1 from "@/assets/logo/q.png";
import adminApi from "@/api/adminApi";

export default {
  data() {
    return {
      logo1,
      data: null,
      id: JSON.parse(localStorage.getItem("printApplicationFormKaramBagdad"))
        ._id,
      user: null,
      dataResidential: null,
      date: getCurrentDateInString(),
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await adminApi.getOneApplicationForm(this.id);

        this.data = response.data.results;
        setTimeout(() => {
          this.printElement();
        }, 1000);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
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
    numberWithComma,
  },
};
</script>

<style>
#pri span {
  border-bottom: dashed 1px;
  margin-left: 60px;
}
@media print {
  @media print {
    body {
      direction: rtl;
    }
    .v-application p {
      margin-bottom: 5px;
    }
    #pri span {
      border-bottom: dashed 1px;
      margin-left: 60px;
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
