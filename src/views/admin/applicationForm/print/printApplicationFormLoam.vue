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
                cols="12"
                md="12"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="logo1" style="width: 15%" alt="" />
              </v-col>
            </v-row>
            <hr style="margin-top: 20px; border-color: rgb(4 4 4)" />
            <v-container>
              <v-row style="justify-content: center">
                <v-col cols="3" md="3">
                  <h4
                    style="
                      text-align: center;
                      color: #ffffff;
                      padding: 7px 10px;
                      border-radius: 10px;
                      background: #827962;
                    "
                  >
                    إستمارة شراء
                  </h4>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card-title>
        <v-container>
          <br />
          <div style="padding: 15px">
            <v-row>
              <v-col cols="12" md="12" style="text-align: center">
                ألاسم الرباعي واللقب :
                <span style="padding-inline: 10px">{{
                  data.buyer_info.customer_name
                }}</span></v-col
              >
              <v-col cols="12" md="12">
                <strong>هویة الاحوال:</strong>
              </v-col>
              <v-col cols="6" md="6">
                رقمــــــــها:
                <span style="padding-inline: 70px">{{ data.buyer_info.id_number }}</span>
              </v-col>
              <v-col cols="6" md="6">
                تـــاریخـــــها :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.id_issue_date
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                رقم بطاقة السکن :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.skn_identity
                }}</span>
              </v-col>
              <v-col cols="12" md="12">
                <table
                  border="1"
                  style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 100px;
                    border-collapse: collapse;
                  "
                >
                  <thead>
                    <tr style="color: #827962">
                      <th>الحالة الاجتماعیة</th>
                      <th>عدد افراد الاسرة</th>
                      <th>المستوى التعلیمي</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
              <v-col cols="12" md="12">
                <table
                  border="1"
                  style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 100px;
                    border-collapse: collapse;
                  "
                >
                  <thead>
                    <tr style="color: #827962">
                      <th>نوع العمل</th>
                      <th>العنوان الوظیفي</th>
                      <th>عنوان العمل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
              <v-col cols="12" md="12">
                <strong>العنوان الکامل:</strong>
              </v-col>
              <v-col cols="6" md="6">
                الدولـــــــة :
                <span style="padding-inline: 70px"></span>
              </v-col>
              <v-col cols="6" md="6">
                المدينة :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.address.street
                }}</span>
              </v-col>
              <v-col
                cols="12"
                md="12"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <div>
                  المحلة :
                  <span style="border-bottom: none; margin-inline: 10px">
                    {{ data.buyer_info.address.city }}
                  </span>
                </div>
                <div>
                  الزقاق :
                  <span style="border-bottom: none; margin-inline: 10px">{{
                    data.buyer_info.address.state
                  }}</span>
                </div>
                <div>
                  الدار :
                  <span style="margin-inline: 10px">{{
                    data.buyer_info.address.house
                  }}</span>
                </div>
              </v-col>
              <v-col cols="6" md="6">
                رقم الهاتف 1 :
                <span style="padding-inline: 70px">{{
                  data.buyer_info.customer_phone
                }}</span>
              </v-col>
              <v-col cols="6" md="6">
                رقم الهاتف 2 :
                <span style="padding-inline: 70px"></span>
              </v-col>
              <v-col cols="12" md="12">
                البريد الالكتروني :
                <span style="padding-inline: 145px"></span>
              </v-col>
            </v-row>
          </div>
          <br />
          <strong>شخص بدیل للإتصال:</strong>
          <br />
          <div style="padding: 15px">
            <v-row>
              <v-col cols="12" md="12">
                <table
                  border="1"
                  style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 100px;
                    border-collapse: collapse;
                  "
                >
                  <thead>
                    <tr style="color: #827962">
                      <th>نوع العمل</th>
                      <th>عنوان السکن</th>
                      <th>رقم الهاتف</th>
                      <th>صلة القرابة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
              <v-col cols="12" md="12">
                <table
                  border="1"
                  style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 100px;
                    border-collapse: collapse;
                  "
                >
                  <thead>
                    <tr style="color: #827962">
                      <th>اسم البنایة</th>
                      <th>رقم الطابق</th>
                      <th>رقم الشقة</th>
                      <th>المساحة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import logo1 from "@/assets/logo/loam.png";
import adminApi from "@/api/adminApi";

export default {
  data() {
    return {
      logo1,
      data: null,
      id: JSON.parse(localStorage.getItem("printApplicationFormLoam"))._id,
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
        // setTimeout(() => {
        //   this.printElement();
        // }, 1000);
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
