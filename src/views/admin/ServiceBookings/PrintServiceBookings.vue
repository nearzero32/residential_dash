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
                    <div
            v-if="dataResidential.center_id._id == '66e2c810dec89fdfea71c92b'"
          >
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
                <img :src="logo1" style="width: 50%" alt="" />
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="
                    dataResidential.content_url + dataResidential.center_id.logo
                  "
                  style="width: 80px"
                  alt=""
                />
              </v-col>
            </v-row>
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: black;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgba(141, 96, 67, 1) 0%,
                    rgba(255, 198, 132, 1) 100%
                  );
                "
              >
                طلب حجز خدمة ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div
            v-else-if="
              dataResidential.center_id._id == '66656b164cdec95cab679181'
            "
          >
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
                <img :src="ba" style="width: 100%" alt="" />
              </v-col>
            </v-row>
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: black;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(0 115 170) 0%,
                    rgb(141 221 255) 100%
                  );
                "
              >
                طلب حجز خدمة ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div
            v-else-if="
              dataResidential.center_id._id == '6667fa62668eb9af32976f03'
            "
          >
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="3" md="3" style="text-align: center">
                <h3>مجمع الرتاج السكني</h3>
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="
                    dataResidential.content_url + dataResidential.center_id.logo
                  "
                  style="width: 80px"
                  alt=""
                />
              </v-col>
            </v-row>
            <hr style="margin-top: 15px; border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #ffffff;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(53 69 142) 0%,
                    rgb(111 169 109) 100%
                  );
                "
              >
                طلب حجز خدمة ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div
            v-else-if="
              dataResidential.center_id._id == '66e9376b2dcd8ef700ac5f01'
            "
          >
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
                <img :src="logo11" style="width: 60px" alt="" />
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="
                    dataResidential.content_url + dataResidential.center_id.logo
                  "
                  style="width: 80px"
                  alt=""
                />
              </v-col>
              <v-col cols="3" md="3" style="text-align: center">
                <img :src="logo2" style="width: 60px" alt="" />
              </v-col>
            </v-row>
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: black;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(0 115 170) 0%,
                    rgb(141 221 255) 100%
                  );
                "
              >
                طلب حجز خدمة ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
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
import logo1 from "@/assets/logo/q.png";
import ba from "@/assets/images/icons/rr.jpg";
import logo11 from "@/assets/logo/41412d.png";
import logo2 from "@/assets/logo/qaiwan-logo.png";

export default {
  data() {
    return {
      logo1,
      ba,
      logo11,
      logo2,
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
        } else if (error.response && error.response.data.error === true) {
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
