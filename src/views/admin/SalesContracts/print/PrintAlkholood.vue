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
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h2 style="text-align: center">
                <strong>عقد بيع وحدة سكنية فى مجمع الخلود السكني</strong>
              </h2>
              <br />
              <h3><strong>الطرف الاول/ البائع</strong></h3>
              <h4>
                شركة الخلود للاستثمارات العقارية والصناعية والزراعية يمثلها المدير المفوض
                محمد صالح سهيل
              </h4>
              <h3><strong>الطرف الثاني/ المشتري</strong></h3>
              <h4>
                الاسم الرباعي :
                <span style="border-bottom: dashed">{{ data.owner_name }}</span>
              </h4>
              <h4
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                "
              >
                رقم وتاريخ هوية الاحوال المدنية او البطاقة الموحدة :
                <span style="margin-left: 20px; border-bottom: dashed">{{
                  data.owner_id_number
                }}</span
                ><span style="border-bottom: dashed">{{ data.owner_id_issue_date }}</span>
              </h4>
              <h4>وعنوانه : <span></span></h4>
              <h4>
                ورقم هاتفه :
                <span style="border-bottom: dashed">{{ data.owner_phone }}</span>
              </h4>
              <h4>
                البريد الالكتروني :
                <span style="border-bottom: dashed">{{ data.email }}</span>
              </h4>
              <h3><strong>البند الاول: مقدمة العقد</strong></h3>
              <h4>
                مشروع ( الخلود السكني) مشروع استثماري حاصل على اجازة استثمار بالرقم 622
                لسنة 2022 الصادرة من هيئة استثمار بغداد بموجب قانون الاستثمار العراقي رقم
                13 لسنة 2006 المعدل والذي خولته بموجبها انشاء مجمع سكني استثماري حيث قام
                الطرف الاول بطرح الوحدات السكنية للبيع وبما ان الطرف الثاني يرغب بالشراء
                فقد أقر الطرفان بأهليتهما القانونية للتعاقد، فقد اتفقا فيما بينهما وتراضيا
                على تنفيذ "العقد" وفًقا للشروط والبنود التالية:
              </h4>
              <h3><strong>البند الثاني: المصطلحات والتعاريف</strong></h3>
              <h4>
                <strong>1- اجازة الاستثمار: </strong>
                الرخصة الاستثمارية الصادرة من هيئة استثمار بغداد بموجب قانون الاستثمار رقم
                13 لسنة 2006 المعدل والانظمة اللاحقة به والتي تحمل الرقم ( 500 لسنة 2019 )
                والتي خولت الشركة بأنشاء مجمع سكني وبيع الوحدات السكنية .
              </h4>
              <h4>
                <strong>2- العقد: </strong>
                هو الوثيقة الموقعة بين الطرفين (الشركة والمشتري ) لبيع وشراء الوحدة
                السكنية ضمن المجمع السكني .
              </h4>
              <h4>
                <strong>3- موعد التسليم: </strong>
                هو تاريخ تسليم الوحدة السكنية بعد الانتهاء من تنفيذ الاعمال حسب بنود العقد
                .
              </h4>
              <h4>
                <strong>4- الوحدة السكنية: </strong>
                الشقة السكنية او المنزل المحددة والمعرفة بموجب البند الثالث .
              </h4>
              <h4>
                <strong>5- الثمن: </strong>
                بدل بيع الوحدة السكنية المباعة من قبل الطرف الاول الى الطرف الثاني .
              </h4>
              <h4>
                <strong>6- جدول السداد: </strong>
                الجدول المرفق بالعقد الذي يتضمن مواعيد تسديد ثمن الوحدة السكنية .
              </h4>
              <h4>
                <strong>7- الملكية التسجيل: </strong>
                الاجراءات التي تتضمن انتقال الوحدة السكنية الى الطرف المستفيد وتسجيل
                الوحدة المباعة لدى الجهات المختصة وفق القانون
              </h4>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h3><strong>البند الثالث: موضوع العقد</strong></h3>
              <h4>
                بموجب هذا العقد قام الطرف الاول ببيع وحدة سكنية قيد الانشاء واشترى الطرف
                الثاني من الطرف الأول موضوع العقد حيث اقر الطرف الثاني وبكامل اهليته بعد
                مشاهدة ومعاينة الخرائط والمرتسمات الخاصة بالوحدة السكنية كافة وبموجب
                البيانات المذكورة في الجدول ادناه بموافقته على الشراء وفق الشروط والبنود
                الواردة في هذا العقد
              </h4>
              <h4>
                رقم الوحدة السكنية :
                <span style="border-bottom: dashed">{{ data.house_name }}</span>
              </h4>
              <h4>
                مساحة الوحدة السكنية :
                <span style="border-bottom: dashed">{{ data.house_total_space }}</span>
              </h4>
              <h4>
                القيمة الكلية للوحدة السكنية
                <span style="border-bottom: dashed">{{ data.salary_amount }}</span>
                بالدينار العراقي
              </h4>
              <h3><strong>البند الرابع: التزامات الطرف الاول</strong></h3>
              <h4>
                1- يلتزم الطرف الأول بتوفير الخدمات الماء والكهرباء و كافة الخدمات داخل
                المشروع وعلى الطرف الثاني تسديد اجورها بشكل شهري وحسب الفواتير .
              </h4>
              <h4>
                2- يلتزم الطرف الاول بتنفيذ الوحدات السكنية وفق والمخططات والمرتسمات
                الهندسية المعتمدة والمدة الزمنية المحددة .
              </h4>
              <h4>
                3- يلتزم الطرف الاول بأطلاع الطرف الثاني على المخططات والمرتسمات الخاصة
                بالمجمع السكني ويقر الطرف الثاني بانه شاهد ووافق على كافة تفاصيل المجمع
                والوحدة السكنية موضوع العقد.
              </h4>
              <h4>
                4- يلتزم الطرف الاول بتسليم الوحدة السكنية موضوع العقد للطرف الثاني خالية
                من الشواغل لحين سداد كامل ثمن المبيع من قبل الطرف الثاني خلال المدة
                الزمنية المحددة .
              </h4>
              <h4>
                5- يلتزم الطرف الاول بأطلاع الطرف الثاني على الية البيع وطريقة السداد
                المقررة للوحدة السكنية المباعة ويعتبر ثمن البيع للوحدة السكنية محل العقد
                خاصا بملكية الوحدة السكنية محل العقد فقط .
              </h4>
              <h4>
                6- يلتزم الطرف الاول بأنجاز اعمال شبكات البنى التحتية واقامة الشوارع
                والارصفة داخل المشروع وعلى عدة مراحل ولا يحق للطرف الثاني الامتناع عن
                استلام الشقة او سداد الأقساط المستحقة بسبب عدم اكتمال
              </h4>
              <h4>
                7- يتضمن بيع الوحدة السكنية اجور الصيانة لمدة (سنة واحدة) من تاريخ استلام
                الطرف الثاني الوحدة السكنية وتشمل الصيانة الضمان عن عيوب التنفيذ فقط ولا
                يتحمل الطرف الاول اي صيانة تظهر عن سوء الاستخدام من قبل الطرف الثاني او
                الظروف القاهرة لا سامح الله وعلى سبيل المثال لا الحصر ( الزلازل او الاعصار
                او الحرائق او التعرض للأعمال الإرهابية ) .
              </h4>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h3><strong>البند الخامس: التزامات الطرف الثاني</strong></h3>
              <h4>
                1- يلتزم الطرف الثاني بأيداع مبالغ الدفعات في حساب الطرف الاول بالحساب
                المرقم وفق الجدول المحدد .
              </h4>
              <h4>
                2- يلتزم الطرف الثاني بتسديد الدفعات المالية والاقساط المترتبة بذمته حسب
                جدول الدفعات المتفق عليها بين الطرفين والمرفق ضمن العقد
              </h4>
              <h4>
                3- يلتزم الطرف الثاني بتوقيع عقد الالتزامات والخدمات مع الطرف الأول قبل
                استلام الوحدة السكنية والمتضمن التزام الساكن ان كان مالكا او مؤجرا للوحدة
                السكنية بتعليمات وبنود اشغال الوحدة السكنية وما يترتب بذمة الشاغل من
                تكاليف الخدمات الادارية وخدمات التشغيل للمرافق العامة واجور الماء
                والكهرباء والمجاري ومنظومة الغاز وشبكة الانترنت ورفع النفايات وأي رسوم
                اضافية قد تفرضها الدولة لاحقا .
              </h4>
              <h4>
                4- يلتزم الطرف الثاني بأستلام الوحدة السكنية عند اكتمالها في الموعد الذي
                يحدده الطرف الاول وفي حال عدم حضور بالموعد المحدد للاستلام وخلال مدة
                اقصاها ( ١٠ أيام ) جاز للطرف الاول اعتبار الطرف الثاني مستلماً حكمياً
                للوحدة السكنية كاملة وسليمة ومطابقة للمواصفات المتفق عليها ويعتبر ذلك
                ايفاء من الطرف الاول بالتزاماته وتبدأ من هذا التاريخ (مدة الضمان البالغة
                سنة واحدة ) المتفق عليها في هذا العقد ويعتبر الطرف الثاني مسؤولا عن الوحدة
                السكنية مسؤولية كاملة دون اي مسؤولية للطرف الأول وتستوفى عليه أجور الخدمات
                المذكورة في العقد وفي حالة رفضه الاستلام رفضاً قاطعاً لا يحق له المطالبة
                باي تعويض او استرجاع ثمن الوحدة السكنية
              </h4>
              <h4>
                5- يلتزم الطرف الثاني بتوجيهات والتعليمات الخاصة بأدارة المشروع ويقر على
                المحافظة على الذوق العام والآداب العامة والمظهر العام ونظافة الابنية
                السكنية والخدمات العامة وعدم رمي النفايات في الاماكن غير المخصصة لها وعدم
                استخدام الشرفة لنصب اي(صحون ستلايت) او مد أي توصيلات خارجية او استخدام
                الشرفة لخزن الاناث او الادوات القابلة للاشتعال او استخدامها لأغراض شواء
                الاطعمة او نشر الغسيل وغيرها من المظاهر التي تشوه مظهر المجمع السكني وكذلك
                عدم نصب وتثبيت اي كاميرات مراقبة وبخلافه يتحمل الطرف الثاني كافة الإجراءات
                والتبعات القانونية التي يتخذها الطرف الاول جراء المخالفة وحسب ما يراه
                مناسبا .
              </h4>
              <h4>
                6- يلتزم الطرف الثاني وبعد استلامه الوحدة السكنية بدفع فواتير الماء
                والكهرباء والغاز والأنترنت والامن والتنظيف وكافة الخدمات الخاصة بالوحدة
                السكنية والمرافق العامة وخلافه فيحق للطرف الاول قطع كافة الخدمات عن الوحدة
                السكنية .
              </h4>
              <h3><strong>البند السادس: تسجيل الوحدة السكنية</strong></h3>
              <h4>
                1- يتم تسجيل الوحدة السكنية بأسم الطرف الثاني بعد سداد الطرف الثاني كامل
                مبلغ بدل البيع والالتزامات المالية الاخرى في حال ترتبها بذمته لصالح الطرف
                الاول حسب المدة المذكورة لتسليم الوحدة السكنية ويعتمد موعد الانتهاء من
                اجراءات نقل الملكية على اجراءات الدوائر الحكومية المعنية وما تتطلبه من وقت
                لأجراء ذلك .
              </h4>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h4>
                2- يلتزم الطرف الاول او من يمثله قانونيا بالحضور امام الجهات الرسمية في
                حال الحاجة لأقرار البيع او اخذ توقيعه ويتحمل الطرف الثاني اي رسوم أدارية
                وغيرها اللازمة لإنجاز معاملة تسجيل الوحدة السكنية بأسمه والسير بها بكافة
                مراحلها .
              </h4>
              <h4>
                3- يلتزم الطرف الاول بتسليم الطرف الثاني صورة عن المستندات اللازمة لإتمام
                تسجيل الوحدة السكنية متى طلب الطرف الثاني ذلك رسميا بعد تسديده كافة
                الالتزامات المالية المترتبة بذمته ولا يحق للطرف الأول الامتناع عن الحضور
                لإتمام عملية انتقال الملكية بصورتها النهائية عند طلب الطرف الثاني ذلك
                وخلافه فيحق للطرف الثاني اتخاذ الاجراءات القانونية والمالية بحق الطرف
                الاول جراء عدم الالتزام .
              </h4>
              <h4>
                4- في حال وفاة الطرف الثاني فان حقوق نقل ملكية الوحدة السكنية في حال
                الوفاء بكافة الالتزامات المالية تنتقل لورثته فقط حتى مرحلة تسجيلها باسمهم
                في السجلات الرسمية وحسب القسام الشرعي والقوانين النافذة ويلتزم الورثة
                بكافة الالتزامات المترتبة بهذا العقد .
              </h4>
              <h4>
                5- يسلم الطرف الاول الطرف الثاني الوحدة السكنية بعد ( ٣٠ ) شهر تبدأ من
                تاريخ توقيع هذا العقد يضاف الى هذه المدة الظروف القاهرة التي يمر بها
                المشروع والتي هي خارج عن ارادة الشركة وعلى سبيل المثال لا الحصر مثل
                العدوان الخارجي والفيضانات او الزلازل او الكوارث الطبيعية والتعليمات
                القضائية او انسداد طرق دخول المواد الانشائية اومنع التجوال... والخ من أي
                توقف يحول دون قدرة الطرف الاول على الالتزام بالجدول الزمني المقرر بشرط ان
                يكون الطرف الثاني قد ادى ما عليه من التزامات بموجب هذا العقد , و لا يتحمل
                الطرف الاول أي مسؤولية عن تأخير تسليم الوحدة السكنية في حالة تعرض المشروع
                الى ظروف القوة القاهرة , ولا يحق للطرف الثاني المطالبة بتسديد تعويضات
                مالية او مبالغ مدفوعة عن الوحدة السكنية .
              </h4>
              <h4>
                6- يتحمل الطرف الاول غرامة مالية وقدرها ١٠٠٠ الف دولار امريكي عن كل شهر
                تأخير من استلام الوحدة السكنية للطرف الثاني تعتبر كبدل ايجار .
              </h4>
              <h4>
                7- في حال تأخر او اخلال او تلكؤ او امتناع او تراجع الطرف الثاني ولأي سبب
                من الاسباب عن تسديد الدفعات والايفاء بالالتزامات المالية المستحقة عن
                الوحدة السكنية ووفق المدة الزمنية المحددة لكل دفعة والموضحة في جدول
                الدفعات يتحمل غرامة مالية وقدرها ٥٠ $ خمسون دولا امريكي عن كل يوم تأخير
                ويتم فرض الغرامة بعد ١٥ يوم من تاريخ سداد الدفعة المالية المستحقة عن
                الوحدة السكنية ودون التأثير على مواعيد الدفعات اللاحقة فأن لم يلتزم الطرف
                الثاني بتسديد الدفعات اللاحقة يحق الطرف الاول فسخ هذا العقد واعادة الحال
                لما كان عليه ويعتبر هذا العقد مفسوخ من تلقاء نفسه استنادا الى احكام المادة
                ١٧٨من القانون المدني العراقي رقم ٤٠ /لسنة ١٩٥١ ودون الحاجة الى توجيه اخطار
                او حكم قضائي بذلك ويحق للطرف الاول اتخاذ اجراءاته وخصم ٢٠ ٪ من قيمة
                المبالغ المسددة مسبقا كتعويض للطرف الأول عن ما فاته من كسب وما لحقه من
                خسارة جراء ذلك , كما ويحق للطرف الاول العمل على اعادة عرض الشقة السكنية
                المذكورة للبيع مباشرة ويتم ارجاع المبلغ بعد بيع الشقة وخصم النسبة المذكورة
                أعلاه.
              </h4>
              <h4>
                8- ان قيمة هذا العقد غير شاملة لاي رسوم او مبالغ اضافية قد تقرضها الدولة
                لاحقا والقوانين والتعليمات اللاحقة .
              </h4>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h4>
                9- لا يحق للطرف الثاني استخدام الوحدة السكنية لغير السكن و يحق للطرف الاول
                فرض غرامة مالية ومحاسبة الطرف الثاني قضائياً من جراء استخدام الوحدة
                السكنية لأغراض غير السكن كون مشروع (مجمع الخلود السكني ) هو مشروع سكني
                متكامل الخدمات . لذا فإن الطرف الثاني يقتصر انتفاعه بالوحدة السكنية
                وملحقاتها موضوع العقد على الغرض الذي خصصت من أجله وهو السكن حصرا , وخلاف
                ذلك يحق للطرف الاول قطع كافة الخدمات عن الوحدة السكنية ومنعه من دخول
                المجمع السكني .
              </h4>
              <h4>
                10- لا يحق للطرف الثاني قبل وبعد استلام الشقة السكنية القيام باي اعمال
                تعديل التصميم الانشائي للوحدة السكنية او اضافة في عدد الغرف او القيام بأي
                اعمال تكسير او بناء او انشاء او توسعه للغرف او تركيب وحدات تكييف اضافية او
                مبردات او عمل فتحات تهوية او تعديل على الواجهة الأمامية والخارجية للوحدة
                السكنية مما يغير من شكلها العام أو تعديل الطراز الذي صممت وفقا له لتبقى
                محافظة على المظهر الأمامي والخارجي الأصلي وبطراز المباني السائدة الذي تقع
                من ضمنا الوحدة السكنية ويلتزم الطرف الثاني بتعليمات و توجيهات الطرف الاول
                بهذا الخصوص وحسب المخططات المعتمدة للمشروع وبخلافه يحق يتحمل الطرف الثاني
                كافة التبعات القانونية لاي مخالفة .
              </h4>
              <h4>
                11- يتحمل الطرف الثاني كامل المسؤولية المالية والقانونية عن أي ضرر ينتج من
                اي اعمال يقوم بها كصيانة أو ترميم أو تغيير وما شابه ذلك في الوحدة السكنية
                او اي من الممتلكات العامة داخل المجمع السكني دون استحصال موافقة خطية
                وصريحة من الطرف الاول ويتحمل كلفة ازالة الضرر واصلاحه خلال مدة لا تتجاوز
                ال ( ١٠ أيام) وعلى حسابه الخاص ويحق للطرف الاول المطالبة بتسديد البدل
                المالي وحسب نوع الضرر لرد الوضع الى ما هو عليه وفي حال امتناع الطرف الثاني
                عن اصلاح الاضرار فيحق للطرف الاول قطع كافة الخدمات عن الوحدة السكنية ولا
                تعاد الخدمات الا بعد تسديد ما بذمته وحسب نوع الضرر .
              </h4>
              <h4>
                12- يحق للطرف الثاني البيع او التنازل عن الوحدة السكنية الى اي طرف اخر بعد
                مرور ثلاثة اشهر من تاريخ توقيع العقد على ان يلتزم الطرف الثاني بتوقيع عقد
                البيع لدى الطرف الاول وبخلافه لا يتم اعتماد أي عقد خارجي ويعتبر باطلا وغير
                ملزم للطرف الاول , ويلتزم الطرف الثاني في حالة البيع دفع اجور أدراية الى
                الطرف الاول مقدارها ٪ ٢ من قيمة الوحدة السكنية وحسب سعرها في ذلك الوقت .
              </h4>
              <h4>
                13- يلتزم الطرف الثاني في حال رغبته ايجار الوحدة السكنية عند استلامها
                بعرضها لدى الطرف الاول باعتباره المخول عن ادارة المجمع السكني لطرحها
                للإيجار على ان يلتزم المؤجر بكافة الضوابط والتعليمات التي تصدر من ادارة
                المجمع ودفع اجور الخدمات المقررة لاحقا وبخلافه فللطرف الاول انهاء عقد
                الايجار وعدم السماح بدخول المؤجر واستخدام واشغال الوحدة السكنية .
              </h4>
              <h4>
                14- لا يتم اعتماد المكاتبات والعقود الخارجية للبيع والايجار على الوحدات
                السكنية الخاصة بالمجمع السكني ويحق للطرف الاول الاعتراض عليها ولا تعتبر
                ملزمة كونها جاءت خلاف للفقرات الواردة لهذا العقد ويتحمل الطرف الثاني كافة
                التبعات القانونية عند مخالفته لبنود هذا العقد .
              </h4>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
            </div>
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <h3><strong>البند السابع: النزاعات</strong></h3>
              <h4>
                1- لا يمكن تغير بنود هذا العقد ولا يصبح اي تغير سارياً الا بعد موافقة
                الطرف الأول ويحق للطرف الأول حصراً تعديل او إضافة ملحق يراه ضروريا اثناء
                انشاء المجمع السكني للمتغيرات التي تحدث اثناء ذلك .
              </h4>
              <h4>
                2- و يتم حل الخلافات التي تنشأ عن هذا العقد وديا بين الطرفين وخلافه فان
                السلطة القضائية في محافظة بغداد هي صاحبة الاختصاص بنظر الدعاوي الناشئة بين
                الطرفين عن بنود هذا العقد
              </h4>
              <h3><strong>البند الثامن: العناوين الرسمية للتبليغ والمراسلات</strong></h3>
              <h4>
                يعتبر البريد الالكتروني الموجود الى جانب اسم كل طرف من الاطراف موطنا
                مختارا له واساسا في ارسال واستلام التبليغات ترسل اليه الانذارات والرسائل
                والتباليغ وفي حال استلام التبليغات و عدم الرد عليها يعتبر الطرف الثاني
                متبلغ رسمياً , لذا يلتزم كل طرف من طرفي العقد بإبلاغ الطرف الاخر عند تغيير
                البريد الالكتروني ومعلومات الاتصال المثبتة في العقد خلال مدة لا تتجاوز ( ٧
                أيام ) من تاريخ التغير وخلافه يتحمل الطرف المخل كافة التبعات المالية
                والقانونية عن عدم استلام التبليغات
              </h4>
              <h4>
                .حرر هذا العقد ................. (بنسختين) وقعت من قبل طرفي العقد بتاريخه
                دون اي حك او شطب
              </h4>
              <h4>المرافقات</h4>
              <h4>جدول الدفعات</h4>
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
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
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
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="logo" style="width: 30%" alt="" />
            </div>
          </v-container>
          <v-container style="text-align: right">
            <div>
              <v-row>
                <v-col cols="6" md="6" style="text-align: center; padding: 3px"
                  ><h4>الطرف الاول</h4></v-col
                >
                <v-col cols="6" md="6" style="text-align: center; padding: 3px"
                  ><h4>الطرف الثاني</h4></v-col
                >
                <v-col cols="6" md="6" style="text-align: center; padding: 3px"
                  ><h4>
                    شركة الخلود للاستثمارات العقارية والصناعية والزراعية يمثلها المدير
                    المفوض <br />
                    محمد صالح سهيل
                  </h4></v-col
                >
                <v-col cols="6" md="6" style="text-align: center; padding: 3px"
                  ><h4>{{ data.owner_name }}</h4></v-col
                >
              </v-row>
            </div>
          </v-container>
          <v-container style="padding: 20px 20px">
            <div style="text-align: center">
              <img :src="bot" style="width: 100%" alt="" />
            </div>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import numberWithComma from "@/constant/number";
import tafqeet from "@/constant/Tafqeet.js";
import logo from "@/assets/logo/bru.png";
import bot from "@/assets/bot.png";

export default {
  data() {
    return {
      data: {},
      user: null,
      logo,
      bot,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("PrintAlkholood"));
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
h4 {
  font-weight: 400;
  margin-bottom: 15px;
}
@media print {
  @media print {
    table {
      page-break-inside: auto;
    }
    h4 {
      font-weight: 400;
      margin-bottom: 15px;
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
