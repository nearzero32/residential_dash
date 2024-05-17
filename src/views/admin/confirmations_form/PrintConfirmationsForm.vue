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
              <p style="font-size: 14px;"><strong>{{ dataResidential.center_id.name }}</strong></p>
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
                <strong style="font-size: 14px">أستماراة طلب موافقة</strong>
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center; ">
              <img :src="dataResidential.content_url + dataResidential.center_id.logo" style="width: 160px" alt="" />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <strong>العدد :</strong>
            <strong>التاريخ :</strong>
            <br />
            <br />
            <table border="1" style="width: 100%; border-collapse: collapse">
              <thead>
                <tr>
                  <th style="border: 1px solid black; padding: 8px">
                    أسم الزبون
                  </th>
                  <th style="border: 1px solid black; padding: 8px">النوع</th>
                  <th style="border: 1px solid black; padding: 8px">
                    أسم النموذج
                  </th>
                  <th style="border: 1px solid black; padding: 8px">البلوك</th>
                  <th style="border: 1px solid black; padding: 8px">التصنيف</th>
                  <th style="border: 1px solid black; padding: 8px">
                    رقم الشارع
                  </th>
                  <th style="border: 1px solid black; padding: 8px">
                    رقم المنزل
                  </th>
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
              <strong>{{data.details}}</strong>
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
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                "
              >
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
              ><v-icon size="20"> mdi-phone </v-icon>{{ dataResidential.center_id.phone }}</v-col
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
            >{{ dataResidential.center_id.address }}</v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import logoPrint from "@/assets/images/icons/logoPrint.png";
export default {
  data() {
    return {
      data: null,
      user: null,
      dataResidential: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintConfirmationsForm"));
    var userDataString = JSON.parse(localStorage.getItem("user"));
    this.dataResidential = userDataString
    this.user = userDataString
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
