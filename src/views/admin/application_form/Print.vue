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
              <p style="font-size: 14px">
                <strong
                  >شركة صناع النهضة للأستثمار <br />
                  والتجارة العامة</strong
                >
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
                  >أستمارة حجز وحدة سكنية في مجمع النهضة السكني</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center; padding: 10px">
              <img :src="logoPrint" style="width: 200px" alt="" />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <p>رقم الأستمارة : {{ data.application_code }}</p>
            <p>تاريخ التنظيم : {{ data.createdAt }}</p>
            <p>
              اني المواطن /ة
              <span style="border-bottom: dashed 1px; margin-inline: 10px">{{
                data.buyer_info.customer_name
              }}</span
              >والمرفقة الوثائق الثبوتية لي طيا ارغب بشراء الوحدة السكنية
              الموجودة تفاصيلها ادناه واوافق على كافة الفقرات والتعليمات والشروط
              الموجودة في العقد الخاص بشراء الوحدة السكنية وملحقاتها .
            </p>
            <br />
            <div style="text-align: center">
              <strong>معلومات المشتري</strong>
            </div>
            <br />
            <div>
              <p>
                الأسم الرباعي واللقب :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.customer_name
                }}</span>
              </p>
              <p>
                رقم الهوية :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.id_number
                }}</span>
                تاريخ الأصدار :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.id_issue_date
                }}</span>
              </p>
              <p>
                عنوان السكن :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.city
                }}</span>
                / محلة :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.street
                }}</span>
                / زقاق :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.state
                }}</span>
                / دار :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.house
                }}</span>
              </p>
              <p>
                رقم الهاتف :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.customer_phone
                }}</span>
                البريد الألكتروني :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.email
                }}</span>
              </p>
              <p>
                عدد افراد الأسرة :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.family_number
                }}</span>
                المهنة او الوظيفة :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.job
                }}</span>
              </p>
            </div>
            <br />
            <div style="text-align: center">
              <strong>تفاصيل الوحدة السكنية</strong>
            </div>
            <br />
            <div>
              <p>
                النموذج :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_name
                }}</span>
                كود الوحدة السكنية :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_code
                }}</span>
                مساحة الوحدة السكنية :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_total_space
                }}</span>
              </p>
              <p>
                البلوك :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_block_number
                }}</span>
                التصنيف :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_category
                }}</span>
                رقم الشارع :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.form_street_number
                }}</span>
                رقم الدار :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.house_name
                }}</span>
              </p>
              <p>
                السعر رقمآ :
                <span style="border-bottom: dashed 1px; margin-left: 60px"
                  >{{ $func(data.house_info.price) }} دينار عراقي</span
                >
                كتابة :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.house_info.price_written
                }}</span>
              </p>
              <p>
                طريقة الدفع :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.payment_info.payment_type
                }}</span>
              </p>
              <p>
                رقم الحساب :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.payment_info.account_number
                }}</span>
              </p>
            </div>
          </div>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <thead>
              <tr>
                <th style="border: 1px solid black; padding: 8px">
                  مصاريف ادارية
                </th>
                <th style="border: 1px solid black; padding: 8px">
                  الدفعة الأولى
                </th>
                <th style="border: 1px solid black; padding: 8px">المتبقي</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid black; padding: 8px">
                  {{ $func(data.payment_info.management_fees) }}
                </td>
                <td
                  style="
                    text-align: center;
                    border: 1px solid black;
                    padding: 8px;
                  "
                >
                  {{ $func(data.payment_info.first_payment) }}
                </td>
                <td
                  style="
                    text-align: center;
                    border: 1px solid black;
                    padding: 8px;
                  "
                >
                  {{
                    $func(
                      data.house_info.price - data.payment_info.first_payment
                    )
                  }}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            اقرار : اقر انا ..................................... بأن جميع
            المعلومات الواردة في هذة الأستمارة هي معلومات صحيحة واذا ظهر خلاف
            ذلك أتحمل كامل المسؤولية القانونية والأعتبارية ولأجل ذالك وقعت .
          </p>
          <p>
            اسم وتوقيع موظف المبيعات
            <span style="border-bottom: dashed 1px;">{{ data.employee_name }}</span>:
          </p>
          <p>التاريخ : <span style="border-bottom: dashed 1px;">{{ date }}</span></p>
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
              <p style="font-size: 14px">
                <strong
                  >شركة صناع النهضة للأستثمار <br />
                  والتجارة العامة</strong
                >
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
                  >أستمارة حجز وحدة سكنية في مجمع النهضة السكني</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center; padding: 10px">
              <img :src="logoPrint" style="width: 200px" alt="" />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <p>
              اني الموقع ادناه أقر باني قد قرأت جميع بنود هذه الأستمارة
              وتفاصيلها وبنود عقد البيع لتملك الوحدة السكنية في مجمع النهضة
              السكني وتفاصيلها واتعهد بااللتزام بكافة الشروط واتحمل كافة التبعات
              الماليه والقانونية .<br /><br />
              الحجز ساري لمدة شهر واحد فقط من تاريخ الحجز اعلاه وبعدها سيتم
              الغاء الحجز تلقائيا في حال لم يتم التسديد .<br /><br />
              - في حال التاخير او الأمتناع عن توقيع العقد خلال ( 30 ) يوم من
              تاريخ سداد دفعة التسجيل يحق للشركه التصرف بالوحده للغير دون انذار
              على ان يتم توفير وحدة بديلة ولمرة واحده فقط وبنفس مواصفات الوحدة
              الموصوفة اعلاه وبنفس المرحلة التسويقيه على ان يتم توقيع العقد
              خلال( 30 ) يوم وفي حال امتناع توقيع العقد ورغم توفير وحده بديلة
              ويعتبر ذلك عدوال نهائيا عن الحجز فتكون الأستمارة كان لم تكن دون
              الحاجة للتنبيه واالنذار .<br /><br />
              - يحظر على المشتري التنازل عن استمارة حجز الوحدة للغير ويعد
              التنازل باطلاً" .<br /><br />
              - يحق للشركة خصم مبلغ بواقع ( %15 ) كمصروفات ادارية من قيمه دفعه
              التسجيل في حال التراجع عن الشراء قبل التعاقد على ان يتم ارجاع
              المبلغ بعد استقطاع تكلفة الغاء الحجز بعد حلول مشتري اخر بنفس
              الوحدة السكنيه او مرور ( 12 ) شهر على الغاء الحجز .<br /><br />
              - في حال التعاقد بالوكالة يقر الوكيل بان البيانات الواردة بالنسبه
              له والمشتري صحيحه وان وكالته ساريه المفعول ويكون هو المسؤول عن
              البيانات .<br /><br />
              - لا تعتبر هذه الأستمارة بمثابة عقد ولا يترتب اي التزامات على الشركه
              ألا في حال اتمام التعاقد بسداد النسبه المقرره والمشار اليها اعلاه ب
              ( دفعة التسجيل )
            </p>
            <br />
            <br />
            <p>
              أسم المشتري : <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.customer_name
                }}</span>  اسم
              وتوقيع موظف المبيعات : <span style="border-bottom: dashed 1px;">{{ data.employee_name }}</span>
            </p>
            <br />
            <p>
              توقيع المشتري .......................................... : اسم
              وتوقيع موظف الحجز : ....................................
            </p>
            <br />
          <p>التاريخ : <span style="border-bottom: dashed 1px;">{{ date }}</span></p>
          </div>
          <br />
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
import { getCurrentDateInString } from "@/utils/date";

export default {
  data() {
    return {
      data: null,
      user: null,
      logoPrint,
      date: getCurrentDateInString(),
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintForm"));
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
#pri span {
  border-bottom: dashed 1px;
  margin-left: 60px;
}
@media print {
  @media print {
    body {
      direction: rtl;
    }
    #pri span {
      border-bottom: dashed 1px;
      margin-left: 60px;
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
