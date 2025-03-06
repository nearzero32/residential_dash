<template>
  <div>
    <v-container id="pri">
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
        <v-container>
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
            أستماراة طلب موافقة
          </h4>
          <div>
            <strong>العدد :</strong>
            <br />
            <strong>التاريخ :</strong>
            <br />
            <br />
            <table border="1" style="width: 100%; border-collapse: collapse">
              <thead>
                <tr>
                  <th style="border: 1px solid black; padding: 8px">أسم الزبون</th>
                  <th style="border: 1px solid black; padding: 8px">النوع</th>
                  <th style="border: 1px solid black; padding: 8px">أسم النموذج</th>
                  <th style="border: 1px solid black; padding: 8px">البلوك</th>
                  <th style="border: 1px solid black; padding: 8px">التصنيف</th>
                  <th style="border: 1px solid black; padding: 8px">رقم الشارع</th>
                  <th style="border: 1px solid black; padding: 8px">رقم المنزل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.customer_name }}
                  </td>
                  <td style="border: 1px solid black; padding: 8px"></td>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.form_name }}
                  </td>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.form_block_number }}
                  </td>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.form_category }}
                  </td>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.form_street_number }}
                  </td>
                  <td style="border: 1px solid black; padding: 8px">
                    {{ data.house_name }}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <strong>الطلب : </strong>
            <br />
            <div style="width: 100%; padding: 15px; border: solid 1px black">
              <br />
              <strong>{{ data.details }}</strong>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div style="text-align: left">
                <strong>توقيع مقدم الطلب</strong>
              </div>
              <br />
            </div>
            <br />
            <br />
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 10px;
              "
            >
              <div style="display: flex; flex-direction: column; align-items: flex-start">
                <strong>أسم موظف المبيعات : </strong>
                <strong>توقيع الأدارة : </strong>
              </div>
              <strong style="margin-left: 100px">موافقة المدير : </strong>
            </div>
          </div>
          <br />

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
import MarinaBaghdad from "@/assets/logo/mar.jpg";
import loam from "@/assets/logo/Screenshot-2024-11-24-113024.png";
import alfakher from "@/assets/logo/alfakher.jpg";
import qaiwan from "@/assets/logo/qaiwan-logo.png";
import karambagdad from "@/assets/logo/q.png";
import alrawan from "@/assets/images/icons/rr.jpg";
import Nahdda from "@/assets/images/icons/logoPrint.png";
import lamassu from "@/assets/images/lamassu.png";
import colors from "@/constant/color.js";

export default {
  data() {
    return {
      lamassu,
      color: colors,
      MarinaBaghdad,
      loam,
      alfakher,
      qaiwan,
      karambagdad,
      alrawan,
      Nahdda,
      data: null,
      user: null,
      dataResidential: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintApprovalRequestForm"));
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 500);
  },
  methods: {
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
