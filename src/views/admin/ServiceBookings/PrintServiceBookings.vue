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
              <p style="font-size: 14px">
                <strong>{{ dataResidential.center_id.name }}</strong>
              </p>
            </v-col>
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: center; white-space: pre-wrap"
            >
              <div
                style="
                  background-color: #ffd147;
                  padding: 10px;
                  border-radius: 10px;
                "
              >
                <strong style="font-size: 14px"
                  >طلب حجز خدمة ( {{ data.name }} )</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center">
              <img
                :src="
                  dataResidential.content_url + dataResidential.center_id.logo
                "
                style="width: 160px"
                alt=""
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container style="height: 100%">
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
                <p>الاسم : {{ data.name }}</p>
                <br />
                <p>رقم الهاتف : {{ data.phone }}</p>
                <br />
                <p>كود النموذج : {{ data.form_code }}</p>
                <br />
                <p>تاريخ الطلب : {{ data.createdAt }}</p>
                <p>اسم الخدمة : {{ data.service ? data.service.name : "" }}</p>
                <p>نوع الخدمة : {{ data.service ? data.service.type : "" }}</p>
                <br />
                <p>توقيع ادارة مجمع : </p>
                <br />
                <p>توقيع موظف الصيانه : </p>
                <br />
                <p>توقيع الساكن  : </p>
              </div>
            </v-col>
            <v-col cols="6" md="6" style="text-align: center">
                <p v-if="data.status">الحالات : 
                    <ul style="margin-inline: 10%;">
                        <li v-for="(item, index) in data.status" :key="index">
                            <ul style="margin-block: 10px;
                                        border-bottom: solid 1px;
                                        padding-bottom: 10px;">
                                <li style="margin-bottom: 6px;">الحالة : {{ item.type }}</li>
                                <li style="margin-bottom: 6px;">التاريخ : {{ item.createdAt }}</li>
                                <li style="margin-bottom: 6px;">الملاحظة : {{ item.note }}</li>
                            </ul>
                        </li>
                    </ul>
                </p>
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
import adminApi from "@/api/adminApi";

export default {
  data() {
    return {
      id: null,
      loading: false,
      data: {},
      user: null,
      dataResidential: null,
    };
  },
  created() {
    this.id = JSON.parse(localStorage.getItem("PrintServiceBookings"))._id;
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getReservationsServiceOne(this.id);
        this.data = response.data.results;
        setTimeout(() => {
          this.printElement();
        }, 500);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
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
