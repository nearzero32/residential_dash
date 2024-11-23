<template>
  <div>
    <v-container id="pri">
      <v-card class="gdd">
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 3px solid #a8abb0;
          "
        >
          <v-container style="padding: 0px 0px">
            <img :src="KaramBagdad" style="width: 100%" alt="" />
            <h3>العدد: ({{ data.contract_id }})</h3>
            <h3>التاريخ: {{ data.createdAt }}</h3>
          </v-container>

          <v-container>
            <div>
              <h3 style="font-weight: 900; text-align: center">
                عقد شراء وحدة سكنية في مشروع كرم بغداد السكني
              </h3>
              <h3 style="font-weight: 900; text-align: center">
                الطرف الأول البائع الشركة المنفذة: شركة روعة بلاد الرافدين
                للمقاولات العامة
              </h3>
              <h3 style="font-weight: 900; text-align: center">
                الطرف الثاني المشتري : <strong>{{ data.owner_name }}</strong>
              </h3>
              <br />
              <p style="text-align: center">
                استنادا الى الاجازة الاستثمارية المرقمة (327/2015) والمؤرخة في
                6\2\2023 والصادرة من هيئة استثمار بغداد والمقامة على القطعة
                المرقمة (1/4850) م 20 داودي وباسم (مجمع كرم بغداد السكني) بناءا
                على توفر وحدة سكنية للطرف الأول ولرغبة الطرف الثاني بالشراء فقد
                <br />
                اتفق الطرفان على ما يلي :
              </p>
              <table
                border="1"
                style="
                  width: 100%;
                  height: 100%;
                  margin-bottom: 100px;
                  border-collapse: collapse;
                "
              >
                <thead>
                  <tr>
                    <th>البناية رقم</th>
                    <th>الطابق</th>
                    <th>رقم الشقة</th>
                    <th>المساحة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {{ data.exact_apartment_building }}
                    </td>
                    <td>{{ data.house_floor_number }}</td>
                    <td>{{ data.house_name }}</td>
                    <td>
                      {{ data.house_total_space }} (
                      <span style="margin-inline: 200px"></span> )
                    </td>
                  </tr>
                </tbody>
              </table>
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
                ><h3>الطرف الاول</h3>
                <h3>{{ data.owner_name }}</h3></v-col
              >
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 10px;
                  text-align: left;
                  white-space: pre-wrap;
                  padding-left: 80px;
                "
              >
                <h3>المدير المفوض</h3>
                <h3>محمد مهاوي بدن</h3></v-col
              >
            </v-row>

            <img
              :src="footerKaramBagdad"
              style="padding-top: 35px; width: 100%"
              alt=""
            />
          </v-container>
        </v-card>
      </v-card>
      <v-card class="gdd">
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: solid 3px black;
          "
        >
          <v-container style="padding: 0px 0px">
            <img :src="KaramBagdad" style="width: 100%" alt="" />
            <h3>العدد: ({{ data.contract_id }})</h3>
            <h3>التاريخ: {{ data.createdAt }}</h3>
          </v-container>

          <v-container>
            <div>
              <p>
                <strong style="color: black"
                  >2- ان بدل الوحدة السكنية هو ( $ )( دولار امريكي )</strong
                >
              </p>
              <p>
                <strong style="color: black"> وتدفع على الشكل الاتي:</strong>
              </p>
              <p>
                <strong style="color: black"
                  >( مليون دينار) ( الف دينار ) مقدمة عند توقيع العقد
                </strong>
              </p>
              <p>
                <strong style="color: black"
                  >( مليون دينار) (الف دينار) عند الاستلام بعد مرور 3
                  سنوات</strong
                >
              </p>
              <br />
              <br />
              <br />
              <p>
                <strong style="color: black"
                  >والمبلغ المتبقي يقسط كالاتي:-</strong
                >
              </p>
              <p>
                <strong style="color: black"
                  >( {{ numberWithComma(sortedSalaryPayments[10].amount) }} )
                  (الف دينار) قسط شهري لمدة (70 شهر)</strong
                >
              </p>
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
                ><h3>الطرف الاول</h3>
                <h3>{{ data.owner_name }}</h3></v-col
              >
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 10px;
                  text-align: left;
                  white-space: pre-wrap;
                  padding-left: 80px;
                "
              >
                <h3>المدير المفوض</h3>
                <h3>محمد مهاوي بدن</h3></v-col
              >
            </v-row>

            <img
              :src="footerKaramBagdad"
              style="padding-top: 35px; width: 100%"
              alt=""
            />
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gd"
        :style="`background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="height: auto">
            <div class="diss" style="height: auto">
              <div style="height: 100%">
                <h3>المساحة : {{ data.house_total_space }}</h3>
                <br />
                <h3>
                  سعر المتر :
                  {{ numberWithComma(data.price_for_one_square_meter) }}
                </h3>
                <br />
                <h3>
                  السعر الاجمالي : {{ numberWithComma(data.salary_amount) }}
                </h3>
                <br />
                <table
                  border="1"
                  style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 100px;
                    border-collapse: collapse;
                  "
                >
                  <thead>
                    <tr style="background-color: rgb(186 217 227)">
                      <th>رقم الدفعة</th>
                      <th>تاريخ الاستحقاق</th>
                      <th>مقدار الدفعة رقما</th>
                      <th>مقدار الدفعة كتابة</th>
                      <th>الملاحظات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(salary_payment, index) in sortedSalaryPayments"
                      :key="index"
                    >
                      <td
                        style="background-color: rgb(186 217 227)"
                        v-if="salary_payment.payment_position == 'مقدم'"
                      >
                        دفعة المقدمة
                      </td>
                      <td
                        style="background-color: rgb(186 217 227)"
                        v-else-if="
                          salary_payment.payment_position == 'دفعة الهيكل'
                        "
                      >
                        دفعة الهيكل
                      </td>
                      <td
                        style="background-color: rgb(186 217 227)"
                        v-else-if="
                          salary_payment.payment_position == 'اخر دفعة'
                        "
                      >
                        الدفعة (دفعة التسليم)
                      </td>
                      <td style="background-color: rgb(186 217 227)" v-else>
                        الدفعة ({{ getAdjustedIndex(index) }})
                      </td>
                      <td>{{ salary_payment.date }}</td>
                      <td>{{ numberWithComma(salary_payment.amount) }}</td>
                      <td>{{ salary_payment.amount_written }}</td>
                      <td>{{ salary_payment.desc }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div style="width: 100%; height: 200px; border: solid 1px black">
              * ملاحظه
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
                ><h3>الطرف الاول</h3>
                <h3>{{ data.owner_name }}</h3></v-col
              >
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 10px;
                  text-align: left;
                  white-space: pre-wrap;
                  padding-left: 80px;
                "
              >
                <h3>المدير المفوض</h3>
                <h3>محمد مهاوي بدن</h3></v-col
              >
            </v-row>

            <img
              :src="footerKaramBagdad"
              style="padding-top: 35px; width: 100%"
              alt=""
            />
          </v-container>
        </v-card>
      </v-card>
      <v-card class="gdd">
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: solid 3px black;
          "
        >
          <v-container style="padding: 0px 0px">
            <img :src="KaramBagdad" style="width: 100%" alt="" />
            <h3>العدد: ({{ data.contract_id }})</h3>
            <h3>التاريخ: {{ data.createdAt }}</h3>
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                3-في حال تأخر الطرف الثاني عن تسديد الأقساط لمدة 45 يوم سواء
                كانت متصلة (خلال قسط واحد) اوكانت منفصلة (خلال عدة أقساط) يحق
                للطرف الأول فسخ العقد وارجاع المبالغ الواصلة من قبل الطرف الثاني
                وستقطع منه غرامة قدرها 20% من المبالغ الواصلة .
              </p>
              <p style="margin-bottom: 30px">
                4- في حالة تأخر الطرف الأول عن الإنجاز الكلي للوحدة السكنية
                المحددة أعلاه وفي حالة قيام المشتري بتسديد التزاماته يتحمل الطرف
                الأول غرامة مالية 1.5%عن كل شهر تأخير من مجموع المبالغ المدفوعة
                للطرف الأول تستقطع من ثمن الدفعة الأخيرة
              </p>
              <p style="margin-bottom: 30px">
                5- يلتزم الطرف الأول بنقل ملكية الوحدة السكنية باسم المشتري
                اصوليا في دائرة التسجيل العقاري على ان يتحمل الطرف الثاني جميع
                الرسوم والمصاريف التي تقتضيها إجراءات نقل الملكية واتعاب
                المحاماة بعد تسديد جميع الأقساط المترتبة بذمة الطرف الثاني
                المشتري .
              </p>
              <p>
                6- لايحق للطرف الثاني بيع الوحدة السكنية للغير الا بموافقة الطرف
                الأول ووفقا لتعليمات يضعها الطرف الأول في فترة تسديد الأقساط اما
                بعد تسديد كامل مبلغ يحق للمشتري بيعها الى من يشاء وبالسعر الذي
                يشاء.
              </p>
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
                ><h3>الطرف الاول</h3>
                <h3>{{ data.owner_name }}</h3></v-col
              >
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 10px;
                  text-align: left;
                  white-space: pre-wrap;
                  padding-left: 80px;
                "
              >
                <h3>المدير المفوض</h3>
                <h3>محمد مهاوي بدن</h3></v-col
              >
            </v-row>

            <img
              :src="footerKaramBagdad"
              style="padding-top: 35px; width: 100%"
              alt=""
            />
          </v-container>
        </v-card>
      </v-card>
      <v-card class="gdd">
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: solid 3px black;
          "
        >
          <v-container style="padding: 0px 0px">
            <img :src="KaramBagdad" style="width: 100%" alt="" />
            <h3>العدد: ({{ data.contract_id }})</h3>
            <h3>التاريخ: {{ data.createdAt }}</h3>
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                7- يخضع هذا العقد لقانون الاستثمار رقم 13 لسنه 2006م المعدل .
              </p>
              <p style="margin-bottom: 30px">
                8-تكون التصاميم الهندسية التفصيلية و الانشائية وجدول تقديم العمل
                والجدوى الاقتصادية المعدلة المقدمة من قبل الطرف الاؤل والمصادقة
                عليها من قبل هيئة الاستثمار التي تم بموجبها منح المستثمر الاجازة
                رقم ((327/2015) لسنه (2015) جزا لايتجزأ من هذا العقد فيما يتعلق
                بالمشروع وخدماته بالكامل ..
              </p>
              <p style="margin-bottom: 30px">
                9- تعتبر وصولات الإيداع للمبالغ حسب الية التسديد شرط لصحة العقد
                وسلامته .
              </p>
              <p style="margin-bottom: 30px">
                10.يعتبر العنوان واسم المختار المثبت من قبل الطرف الثاني محلا
                للتبليغ
              </p>
              <p style="margin-bottom: 30px">
                11-يتكون هذا العقد من أربعة صفحات والموقع عليها من قبل الطرفين
              </p>
              <p style="margin-bottom: 30px">
                12-اطلع الطرف الثاني المشتري على نموذج الوحدة السكنية المنفذة من
                قبل الطرف الأول المستثمر ووافق عليها ولا يحق له المطالبة باي
                تغيير في وحدته خلافا للنموذج
              </p>
              <p>
                13-حرر هذا العقد في محافظة بغداد وتعاطيناه بنسختين تحريريتين
              </p>
              <p>
                بتاريخ :- <span style="margin-inline: 10px"></span>/
                <span style="margin-inline: 10px"></span>/
              </p>
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
                ><h3>الطرف الاول</h3>
                <h3>{{ data.owner_name }}</h3></v-col
              >
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 10px;
                  text-align: left;
                  white-space: pre-wrap;
                  padding-left: 80px;
                "
              >
                <h3>المدير المفوض</h3>
                <h3>محمد مهاوي بدن</h3></v-col
              >
            </v-row>

            <img
              :src="footerKaramBagdad"
              style="padding-top: 35px; width: 100%"
              alt=""
            />
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/logoPrint.png";
import KaramBagdad from "@/assets/images/icons/KaramBagdad.jpg";
import footerKaramBagdad from "@/assets/images/icons/footerKaramBagdad.jpg";
import rrr from "@/assets/images/icons/rrr.jpg";
import numberWithComma from "@/constant/number";

export default {
  data() {
    return {
      data: {},
      user: null,
      KaramBagdad,
      footerKaramBagdad,
      rrr,
      logoPrint,
      d: null,
      yearsDifferencey: null,
      yearsDifference: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintKaramBagdad"));
    this.user = JSON.parse(localStorage.getItem("results"));

    if (this.data.first_payment_date && this.data.last_payment_date) {
      this.yearsDifference = this.getMonthsDifference(
        this.data.first_payment_date,
        this.data.last_payment_date
      );
    }

    if (this.data.first_payment_date && this.data.last_payment_date) {
      this.yearsDifferencey = this.getMonthsDifferencey(
        this.data.first_payment_date,
        this.data.last_payment_date
      );
    }
    this.d = this.data.salary_payments.filter(
      (payment) => payment.payment_position === "مقدم"
    );
  },
  computed: {
    sortedSalaryPayments() {
      const getPaymentWeight = (payment_position) => {
        switch (payment_position) {
          case "مقدم":
            return 1;
          case "دفعة الهيكل":
            return 2;
          default:
            return 3;
        }
      };

      return this.data.salary_payments.slice().sort((a, b) => {
        return (
          getPaymentWeight(a.payment_position) -
          getPaymentWeight(b.payment_position)
        );
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 500);
  },
  methods: {
    numberWithComma,
    getMonthsDifferencey(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      let yearsDifference = end.getFullYear() - start.getFullYear();

      if (
        end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
      ) {
        yearsDifference--;
      }
      return yearsDifference;
    },
    getMonthsDifference(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const yearsDifference = end.getFullYear() - start.getFullYear();
      const monthsDifference = end.getMonth() - start.getMonth();

      return yearsDifference * 12 + monthsDifference;
    },
    getAdjustedIndex(index) {
      const structurePaymentIndex = this.sortedSalaryPayments.findIndex(
        (payment) => payment.payment_position === "دفعة الهيكل"
      );

      if (structurePaymentIndex === -1 || index <= structurePaymentIndex) {
        return index + 1;
      } else {
        return index - structurePaymentIndex;
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
.v-card {
  margin-bottom: 15px;
  height: auto;
}
p {
  color: black;
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
      margin-bottom: 0px;
      height: 100vh;
      page-break-before: always;
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
