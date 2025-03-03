<template>
  <div>
    <v-container id="pri">
      <v-card class="gdd">
        <v-container style="text-align: center; padding: 0px 0px">
          <img :src="logoPrint" style="width: 60px" alt="" />
        </v-container>

        <v-container>
          <div>
            <h3 style="font-weight: 900; text-align: center">
              عقد إدارة الخدمات السنوية
            </h3>
            <br />
            <h4 style="text-align: right">
              بين: مجمع الود السكني، ويمثله إدارة المجمع، ويُشار إليه في هذا العقد بـ
              (الطرف الأول).
            </h4>
            <h4 style="text-align: right">
              السيد/ السيدة: <strong>{{ data.name }}</strong
              >، حامل هوية مدنية رقم <strong>[{{ data.id_number }}]</strong>، والمقيم في
              <strong>[{{ data.house_name }}]</strong> داخل مجمع الود السكني، ويُشار إليه
              في هذا العقد بـ (الطرف الثاني).
            </h4>
            <br />
            <h4 style="text-align: center">تم الاتفاق بين الطرفين على ما يلي:</h4>
            <strong> المادة (1): موضوع العقد </strong>
            <p>
              لتزم الطرف الأول بتقديم خدمات الإدارة والصيانة للطرف الثاني داخل المجمع
              السكني، والتي تشمل:
            </p>
            <ul style="margin-right: 30px; list-style-type: none">
              <li><p>1. خدمات النظافة والصيانة الدورية.</p></li>
              <li><p>2. إدارة وصيانة المرافق الخارجية للمجمع.</p></li>
              <li><p>3. خدمات الحراسة والأمن على مدار الساعة.</p></li>
              <li>
                <p>
                  4. توفير تطبيق الموبايل الرسمي لمجمع الود السكني، والذي يتيح للساكن
                  الخدمات التالية:
                </p>
              </li>
              <li>
                <ul style="margin-right: 30px; list-style-type: none">
                  <li><p>• معرفة رصيد الكهرباء.</p></li>
                  <li><p>• طلب الصيانة والإبلاغ عن الأعطال.</p></li>
                  <li><p>• شحن الخدمات المختلفة داخل المجمع.</p></li>
                  <li><p>• الدفع الإلكتروني للفواتير الشهرية.</p></li>
                </ul>
              </li>
            </ul>

            <br />
            <strong> المادة (2): قيمة الخدمات وآلية الدفع </strong>
            <ul style="margin-right: 30px; list-style-type: none">
              <li>
                <p>
                  1. يلتزم الطرف الثاني بدفع مبلغ سنوي قدره [المبلغ بالدينار العراقي]
                  دينار عراقي مقابل الخدمات المذكورة أعلاه، باستثناء خدمة تطبيق الموبايل.
                </p>
              </li>
              <li>
                <p>
                  2. يتم دفع المبلغ في بداية كل سنة، وفي موعد أقصاه اليوم الخامس من شهر
                  [الشهر] من كل عام.
                </p>
              </li>
              <li>
                <p>
                  3. لا يشمل مبلغ الخدمات فواتير الكهرباء، الماء، والغاز، حيث يتحمل الطرف
                  الثاني سدادها بشكل مستقل.
                </p>
              </li>
              <li>
                <p>
                  4. اشتراك تطبيق الموبايل: يتم دفع رسوم الاشتراك السنوي في التطبيق بشكل
                  منفصل عن رسوم الخدمات، ويبلغ الاشتراك السنوي [المبلغ بالدينار العراقي]
                  دينار عراقي، ويُسدد مرة واحدة سنويًا عند بداية الاشتراك أو تجديده.
                </p>
              </li>
            </ul>
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
            >
              <h3>الطرف الاول</h3>
              <h3>إدارة مجمع الود السكني</h3>
              <h3>الاسم:</h3>
              <h3>التوقيع:</h3>
            </v-col>
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
              <h3>الطرف الثاني</h3>
              <h3>الاسم: {{ data.name }}</h3>
              <h3>رقم الشقة: {{ data.house_name }}</h3>
              <h3>التوقيع:</h3>
              <h3>التاريخ:</h3>
            </v-col>
          </v-row>

          <img :src="footerKaramBagdad" style="padding-top: 35px; width: 100%" alt="" />
        </v-container>
      </v-card>
      <v-card class="gdd">
        <v-container style="text-align: center; padding: 0px 0px">
          <img :src="logoPrint" style="width: 60px" alt="" />
        </v-container>

        <v-container>
          <div>
            <h3 style="font-weight: 900; text-align: center">
              عقد إدارة الخدمات السنوية
            </h3>
            <br />
            <strong> المادة (3): التعديل السنوي للعقد </strong>
            <ul style="margin-right: 30px; list-style-type: none">
              <li>
                <p>
                  1. هذا العقد ساري لمدة سنة واحدة فقط، ويتم تجديده تلقائيًا ما لم يتم
                  إبلاغ أحد الطرفين للطرف الآخر بعدم التجديد قبل [عدد الأيام] يومًا من
                  انتهاء العقد.
                </p>
              </li>
              <li>
                <p>
                  2. يحق للطرف الأول تعديل قيمة رسوم الخدمات السنوية أو تعديل شروط العقد
                  للسنة القادمة وفقًا للمتغيرات التشغيلية والاقتصادية، ويتم إبلاغ الطرف
                  الثاني بالتعديلات قبل [عدد الأيام] يومًا من موعد التجديد.
                </p>
              </li>
              <li>
                <p>
                  3. في حال عدم موافقة الطرف الثاني على التعديلات الجديدة، يحق له إنهاء
                  العقد بعد استكمال أي التزامات مالية مستحقة.
                </p>
              </li>
            </ul>

            <br />
            <strong> المادة (4): التأخير أو الامتناع عن الدفع </strong>
            <ul style="margin-right: 30px; list-style-type: none">
              <li>
                <p>
                  1. في حالة تأخر الطرف الثاني عن سداد رسوم الخدمات السنوية بعد [عدد
                  الأيام] أيام من تاريخ الاستحقاق، يحق للطرف الأول اتخاذ الإجراءات
                  التالية:
                </p>
              </li>
              <li>
                <ul style="margin-right: 30px; list-style-type: none">
                  <li><p>• إرسال إشعار رسمي بوجوب الدفع خلال [عدد الأيام] أيام.</p></li>
                  <li>
                    <p>
                      • في حال عدم الامتثال، يحق للطرف الأول تعليق بعض الخدمات الأساسية،
                      بما في ذلك قطع الماء، الكهرباء، والغاز عن الوحدة السكنية.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  2. في حالة عدم تجديد اشتراك تطبيق الموبايل السنوي، يتم تعليق إمكانية
                  استخدام التطبيق حتى يتم السداد.
                </p>
              </li>
            </ul>

            <br />
            <strong> المادة (5): الأحكام العامة </strong>
            <ul style="margin-right: 30px; list-style-type: none">
              <li>
                <p>
                  1. يلتزم الطرف الثاني بالمحافظة على الممتلكات والمرافق العامة وعدم إلحاق
                  أي ضرر بها.
                </p>
              </li>
              <li>
                <p>
                  2. أي نزاع ينشأ عن هذا العقد يتم حله وديًا، وفي حال عدم التوصل إلى حل،
                  يتم اللجوء إلى المحاكم المختصة في [اسم المدينة].
                </p>
              </li>
              <li>
                <p>
                  3. يعتبر هذا العقد ملزمًا للطرفين، وأي تعديل عليه يجب أن يكون بموافقة
                  كتابية من الطرفين.
                </p>
              </li>
            </ul>
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
            >
              <h3>الطرف الاول</h3>
              <h3>إدارة مجمع الود السكني</h3>
              <h3>الاسم:</h3>
              <h3>التوقيع:</h3>
            </v-col>
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
              <h3>الطرف الثاني</h3>
              <h3>الاسم: {{ data.name }}</h3>
              <h3>رقم الشقة: {{ data.house_name }}</h3>
              <h3>التوقيع:</h3>
              <h3>التاريخ:</h3>
            </v-col>
          </v-row>

          <img :src="footerKaramBagdad" style="padding-top: 35px; width: 100%" alt="" />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/alwedd.png";
import numberWithComma from "@/constant/number";
import tafqeet from "@/constant/Tafqeet.js";

export default {
  data() {
    return {
      data: {},
      user: null,
      logoPrint,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintServiceContractsAlwud"));
    this.user = JSON.parse(localStorage.getItem("results"));
    console.log(this.data);
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 500);
  },
  methods: {
    stringText(item) {
      return tafqeet(item);
    },
    numberWithComma,
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
p,
strong,
h4 {
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
