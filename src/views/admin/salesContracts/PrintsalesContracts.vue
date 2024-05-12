<template>
  <div>
    <v-container id="pri">
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container style="text-align: center">
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center">
                <h2 style="border-block: solid 2px black; margin-inline: 80px">
                  مجمع النهضة السكني
                </h2>
                <h2>عقد شراء وحدة سكنية</h2>
              </div>
              <br />
              <div>
                <v-row>
                  <v-col cols="6" md="6"><h4>رقم العقد:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
                    </h4></v-col
                  >
                  <v-col cols="6" md="6"><h4>تاريخ التنظيم:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
                    </h4></v-col
                  >
                  <v-col cols="6" md="6"><h4>رقم البلوك:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
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
                      123
                    </h4></v-col
                  >
                  <v-col cols="6" md="6"><h4>رقم الدار:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
                    </h4></v-col
                  >
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>اسم الشركة</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>
                      شركة صناع النهضة لالستثمار والتطوير العقاري والصناعي
                      والطاقة والزراعي والثروة الحيوانية والتجارة العامة /
                      يمثلها المدير المفوض اضافة الى لوظيفته.
                    </p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>العنوان / مقر الشركة</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>
                      العراق- بغداد- اليرموك<br />
                      م816/ ش3/ د/ 9
                    </p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>رقم هاتف الشركة</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>70047476769</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>البريد الألكتروني</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>sonaaco@yahoo.com</p></v-col
                  >
                </v-row>
              </div>
              <div>
                <p>حرر هذا العقد في اليوم المصادف 2024/11/5</p>
                <p>بين كل من :</p>
                <p>
                  الطرف االول/ البائع( شركة صناع النهضة لألستثمار والتطوير
                  العقاري )
                </p>
                <p>( الطرف الثاني –المشتري )</p>
              </div>
              <div>
                <v-row>
                  <v-col
                    cols="6"
                    md="6"
                    style="padding: 3px;background-color: #99ccff; border: solid 1px black"
                    ><p>الأسم الكامل</p></v-col
                  >
                  <v-col
                    cols="6"
                    md="6"
                    style="padding: 3px;background-color: #99ccff; border: solid 1px black"
                    ><p>المعلومات</p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>
                      العنوان المختار من قبل الطرف الثاني /المشتري كمحل للتبليغ
                    </p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black">
                    <div
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                      "
                    >
                      <p style="margin-left: 25%">المحافظة :</p>
                      <p>الحي :</p>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                      "
                    >
                      <p style="margin-left: 25%">الدار :</p>
                      <p style="margin-left: 25%">الزقاق :</p>
                      <p>المحلة :</p>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                      "
                    >
                      <p>اقرب نقطة دالة :</p>
                    </div>
                  </v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"
                    ><p>
                      رقم الهاتف
                    </p></v-col
                  >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black">
                    
                  </v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"><p>البريد الألكتروني</p></v-col >
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"><p>رقم البطاقة الوطنية وتاريخ الاصدار</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"><p>رقم هوية الاحوال المدنية ومكان الاصدار وتاريخ الاصدار رقم شهادة الجنسية ومكان الاصدار وتاريخ الاصدار</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"><p>رقم بطاقة السكن ومكان الاصدار وتاريخ الاصدار </p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;border: solid 1px black"></v-col>
                </v-row>
                <br>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المصطلحات والتعاريف</strong>
              </div>
              <div>
                <p><strong>الشركة:</strong>شركة صناع النهضة للاستثمار والتطوير العقاري والصناعة والطاقة والزراعة والثروة الحيوانية والتجارة العمة محدودة المسؤلية أسست بموجب قانون الشركات العراقية رقم 21 لسنة 1997 الواقعة في 
                    بغداد اليرموك م/618 ش/3 د/59
                </p>
                <p><strong>العقد:</strong>هو الوثيقة التي توقعها الشركة مع المشتري لأي من الوحدات السكنية الكائنة في هذا المشروع والمعروف هنا باسم ( مجمع النهضة السكني ).</p>
                <p><strong>الأجزاء المشتركة:</strong>وتعني هنا على سبيل المثال لا الحصر، الحدائق، المداخل، والكراجات الخ... وهي كافة الاجزاء التي ينتفع منها السكان في هذا المشروع.</p>
                <p><strong>موعد التسليم:</strong>هو موعد تسليم الوحدات السكنية للمشتري وفقاً لما يحدده الطرف الاول (البائع) والمثبت بهذا العقد وحسب المتغيرات والاحداث وبما لايؤثر بشكل كبير على الموعد المقرر مع الأخذ بعين الاعتبار الحالات الطارئة.</p>
                <p><strong>الوحدة السكنية:</strong>هي الدار الموصوف بهذا العقد وهو عبارة عن دار سكني مثبت برقم بلوك ورقم شارع ورقم دار.</p>
                <p><strong>الثمن:</strong> المبلغ الكلي للوحدة السكنية.</p>
                <p><strong>جدول التسديد: </strong> يقصد به طريقة سداد ثمن الوحدة السكنية والوارد بهذا العقد والذي يبين مواعيد تسديد مبلغ الوحدة السكنية.</p>
                <p><strong>الفوائد القانونية: </strong> يقصرد بها الفوائد القانونية المبينة نسبها في هذا العقد نتيجة التأخر والتخلف عن تسديد الدفعات المستحقة بذمة المشتري او التأخر في تسديد الخدمات او أية فوائد قانونية أخرى نصت عليها بنود هذا العقد.</p>
                <p><strong> التسجيل: </strong>  يقصرد به تسجيل الوحدة السكنية المباعة للمشتري لدى الجهات المختصة وفق القانون العراقي وقانون االستثمار رقم 13 لسنة 2006 وتعديلاته وما تقراه القوانين العراقية.</p>
                <p><strong> رسوم التسجيل: </strong>  يقصرد بها المبالغ الوجب  تسديدها من قبل المشتري ولغرض تسجيل الوحدة السكنية بأسمه في دائرة التسجيل العقاري والهيئة العامة للضرائب وأي رسوم أخرى يتوجب على المشتري تسديدها.</p>
                <p><strong>  الملاحق: </strong>  يقصد بها الملاحق المرافقة مع هذا العقد والتي تعتبر جزء لا يتجزأ من هذا العقد.</p>
                <p><strong>  قسم العقود : </strong>   يقصد به القسم المختص بعمليات البيع والشراء والتنازل عن ملكية الوحدة السكنية ويتبع الطرف الأول ويكون تحت ادارته وتصرفه داخل المجمع السكني ويتكون هذا القسم من مختص بالشؤن القانونية.</p>
              </div>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">تمهيد</strong>
              </div>
              <div>
                <p>لما كان الطرف الأول (البائع) يعمل في مجال الأستثمارات العقارية وتسويقها وحيث أنه المستثمر والمسوق لمشروع مجمع النهضة السكني في محافظة المثنى-مدينة السماوة بموجب الأجازة الأستثمارية المرقمة 
                    2022/410 والصادرة من هيئة أستثمار المثنى.
                </p>
                <p>وبما ان الطرف الأول(البائع) قد طرح بيع الوحدات السكنية للجمهور نقداً وبحسب الدفعات المتفق عليها بين الطرفين والمثبتة في هذا العقد بمشروع (محمع النهضة السكني) 
                    حيث ان هذا المجمع يتمتع بطابع حضاري ومعماري متميز ، وبناءاً على ما تم ذكره فقد تقدم الطرف الثاني (المشتري) وابدى رغبته بشراء وحدة سكنية موضوع هذا العقد 
                    بالشروط الواردة في هذا العقد، بعد ان اقر الطرفين بأهليتهما بالتعاقد وخلو ارادتها من العيب المبطل فقد اتفقا على ما يلي
                </p>
              </div>
              <br>
              <br>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الأولى</strong>
              </div>
              <div>
                <strong>موضوع العقد:</strong>
                <p>باع الطرف الأول للطرف الثاني الوحدة السكنية موضوع هذا العقد، وقبل الطرف الثاني الشراء بكافة الضمانات الفعلية والقانونية بيعاً موقوفاً على سداد كامل الثمن والمبالغ المترتبة عليه ما هو محدد 
                    للوحدة السكنية وبالتفصيل التالي:
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
                      123
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
                      123
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
                      123
                    </h4></v-col
                  >
                  <v-col cols="6" md="6"><h4>المساحة الشاملة للوحدة السكنية:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
                    </h4></v-col
                  >
                  <v-col cols="6" md="6"><h4>المساحة الصافية للوحدة السكنية:</h4></v-col>
                  <v-col cols="6" md="6" style="padding-inline: 100px"
                    ><h4
                      style="
                        padding-block: 10px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      123
                    </h4></v-col
                  >
                </v-row>
                <p>طبقاً لمواصفات التسليم للوحدة السكنية زالمحدد موقعها بالمخطط العام للمجمع المشار اليه في تمهيد هذا العقد، وقد اتفق الطرفان 
                    على بيع وشراء الوحدة السكنية موضوع هذا العقد بالاضافة الى التزام الطرف الاول بالعمل مع الجهات الحكومية المختصة لغرض افراز الموقع المشيد عليه المجمع وفق القانون 
                    ثم فرزها الى وحدات سكنية مفرزة تثبت حقوق الملكية للمشترين في الارض وفق القانون العراقي وقوانين الاستثمار وما تطرأ من تغييرات.
                </p>
              </div>
              <br>
              <br>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الثانية</strong>
              </div>
              <div>
                <strong>ثمن الوحدة السكنية وطريقة التسديد:</strong>
                <p>1- 
                    ابرم هذا العقد ووافرق عليه الطرف الطرفران ببدل كامل قدراه (   ) دينار عراقي فقط
                    لا غير للوحدة السكنية المباعة المشار اليها في هذا العقد وحسب طريقة الدفع وجدول التسديد، بواقع
                    (   ) شهر من تاريخ توقيع هذا العقد وبواقع (    ) دفعات كل (     ) اشهر دفعة
                    واحدة وكالتالي.
                </p>
                <p>2- طريقة الدفع / يتم التسديد عن طريق ايداع مبلغ الدفعات في حساب الطرف الاول وبموجب
                    ايصاالات دفع(فيشرة ايداع) من المصرف المعروف من قبل الطرف الاول باسم الحسراب ورقمه
                    وكود التسجيل وكالاتي:
                </p>
                <ul style="margin-right: 26px;">
                    <li>اسم المصرف:</li>
                    <li>اسم الحساب:</li>
                    <li>رقم الحساب:</li>
                </ul>
                <p>3- جدول السداد (الدفعات): </p>
                <table border="1" style="width: 100%; border-collapse: collapse">
                    <thead>
                        <tr style="background-color: #bdd6ee;">
                            <th>ت</th>
                            <th>تسلسل الدفعات</th>
                            <th>تاريخ الاستحقاق</th>
                            <th>مبلغ الدفعات</th>
                            <th>مبلغ الدفعات كتابة</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>الدفعة المقدمة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>الاولى</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>الثانية</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>الثالثة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>الرابعة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>الخامسة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>السادسة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>السابعة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>الثامنة</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">الما ة الثالثة</strong>
              </div>
              <div>
                <strong>الاحكام العامة:</strong>
                <p>
                    <strong>1. المعاينة:</strong>
                    يقر هنا الطرف الثاني بأنه وافق على شراء الوحدة السكنية
                    موضوع هذا العقد بعد ان اطلع على المخططات والتصاميم العامة
                    للمجمع والخاصة بالردار ومساحته وتسلسلالته وقد عاينها معاينة نافية
                    للجهالة واطلع كذلك على مراحل تقدم العمل وموعد التسليم النهائي،
                    وان الطرف الاول قد عرض بيع الوحردات السكنية ككل بغض النظر
                    عن المساحة الدقيقة لكل نوع من الدور حيث ان المساحات تختلف
                    باختلاف التصاميم من دار لاخر ومن بلوك لاخر وقد اطلع الطرف
                    الثاني على هذه المعلومات بشكل تام ينفي الجهالة وقبل الشراء بدون
                    تحفظ. حتى في حالة ظهور نقصان في مساحة الوحدة السكنية نقصاناً
                    يسيراً لا يؤثر على مساحة الوحدة السكنية واستخداماتها ومساحات
                    اجزاءها المتعددة فلا يحق للطرف الثاني مطالبة الطرف الاول باي
                    تعويضات او يكون سبباً للفسخ كما يقر الطرف الثاني (المشتري)
                    بعلمه بمواصفات التسليم.
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الثالثة</strong>
              </div>
              <div>
                <strong>الاحكام العامة:</strong>
                <p>
                    2- يقر الطرف الثاني (المشتري) بعد توقيع هذا العقد وبصفة نهائية بأن
                    يقتصر انتفاعه بالوحدة السكنية المباعة وملحقاتها على الغرض الذي
                    خصصرت من اجله وهو السكن العائلي فقط بحيث لا يجوز له
                    استخدامها بشكل مخالف للغرض المتفق عليه كما لا يجوز له شطرها
                    مما يؤدي الى زيادة عدد سكان المجمرع ولا يحق له اجراء اي اعمال
                    او أبنية خارجية مثل (تغيير الواجهة او طلائها بلون مخالف) تؤثر
                    بالمظهر الخارجي للدار وعدم القيام بأي بناء او انشاءات او مسقفاق
                    على سطح الدار وممنوع عليه القيام بأعمال تخالف النظام العام
                    والاداب العامة.
                </p>
                <p>
                    3- يحرق للطرف الاول (البائع) اجراء التعديلات الادرارية او العمرانية
                    اللازمة والتي يراها ضرورية على المجمع ككل بما لا يؤثر على
                    المظهر الخاراجي للمجمع والطابع المميز له بصفة عامة وعلى طراز
                    الوحدات السكنية محل هذا العقد خاصة.
                </p>
                <p>
                    4- كما اقر ووافق الطرف الثاني على ان يلتزم بما تقره هيئة
                    الاستثمار ودوائر التسجيل العقاري فيما يخص الية اصدار السندات
                    وتوقيتاتها وبما لا يلغي او ينتقص من ملكية الطرف الثاني للوحدات
                    السكنية المباعة.
                </p>
                <p>
                    5- الشرط الجزائي : يلتزم ويتعهد الطرف الثاني ( المشتري ) بدفع مبلغ
                    وقدره (     ) دينار عراقي كشرط جزائي الى الطرف الاول ( البائع )
                    او يتم استقطاعة من مبلغ الدفعة المقدمة عند عدولة عن الشراء او
                    إنتفاء الحاجة لدية عن الوحدة السكنية ( موضوع هذا العقد ) او عدم
                    رغبتة بالاستمرار باكمال عملية الشراء .
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الرابعة</strong>
              </div>
              <div>
                <strong>التنفيذ والتسليم:</strong>
                <p>
                    1- الطرف الاول (البائع) ملزماً ان يكون تنفيذ الوحدة السكنية موضوع
                    هذا العقد وفقاً للاصول الفنية والهندسية المعتمدة ويكون تسليم
                    الوحدة السكنية حسب الشروط المحددة والمبينة في هذا العقد.
                </p>
                <p>
                    2- يلتزم الطرف الاول بتسليم الوحدة السكنية المباعة موضوع هذا العقد
                    للطررف الثاني (جاهزة للسكن مع توفير الخدمات الضرورية للسكن
                    فيها) خلال الموعد المقرر(      ) شهراً من تاريخ هذا العقد.
                </p>
                <p>
                    3- يعتبر الطرف الثاني مبلغاً في حال عدم حضوره بعد ثلاثون يوم من
                    الموعد الذي حدده الطرف الاول لغرض استلام الوحدة السكنية ويعد
                    الطرف الثاني مخلاً ببنود هذا العقد بعد مضي ثالثون يوم ومستلماً
                    لها استلاماً حكيماً وكاملاً وسليماً ومطابقاً
                    للمواصفات المتفق عليها ومتنازلاً عن حقه في المطالبة بأي تغيير داخل وحدته السكنية وتعتبر
                    الوحدة السكنية موضوع هذا العقد وملحقاته في حيازته مما تعتبر وفاءاً
                    من الطرف الاول بالتزاماته بالتسليم مع ما يترتب على ذالك من اثار
                    قانونية ومالية وفنية واعتبارية وتصبح دفعة الاستلام بمجرد التسليم
                    الحكمي المشار اليه مستحقة الدفع وتسري الغرامات على التأخير في
                    سداد دفعة الاستلام او الدفعات الاخرى المتفق عليها بين الطرفين.
                </p>
                <p>
                    4- مع الاقرار والاعتراف من قبل الطرف الثاني بخصم ايام منع التجوال
                    والعطل الرسمية والاعياد والمناسبات الدينية والاوضاع الامنية والاحداث التي
                    تعتبر ظروف طارئة او قاهرة والتي تحول دو تسليم او اكمال ما يتبقى من
                    اعمال بناء الوحدة السكنية وتكون مضافة على التوقيتات الخاصة بمدة الانجازي.
                </p>
                <p>
                    5- اقر واعترف ووافق الطرف الثاني على عدم منع او اعاقة الطرف الاول من
                    القيام بكافة الانشاءات والانهاءات المتبقية للمشروع ولا يجوز له ان يعتبر قيام
                    الطرف الاول بتلك الاعمال معوقاً او مانعاً من انتفاعه بالوحدة السكنية
                    وملحقاتها
                </p>
                <p>
                    6- يلترزم الطرف الثاني بتسديد كافة الرسوم والضرائب الجديدة التي ستفرضها
                    الجهات الحكومية لغرض تسجيل هذه الوحدة السكنية، ولا يحق للطرف الثاني
                    الرجوع على الطرف الاول بما يقوم بتسديده في هذا الشأن .
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الخامسة</strong>
              </div>
              <div>
                <strong>انتقال الملكية:</strong>
                <p>
                    1- لا تنتقل ملكية الوحدة السكنية الا بعد قيام الطرف الثاني بتسديد كامل المبالغ
                      والدفعات التي بذمته لصالح الطرف الاول وحسب ما مذكور في جدول الدفعت
                      في هذا العقد على ان ات تكون الوحدة السكنية موضوع هذا العقد محجوزة او
                      مرهونة الى اي جهة اخرى.
                </p>
                <p>
                    2- يلتزم ويتعهد الطرف الثاني بتسديد مبلغ الوحدة السكنية المثبت في هذا العقد
                    بحسب جدول الدفعات خلال خمسة عشر يوماً من تاريخ استحقاق الدفعة المقررة
                    وبخلافه يقر الطرف الثاني ويلتزم ويتعهد بتأدية وتسديد مبلغ 100,000 دينار
                    (مائة الف دينار عراقي) عن كل يوم تأخير على ان لا تتجاوز هذاه الغرامات مدة
                    ستون يوم من تاريخ استحقاقها وبخلافه اقر
                    ووافق الطرف الثاني على اللجوء والأخذ بالفقرة الثالثة ادنى من المادة الخامسة من هذا العقد (انتقال الملكية) .
                </p>
                <p>
                    3-  يعد هذا العقد باطلاً وال يترتب عليه اي اثر قانوني بعد مرور ستون يوماً من
                    تاريخ استحقاق الدفعة المالية وعدم تسديدها ويعترف ويقر ويلتزم الطرف الثاني
                    لصالح الطرف الاول بالموافقة ويخوله ويتنازل عن كافة الحقوق لصالح الطرف
                    الاول لغرض بيع العقار موضوع هذا العقد واعادة المبلغ الى الطرف الثاني
                    بالسعر المذكور والمثبات في هذا العقد بعد خصم المصاريف الادارية والقانونية
                    والغرامات التأخيرية وعمولات البيع و الشرط الجزائي .
                </p>
                <p>
                    4- يحق للطرف الثاني العدول عن هذا البيع والتنازل لمشتري اخر عن الوحدة
                    السكنية موضوع هذا العقد بعد موافقة الطرف الاول (حصراً) على ان يدفع
                    الطرف الثاني ومشترية نسبة (%    ) وتعتبر مصاريف ادارية وقانونية من قيمة
                    الوحدة السكنية وذالك اثناء فترة العقد وقبل حصول الطرف الثاني على سند
                    الملكية، على ان يلتزم الطرف الثاني بتنفيذ عملية البيع والتنازل ضمن قسم 
                    العقود (حصراً) وفي حال عدم موافقة الطرف الاول على المشتري الجديد
                    لاسباب تخص مصلحة المشوع عندها لايحق للطرف الثاني مطالبة أو أجبار
                    الطرف الاول على الموافقة والا عد ذالك نكولاً
                    بالعقد وعليه يتحمل الطرف الثاني ما جاء في المادة الثالثة/الفقرة خامساد (الشرط الجزائي).
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة السادسة</strong>
              </div>
              <div>
                <strong>تسجيل الوحدة السكنية:</strong>
                <p>
                    يلتزم الطرف الثاني بتسليم الطرف الاول كافة المستمسكات الثبوتية
                    والوثائق الرسمية اللازمة لإتمام التسجيل وبخلافه يتحمل الطرف الثاني كافة
                    التبعت القانونية كما يلتزم الطرف الثاني بالعمل مع اللجنة المختصة العائدة
                    للطرف الاول بالتسجيل العقاري والتي تقوم بالتنسيق مع دائرة التسجيل
                    العقاري لنقل وتسجيل ملكية الوحدة السكنية باسم الطرف الثاني (المشتري الاول)
                     على ان يكون الطرف الثاني مسدداً لكامل ثمن الوحدة السكنية
                    وملحقاتها ولكافة المستحقات المالية والغرامات الناتجة عن هذا العقد. <br>
                    وكما يلتزم الطرف الثاني بدفع كافة الرسوم والمصاريف التي تتعلق بنقل الملكية
                    دو مطالبة الطرف الاول بأي تعويض عن تلك الرسوم والمصاريف
                    وحسب القوانين المعمول بها في جمهورية العراق . 
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة السابعة</strong>
              </div>
              <div>
                <strong>العناوين:</strong>
                <p>
                  نظراً لضرورة وجود وسيلة اتصال قانونية قائمة ومعترف بها قانونياً بين طرفين العقد فإن كل من طرفي هذا العقد يقر بصحة العناوين الخاصة به 
                  والمبين في هذا العقد وباتخاذ هذا العنوان محلاً مختاراً للتبليغات له ويلتزم باخطار الطرف الأخر في حال تغييره باشعار موصى عليه بعلم الوصول والا 
                  اعتبرت جميع الاعلانات والتبليغات المرسله التي تتم عليه صحيحة ومنتجة لكافة اثارها القانونية وتعتبر رسائل البريد الألكتروني بين الطرفين المتعاقدين 
                  والرسائل النصية على ارقام الهواتف المحمولة المثبتة في هذا العقد للطرف الثاني وسيلة رسمية وقانونية للتواصل والمخاطبات والتبليغات.
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
      <v-card
        :style="`background-image: url(${ba});background-position: center;background-repeat: no-repeat;background-size: auto;`"
      >
        <v-card
          style="
            background-color: rgb(255 255 255 / 85%);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <v-container style="padding: 2px 25px;">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: right; white-space: pre-wrap"
              >
                <p style="font-size: 14px">
                  <strong
                    >شركة صناع النهضة <br>
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="logoPrint" style="width: 160px" alt="" />
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <div>
              <div style="text-align: center;">
                <strong style="border-bottom: solid 1px black;">المادة الثامنة</strong>
              </div>
              <div>
                <strong>احكام ختامية:</strong>
                <p>
                  نظراً لضرورة وجود وسيلة اتصال قانونية قائمة ومعترف بها قانونياً بين طرفين العقد فإن كل من طرفي هذا العقد يقر بصحة العناوين الخاصة به 
                  والمبين في هذا العقد وباتخاذ هذا العنوان محلاً مختاراً للتبليغات له ويلتزم باخطار الطرف الأخر في حال تغييره باشعار موصى عليه بعلم الوصول والا 
                  اعتبرت جميع الاعلانات والتبليغات المرسله التي تتم عليه صحيحة ومنتجة لكافة اثارها القانونية وتعتبر رسائل البريد الألكتروني بين الطرفين المتعاقدين 
                  والرسائل النصية على ارقام الهواتف المحمولة المثبتة في هذا العقد للطرف الثاني وسيلة رسمية وقانونية للتواصل والمخاطبات والتبليغات.
                </p>
                <v-row>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>الطرف الأول / البائع</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color:rgb(189 214 238); border: solid 1px black"><p>الطرف الثاني / المشتري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p>شركة صناع النهضة للأستثمار والتطوير العقاري</p></v-col>
                  <v-col cols="6" md="6" style="padding: 3px;background-color: rgb(189 214 238); border: solid 1px black"><p></p></v-col>
                </v-row>
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
      </v-card>
    </v-container>
  </div>
</template>

<script>
import logoPrint from "@/assets/images/icons/logoPrint.png";
import ba from "@/assets/images/icons/ba.png";
export default {
  data() {
    return {
      data: null,
      user: null,
      ba,
      logoPrint,
    };
  },
  created() {
    // this.data = JSON.parse(localStorage.getItem("PrintReservations"));
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
  }
}
</style>
