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
              <h3 style="text-align: center">عقد بيع شقة سكنية</h3>
              <h3>العدد: ({{ data.contract_id }})</h3>
              <h3>التاريخ: {{ data.createdAt }}</h3>
              <h3>اسم المشروع : <strong>مجمع ﻻماك السكني</strong></h3>
              <h3>
                عنوان المشروع :
                <strong> بغداد – الكرادة – قرب ساحة كهرمانة</strong>
              </h3>
              <h3>
                <strong>التمهيد:</strong>
              </h3>
              <br />
              <p>
                بما ان الطرف اﻻول صاحب القطعة المرقمة 326/281 بتاوين ملك صرف لما كان
                اختصاصه هو ﻻنشاء مجمع سكني متكامل تطوير اﻻراضي وتحويلها الى مجمعات سكنية
                متكاملة الخدمات. <br />
                فأن الطرف اﻻول المالك للمشروع والحاصل على اﻻجازة المرقمة (148) قام بطرح
                وحدات سكنية تتكون من 230 الى 270 شقة. بواقع 4 أبراج علماً ان المجمع متكامل
                الخدمات ليوفر حياة معاصرة للمواطن باﻹضافة الى تأمينه بالحراسات اﻻمنية مع
                توفير الكهرباء على مدار 24 ساعة وخدمات توصيل الغاز بنظام اﻻنابيب الواصلة
                الى كل شقة.
              </p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
              <h3 style="margin-bottom: 5px; font-weight: 400">
                الطرف اﻻول البائع السيد : <strong>احمد خيري عبد الكريم</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                رقم البطاقة الوطنية :
                <strong> (197785866059)</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                الصادرة بتاريخ :
                <strong> 7/1/2021</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                عنوان السكن :
                <strong> مكتب معلومات المسبح , محلة ,903 زقاق 3 , الدار 4</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                السيد : <strong>حسين عبد الواحد نوري</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                رقم البطاقة الوطنية :
                <strong> (198893886227)</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                الصادرة بتاريخ :
                <strong> 24/8/2023</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                عنوان السكن :
                <strong> مكتب معلومات الخضراء , محلة ,635 زقاق 29 , الدار 57</strong>
              </h3>
              <br />
              <br />
              <h3 style="margin-bottom: 5px; font-weight: 400">الطرف الثاني المشتري</h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                السيد :
                <strong>{{ data.owner_name }}</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                رقم البطاقة الوطنية :
                <strong>{{ data.owner_id_number }}</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                الصادرة بتاريخ :
                <strong>{{ data.owner_id_issue_date }}</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                عنوان السكن :
                <strong
                  >مكتب معلومات<span style="margin-inline: 60px"></span>,محلة<span
                    style="margin-inline: 60px"
                  ></span
                  >,زقاق<span style="margin-inline: 60px"></span>,الدار</strong
                >
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                رقم الهاتف :
                <strong>{{ data.owner_phone }}</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">
                <strong>في حال تعذر الوصول الى المشتري يتم اﻻتصال على:</strong>
              </h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">اسم الشخص البديل :</h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">رقم الشخص البديل :</h3>
              <h3 style="margin-bottom: 5px; font-weight: 400">عنوان الشخص البديل :</h3>
              <br />
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                <h3>السعر الاجمالي : {{ numberWithComma(data.salary_amount) }}</h3>
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
                      <th style="color: black">رقم الدفعة</th>
                      <th style="color: black">تاريخ الاستحقاق</th>
                      <th style="color: black">مقدار الدفعة رقما</th>
                      <th style="color: black">مقدار الدفعة كتابة</th>
                      <th style="color: black">الملاحظات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(salary_payment, index) in sortedSalaryPayments"
                      :key="index"
                    >
                      <td
                        style="color: black; background-color: rgb(186 217 227)"
                        v-if="salary_payment.payment_position == 'مقدم'"
                      >
                        دفعة المقدمة
                      </td>
                      <td
                        style="color: black; background-color: rgb(186 217 227)"
                        v-else-if="salary_payment.payment_position == 'دفعة الهيكل'"
                      >
                        دفعة الهيكل
                      </td>
                      <td
                        style="color: black; background-color: rgb(186 217 227)"
                        v-else-if="salary_payment.payment_position == 'اخر دفعة'"
                      >
                        الدفعة (دفعة التسليم)
                      </td>
                      <td style="color: black; background-color: rgb(186 217 227)" v-else>
                        الدفعة ({{ getAdjustedIndex(index) }})
                      </td>
                      <td style="color: black">{{ salary_payment.date }}</td>
                      <td style="color: black">
                        {{ numberWithComma(salary_payment.amount) }}
                      </td>
                      <td style="color: black">
                        {{ stringText(salary_payment.amount) }}
                      </td>
                      <td style="color: black">{{ salary_payment.desc }}</td>
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
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                1 - باع الطرف اﻻول بموجب هذا العقد الى الطرف الثاني الشقة المرقمة ({{
                  data.house_name
                }}) في الطابق المرقم ( {{ data.house_floor_number }} ) في العمارة (
                {{ data.exact_apartment_building }} ) في أبراج ﻻماك السكني لغرض السكن
                العائلي بما يتناسب مع غرض المشروع .
              </p>
              <p>
                2 - ان مساحة الشقة السكنية اﻻجمالية التي اشتراها الطرف الثاني هي (
                {{ data.house_total_space }} ) والتي تشمل كافة الخدمات والملحقات والمتمثلة
                على سبيل المثال ﻻ الحصر (المصاعد والمدخل والبلكونة).
              </p>
              <p>
                3 - باع الطرف اﻻول الشقة بسعر اجمالي وقدره رقماً (
                {{ numberWithComma(data.salary_amount) }} ) كتابة (
                {{ stringText(data.salary_amount_written) }} ) وان سعر متر الشقة هو (
                {{ numberWithComma(data.price_for_one_square_meter) }} ) دينار عراقي
              </p>
              <p>4 - يقوم الطرف الثاني بدفع مبلغ الشقة الى الطرف اﻻول كما يلي:</p>
              <ul style="margin-right: 30px; list-style-type: none">
                <li>
                  أ- يتم دفع مبلغ ما يعادل ما نسبته %16 من قيمة الشقة عند التوقيع العقد.
                </li>
                <li>
                  ب- يتم دفع مبلغ ما يعادل ما نسبته %11 من قيمة الشقة عند اكمال هيكل
                  العمارة.
                </li>
                <li>ت- يتم دفع مبلغ ما يعادل ما نسبته %25 من قيمة الشقة عند التسليم .</li>
                <li>
                  ث- يتم دفع مبلغ على شكل اقساط شهرية تعادل ما نسبته %1 شهريا من قيمة
                  الشقة ابتداء من تاريخ {{ data.first_payment_date }} لغاية تكملة المبلغ
                  بالكامل.
                </li>
              </ul>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                -5 في حال تأخر الطرف الثاني عن جدول تسديد المستحقات المالية التي بذمته
                المذكورة في الفقرة (5) في اوقاتها المحددة لفترة تتجاوز ال (30) يوم يتحمل
                المشتري غرامة تأخيريه مقدارها (50,000) دينار عن كل يوم تأخير في تسديد
                الدفعات وتحسب من تاريخ استحقاق الدفعة وخﻼل مدة (3) اشهر من تاريخ استحقاق
                الدفعات المستحقة وعند عدم التسديد يعتبر العقد مفسوخا من تلقاء نفسه دون
                الحاجة الى اصدار حكم قضائي ويتحمل المشتري مبلغ قدره (%25) من المبالغ
                المدفوعة بدل مصاريف ادارية وتسويقية وكذلك يحق للطرف اﻻول قطع جميع الخدمات
                عن الشقة وتكون الشركة غير مسؤولة عن ارجاع المبالغ المتبقية اﻻ في حالة بيع
                الشقة الى زبون ثاني و حسب تسديدات الزبون الثاني يتم ارجاع المبلغ المتبقي
                ويتم استقطاع الغرامات والمصاريف اﻻدارية والتسويقية من المبلغ على ان ﻻ
                تتحمل الشركة اي خسائر مالية بسبب بيع الشقة الى زبون ثاني في حالة تغير
                اﻻسعار .
              </p>
              <p>
                -6 يتعهد الطرف اﻻول بتسليم الطرف الثاني الشقة السكنية محل العقد بعد 30 شهر
                عمل من تاريخ التعاقد بشرط ان يكون الطرف الثاني قد ادى كل ما عليه من
                التزامات واردة بهذا العقد.
              </p>
              <p>
                -7 اتفق الطرفان على انه ﻻ يجوز للطرف الثاني التصرف في الوحدة محل العقد
                سواء بالبيع او التنازل او الهبة او المطالبة بنقل الملكية او التسجيل اﻻ بعد
                الحصول على موافقة تحريرية من الطرف اﻻول.
              </p>
              <p>
                -8 في حال وافقت الشركة على بيع الشقة في الحاﻻت المشار اليها في الفقرة
                السابقة فيلتزم الطرف الثاني بدفع مبلغ (%2) من القيمة السعرية للشقة الى
                الطرف اﻻول بدل مصاريف ادارية وتسويقية .
              </p>
              <p>
                -9 في حال لم تكون الوحدة السكنية جاهزة للتسليم الى الطرف الثاني في الوقت
                المحدد عندها يكون الطرف اﻻول مسؤول عن دفع مبلغ من المال قدره (500,000)
                دينار عن كل شهر تأخير للطرف الثاني ولغاية %10 من قيمة الوحدة السكنية موضوع
                العقد كحد اقصى ويستثنى من ذلك الظروف القاهرة التي تحصل اثناء فتره سريان
                العقد و تؤدي الى تأخير العمل.
              </p>
              <p>
                -10 يتحمل الطرف الثاني كافة الرسوم والمصاريف القانونية الخاصة بالتسجيل في
                دائرة التسجيل العقاري المختصة والبالغة (750,000) دينار ﻻغير كأتعاب محاماة
                الى الطرف اﻻول مقابل سير اﻻجراءات القانونية الخاصة بتسليم السند.
              </p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                -11 بعد تسليم الشقة الى الطرف الثاني وقام بتسديد كافة الدفعات يلتزم الطرف
                اﻻول بتسجيل الشقة بدوائرالتسجيل العقاري باسم الطرف الثاني على ان يتحمل
                الطرف الثاني (وحده) كافة الرسوم .
              </p>
              <p>
                12 - يقر الطرف الثاني بانه على علم تام بموقع الشقة والطابق والعمارة وقد
                اطلع على الرسومات الهندسية للمشروع وطابقها على ما سيتم تنفيذه في الطبيعة
                ووافق عليها ومن حق الطرف الأول اجراء تعديلات معمارية بسيطة تصب في مصلحة
                عمل المشروع معماريا على ان لا تتجاوز نسبة التغييرات عن 10%.
              </p>
              <p>
                -13 في حالة توقف اعمال تنفيذ المشروع بسبب الظروف القاهرة اي بسبب ظرف خارج
                عن ارادة الطرف الاول والتي تشمل على سبيل المثال الحرب , الانقلاب , الكوارث
                الطبيعية (الاعصار و الزلزال و العواصف او الاوبئة) التي تؤدي الى توقف او
                شبه توقف في العمل او بسبب اي قرار اداري صادر عن السلطات العراقية فيتم
                التوقف عن احتساب المدة الزمنية المنصوص عليها في هذا العقد لكلا الطرفين.
              </p>
              <p>
                14 - تنتقل الحقوق المكتسبة بموجب هذا العقد من الطرف الثاني الى الورثة في
                حالة الوفاة وحسب الاحكام العامة للقانون وتطبيق قاعدة لا تركه الا بعد سداد
                الديون.
              </p>
              <p>
                15 - يتم إيقاف عملية نقل الملكية الى الطرف الثاني إذا كان عليه حجز او
                مطلوب قانونا او مدين لأي جهة معينة وعلى الطرف الثاني ان يقدم حلأ قانونيا
                خلال مدة 3 أشهر وبخلافه يعتبر العقد مفسوخا ويقوم الطرف الأول بإعادة
                المبالغ المستلمة بعد خصم نسبة %20 بدل مصاريف ادارية وتسويقية من قيمة
                الدفعات المستلمة ويحق للطرف الأول القيام بعرض بيع الوحدة السكنية مرة أخرى
                ولا يحق للطرف الثاني مطالبة الطرف الأول بأي تعويض مالي
              </p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                16 - في حال رغبة الطرف الثاني بفسخ هذا العقد او الرجوع عنه يكون الطرف
                الاول غير مسؤول عن ارجاع المبالغ الا بعد بيع الوحدة الى زبون ثاني وحسب
                تسديدات الزبون الثاني يتم الاسترجاع على ان يتم خصم نسبة %20 بدل مصاريف
                ادارية وتسويقية ولا تتحمل الشركة اي خسائر مالية بسبب بيع هذه الشقة الى
                زبون ثاني في حال انخفاض سعر الشقة عن سعر البيع في هذا العقد.
              </p>
              <p>
                17 - يلتزم الطرف الاول بتسليم الطرف الثاني الوحدة السكنية محل العقد كاملة
                التشطيب وطبقا للأصول الفنية والمهنية وطبقا للرسومات والمواصفات الفنية
                ويلتزم بتنفيذ مرافق البناء المشتركة للعقار وجعلها صالحة للاستخدام على
                الوجه الاكمل بما فيه البنى التحتية (من خطوط الماء والصرف الصحي والكهرباء
                والحدائق).
              </p>
              <p>
                18 - وافق الطرف الثاني على أن يتم توجيه أي أشعار أو مراسلة من قبل الطرف
                الأول بموجب هذا العقد بشكل خطي وباللغة العربية أو الإنكليزية أو الكردية
                وتسلم شخصيا أو ترسل من خلال خدمة أرسال الطرود أو البريد المسجل في العقد او
                خدمة الرسائل القصيرة SMS الى رقم الجوال المسجل في العقد عند الحاجة ويعد
                الأشعار أو الإنذار من كاتب العدل من قبل الطرف الأول الى الطرف الثاني قد تم
                أستلامه على وفق الشروط الاتية :
              </p>
              <ul style="margin-right: 30px; list-style-type: none">
                <li>أ - أذا تم تسليمه بشكل شخصي .</li>
                <li>
                  ب - بعد ثلاثه أيام من أرساله من خلال خدمة أرسال الطرود أو البريد المسجل
                  أو خدمة الرسائل القصيرة .
                </li>
                <li>
                  ت- عند أرساله عن طريق تطبيقات التواصل الأجتماعي (فايبر أو واتساب أوغيره)
                  .
                </li>
                <li>
                  ث - عند أرساله بالبريد الألكتروني حسب مايظهر في تقرير الأرسال (تم
                  الأرسال) .
                </li>
                <li>
                  ج - في حالة قيام أحد الاطراف بتغيير عنوانه يلتزم بأشعار الطرف الاخر خلال
                  مدة 7 ايام من تاريخ تغيير العنوان.
                </li>
              </ul>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
              <p>19 - في حالة نشوب اي نزاع بين الطرفين فيتم حله بالطرق الاتية:</p>
              <ul style="margin-right: 30px; list-style-type: none">
                <li>أ - يتم حل النزاع ودياً .</li>
                <li>
                  ب - في حالة عدم توصل الطرفين الى حل ودي يتم اللجوء الى المحاكم العراقية
                  وتطبيق القوانين العراقية لحل النزاع وتكون محكمة بداءة الكرادة هي المختصة
                  بالنظر في هذا النزاع.
                </li>
              </ul>
              <p>
                20 - يلتزم الطرف الثاني بتنفيذ كافة التعليمات الصادرة المذكور لاحقاًمن
                ادارة المجمع بما يحفظ امن وسلامة الساكنين داخل المجمع ورقي ونظافة المجمع
                بما لايخل بالنظام العام.
              </p>
              <p>
                21 - يلتزم الطرف الثاني بإيقاف سيارته في الاماكن المحددة لإيقاف السيارات
                الخاصة بالعمارة ولكل شقة حق استخدام كراج واحد فقط وبخلافة يجب على صاحب
                الشقة شراء او ايجار مساحة وقوف ثانية وحسب الاسعار التي يحددها الطرف الاول.
              </p>
              <p>
                22 - يلتزم الطرف الثاني بعدم تشويه المنظر الخارجي للبناية بما فيها
                الاستخدام غير الحضاري للبلكونات مثل تعليق الملابس وتعليق الشعارات السياسية
                والدينية والتجارية وغيرها.
              </p>
              <p>
                23 - لا يجوز للطرف الثاني او من يخلفه عمل تعديلات خارجية في الواجهات او
                السلالم او المناور او تغيير الالوان الخارجية للواجهات سواء في الجدران
                والبلكونات والممرات وفي الشبابيك من جهة الخارج او الداخل.
              </p>
              <p>
                24 - لا يجوز للطرف الثاني نصب انترنيت خارجي بما يشوه منظر البناية حيث تقوم
                الشركة بإيصال خدمة الانترنيت الى داخل الشقة مقابل اجور التنصيب والاشتراك
                تدفع الى الشركة المجهزة بخدمة الانترنيت.
              </p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
                25 - لا يجوز للطرف الثاني نصب الستالايت والمولدات الخاصة في الشرفة او فوق
                العمارة.
              </p>
              <p>
                26 - اجور الخدمات ستكون على عاتق الطرف الثاني بكلفة تحدد لاحقا تدفع شهريا
                للطرف الاول وتشمل اجور التنظيف ورفع النفايات وادامة الحدائق والانارة
                الخارجية وامن وحماية المجمع والممرات واصلاح المصاعد وفي حالة المخالفة وعدم
                الدفع سيتم قطع الماء والكهرباء عن الشقة.
              </p>
              <p>27 - يلتزم الطرف الاول بتجهيز المصاعد والقيام بصيانتها سنوياً</p>
              <p>
                28 - يلتزم الطرف الثاني بدفع مستحقات شركة الصيانة (التي أنشاها الطرف
                الأول) وهي وحدها مسؤولة عن إجراءات الصيانة للأعمال المدنية والصحية
                والكهربائية في الوحدات السكنية وتكون الصيانة في السنة الاولى مجانية كضمان
                حسن تنفيذ مقدمة من الطرف الاول.
              </p>
              <p>
                29 - يشمل هذا البيع اجزاء البناء المعدة للاستعمال المشترك وهي الجدران
                المشتركة والمدخل والسلالم والمصاعد والسطح وكذلك حصة من الارض المقامة عليها
                العمارة بنسبة تعادل الوحدة السكنية منسوبة الى مجموع مسطح الكتلة البنائية
                وبالمقابل لا يمكن للطرف الثاني التعرض من خلال التقاضي الى أي مما ذكر
                فنصيبه من الملكية الشائعة يخضع لقرارات إدارة المجمع حصرا.
              </p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
            </v-row>
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
              <p>30 - اللغة والنسخ وملاحق العقد:</p>
              <ul style="margin-right: 30px; list-style-type: none">
                <li>أ - تكون اللغة العربية هي اللغة المعتمدة</li>
                <li>
                  ب - حرر هذا العقد من (6 صفحات) بـ (3) نسخ اصلاً على ان يتم تسليم كل طرف
                  نسخة من هذا العقد للعمل بموجبه
                </li>
              </ul>
              <p>* ملاحق العقد تعتبر جزء لا يتجزأ من هذا العقد وملزمة على الطرفين.</p>
              <p>*ملحق رقم (1) المخطط الشمولي للمشروع.</p>
              <p>*ملحق رقم (2) مخطط الوحدة السكنية.</p>
              <p>*ملحق رقم (3) جدول التسديدات.</p>
              <br />
              <p>يعتبر هذا العقد نافذا من تاريخ التوقيع عليه</p>
              <p>* يجب وضع توقيع الطرفين على كل صفحة من صفحات هذا العقد.</p>
            </div>
          </v-container>
          <v-container style="margin-bottom: 70px">
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
                ><h3>الطرف الاول</h3></v-col
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
                <h3>الطرف الثاني</h3></v-col
              >
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
import tafqeet from "@/constant/Tafqeet.js";

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
    this.data = JSON.parse(localStorage.getItem("PrintLamac"));
    this.user = JSON.parse(localStorage.getItem("results"));
    // console.log(this.$tafqeet.convert(2500));
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
          getPaymentWeight(a.payment_position) - getPaymentWeight(b.payment_position)
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
    stringText(item) {
      return tafqeet(item);
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
