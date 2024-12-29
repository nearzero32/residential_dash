<template>
  <div>
    <v-container id="pri">
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0px;
          "
        >
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container
            style="height: 100%; display: grid; place-items: center; padding-block: 20%"
          >
            <div>
              <h1 style="font-weight: 900; font-size: 6vh">
                عقد شراء وحدة سكنية <br />مجمع النهضة السكني
              </h1>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div>
              <div style="text-align: center">
                <h2 style="border-block: solid 2px black; margin-inline: 80px">
                  مجمع النهضة السكني
                </h2>
                <h2>عقد شراء وحدة سكنية</h2>
              </div>
              <br />
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                "
              >
                <div>
                  <v-row>
                    <v-col cols="6" md="6"><h4>رقم العقد:</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.contract_id }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>اسم المجمع السكني:</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        مجمع النهضة السكني
                      </h4></v-col
                    >
                    <v-col cols="2" md="2"><h4>قطعة الارض:</h4></v-col>
                    <v-col cols="3" md="3" style=""
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        رقم القطعة :{{ data.house_name }}
                      </h4></v-col
                    >
                    <v-col cols="3" md="3" style=""
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        رقم المقاطعة : 6
                      </h4></v-col
                    >
                    <v-col cols="4" md="4" style=""
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        اسم المقاطعة : ابو محار
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>رمز المنطقة :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        H
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>رقم الوحدة السكنية :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_name }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>نوع الوحدة :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      ></h4
                    ></v-col>
                    <v-col cols="6" md="6"><h4>صنفها :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      ></h4
                    ></v-col>
                    <v-col cols="6" md="6"><h4>مساحة الارض 2م :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_total_space }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>اجمالي مساحة البناء 2م :</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 3px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_building_space }}
                      </h4></v-col
                    >
                  </v-row>
                  <v-row>
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: rgb(189 214 238);
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">الطرف الأول / البائع</p></v-col
                    >
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: rgb(189 214 238);
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">الطرف الثاني / المشتري</p></v-col
                    >
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: rgb(189 214 238);
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">
                        شركة صناع النهضة للأستثمار والتطوير العقاري
                      </p></v-col
                    >
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: rgb(189 214 238);
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">{{ data.owner_name }}</p></v-col
                    >
                  </v-row>
                </div>
              </div>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div>
              <div>
                <div>
                  <v-row>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p>اسم الشركة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">
                        شركة صناع النهضة لالستثمار والتطوير العقاري والصناعي والطاقة
                        والزراعي والثروة الحيوانية والتجارة العامة .
                      </p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">العنوان / مقر الشركة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">
                        العراق- بغداد- اليرموك<br />
                        م/618 ش/3 د/ 59
                      </p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم هاتف الشركة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">07740408085</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px"></p
                    ></v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">م.ش.أ -2- 12407</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px"></p
                    ></v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">sonaaco@yahoo.com</p></v-col
                    >
                  </v-row>
                </div>
                <div style="margin-block: 15px">
                  <p style="margin: 0px">حرر هذا العقد في اليوم المصادف {{ date }}</p>
                  <p style="margin: 0px">بين كل من :</p>
                  <p style="margin: 0px">
                    الطرف االول/ البائع( شركة صناع النهضة لألستثمار والتطوير العقاري )
                  </p>
                  <p style="margin: 0px">( الطرف الثاني –المشتري )</p>
                </div>
                <div>
                  <v-row>
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: #99ccff;
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">الأسم الكامل</p></v-col
                    >
                    <v-col
                      cols="6"
                      md="6"
                      style="
                        padding: 3px;
                        background-color: #99ccff;
                        border: solid 1px black;
                      "
                      ><p style="margin: 0px">المعلومات</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">الاسم</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                      {{ data.owner_name }}
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">حصة المشتري</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">اسم الممثل ( في حالة الشركة )</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم الهاتف</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                      {{ data.owner_phone }}
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">البريد الاكتروني</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم البطاقة الموحدة وتاريخها</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                      رقم الهوية:{{ data.owner_id_number }}/ تاريخ الاصدار:
                      {{ data.owner_id_issue_date }}
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم جواز السفر وتاريخ الاصدار</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم بطاقة السكن وتاريخها</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                      رقم بطاقة السكن:{{ data.owner_id_residence_card_number }} / تاريخ
                      الاصدار :{{ data.owner_id_residence_card_issue_date }}
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">عدد افراد الاسرة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">المهنة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">العنوان الحالي</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">المدينة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">الدولة</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black">
                    </v-col>
                  </v-row>
                </div>
              </div>
              <br />
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">
                    شركة صناع النهضة للأستثمار والتطوير العقاري
                  </p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div style="margin-block: 15px">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black"
                    >المصطلحات والتعاريف</strong
                  >
                </div>
                <div>
                  <p style="margin: 0px">
                    لشركة: شركة صناع النهضة للاستثمار والتطوير العقاري والصناعي والطاقة
                    والزراعي والثروة الحيوانية والتجارة العامة محدودة المسؤولية أسست بموجب
                    قانون الشركات العراقية رقم 21 لسنة 1997 الواقعة في بغداد اليرموك م/618
                    ش/3 د/59 .
                  </p>
                  <p style="margin: 0px">
                    العقد: هو الوثيقة التي توقعها الشركة مع المشتري لأي من الوحدات السكنية
                    الكائنة في هــذا المشروع والمعروف هنا بأسم ( مجمع النهضة السكني).
                  </p>
                  <p style="margin: 0px">
                    الأجزاء المشتركة : وتعني هنا على سبيل المثال لا الحصر، الحدائق،
                    المداخل، والكراجات الخ... وهي كافة الاجزاء التي ينتفع منها السكان في
                    هذا المشروع.
                  </p>
                  <p style="margin: 0px">
                    موعد التسليم: هو موعد تسليم الوحدات السكنية للمشتري وفقًا لما يحدده
                    الطرف الاول (البائع) والمثبت بهذا العقد وحسب المتغيرات والاحداث وبما
                    لا يؤثر بشكل كبير على الموعد المقرر مع الاخذ بعين الاعتبار الحالات
                    الطارئة.
                  </p>
                  <p style="margin: 0px">
                    الوحدة السكنية: هي الدار الموصوف بهذا العقد وهو عبارة عن دار سكني مثبت
                    برقم بلوك ورقم شارع ورقم دار.
                  </p>
                  <p style="margin: 0px">الثمن: المبلغ الكلي للوحدة السكنية.</p>
                  <p style="margin: 0px">
                    جدول التسديد: يقصد به طريقة سداد ثمن الوحدة السكنية والوارد بهذا العقد
                    والذي يبين مواعيد تسديد مبلغ الوحدة السكنية.
                  </p>
                  <p style="margin: 0px">
                    الفوائد القانونية: يقصد بها الفوائد القانونية المبينة نسبها في هذا
                    العقد نتيجة التأخر والتخلف عن تسديد الدفعات المستحقة بذمة المشتري او
                    التأخر في تسديد الخدمات او أية فوائد قانونية أخرى نصت عليها بنود هذا
                    العقد.
                  </p>
                  <p style="margin: 0px">
                    التسجيل: يقصد به تسجيل الوحدة السكنية المباعة للمشتري لدى الجهات
                    المختصة وفق القانون العراقي وقانون الاستثماررقم 13 لسنة 2006 وتعديلاته
                    وما تقره القوانين العراقية.
                  </p>
                  <p style="margin: 0px">
                    رسوم التسجيل: يقصد بها المبالغ الواجب تسديدها من قبل المشتري ولغرض
                    تسجيل الوحدة السكنية بأسمه في دائرة التسجيل العقاري والهيئة العامة
                    للضرائب وأي رسوم أخرى يتوجب على المشتري تسديدها.
                  </p>
                  <p style="margin: 0px">
                    الملاحق: يقصد بها الملاحق المرافقة مع هذا العقد والتي تعتبر جزأ لا
                    يتجزأ من هذا العقد.
                  </p>
                  <p style="margin: 0px">
                    قسم العقود: يقصد به القسم المختص بعمليات البيع والشراء والتنازل عن
                    ملكية الوحدة السكنية ويتبع الطرف الاول ويكون تحت ادارته وتصرفه داخل
                    المجمع السكني ويتكون هذا القسم من مختص بالشؤون القانونية.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">
                    شركة صناع النهضة للأستثمار والتطوير العقاري
                  </p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p style="margin: 0px">{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">تمهيد</strong>
                </div>
                <div>
                  <p>
                    لما كان الطرف الاول (البائع) يعمل في مجال الاستثمارات العقارية
                    وتسويقها وحيث أنةهو المستثمر والمسوق لمشروع مجمع النهضة السكني في
                    محافظة المثنى- مدينة السماوة بموجب الاجازة الاستثمارية المرقمة
                    410/2022 والصادرة من هيئة استثمار المثنى.
                  </p>
                  <p>
                    وبما أن الطرف الاول (البائع) قد طرح بيع الوحدات السكنية للجمهور نقدًا
                    وبحسب الدفعات المتفق عليها بين الطرفين والمثبتة في هذا العقد بمشــروع
                    ( مجمع النهضة السكني) حيث ان هذا المجمع يتمتع بطابع حضاري ومعماري
                    متميز، وبناءًا على ما تم ذكره فقد تقدم الطرف الثاني (المشتري) وأبدى
                    رغبته بشراء وحدة سكنية موضوع هذا العقد بالشروط الواردة في هذا العقد،
                    بعد ان أقر الطرفين بأهليتهما بالتعاقد وخلو ارادتها من العيب المبطل فقد
                    اتفقنا على ما يلي
                  </p>
                </div>
                <br />
                <br />
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الاولى</strong>
                </div>
                <div>
                  <strong>موضوع العقد:</strong>
                  <p>
                    باع الطرف الاول للطرف الثاني الوحدة السكنية موضوع هذا العقد، وقَبل
                    الطرف الثاني الشراء بكافة الضمانات الفعلية والقانونية بيعًا موقوفًا
                    على سداد كامل الثمن والمبالغ المترتبة عليه ماهو محدد للوحدة السكنية
                    وبالتفصيل التالي:
                  </p>
                  <v-row>
                    <v-col cols="6" md="6"><h4>رقم البلوك:</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 10px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.form_block_number }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>رقم الشارع:</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 10px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.form_street_number }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"><h4>رقم الوحدة السكنبة:</h4></v-col>
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 10px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_name }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"
                      ><h4>المساحة الشاملة للوحدة السكنية:</h4></v-col
                    >
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 10px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_total_space }}
                      </h4></v-col
                    >
                    <v-col cols="6" md="6"
                      ><h4>المساحة الصافية للوحدة السكنية:</h4></v-col
                    >
                    <v-col cols="6" md="6" style="padding-inline: 100px"
                      ><h4
                        style="
                          padding-block: 10px;
                          text-align: center;
                          border: solid 1px black;
                        "
                      >
                        {{ data.house_building_space }}
                      </h4></v-col
                    >
                  </v-row>
                  <p>
                    طبقًا لمواصفات التسليم للوحدة السكنية والمحدد موقعها بالمخطط العام
                    للمجمع المشار اليه في تمهيد هذا العقد، وقد اتفق الطرفان على بيع وشراء
                    الوحدة السكنية موضوع هذا العقد بالاضافة الى التزام الطرف الاول بالعمل
                    مع الجهات الحكومية المختصة لغرض افراز الموقع المشيد عليه المجمع وفق
                    القانون ثم فرزها الى وحدات سكنية مفرزة تثبت حقوق الملكية للمشترين في
                    الارض وفق القانون العراقي وقوانين الاستثمار وما تطرأ من تغييرات .
                  </p>
                </div>
                <br />
                <br />
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: auto">
            <div class="diss" style="height: auto">
              <div style="height: auto">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الثانية</strong>
                </div>
                <div style="height: auto">
                  <strong>ثمن الوحدة السكنية وطريقة التسديد:</strong>
                  <p>
                    1- ابرم هذا العقد ووافرق عليه الطرفان ببدل كامل قدراه ({{
                      numberWithComma(data.salary_amount)
                    }}) دينار عراقي فقط لا غير للوحدة السكنية المباعة المشار اليها في هذا
                    العقد وحسب طريقة الدفع وجدول التسديد، بواقع ({{ yearsDifference }})
                    شهر من تاريخ توقيع هذا العقد وبواقع ({{
                      data.salary_payment_months_number
                    }}) دفعات كل ( {{ data.salary_difference_months_number }} ) اشهر دفعة
                    واحدة وكالتالي.
                  </p>
                  <p>2. طريقة الدفع</p>
                  <p>
                    <strong
                      >يجب ان يتم سداد المبالغ في حساب البائع حصرا ولا يتم التعامل مع
                      المبالغ نقدا بأي حال من الأحوال يستثنى من ذلك الحالات المعلنة من قبل
                      الحكومة او توقف خدمات الانترنت او ما شابه ذلك.</strong
                    >
                  </p>
                  <br />
                  <p>
                    <strong> معلومات حساب البائع:</strong>
                  </p>
                  <v-row>
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p>اسم المصرف</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">{{ data.owner_bank_name }}</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">اسم وعنوان الفرع</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">
                        مصرف الرافدين / فرع 312 العراق – المثنى – قضاء السماوة – شارع
                        المحافظة
                      </p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">اسم الحساب</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">
                        {{ data.owner_bank_account_name }}
                      </p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">رقم الحساب</p></v-col
                    >
                    <v-col cols="6" md="6" style="padding: 3px; border: solid 1px black"
                      ><p style="margin: 0px">{{ data.owner_bank_number }}</p></v-col
                    >
                  </v-row>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>الطرف الأول / البائع</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>الطرف الثاني / المشتري</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>شركة صناع النهضة للأستثمار والتطوير العقاري</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>{{ data.owner_name }}</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
          <v-container>
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
              >
                <v-icon size="20"> mdi-phone </v-icon>6467
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com">info@nhdda.com</a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: auto">
            <div class="diss" style="height: auto">
              <div style="height: auto">
                <div style="height: auto">
                  <strong>3. جدول السداد (الدفعات): </strong>
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
                      <tr style="background-color: #bdd6ee">
                        <th>ت</th>
                        <th>تسلسل الدفعات</th>
                        <th>تاريخ الاستحقاق</th>
                        <th>مبلغ الدفعات</th>
                        <th>مبلغ الدفعات كتابة</th>
                        <th>ملاحظات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(salary_payment, index) in sortedSalaryPayments"
                        :key="index"
                      >
                        <td>
                          {{ getAdjustedIndex(index) }}
                        </td>
                        <td v-if="salary_payment.payment_position == 'مقدم'">
                          الدفعة المقدمة
                        </td>
                        <td v-else-if="salary_payment.payment_position == 'دفعة الهيكل'">
                          دفعة الهيكل
                        </td>
                        <td v-else>الدفعة ({{ getAdjustedIndex(index) }})</td>
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
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>الطرف الأول / البائع</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>الطرف الثاني / المشتري</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>شركة صناع النهضة للأستثمار والتطوير العقاري</p>
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                >
                  <p>{{ data.owner_name }}</p>
                </v-col>
              </v-row>
            </div>
          </v-container>
          <v-container>
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
              >
                <v-icon size="20"> mdi-phone </v-icon>6467
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com">info@nhdda.com</a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <br />
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    1.3- يمكن اجراء الدفعات المالية عن طريق الصكوك او بطاقات الدفع او
                    غيرها من الوسائل المستعملة في العراق، التحويلات البنكية , وطرق الدفع
                    الأخرى المقبولة من قبل البنك المركزي العراقي وعبر الأساليب المقبولة
                    والمرتبطة بالبائع.
                  </p>
                  <p>
                    2.3- يتم اعتبار رسم الحجز على انه تم سداده بمجرد تأكد استلام المبلغ
                    لدى حساب البائع او صرف قيمة الصك بغض النظر عن أي تأخر من جانب البائع
                    في صرف او إيداع اية مبالغ.
                  </p>
                  <p>
                    3.3 - يكون الدينار العراقي هو العملة الخاصة بكل المبالغ بموجب عقد
                    الحجز هذا ما لم يوافق البائع خطيا على خلاف ذلك.
                  </p>
                  <p>4.3- يقر المشتري بأن الثمن لا يتضمن أي رسوم مفروضة أو ضرائب.</p>
                  <p>5.3 - يلتزم المشتري بدفع جميع التكاليف والرسوم والنفقات بما يشمل:</p>
                  <p>
                    I- رسوم دائرة التسجيل العقاري او البلدية وأية رسوم تجديد والتي قد تعدل
                    أو يتوجب دفعها من وقت لآخر وفقاً للقوانين السارية،
                  </p>
                  <p>
                    II- رسوم دائرة التسجيل العقاري او البلدية وأية رسوم تجديد والتي قد
                    تعدل أو يتوجب دفعها من وقت الآخر وفقا للقوانين السارية وذلك مقابل أي
                    تصرف تال بالعقار أو تنازل تال عنه من قبل المشتري إلى الغير؛
                  </p>
                  <p>
                    III- أي تكاليف ورسوم وضرائب ونفقات أخرى قد تفرضها دائرة التسجيل
                    العقاري أو أية جهات اخرى في محافظة المثنى فيما يتعلق بتسجيل العقار أو
                    نقله أو تسجيل الأرض أو نقلها أو أية تعاملات أخرى للعقار أو الأرض( بما
                    في ذلك أية ضرائب مفروضة على الأرض أو العقار) أو تتعلق بها;
                  </p>
                  <p>
                    IV- أية تكاليف ورسوم ونفقات أخرى قد يفرضها المجمع الرئيسي او شركة
                    التشغيل والصيانة والخدمات والحراسة (بما في ذلك رسوم الخدمات والصيانة
                    للمباني ورسوم المجمع واستخدام (المرافق المشتركة).
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الثالثة</strong>
                </div>
                <div>
                  <strong>الاحكام العامة:</strong>
                  <p>
                    <strong>1. المعاينة:</strong>
                    يقر هنا الطرف الثاني بأنه وافق على شراء الوحدة السكنية موضوع هذا العقد
                    بعد ان اطلع على المخططات والتصاميم العامة للمجمع والخاصة بالدار
                    ومساحته وتسلسلاته وقد عاينها معاينة نافية للجهالة واطلع كذلك على مراحل
                    تقدم العمل وموعد التسليم النهائي، وان الطرف الاول قد عرض بيع الوحدات
                    السكنية ككل بغض النظر عن المساحة الدقيقة لكل نوع من الدور حيث ان
                    المساحات تختلف بأختلاف التصاميم من دار لأخر ومن بلوك لأخر وقد اطلع
                    الطرف الثاني على هذه المعلومات بشكل تام ينفي الجهالة وقبل الشراء بدون
                    تحفظ. حتى في حالة ظهور نقصان في مساحة الوحدة السكنية نقصانًا يسيرًا لا
                    يؤثر على مساحة الوحدة السكنية واستخداماتها ومساحات اجزاءها المتعددة
                    فلا يحق للطرف الثاني مطالبة الطرف الاول بأي تعويضات او يكون سببًا
                    للفسخ كما يقر الطرف الثاني (المشتري) بعلمه بمواصفات التسليم .
                  </p>
                  <p>
                    2. يقر الطرف الثاني (المشتري) بعد توقيع هذا العقد وبصفة نهائية بأن
                    يقتصراستخدام الوحدة اسكنية على الاستخدام السكني من قبل عائلة واحدة فقط
                    ولا يجوز ايجار او بيع جزء من المنزل وحسب القوانين السارية.وان
                    يقتصرانتفاعه بالوحدة السكنية المباعة وملحقاتها على الغرض الذي خصصت من
                    اجله وهو السكن العائلي فقط بحيث لا يجوز له أستخدامها بشكل مخالف للغرض
                    المتفق عليه كما لا يجوز له شطرها مما يؤدي الى زيادة عدد سكان المجمع
                    ولا يحق له اجراء أي أعمال او أبنية خارجية مثل (تغيير الواجهة او طلائها
                    بلون مخالف اوغيرة.....الخ) تؤثر بالمظهر الخارجي للدار وعدم القيام بأي
                    بناء او انشاءات او مسقفات على سطح الدار وممنوع عليه القيام بأعمال
                    تخالف النظام العام والاداب العامة .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    3- يحرق للطرف الاول (البائع) اجراء التعديلات الادرارية او العمرانية
                    اللازمة والتي يراها ضرورية على المجمع ككل بما لا يؤثر على المظهر
                    الخاراجي للمجمع والطابع المميز له بصفة عامة وعلى طراز الوحدات السكنية
                    محل هذا العقد خاصة.
                  </p>
                  <p>
                    4. كما اقر ووافق الطراف الثاني على ان يلتزم بما تقرره هيئة
                    الاستثمارودوائر التسجيل العقاري فيما يخص آلية اصدار السندات وتوقيتاتها
                    وبما لا يلغي او ينتقص من ملكية الطرف الثاني للوحدات السكنية المباعة.
                  </p>
                  <p>
                    5. في حال لم يسدد ا الطرف الثاني ( المشتري ) إلى الطرف الأول (البائع)
                    أي مبلغ مستحق الدفع من الثمن في تاريخ استحقاقه وفقاً لعقد الحجز هذا،
                    يدفع المشتري إلى البائع تعويضاً نسبته 1% شهريا (يشار إليه بلفظ "غرامة
                    التأخير") على المبلغ المستحق غير المدفوع إلى البائع ابتداء من تاريخ
                    استحقاق ذلك المبلغ وحتى تاريخ تمام سداده، ويوافق المشتري صراحة بموجبه
                    على أنه تقدير مسبق عادل ومعقول للخسارة التي ستلحق بالبائع نتيجة لتخلف
                    المشتري
                  </p>
                  <p>
                    6. الشرط الجزائي : يلتزم ويتعهد الطرف الثاني ( المشتري ) بدفع (20%) من
                    مبلغ العقد كشرط جزائي الى الطرف الأول (البائع)أو يتم إستقطاعة من مبلغ
                    الدفعة المقدمة عند عدولة عن الشراء أو إنتفاء الحاجة لدية عن الوحدة
                    السكنية ( موضوع هذا العقد ) او عدم رغبتة بالاستمرار باكمال عملية
                    الشراء .
                  </p>
                  <p>
                    7. يقر المشتري بأن المشروع في الوقت الحاضر في مرحلة التصميم ويتفهم أن
                    المخطط الرئيسي يخضع الى التغيير. يحكم تطوير المشروع ويخضع الى المخطط
                    الرئيسي بصيغته المعدلة من وقت الى اخر (يشار اليه بلفظ “المخطط
                    الرئيسي") وفقا لما يراه البائع ضروريا أو تطلبه أي جهة مختصة أثناء
                    إجراءات الموافقة على مخططات البناء، ويصرح المشتري بأنه لن يستند الى أي
                    من تلك الحقوق او يعترض على ذلك .
                  </p>
                  <p>
                    8. يوافق المشتري على الالتزام بأي تعليمات ويحرر أي مستندات اخرى قد
                    يطلبها البائع أو أي جهة حكومية بشكل معقول لتنفيذ بيع العقار وفقاً
                    لشروط اتفاقية البيع والشراء .
                  </p>
                  <p>
                    9. يمنع منعا باتاً تحويل العقار للاستخدام التجاري سواء كامل العقار او
                    جزءًا منه .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الرابعة</strong>
                </div>
                <div>
                  <strong>التنفيذ والتسليم:</strong>
                  <p>
                    1- تكون تفاصيل العقار (المنصوص عليها في التفاصيل) والرسومات والمخططات
                    مؤقتة وقابلة للتغيير. يعلم المشتري بذلك ويوافق على أن للبائع اجراء هذه
                    الإضافات والتعديلات والتغييرات والتصليحات والتغييرات والالغاءات في
                    مخطط التصميم ومخططات البناء ومخططات الطوابق وفقا لما يراه البائع لازما
                    أو مطلوباً أو وفقاً لما تطلبه أي جهة مختصة. يقر المشتري بعدم اعتراضه
                    على ذلك، ويوافق بخلاف ذلك على انه لا يحق له الحصول على أي تعويض عن تلك
                    التغييرات ولا يحق له الرجوع على أي كان بشأنها.
                  </p>
                  <p>
                    2- يلتزم الطرف الاول بتسليم الوحدة السكنية المباعة موضوع هذا العقد
                    للطرف الثاني (جاهزة للسكن مع توفير الخدمات الضرورية للسكن فيها) خلال
                    الموعد المقرر ( <span style="margin-inline: 60px"></span> ) شهرًا من
                    تاريخ هذا العقد.
                  </p>
                  <p>
                    3- يعتبر الطرف الثاني مبلغًا في حال عدم حضوره بعد ثلاثون يوم من الموعد
                    الذي حدده الطرف الاول لغرض استلام الوحدة السكنية ويعد الطرف الثاني
                    مخلًا ببنود هذا العقد بعد مضي ثلاثون يوم ومستلمًا لها استلامًا حكيمًا
                    وكاملًا وسليمًا ومطابقًا للمواصفات المتفق عليها ومتنازلًا عن حقه في
                    المطالبة بأي تغيير داخل وحدته السكنية وتعتبر الوحدة السكنية موضوع هذا
                    العقد وملحقاته في حيازته مما تعتبر وفاءًا من الطرف الاول بألتزاماته
                    بالتسليم مع ما يترتب على ذلك من اثار قانونية ومالية وفنية واعتبارية
                    وتصبح دفعة الاستلام بمجرد التسليم الحكمي المشار اليه مستحقة الدفع
                    وتسري الغرامات على التأخير في سداد دفعة الاستلام او الدفعات الاخرى
                    المتفق عليها بين الطرفين.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    4- مع الاقرار والاعتراف من قبل الطرف الثاني بخصم جميع ايام منع التجوال
                    والعطل الرسمية والاعياد والمناسبات الدينية والاوضاع الامنية والاحداث
                    التي تعتبر ظروف طارئة او قاهرة والتي تحول دون تسليم او اكمال ما يتبقى
                    من اعمال بناء الوحدة السكنية وتكون مضافة على التوقيتات الخاصة بمدة
                    الانجاز.
                  </p>
                  <p>
                    5- اقر واعترف ووافق الطرف الثاني على عدم منع او اعاقة الطرف الاول من
                    القيام بكافة الانشاءات والانهاءات المتبقية للمشروع ولا يجوز له ان
                    يعتبر قيام الطرف الاول بتلك الاعمال معوقًا او مانعًا من انتفاعه
                    بالوحدة السكنية وملحقاتها.
                  </p>
                  <p>
                    6- يلتزم الطرف الثاني بتسديد كافة الرسوم والضرائب الجديدة التي ستفرضها
                    الجهات الحكومية لغرض تسجيل هذه الوحدة السكنية، ولا يحق للطرف الثاني
                    الرجوع على الطرف الاول بما يقوم بتسديده في هذا الشأن.
                  </p>
                  <p>
                    7- في حال كان هناك أي تغيير في المساحة البنائية القابلة للبيع أو مساحة
                    قطعة الأرض من العقار عن المساحة القابلة للبيع أو مساحة قطعة الأرض
                    المنصوص عليها في عقد الحجز هذا عندئذ، يتم تعديل الثمن فقط بالتناسب مع
                    أي مقدار يزيد عن المساحة المثبتة.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الخامسة</strong>
                </div>
                <div>
                  <strong>انتقال الملكية:</strong>
                  <p>
                    1- لا تنتقل ملكية الوحدة السكنية الا بعد قيام الطرف الثاني بتسديد كامل
                    المبالغ والدفعات التي بذمته لصالح الطرف الاول وحسب ما مذكور في جدول
                    الدفعات في هذا العقد على ان لا تكون الوحدة السكنية موضوع هذا العقد
                    محجوزة او مرهونة الى اي جهة اخرى.
                  </p>
                  <p>
                    2- يلتزم ويتعهد الطرف الثاني بتسديد مبلغ الوحدة السكنية المثبت في هذا
                    العقد بحسب جدول الدفعات خلال خمسة عشر يوماً من تاريخ استحقاق الدفعة
                    المقررة وبخلافه يقر الطرف الثاني ويلتزم ويتعهد بتأدية وتسديد مبلغ (
                    <span style="margin-inline: 80px"></span> ) دينار عن كل يوم تأخير على
                    ان لا تتجاوز هذه الغرامات مدة ستون يوم من تاريخ استحقاقها وبخلافه اقرَ
                    ووافق الطرف الثاني على اللجوء والاخذ بالفقرة الثالثة ادنى من المادة
                    الخامسة من هذا العقد (انتقال الملكية) .
                  </p>
                  <p>
                    3- يعد هذا العقد باطلاً ولا يترتب عليه اي اثر قانوني بعد مرورستون
                    يوماً من تاريخ استحقاق الدفعة المالية وعدم تسديدها ويعترف ويقر ويلتزم
                    الطرف الثاني لصالح الطرف الاول بالموافقة ويخوله ويتنازل عن كافة الحقوق
                    لصالح الطرف الاول لغرض بيع العقار موضوع هذا العقد واعادة المبلغ الى
                    الطرف الثاني بالسعر المذكور والمثبت في هذا العقد بعد خصم المصاريف
                    الادارية والقانونية والغرامات التأخيرية وعمولات البيع و الشرط الجزائي
                    .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    4- يعد هذا العقد حصرياً بالمشتري وغير قابل للتنازل أو النقل، ولا يجوز
                    للمشتري في أي وقت نقل أو التنازل عن حقوقه والتزاماته بموجبه إلى الغير.
                    يجوز للمشتري التنازل أو نقل حقوقه والتزاماته بموجب اتفاقية البيع
                    والشراء بموافقة البائع الخطية المسبقة (والتي لا تحجب دون سبب معقول)،
                    شريطة أن يكون المشتري
                  </p>
                  <p>
                    5-العقد هذا ساري المفعول حتى وان كان السند الخاص بالوحدة السكنية بأسم
                    المشتري وذلك لغرض الحفاظ على الشكلية العامة للمجمع .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة السادسة</strong>
                </div>
                <div>
                  <strong>تسجيل الوحدة السكنية:</strong>
                  <p>
                    يلتزم الطرف الثاني بتسليم الطرف الاول كافة المستمسكات الثبوتية
                    والوثائق الرسمية اللازمة لإتمام التسجيل وبخلافه يتحمل الطرف الثاني
                    كافة التبعات القانونية كما يلتزم الطرف الثاني بالعمل مع اللجنة المختصة
                    العائدة للطرف الاول بالتسجيل العقاري والتي تقوم بالتنسيق مع دائرة
                    التسجيل العقاري لنقل وتسجيل ملكية الوحدة السكنية باسم الطرف الثاني
                    (المشتري الاول) على ان يكون الطرف الثاني مسدداً لكامل ثمن الوحدة
                    السكنية وملحقاتها ولكافة المستحقات المالية والغرامات الناتجة عن هذا
                    العقد. وكما يلتزم الطرف الثاني بدفع كافة الرسوم والمصاريف التي تتعلق
                    بنقل الملكية دون مطالبة الطرف الاول بأي تعويض عن تلك الرسوم والمصاريف
                    وحسب القوانين المعمول بها في جمهورية العراق .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة السابعة</strong>
                </div>
                <div>
                  <strong>العناوين:</strong>
                  <p>
                    نظراً لضرورة وجود وسيلة اتصال قانونية قائمة ومعترف بها قانونياً بين
                    طرفين العقد فإن كل من طرفي هذا العقد يقر بصحة العنوان الخاص به والمبين
                    في هذا العقد وباتخاذ هذا العنوان محلاً مختاراً للتبليغات له ويلتزم
                    باخطار الطرف الآخر في حال تغييره باشعار موصى عليه بعلم الوصول والا
                    اعتبرت جميع الاعلانات والتبليغات المرسلة التي تتم عليه صحيحة ومنتجة
                    لكافة اثارها القانونية وتعتبر رسائل البريد الالكتروني بين الطرفين
                    المتعاقدين والرسائل النصية على ارقام الهواتف المحمولة المثبتة في هذا
                    العقد للطرف الثاني وسيلة رسمية وقانونية للتواصل والمخاطبات والتبليغات.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">المادة الثامنة</strong>
                </div>
                <div>
                  <strong>احكام ختامية:</strong>
                  <p>
                    1- حرر هذا العقد من طرفيه وبعد الاطلاع عليه وتدقيقه وقبول محتواه
                    واقرار ما جاء فيه وقبول الطرفين به.
                  </p>
                  <p>
                    2- يخضع عقد الحجز هذا ويفسر وفقا للقوانين العراقية والقوانين المعمول
                    بها في العراق، ويوافق الطرفان على إحالة أي نزاع قد ينشأ عن أو نتيجة
                    لنموذج الحجز الماثل، بما في ذلك أي مسألة بشأن وجوده أو سريانه أو
                    إنهائه إلى محاكم المثنى .
                  </p>
                  <p>
                    3- في حال حصول اي خلاف بين الطرفين يتم تسوية الامر من خلال التفاهم بين
                    الطرفين بالطرق الودية وبخلاف ذلك يتم اللجوء الى القضاء.
                  </p>
                  <p>
                    4- تكون محاكم المثنى هي المختصة بالنظر في الخلافات الناتجة من جراء
                    تنفيذ هذا العقد.
                  </p>

                  <p>
                    5- في حال صدور اي تعليمات او تعديلات من الهيئة الوطنية للاستثمار او
                    هيئة استثمار المثنى او الدائر الرسمية الاخرى المختصة ذات العلاقة فانها
                    تسري على الطرفين المتعاقدين.
                  </p>
                  <p>
                    6- في حال وجد أي جزء من هذا العقد باطلاً أو غير نافذ بسبب أي قانون
                    معمول به، يتم حذف ذلك الجزء وتستمر بقية أجزاء هذا العقد سارية ونافذة
                    بشكل تام.
                  </p>
                  <p>
                    7- حرر هذا العقد وملاحقه بثلاث نسخ اصلية تسلم نسخة لكل طرف للعمل
                    بموجبها والنسخة الثالثة للارشفة.
                  </p>
                  <p>8- ملاحق العقد هي :-</p>
                  <ul style="margin-right: 40px">
                    <li>ملحق رقم (1) تعهد خاص بالحفاظ على طابع المجمع.</li>
                    <li>ملحق رقم (2) ادارة المجمع والصيانة والإشتراك الشهري.</li>
                    <li>
                      ملحق رقم (3) الكهرباء والماء والغاز وخدمات الانترنيت والاتصالات.
                    </li>
                  </ul>
                  <p>
                    9- على ان تعتبر جميع الملاحق اعلاه جزءاً لا يتجزأ من هذا العقد الرئيسي
                    المبرم بين الطرفين .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">ملحق رقم (1)</strong>
                </div>
                <div>
                  <strong>الشروط العامة:</strong>
                  <p>
                    نظراً الى ان المجمع السكني له طابعه الخاص والمتميز باعتباره مجمعاً
                    عمرانياً متكامل المرافق ولتحقيق مصلحة الطرف الاول والطرف الثاني ومصلحة
                    جميع مالكي وقاطني المجمع السكني فقد قبل الطرف الثاني شراء الوحدة
                    السكنية موضوع هذا العقد وملحقاته بالشروط الإلزامية الواردة في العقد
                    وبالتالي فانها تسري على الطرف الثاني وعلى خلفه العام او الخاص
                    الالتزامات التالية:-
                  </p>
                  <p>
                    1- يلتزم الطرف الثاني بعدم ادخال اي سلاح او ادخال حراسه الشخصيين داخل
                    المجمع السكني حفاظا ًعلى أمن وسلامة المجمع وطابعه المميز، استثناء من
                    ذلك يمكن اخذ الموافقات الخاصة من الشركة التي ستتولى ادارة المجمع في
                    ادخال السلاح المرخص والحراس الشخصيين.
                  </p>
                  <p>
                    2- يلتزم الطرف الثاني بعدم اجراء اية تعديلات او تغييرات على التصميم
                    الداخلي للوحدة السكنية الا بعد الحصول على الموافقة التحريرية من الشركة
                    التي سستولى ادارة المجمع في هذا الشأن على ان يكون كل ما تقدم على نفقة
                    الطرف الثاني وحده.
                  </p>
                  <p>
                    3- يتعهد الطرف الثاني بعدم تغيير اماكن الحمامات والمطابخ ودورات المياه
                    في داخل الوحدة السكنية.
                  </p>
                  <p>
                    4- يلتزم الطرف الثاني بعدم اجراء اي تعديلات او تغييرات على الواجهات
                    الخارجية سواء بتغيير لون الواجهات او تغيير مواد انهاء الواجهات او
                    تعديل الشبابيك او الشرفات او البلكونات او الاسطح او مقاسات الفتحات
                    بالواجهات سواء بالزيادة او النقصان او استحداث فتحات جديدة بالواجهات او
                    اغلاق الفتحات الموجودة او تغيير شكل او مادة شبابيك وابواب وسياجات
                    الدرج (المحجر) والواجهات او اي تغيير من اي نوع كان.
                  </p>
                  <p>
                    5- يتعهد الطرف الثاني بعدم اضافة بناء او انشاءات او مسقفات في اسطح
                    الوحدات السكنية او في الواجهة الامامية لها.
                  </p>
                  <p>
                    6- يلتزم الطرف الثاني بعدم اجراء اي تعديلات في اماكن انتظار السيارات
                    (الكراج) او اجراء اي اعمال هدم وبناء او اقامة فتحات جديدة او سد فتحات
                    موجودة فعلاً في اي منها او وضع اي مواد قابلة للاشتعال او تضر بالسلامة
                    العامة او مالكي الوحدات السكنية في المجمع.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    7- يلتزم الطرف الثاني بعدم وضع اي مواد في الاسطح او الشرفات
                    (البالكونات) او وضع قطع لافتات من شانها تشويه المنظر الخارجي للمجمع.
                  </p>
                  <p>
                    8- يلتزم الطرف الثاني بعدم استخدام اي تجهيزات او معدات او اجهزة
                    الكترونية او كهربائية تؤدي الى حدوث ضوضاء او تسبب ازعاجاً لمالكي
                    الوحدات السكنية او تعرض حياتهم للخطر.
                  </p>
                  <p>
                    9- يلتزم الطرف الثاني بعدم قطع او اتلاف الاشجار بصرف النظر عن حجمها او
                    نوعها لاي سبب كان متى ما يتم غرسها على جانبي الطرقات او الممرات او
                    الحدائق او الاشجار الفاصلة بين الوحدات السكنية وكذلك عدم التغيير في
                    نوعية تلك المزروعات حاظاً على الطابع العام للمجمع.
                  </p>
                  <p>
                    10- يلتزم الطرف الثاني بالمحافظة على الخدمات والمرافق العامة المخصصة
                    لخدمة المجمع السكني وعدم احداث اي ضرر بها كما يلتزم بالمحافظة على
                    نظافة الشوارع والارصفة ، ويتعهد الطرف الثاني بعدم ازعاج او احداث ضوضاء
                    او مخلفات او مخاطر من جراء تربية الحيوانات .
                  </p>
                  <p>
                    11- يلتزم الطرف الثاني بالامتثال التام بالضوابط والتعليمات المفروضة من
                    الطرف الاول او الشركة التي ستتولى الادارة.
                  </p>
                  <p>
                    12- يلتزم الطرف الثاني بعدم اقامة سقائف او منشآت داخل المجمع او على
                    الارصفة لتغطية السيارات او اي اغراض اخرى.
                  </p>
                  <p>
                    13- يلتزم الطرف الثاني بعدم استخدام سطح الوحدة السكنية لغير الغرض
                    المخصص له كما يلتزم بعدم استخدام السطح لتخزين المواد او تربية الطيور
                    او تركيب الاعلانات او ابراج الاتصالات.
                  </p>
                  <p>
                    14- يلتزم الطرف الثاني بكافة التوجيهات والتعليمات التي تصدر من ادارة
                    المجمع.
                  </p>
                  <p>
                    15- يلتزم الطرف الثاني بعدم ادخال اي مواد بناء او ادوات عمل بناء
                    نهائياً وفي حال حاجة الطرف الثاني لذلك تكون بالتنسيق ومن خلال الطرف
                    الاول (قسم الصيانة) مقابل اجور مالية.
                  </p>
                  <p>16- يمنع اضافة اي نوع من انواع الاسيجة .</p>
                  <p>17- يمنع اضافة اي بناء .</p>
                  <p>
                    18- لا يحق تربيه اي نوع من انواع الحيوانات ما لم يكون بموجب موافقة
                    رسمية .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div>
                  <p>
                    <strong>ملاحظة:</strong>
                  </p>
                  <p>
                    فيما ذكر اعلاه فيحق للطرف الاول فرض الغرامات المالية على الطرف الثاني
                    في حال قيام الاخير باي مخالفات لبنود هذا العقد وتحديد مبلغ الغرامة حسب
                    ما يراه الطرف الاول، وفي حال استمرار الطرف الثاني بالمخالفات فيحق
                    للطرف الاول حجب الخدمات عن الطرف الثاني منها (الماء – الكهرباء ...
                    الخ) ولا يتم اعادتها الى بعد قيام الطرف الثاني بتسديد كافة مبالغ
                    الغرامات المفروضة عليه ورفع والغاء تلك المخالفات.
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">ملحق رقم (2)</strong>
                </div>
                <div>
                  <strong>ادارة المجمع السكني واعمال الصيانة والإشتراك الشهري:</strong>
                  <p>
                    حفاظاً على مظهر المجمع السكني وحمايته من كل النواحي ( خدمات الامن
                    والحراسة والصيانة والنظافة وضمان الادارة المستمرة ولكافة الخدمات) سوف
                    يقوم الطرف الاول بنفسة او عن طريق التعاقد مع احدى الشركات الرصينة لغرض
                    ادارة المجمع وصيانة المرافق العامة فيه لخدمة المجمع وساكنيه ليبقى في
                    حالة جيدة مثل ( خدمات الامن والحراسة - الطرقات – الحدائق – والمناطق
                    الخضراء – او اي مرافق اخرى) ويقر الطرف الثاني بان الطرف الاول وحده او
                    الشركة التي ستتولى الادارة هي صاحبة الحق في القيام باعمال الادارة
                    اعلاه للمجمع وتعريف كافة شؤونه وابرام كافة التصرفات واداء كافة الاعمال
                    اللازمة لذلك ويلتزم الطرف الثاني بعدم التعاقد مع اي طرف اخر للقيام
                    بذات الاعمال كما يلتزم ويقر الطرف الثاني بدفع مبلغ الاشتراك الشهري
                    الشامل الى الطرف الاول شهريا ويوافق الطرف الثاني على ذلك المبلغ والذي
                    يدفع كخدمات شهرية في بداية كل شهر مع ملاحظة التفصيل التالي:-
                  </p>
                  <p>
                    1- في حال عدم سداد الطرف الثاني ما هو مستحق عليه من مصاريف الصيانة
                    والخدمات في تاريخ استحقاقها يحق للطرف الاول او الشركة التي ستتولى
                    الادارة اتخاذ كافة الاجراءات القانونية لتحصيل المبالغ المستحقة بعد
                    انذار الطرف الثاني بوجوب تسديد ما بذمته من اجور الخدمات المقدمة له من
                    قبل الطرف الاول وفي حال عدم تسديد مبالغ الخدمات المقدمة وخلال اول خمسة
                    ايام من كل شهر وافق الطرف الثاني وخول الطرف الاول باغلاق وقطع الخدمات
                    عن الوحدة السكنية موضوع هذا العقد.
                  </p>
                  <p>
                    2- لا يحق للطرف الثاني الادعاء بالتخلي عن حصته بالاجزاء المشتركة بهدف
                    التخلص من الاشتراك في تكاليف الخدمات المقدمة من قبل الطرف الاول او
                    الشركة التي ستتولى الادارة.
                  </p>
                  <p>
                    3- يقر الطرف الثاني بقبوله بكافة التعليمات الصادرة من قبل الطرف الاول
                    او من يحال اليه مهمة القيام باعمال الصيانة والتي من شأنها المحافظة على
                    استمرار او تنفيذ اعمال الصيانة للمرافق والخدمات المذكورة.
                  </p>
                  <p>
                    4- يتم فرض غرامات تاخيرية على الطرف الثاني ( المشتري ) وقدرها (
                    <span style="margin-inline: 40px"></span> ) دينار عراقي عن كل يوم
                    تاخير عند عدم تسديدة الى مبلغ الاشتراك الشهري بعد مروراول خمسة ايام من
                    كل شهر .
                  </p>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black">الملحق رقم (3)</strong>
                </div>
                <div>
                  <strong
                    >اشتراك الكهرباء وتركيب عدادات الكهرباء والماء وتوصيل خدمات
                    الانترنت:</strong
                  >
                  <ul style="margin-right: 26px">
                    <li>اشتراك الكهرباء الوطني:</li>
                  </ul>
                  <p>
                    يلتزم الطرف الثاني فور استلامه للوحدة السكنية موضوع هذا العقد بتنفيذ
                    اجراء تسجيل عداد الكهرباء المثبت في الوحدة السكنية لدى الدوائر المختصة
                    وخلال سبعة ايام من تاريخ استلام الطرف الثاني للوحدة السكنية.
                  </p>
                  <ul style="margin-right: 26px">
                    <li>اشتراك كهرباء المولدة:</li>
                  </ul>
                  <p>
                    يلتزم الطرف الثاني بالاشتراك بالاضافة الى الكهرباء الوطنية حيث يقوم
                    الطرف الاول بانشاء وحدات التيار الكهربائي (مولدات) وتوصيله الى الوحدات
                    السكنية وفق برنامج العمل للمولدات مع مراعات اوقات الصيانة، ولا يحق
                    للطرف الثاني ان يسحب اي تيار كهربائي من اي جهة اخرى او تشغيل مولد
                    كهربائي داخل الوحدة السكنية.
                  </p>
                  <ul style="margin-right: 26px">
                    <li>اشتراك المياه:</li>
                  </ul>
                  <p>
                    اتفق الطرفان على قيام والتزام الطرف الثاني بتسجيل عداد الماء
                    (الميزانية) المثبت في الوحدة السكنية في دائرة الماء المختصة (دائرة ماء
                    المثنى) الكائن بها الوحدة السكنية المباعة مع التزام الطرف الثاني بسداد
                    ما يخصه من استهلاك المياه على اساس ما تفسر عن قراءة العداد.
                  </p>
                  <ul style="margin-right: 26px">
                    <li>اشتراك الانترنت:</li>
                  </ul>
                  <p>
                    اتفق الطرف الاول على توصيل القابلو الضوئي (الانترنت) من قبل شركة مختصة
                    وتوصيله الى الوحدة السكنية المباعة مع التزام الطرف الثاني بسداد ما
                    يخصه من بدل اشتراك شهري واجور اخرى .
                  </p>
                  <strong>
                    الادارة لها كامل الحق بالجباية او بأختيار من ينوب عنها في الخدمات
                    المذكورة انفاً (الكهرباء – الماء – الانترنت - وخدمات اخرى الى المجمع )
                    .
                  </strong>
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center">
                <strong style="border-bottom: solid 1px black"
                  >نسخ العقد والمواد والملاحق</strong
                >
              </div>
              <div>
                <strong
                  >حرر هذا العقد من ( ثلاث ) نسخ سلمت نسخة منه الى المشتري ونسخة تودع في
                  مركز المبيعات ونسخة للحفظ في شركة الطرف الاول .</strong
                >
                <strong>مواد العقد : المادة الاولى ( موضوع العقد ) </strong>
                <p>المادة الثانية ( ثمن الوحدة السكنية وطريقة التسديد )</p>
                <p>المادة الثالثة ( الاحكام العامة )</p>
                <p>المادة الرابعة ( التنفيذ والتسليم )</p>
                <p>المادة الخامسة ( انتقال الملكية )</p>
                <p>المادة السادسة ( تسجيل الوحدة السكنية )</p>
                <p>المادة السابعة (العناوين )</p>
                <p>المادة الثامنة ( احكام ختامية )</p>
                <p>ملاحق العقد :</p>
                <p>1- تعهد خاص بالحفاظ على طابع المجمع .</p>
                <p>2- ادارة المجمع السكني واعمال الصيانة والاشتراك الشهري .</p>
                <p>
                  3- اشتراك الكهرباء وتركيب عدادات الكهرباء والماء والغاز وخدمات الانترنيت
                  والاتصالات .
                </p>
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                  "
                >
                  <strong>الطرف الثاني ( المشتري ) </strong>
                  <strong>الطرف الاول ( البائع )</strong>
                </div>
                <br />
                <br />
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                  "
                >
                  <strong>الشعبة المالية</strong>
                  <strong>الشعبة القانونية</strong>
                </div>
              </div>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        class="gdd"
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
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
          <v-container style="padding: 2px 25px">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="12" md="12" style="text-align: end">
                <img :src="logoPrint" style="width: 100%" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="height: 100%">
            <div class="dis">
              <div style="height: 100%">
                <div style="text-align: center">
                  <strong style="border-bottom: solid 1px black"
                    >على بركة الله تم توقيع هذا العقد من ثمانية مواد وثلاث ملاحق وعليه وقع
                    الطرفان في محافظة المثنى بتاريخ {{ date }}
                  </strong>
                </div>
                <br />
                <div>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                    "
                  >
                    <strong>الطرف الثاني ( المشتري ) </strong>
                    <strong>الطرف الاول ( البائع )</strong>
                  </div>
                  <br />
                  <br />
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                    "
                  >
                    <strong>الاسم الكامل : {{ data.owner_name }}</strong>
                    <strong>الاسم الكامل :</strong>
                  </div>
                  <br />
                  <br />
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                    "
                  >
                    <strong>رقم الهوية : {{ data.owner_id_number }}</strong>
                    <strong>رقم الهوية :</strong>
                  </div>
                  <br />
                  <br />
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                    "
                  >
                    <strong>التوقيع :</strong>
                    <strong>التوقيع :</strong>
                  </div>
                  <br />
                  <br />
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-end;
                    "
                  >
                    <strong style="margin-left: 150px">ختم قسم العقود :</strong>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الأول / البائع</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>الطرف الثاني / المشتري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col
                >
                <v-col
                  cols="6"
                  md="6"
                  style="
                    padding: 3px;
                    background-color: rgb(189 214 238);
                    border: solid 1px black;
                  "
                  ><p>{{ data.owner_name }}</p></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container>
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
                ><v-icon size="20"> mdi-phone </v-icon>6467</v-col
              >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: left; white-space: pre-wrap"
              >
                المثنى - السماوة<br /><a href="mailto:info@nhdda.com"
                  >info@nhdda.com</a
                ></v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/nhdda.jpg";
import ba from "@/assets/images/icons/ba.png";
import numberWithComma from "@/constant/number";
import { getCurrentDateInString } from "@/constant/date";
import tafqeet from "@/constant/Tafqeet.js";

export default {
  data() {
    return {
      data: {},
      user: null,
      ba,
      logoPrint,
      date: getCurrentDateInString(),
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintNahdda"));
    this.user = JSON.parse(localStorage.getItem("results"));

    if (this.data.first_payment_date && this.data.last_payment_date) {
      this.yearsDifference = this.getMonthsDifference(
        this.data.first_payment_date,
        this.data.last_payment_date
      );
    }
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
