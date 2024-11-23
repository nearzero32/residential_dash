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
            border: solid 3px black;
          "
        >
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <h3>العدد: ({{ data.contract_id }})</h3>
              <h3>التاريخ: {{ data.createdAt }}</h3>
              <h3 style="font-weight: 900; text-align: center">
                بسم الله الرحمن الرحيم
              </h3>
              <h3 style="font-weight: 900; text-align: center">
                عقد بيع شقة سكنية
              </h3>
              <h3>التمهيد:</h3>
              <p>
                بما ان الطرف الاول حاصل على الاجازة الاستثمارية المرقمة 2017/387
                من هيئة استثمار بغداد وعلى قانون الاستثمار المرقم 13 لسنة 2006
                ونظام بيع العقارات واراضي الدولة للقطاع العام ولما كان اختصاص
                الشركة هو تطوير الاراضي وتحويلها الى مجمعات سكنية متكاملة
                الخدمات.
              </p>
              <p>
                فأن الشركة المتمثلة بالطرف الاول المالكة والمنفذة للمشروع طرحت
                وحدات سكنية وعلى مرحلتين المرحلة الاولى تتكون من 272 شقة
                والمرحلة الثانية من 272 وبواقع 4 ابراج لكل مرحلة. يتكون كل برج
                من 17 طابق + سرداب علماً ان المجمع متكامل الخدمات ليوفر حياة
                معاصرة للمواطن بالإضافة الى تأمينه بالحراسات الامنية لمدة 24
                ساعة / يوم مع توفير الكهرباء على مدار 24 ساعة وخدمات توصيل الغاز
                بنظام الانابيب الواصلة الى كل شقة ومؤسسات تعليمية تحتوي على رياض
                اطفال ومدرسة ابتدائية نموذجية.
              </p>
              <br />
              <p>
                الطرف الاول البائع: <strong>{{ data.owner_name }}</strong>
              </p>
              <p>
                اسم الشركة:
                <strong>شركة قه يوان للتجارة والمقاولات العامة</strong>
              </p>
              <p>
                اسم وكيل المدير المفوض للشركة: <strong>حارث رعد حسن</strong>
              </p>
              <p>اسم المشروع: <strong>مجمع ألروان السكني</strong></p>
              <p>
                عنوان المشروع: بغداد / حي الحسين على جزء من القطعة المرقمة
                2054/3/18 العامرية قرب كلية الرشيد الجامعة
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

            <img :src="rrr" style="width: 100%" alt="" />
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
                      <td>
                        {{ stringText(salary_payment.amount) }}
                      </td>
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 20px; color: red">
                الطرف الثاني المشتري السيد:
                <strong style="color: black">{{ data.owner_name }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                اسم المشتري الثلاثي السيد:
                <strong style="color: black">{{ data.owner_name }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                رقم البطاقة الشخصية :
                <strong style="color: black">{{ data.owner_id_number }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                جهة الاصدار :
                <strong style="color: black">{{
                  data.owner_id_place_of_issue
                }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                تاريخ الإصدار :
                <strong style="color: black">{{
                  data.owner_id_issue_date
                }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                رقم بطاقة السكن :
                <strong style="color: black">{{
                  data.owner_id_residence_card_number
                }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                عنوان بطاقة السكن :
                <strong style="color: black">
                  محلة (<span style="margin-inline: 60px"></span>) ز (<span
                    style="margin-inline: 60px"
                  ></span
                  >) دار (<span style="margin-inline: 60px"></span>)
                </strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                رقم الموبايل :
                <strong style="color: black">{{ data.owner_phone }}</strong>
              </p>
              <p style="margin-bottom: 20px; color: red">
                العنوان الوظيفي او المهنة :
                <strong style="color: black">{{ data.owner_title_jop }}</strong>
              </p>
              <p style="margin-bottom: 20px">
                في حال تعذر الوصول الى المشتري يتم الاتصال على:
              </p>
              <p style="margin-bottom: 20px; color: red">اسم الشخص البديل:</p>
              <p style="margin-bottom: 20px; color: red">رقم الشخص البديل:</p>
              <p style="margin-bottom: 20px; color: red">عنوان الشخص البديل:</p>
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                1ـ باع الطرف الاول بموجب هذا العقد الى الطرف الثاني الشقة
                المرقمة ({{ data.house_name }}) في الطابق المرقم ({{
                  data.house_floor_number
                }}) في العمارة ({{ data.exact_apartment_building }}) في مجمع
                ألروان السكني لغرض السكن العائلي بما يتناسب مع غرض المشروع و
                بمبلغ اجمالي قدره ({{ numberWithComma(data.salary_amount) }})
                دولار وكتابةً () علماً
              </p>
              <p style="margin-bottom: 30px">
                ان مساحة الشقة السكنية {{ data.house_total_space }} م2 مع
                الخدمات وصافي مساحة الشقة {{ data.house_building_space }}
                م2.
              </p>
              <p style="margin-bottom: 30px">
                1- يقوم الطرف الثاني بدفع مبلغ الشقة الى الطرف الاول كما يلي:
              </p>
              <ul style="list-style-type: none; margin-right: 25px">
                <li>
                  أ-عند توقيع العقد يتم دفع مبلغ ({{
                    numberWithComma(data.salary_first_payment)
                  }}) دولار دفعة اولى وباقي المبلغ يقسم على
                  {{ data.salary_payment_months_number }} دفعة تدفع كل ({{
                    data.salary_difference_months_number
                  }}) أشهر ولمدة لا تتجاوز {{ yearsDifferencey }} سنوات من تاريخ
                  توقيع هذا العقد.
                </li>
                <li>
                  ب- يقوم المشتري بدفع الدفعة الاولى الى المصرف العراقي الاسلامي
                  وجلب فيش التوديع وتسليمها الى الموظف القانوني واتمام عملية
                  توقيع العقد.
                </li>
                <li>
                  ج- في حال تأخر الطرف الثاني عن جدول تسديد المستحقات المالية
                  المرفق طياً التي بذمته في اوقاتها المحددة لفترة تتجاوز ال
                  (7)ايام يقوم الطرف الاول بتوجيه انذار بواسطة كاتب العدل مرة
                  واحدة بوجوب دفع المستحقات المالية التي بذمته وخلال مدة اسبوع
                  من تاريخ توجيه الانذار او التبليغ وعند عدم التسديد يعتبر العقد
                  مفسوخا من تلقاء نفسه دون الحاجة الى اصدار حكم قضائي مع احتفاظ
                  الشركة بحقها باعتبار المبلغ المدفوع عند توقيع العقد غير قابل
                  للرجوع بأي شكل من الاشكال و في حال كان هناك دفعات مدفوعة غير
                  الدفعة الاولية تكون الشركة غير مسؤولة عن استرجاعها الا في حالة
                  بيع الشقة الى زبون ثاني و حسب تسديدات الزبون الثاني يتم
                  الاسترجاع على ان لا تتحمل الشركة اي خسائر مالية بسبب بيع الشقة
                  الى زبون ثاني .
                </li>
                <li>
                  د- يتحمل المشتري غرامة تأخيريه مقدارها(100) دولار عن كل يوم
                  تأخير في تسديد الدفعات .
                </li>
              </ul>
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                2- يتعهد الطرف الاول بتسليم الطرف الثاني الشقة السكنية محل العقد
                بتاريخ 1/1/2025 من تاريخ التعاقد اي من تاريخ ابرام العقد بشرط ان
                يكون الطرف الثاني قد ادى كل ما عليه من التزامات واردة بهذا
                العقد.
              </p>
              <p style="margin-bottom: 30px">
                3- اتفق الطرفان على انه لا يجوز للطرف الثاني التصرف في الوحدة
                محل العقد سواء بالبيع او التنازل او الهبة او المطالبة بنقل
                الملكية او التسجيل الا بعد سداد كامل البدل او الحصول على موافقة
                تحريرية من الطرف الاول وفي حينها تطبق الفقرة (4).
              </p>
              <p style="margin-bottom: 30px">
                4- لا يجوز تغيير عقد الشقة باسم مستفيد ثاني بدون موافقة الشركة
                الطرف الاول وفي حال وافقت الشركة على التغيير يلتزم الطرف الثاني
                بدفع مبلغ (2500(دولار الى الطرف الاول.
              </p>
              <p style="margin-bottom: 30px">
                5- يلتزم الطرف الاول البائع بأن الوحدة السكنية المباعة محل هذا
                العقد خالية من كافة الحقوق أياً كان نوعها ظاهرة او خاصة مثل حقوق
                الامتياز والرهن والوقف والحكر وحقوق الانتفاع.
              </p>
              <p style="margin-bottom: 30px">
                6- في حال لم يتم تسليم مفاتيح الوحدة السكنية الى الطرف الثاني في
                الوقت المحدد عندها يكون الطرف الاول مسؤول عن دفع مبلغ من المال
                قدره (100) دولار عن كل يوم تأخير للطرف الثاني.
              </p>
              <p style="margin-bottom: 30px">
                7- يلتزم الطرف الاول بتسليم الطرف الثاني الوحدة السكنية محل
                العقد كاملة التشطيب وطبقا للأصول الفنية والمهنية وطبقا للرسومات
                والمواصفات الفنية المقدمة من الطرف الاول لهيئة الاستثمار بغداد
                وامانة بغداد كما ويلتزم بتنفيذ مرافق البناء المشتركة للعقار
                وجعلها صالحة للاستخدام على الوجه الاكمل بما فيه البنى التحتية
                (من خطوط الماء والصرف الصحي والكهرباء والحدائق العامة والشوارع
                والارصفة) ولكل مرحلة على حدة.
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p>
                8- يتحمل الطرف الثاني كافة الرسوم والمصاريف القانونية الخاصة
                بالتسجيل في دائرة التسجيل العقاري المختصة وعلى الطرف الثاني دفع
                مبلغ قدره (1000) دولار لا غير كأتعاب محاماة الى الطرف الاول
                مقابل اكمال الاجراءات القانونية الخاصة بتسليم السند.
              </p>
              <p>
                9- بعد تسليم الشقة الى الطرف الثاني وقام بتسديد كافة الدفعات
                يلتزم الطرف الاول بتسجيل الشقة بدوائر التسجيل العقاري باسم الطرف
                الثاني على ان يتحمل الطرف الثاني (وحده) كافة الرسوم والضرائب
                والمصاريف المترتبة على الشقة ومن تاريخ استلامه الشقة.
              </p>
              <p>
                10- يقر الطرف الثاني (تحريرياً) بانه على علم تام بموقع الشقة
                والطابق والعمارة وقد اطلع على الرسومات الهندسية للمشروع وطابقها
                على ما سيتم تنفيذه في الطبيعة.
              </p>
              <p>
                11- تطبق القوانين العراقية على هذا العقد وتكون المحاكم التي يقع
                فيها موقع العقار هي المختصة بالنظر في الدعاوى الناشئة عن هذا
                العقد.
              </p>
              <p>
                12- في حالة توقف اعمال تنفيذ المشروع بسبب القوة القاهرة اي بسبب
                اي ظرف خارج عن ارادة الطرف الاول والتي تشمل على سبيل المثال
                الحرب , اعمال الحرب و العدوان , الاعمال والاعتداءات الارهابية
                ,التلوث الشعاعي , التمرد والعصيان المدني , الاضراب , الانقلاب ,
                الكوارث الطبيعية ( الاعصار و الزلزال و العواصف او الاوبئة و تفشي
                الامراض) التي تؤدي الى توقف او شبه توقف في العمل او بسبب اي قرار
                اداري صادر عن السلطات العراقية فيتم التوقف عن احتساب المدة
                الزمنية المنصوص عليها في هذا العقد ويتم التوقف عن تسديد الدفعات
                خلال هذه المدة.
              </p>
              <p>
                13- تنتقل الحقوق المكتسبة بموجب هذا العقد لطرف الثاني الى الورثة
                في حالة الوفاة وحسب الاحكام العامة للقانون
              </p>
              <p>
                14- يتم إيقاف عملية نقل الملكية الى الطرف الثاني إذا كان عليه
                حجز او مطلوب قانونا او مدين لأي جهة معينة عليه ان يقدم الطرف
                الثاني حلأ قانونيا خلال مدة 3 أشهر وبخلافه يعتبر العقد مفسوخا
                ويقوم الطرف الأول بإعادة المبالغ المستلمة بعد خصم نسبة 20% من
                قيمة الدفعات المستلمة ويحق للطرف الأول القيام بعرض بيع الوحدة
                السكنية مرة أخرى ولا يحق للطرف الثاني مطالبة الطرف الأول بأي
                تعويض مالي
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                15- في حال رغبة الطرف الثاني بفسخ هذا العقد او الرجوع عنه لا يحق
                للطرف الثاني المطالبة باسترجاع الدفعة الاولى المقدمة المدفوعة
                عند توقيع العقد بأي شكل من الاشكال و في حال كان هناك دفعات
                مدفوعة غير الدفعة الاولية تكون الشركة غير مسؤولة عن استرجاعها
                الا في حال بيع الشقة الى زبون ثاني و حسب تسديدات الزبون الثاني
                يتم الاسترجاع على ان لا تتحمل الشركة اي خسائر مالية بسبب بيع هذه
                الشقة الى زبون ثاني في حال انخفاض سعر الشقة عن سعر البيع في هذا
                العقد .
              </p>
              <p style="margin-bottom: 30px">
                16- يتفق الطرفان على شرط جزائي قدره مبلغ الدفعة المقدمة عند
                توقيع العقد في حال رغبة الطرف الثاني فسخ هذا العقد او الرجوع عنه
                بشرط ان يكون الطرف الثاني قد ادى ما عليه من التزامات وارده في
                هذا العقد و في حال كانت قيمة المبالغ المسددة اكثر من مبلغ
                المقدمة فلا يحق للطرف الثاني المطالبة باسترجاعها الابعد قيام
                الطرف الاول ببيع الشقة الى زبون اخر بنفس سعر الشراء او اكثر.
              </p>
              <p style="margin-bottom: 30px">
                17- تعتبر العناوين المذكورة في العقد هي العناوين الرسمية في
                المخاطبات والرسائل والانذارات.
              </p>
              <p style="margin-bottom: 30px">
                18- في حالة قيام احد الاطراف بتغيير عنوانه يلتزم بأشعار الطرف
                الاخر خلال مدة 7 ايام من تاريخ تغيير العنوان.
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                19- في حالة نشوب اي نزاع بين الطرفين فيتم حله بالطرق الاتية:
              </p>
              <ul style="list-style-type: none; margin-right: 25px">
                <li>ا- يتم حل النزاع ودياً.</li>
                <li>
                  ب- في حالة عدم حل النزاع ودياٌ يتم حله عن طريق التحكيم من خلال
                  اشخاص ذوي خبرة.
                </li>
                <li>
                  ج- في حالة عدم اتفاق الطرفين على اختيار المحكمين يتم حل النزاع
                  باللجوء الى المحاكم العراقية وتطبيق القوانين العراقية لحل
                  النزاع.
                </li>
              </ul>
              <p style="margin-bottom: 30px">
                20- يلتزم الطرف الثاني بتنفيذ كافة التعليمات الصادرة من ادارة
                المجمع بما يحفظ امن وسلامة الساكنين داخل المجمع المذكورة لاحقاً.
              </p>
              <p style="margin-bottom: 30px">
                21- يلتزم الطرف الثاني بإيقاف سيارته في الاماكن المحددة لإيقاف
                السيارات الخاصة بالعمارة .
              </p>
              <p style="margin-bottom: 30px">
                22- يلتزم الطرف الثاني بعدم تشويه المنظر الخارجي للبناية بما
                فيها الاستخدام غير الحضاري للبالكونات مثل تعليق الملابس وغيرها.
              </p>
              <p style="margin-bottom: 30px">
                23- لا يجوز للطرف الثاني او خلفه العام او الخاص عمل تعديلات
                خارجية في الواجهات او السلالم او المناور او تغيير الالوان
                الخارجية للواجهات سواء في الجدران والبالكونات و في الشبابيك من
                جهة الخارج او الداخل.
              </p>
              <p style="margin-bottom: 30px">
                24- لا يجوز للطرف الثاني نصب انترنيت خارجي بما يشوه منظر البناية
                حيث تقوم الشركة بإيصال خدمة الانترنيت الى داخل الشقة مقابل اجور
                التنصيب والاشتراك تدفع الى الشركة المجهزة بخدمة الانترنيت .
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">
                25- لا يجوز للطرف الثاني نصب الستلايت في الشرفة او فوق العمارة
                لان الطرف الاول يقوم بنصب ستلايت مركزي بدون مقابل.
              </p>
              <p style="margin-bottom: 30px">
                26- كلفة التنظيف ستكون على عاتق الطرف الثاني بكلفة قدرها لا يقل
                عن (60 دولار) تدفع شهريا للطرف الاول ويشمل اجور التنظيف ورفع
                النفايات وادامة الحدائق و الانارات الخارجية و امن وحماية المجمع
                و الممرات واصلاح المصاعد وفي حالة المخالفة و عدم الدفع سيتم قطع
                الماء والكهرباء عن الشقة.
              </p>
              <p style="margin-bottom: 30px">
                27- لا يسمح للطرف الثاني استخدام مولدة خاصة لان توزيع الطاقة
                الكهربائية من مسؤوليات الطرف الاول.
              </p>
              <p style="margin-bottom: 30px">
                28- فيما يخص المصاعد على الطرف الاول تجهيزها والقيام بصيانتها
                سنوياً.
              </p>
              <p style="margin-bottom: 30px">
                29- يشمل هذا البيع اجزاء البناء المعدة للاستعمال المشترك هي
                الجدران المشتركة والمدخل والسلالم والمصاعد والسطح وكذلك حصة من
                الارض المقامة عليها العمارة بنسبة تعادل الوحدة السكنية منسوبة
                الى مجموع مسطح الشقة المبنية.
              </p>
              <p style="margin-bottom: 30px">
                30- يتعهد الطرف الثاني بعدم الاساءة الى سمعة الشركة بأي شكل من
                الاشكال او النشر باي طريقة من الطرق الاعلانية كأنشاء صفحات او
                مجموعات على مواقع التواصل الاجتماعي وغيرها بخلاف ذلك يحق للطرف
                الاول فسخ العقد دون انذار او استصدار حكم قضائي مع احتفاظ الطرف
                الاول بالمطالبة بالشرط الجزائي المنصوص عليه في الفقرة (15) من
                هذا العقد وكذلك التعويضات المادية التي تلحق الشركة.
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

            <img :src="rrr" style="width: 100%" alt="" />
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
          <v-container style="padding: 2px 25px">
            <img :src="ba" style="width: 100%" alt="" />
          </v-container>

          <v-container>
            <div>
              <p style="margin-bottom: 30px">31- اللغة والنسخ وملاحق العقد:</p>
              <ul style="list-style-type: none; margin-right: 25px">
                <li>أ-تكون اللغة العربية هي اللغة المعتمدة</li>
                <li>
                  ب- حرر هذا العقد من (9 صفحات) بـ (3) نسخ اصلاً على ان يتم
                  تسليم كل طرف نسخة من هذا العقد للعمل بموجبها
                </li>
              </ul>
              <strong> * ملاحق العقد </strong>
              <p style="margin-bottom: 30px">
                *ملحق رقم (1) المخطط الشمولي للمشروع.
              </p>
              <p style="margin-bottom: 30px">
                *ملحق رقم (2) مخطط الوحدة السكنية.
              </p>
              <p style="margin-bottom: 30px">*ملحق رقم (3) جدول التسديدات.</p>
              <p style="margin-bottom: 30px">
                يعتبر هذا العقد نافذا من تاريخ التوقيع عليه
              </p>
              <p style="margin-bottom: 30px">
                * يجب وضع توقيع الطرفين على كل صفحة من صفحات هذا العقد.
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
                <h3>الطرف الاول</h3>
                <h3>
                  شركة قه يوان للتجارة والمقاولات العامة المتمثلة بوكيل المدير
                  المفوض
                </h3>
                <h3>السيد: حارث رعد حسن</h3>
                <h3>التوقيع:</h3>
                <h3>تاريخ تنظيم العقد:</h3>
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
                <h3>الطرف الثاني</h3>
                <h3>السيد: {{ data.owner_name }}</h3>
                <h3>التوقيع:</h3>
              </v-col>
            </v-row>

            <img :src="rrr" style="width: 100%" alt="" />
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
    this.data = JSON.parse(localStorage.getItem("PrintAlrawan"));
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
        stringText(item) {
      return tafqeet(item);
    },
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
