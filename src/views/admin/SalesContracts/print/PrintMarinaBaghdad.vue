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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>

          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                عقد شراء وحدة سكنية في مجمع بغداد مارينا السكني
              </h2>
              <br />
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم العقد :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.contract_id }}
                </h3>
              </div>
              <br />
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم البناية :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.form_name }}
                </h3>
              </div>
              <br />
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم الطابق :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.house_floor_number }}
                </h3>
              </div>
              <br />
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم الشقة :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.house_name }}
                </h3>
              </div>
              <br />
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                حرر هذا العقد في {{ data.createdAt }}
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">بين كل من:</h3>
              <h3>(الطرف الاول / البائع).</h3>
              <br />
              <table
                border="1"
                style="
                  width: 100%;
                  height: 100%;
                  margin-bottom: 2px;
                  border-collapse: collapse;
                "
              >
                <tbody>
                  <tr>
                    <td style="padding: 6px">الاسم الشركة</td>
                    <td style="padding: 6px">
                      شركة المنازل للمقاولات العامة والأستثمار العقاري المحدودة
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">يمثلها المدير المفوض/اضافة الى وظيفته</td>
                    <td style="padding: 6px"></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">العنوان</td>
                    <td style="padding: 6px">
                      العراق - بغداد – مجمع بغداد مارينا السكني في الدورة
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">رقم الهاتف الشركة /مقر الشركة</td>
                    <td style="padding: 6px">07505548875</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">البريد الالكتروني</td>
                    <td style="padding: 6px">marina@kaso-group.com</td>
                  </tr>
                </tbody>
              </table>
              <h3>(الطرف الثاني – المشتري)</h3>
              <table
                border="1"
                style="
                  width: 100%;
                  height: 100%;
                  margin-bottom: 2px;
                  border-collapse: collapse;
                "
              >
                <tbody>
                  <tr>
                    <td style="padding: 6px">الاسم الكامل</td>
                    <td style="padding: 6px">{{ data.owner_name }}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">
                      العنوان المختار من قبل الطرف الثاني/المشتري كمحل للتبلغ
                    </td>
                    <td style="padding: 6px">
                      المحافظة/ -<span style="margin-inline: 40px"></span> الحي/ -
                      <span style="margin-inline: 40px"></span> المحلة/ -
                      <span style="margin-inline: 40px"></span> الزقاق/ -<span
                        style="margin-inline: 40px"
                      ></span>
                      رقم الدار/ - <span style="margin-inline: 40px"></span> اقرب نقطة
                      دالة/-<span style="margin-inline: 40px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">رقم الهاتف</td>
                    <td style="padding: 6px">
                      {{ data.owner_phone }}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">البريد الالكتروني</td>
                    <td style="padding: 6px"></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">رقم البطاقة الوطنية وتاريخ صدورها</td>
                    <td style="padding: 6px">{{ data.owner_id_number }}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">
                      رقم هوية الاحوال المدنية ومكان الاصدار وتاريخ الاصدار رقم شهادة
                      الجنسية العراقية ومكان الاصدار وتاريخ الاصدار
                    </td>
                    <td style="padding: 6px">
                      <span
                        v-html="
                          data.owner_id_number !== null
                            ? data.owner_id_number
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                      -
                      <span
                        v-html="
                          data.owner_id_place_of_issue !== null
                            ? data.owner_id_place_of_issue
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                      -
                      <span
                        v-html="
                          data.owner_id_issue_date !== null
                            ? data.owner_id_issue_date
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px">
                      رقم بطاقة السكن ومكان الاصدار وتاريخ الاصدار
                    </td>
                    <td style="padding: 6px">
                      <span
                        v-html="
                          data.owner_id_residence_card_number !== null
                            ? data.owner_id_residence_card_number
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                      -
                      <span
                        v-html="
                          data.owner_id_residence_card_issue_date !== null
                            ? data.owner_id_residence_card_issue_date
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                      -
                      <span
                        v-html="
                          data.owner_id_residence_card_place_of_issue !== null
                            ? data.owner_id_residence_card_place_of_issue
                            : '<span style=&quot;margin-inline: 60px&quot;></span>'
                        "
                      ></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المصطلحات والتعاريف
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">العقد:- </strong>
                ويعني هذه الوثيقة التي توقعها الشركة مع المشتري لأي من الوحدات السكنية
                الكائنة في هذا المشروع والمعرف هنا بأسم (مجمع بغداد مارينا السكني).
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">الاجزاء المشتركة:- </strong>
                وتعني هنا على سبيل المثال لا الحصر, أسطح البنايات, المداخل, السلالم,
                الكراجات, المصاعد الخ.. وهي كافة الأجزاء التي ينتفع منها السكان في هذا
                المشروع.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">موعد التسليم:- </strong>
                هو موعد تسليم الوحدة السكنية للمشتري وفقاً لما يحدده الطرف الأول (البائع)
                والمثبت بهذا العقد و حسب المتغيرات والاحداث وبما لايؤثر بشكل كبير على
                الموعد المقرر مع الاخذ بعين الاعتبار الحالات الطارئه.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">الوحدة السكنية:- </strong>
                هي الوحدة السكنية المحددة بهذا العقد وهي عبارة عن شقة سكنية مثبته
                بالمواصفات و الارقام.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">الثمن:- </strong>
                مبلغ الوحدة السكنية كاملاً.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">جدول التسديد:- </strong>
                يقصد به الجدول المرفق بهذا العقد والذي يبين مواعيد تسديد مبلغ الوحدة
                السكنية.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">التسجيل:- </strong>
                يقصد به تسجيل الوحدة السكنية المباعة للمشتري لدى الجهات المختصة وفق
                القانون العراقي وقانون الاستثمار رقم 13 لسنة 2006 وتعديلاتة وماتقرة
                القوانين العراقية.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">رسوم التسجيل:- </strong>
                يقصد بها المبالغ الواجب تسديدها من قبل المشتري لغرض تسجيل الوحدة السكنية
                بأسمه في دائرة التسجيل العقاري والهيئة العامة للضرائب و آية رسوم أخرى
                يتوجب على المشتري تسديدها.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">الملاحق:- </strong>
                يقصد بها الملاحق المرفقة مع هذا العقد والتي تعتبر جزءاً لايتجزأ من هذا
                العقد.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">قسم العقود:- </strong>
                يقصد به القسم المختص بعمليات البيع والشراء والتنازل عن ملكية الوحدة
                السكنية ويتبع الطرف الاول ويكون تحت ادارتة وتصرفة داخل المجمع السكني
                ويتكون هذا القسم من مختص بالشؤون القانونية.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                تمهيد
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                بما ان الطرف الاول (البائع) يعمل في مجال الأستثمارات العقارية وهو مستثمر
                لمساحة الأرض التي يقام عليها مشروع مجمع بغداد مارينا السكني الكائن في
                بغداد – منطقة الدورة والعائد الى شركة المنازل للأستثمارات العقارية
                والمقاولات العامة / محدودة المسؤولية بموجب الأجازة الأستثمارية المرقمة
                197/2013 والصادرة من هيئة أستثمار بغداد بتاريخ 29/4/2013 على قطعة الارض
                المرقمة (44/7/1)الخر.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                وبما ان الشركة البائعــة (الطرف الأول) قـد طرحـت بيــع وحداتـها السكنيــة
                بالبيـع النقــدي او بحسب الدفعات المتفق عليها بين الطرفين والمثبتة في هذا
                العقد بمشـروعها المسمـى (مجمع بغداد مارينا السكني) والذي يتمتع بطابع حضاري
                ونسق معماري متميز بالحداثة, وبناءأ على ماتم ذكره فقد تقدم الطرف الثاني
                (المشتري) وأبدى رغبته بشراء إحدى الوحدات السكنية في هذا المشروع بالشروط
                الواردة في هذا العقد, لذلك وبعد ان أقر الطرفين بأهليتهما بالتعاقد وخلو
                إرادتهما من العيب المبطل فقد اتفقا على مايلي :
              </h3>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الأولى
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                يعتبر قانون الأستثمار العراقي المرقم 13 لسنة 2006 وتعديلاته المتتالية
                ونظام بيع عقارات الدولة والقطاع العام لأغراض الأستثمار المرقم 7 لسنة 2010
                المعدل بشأن انشاء المجمعات السكنية الجديدة واللائحة العقارية والقرارات
                الصادرة بشروط البناء وخاصة فيما يتعلق منها بالأبنية التي تتم اقامتها في
                المجمعات السكنية الجديدة والملاحق والخرائط والرسوم والتصاميم المرفقة بهذا
                العقد والموقعة من قبل الطرفين جزءاً لايتجزأ من هذا العقد ومكملة له ومفسرة
                لأحكامه, وقد اتفق الطرفان على ان يحق للطرف الاول (البائع) اجراء تعديلات من
                الناحية الادارية او العمرانية عليه بما لايؤثر على المظهر الخارجي للمجمع
                والطابع المميز له بصفة عامة وعلى طراز المباني للوحدة السكنية محل هذا العقد
                خاصة.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                كما اقر و وافق الطرف الثاني على ان يلتزم بما تقررة هيئة الاستثمار فيما يخص
                الية اصدار السندات وتوقيتاتها وهذا لايلغي او ينقص من ملكية الطرف الثاني
                للوحدة السكنية المباعة.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الثانية
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">موضوع العقد:-</strong>
                باع الطرف الأول الى الطرف الثاني العقار موضوع هذا العقد وقبله الطرف الثاني
                وبكافة الضمانات الفعلية والقانونية بيعاً موقوفاً على سداد كامل الثمن
                والمبالغ المترتبة عليه ما هو محدد للوحدة السكنية وبالتفصيل التالي:-
              </h3>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم البناية :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.form_name }}
                </h3>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم الطابق :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.house_floor_number }}
                </h3>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">رقم الشقة :</h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.house_name }}
                </h3>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <h3 style="margin-bottom: 7px; color: #b28200">
                  المساحة الشاملة للوحدة السكنية :
                </h3>
                <h3
                  style="
                    color: #b28200;
                    background-color: #fff6dd;
                    border: solid 1px black;
                    padding: 7px;
                    width: 220px;
                    text-align: center;
                  "
                >
                  {{ data.house_total_space }}
                </h3>
              </div>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                طبقاً لمواصفات التسليم للوحدة السكنية والمحدد موقعها بالمخطط العام للمجمع
                المشار اليه في تمهيد هذا العقد, وقد اتفق الطرفان على بيع الوحدة السكنية
                موضوع هذا العقد بالأضافة الى التزام الطرف الأول بالعمل مع الجهات الحكومية
                المختصة لغرض إفراز الموقع المشيدة عليه العمارات السكنية وفق القانون ثم فرز
                العمارات الى شقق سكنية تتوفر فيها الوحدة السكنية وتثبت حقوق الملكية
                الشائعة في أرض العمارة والاجزاء والمرافق المعدة للأستخدام العام وفق
                القانون العراقي وقوانين الاستثمار وما تطرء من تغيرات.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card class="gd">
        <v-card
          :style="`background-position: center;background-repeat: no-repeat;background-size: auto;`"
        >
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الثالثة
              </h2>
              <h3>
                <strong style="color: #a77900"
                  >ثمن الوحدة السكنية وطريقة التسديد:-</strong
                >
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ابرم هذا العقد ووافق عليه الطرفان ببدل قدره ({{
                  numberWithComma(data.salary_amount)
                }}) دينار عراقي فقط لاغير للوحدة السكنية المباعة المشار اليها في هذا العقد
                وحسب طريقة الدفع وجدول التسديد.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: rgb(233 30 30)">ملاحظة/</strong>
                تم تسديد الدفعة الاولى بحسب الوصل المرقم (<span
                  style="margin-inline: 60px"
                ></span
                >) وبتاريخ ( {{ data.first_payment_date }} ) وتمثل الدفعة الاولى بحسب
                تسلسل الدفعات في حساب الطرف الاول في مصرف الاستثمار العراقي واسم الحساب هو
              </h3>
              <h3>
                (شركة المنازل للمقاولات/مشروع بغداد مارينا)<strong
                  style="font-weight: 200"
                >
                  والذي يحمل الرقم </strong
                >(01/55403).
              </h3>
              <div
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
                      <table
                        border="1"
                        style="width: 100%; height: 100%; border-collapse: collapse"
                      >
                        <thead>
                          <tr style="background-color: rgb(255 246 221)">
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
                              style="background-color: rgb(255 246 221)"
                              v-if="salary_payment.payment_position == 'مقدم'"
                            >
                              دفعة المقدمة
                            </td>
                            <td
                              style="background-color: rgb(255 246 221)"
                              v-else-if="salary_payment.payment_position == 'دفعة الهيكل'"
                            >
                              دفعة الهيكل
                            </td>
                            <td
                              style="background-color: rgb(255 246 221)"
                              v-else-if="salary_payment.payment_position == 'اخر دفعة'"
                            >
                              الدفعة (دفعة التسليم)
                            </td>
                            <td style="background-color: rgb(255 246 221)" v-else>
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
                </v-container>
              </div>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الرابعة
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900"
                  >المعاينة والانتفاع من الوحدة السكنية :-</strong
                >
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                يقر هنا الطرف الثاني بأنه قبل شراء الوحدة السكنية المباعة موضوع هذا العقد
                حيث قام بمعاينة موقع المجمع والارض المخصص اقامة المشروع عليها والكائنة بها
                الوحدة المباعة والمخططات والتصاميم المعاينة التامة النافية لكل جهالة كما
                يقر هنا بأنه اطلع على كافة الامور التي تخص الوحدة السكنية ومساحتها وان
                الطرف الاول قد عرض بيع الوحدة السكنية ككل بغض النظر عن المساحة الدقيقة لكل
                نوع من الشقق حيث ان المساحات تختلف باختلاف التصاميم من شقة لأخرى ومن بناية
                لأخرى وقد اطلع الطرف الثاني على هذه المعلومات بشكل تام ينفي الجهالة وقبل
                الشراء بدون تحفظ فقد تزيد مساحة الشقق او تنقص حسب المخططات عن واقع الابنية
                بنسبة بسيطة جداً مما لايؤثر على مساحة الوحدة السكنية واستخداماتها ومساحات
                اجزاءها المتعددة ولايحق للطرف الثاني (المشتري) مطالبة الطرف الاول (البائع)
                بأي مستحقات مالية من جراء هذا الفرق والاختلاف ان وجد والذي قد يكون
                بالزيادة او النقصان وبنسبة بسيطة جداً كما يقر الطرف الثاني (المشتري) بعلمه
                بمواصفات التسليم.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                كذلك يقر الطرف الثاني (المشتري) من الأن وبصفة نهائية بأن يقتصر انتفاعه
                بالوحدة السكنية المباعة وملحقاتها على الغرض الذي خصصت من اجله وهو السكن
                العائلي فقط بحيث لايجوز له استخدامها بشكل مخالف للغرض المتفق عليه كما
                لايجوز له شطرها مما يؤدي الى زيادة عدد سكان العمارة ولا يجوز استعمالها
                لأغراض مخالفة للنظام العام والأداب العامة.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الخامسة
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">التسليم :-</strong>
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                يتعهد الطرف الأول (البائع) بأن يكون تنفيذ الوحدة السكنية موضوع هذا العقد
                وفقاً للأصول الفنية والهندسية المعتمدة ويكون تسليم الوحدة السكنية حسب
                الشروط المحددة والمبينة في هذا العقد.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ويلتزم الطرف الاول بتسليم الوحدة السكنية المباعة موضوع هذا العقد للطرف
                الثاني خلال الموعد المذكور للتاريخ في (جدول الدفعات) من تاريخ ابرام هذا
                العقد واقر والتزم الطرف الثاني بالاقرار والموافقة على اي موعد يحددة الطرف
                الاول بحسب المتغيرات والاحداث كما جاء في مصطلحات وتعاريف هذا العقد بما
                يؤمن انجاز هذا العقد بشكل اصولي..
              </h3>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                كما اقر واعترف ووافق الطرف الثاني على عدم منع او تعويق الطرف الاول من
                القيام بكافة الانشاءات والانهاءات المتبقية للمشروع ولايجوز له ان يعتبر
                قيام الطرف الاول بتلك الاعمال معوقاً او مانعاً من انتفاعه بالوحدة السكنية
                وملحقاتها.
              </h3>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                كما ويلتزم الطرف الثاني بتسديد كافة الرسوم والضرائب التي تفرضها الجهات
                الحكومية لغرض تسجيل الوحدة السكنية, ولايحق للطرف الثاني الرجوع على الطرف
                الاول بما يقوم بتسديده في هذا الشأن.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة السادسة
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">إنتقال الملكية :-</strong>
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                1- لاتنتقل ملكية الوحدة السكنية الا بعد قيام الطرف الثاني بتسديد كافة
                المبالغ والدفعات التي بذمتة لصالح الطرف الاول وحسب مامذكور بجدول الدفعات
                في هذا العقد على ان لاتكون الوحدة السكنية موضوع هذا العقد محجوزه او مرهونه
                الى اي جهة اخرى.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                2- يلتزم ويتعهد الطرف الثاني بتسديد مبلغ الوحدة السكنية المثبت في هذا
                العقد بحسب جدول الدفعات خلال خمسة عشر يوم تاريخ استحقاق الدفعه المقررة
                وبخلافة يقر الطرف الثاني ويلتزم ويتعهد بتاديه وتسديد مبلغ 65,000(خمسة
                وستون الف دينارعراقي) عن كل يوم تاخير على ان لاتتجاوز هذا الغرامات مدة
                ستون يوم من تاريخ استحقاقها وبخلافه اقر ووافق الطرف الثاني على اللجوء
                والاخذ بالفقرة الثالثة من المادة السادسة من هذا العقد (انتقال الملكية).
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                3- يعد هذا العقد باطلاً ولايترتب علية اي اثر قانوني بعد مرورخمسة وسبعون
                يوم من تاريخ استحقاق الدفعة المالية وعدم تسديدها و يعترف ويقر ويلتزم الطرف
                الثاني لصالح الطرف الاول بالموافقة ويخوله ويتنازل عن كافة الحقوق لصالح
                الطرف الاول لغرض بيع العقار موضوع هذا العقد واعادة المبلغ الى الطرف الثاني
                بالسعر السائد في وقت البيع (تحت هذا الظرف) بعد خصم المصاريف الادارية
                والقانونية والغرامات التاخيرية وعمولات البيع وحفظ مايتبقى من مبلغ البيع في
                حساب الامانات الخاص بالطرف الاول.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                4- يلتزم الطرف الثاني في حال رغبته بالتنازل عن العقار او بيعه, يلتزم تنفيذ
                عملية البيع ضمن قسم العقود (وحسب ماجاء في المصطلحات والتعاريف في هذا
                العقد) على ان لاتكون الوحدة السكنية مقيدة باي التزام مالي او قانوني على
                الوحدة السكنية موضوع هذا العقد ويتعهد الطرف الثاني بتسديد مبلغ مقطوع الى
                قسم العقود ضمن اعمال الطرف الاول وبواقع (4,000,000 أربعة مليون دينارعراقي
                لاغير للطرفين المتعاقدين). في هذه الحالة تنتهي وتنقضي علاقة قسم العقود
                بعملية البيع والشراء ولاعلاقة للقسم او ادارة المجمع بعملية اجراءات دائرة
                التسجيل العقاري.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة السابعة
              </h2>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">تسجيل الوحدة السكنية :-</strong>
              </h3>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                يلتزم الطرف الثاني بتسليم الطرف الاول كافة المستمسكات الثبوتية والوثائق
                الرسمية اللازمة لأتمام التسجيل وبخلافه يتحمل الطرف الثاني كافة التبعات
                القانونية كما يلتزم الطرف الثاني بالعمل مع اللجنة المختصة العائدة للطرف
                الاول بالتسجيل العقاري والتي تقوم بالتنسيق مع دائرة التسجيل العقاري لنقل
                وتسجيل ملكية الوحدة السكنية بأسم الطرف الثاني (المشتري الاول) على ان يكون
                الطرف الثاني مسدداً لكامل ثمن الوحدة السكنية وملحقاتها ولكافة المستحقات
                المالية الناتجة عن هذا العقد. وكما يلتزم الطرف الثاني بدفع كافة الرسوم
                والمصاريف التي تتعلق بنقل الملكية دون مطالبة الطرف الاول بأي تعويض عن تلك
                الرسوم او المصاريف وحسب القوانين المعمول بها في جمهورية العراق.
              </h3>
              <br />
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة الثامنة
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">العناوين :-</strong>
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                نظراً للأهمية القصوى لوجود وسيلة اتصال قانونية قائمة ومعترف بها قانونياً
                من طرفي العقد فأن كل من طرف هذا العقد يقر بصحة العنوان الخاص به والمبين
                بصدر هذا العقد وبأتحاذ هذا العنوان محلاً مختاراً للتبليغات له ويلتزم
                باخطار الطرف الاًخر في حال تغييره بأشعار موصى عليه بعلم الوصول والاً
                اعتبرت جميع الاعلانات المرسلة التي تتم عليه صحيحة ومنتجة لكافة اثارها
                القانونية وتعتبر رسائل البريد الالكتروني بين الطرفين المتعاقدين والرسائل
                النصية على ارقام الهواتف المحمولة المثبتة في هذا العقد للطرف الثاني وسيلة
                رسمية وقانونية للتواصل والمخاطبات والتباليغ.
              </h3>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة التاسعة
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">احكام عامة :-</strong>
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                1- حررهذا العقد من طرفيه وبعد الاطلاع عليه وتدقيقة وقبول محتواه واقرار
                ماجاء فيه وقبل به الطرفين.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                2- في حال حصول اي خلاف بين الطرفين يتم تسوية الأمر من خلال التفاهم بين
                الطرفين بالطرق الودية و بخلاف ذلك يتم اللجوء الى القضاء.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                3- تكون محاكم البداءة في بغداد هي المختصة بالنظر في الخلافات الناتجة من
                جراء تنفيذ هذا العقد.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                4- في حال صدور اي تعليمات أو تعديلات من الهيئة الوطنية للاستثمار او هيئة
                استثمار بغداد او الدوائر الرسمية المختصة ذات العلاقة فأنها تسري على
                الطرفين المتعاقدين.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                المادة العاشرة
              </h2>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">نسخ العقد :-</strong>
              </h3>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                حرر هذا العقد وملاحقة بثلاث نسخ أصلية تسلم نسخة لكل طرف للعمل بموجبها
                والنسخة الثالثة للأرشفة ويرفق بهذا العقد:-
              </h3>
              <br />
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ملحق رقم (1) مخطط الوحدة السكنية.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ملحق رقم (2) مواصفات الوحدة السكنية بعد الانهاءات.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ملحق رقم (3) تعهد خاص بالحفاظ على طابع المجمع.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ملحق رقم (4) ادارة المجمع والصيانة.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                ملحق رقم (5) الكهرباء والماء والغاز وخدمات الانترنيت والاتصالات.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                على ان تعتبر جميع الملاحق اعلاه جزءاً لا يتجزأ من العقد الرئيسي المبرم بين
                الطرفين.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                ملحق رقم (1)
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900">صورة مفصلية للوحدة السكنية :-</strong>
              </h3>
              <div style="text-align: center">
                <img style="width: 65%" :src="naM" alt="" />
              </div>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="text-align: center; color: #a77900">ملحق رقم (2)</h2>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900"
                  >مواصفات الوحدة السكنية بعد الانهاءات :-</strong
                >
              </h3>
              <h3 style="font-weight: 200">- تجهيز الشقة بالمطابخ.</h3>
              <h3 style="font-weight: 200">
                - تجهز الشقة بالغاز المركزي بأنظمة مسبقة الدفع.
              </h3>
              <h3 style="font-weight: 200">
                - تجهيز الشقة بنظام تبريد و تدفئة, نظام (VRF).
              </h3>
              <h3 style="font-weight: 200">
                - استخدام البورسين للأرضيات والجدران من الانواع الفاخرة.
              </h3>
              <h3 style="font-weight: 200">
                - شبابيك المنيوم عازلة للحرارة مع دبل جام عازل.
              </h3>
              <h3 style="font-weight: 200">- ابواب خشبية من منشاء رصين.</h3>
              <h3 style="font-weight: 200">- ابواب مداخل قاصة.</h3>
              <h3 style="font-weight: 200">- توفير الطاقة الكهربائية على مدار الساعة.</h3>
              <h3 style="font-weight: 200">- سستم الستلايت المركزي.</h3>
              <h3 style="font-weight: 200">- تجهيز السخانات.</h3>
              <h3 style="font-weight: 200">- توفير نظام النفايات المركزية.</h3>
              <h3 style="font-weight: 200">
                - توفير مصاعد في كافة الابنية على ان يكون احداها مخصص لنقل الاثاث.
              </h3>
              <h3 style="font-weight: 200">
                - توفير جهاز تحكم سبيكر (INTERCOM) متصل بالمدخل الرئيسي للمجمع.
              </h3>
              <h3 style="font-weight: 200">- توفير نظام كامرات مراقبة.</h3>
              <h3 style="font-weight: 200">- توفير شركات امنية لحماية أمن المجمع.</h3>
              <h3 style="font-weight: 200">- توفير حضانة وروضة ومدرسة خاصة.</h3>
              <h3 style="font-weight: 200">
                - توفير ملاعب للاطفال مع ساحات للرياضة الخارجية.
              </h3>
              <h3 style="font-weight: 200">- تجهيز الابنية بنظام الحريق المركزي.</h3>
              <h3 style="font-weight: 200">- وجود محطة تكسيات تابعة للمجمع.</h3>
              <h3 style="font-weight: 200">
                - وجود سوبر ماركت وكافة الاحتياجات اليومية المطلوبة.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="text-align: center; color: #a77900">ملحق رقم (3)</h2>
              <p style="margin-bottom: 0px; font-weight: 200">
                <strong style="color: #a77900">الشروط العامة :-</strong>
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                نظراً الى ان المجمع السكني له طابعه الخاص والمتميز بأعتباره مجمعا عمرانياً
                متكامل المرافق ولتحقيق مصلحة الطرف الاول والطرف الثاني ومصلحة جميع مالكي
                وقاطني المجمع السكني فقد قبل الطرف الثاني شراء الوحدة السكنية موضوع هذا
                العقد وملحقاته بالشروط الألزامية الواردة في العقد وبالتالي فأنها تسري على
                الطرف الثاني وعلى خلفه العام او الخاص الالتزامات التالية:-
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                1- يلتزم الطرف الثاني بعدم ادخال أي سلاح او ادخال حراسه الشخصيين داخل
                المجمع السكني حفاظاً على أمن وسلامة المجمع وطابعه المميز, استثناءاً من ذلك
                يمكن اخذ الموافقات المسبقة من الشركة التي ستتولى ادارة المجمع في ادخال
                السلاح المرخص والحراس الشخصيين.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                2- يلتزم الطرف الثاني بعدم اجراء اية تعديلات او تغييرات على التصميمم
                الداخلي للوحدة السكنية الأ بعد الحصول على الموافقة التحريرية من الشركة
                التي ستتولى ادارة المجمع في هذا الشأن على ان يكون كل ماتقدم على نفقة الطرف
                الثاني وحده.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                3- يتعهد الطرف الثاني بعدم تغيير اماكن الحمامات او المطابخ ودورات المياة
                في داخل الوحدة السكنية.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                4- يلتزم الطرف الثاني بعدم اجراء اية تعديلات او تغييرات على الواجهات
                الخارجية سواء بتغيير لون الواجهات او تغيير مواد انهاء الواجهات او تعديل
                الشبابيك والشرفات او البالكونات او الاسطح او مقاسات الفتحات بالواجهات
                سواءاً بالزيادة او النقصان او استحــداث فتحات جديدة بالواجهـات او اغلاق
                الفتحات الموجودة او تغيير شكـل أو مادة شبابيـك وابواب وسياجـات الـدرج
                (المحجر) والواجهات او اي تغيير من اي نوع كان.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                5- يلتزم الطرف الثاني بعدم اجراء اي تعديلات في اماكن انتظار السيارات
                (الكراج) او اجراء أي اعمال هدم او بناء او اقامة فتحات جديدة او سد فتحات
                موجودة فعلاً في اي منها او اجراء اي انهاءات او تعديل بالأنهاءات وبعدم
                استخدامها لغير الغرض المخصص لها او وضع اية مواد قابلة للأشتعال او تضر
                بسلامة المبنى او مالكي الوحدات السكنية في المجمع.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                6- يلتزم الطرف الثاني بعدم وضع اية مواد في الاسطح أو الشرفات (البالكون) او
                وضع قطع لافتات من شانها تشوية المنظر الخارجي للعمارة.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                7- يلتزم الطرف الثاني بعدم استخدام اية تجهيزات او معدات او اجهزة الكترونية
                او كهربائية او دراجات نارية تؤدي الى حدوث ضوضاء او تسبب ازعاجاً لمالكي
                الوحدات السكنية او تعرض حياتهم للخطر.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                8- لايحق للطرف الثاني تركيب اجهزة تبريد أو تدفئة لكونها معدة او منجزة من
                قبل الطرف الاول مسبقاً.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                9- ان الوحدة السكنية مجهزة بخزان تسخين المياه من قبل الطرف الاول و في حال
                رغبه الطرف الثاني بتغيرالسخان فيلتزم الطرف الثاني بمراجعة قسم الصيانة لدى
                الطرف الاول لاجراء الكشف وتركيب سخان جديد ودفع كافة التكاليف المالية في
                القسم المالي للطرف الاول حفاظاً على السلامة العامة.
              </p>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <p style="margin-bottom: 0px; font-weight: 200">
                10- يلتزم الطرف الثاني بعدم قطع اوأتلاف الاشجار بصرف النظر عن حجمها او
                نوعها لاي سبب كان متى مايتم غرسها على جانبي الطرقات او الممرات او الحدائق
                او الاجزاء الفاصلة بين العمارات وكذلك عدم التغيير في نوعية تلك المزروعات
                حفاظاً على الطابع العام للمجمع.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                11- يلتزم الطرف الثاني بالمحافظة على الخدمات العامة والمرافق العامة
                المخصصة لخدمة المجمع السكني وعدم احداث اي ضرر بها كما يلتزم بالمحافظة على
                نظافة الشوارع والارصفة. ويتعهد الطرف الثاني بعدم ازعاج او احداث ضوضاء او
                مخلفات او مخاطر من جراء تربية الحيوانات الاليفة.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                12- يلتزم الطرف الثاني بعدم احداث اي ضوضاء او ازعاج لمالكي الوحدات السكنية
                المجاورة وبالامتثال التام للضوابط والتعليمات المفروضة من الطرف الاول او
                الشركة التي ستتولى ادارة المجمع السكني.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                13- يلتزم الطرف الثاني بعدم اقامة سقائف او منشأت بالشوارع داخل المجمع او
                على الارصفة لتغطية السيارات او اي اغراض اخرى.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                14- يلتزم الطرف الثاني بعدم استخدام سطح العمارة لغير الغرض المخصص له كما
                يلتزم بعدم اضافة اي انشاءات او تعديلات عليه اياً كان نوعها وبعدم استخدام
                السطح لتخزين المواد او تربية الطيور او تركيب الاعلانات او محطات تقوية
                الارسال.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                15- يلتزم الطرف الثاني بكافة التوجيهات والتعليمات التي تصدرها ادارة
                المجمع.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                16- يحق للطرف الثاني حق الانتفاع بمكان مخصص لسيارة واحدة فقط لغرض الاصطفاف
                وفي حالة رغبة الطرف الثاني بالانتفاع من مكان ثاني لصف سيارة ثانية فعليه
                شراء موقف ثاني بالسعر الذي يحدده الطرف الاول وينظم ذلك بملحق عقد ويكون
                جزاءاً لا يتجزأ من هذا العقد.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                17- التزم الطرف الثاني بعدم اجراء اي تعديل على الجدران الداخلية والتقسيمات
                الخاصة بالوحدة السكنية.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                18- يلتزم الطرف الثاني بعدم ادخال اي مواد بناء او ادوات عمل بناء نهائياً.
                وفي حال حاجة الطرف الثاني لذلك تكون بالتنسيق ومن خلال الطرف الاول (قسم
                الصيانة) مقابل اجور مالية.
              </p>
              <p style="margin-bottom: 0px; font-weight: 200">
                19- يقوم الطرف الاول بتوفير صحون استقبال مركزية للقنوات الفضائية لتمكين
                ساكني الوحدات السكنية بأستخدامها ويلتزم الطرف الثاني بعدم وضع أي صحون
                استقبال اخرى لعدم تشويه واجهة البناية.
              </p>
              <br />
              <p style="margin-bottom: 0px; font-weight: 200">
                <strong style="color: red">ملاحظة:-</strong>
                فيما ذكر في اعلاه فيحق للطرف الاول فرض غرامات على الطرف الثاني في حال قيام
                الاخير باية مخالفات لبنود هذا العقد وتحديد مبلغ الغرامة حسب مايراه الطرف
                الاول ، وفي حال استمرار الطرف الثاني بالمخالفات فيحق للطرف الاول حجب
                الخدمات عن الطرف الثاني منها ( الماء - الكهرباء - الغاز- الخ ) ولايتم
                اعادتها الا بعد قيام الطرف الثاني بتسديد كافة مبالغ الغرامات المفروضة عليه
                ورفع والغاء تلك المخالفات.
              </p>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center; color: #a77900">
                ملحق رقم (4)
              </h2>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900"
                  >ادارة المجمع السكني واعمال الصيانة :-</strong
                >
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                حفاظاُ على مظهر المجمع السكني وحمايته وصيانته ونظافته وحراسته وضمان
                الادارة المستمرة لكافة الخدمات فيه ، سوف يقوم الطرف الاول او عن طريق
                التعاقد مع احدى الشركات الرصينة لغرض ادارة المجمع وصيانة المرافق العامة
                فيه لخدمة المجمع وساكنيه ليبقى في حالة جيدة مثل ( الطرقات – الحدائق –
                المناطق الخضراء – او اي مرافق اخرى ) ويقر الطرف الثاني بأن الطرف الاول
                وحده او الشركة التي ستتولى ادارة المجمع هي صاحبة الحق في القيام بأعمال
                الادارة وصيانة المجمع وتعريف كافة شؤونة وابرام كافة التصرفات واداء كافة
                الاعمال اللأزمة لذلك ويلتزم الطرف الثاني بعدم التعاقد مع اي طرف اخر للقيام
                بذات الاعمال
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                <strong style="color: #a77900"
                  >كما يلتزم ويقر الطرف الثاني بدفع المبلغ الذي يقرره الطرف الاول وبموجب
                  محضر استلام الوحدة السكنية ووافق الطرف الثاني على ذلك المبلغ والذي يدفع
                  كخدمات شهرية في بداية كل شهر مع ملاحظة التفصيل التالي.</strong
                >
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                1- في حال عدم سداد الطرف الثاني ماهو مستحق عليه من مصاريف الصيانة و
                الخدمات في تأريخ استحقاقها يحق للطرف الاول او الشركة التي ستتولى ادارة
                المجمع اتخاذ كافة الاجراءات القانونية لتحصيل المبالغ المستحقة بعد انذار
                الطرف الثاني بوجوب تسديد مابذمته من اجور الخدمات المقدمة له من قبل الطرف
                الاول وفي حال عدم تسديد مبالغ الخدمة المقدمة وخلال اول خمس ايام من كل شهر
                وافق الطرف الثاني خول الطرف الاول باغلاق وقطع الخدمات عن الوحدة السكنية
                موضوع هذا العقد.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                2- لايحق للطرف الثاني الادعاء بالتخلي عن حصته بالاجزاء المشتركة بهدف
                التخلص من الاشتراك في تكاليف الخدمات المقدمة من قبل الطرف الاول او الشركة
                التي ستتولى ادارة المجمع.
              </h3>
              <h3 style="margin-bottom: 7px; font-weight: 200">
                3- يقر الطرف الثاني بقبوله بكافة التعليمات الصادرة من قبل الطرف الاول او
                من يحال اليه مهمة القيام باعمال الصيانة والتي من شأنها المحافظة على
                استمرار وتنفيذ اعمال الصيانة للمرافق والخدمات المذكورة.
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="text-align: center; color: #a77900">ملحق رقم (5)</h2>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900"
                  >اشتراك الكهرباء الوطنية و تركيب عدادات الكهرباء والماء والغاز وتوصيل
                  خدمات الانترنت :-</strong
                >
              </h3>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900">اشتراك الكهرباء الوطني</strong>
              </h3>
              <h3 style="font-weight: 200">
                يلتزم الطرف الثاني فور استلامه للوحدة السكنية موضوع هذا العقد بتنفيذ اجراء
                تسجيل عداد الكهرباء المثبت في الوحدة السكنية لدى الدوائر المختصه وخلال
                سبعة ايام من تاريخ استلام الطرف الثاني للوحدة السكنية.
              </h3>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900">اشتراك كهرباء المولدة</strong>
              </h3>
              <h3 style="font-weight: 200">
                يلتزم الطرف الثاني بالاشتراك بالاضافة الى الكهرباء الوطنية حيث يقوم الطرف
                الاول بأنشاء وحدات التيار الكهربائي (المولدات) وتوصيلة الى الوحدات السكنية
                وفق برنامج العمل للمولدات مع مراعات اوقات الصيانة. ويتم احتساب الاشتراك عن
                طريق استعمال بطاقة ذكية (سمارت كارت) و وفق العداد الذكي ولايحق للطرف
                الثاني ان يسحب اي تيار كهربائي من اي جهة اخرى او تشغيل مولد كهربائي داخل
                الوحدة السكنية.
              </h3>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900">اشتراك المياه</strong>
              </h3>
              <h3 style="font-weight: 200">
                اتفق الطرفان على قيام والتزام الطرف الثاني بتسجيل عداد ميزانية (مقياس
                الماء) المثبت في الوحدة السكنية في الدائره المختصة في دائرة ماء بغداد
                الكائن بها الوحدة السكنية المباعة بوحدته مع التزام الطرف الثاني بسداد
                مايخصه من استهلاك المياه على اساس ما تسفر عنه قراءة العداد.
              </h3>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900">اشتراك الغاز</strong>
              </h3>
              <h3 style="font-weight: 200">
                أتفق الطرفان على قيام الطرف الثاني بتشغيل عداد ميزانية (مقياس الغاز)
                المثبت في الوحدة السكنية والذي يدار من قبل الطرف الاول.
              </h3>
              <h3 style="font-weight: 200">
                <strong style="color: #a77900">اشتراك الانترنت</strong>
              </h3>
              <h3 style="font-weight: 200">
                اتفق الطرف الاول على توصيل الكابل الضوئي (الانترنيت) من قبل شركة مختصه
                وتوصيله الى الوحدة السكنية المباعة مع التزام الطرف الثاني بسداد مايخصه من
                بدل اشتراك شهري.
              </h3>
              <h3 style="font-weight: 200">
                الشركة لها كامل الحق بالجباية او بأختيار من ينوب عنها في الخدمات المذكوره
                آنفاً (الكهرباء – الماء – الغاز – خدمات الانترنت).
              </h3>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                <strong
                  ><h4 style="padding: 2px 20px">
                    البائع / شركة المنازل للمقاولات العامة والاستثمارات العقارية المحدودة
                    /اضافة لوظيفته
                  </h4></strong
                >
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="
                  padding: 3px;
                  background-color: rgb(255, 246, 221);
                  border: 1px solid black;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                "
                ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                <div style="width: 100%">
                  <strong
                    ><h4 style="padding: 2px 20px">
                      المشتري / {{ data.owner_name }}
                    </h4></strong
                  >
                </div></v-col
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
          <v-container style="text-align: center; padding: 0px">
            <img :src="ba" style="width: 150px" alt="" />
          </v-container>
          <v-container>
            <div>
              <h2 style="margin-bottom: 7px; text-align: center">
                على بركة الله تم توقيع هذا العقد المتكون من عشرة مواد وخمسة ملاحق
              </h2>
              <h2 style="margin-bottom: 7px; text-align: center">
                وعلية وقع الطرفان في بغداد بتاريخ
                <span style="margin-inline: 40px"></span>/<span
                  style="margin-inline: 40px"
                ></span
                >/
              </h2>
              <br />
              <br />
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(255, 246, 221);
                    border: 1px solid black;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    align-items: center;
                  "
                  ><p style="border-bottom: solid 1px black">الطرف الأول</p>
                  <strong
                    ><h4 style="padding: 2px 20px">
                      البائع / شركة المنازل للمقاولات العامة <br />
                      و يمثله المدير المفوض / اضافة الى وظيفته
                      <br />
                      <br />
                      <br />
                      تاريخ توقيع العقد:
                    </h4></strong
                  >
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(255, 246, 221);
                    border: 1px solid black;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    align-items: center;
                  "
                  ><p style="border-bottom: solid 1px black">الطرف الثاني</p>
                  <div style="width: 100%">
                    <strong>
                      <h4 style="padding: 2px 20px">
                        المشتري / {{ data.owner_name }}
                        <br />
                        <br />
                        <br />
                        تاريخ توقيع العقد:
                      </h4>
                    </strong>
                  </div></v-col
                >
              </v-row>
              <br />
              <h4 style="text-align: center">مصادقة قسم العقود لدى الطرف الاول</h4>
              <br />
              <h4 style="font-weight: 200">اسم الموظف/</h4>
              <br />
              <h4 style="font-weight: 200">رقم هوية الموظف/</h4>
              <br />
              <h4 style="font-weight: 200">التوقيع/</h4>
              <br />
              <h4 style="font-weight: 200">التاريخ/</h4>
              <br />
              <h4 style="font-weight: 200">ختم قسم العقود/</h4>
            </div>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/logoPrint.png";
import ba from "@/assets/logo/mar.jpg";
import naM from "@/assets/images/naM.png";
import numberWithComma from "@/constant/number";
import tafqeet from "@/constant/Tafqeet.js";

export default {
  data() {
    return {
      data: {},
      user: null,
      ba,
      naM,
      logoPrint,
      d: null,
      yearsDifferencey: null,
      yearsDifference: null,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintMarinaBaghdad"));
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
        return this.stringText(index + 1);
      } else {
        return this.stringText(index - structurePaymentIndex);
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
