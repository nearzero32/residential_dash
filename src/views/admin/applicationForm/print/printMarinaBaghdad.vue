<template>
  <div>
    <v-container id="pri" v-if="data !== null">
      <v-card>
        <v-card-title>
          <div>
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
                <img :src="logo2" style="width: 20%" alt="" />
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="logo1" style="width: 11%" alt="" />
              </v-col>
            </v-row>
          </div>
        </v-card-title>
        <v-container>
          <div style="padding: 15px">
            <h2
              style="
                text-align: center;
                font-size: 24px;
                color: #444;
                text-shadow: 1px 1px 2px #fff, -1px -1px 2px #aaa;
              "
            >
              استمارة طلب شراء شقة
            </h2>
            <div style="border: solid 1px black; padding: 10px">
              <h4>
                التاريخ : <strong>{{ data.createdAt }}</strong>
              </h4>
              <h4>
                رقم الاستمارة : <strong>{{ data.application_code }}</strong>
              </h4>
            </div>
            <h4>معلومات المشتري</h4>
            <br />
            <div style="border: solid 1px black; padding: 10px">
              <h4
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                "
              >
                ألاسم الرباعي واللقب :
                <strong>{{ data.buyer_info.customer_name }}</strong>
              </h4>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  رقم الهوية :
                  <strong>
                    {{ data.buyer_info.id_number }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  تاريخ اصدارها :
                  <strong>
                    {{ data.buyer_info.id_issue_date }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  رقم بطاقة السکن :
                  <strong>
                    {{ data.buyer_info.skn_identity }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  تاريخ اصدارها :
                  <strong>
                    {{ data.buyer_info.skn_identity_date }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  العنوان السكن / محافظة :
                  <strong>
                    {{ data.buyer_info.address.caller_governorate }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  المدينة :
                  <strong>
                    {{ data.buyer_info.address.street }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  محلة :
                  <strong>
                    {{ data.buyer_info.address.city }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  زقاق :
                  <strong>
                    {{ data.buyer_info.address.state }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  دار :
                  <strong>
                    {{ data.buyer_info.address.house }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  البريد الالكتروني :
                  <strong> {{ data.buyer_info.email }} </strong>
                </h4>
                <h4 style="width: 33%">
                  رقم الهاتف :
                  <strong>
                    {{ data.buyer_info.customer_phone }}
                  </strong>
                </h4>
              </div>
            </div>
            <h4>معلومات الشقة السكنية</h4>
            <br />
            <div style="border: solid 1px black; padding: 10px">
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  مساحة النموذج :
                  <strong>
                    {{ data.house_total_space }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  كود الشقة :
                  <strong>
                    {{ data.form_code }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  رقم البناية :
                  <strong>
                    {{ data.exact_apartment_building }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  رقم الطابق :
                  <strong>
                    {{ data.apartment_floor_number }}
                  </strong>
                </h4>
                <h4 style="width: 33%">
                  رقم الشقة :
                  <strong>
                    {{ data.house_name }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: solid 1px #d3d3d3;
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h4 style="width: 33%">
                  السعر رقمأ :
                  <strong> {{ numberWithComma(data.house_info.price) }} </strong>
                </h4>
                <h4 style="width: 33%">
                  السعر كتابة :
                  <strong>
                    {{ data.house_info.price_written }}
                  </strong>
                </h4>
              </div>
              <div
                style="
                  border-bottom: 1px solid rgb(211, 211, 211);
                  margin-bottom: 7px;
                  padding-bottom: 5px;
                "
              >
                <h4
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  "
                >
                  طريقة الدفع :
                  <v-row>
                    <v-col cols="12" md="12">
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
                </h4>
              </div>
            </div>
            <h4>
              تعهد: اني الموقع ادناه اقر بأني صحة هذه الأستمارة وتفاصيلها لتملك شقة في
              مجمع بغداد مارينا السكني واتعهد بالاتزام بتسديد الدفعة المقدمة من السعر
              الاجمالي للشقة وبقيمة 20% خلال فترة اقصاها 7 ايام من تاريخ اصدار هذه
              الاستمارة وخلاف هذا يعتبر الحجو الشقة ملغي تلقائيا.
            </h4>
            <h4>
              ملاحظة : بعد تسديد مبلغ الدفعة المقدمة يتم الحضور الى مركز المبيعات لتوقيع
              العقد بعد تسليم وصل الدفع.
            </h4>
          </div>
          <br />
          <div
            style="
              border-bottom: solid 1px #d3d3d3;
              margin-bottom: 7px;
              padding-bottom: 5px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <h4 style="width: 33%">
              اسم موظف المبيعات :
              <strong>
                {{ data.employee_name }}
              </strong>
            </h4>
            <h4 style="width: 33%">
              اسم المشتري :
              <strong>
                {{ data.buyer_info.customer_name }}
              </strong>
              <br />
              التوقيع: <br />
              التاريخ:
            </h4>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import logo1 from "@/assets/logo/marB.jpg";
import logo2 from "@/assets/logo/m.jpg";
import adminApi from "@/api/adminApi";

export default {
  data() {
    return {
      logo1,
      logo2,
      data: null,
      id: JSON.parse(localStorage.getItem("printApplicationFormMarinaBaghdad"))._id,
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
        } else if (error.response && error.response.data.error === true) {
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
strong,
p,
td,
div,
span {
  color: black;
}
h4 {
  font-weight: 100;
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
