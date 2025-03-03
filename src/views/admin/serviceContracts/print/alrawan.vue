<template>
  <div>
    <v-container id="pri">
      <v-card class="gdd">
        <v-container style="text-align: center; padding: 0px 0px">
          <img :src="ba" style="width: 100%" alt="" />
        </v-container>

        <v-container style="height: 100%">
          <div>
            <h3>العدد:</h3>
            <h3>التاريخ:</h3>

            <h3 style="font-weight: 900; text-align: center">عقد خدمات</h3>
            <br />
            <h4 style="text-align: right">
              ينص العقد على مبلغ الخدمات الواجب على الطرف الثاني دفعها شهريا وحسب
              البند(26) في العقد الموقع بين الطرفين حيث تم احتساب مبلغ الخدمات 100,000د.ع
              عن ( تنظيف وصيانة ومرفقات خارجية وحراسة) غير مبالغ فواتير الكهرباء والماء
              والغاز وفي حالة المخالفة وعدم الدفع سيتم قطع الماء والكهرباء والغاز عن
              الشقة.
            </h4>
          </div>
        </v-container>
        <v-container style="padding: 0px">
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
                padding: 10px;
                text-align: right;
                white-space: pre-wrap;
                padding-right: 80px;
              "
            >
              <h3>الطرف الثاني</h3>
              <h3>الساكن: {{ data.name }}</h3>
              <h3>التوقيع:</h3>
              <h3>التاريخ:</h3>
            </v-col>
          </v-row>
          <br />
          <br />
          <br />
          <img :src="rrr" style="width: 100%" alt="" />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ba from "@/assets/images/icons/rr.jpg";
import numberWithComma from "@/constant/number";
import tafqeet from "@/constant/Tafqeet.js";
import rrr from "@/assets/images/icons/rrr.jpg";

export default {
  data() {
    return {
      data: {},
      user: null,
      ba,
      rrr,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintServiceContractsAlrawan"));
    this.user = JSON.parse(localStorage.getItem("results"));
    console.log(this.data);
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 500);
  },
  methods: {
    stringText(item) {
      return tafqeet(item);
    },
    numberWithComma,
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
.v-card {
  margin-bottom: 15px;
  height: auto;
}
p,
strong,
h4 {
  color: black;
}
.gdd {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
@media print {
  @media print {
    table {
      page-break-inside: auto;
    }

    body {
      direction: rtl;
    }
    #pri v-card-title v-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }
    .gdd {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .gd {
      margin-bottom: 0px;
      height: auto;
      page-break-before: always;
    }
    .dis {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      height: 100% !important;
    }
    .diss {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      height: auto !important;
    }
    .gdd:first-child {
      page-break-before: auto;
    }
    table {
      page-break-inside: auto;
    }
    tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    td,
    th {
      page-break-inside: avoid;
      page-break-after: auto;
    }
  }
}
</style>
