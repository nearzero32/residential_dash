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
            cols="3"
            md="3"
            style="padding: 10px; text-align: center; white-space: pre-wrap"
          >
            <img :src="logo1" style="width: 60px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: center; white-space: pre-wrap"
          >
            مجمع ابراج العبسلي<br />
            Abasly Towers Compound
          </v-col>
          <v-col cols="3" md="3" style="text-align: center">
            <img
              :src="
                dataResidential.content_url + dataResidential.center_id.logo
              "
              style="width: 60px"
              alt=""
            />
          </v-col>
        </v-row>
        <hr style="border-color: rgb(55 88 34)" />
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
            style="
              text-align: center;
              background-color: rgb(55 88 34);
              color: white;
              padding: 7px 0px;
              border-radius: 0px 0px 0px 15px;
            "
          >
            استمارة شراء وحدة سكنية - Apartment Sales Agreement
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 22%;
                  "
                >
                  الإسم الرباعي :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                  "
                  >{{ data.buyer_info.customer_name }}</span
                >
              </div>
            </v-col>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 25%;
                  "
                >
                  رقم الهوية :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                  "
                  >{{ data.buyer_info.id_number }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 30%;
                  "
                >
                  نوعها :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 26%;
                  "
                >
                  مركز الاصدار :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 45%;
                  "
                >
                  تاريخ الميلاد :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 28%;
                  "
                >
                  تاريخ الاصدار :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.id_issue_date }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 40%;
                  "
                >
                  الوظيفة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.job }}</span
                >
              </div>
            </v-col>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 28%;
                  "
                >
                  رقم الهاتف :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.customer_phone }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 44%;
                  "
                >
                  رقم البديل :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 30%;
                  "
                >
                  اسم البديل وعنوانه :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                  "
                  >{{ data.buyer_info.customer_name }}</span
                >
              </div>
            </v-col>
          </v-row>
          <h2 style="color: #ffc107; text-align: center; padding-block: 15px">
            عنوان السكن - Address
          </h2>
          <v-row>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 23%;
                  "
                >
                  المحافظة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.address.street }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 40%;
                  "
                >
                  المدينة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="8" md="8" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 40%;
                  "
                >
                  رقم بطاقة السكن:
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 35%;
                  "
                >
                  التاريخ :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 30%;
                  "
                >
                  محلة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.address.city }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-inline: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 30%;
                  "
                >
                  زقاق :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.address.state }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px 13px;
                    width: 30%;
                  "
                >
                  دار :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.buyer_info.address.house }}</span
                >
              </div>
            </v-col>
          </v-row>
          <hr
            style="
              margin-inline: 10%;
              margin-top: 15px;
              border-color: rgb(55 88 34);
            "
          />
        </v-container>
        <v-container>
          <h4
            style="
              text-align: center;
              background-color: rgb(55 88 34);
              color: white;
              padding: 7px 0px;
              border-radius: 10px;
            "
          >
            تفاصيل الوحدة السكنية
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="3" md="3" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 45%;
                  "
                >
                  البناء :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.exact_apartment_building }}
                </span>
              </div>
            </v-col>
            <v-col cols="3" md="3" style="padding-inline: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 60%;
                  "
                >
                  الطابق :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.apartment_floor_number }}</span
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="padding-inline: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 100%;
                  "
                >
                  رقم الشقة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 50%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.house_name }}</span
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 70%;
                  "
                >
                  نوع الشقة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 40%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px;
                    width: 50%;
                  "
                >
                  المساحة :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.house_total_space }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-inline: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px 4px;
                    width: 70%;
                  "
                >
                  المساحة الصافية :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 30%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                  >{{ data.house_building_space }}</span
                >
              </div>
            </v-col>
            <v-col cols="4" md="4" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px 4px;
                    width: 55%;
                  "
                >
                  موعد التسليم :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="6" md="6" style="padding-left: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px 4px;
                    width: 55%;
                  "
                >
                  سعر المتر :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 100%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
            <v-col cols="6" md="6" style="padding-right: 0px">
              <div
                style="display: flex; align-items: center; flex-direction: row"
              >
                <p
                  style="
                    margin: 0px;
                    background-color: #375822;
                    color: white;
                    padding: 4px 4px;
                    width: 55%;
                  "
                >
                  السعر الاجمالي :
                </p>
                <span
                  style="
                    border: 1px solid rgb(55, 88, 34);
                    padding-inline: 10px;
                    width: 58%;
                    padding-block: 3px;
                    margin-left: 0px;
                    height: 32px;
                  "
                ></span>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <h4
            style="
              text-align: center;
              background-color: rgb(55 88 34);
              color: white;
              padding: 7px 0px;
              border-radius: 10px;
            "
          >
            أقرار وتعهد
          </h4>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              اني الموقع ادناه اقر بأني قد قرأت جميع بنود هذه الاستمارة
              وتفاصيلها وبنود عقد البيع واتعهد باالألتزام بكافة الشروط واتحمل
              كافة التبعات القانونية والمالية واتعهد بعدم المطالبة باسترجاع مبلغ
              نسبة شركة بوابة المستقبل للوساطة العقارية ولا يعتبر نسبة شركة
              بوابة المستقبل جزء من قيمة العقار واتعهد بدفع الدفعة الاولى للوحدة
              السكنية خلال مدة اقصاها ( 7 ايام ) من تاريخ هذه الاستمارة وبخلافه
              يسقط حقي بالمطالبة بالوحدة السكنية بدون الرجوع للمحاكم المختصة
              (المبلغ المدفوع غير مسترد)
            </v-col>
            <v-col cols="6" md="6">
              اسم وتوقيع المشتري : {{ data.buyer_info.customer_name }}</v-col
            >
            <v-col cols="6" md="6"
              >موظف المبيعات : {{ data.employee_name }}</v-col
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

export default {
  data() {
    return {
      logo1,
      logo2,
      data: null,
      id: JSON.parse(localStorage.getItem("printApplicationFormAbasly"))._id,
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
