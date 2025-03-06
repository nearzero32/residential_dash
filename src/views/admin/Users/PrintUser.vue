<template>
  <div>
    <v-container id="pri">
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
        <v-container style="height: 100%">
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
            المستخدم {{ data.name }}
          </h4>
          <br />
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <v-col cols="6" md="6">
              <div>
                <p>أسم المستخدم : {{ data.name }}</p>
                <br />
                <p>رقم الهاتف : {{ data.phone }}</p>
                <br />
                <p>العنوان : {{ data.address }}</p>
                <br />
                <p>العنوان الوظيفي : {{ data.title_jop }}</p>
                <br />
                <p>الراتب: {{ data.salary }}</p>
              </div>
            </v-col>
            <v-col cols="6" md="6" style="text-align: center">
              <p>يمكنك تحميل التطبيق</p>
              <img
                style="width: 120px"
                :src="dataResidential.content_url + dataResidential.center_id.qr"
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
import lamassu from "@/assets/images/lamassu.jpg";
import colors from "@/constant/color.js";
import MarinaBaghdad from "@/assets/logo/mar.jpg";
import loam from "@/assets/logo/Screenshot-2024-11-24-113024.png";
import alfakher from "@/assets/logo/alfakher.jpg";
import qaiwan from "@/assets/logo/qaiwan-logo.png";
import karambagdad from "@/assets/logo/q.png";
import alrawan from "@/assets/images/icons/rr.jpg";
import Nahdda from "@/assets/images/icons/logoPrint.png";

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
    this.data = JSON.parse(localStorage.getItem("PrintUser"));
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
