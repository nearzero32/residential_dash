<template>
  <div>
    <v-container id="pri" v-if="data !== null">
      <v-card>
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
                  style="width: 60px"
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
                <img :src="lamassu" style="width: 60px" alt="" />
              </v-col>
            </v-row>
          </div>
        </v-card-title>
        <hr style="border-color: #163d68" />
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
            <v-col cols="6" md="6" style="text-align: left"> .No </v-col>
          </v-row>
        </v-container>
        <v-container>
          <h4
            :style="`
              text-align: center;
              padding: 7px 0px;
              border-radius: 10px;
              color: ${color.color};
              background: ${color.background};
            `"
          >
            استمارة حجز وحدة سكنية في مجمع لاماسو السكني
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="8" md="8">
              الإسم الرباعي:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 10px;
                  border-radius: 5px;
                "
                >{{ data.buyer_info.customer_name }}</span
              ></v-col
            >
            <v-col cols="4" md="4">
              تاريخ الميلاد:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 70px;
                  border-radius: 5px;
                "
              ></span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="4">
              رقم الهوية:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 30px;
                  border-radius: 5px;
                "
                >{{ data.buyer_info.id_number }}</span
              ></v-col
            >
            <v-col cols="8" md="8">
              رقم وتاريخ بطاقة السكن:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 130px;
                  border-radius: 5px;
                "
              ></span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="4">
              نوعها:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 70px;
                  border-radius: 5px;
                "
              ></span
            ></v-col>
            <v-col cols="8" md="8">
              المحافظة :
              <span style="border-bottom: none; margin-inline: 10px">{{
                data.buyer_info.address.street
              }}</span
              >المدينة :
              <span style="border-bottom: none; margin-inline: 10px"
                >..............................</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5" md="5">
              مركز الأصدار:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 80px;
                  border-radius: 5px;
                "
              ></span
            ></v-col>
            <v-col cols="7" md="7">
              المحلة :
              <span style="border-bottom: none; margin-inline: 10px">
                {{ data.buyer_info.address.city }} </span
              >الزقاق :
              <span style="border-bottom: none; margin-inline: 10px">{{
                data.buyer_info.address.state
              }}</span
              >الدار :
              <span style="margin-inline: 10px">{{ data.buyer_info.address.house }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              تاريخ الأصدار:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 50px;
                  border-radius: 5px;
                "
                >{{ data.buyer_info.id_issue_date }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              رقم الهاتف :
              <span style="border-bottom: none; margin-inline: 10px">{{
                data.buyer_info.customer_phone
              }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="4">
              الجنسية:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 80px;
                  border-radius: 5px;
                "
              ></span
            ></v-col>
            <v-col cols="8" md="8">
              اسم البديل وعنوانه :
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 130px;
                  border-radius: 5px;
                "
              ></span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              الوظيفة:
              <span
                style="border: solid 1px #163d68; padding-inline: 30%; border-radius: 5px"
                >{{ data.buyer_info.job }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              رقم الهاتف :
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 100px;
                  border-radius: 5px;
                "
              ></span>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <h4
            :style="`
              text-align: center;
              padding: 7px 0px;
              border-radius: 10px;
              color: ${color.color};
              background: ${color.background};
            `"
          >
            تفاصيل الوحدة السكنية
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="4" md="4">
              البرج:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 20px;
                  border-radius: 5px;
                "
                >{{ data.exact_apartment_building }}</span
              ></v-col
            >
            <v-col cols="4" md="4">
              الطابق:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 50px;
                  border-radius: 5px;
                "
                >{{ data.apartment_floor_number }}</span
              >
            </v-col>
            <v-col cols="4" md="4">
              الشقة:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 20px;
                  border-radius: 5px;
                "
                >{{ data.house_name }}</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              المساحة الكلية:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 30px;
                  border-radius: 5px;
                "
                >{{ data.house_total_space }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              المساحة الصافية:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 30px;
                  border-radius: 5px;
                "
                >{{ data.house_building_space }}</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              تسليم الوحدة السكنية:
              <span
                style="border: solid 1px #163d68; padding-inline: 40%; border-radius: 5px"
              ></span
            ></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              نقداً:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 30px;
                  border-radius: 5px;
                "
                ><v-icon v-if="data.payment_info.payment_type !== 'دفعات'">
                  mdi-check</v-icon
                ></span
              >اقساط:
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 30px;
                  border-radius: 5px;
                "
                ><v-icon v-if="data.payment_info.payment_type == 'دفعات'">
                  mdi-check</v-icon
                ></span
              ></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              المبلغ الكلي للوحدة:
              <span
                style="border: solid 1px #163d68; padding-inline: 29%; border-radius: 5px"
                >{{ numberWithComma(data.house_info.price) }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              الدفعة المقدمة:
              <span
                style="border: solid 1px #163d68; padding-inline: 29%; border-radius: 5px"
                >{{ numberWithComma(data.payment_info.first_payment) }}</span
              ></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="4" md="4">
              اسم المصرف:
              <span
                style="border: solid 1px #163d68; padding-inline: 30%; border-radius: 5px"
              ></span
            ></v-col>
            <v-col cols="4" md="4">
              اسم الحساب:
              <span
                style="border: solid 1px #163d68; padding-inline: 30%; border-radius: 5px"
              ></span
            ></v-col>
            <v-col cols="4" md="4">
              رقم الحساب:
              <span
                style="border: solid 1px #163d68; padding-inline: 30%; border-radius: 5px"
              ></span
            ></v-col>
          </v-row>
        </v-container>
        <v-container>
          <h4
            :style="`
              text-align: center;
              padding: 7px 0px;
              border-radius: 10px;
              color: ${color.color};
              background: ${color.background};
            `"
          >
            أقرار وتعهد
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              اني الموقع ادناه اقر بأني قد قرأت جميع بنود هذه الاستمارة وتفاصيلها وبنود
              عقد البيع واتعهد باالألتزام بكافة الشروط واتحمل كافة التبعات القانونية
              والمالية واتعهد بعدم المطالبة باسترجاع مبلغ نسبة شركة بوابة المستقبل للوساطة
              العقارية ولا يعتبر نسبة شركة بوابة المستقبل جزء من قيمة العقار واتعهد بدفع
              الدفعة الاولى للوحدة السكنية خلال مدة اقصاها ( 7 ايام ) من تاريخ هذه
              الاستمارة وبخلافه يسقط حقي بالمطالبة بالوحدة السكنية بدون الرجوع للمحاكم
              المختصة (المبلغ المدفوع غير مسترد)
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 10px 5%;
                  border-radius: 5px;
                "
                >إسم المشتري : {{ data.buyer_info.customer_name }}</span
              ></v-col
            >
            <v-col cols="6" md="6">
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 10px 20%;
                  border-radius: 5px;
                "
                >موظف المبيعات : {{ data.employee_name }}
              </span></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 10px 50%;
                  border-radius: 5px;
                "
                >التوقيع :
              </span></v-col
            >
            <v-col cols="6" md="6">
              <span
                style="
                  border: solid 1px #163d68;
                  padding-inline: 10px 50%;
                  border-radius: 5px;
                "
                >التوقيع :
              </span></v-col
            >
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import logo1 from "@/assets/logo/41412d.png";
import logo2 from "@/assets/logo/qaiwan-logo.png";
import adminApi from "@/api/adminApi";
import lamassu from "@/assets/images/lamassu.png";
import colors from "@/constant/color.js";

export default {
  data() {
    return {
      logo1,
      logo2,
      lamassu,
      color: colors,
      id: JSON.parse(localStorage.getItem("printApplicationFormLamassu"))._id,
      data: null,
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
