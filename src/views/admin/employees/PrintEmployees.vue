<template>
  <div>
    <v-container id="pri">
      <v-card>
        <v-card-title>
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
              style="padding: 10px; text-align: right; white-space: pre-wrap"
            >
              <p style="font-size: 14px;"><strong
                >شركة صناع النهضة
                للأستثمار <br /> والتجارة العامة</strong
              ></p>
            </v-col>
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: center; white-space: pre-wrap"
            >
              <div style="background-color: #ffd147; padding: 10px; border-radius: 10px">
                <strong style="font-size: 14px;">الموظف ( {{ data.name }} )</strong>
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center; ">
              <img
                :src="logoPrint"
                style="width: 160px"
                alt=""
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <p>أسم الموظف : {{ data.name }}</p>
            <br />
            <p>رقم الهاتف : {{ data.phone }}</p>
            <br />
            <p>العنوان : {{ data.address }}</p>
            <br />
            <p>العنوان الوظيفي : {{ data.title_jop }}</p>
            <br />
            <p>الراتب: {{ data.salary }}</p>
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
              ><v-icon size="20"> mdi-phone </v-icon>4646</v-col
            >
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: left; white-space: pre-wrap"
            >
              العراق – السماوة<br /><a href="mailto:info@nahdda.com"
                >info@nahdda.com</a
              ></v-col
            >
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/logoPrint.png"
export default {
  data() {
    return {
      data: null,
      user: null,
      logoPrint,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintEmployees"));
    this.user = JSON.parse(localStorage.getItem("user"));
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
