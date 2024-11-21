<template>
  <div>
    <v-container id="pri">
      <v-card
        v-if="data && dataResidential"
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
                استمارة حضور زبون
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
                استمارة حضور زبون
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
                استمارة حضور زبون ( {{ data.caller_name }} )
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
                استمارة حضور زبون
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
                  >استمارة حضور زبون ( {{ data.caller_name }} )</strong
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
                <p><strong>أسم الزبون : </strong> {{ data.caller_name }}</p>
                <p><strong>رقم الهاتف : </strong> {{ data.caller_phone }}</p>
                <p><strong>العنوان الوظيفي : </strong> {{ data.caller_job }}</p>
                <p><strong>هاتف الزبون : </strong> {{ data.caller_address }}</p>
                <p>
                  <strong>عدد افراد الأسرة : </strong>
                  {{ data.caller_family_members }}
                </p>
                <p>
                  <strong>كيف سمع عنا : </strong>
                  {{ data.how_he_hear_about_us }}
                </p>
                <p>
                  <strong>المساحة المطلوبة : </strong> {{ data.space_required }}
                </p>
                <!-- <p><strong>أسم النموذج : </strong> {{ data.form_name }}</p> -->
                <p v-if="data && data.current_employee">
                  <strong>الموظف الحالي : </strong>
                  {{ data.current_employee.name }}
                </p>
                <p>
                  <strong>موظفين المبيعات السابقين : </strong>
                  <span
                    v-for="(oldEmployee, index) in data.old_employees"
                    :key="oldEmployee._id"
                  >
                    {{ oldEmployee.name }}
                    <span v-if="index !== data.old_employees.length - 1"
                      >,
                    </span>
                  </span>
                </p>
              </div>
            </v-col>
            <v-col cols="6" md="6" style="text-align: center">
              <p>يمكنك تحميل التطبيق</p>
              <img
                style="width: 120px"
                :src="
                  dataResidential.content_url + dataResidential.center_id.qr
                "
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
              v-else-if="
                dataResidential.center_id._id == '66e2c810dec89fdfea71c92b'
              "
              ><v-icon size="20"> mdi-phone </v-icon>07844448486</v-col
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
      <p v-else style="font-size: 14px">
        <strong>Loading...</strong>
      </p>
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
      id: JSON.parse(localStorage.getItem("CustomerAttendanceForm"))._id,
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
