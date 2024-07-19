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
          "
        >
          <v-container>
            <div>
              <h3>العدد: ({{ data.contract_id }})</h3>
              <h3>التاريخ: {{ data.createdAt }}</h3>
              <h3 style="font-weight: 900; text-align: center">
                (مجمع الرتاج السكني الافقي) ( A87 )
              </h3>
              <h3 style="font-weight: 900; text-align: center; color: #0070c0">
                للقطع المرقمة (3167 و3168 و3169 و3173 و2997 /3/ 18) عامرية
              </h3>
              <br />
              <h4 style="color: #0070c0">
                الطرف الاول البائع:
                <span style="color: black"
                  >شركة (حول الخليج للتجارة العامة والاستثمارات العقارية)
                  ويمثلها /السيد محمد عليان حسين/المدير المفوض /أضافه
                  لوظيفته.</span
                >
              </h4>
              <br />

              <h4>العنوان: بغداد - الداوودي</h4>
              <br />

              <h4>
                هواتف الشركة: أسيا سيل:
                <span style="margin-right: 40px">009647744443616</span>
              </h4>
              <h4 style="margin-right: 100px">
                وتساب زين:
                <span style="margin-right: 38px">009647844443616</span>
              </h4>
              <br />

              <h4>
                الإيميلات (البريد الالكتروني):
                <a
                  href="mailto:moh.alayan73@gmail.com"
                  style="margin-right: 38px; color: #0271c0"
                  >moh.alayan73@gmail.com</a
                >
              </h4>
              <br />
              <h4 style="color: #0070c0">الطرف الثاني المشتري:</h4>
              <p>
                الاسم الثلاثي: <strong>{{ data.owner_name }}</strong>
              </p>
              <ul style="list-style-type: none; margin-right: 15px">
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> رقم
                  البطاقة الوطنية: {{ data.owner_id_number }}
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> جهة
                  الاصدار : {{ data.owner_id_place_of_issue }}
                  <span style="margin-inline: 60px"></span> تاريخ الاصدار :
                  {{ data.owner_id_issue_date }}
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> رقم بطاقة
                  السكن: {{ data.owner_id_residence_card_number
                  }}<span style="margin-inline: 47px"></span>عنوان بطاقة السكن :
                  {{ data.owner_id_residence_card_place_of_issue }}
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> رقم
                  الموبايل : {{ data.owner_phone }}
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> العنوان
                  الوظيفي او المهنة: {{ data.owner_title_jop }}
                </li>
                <li>في حال تعذر الوصول الى المشتري يتم الاتصال على</li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> اسم الشخص
                  البديل:
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> رقم الشخص
                  البديل:
                </li>
                <li>
                  <v-icon color="black" size="15">mdi-clover</v-icon> عنوان
                  الشخص البديل:
                </li>
              </ul>
              <h4 style="color: #0070c0">تمهيد:</h4>
              <p>
                بما ان الطرف الاول حاصل على الاجازة الاستثمارية المرقمة (609)
                لعام 2022 من هيئة استثمار بغداد وعلى قانون الاستثمار المرقم 13
                لسنة 2006 ونظام بيع العقارات واراضي الدولة للقطاع العام ولما كان
                اختصاص الشركة هو تطوير الاراضي وتحويلها الى مجمعات سكنية متكاملة
                الخدمات على كل من القطع المرقمة (3167 و3168 و3169 و3173 و2997
                /3/ 18) عامرية.
              </p>
              <p>
                فأن الشركة المتمثلة ب الطرف الاول المالكة والمنفذة للمشروع
                المتكون من <strong>(166) وحدة سكنية افقية</strong> متكاملة
                الخدمات ليوفر حياة معاصرة للمواطن بالإضافة الى تأمينه بالحراسات
                الامنية لمدة 24 ساعة.
              </p>
            </div>
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
          "
        >
          <v-container>
            <div>
              <p>
                1. باع الطرف الاول بموجب هذا العقد الى الطرف الثاني الوحدة
                السكنية ( الدار ) المرقم ({{ data.house_name }}) في مجمع الرتاج
                السكني لغرض السكن العائلي بما يتناسب مع غرض المشروع وبمبلغ
                اجمالي قدرة ({{ numberWithComma(data.salary_amount) }}) علما ان
                مساحة الوحدة السكنية ( الدار) هي ({{ data.house_total_space }}
                متر مربع) .
              </p>
              <p>
                2. يقوم الطرف الثاني بدفع مبلغ الوحدة السكنية ( الدار) بشكل
                دفعات الى الطرف الاول.
              </p>
              <p>
                3. يتعهد الطرف الاول بتسليم الطرف الثاني الوحدة السكنية ( الدار)
                محل العقد بمدة اقصاها (24 شهرا) من تاريخ التعاقد اي من تاريخ
                ابرام العقد بشرط ان يكون الطرف الثاني قد ادى كل ما عليه من
                التزامات واردة بهذا العقد وفي حال لم يتم تسليم مفاتيح الوحدة
                السكنية الى الطرف الثاني في الوقت المحدد عندها يكون الطرف الاول
                مسؤول عن دفع مبلغ من المال قدره (100.000دينارعراقي) عن كل يوم
                تأخير للطرف الثاني .
              </p>
              <p>
                4. اتفق الطرفان على انه لا يجوز للطرف الثاني التصرف في الوحدة
                محل العقد سو اء بالبيع او التنازل او الهبة او المطالبة بنقل
                الملكية او التسجيل الا بعد سداد كامل البدل او الحصول على موافقة
                تحريرية من الطرف الاول وفي حينها تطبق الفقرة (5) .
              </p>
              <p>
                5. لا يجوز تغيير عقد الوحدة السكنية ( الدار ) بأسم مستفيد ثاني
                بدون موافقة الشركة (الطرف الاول) وفي حال وافقت الشركة على
                التغيير يلتزم الطرف الثاني بدفع مبلغ (6.600,000 دينار) الى الطرف
                الاول كمصاريف ادارية .
              </p>
              <p>
                6. يلتزم الطرف الاول البائع بأن الوحدة السكنية المباعة محل هذا
                العقد خالية من كافة الحقوق أيا كان نوعها ظاهرة او خاصة مثل حقوق
                الامتياز والرهن والوقف والحكر وحقوق الانتفاع.
              </p>
              <p>
                7. يلتزم الطرف الاول بتسليم الطرف الثاني الوحدة السكنية محل
                العقد كاملة التشطيب وطبقا للأصول الفنية والمهنية وطبقا للرسومات
                والمواصفات الفنية المقدمة من الطرف الاول لهيئة استثمار بغداد
                وامانة بغداد كما ويلتزم بتنفيذ البنى التحتية من خطوط الماء
                والصرف الصحي والكهرباء والحدائق العامة والشوارع والارصفة.
              </p>
            </div>
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
          "
        >
          <v-container>
            <div>
              <p>
                8. يتحمل الطرف الثاني كافة الرسوم والمصاريف القانونية الخاصة
                بالتسجيل في دائرة التسجيل العقاري المختصة وعلى الطرف الثاني دفع
                مبلغ قدره (1,500,000 دينار عراقي ) لا غير كأتعاب محاماة الى
                الطرف الاول مقابل اكمال الاجراءات القانونية الخاصة بتسليم السند.
              </p>
              <p>
                9. بعد تسليم الوحدة السكنية ( الدار ) الى الطرف الثاني وقام
                بتسديد كافة الدفعات يلتزم الطرف الاول بتسجيل الدار بدوائر
                التسجيل العقاري باسم الطرف الثاني.
              </p>
              <p>
                10. يقر الطرف الثاني ( تحريرا ) بانه على علم تام بموقع الدار وقد
                اطلع على الرسومات الهندسية للمشروع وطابقها على ما سيتم تنفيذه في
                الطبيعة .
              </p>
              <p>
                11. في حالة توقف اعمال تنفيذ المشروع بسبب القوة القاهرة اي بسبب
                اي ظرف خارج عن ارادة الطرف الاول والتي تشمل على سبيل المثال
                الحرب , والاعتداءات الارهابية ...الخ ( التي تؤدي الى توقف او شبه
                توقف في العمل او بسبب اي قرار اداري صادر من السلطات العراقية
                فيتم التوقف عن احتساب المدة الزمنية المنصوص عليها في هذا العقد
                ويتم التوقف عن تسديد الدفعات خلال هذه المدة .
              </p>
              <p>
                12. -تعتبر العناوين المذكورة في العقد هي العناوين الرسمية في
                المخاطبات والرسائل الألكترونية والأنذارات .
              </p>
              <p>
                13. -في حالة قيام أحد الاطراف بتغيير عنوانه يلتزم بأشعار الطرف
                الاخر خلال مدة 7 ايام من تاريخ تغيير العنوان.
              </p>
              <p>
                14. في حالة نشوب اي نزاع بين الطرفين فيتم حله بالطرق الاتية:
              </p>
              <ul style="list-style-type: none; margin-right: 15px">
                <li>أ- يتم حل النزاع وديا.</li>
                <li>
                  ب- في حالة عدم حل النزاع وديا ( لا سامح الله ) تكون المحاكم
                  المختصة في بغداد \ الكرخ هي المختصة في حل النزاع وحسب القوانين
                  العراقية .
                </li>
              </ul>
              <p>
                15. يلتزم الطرف الثاني بتنفيذ كافة التعليمات الصادرة من ادارة
                المجمع بما يحفظ امن وسلامة الساكنين داخل المجمع المذكور.
              </p>
            </div>
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
          "
        >
          <v-container>
            <div>
              <p>
                16. يلتزم الطرف الثاني بعدم تشويه المنظر الخارجي للوحدة السكنية
                ولا يجوز عمل تعديلات خارجية في الواجهات اوتغيير الالوان الخارجية
                للواجهات سواء في الجدران والبالكونات و في الشبابيك من جهة الخارج
                للوحدة السكنية.
              </p>
              <p>
                17. كلفة الخدمات ستكون على عاتق الطرف الثاني بكلفة قدرها لا يقل
                عن (100,000 دينار عراقي) تدفع شهريا للطرف الاول ويشمل اجور
                التنظيف ورفع النفايات وادامة الحدائق والانارات الخارجية وامن
                وحماية المجمع و الممرات وفي حالة المخالفة وعدم الدفع سيتم قطع
                الماء والكهرباء عن الدار .
              </p>
              <p>
                18. لا يسمح للطرف الثاني استخدام مولدة خارج الدار و توزيع الطاقة
                الكهربائية من مسؤوليات الطرف الاول.
              </p>
              <p>
                19. يتعهد الطرف الثاني بعدم الإساءة الى سمعة الشركة بأي شكل من
                الأشكال او النشر بأي طريقة من الطرق العلنية كأنشاء صفحات او
                مجموعات على مواقع التواصل الاجتماعي وغيرها بخلاف ذلك يحق للطرف
                الاول فسخ العقد دون انذار او استصدار حكم قضائي مع احتفاظ الطرف
                الاول المطالبة بالتعويضات المادية نتيجة الضرر الذي يلحق بالشركة
                .
              </p>
              <p>
                20. تكون اللغة العربية هي اللغة المعتمدة في المخاطبات
                والمراسلات.
              </p>
              <p>
                21. العقد لا يعتبر ساري المفعول الا بعد وصل نسبه الانجاز المشروع
                الى (25%) علما ان هذا لا ينعكس على التزامات الطرف الاول اتجاه
                الطرف الثاني بأي شكل من الاشكال من ناحية تسليم الوحدة السكنية
                الى الطرف الثاني.
              </p>
              <p>22. يعتبر هذا العقد نافذا من تاريخ التوقيع عليه</p>
              <p>23. ملاحق العقد :</p>
              <ul style="list-style-type: none; margin-right: 15px">
                <li>a) ملحق رقم ( 1 ) المخطط الشمولي للمشروع.</li>
                <li>b) ملحق رقم ( 2 ) مخطط الوحدة السكنية.</li>
                <li>c) ملحق رقم ( 3 ) جدول التسديدات في حالة الاقساط.</li>
              </ul>
            </div>
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
          "
        >
          <v-container>
            <div>
              <p>
                <strong style="color: #0070c0">الالتزامات المالية :</strong> سعر
                الوحدة السكنية (الدار) ({{
                  numberWithComma(data.salary_amount)
                }})دينار عراقي واصل منها الدفعة المقدمة والبالغة ({{
                  numberWithComma(data.salary_first_payment)
                }}) دينار عراقي (فقط مائة مليون دينار عراقي لا غير) وباقي (<span
                  style="margin-inline: 100px"
                ></span
                >) تسدد على شكل دفعات على مدار {{ yearsDifference }} شهر من
                تاريخ توقيع العقد. وتنظم الدفعات حسب الجدول المرفق .
              </p>
              <p>
                حرر هذا العقد من ( 5) صفحات و ب ( 3 ) نسخ اصلية على ان يتم تسليم
                كل طرف نسخة من هذا العقد للعمل بموجبها.
              </p>
            </div>
          </v-container>
          <v-container>
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
              >
                <h3 style="color: #0070c0">الطرف الاول</h3>
                <h3>
                  شركة حول الخليج للتجارة العامة والاستثمارات العقارية /ويمثلها
                  /السيد محمد عليان حسين/المدير المفوض
                </h3>
                <br />
                <h3>التوقيع:</h3>
                <h3>تاريخ :</h3>
              </v-col>
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
                <h3 style="color: #0070c0">الطرف الثاني</h3>
                <h3>السيد: {{ data.owner_name }}</h3>
                <br />
                <h3 style="margin-left: 87px">التوقيع:</h3>
                <h3 style="margin-left: 103px">تاريخ :</h3>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/logoPrint.png";
import ba from "@/assets/images/icons/rr.jpg";
import rrr from "@/assets/images/icons/rrr.jpg";
import numberWithComma from "@/constant/number";

export default {
  data() {
    return {
      data: {},
      user: null,
      ba,
      rrr,
      logoPrint,
      d: null,
      yearsDifferencey: null,
      yearsDifference: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintAlrtaj"));
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
