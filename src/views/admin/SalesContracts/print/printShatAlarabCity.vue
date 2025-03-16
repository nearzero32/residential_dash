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
          <v-container style="padding: 20px 20px">
            <div>
              <h3 style="text-align: center">
                <strong>((عقد بيع دار سكنية في مدينة شط العرب السكنية ))</strong>
              </h3>
              <h3>
                <strong>رقم العقد: {{ data.contract_id }}</strong>
              </h3>
              <br />
              <h3>
                <strong>التاريخ: {{ data.createdAt }}</strong>
              </h3>
              <br />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h3 style="margin-bottom: 10px; font-weight: 400">
                الطرف الاول (البائع):- شركة امجاد مهد الرافدين للمقاولات العامة
                والاستثمارالعقاري محدودة المسؤولية والمتمثلة بـمديرها المفوض "السيد لؤي
                سامي صبري" المحترم أضافة الى وظيفته – العنوان البصرة /حي الجزائر.
              </h3>
              <h3 style="margin-bottom: 10px; font-weight: 400">
                والمخول بالتوقيع المحامي ياسر عامر عبد الجبار ، بموجب الوكالة الخاصة
                الصادرة من كاتب العدل العمومي في سفوان والتي تحمل العدد 1158 والمؤرخة في
                28/3/2022
              </h3>
              <div>
                <h3 style="margin-bottom: 15px">
                  <span style="border-bottom: solid">الطرف الاول (البائع) :</span>
                </h3>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">الاسم الثلاثي واللقب:</span> لؤي سامي
                  صبري القيسي
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">رقم هوية الاحوال المدنية:</span>
                  196709144508
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">العنوان:</span> البصرة _الجزائر
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">البريد الالكتروني:</span>
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">رقم الهاتف:</span>
                </h4>
              </div>
              <div>
                <h3 style="margin-bottom: 15px">
                  <span style="border-bottom: solid">الطرف الثاني (المشتري ) :</span>
                </h3>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">الاسم الثلاثي واللقب:</span>
                  {{ data.owner_name }}
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">رقم هوية الاحوال المدنية:</span>
                  {{ data.owner_id_number }}
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">العنوان:</span>
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">البريد الالكتروني:</span>
                  {{ data.email }}
                </h4>
                <h4 style="margin-bottom: 10px">
                  <span style="font-weight: 400">رقم الهاتف:</span> {{ data.owner_phone }}
                </h4>
              </div>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid">المقدمة :</span>
              </h3>
              <br />
              <p>
                حيث إن الطرف الاول (البائع) يروم بيع الوحدات السكنية التي انشأها في مدينة
                شط العرب السكنية المشيدة على القطعة المرقمة (10/7م 28 - قضاء شط العرب /
                مقاطعة 28 البيبان) استناداً الى إجازة الاستثمار المرقمة (105 ) والصادرة من
                هيئة استثمار البصرة وفق أحكام قانون الاستثمار رقم ( 13 ) لسنة 2006
                وتعديلاته اللاحقة بموجب العقد الموقع مع مديرية بلدية البصرة المرقم (105)
                بتاريخ 29.09.2014 وبما ان الطرف الثاني (المشتري) يرغب بالشراء من الطرف
                الاول لذا وبعد حصول الايجاب والقبول بين الطرفين فقد اتفقا وهما بالاهلية
                والصفة المعتبرة قانونا على البنود الوارد ذكرها في ادناه:
              </p>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid">البند الاول :الشرط الاساسي:</span>
              </h3>
              <p>يعتبر ما ورد في المقدمة اعلاه جزءاً لا يتجزاً من العقد موضوع البحث.</p>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند الثاني : وثائق ومستمسكات ومرفقات العقد</span
                >
              </h3>

              <ul style="list-style-type: none; margin-right: 15px">
                <li>
                  1- سند التسجيل العقاري الخاصة بالقطعة المرقمة (/10) مقاطعة 28 البيبان في
                  3مارس 2017
                </li>
                <li>2- خارطة الدارالتي تم التعاقد عليها.</li>
                <li>3- المستمسكات الشخصية للطرفين البائع والمشتري.</li>
                <li>
                  4- شهادة تسجيل شركة امجاد مهد الرافدين للمقاولات العامه والاستثمار
                  العقاري 13805.
                </li>
                <li>5- نسخة مصدقة من الوكالة المرقمة (1158) في 28/3/2022</li>
                <li>6- ملاحق العقد التي سوف تبرم لاحقاً.</li>
              </ul>
              <br />
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"> البند الثالث : وصف العقار:</span>
              </h3>
              <p>
                الوحدة السكنية المباعة تحمل الرقم( {{ data.house_name }} )والواقعة في
                القطاع (<span style="margin-inline: 60px"></span>) منطقة شط العرب رقم
                الدار ( {{ data.house_name }} ) وبمساحة الدار (
                {{ data.house_total_space }} ) متر مربع وصف الوحدة السكنية مثبت بكل
                تفاصيله بالخارطة المرفقة والمبين فيها المساحات والتي تعتبر جزء لا يتجزا من
                العقد.
              </p>
            </div>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gd"
        :style="`background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-container style="height: auto">
          <div class="diss" style="height: auto">
            <div style="height: 100%">
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند الرابع: البند المالي وألية الدفع:
                </span>
              </h3>
              <h4 style="font-weight: 400">
                1- آلية بيع الطرف الاول الى الطرف الثاني الوحدة السكنية التي ذكر وصفها في
                البند الثالث بمبلغ اجمالي قدره(
                {{ numberWithComma(data.salary_amount) }} ) مليون دينار عراقي نقداً وقد تم
                قبول الطرف الثاني بذلك على ان يتم دفع بدل البيع(
                {{ numberWithComma(data.salary_amount) }} ) خلال المدد الزمنية الموضحة في
                ادناه:
              </h4>
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
                  <tr style="background-color: rgb(217 217 217)">
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
                      style="background-color: rgb(217 217 217)"
                      v-if="salary_payment.payment_position == 'مقدم'"
                    >
                      دفعة المقدمة
                    </td>
                    <td
                      style="background-color: rgb(217 217 217)"
                      v-else-if="salary_payment.payment_position == 'دفعة الهيكل'"
                    >
                      دفعة الهيكل
                    </td>
                    <td
                      style="background-color: rgb(217 217 217)"
                      v-else-if="salary_payment.payment_position == 'اخر دفعة'"
                    >
                      الدفعة (دفعة التسليم)
                    </td>
                    <td style="background-color: rgb(217 217 217)" v-else>
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
          <div style="width: 100%; height: 200px; border: solid 1px black">* ملاحظه</div>
        </v-container>
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
          <v-container
            style="
              text-align: right;
              text-align: right;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            "
          >
            <div>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2- يلتزم الطرف الثاني بدفع مبلغ (700,000 سبعمائة الف دينار عراقي) في حال
                رغبته بالقرض العقاري ويشمل اتعاب المحاماة المتعلقة بمنح القرض.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                3- في حال عدم استحصال الموافقات الادارية للمبادرة البنكية يتم تسديد
                الدفعات المتبقية وفق ملحق عقد ينظم وبأتفاق الطرفين.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                4- يقوم الطرف الثاني بايداع الدفعات مستحقة الدفع من مبلغ شراء الوحدة
                السكنية والبالغ قيمتها (<span style="margin-inline: 60px"></span>)مليون
                دينار عراقي في حساب الطرف الاول المقيد لدى (المصرف العراقي الاسلامي
                للاستثمار والتنمية)-فرع البصرة بأسم (شركة امجاد مهد الرافدين للمقاولات
                العامة والاستثمار العقاري محدود المسؤولية) المرقم (125596)على ان يتم تسليم
                سند القبض الصادر من المصرف بنسخته الاصل الى الطرف الاول في مركز المبيعات
                الكائن في المجمع السكني .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                5- يقوم الطرف الثاني بالاضافة الى تسديد الاقساط دفع مبلغ مالي وقدره
                (2,000,000 ) مليونين دينار عراقي عن مصاريف تسجيل الدار السكنية بأسم الطرف
                الثاني كأتعاب محاماة وتدفع عند التسجيل.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                لا تشمل الاقساط اعلاه مبلغ تسجيل الدار السكنية في مديرية التسجيل العقاري
                ولا والضرائب المفروضة بموجب القانون.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                يدفع الطرف الثاني مبلغ (60,000) ستون الف دينار شهريا الى أدارة المدينة
                بشكل نقدي من مجموع كلفة الخدمات الواردة في هذا العقد وعن كل وحدة سكنية
                بإستثناء تجهيز خدمة الانترنيت ورسوم استهلاك الطاقة الكهربائية (الوطنية)
                ورسوم الاسالة ورسوم تجهيز الطاقة الكهربائية الخاصة (الامبيرية) ابتداً من
                تاريخ استلام الوحدة السكنية.
              </h4>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند الخامس : التزامات الطرف الاول:
                </span>
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                1- يلتزم الطرف الاول بتسليم الوحدة السكنية للطرف الثاني بعد (31.12.2028)
                من تاريخ توقيع هذا العقد وبعد ان يسدد الطرف الثاني كافة التزاماته المالية
                حسب العقد المرقم(2502461)في (10.02.2025).
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2- يلتزم الطرف الاول بأن الوحدة السكنية خالية من الرهون والديون واي تبعات
                قانونية أخرى .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                3- يلتزم الطرف الاول بتسجيل الوحدة السكنية بـأسم الطرف الثاني لدى دائرة
                التسجيل العقاري بعد سداده كامل بدل البيع وإصدار سند للوحدة السكنية بأسمه
                خلال فترة زمنية مناسبة مالم تتسبب الاجراءات الحكومية او الظروف الخارجة عن
                ارادة الطرف الاول التي من شأنها أن تأخر التسجيل.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                4- يلتزم الطرف الاول بصيانة الوحدة السكنية وتصليح أي اعطال في الاعمال
                المدنية والميكانيكية والكهربائية والصحية عدا الاضرار والاعطال الناجمة عن
                سوء الاستخدام او الاهمال من الطرف الثاني ولمدة سنة من تاريخ توقيع محضر
                الاستلام.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                5- تقتصر مسؤولية الطرف الاول في تنفيذ الخدمات داخل ارض المشروع فقط ويتحمل
                الطرف الاول أي تأخير في ايصال الخدمات ناتج عن تلكؤ الدوائر الخدمية مثل
                (البلدية ,الماء ,المجاري ,الكهرباء وغيرها ) وما يدخل ضمن القوة القاهرة او
                الظروف الطارئة وتشمل الخدمات المقدمة من الطرف الاول الفقرات الواردة في
                البند السابع من العقد.
              </h4>
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
          <v-container
            style="
              text-align: right;
              text-align: right;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            "
          >
            <div>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند السادس : التزامات الطرف الثاني:
                </span>
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                1- يقر الطرف الثاني بأنه قد عاين واطلع على موقع الوحدة السكنية والمخططات
                ومواد بناء الوحدة السكنية الداخلية والخارجية ومواصفاتها وقد وافق على
                الشراء وتوقيع العقد بكافة تفاصيله
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2- في حالة تأخر الطرف الثاني او امتناعه عن السداد في الموعد المقرر لدفع
                المبالغ المالية للوحدة السكنية حسب ما تم ادراجه في البند الرابع يعتبر
                الطرف الثاني قد اخل بأحد بنود العقد وعليه :
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                يتحمل التبعات القانونية المترتبة عن هذا الاخلال والمتمثلة بفسخ العقد دون
                الحاجة الى الاخطار مما يترتب سقوط حق الطرف الثاني بملكية الوحده السكنية
                وتعاد له فقط المبالغ المدفوعه ً من قبله بعد ان يتم خصم نسبة(30%) من تلك
                المبالغ المتمثلة بفوات المنفعة وما تكبده الطرف الاول من اضرار لحقته نتيجة
                اخلال الطرف الثاني ببنود العقد ويعاد اليه المبلغ المتبقي بعد الخصم خلال
                مدة (ثلاثون يوما) من تاريخ فسخ العقد .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                3- لايحق للطرف الثاني بيع اوهبه او رهن او ايجار الوحدة السكنية الا بعد
                تسديد كامل ثمن الوحدة السكنية .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                4- لايتحمل الطرف الاول اي ضرائب او رسوم تخص المشتري تتقاضاها دوائر الدولة
                المختلفة جراء تسجيل الوحده السكنية باسم المشتري وبهذا فان تسديد هذه الرسوم
                والضرائب الشخصية ان وجدت تكون من مسؤولية الطرف الثاني حصراً.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                5- يتم استلام الوحدة السكنية بمحضر استلام رسمي يتضمن عدة فقرات تدرج باتفاق
                الطرفين يوقع من قبل الطرف الثاني يثبت انه استلم الوحدة السكنية جاهزة
                ومستوفاة للشروط الهندسية والقانونية حسب ما متفق عليه وبعد ان يسدد الطرف
                الثاني كامل ثمن الوحدة السكنية .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                6- لايحق للطرف الثاني استخدام الوحدة السكنية استخدامات أخرى غير السكن ويتم
                تقديم تعهد خطي عند استلامه الوحدة بعدم استقبال او ايواء اي شخص مطلوب
                للسلطات العراقية لأي سبب كان او استخدام الدار بشكل يضر المجمع السكني او
                يتعارض مع القانون او الاعراف الاجتماعية والاخلاقية والنظام العام.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                7- يكون الطرف الثاني (المشتري) مسؤول مسؤولية كاملة عن الوحدة السكنية التي
                اشتراها وملزم بدفع أجور الماء والكهرباء والانترنيت والتنظيف او اي خدمات
                أخرى تقدم له.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                8- يلتزم الطرف الثاني باستلام الوحدة السكنية خلال مدة (أربعة عشر يوما ) من
                تاريخ تبليغه من قبل الطرف الاول (من خلال الهاتف او التبليغ المباشر او عن
                طريق البريد الالكتروني او احد طرق التواصل الاجتماعي) وتبدأ فترة الصيانة
                بعد مدة (واحد وعشرون يوما )من تاريخ اشغال الوحدة السكنية ويعتبر العقد
                مفسوخا في حال رفض الطرف الثاني إستلام الوحدة السكنية ويتحمل كافة
                الالتزامات المالية الخاصة بفسخ العقد .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                9 - يلتزم الطرف الثاني بالحفاظ على نظافة المدينة والشوارع والحدائق وعدم
                رمي النفايات بغير اماكنها المخصصة وبخلافه يتم محاسبة المقصرين وتضمينهم
                مبالغ مالية.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                10- الالتزام بمبدأ النظافة وعدم رمي النفايات في الاماكن غير المخصصة لها
                وبخلاف ذلك يتم محاسبه المقصرين.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                11- التعهد بعدم العبث بالممتلكات العامة والمتضمنة (الشوارع العامة
                -الحدائق-اماكن لعب الاطفال-الملاعب الرياضية - قاعات الرشاقه -المسابح-
                اعمدة الانارة-اسلاك الكهرباء-الاسواق)وبخلاف ذلك يتم محاسبة المقصرين بالشكل
                القانوني وتغريم مبالغ الضرر واخذ تعهدات خطية بعدم تكرارها مستقبلا.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                12 - الالتزام بترشيد استخدام الكهرباء والماء وإصلاح أي ضرر يصيبها بأسرع
                وقت .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                13 - عدم إقامة المناسبات الاجتماعية في الشوارع واقامتها في القاعات
                والاماكن المخصصة لذلك فقط.
              </h4>
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
          <v-container
            style="
              text-align: right;
              text-align: right;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            "
          >
            <div>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid">البند السابع : الخدمات: </span>
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                يقوم الطرف الاول بتقديم الخدمات الواردة تفاصيلها في الفقرات ادناه:
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                أ‌- رفع النفايات بشكل يومي من الحاويات المخصصة لذلك وبوقت محدد حصرا.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ب‌- غسل الشوارع مرة في الاسبوع .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ت‌- الحفاظ على جمالية الحدائق وعدم العبث بها.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ث‌- توزيع أكياس النفايات.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ج‌- تجهيز حاويات النفايات مع تعهد الطرف الثاني بالحفاظ عليها وعلى نظافتها.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ح‌- إدارة حراسة البوابة والموقع.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                خ‌- إدارة كاميرات المراقبة للمدينة .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                د‌- الصيانة العامة للمدينة .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                ذ‌- إدارة محطة دفع المجاري.
              </h4>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid">البند الثامن : النزاعات: </span>
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                في حال حصول نزاع بين الطرفين عن تنفيذ وتفسير بنود هذا العقد فيتم حله ودياً
                واذا تعذر فتكون محاكم البصرة هي المختصة في نظره والتي تفصل فيه وفق احكام
                القانون العراقي.
              </h4>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند التاسع :الاخلال ببنود العقد :</span
                >
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                1- في حال اخلال الطرف الثاني بالتزاماته المثبتة في هذا العقد فيحق للطرف
                الاول فسخ العقد بعد توجيه انذار تحريري الى الطرف الاول المخل بأزالة خلال
                مدة أقصاها (15 ) يوم من تاريخ انتهاء الانذار,والمراد بالاخلال هنا هو
                الاخلال المادي اما الاخلال بتسديد الاقساط التي تخص الوحدة السكنية فيصار
                الى ما ذكر في البند السادس الفقرة الثانية, اي لايستوجب الاخطار او الانذار
                هنا.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2- في حالة استمرار الطرف الثاني بعدم تسديد أقساط الثمن للوحدة السكنية
                المباعة والمثبتة في بنود هذا العقد وانقضاء مدة (15) يوم دون الحاجة الى
                تبليغه, فيترتب بذمة الطرف الثاني حق الطرف الاول إضافة الى فسخ العقد غرامة
                تأخيرية مقدارها(10%) من قيمة القسط المستحق , ويحق للطرف الأول فسخ العقد من
                جانبه ودون الحاجة الى حكم قضائي أضافة الى استقطاع (30%) وحسبما تم ذكره في
                الفقرة(2) من البند السادس .
              </h4>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند العاشر : الظروف الطارئة والقوة القاهرة:</span
                >
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                في حال تعذر الطرف الاول عن تنفيذ هذا العقد نتيجة لظروف طارئة او قاهرة
                خارجة عن ارادته يتم اعتبارها ضمن فترة العقد ويلتزم الطرفان بالفقرات ادناه:
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                1- الابلاغ عن ماهو الظرف الطارئ او القوة القاهرة خلال (72 ساعة)على ان تكون
                خلال ايام العمل الرسمي لضمان اجراء لقاء مشترك بين الطرفين المتعاقدين
                لايجاد حل مناسب لتجاوز الظرف الطارئ او القوة القاهرة وكذلك اعتماد التبليغ
                من خلال البريد الالكتروني المعتمد والمثبت ما بين الطرفين .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2- عند استمرار الظرف الطارئ او القوة القاهرة لاكثر من الفترة الواردة في
                الفقرة (1) أعلاه تعلق التزامات الطرفين بما فيها الالتزامات المالية وتضاف
                فيما بعد الى مدة اضافية متفق عليها تضاف بملحق عقد للعقد الرئيسي مع الاخذ
                بنظر الاعتبار ماجاء في البند رقم تسعة /فقرة 2 (الغرامات التأخيرية).
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                3- عند امتداد الظرف الطارئ او القوة القاهرة لمدة تجاوزت المدة المضافة
                بأتفاق الطرفين والتي ثبتت في ملحق عقد للعقد الرئيسي ,يعقد الطرفان
                المتعاقدان لقاء مشترك ويتم تأجيل التزامات طرفي العقد او احداهما في الوقت
                الحاضر كون الاسباب او الظروف الناشئة خارجة عن ارادتهما على ان يثبت هذا في
                محضر مشترك يوقع عليه طرفي العقد.
              </h4>
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
          <v-container
            style="
              text-align: right;
              text-align: right;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            "
          >
            <div>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                4- في حالة توقف اعمال تنفيذ المشروع بسبب القوة القاهرة لإي بسبب أي إن
                الظرف القاهر خارج عن إرادة الطرف الاول والتي تشمل على سبيل
                المثال:(الحرب,اعمال الحرب والعدوان,الغزو,الاعمال والاعتداءات الارهابية
                ،التلوث الشعاعي ,الثورة ,الشغب ,التمرد والعصيان المدني ,الاضراب،الانقلاب،
                الكوارث الطبيعية كالأعصار والزلزال والعواصف ) او بسبب قرار اداري صادر عن
                السلطات العراقية يحول توقف العمل في المجمع السكني فيتم التوقف عن احتساب
                المدة الزمنية المنصوص عليها في إجازة استثمار المشروع واضافة مدة توقف الى
                المدة الاصلية لتنفيذ المشروع حال الرجوع للتنفيذ مجددا.
              </h4>
              <h3 style="margin-bottom: 15px">
                <span style="border-bottom: solid"
                  >البند الحادي عشر : الاحكام العامة:</span
                >
              </h3>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                1 - لايتحمل الطرف الاول تكاليف اصلاح أي ضرر يصيب خدمات ومرافق الشارع اذا
                كان المتسبب به شخص محدد او اكثر ويلتزم الشخص الذي تسبب بالضرر( اياً كان)
                باصلاح الضررعلى حسابه الخاص حيث ان مسؤولية الحفاظ على الممتلكات تقع
                بالاساس على عاتق سكان المدينة وبخلافه يتم محاسبة المقصرين .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                2 - الصيانة من قبل الطرف الاول تشمل الاخلال الذي يقع بسببه حصرًا اما
                الاضرار التي تحصل بسبب سوء الاستخدام او الاهمال فيتحملها الطرف الثاني .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                3 - تسري جميع احكام القوانين النافذة في محاكم الجمهورية العراقية على كافة
                بنود العقد من الناحية القانونية
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                4- يحق للطرف الاول تمديد فترة التسليم بحسب متطلبات العمل.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                5- الدفعة الاولية المدفوعة عند توقيع العقد والتي تمثل نسبة (20%) من قيمة
                العقد تكون غير قابلة للرد في حالة الفسخ بناء على طلب الطرف الثاني شريطة
                عدم دفعه بقية الأقساط المالية المتبقية للوحدة السكنية وفي حالة دفعه لأكثر
                من مبلغ العربون (القسط الاول) فتنطبق في هذه الحالة الفقرة 2 البند التاسع .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                6- يحق لطرفي العقد ابرام ملاحق وبأتفاق الطرفين .
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                7- في حالة حدوث أي امر يخل بالنظام العام والاَداب العامة اياً كان نوعها
                بما فيها النزاعات العشائرية والتي من شأنها ان تزعزع أمن واستقرار الساكنين
                يتم فسخ العقد وارجاع الحال كما هو عليه قبل التوقيع.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                8- في حالة رغب الطرف الثاني بيع الوحدة السكنية بعد استلامها من الطرف الأول
                وتسجيلها باسمه لدى دائرة التسجيل العقاري الى الغير فيكون ملزماً بدفع مبلغ
                مالي الى الطرف الأول قدره 2% من مبلغ بيع الوحدة السكنية وبعد ان يستحصل
                موافقة خطية من الطرف الأول عن بيعه الوحدة السكنية إضافة الى مبلغ مالي قدره
                ( 2,000,000 ) مليون دينار عن أجور ومصاريف تصرف لمحامي الطرف الأول وذلك عن
                نقل ملكية الوحدة السكنية من الطرف الثاني وتسجيلها باسم الغير
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                9 - في حال امتناع الطرف الثاني عن سداد ثلاث دفعات متتالية يعتبر العقد
                مفسوخاً من تلقاء نفسه بعد توجيه انذار يمنح فيه الطرف الثاني مدة 15 يوم
                لغرض تصحيح الوضع.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                10 - لا تحتسب أيام العطل والمناسبات ضمن جدولة أيام العمل والانجاز وتضاف
                مدة التوقفات الى فترة التسليم.
              </h4>
              <h4 style="margin-bottom: 10px; font-weight: 400">
                حرر هذا العقد وتم توضيحه من قبل الطرفين ب( 2 ) نسخة بالشكل القانوني وقد
                استلم الطرفين نسخة منه للعمل بموجبها.
              </h4>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <h3 style="margin-bottom: 15px">
                  <span style="border-bottom: solid">الطرف الاول ( البائع )</span>
                </h3>
                <br />
                المخول بالتوقيع المحامي ياسر عامر عبد الجبار
                <br />
                بمــوجب الوكالــة الخاصــة بالعــدد 1158 فــي
                <br />
                /3/2022 الصادرة في دائرة كاتب عدل سفوان
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                <h3 style="margin-bottom: 15px">
                  <span style="border-bottom: solid">الطرف الثاني ( المشتري )</span>
                </h3>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import numberWithComma from "@/constant/number";
import tafqeet from "@/constant/Tafqeet.js";

export default {
  data() {
    return {
      data: {},
      user: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintShatAlarabCity"));
    console.log(this.data);
    this.user = JSON.parse(localStorage.getItem("results"));
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
    stringText(item) {
      return tafqeet(item);
    },
    numberWithComma,
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
