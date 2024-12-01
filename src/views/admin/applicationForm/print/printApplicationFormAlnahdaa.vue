<template>
  <div>
    <v-container id="pri">
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <h3 style="text-align: center">عقد حجز وحدة عقارية</h3>
          <p>التاريخ : {{ data.createdAt }}</p>
          <p style="margin-block: 10px">
            <strong>1- بيانات البائع</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 1px">الاسم</th>
              <td style="text-align: center; padding: 1px">
                شركة صناع النهضة للاستثمار والتطوير العقاري والصناعي والطاقة والزراعي
                والثروة الحيوانية والتجارة العامة المحدودة ذ.م. م
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">رقم تسجيل الشركة</th>
              <td style="text-align: center; padding: 1px">م.ش.أ -2- 12407</td>
            </tr>
            <tr>
              <th style="padding-block: 1px">البلد</th>
              <td style="text-align: center; padding: 1px">العراق</td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">المحافظة</th>
              <td style="text-align: center; padding: 1px">بغداد</td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>2- بيانات المشتري</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 1px">الاسم</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.customer_name }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">حصة المشتري</th>
              <td style="text-align: center; padding: 1px">
                {{ data.house_total_space }}
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">اسم الممثل(في حالة شركة)</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">رقم جواز السفر وتاريخ الاصدار</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr>
              <th style="padding-block: 1px">رقم البطاقة الموحدة وتاريخها</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.id_number }}-{{ data.buyer_info.id_issue_date }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">رقم بطاقة السكن وتاريخها</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.skn_identity }}-{{ data.buyer_info.skn_identity_date }}
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">عدد افراد الاسرة</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.family_number }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">المهنة</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.job }}
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">البريد الالكتروني</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.email }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">العنوان الحالي</th>
              <td style="text-align: center; padding: 1px">
                محلة :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.street
                }}</span>
                / زقاق :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.state
                }}</span>
                / دار :
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.house
                }}</span>
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">المدينة</th>
              <td style="text-align: center; padding: 1px">
                <span style="border-bottom: dashed 1px; margin-left: 60px">{{
                  data.buyer_info.address.city
                }}</span>
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">الدولة</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr>
              <th style="padding-block: 1px">رقم الهاتف</th>
              <td style="text-align: center; padding: 1px">
                {{ data.buyer_info.customer_phone }}
              </td>
            </tr>
          </table>
          <strong>المشتري المتضامن</strong>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 5px">الاسم</th>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 220px"></span>
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">حصة المشتري</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr>
              <th style="padding-block: 5px">اسم الممثل(في حالة شركة)</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">رقم جواز السفر وتاريخ الاصدار</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr>
              <th style="padding-block: 5px">رقم البطاقة الموحدة وتاريخها</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">رقم بطاقة السكن وتاريخها</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr>
              <th style="padding-block: 5px">البريد الالكتروني</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">العنوان الحالي</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr>
              <th style="padding-block: 5px">المدينة</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">الدولة</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
            <tr>
              <th style="padding-block: 5px">رقم الهاتف</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>3-تفاصيل الوحدة السكنية</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 1px">اسم المجمع السكني</th>
              <td style="text-align: center; padding: 1px">مجمع النهضة السكني</td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">قطعة الارض</th>
              <td style="text-align: center; padding: 1px">
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                  "
                >
                  <p><strong>رقم القطعة</strong></p>
                  <p><strong>رقم المقاطعة </strong></p>
                  <p><strong>اسم المقاطعة ( أبو محار)</strong></p>
                </div>
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">رمز المنطقة</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">رقم الوحدة السكنية</th>
              <td style="text-align: center; padding: 1px">
                {{ data.house_name }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">نوع الوحدة</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr>
              <th style="padding-block: 1px">صنفها</th>
              <td style="text-align: center; padding: 1px"></td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 1px">مساحة الأرض م2</th>
              <td style="text-align: center; padding: 1px">
                {{ data.house_total_space }}
              </td>
            </tr>
            <tr>
              <th style="padding-block: 1px">اجمالي مساحة البناء م2</th>
              <td style="text-align: center; padding: 1px">
                {{ data.house_building_space }}
              </td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>4- سعر الشراء</strong>
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 5px">دينار عراقي</th>
              <td style="text-align: center; padding: 5px">
                {{ numberWithComma(data.house_info.price) }} كتابة
                {{ data.house_info.price_written }}
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">الخصم</th>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 220px"></span>
              </td>
            </tr>
            <tr>
              <th style="padding-block: 5px">الاضافات</th>
              <td style="text-align: center; padding: 5px"></td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>5-جدول الدفعات</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <thead>
              <tr>
                <th>الدفعة</th>
                <th>تاريخ السداد</th>
                <th>النسبة المئوية</th>
                <th>مبلغ الدفعة (دينار عراقي)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <table border="1" style="width: 100%; border-collapse: collapse">
            <thead>
              <tr>
                <th>الدفعة</th>
                <th>تاريخ السداد</th>
                <th>النسبة المئوية</th>
                <th>مبلغ الدفعة (دينار عراقي)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style="background-color: #cccccc">
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>الدفعة <span style="margin-inline: 35px"></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p>
            1.5- يمكن اجراء الدفعات المالية عن طريق الصكوك او بطاقات الدفع او غيرها من
            الوسائل المستعملة في العراق، التحويلات البنكية , وطرق الدفع الأخرى المقبولة من
            قبل البنك المركزي العراقي وعبر الأساليب المقبولة والمرتبطة بالبائع.
          </p>
          <br />
          <p>
            2.5- يتم اعتبار رسم الحجز على انه تم سداده بمجرد تأكد استلام المبلغ لدى حساب
            البائع او صرف قيمة الصك بغض النظر عن أي تأخر من جانب البائع في صرف او إيداع
            اية مبالغ.
          </p>
          <br />
          <p style="margin-block: 10px">
            <strong>6- الاستخدام المصرح</strong>
          </p>
          <p>
            حصرا للاستخدام السكني من قبل عائلة واحدة فقط ولا يجوز ايجار او بيع جزء من
            المنزل وحسب القوانين السارية.
          </p>
          <p style="margin-block: 10px">
            <strong>7- طريقة الدفع </strong>
          </p>
          <p>
            يجب ان يتم سداد المبالغ في حساب البائع حصرا ولا يتم التعامل مع المبالغ نقدا
            بأي حال من الأحوال يستثنى من ذلك الحالات المعلنة من قبل الحكومة او توقف خدمات
            الانترنت او ما شابه ذلك. معلومات حساب البائع:
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 5px">اسم المصرف</th>
              <td style="text-align: center; padding: 5px">مصرف الرافدين العراقي</td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">اسم وعنوان الفرع</th>
              <td style="text-align: center; padding: 5px">
                مصرف الرافدين / فرع 312 العراق – المثنى – قضاء السماوة – شارع المحافظة
              </td>
            </tr>
            <tr>
              <th style="padding-block: 5px">اسم الحساب</th>
              <td style="text-align: center; padding: 5px">
                شركة صناع النهضة للاستثمار والتطوير العقاري والصناعي والطاقة والزراعي
                والثروة الحيوانية والتجارة العامة المحدودة ذ.م. م
              </td>
            </tr>
            <tr style="background-color: #cccccc">
              <th style="padding-block: 5px">رقم الحساب</th>
              <td style="text-align: center; padding: 5px">4378 جاري</td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>8- التواريخ المحددة</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 5px">تاريخ الإنجاز المتوقع</th>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>9- تاريخ السريان</strong>
          </p>
          <table border="1" style="width: 100%; border-collapse: collapse">
            <tr>
              <th style="padding-block: 5px">يسري هذا الحجز من تاريخ</th>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
              <td style="text-align: center; padding: 5px">
                <span style="margin-inline: 50px"></span>
              </td>
            </tr>
          </table>
          <p style="margin-block: 10px">
            <strong>10- المستندات والوثائق </strong>
          </p>
          <p><strong>يتم ارفاقها مع عقد البيع والشراء.</strong></p>
          <br />
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p style="margin-block: 10px">
            <strong>الجزء ب-الشروط والأحكام</strong>
          </p>
          <p>
            <strong
              >تقرأ هذه الشروط والأحكام والتفاصيل الواردة في الجزء أ من عقد الحجز هذا
              معا.</strong
            >
          </p>
          <br />
          <p>
            1- يكون توقيع المشتري على عقد الحجز هذا تأكيد نهائي وثابت لشراء العقار
            والتوقيع على اتفاقية البيع والشراء النهائية لهذا الغرض وفقا لما هو معرف في
            البند 13 من عقد الحجز هذا
          </p>
          <p>
            2- يشار فيما بعد الى المشتري الأول والمشتري المتضامن (ان وجد) مجتمعين ب
            “المشتري". ويكون المشتري الأول والمشتري المتضامن مجتمعين ومنفردين مسؤولين
            بمقتضى شروط وأحكام عقد الحجز هذا.
          </p>
          <p>
            3- يلتزم المشتري بتسجيل عنوانه الكامل لدى البائع وقت الحجز ويلتزم بأخطار
            البائع بجميع التغييرات التي تحدث فيما بعد على عنوانه ان وجدت.
          </p>
          <p>
            4- في حال وجود المشتري المتضامن، يرسل البائع جميع المراسلات الى المشتري الأول
            وفقا لبيانات المشتري الظاهرة (المنصوص عليها في التفاصيل)، و التي تعتبر، لكافة
            المقاصد و الأغراض، أنها أرسلت الى جميع المشترين، ولا يكون من الضروري ارسال
            مراسلة منفصلة الى المشترين المتضامنين الاخرين.
          </p>
          <p>
            5- يدفع المشتري الى البائع مبلغ الحجز في تاريخ التوقيع على عقد الحجز هذا،
            بموجب تحويل بنكي أو شيك مؤرخ بذات التاريخ، والذي يكون غير مسترد.
          </p>
          <p>
            6- يكون الدينار العراقي هو العملة الخاصة بكل المبالغ بموجب عقد الحجز هذا ما لم
            يوافق البائع خطيا على خلاف ذلك.
          </p>
          <p>7- يقر المشتري بأن الثمن لا يتضمن أية رسوم مفروضة أو ضرائب.</p>
          <p>
            8- يقر المشتري بأن المشروع في الوقت الحاضر في مرحلة التصميم ويتفهم أن المخطط
            الرئيسي يخضع الى التغيير. يحكم تطوير المشروع ويخضع الى المخطط الرئيسي بصيغته
            المعدلة من وقت الى اخر (يشار اليه بلفظ “المخطط الرئيسي") وفقا لما يراه البائع
            ضروريا أو تطلبه أي جهة مختصة أثناء إجراءات الموافقة على مخططات البناء، ويصرح
            المشتري بأنه لن يستند الى أي من تلك الحقوق او يعترض على ذلك.
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p>
            9- تكون تفاصيل العقار (المنصوص عليها في التفاصيل) والرسومات والمخططات مؤقتة
            وقابلة للتغيير. يعلم المشتري بذلك ويوافق على أن للبائع اجراء هذه الإضافات
            والتعديلات والتغييرات والتصليحات والتغييرات والالغاءات في مخطط التصميم ومخططات
            البناء ومخططات الطوابق وفقا لما يراه البائع لازما أو مطلوباً أو وفقاً لما
            تطلبه أي جهة مختصة. يقر المشتري بعدم اعتراضه على ذلك، ويوافق بخلاف ذلك على انه
            لا يحق له الحصول على أي تعويض عن تلك التغييرات ولا يحق له الرجوع على أي كان
            بشأنها.
          </p>
          <p>
            10- في حال كان هناك أي تغيير في المساحة البنائية القابلة للبيع أو مساحة قطعة
            الأرض من العقار عن المساحة القابلة للبيع أو مساحة قطعة الأرض المنصوص عليها في
            عقد الحجز هذا عندئذ، يتم تعديل الثمن فقط بالتناسب مع أي مقدار يزيد عن المساحة
            المثبتة.
          </p>
          <p>
            11- في حال لم يسدد المشتري إلى البائع أي مبلغ مستحق الدفع من الثمن في تاريخ
            استحقاقه وفقاً لعقد الحجز هذا، يدفع المشتري إلى البائع تعويضاً نسبته 1% شهريا
            (يشار إليه بلفظ "غرامة التأخير") على المبلغ المستحق غير المدفوع إلى البائع
            ابتداء من تاريخ استحقاق ذلك المبلغ وحتى تاريخ تمام سداده، ويوافق المشتري صراحة
            بموجبه على أنه تقدير مسبق عادل ومعقول للخسارة التي ستلحق بالبائع نتيجة لتخلف
            المشتري.
          </p>
          <p>
            12- تدرج كافة الشروط والأحكام المتعلقة بشراء العقار وملكيته في اتفاقية البيع
            والشراء النهائية والمستندات ذات الصلة التي قد يطلبها البائع أو تطلبها السلطات
            المختصة و/أو التي قد تكون مطلوبة وفقاً لقوانين الدولة العراقية ذات الصلة (يشار
            اليها مجتمعة ب “اتفاقية البيع والشراء").
          </p>
          <p>
            13- يزود البائع المشتري باتفاقية البيع والشراء في أقرب وقت يكون عملياً وممكنا
            بعد تاريخ عقد الحجز هذا. وتحتوي (أو تخضع) اتفاقية البيع والشراء على /إلى كل
            الحقوق الممنوحة إلى المشتري وفقاً للقوانين السارية.
          </p>
          <p>
            14- يوافق المشتري على الالتزام بأي تعليمات ويحرر أي مستندات اخرى قد يطلبها
            البائع أو أي جهة حكومية بشكل معقول لتنفيذ بيع العقار وفقاً لشروط اتفاقية البيع
            والشراء.
          </p>
          <p>
            15- يوقع المشتري اتفاقية البيع والشراء ويسلمها إلى البائع خلال أربعة عشر (14)
            يوماً من تاريخ استلامها. وتحل محل عقد الحجز هذا عند توقيعها وتسري شروطها وتكون
            بمثابة العقد الوحيد المبرم بين الطرفين فيما يخص بيع العقار وشراؤه.
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p>16- في حال:</p>
          <p>
            I- عدم استلام و/ أو صرف صك مبلغ الحجز ودخول قيمته في حساب البائع المصرفي لأي
            سبب، أو
          </p>
          <p>
            II- لم يوقع المشتري اتفاقية البيع والشراء ويسلمها إلى البائع خلال أربعة عشر
            (14) يوما من تاريخ استلامها من البائع.
          </p>
          <p>
            عندئذ، يحق للبائع، دون المساس بأي من حقوقه الأخرى بموجب هذا العقد أو بموجب
            القانون، ولكنه ليس التزاما عليه، ووفقاً لتقديره المطلق إلغاء عقد الحجز هذا،
            ويحق له مصادرة صرف صك مبلغ الحجز وأي صكوك لدفع أي أقساط أخرى تعادل أربعين
            بالمائة (40%) من الثمن أو أي مبلغ أكبر مسموح به وفقاً للقانون كتعويض مقدر،
            ومتوقع ومتفق عليه مسبقاً (يشار إليها بلفظ “التعويض") والذي يوافق عليه المشتري
            صراحة باعتباره تقدير عادل ومنطقي للأضرار التي ستلحق بالبائع نتيجة لخطأ
            المشتري. في حال عدم صرف صك مبلغ الحجز أو أي أقساط اخرى يتعين على المشتري دفع
            التعويض فوراً إلى البائع باعتباره ديناً في ذمة المشتري للبائع. ولا يكون على
            البائع (إن اختار الإلغاء) إرسال أي إخطار أو الحصول على أمر محكمة لنفاذ هذا
            الإلغاء، ويحق للبائع التصرف في العقار بأي طريقة كانت إلى أي شخص آخر.
          </p>
          <p>
            17- يعد عقد الحجز هذا حصرياً بالمشتري وغير قابل للتنازل أو النقل، ولا يجوز
            للمشتري في أي وقت نقل أو التنازل عن حقوقه والتزاماته بموجبه إلى الغير. يجوز
            للمشتري التنازل أو نقل حقوقه والتزاماته بموجب اتفاقية البيع والشراء بموافقة
            البائع الخطية المسبقة (والتي لا تحجب دون سبب معقول)، شريطة أن يكون المشتري قد
            دفع ما نسبته ثلاثون بالمائة (%30) من الثمن. في حال منح البائع الموافقة، فإنها
            تكون بصيغة حوالة لاتفاقية البيع والشراء بشكل خطي وفقاً لإجراءات البائع
            (وبتقديره الخاص) وتحرر اتفاقية اخرى بين المشتري الحالي والمشتري الجديد
            والبائع. يدفع المشتري الحالي إلى البائع رسوماً إدارية نظير أي نقل أو تحويل
            مبلغاً وقدره 2,000,000 دينار عراقي ( مليونان دينار عراقي ) وآية نفقات أو
            تكاليف أو مصاريف يتكبدها البائع.
          </p>
          <p>18- يلتزم المشتري بدفع جميع التكاليف والرسوم والنفقات بما يشمل:</p>
          <p>
            I- رسوم دائرة التسجيل العقاري او البلدية وأية رسوم تجديد والتي قد تعدل أو
            يتوجب دفعها من وقت لآخر وفقاً للقوانين السارية، و
          </p>
          <p>
            II- رسوم دائرة التسجيل العقاري او البلدية وأية رسوم تجديد والتي قد تعدل أو
            يتوجب دفعها من وقت الآخر وفقا للقوانين السارية وذلك مقابل أي تصرف تال بالعقار
            أو تنازل تال عنه من قبل المشتري إلى الغير؛ و
          </p>
          <p>
            III- أي تكاليف ورسوم وضرائب ونفقات أخرى قد تفرضها دائرة التسجيل العقاري أو أية
            جهات اخرى في محافظة المثنى فيما يتعلق بتسجيل العقار أو نقله أو تسجيل الأرض أو
            نقلها أو أية تعاملات أخرى للعقار أو الأرض( بما في ذلك أية ضرائب مفروضة على
            الأرض أو العقار) أو تتعلق بها; و
          </p>
          <p>
            IV- أية تكاليف ورسوم ونفقات أخرى قد يفرضها المجمع الرئيسي او شركة التشغيل
            والصيانة والخدمات والحراسة (بما في ذلك رسوم الخدمات والصيانة للمباني ورسوم
            المجمع واستخدام المرافق المشتركة).
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p>
            19- يجوز للبائع التنازل عن عقد الحجز هذا و / أو اتفاقية البيع والشراء أو نقل
            حقوقه والتزاماته بموجبها إلى أي شخص يتم تعيينه أو شخص تابع له وذلك بتقديم
            إخطار خطي بالتنازل أو النقل إلى المشتري ويوافق المشتري بموجب عقد الحجز هذا على
            التنازل أو النقل المذكور، ويوافق المشتري على توقيع جميع المستندات وعلى القيام
            بكافة الأشياء التي قد تكون مطلوبة لتنفيذ التنازل أو النقل، بما في ذلك استبدال
            الصكوك إن كانت متطابقة.
          </p>
          <p>
            20- إذا فسخ هذا الحجز بسبب إخلال البائع، فتكون أقصى مسؤولية للبائع محدودة
            بالمبلغ الذي تسلمه البائع وحصله من المشتري.
          </p>
          <p>
            21- يخضع عقد الحجز هذا ويفسر وفقا للقوانين العراقية والقوانين المعمول بها في
            العراق، ويوافق الطرفان على إحالة أي نزاع قد ينشأ عن أو نتيجة لنموذج الحجز
            الماثل، بما في ذلك أي مسألة بشأن وجوده أو سريانه أو إنهائه إلى محاكم المثنى.
          </p>
          <p>
            22- في حال وجد أي جزء من هذا العقد باطلاً أو غير نافذ بسبب أي قانون معمول به،
            يتم حذف ذلك الجزء وتستمر بقية أجزاء هذا العقد سارية ونافذة بشكل تام.
          </p>
          <p>
            23- تم استيفاء مبلغ (1,000,000 دينار عراقي) فقط مليون دينار عراقي غير قابل
            للاسترداد , ويتم انقاصه من مبلغ الدفعة الأولى في حالة توقيع عقد بيع أو/و شراء
            وحدة سكنية.
          </p>
          <p>
            24- أوافق / نوافق نحن بموجب عقد الحجز هذا على الالتزام بالشروط والأحكام
            الواردة فيه وتطبيقها لتحقيق حجز العقار، وأؤكد /نؤكد أن التفاصيل التي أعطيتها
            /أعطيناها في عقد الحجز هذا صحيحة ودقيقة إلى حد أفضل علم لدي.
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
      <v-card
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: black;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 0px;
            height: 10%;
          "
        >
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: right; white-space: pre-wrap"
          >
            <img :src="alnahdaa2" style="width: 150px" alt="" />
          </v-col>
          <v-col
            cols="6"
            md="6"
            style="padding: 10px; text-align: left; white-space: pre-wrap"
          >
            <img :src="alnahdaa1" style="width: 100px" alt="" />
          </v-col>
        </v-row>
        <div style="height: 80%">
          <p>
            <strong> توقيع المشتري: </strong>
          </p>
          <p>
            <strong> اسم المشتري: {{ data.buyer_info.customer_name }} </strong>
          </p>
          <p>
            <strong> التاريخ: </strong>
          </p>
          <br />
          <br />
          <p>
            <strong> توقيع المتضامن: </strong>
          </p>
          <p>
            <strong> اسم المتضامن: </strong>
          </p>
          <p>
            <strong> التاريخ: </strong>
          </p>
          <br />
          <br />
          <p>
            <strong> توقيع ممثل البائع: </strong>
          </p>
          <p>
            <strong> اسم البائع: </strong>شركة صناع النهضة للاستثمار والتطوير العقاري
            والصناعي والطاقة والزراعي والثروة الحيوانية والتجارة العامة المحدودة ذ.م. م
          </p>
          <p>
            <strong> التاريخ: </strong>
          </p>
          <br />
          <br />
          <br />
          <p>
            <strong> الختم: </strong>
          </p>
        </div>

        <div style="height: 15%">
          <p style="margin-block-end: 3px">توقيع المشتري</p>
          <p style="margin-block-end: 3px">توقيع البائع</p>
          <p style="margin-block-end: 3px">توقيع المشتري المتضامن</p>
          <strong
            >العراق – محافظة المثنى – قضاء السماوة – حي المعلمين – 009647740408085 //الرقم
            المختصر 6467 – www.nhdda.com</strong
          >
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getCurrentDateInString } from "@/constant/date";
import numberWithComma from "@/constant/number";
import alnahdaa1 from "@/assets/logo/alnahdaa1.jpg";
import alnahdaa2 from "@/assets/logo/alnahdaa2.jpg";

export default {
  data() {
    return {
      alnahdaa1,
      alnahdaa2,
      data: null,
      user: null,
      dataResidential: null,
      date: getCurrentDateInString(),
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("printApplicationFormAlnahdaa"));
    var userDataString = JSON.parse(localStorage.getItem("results"));
    this.dataResidential = userDataString;
    this.user = userDataString;
  },
  mounted() {
    setTimeout(() => {
      this.printElement();
    }, 1000);
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
    numberWithComma,
  },
};
</script>

<style>
p {
  margin-bottom: 5px;
}
#pri span {
  border-bottom: dashed 1px;
  margin-left: 60px;
}
@media print {
  @media print {
    body {
      direction: rtl;
    }
    .v-application p {
      margin-bottom: 5px;
    }
    #pri span {
      border-bottom: dashed 1px;
      margin-left: 60px;
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
