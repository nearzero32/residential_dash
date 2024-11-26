<template>
  <div>
    <v-container id="pri" v-if="loading == false">
      <v-card
        style="
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <v-card-title>
          <div v-if="dataResidential.center_id._id == '66e2c810dec89fdfea71c92b'">
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
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="karambagdad" style="width: 50%" alt="" />
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 80px"
                  alt=""
                />
              </v-col>
            </v-row>
            <v-container style="padding: 0px">
              <h4
                style="
                  text-align: center;
                  color: black;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgba(141, 96, 67, 1) 0%,
                    rgba(255, 198, 132, 1) 100%
                  );
                "
              >
                طلبات وحدة سكنية
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '66656b164cdec95cab679181'">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="12"
                md="12"
                style="padding: 0px; text-align: center; white-space: pre-wrap"
              >
                <img :src="alrawan" style="width: 100%" alt="" />
              </v-col>
            </v-row>
            <v-container style="padding: 7px 0px 0px 0px">
              <h4
                style="
                  text-align: center;
                  color: black;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(0 115 170) 0%,
                    rgb(141 221 255) 100%
                  );
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '6667fa62668eb9af32976f03'">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col cols="3" md="3" style="text-align: center">
                <h3>مجمع الرتاج السكني</h3>
              </v-col>
              <v-col
                cols="6"
                md="6"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 80px"
                  alt=""
                />
              </v-col>
            </v-row>
            <hr style="margin-top: 15px; border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #ffffff;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(53 69 142) 0%,
                    rgb(111 169 109) 100%
                  );
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '66e9376b2dcd8ef700ac5f01'">
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
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="alfakher" style="width: 80px" alt="" />
              </v-col>
              <v-col cols="6" md="6" style="text-align: center">
                <img :src="qaiwan" style="width: 60px" alt="" />
              </v-col>
            </v-row>
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #c8be79;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(26 29 33) 0%,
                    rgb(55 61 65) 100%
                  );
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '672981a677eecc001eb05f4a'">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="12"
                md="312"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="loam" style="width: 155px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: #ffffff;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(131 122 97) 0%,
                    rgb(174 173 169) 100%
                  );
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '6729808e77eecc001eb05f19'">
            <v-row
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-col
                cols="12"
                md="312"
                style="padding: 10px; text-align: center; white-space: pre-wrap"
              >
                <img :src="MarinaBaghdad" style="width: 150px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: rgb(0 0 0);
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: #e5d3bb;
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'">
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
                    >شركة صناع النهضة <br />
                    للأستثمار والتطوير العقاري
                  </strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img :src="Nahdda" style="width: 160px" alt="" />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <h4
                style="
                  text-align: center;
                  color: rgb(255 255 255);
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: rgb(195 146 46);
                "
              >
                المالك ( {{ data.name }} )
              </h4>
            </v-container>
          </div>
          <div v-else>
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
                  <strong>{{ dataResidential.center_id.name }}</strong>
                </p>
              </v-col>
              <v-col cols="6" md="6" style="text-align: end">
                <img
                  :src="dataResidential.content_url + dataResidential.center_id.logo"
                  style="width: 10%"
                  alt=""
                />
              </v-col>
            </v-row>
            <br />
            <hr style="border-color: rgb(141 96 67)" />
            <v-container>
              <v-card-text class="text-h4 primary text-center bg-grey-lighten-3">
                المالك ( {{ data.name }} )
              </v-card-text>
            </v-container>
          </div>
        </v-card-title>
        <v-container style="padding-block: 0px; height: 100%">
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <v-col cols="12" md="12">
              <div>
                <p style="margin-bottom: 0px">أسم المالك : {{ data.name }}</p>
                <p style="margin-bottom: 0px">رقم الهاتف : {{ data.phone }}</p>

                <p style="margin-bottom: 0px">البريد الألكتروني : {{ data.email }}</p>
                <p style="margin-bottom: 0px">كلمة المرور : {{ data.password_show }}</p>

                <p style="margin-bottom: 0px">
                  اسم الوحدة السكنية : {{ data.house_name }}
                </p>
              </div>
              <div
                v-if="data.another_owner && data.another_owner.name !== null"
                style="width: 100%"
              >
                <hr style="width: 100%" />
                <p>تفاصيل المالك الثاني :-</p>
                <p>العنوان : {{ data.another_owner.address }}</p>
                <p>رقم الهوية : {{ data.another_owner.id_number }}</p>
                <p>جهة اصدار الهوية : {{ data.another_owner.id_place_of_issue }}</p>
                <p>تاريخ اصدار الهوية : {{ data.another_owner.id_issue_date }}</p>
                <p>
                  رقم بطاقة السكن :
                  {{ data.another_owner.residence_card_number }}
                </p>
                <p>
                  جهة اصدار بطاقة السكن :
                  {{ data.another_owner.residence_card_place_of_issue }}
                </p>
                <p>العنوان الوظيفي : {{ data.another_owner.owner_title_jop }}</p>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="12"
              v-if="user.center_id && user.center_id._id == '66656b164cdec95cab679181'"
            >
              <hr style="width: 100%" />
              <p style="margin-bottom: 0px">مرحبًا بسكان مجمع الروان،</p>
              <p style="margin-bottom: 0px">
                يمكنكم الآن تحميل تطبيق مجمع الروان السكني وبدء استخدامه باتباع الخطوات
                التالية:
              </p>
              <p
                style="
                  text-align: center;
                  background-color: #163d68;
                  color: white;
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                "
              >
                لتحميل التطبيق:
              </p>
              <p style="margin-bottom: 0px">
                - الرجاء تصوير رمز الاستجابة السريعة (QR) المرفق لتحميل التطبيق.
              </p>
              <div style="text-align: center; margin-block: 10px">
                <img
                  style="width: 120px"
                  :src="dataResidential.content_url + dataResidential.center_id.qr"
                  alt=""
                />
              </div>

              <p
                style="
                  text-align: center;
                  background-color: #163d68;
                  color: white;
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                "
              >
                لتسجيل الدخول:
              </p>
              <p style="margin-bottom: 0px">
                1. بعد تحميل التطبيق وتثبيته، افتح التطبيق.
              </p>
              <p style="margin-bottom: 0px">البريد الإلكتروني</p>
              <p style="margin-bottom: 0px">كلمة المرور</p>
              <p style="margin-bottom: 0px">
                باتباع هذه الخطوات، يمكنك البدء في استخدام تطبيق مجمع الروان السكني بسهولة
                ويسر. يتمتع التطبيق بالعديد من المميزات، منها:
              </p>
              <p style="margin-bottom: 0px">
                - *حساب خاص بكل وحدة سكنية:* يتيح لك التطبيق حسابًا شخصيًا لكل وحدة سكنية.
              </p>
              <p style="margin-bottom: 0px">
                - *معرفة آخر الأخبار داخل المجمع:* متابعة أحدث الأخبار والإعلانات.
              </p>
              <p style="margin-bottom: 0px">
                - *طلبات الصيانة:* تقديم طلبات صيانة للوحدة السكنية بسهولة.
              </p>
              <p style="margin-bottom: 0px">
                - *شحن الخدمات:* شحن الخدمات مثل الغاز والكهرباء مباشرة عبر التطبيق.
              </p>
              <p style="margin-bottom: 0px">
                - *استلام فواتير الخدمات:* عرض واستلام فواتير الخدمات وفواتير الشحن.
              </p>
              <p style="margin-bottom: 0px">
                - *الدفع الإلكتروني:* دفع الفواتير الشهرية للخدمات إلكترونيًا.
              </p>
              <p style="margin-bottom: 0px">
                - *إشعارات تذكيرية:* تلقي إشعارات تذكيرية بموعد الأقساط للوحدات السكنية في
                حال وجود أقساط.
              </p>
              <p style="margin-bottom: 0px">
                نأمل أن يسهم التطبيق في تحسين تجربتكم السكنية وتسهيل إدارة شؤونكم اليومية.
              </p>
            </v-col>
            <v-col
              cols="12"
              md="12"
              v-else-if="user.center_id._id == '66e9376b2dcd8ef700ac5f01'"
            >
              <hr style="width: 100%" />
              <p style="margin-bottom: 0px">مرحبًا بسكان مجمع الفاخر</p>
              <p style="margin-bottom: 0px">
                يمكنكم الآن تحميل تطبيق مجمع الفاخر السكني وبدء استخدامه باتباع الخطوات
                التالية:
              </p>
              <p
                style="
                  text-align: center;
                  color: #c8be79;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(26 29 33) 0%,
                    rgb(55 61 65) 100%
                "
              >
                لتحميل التطبيق:
              </p>
              <p style="margin-bottom: 0px">
                - الرجاء تصوير رمز الاستجابة السريعة (QR) المرفق لتحميل التطبيق.
              </p>
              <div style="text-align: center; margin-block: 10px">
                <img
                  style="width: 120px"
                  :src="dataResidential.content_url + dataResidential.center_id.qr"
                  alt=""
                />
              </div>

              <p
                style="
                  text-align: center;
                  color: #c8be79;
                  padding: 7px 0px;
                  border-radius: 10px;
                  background: linear-gradient(
                    190deg,
                    rgb(26 29 33) 0%,
                    rgb(55 61 65) 100%
                "
              >
                لتسجيل الدخول:
              </p>
              <p style="margin-bottom: 0px">
                1. بعد تحميل التطبيق وتثبيته، افتح التطبيق.
              </p>
              <p style="margin-bottom: 0px">البريد الإلكتروني</p>
              <p style="margin-bottom: 0px">كلمة المرور</p>
              <p style="margin-bottom: 0px">
                باتباع هذه الخطوات، يمكنك البدء في استخدام تطبيق مجمع الفاخر السكني بسهولة
                ويسر. يتمتع التطبيق بالعديد من المميزات، منها:
              </p>
              <p style="margin-bottom: 0px">
                - *حساب خاص بكل وحدة سكنية:* يتيح لك التطبيق حسابًا شخصيًا لكل وحدة سكنية.
              </p>
              <p style="margin-bottom: 0px">
                - *معرفة آخر الأخبار داخل المجمع:* متابعة أحدث الأخبار والإعلانات.
              </p>
              <p style="margin-bottom: 0px">
                - *طلبات الصيانة:* تقديم طلبات صيانة للوحدة السكنية بسهولة.
              </p>
              <p style="margin-bottom: 0px">
                - *شحن الخدمات:* شحن الخدمات مثل الغاز والكهرباء مباشرة عبر التطبيق.
              </p>
              <p style="margin-bottom: 0px">
                - *استلام فواتير الخدمات:* عرض واستلام فواتير الخدمات وفواتير الشحن.
              </p>
              <p style="margin-bottom: 0px">
                - *الدفع الإلكتروني:* دفع الفواتير الشهرية للخدمات إلكترونيًا.
              </p>
              <p style="margin-bottom: 0px">
                - *إشعارات تذكيرية:* تلقي إشعارات تذكيرية بموعد الأقساط للوحدات السكنية في
                حال وجود أقساط.
              </p>
              <p style="margin-bottom: 0px">
                نأمل أن يسهم التطبيق في تحسين تجربتكم السكنية وتسهيل إدارة شؤونكم اليومية.
              </p>
            </v-col>
            <v-col
              cols="12"
              md="12"
              v-else-if="user.center_id._id == '66e2c810dec89fdfea71c92b'"
            >
              <hr style="width: 100%" />
              <p style="margin-bottom: 0px">مرحبًا بسكان مجمع كرم بغداد</p>
              <p style="margin-bottom: 0px">
                يمكنكم الآن تحميل تطبيق مجمع كرم بغداد السكني وبدء استخدامه باتباع الخطوات
                التالية:
              </p>
              <p
                style="
                  text-align: center;
                  background: linear-gradient(
                    190deg,
                    rgba(141, 96, 67, 1) 0%,
                    rgba(255, 198, 132, 1) 100%
                  );
                  color: black;
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                "
              >
                لتحميل التطبيق:
              </p>
              <p style="margin-bottom: 0px">
                - الرجاء تصوير رمز الاستجابة السريعة (QR) المرفق لتحميل التطبيق.
              </p>
              <div style="text-align: center; margin-block: 10px">
                <img
                  style="width: 120px"
                  :src="dataResidential.content_url + dataResidential.center_id.qr"
                  alt=""
                />
              </div>

              <p
                style="
                  text-align: center;
                  background: linear-gradient(
                    190deg,
                    rgba(141, 96, 67, 1) 0%,
                    rgba(255, 198, 132, 1) 100%
                  );
                  color: black;
                  padding: 0px 20px;
                  border-radius: 10px;
                  margin-bottom: 0px;
                "
              >
                لتسجيل الدخول:
              </p>
              <p style="margin-bottom: 0px">
                1. بعد تحميل التطبيق وتثبيته، افتح التطبيق.
              </p>
              <p style="margin-bottom: 0px">البريد الإلكتروني</p>
              <p style="margin-bottom: 0px">كلمة المرور</p>
              <p style="margin-bottom: 0px">
                باتباع هذه الخطوات، يمكنك البدء في استخدام تطبيق مجمع كرم بغداد السكني
                بسهولة ويسر. يتمتع التطبيق بالعديد من المميزات، منها:
              </p>
              <p style="margin-bottom: 0px">
                - *حساب خاص بكل وحدة سكنية:* يتيح لك التطبيق حسابًا شخصيًا لكل وحدة سكنية.
              </p>
              <p style="margin-bottom: 0px">
                - *معرفة آخر الأخبار داخل المجمع:* متابعة أحدث الأخبار والإعلانات.
              </p>
              <p style="margin-bottom: 0px">
                - *طلبات الصيانة:* تقديم طلبات صيانة للوحدة السكنية بسهولة.
              </p>
              <p style="margin-bottom: 0px">
                - *شحن الخدمات:* شحن الخدمات مثل الغاز والكهرباء مباشرة عبر التطبيق.
              </p>
              <p style="margin-bottom: 0px">
                - *استلام فواتير الخدمات:* عرض واستلام فواتير الخدمات وفواتير الشحن.
              </p>
              <p style="margin-bottom: 0px">
                - *الدفع الإلكتروني:* دفع الفواتير الشهرية للخدمات إلكترونيًا.
              </p>
              <p style="margin-bottom: 0px">
                - *إشعارات تذكيرية:* تلقي إشعارات تذكيرية بموعد الأقساط للوحدات السكنية في
                حال وجود أقساط.
              </p>
              <p style="margin-bottom: 0px">
                نأمل أن يسهم التطبيق في تحسين تجربتكم السكنية وتسهيل إدارة شؤونكم اليومية.
              </p>
            </v-col>
          </v-row>
          <br />
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
              v-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'"
              ><v-icon size="20"> mdi-phone </v-icon>4646</v-col
            >
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
              v-else
              ><v-icon size="20"> mdi-phone </v-icon
              >{{ dataResidential.center_id.phone }}</v-col
            >
            <v-col
              cols="6"
              md="6"
              v-if="dataResidential.center_id._id == '65e818b420bce937fbf81fe4'"
              style="padding: 10px; text-align: left; white-space: pre-wrap"
            >
              العراق – السماوة<br /><a href="mailto:info@nahdda.com"
                >info@nahdda.com</a
              ></v-col
            >
            <v-col
              cols="6"
              md="6"
              v-else
              style="padding: 10px; text-align: left; white-space: pre-wrap"
              >{{ dataResidential.center_id.address }}</v-col
            >
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import MarinaBaghdad from "@/assets/logo/mar.jpg";
import loam from "@/assets/logo/Screenshot-2024-11-24-113024.png";
import alfakher from "@/assets/logo/alfakher.jpg";
import qaiwan from "@/assets/logo/qaiwan-logo.png";
import karambagdad from "@/assets/logo/q.png";
import alrawan from "@/assets/images/icons/rr.jpg";
import Nahdda from "@/assets/images/icons/logoPrint.png";

export default {
  data() {
    return {
      MarinaBaghdad,
      loam,
      alfakher,
      qaiwan,
      karambagdad,
      alrawan,
      Nahdda,
      loading: true,
      data: null,
      user: null,
      dataResidential: null,
      id: JSON.parse(localStorage.getItem("PrintOwner"))._id,
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getOneOwner(this.id);
        this.data = response.data.results;
        setTimeout(() => {
          this.printElement();
        }, 500);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
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

    #pri v-card {
      height: 100vh;
    }
  }
}
</style>
