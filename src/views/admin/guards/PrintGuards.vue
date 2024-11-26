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
          <div v-if="dataResidential.center_id._id == '66e2c810dec89fdfea71c92b'">
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
                <img :src="karambagdad" style="width: 50%" alt="" />
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 80px"
                  alt=""
                />
              </v-col>
            </v-row>
            <v-container style="padding: 0px">
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
                طلبات وحدة سكنية
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '66656b164cdec95cab679181'">
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
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <img :src="alrawan" style="width: 100%" alt="" />
              </v-col>
            </v-row>
            <v-container style="padding: 7px 0px 0px 0px">
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
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '6667fa62668eb9af32976f03'">
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
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
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
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '66e9376b2dcd8ef700ac5f01'">
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
                <img :src="alfakher" style="width: 80px" alt="" />
              </v-col>
              <v-col cols="6" md="6" style="text-align: center">
                <img :src="qaiwan" style="width: 60px" alt="" />
              </v-col>
            </v-row>
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #c8be79;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(26 29 33) 0%,
                    rgb(55 61 65) 100%
                  );
                "
              >
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '672981a677eecc001eb05f4a'">
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
                md="312"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="loam" style="width: 155px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #ffffff;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(131 122 97) 0%,
                    rgb(174 173 169) 100%
                  );
                "
              >
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '6729808e77eecc001eb05f19'">
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
                md="312"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="MarinaBaghdad" style="width: 150px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: rgb(0 0 0);
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: #e5d3bb;
                "
              >
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'">
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
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br />
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="Nahdda" style="width: 160px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: rgb(255 255 255);
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: rgb(195 146 46);
                "
              >
                الحارس ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else>
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
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong>{{ dataResidential.center_id.name }}</strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 10%"
                  alt=""
                />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <v-card-text class="text-h4 primary text-center bg-grey-lighten-3">
                الحارس ( {{ data.name }} )
              </v-card-text>
            </v-container>
          </div>
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
                <p>أسم الحارس : {{ data.name }}</p>
                <br />
                <p>رقم الهاتف : {{ data.phone }}</p>
                <br />
                <p>العنوان : {{ data.address }}</p>
                <br />
                <p>البريد الألكتروني : {{ data.email }}</p>
                <br />
                <p>كلمة المرور : {{ data.password_show }}</p>
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

export default {
  data() {
    return {
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
    this.data = JSON.parse(localStorage.getItem("PrintGuards"));
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
