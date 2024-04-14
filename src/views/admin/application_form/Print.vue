<template>
  <div>
    <v-btn depressed elevation="12" rounded @click="printElement">طباعة</v-btn>

    <v-container id="pri">
      <v-card>
        <v-card-title
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <strong>العدد : </strong>
          <br>
          <strong>التاريخ : </strong>
          <br>
        </v-card-title>
        <v-container>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <thead>
              <tr>
                <th style="border: 1px solid black; padding: 8px">أسم الزبون</th>
                <th style="border: 1px solid black; padding: 8px">النوع</th>
                <th style="border: 1px solid black; padding: 8px">م</th>
                <th style="border: 1px solid black; padding: 8px">ع</th>
                <th style="border: 1px solid black; padding: 8px">ش</th>
                <th style="border: 1px solid black; padding: 8px">ط</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid black; padding: 8px">
                  {{ data.customer_name }}
                </td>
                <td style="text-align: center; border: 1px solid black; padding: 8px">
                  {{ data.type }}
                </td>
                <td style="text-align: center; border: 1px solid black; padding: 8px">
                  {{ data.house }}
                </td>
                <td style="text-align: center; border: 1px solid black; padding: 8px">
                  {{ data.building }}
                </td>
                <td style="text-align: center; border: 1px solid black; padding: 8px">
                  {{ data.apartment }}
                </td>
                <td style="text-align: center; border: 1px solid black; padding: 8px">
                  {{ data.floor }}
                </td>
              </tr>
            </tbody>
          </table>
        </v-container>
        <br />
        <v-container>
          <strong>الطلب :</strong>
          <br />
          <br />
          <v-container style="border: solid 1px black">
            <div>
              <div style="padding: 15px;">
                {{ data.details }}
              </div>
              <br />
              <p style="text-align: left; margin-left: 20px; margin-bottom: 45px">
                توقيع مقدم الطلب
              </p>
            </div>
          </v-container>
        </v-container>
        <v-container
          id="Con"
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
          "
        >
          <div
            id="divv"
            style="display: flex; flex-direction: column; align-items: flex-start"
          >
            <strong>أسم موظف المبيعات : </strong>
            <br />
            <strong>توقيع الأدارة : </strong>
          </div>
          <div id="divc" style="margin-left: 60px; margin-bottom: 100px">
            <strong style="padding: 20px;">موافقة المدير :</strong>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintForm"));
  },
  methods: {
    printElement() {
      var printContent = document.getElementById("pri").innerHTML;
      var originalContent = document.body.innerHTML;
      var originalStyle = document.head.innerHTML;

      var printStyle = `
    <style type="text/css">
      @media print {
        body { direction: rtl; }
        #Con { display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
        #divv { display: flex; flex-direction: column; align-items: flex-start; }
        #divc { margin-left: 60px; margin-bottom: 100px; }
      }
    </style>
  `;

      document.head.innerHTML += printStyle;
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
