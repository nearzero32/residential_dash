<template>
  <div>
    <v-container id="pri">
      <v-card v-if="data">
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
                 <br />للأستثمار  والتجارة العامة</strong
              ></p>
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
                  >أستفسار الزبون ( {{ data.caller_name }} )</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center; ">
              <img :src="logoPrint" style="width: 160px" alt="" />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <p><strong>أسم المتصل : </strong> {{ data.caller_name }}</p>
            <p><strong>رقم الهاتف : </strong> {{ data.caller_phone }}</p>
            <p><strong>العنوان الوظيفي : </strong> {{ data.caller_job }}</p>
            <p><strong>هاتف المتصل : </strong> {{ data.caller_address }}</p>
            <p><strong>عدد افراد الأسرة : </strong> {{ data.caller_family_members }}</p>
            <p><strong>كيف سمع عنا : </strong> {{ data.how_he_hear_about_us }}</p>
            <p><strong>المساحة المطلوبة : </strong> {{ data.space_required }}</p>
            <p><strong>أسم النموذج : </strong> {{ data.form_name }}</p>
            <p><strong>الموظف الحالي : </strong> {{ data.current_employee.name }}</p>
            <p><strong>نتائج المكالمة : </strong> {{ data.results_of_call }}</p>
            <p>
              <strong>موظفين المبيعات السابقين  : </strong>
              <span
                v-for="(oldEmployee, index) in data.old_employees"
                :key="oldEmployee._id"
              >
                {{ oldEmployee.name }}
                <span v-if="index !== data.old_employees.length - 1">, </span>
              </span>
            </p>
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
import logoPrint from "@/assets/images/icons/logoPrint.png";
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      id: null,
      data: null,
      user: null,
      logoPrint,
    };
  },
  created() {
    const da = JSON.parse(localStorage.getItem("PrintCallCenter"));
    this.id = da._id;
    API.getCallCenterOne({
      id: this.id,
    })
      .then((response) => {
        this.data = response.data.results;
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.data);
      })
      .catch((error) => {
        console.error("Error fetching call center data:", error);
      });
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
