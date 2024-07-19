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
              <h3>
                <strong>العدد: {{ data.contract_id }}</strong>
              </h3>
              <br />
              <h3>
                <strong>التاريخ: {{ data.createdAt }}</strong>
              </h3>
              <br />
              <h3 style="text-align: center">
                <strong>م/إقرار</strong>
              </h3>
              <br />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <br />
              <h3>
                يقر الطرف الثاني ( {{ data.owner_name }} ) بانه على علم تام
                بموقع الشقة والطابق والعماراة وقد اطلع على الرسومات الهندسية
                للمشروع وطابقها على ما سيتم تنفيده في الطبيعة ووافق عليها ومن حق
                الطرف الأول اجراء تعديلات معمارية بسيطة تصب في مصلحة عمل المشروع
                معمارياً على ان لا تتجاوز 10% من مساحة المشروع .
              </h3>
              <br />
              <br />
              <br />
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
              </v-col>
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
                        v-else-if="
                          salary_payment.payment_position == 'دفعة الهيكل'
                        "
                      >
                        دفعة الهيكل
                      </td>
                      <td
                        style="background-color: rgb(217 217 217)"
                        v-else-if="
                          salary_payment.payment_position == 'اخر دفعة'
                        "
                      >
                        الدفعة (دفعة التسليم)
                      </td>
                      <td style="background-color: rgb(217 217 217)" v-else>
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
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="padding: 20px 20px">
            <div>
              <h3>
                <strong>العدد: {{ data.contract_id }}</strong>
              </h3>
              <br />
              <h3>
                <strong>التاريخ: {{ data.createdAt }}</strong>
              </h3>
              <br />
              <h3 style="text-align: center">
                <strong>بسم الله الرحمن الرحيم</strong>
              </h3>
              <br />
              <h3 style="text-align: center">
                <strong>عقد بيع شقة سكنية</strong>
              </h3>
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h3><strong>التمهيد:</strong></h3>
              <br />
              <p>
                بما ان الطرف الاول صاحب القطعة المرقمة 1124 الخر ملك صرف لما كان
                اختصاص الشركة هو تطوير الاراضي وتحويلها الى مجمعات سكنية متكاملة
                الخدمات.
              </p>
              <p>
                فأن الشركة المتمثلة بالطرف الاول المالكة والمنفذة للمشروع طرحت
                وحدات سكنية تتكون من 700 الى 850 شقة. بواقع 3 أبراج يتكون كل برج
                48.44.38 طابق + 5 بارك لكل برج علماً ان المجمع متكامل الخدمات
                ليوفر حياة معاصرة للمواطن بالإضافة الى تأمينه بالحراسات الامنية
                لمدة 24 ساعة / يوم مع توفير الكهرباء على مدار 24 ساعة وخدمات
                توصيل الغاز بنظام الانابيب الواصلة الى كل شقة.
              </p>
              <h5>
                <strong>الطرف الاول البائع: </strong> الدكتور (حارث رعد حسن)
              </h5>
              <h5>
                <strong>اسم الشركة: </strong> شركة المرس للمقاولات والتجارة
                العامة
              </h5>
              <h5><strong>اسم المدير المفوض للشركة: </strong> حارث رعد حسن</h5>
              <br />
              <h5><strong>اسم المشروع: </strong> أبراج الفاخر السكني</h5>
              <h5>
                <strong>عنوان المشروع: </strong> بغداد / القادسية على القطعة
                المرقمة 1124 الخر قرب جزيرة الاعراس السياحية
              </h5>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <!-- <v-container style="padding: 20px 20px">
            <div>
              <h3><strong>العدد: 46</strong></h3>
              <br />
              <h3><strong>التاريخ:12 /03/2024</strong></h3>
              <br />
              <h3 style="text-align: center">
                <strong>بسم الله الرحمن الرحيم</strong>
              </h3>
              <br />
              <h3 style="text-align: center">
                <strong>عقد بيع شقة سكنية</strong>
              </h3>
            </div>
          </v-container> -->
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
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                الطرف الثاني المشتري السيد:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_name
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                اسم المشتري الثلاثي السيد:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_name
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                رقم البطاقة الشخصية:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_id_number
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                جهة الاصدار:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_id_place_of_issue
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                تاريخ الإصدار:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_id_issue_date
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                رقم بطاقة السكن:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_id_residence_card_number
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                عنوان بطاقة السكن:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_id_residence_card_place_of_issue
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                رقم الموبايل:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_phone
                }}</span>
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                العنوان الوظيفي او المهنة:
                <span style="color: black; margin-right: 3px">{{
                  data.owner_title_jop
                }}</span>
              </h3>
              <h3 style="margin-bottom: 9px">
                في حال تعذر الوصول الى المشتري يتم الاتصال على:
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                اسم الشخص البديل:
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                رقم الشخص البديل:
              </h3>
              <h3 style="color: red; font-weight: 100; margin-bottom: 9px">
                عنوان الشخص البديل:
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                1- باع الطرف الاول بموجب هذا العقد الى الطرف الثاني الشقة
                المرقمة ( {{ data.house_name }} ) في الطابق المرقم (
                {{ data.house_floor_number }} ) في العمارة (
                {{ data.exact_apartment_building }} ) في أبراج الفاخر السكني
                لغرض السكن العائلي بما يتناسب مع غرض المشروع وبمبلغ اجمالي قدره(
                {{ numberWithComma(data.salary_amount) }} ) , مليون دينارعراقي
                وكتابةً (<br /><span style="margin-inline: 200px"></span>) علماً
                ان مساحة الشقة السكنية {{ data.house_total_space }} م2 مع
                الخدمات وصافي مساحة الشقة {{ data.house_building_space }}م2
              </h3>
              <h3 style="font-weight: 100">
                2- في حال تم ارتفاع سعر تصريف الدولار مقابل دينار العراقي أكثر
                من 1750 دينار للدولار الواحد يعتبر ظرف طارئ يجب تعويض الطرف
                الأول من قبل الطرف الثاني بالفرق السعري بين السعرين علما ان سعر
                الشركة اعتمد بالدينار العراقي عند توقيع العقد ويتم احتسابه
                بالاعتماد على سعر التصريف 1320 دينار لكل دولار.
              </h3>
              <h3 style="font-weight: 100">
                3- يقوم الطرف الثاني بدفع مبلغ الشقة الى الطرف الاول كما يلي:
                <ul style="margin-right: 20px; list-style-type: none">
                  <li>
                    أ-عند توقيع العقد يتم دفع نسبة (16%) دفعة اولى وعندا اكتمال
                    الهيكل يتم دفعة نسبة (14%) و عندا انجاز البناء نسبة (95%)
                    يتم دفع بنسبة (20%) وباقي المبلغ يوزع بنسبة (50%) على 40 شهر
                    يدفع شهريا او كل (3) أشهر دفعة لمدة لا تتجاوز 40 شهر من
                    تاريخ توقيع هذا العقد.
                  </li>
                  <li>
                    ب- يقوم المشتري بدفع الدفعة الاولى الى المصرف العراقي
                    الاسلامي وجلب فيش التوديع وتسليمها الى الموظف القانوني
                    واتمام عملية توقيع العقد في حال عدم تسليم نسخة الفيشة
                    المدفوعة الاصلية الى الموظف القانوني لا تعتبر الدفعة
                    المدفوعة الى الشركة بالنسبة للمقدمة والدفعات.
                  </li>
                  <li>
                    ج- في حال تأخر الطرف الثاني عن جدول تسديد المستحقات المالية
                    المرفق طياً التي بذمته في اوقاتها المحددة لفترة تتجاوز ال
                    (7)ايام يقوم الطرف الاول بتوجيه انذار بواسطة كاتب العدل مرة
                    واحدة بوجوب دفع المستحقات المالية التي بذمته وخلال مدة اسبوع
                    من تاريخ توجيه الانذار او التبليغ وعند عدم التسديد يعتبر
                    العقد مفسوخا من تلقاء نفسه دون الحاجة الى اصدار حكم قضائي مع
                    احتفاظ الشركة بحقها باعتبار المبلغ المدفوع عند توقيع العقد
                    غير قابل للرجوع بأي شكل من الاشكال و في حال كان هناك دفعات
                    مدفوعة غير الدفعة الاولية تكون الشركة غير مسؤولة عن
                    استرجاعها الا في حالة بيع الشقة الى زبون ثاني و حسب تسديدات
                    الزبون الثاني يتم الاسترجاع على ان لا تتحمل الشركة اي خسائر
                    مالية بسبب بيع الشقة الى زبون ثاني .
                  </li>
                  <li>
                    د- يتحمل المشتري غرامة تأخيريه مقدارها (10) دولار عن كل يوم
                    تأخير في تسديد الدفعات وتحسب من تاريخ الدفعة المستحقة.
                  </li>
                </ul>
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                4- يتعهد الطرف الاول بتسليم الطرف الثاني الشقة السكنية محل العقد
                بعد 40 شهر عمل من تاريخ التعاقد اي من تاريخ ابرام العقد بشرط ان
                يكون الطرف الثاني قد ادى كل ما عليه من التزامات واردة بهذا
                العقد.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                5- اتفق الطرفان على انه لا يجوز للطرف الثاني التصرف في الوحدة
                محل العقد سواء بالبيع او التنازل او الهبة او المطالبة بنقل
                الملكية او التسجيل الا بعد سداد كامل البدل او الحصول على موافقة
                تحريرية من الطرف الاول وفي حينها تطبق الفقرة (4).
              </h3>
              <br />
              <h3 style="font-weight: 100">
                6- لا يجوز تغيير عقد الشقة باسم مستفيد ثاني بدون موافقة الشركة
                الطرف الاول وفي حال وافقت الشركة على التغيير يلتزم الطرف الثاني
                بدفع مبلغ (1% (دولار من القيمة السعرية للشقة الى الطرف الاول.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                7- يلتزم الطرف الاول البائع بأن الوحدة السكنية المباعة محل هذا
                العقد خالية من كافة الحقوق أياً كان نوعها ظاهرة او خاصة مثل حقوق
                الامتياز والرهن والوقف والحكر وحقوق الانتفاع.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                8- في حال لم يتم تسليم مفاتيح الوحدة السكنية الى الطرف الثاني في
                الوقت المحدد عندها يكون الطرف الاول مسؤول عن دفع مبلغ من المال
                قدره (10) دولار عن كل يوم تأخير للطرف الثاني ولغاية 100 يوم كحد
                اقصى باستثناء الظروف القاهرة التي تؤدي الى تأخير العمل.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                9- يلتزم الطرف الاول بتسليم الطرف الثاني الوحدة السكنية محل
                العقد كاملة التشطيب وطبقا للأصول الفنية والمهنية وطبقا للرسومات
                والمواصفات الفنية المقدمة من الطرف الاول لهيئة الاستثمار بغداد
                وامانة بغداد كما ويلتزم بتنفيذ مرافق البناء المشتركة للعقار
                وجعلها صالحة للاستخدام على الوجه الاكمل بما فيه البنى التحتية
                (من خطوط الماء والصرف الصحي والكهرباء والحدائق العامة والشوارع
                والارصفة).
              </h3>
              <br />
              <h3 style="font-weight: 100">
                10-يتحمل الطرف الثاني كافة الرسوم والمصاريف القانونية الخاصة
                بالتسجيل في دائرة التسجيل العقاري المختصة وعلى الطرف الثاني دفع
                مبلغ قدره (1000) دولار لا غير كأتعاب محاماة الى الطرف الاول
                مقابل سير الاجراءات القانونية الخاصة بتسليم السند.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                11- بعد تسليم الشقة الى الطرف الثاني وقام بتسديد كافة الدفعات
                يلتزم الطرف الاول بتسجيل الشقة بدوائر التسجيل العقاري باسم الطرف
                الثاني على ان يتحمل الطرف الثاني (وحده) كافة الرسوم والضرائب
                والمصاريف المترتبة على اصدار سند الشقة ومن تاريخ استلامه الشقة.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                12- يقر الطرف الثاني (تحريرياً) بانه على علم تام بموقع الشقة
                والطابق والعمارة وقد اطلع على الرسومات الهندسية للمشروع وطابقها
                على ما سيتم تنفيذه في الطبيعة ووافق عليها ومن حق الطرف الأول
                اجراء تعديلات معمارية بسيطة تصب في مصلحة عمل المشروع معماريا على
                ان لا تتجاوز 10% من مساحة المشروع.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                13- تطبق القوانين العراقية على هذا العقد وتكون المحكمة بداءة
                الكرخ هي صاحبة الاختصاص المكاني للنظر في الدعاوي الناشئة عن أي
                اخلاف.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                14- في حالة توقف اعمال تنفيذ المشروع بسبب القوة القاهرة اي بسبب
                اي ظرف خارج عن ارادة الطرف الاول والتي تشمل على سبيل المثال
                الحرب , اعمال الحرب و العدوان , الاعمال والاعتداءات الارهابية
                ,التلوث الشعاعي , التمرد والعصيان المدني , الاضراب , الانقلاب ,
                الكوارث الطبيعية ( الاعصار و الزلزال و العواصف او الاوبئة و تفشي
                الامراض والتغير الصرفي في سعر الدينار العراقي مقابل الدولار
                الأمريكي ) التي تؤدي الى توقف او شبه توقف في العمل او بسبب اي
                قرار اداري صادر عن السلطات العراقية فيتم التوقف عن احتساب المدة
                الزمنية المنصوص عليها في هذا العقد .
              </h3>
              <br />
              <h3 style="font-weight: 100">
                15- تنتقل الحقوق المكتسبة بموجب هذا العقد لطرف الثاني الى الورثة
                في حالة الوفاة وحسب الاحكام العامة للقانون بشرط ان لا تكون بذمة
                المورث أي مبالغ مالية للشركة من أقساط وغيرها وتطبيق قاعدة لا
                تركه الا بعد سداد الديون.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                16- يتم إيقاف عملية نقل الملكية الى الطرف الثاني إذا كان عليه
                حجز او مطلوب قانونا او مدين لأي جهة معينة عليه ان يقدم الطرف
                الثاني حلأ قانونيا خلال مدة 3 أشهر وبخلافه يعتبر العقد مفسوخا
                ويقوم الطرف الأول بإعادة المبالغ المستلمة بعد خصم نسبة 20% من
                قيمة الدفعات المستلمة ويحق للطرف الأول القيام بعرض بيع الوحدة
                السكنية مرة أخرى ولا يحق للطرف الثاني مطالبة الطرف الأول بأي
                تعويض مالي.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                17- في حال رغبة الطرف الثاني بفسخ هذا العقد او الرجوع عنه لا يحق
                للطرف الثاني المطالبة باسترجاع الدفعة الاولى المقدمة المدفوعة
                عند توقيع العقد بأي شكل من الاشكال وفي حال كان هناك دفعات مدفوعة
                غير الدفعة الاولية تكون الشركة غير مسؤولة عن استرجاعها الا في
                حال بيع الشقة الى زبون ثاني وحسب تسديدات الزبون الثاني يتم
                الاسترجاع على ان لا تتحمل الشركة اي خسائر مالية بسبب بيع هذه
                الشقة الى زبون ثاني في حال انخفاض سعر الشقة عن سعر البيع في هذا
                العقد.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                18- يتفق الطرفان على شرط جزائي قدره مبلغ الدفعة المقدمة عند
                توقيع العقد في حال رغبة الطرف الثاني فسخ هذا العقد او الرجوع عنه
                بشرط ان يكون الطرف الثاني قد ادى ما عليه من التزامات وارده في
                هذا العقد وفي حال كانت قيمة المبالغ المسددة أكثر من مبلغ المقدمة
                فلا يحق للطرف الثاني المطالبة باسترجاعها الابعد قيام الطرف الاول
                ببيع الشقة الى زبون اخر بنفس سعر الشراء او أكثر.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                19- تعتبر العناوين المذكورة في العقد هي العناوين الرسمية في
                المخاطبات والرسائل والانذارات.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                20- في حالة قيام أحد الاطراف بتغيير عنوانه يلتزم بأشعار الطرف
                الاخر خلال مدة 7 ايام من تاريخ تغيير العنوان.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                21- في حالة نشوب اي نزاع بين الطرفين فيتم حله بالطرق الاتية:
                <ul style="margin-right: 20px; list-style-type: none">
                  <li>ا- يتم حل النزاع ودياً.</li>
                  <li>
                    ب- في حالة عدم حل النزاع ودياٌ يتم حله عن طريق التحكيم من
                    خلال اشخاص ذوي خبرة.
                  </li>
                  <li>
                    ج- في حالة عدم اتفاق الطرفين على اختيار المحكمين يتم حل
                    النزاع باللجوء الى المحاكم العراقية وتطبيق القوانين العراقية
                    لحل النزاع.
                  </li>
                </ul>
              </h3>
              <br />
              <h3 style="font-weight: 100">
                22- يلتزم الطرف الثاني بتنفيذ كافة التعليمات الصادرة من ادارة
                المجمع بما يحفظ امن وسلامة الساكنين داخل المجمع المذكورة لاحقاً.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                23- يلتزم الطرف الثاني بإيقاف سيارته في الاماكن المحددة لإيقاف
                السيارات الخاصة بالعمارة ولكل شقة حق استخدام كراج واحد فقط
                وبخلافة يجب على صاحب الشقة دفع أجور اشتراك شهري او شراء مساحة
                وقوف ثانية.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                24- يلتزم الطرف الثاني بعدم تشويه المنظر الخارجي للبناية بما
                فيها الاستخدام غير الحضاري للبلكونات مثل تعليق الملابس وغيرها.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                25- لا يجوز للطرف الثاني او خلفه العام او الخاص عمل تعديلات
                خارجية في الواجهات او السلالم او المناور او تغيير الالوان
                الخارجية للواجهات سواء في الجدران والبلكونات وفي الشبابيك من جهة
                الخارج او الداخل.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                26- لا يجوز للطرف الثاني نصب انترنيت خارجي بما يشوه منظر البناية
                حيث تقوم الشركة بإيصال خدمة الانترنيت الى داخل الشقة مقابل اجور
                التنصيب والاشتراك تدفع الى الشركة المجهزة بخدمة الانترنيت.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                27- لا يجوز للطرف الثاني نصب الستالايت في الشرفة او فوق العمارة
                لان الطرف الاول يقوم بنصب ستالايت مركزي بدون مقابل.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                28- كلفة التنظيف ستكون على عاتق الطرف الثاني بكلفة قدرها لا يقل
                عن (100 ألف دينار عراقي او أكثر) تدفع شهريا للطرف الاول ويشمل
                اجور التنظيف ورفع النفايات وادامة الحدائق الانارة الخارجية وامن
                وحماية المجمع والممرات واصلاح المصاعد وفي حالة المخالفة وعدم
                الدفع سيتم قطع الماء والكهرباء عن الشقة.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                29- فيما يخص المصاعد على الطرف الاول تجهيزها والقيام بصيانتها
                سنوياً.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                30- يشمل هذا البيع اجزاء البناء المعدة للاستعمال المشترك هي
                الجدران المشتركة والمدخل والسلالم والمصاعد والسطح وكذلك حصة من
                الارض المقامة عليها العمارة بنسبة تعادل الوحدة السكنية منسوبة
                الى مجموع مسطح الشقة المبنية. وبالمقابل لا يمكن للطرف الثاني
                التعرض من خلال التقاضي الى أي مما ذكر فنصيبه من الملكية الشائعة
                يخضع لقرارات إدارة المجمع حصرا.
              </h3>
              <br />
              <h3 style="font-weight: 100">
                31- يتعهد الطرف الثاني بعدم الاساءة الى سمعة الشركة بأي شكل من
                الاشكال او النشر باي طريقة من الطرق الاعلانية كأنشاء صفحات او
                مجموعات على مواقع التواصل الاجتماعي (واتساب والماسنجر) وعدم عرض
                وحدة سكنية عند مكاتب الدلالين وغيرها
              </h3>
              <br />
              <h3 style="font-weight: 100">
                32- بخلاف ذلك يحق للطرف الاول فسخ العقد دون انذار او استصدار حكم
                قضائي مع احتفاظ الطرف الاول بالمطالبة بالشرط الجزائي المنصوص
                عليه في الفقرة (15) من هذا العقد وكذلك التعويضات المادية مقابل
                الضرر الذي يلحق الشركة.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <br />
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير
                    المفوض</strong
                  >
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
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
          <v-container style="text-align: right">
            <div>
              <h3 style="font-weight: 100">
                -33اللغة والنسخ وملاحق العقد:
                <ul style="margin-right: 20px; list-style-type: none">
                  <li>أ-تكون اللغة العربية هي اللغة المعتمدة</li>
                  <li>
                    ب- حرر هذا العقد من (9 صفحات) بـ (3) نسخ اصلاً على ان يتم
                    تسليم كل طرف نسخة من هذا العقد للعمل بموجبها
                  </li>
                </ul>
              </h3>
              <br />
              <ul style="margin-right: 20px; list-style-type: none">
                <li>
                  * ملاحق العقد يعتبر جزء لا يتجزأ من هذا العقد وملزمة على
                  الطرفين.
                </li>
                <li>*ملحق رقم (1) المخطط الشمولي للمشروع.</li>
                <li>*ملحق رقم (2) مخطط الوحدة السكنية.</li>
                <li>*ملحق رقم (3) جدول التسديدات.</li>
              </ul>
              <h3 style="font-weight: 100">
                يعتبر هذا العقد نافذا من تاريخ التوقيع عليه
              </h3>
              <br />
              <ul style="margin-right: 20px; list-style-type: none">
                <li>* يجب وضع توقيع الطرفين على كل صفحة من صفحات هذا العقد.</li>
              </ul>
            </div>
          </v-container>
          <v-container>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الاول</strong>
                </h3>
                <h3>
                  <strong
                    >شركة المرس للمقاولات والتجارة العامة المتمثلة المدير المفوض
                  </strong>
                </h3>
              </v-col>
              <v-col
                cols="5"
                md="5"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>الطرف الثاني</strong>
                </h3>
                <br />
                <h3>
                  <strong>{{ data.owner_name }}</strong>
                </h3>
              </v-col>
            </v-row>
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <v-col
                cols="4"
                md="4"
                style="
                  padding: 10px 50px;
                  text-align: right;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>السيد:</strong>
                </h3>
                <br />
                <h3>
                  <strong>التوقيع: </strong>
                </h3>
              </v-col>
              <v-col
                cols="4"
                md="4"
                style="
                  padding: 10px 50px;
                  text-align: left;
                  white-space: pre-wrap;
                "
              >
                <h3>
                  <strong>السيد:</strong>
                </h3>
                <br />
                <h3>
                  <strong>التوقيع: </strong>
                </h3>
              </v-col>
            </v-row>
            <h3 style="margin: 25px">تاريخ تنظيم:</h3>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import numberWithComma from "@/constant/number";

export default {
  data() {
    return {
      data: {},
      user: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintAlfakher"));
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
