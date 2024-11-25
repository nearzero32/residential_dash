<template>
  <div>
    <v-container id="pri">
      <div style="padding: 1%; background-color: #ffffff">
        <div
          v-if="data && dataResidential"
          style="
            height: 98vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: solid black 2px;
          "
        >
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
                      إستمارة زائرین
                    </h4>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card-title>
          <v-container style="height: 50%">
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
                  <h3 style="font-weight: 100; color: #827962">
                    الاســـــــــــم :
                    <strong style="border-bottom: dotted"> {{ data.caller_name }}</strong>
                  </h3>
                  <br />
                  <h3 style="font-weight: 100; color: #827962">
                    رقــم الهاتـف :
                    <strong style="border-bottom: dotted">
                      {{ data.caller_phone }}</strong
                    >
                  </h3>
                  <br />
                  <h3 style="font-weight: 100; color: #827962">
                    عنوان السکن :
                    <strong style="border-bottom: dotted">
                      {{ data.caller_address }}</strong
                    >
                  </h3>
                  <br />
                  <h3 style="font-weight: 100; color: #827962">
                    المساحــــــة :
                    <strong style="border-bottom: dotted">
                      {{ data.space_required }}</strong
                    >
                  </h3>
                  <br />
                  <h3 style="font-weight: 100; color: #827962">ملاحظــــــات :</h3>
                  <br />
                  <h4>
                    ..........................................................................................................................................................................
                    <br />
                    <br />
                    ..........................................................................................................................................................................
                    <br />
                    <br />
                    ..........................................................................................................................................................................
                  </h4>
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
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <h3
                  style="font-weight: 100; color: #827962"
                  v-if="data && data.current_employee"
                >
                  <strong>موظف المبیعات : </strong>
                  {{ data.current_employee.name }}
                </h3>
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <h3
                  style="
                    text-align: left;
                    margin-left: 39px;
                    font-weight: 100;
                    color: #827962;
                  "
                >
                  التاریخ: / <span style="margin-inline: 15px"></span> /
                </h3>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <p v-else style="font-size: 14px">
          <strong>Loading...</strong>
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import logo1 from "@/assets/logo/Screenshot-2024-11-24-113024.png";

export default {
  data() {
    return {
      logo1,
      id: JSON.parse(localStorage.getItem("CustomerAttendanceFormLoam"))._id,
      data: {},
      user: JSON.parse(localStorage.getItem("results")),
      dataResidential: JSON.parse(localStorage.getItem("results")) || {},
    };
  },
  created() {
    adminApi
      .getCallCenterOne({
        id: this.id,
      })
      .then((response) => {
        this.data = response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching call center data:", error);
      });
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 1000);
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
