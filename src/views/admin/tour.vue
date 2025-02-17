<script setup>
import { useRoute } from "vue-router";
import { useShepherd } from "vue-shepherd";

const route = useRoute();
const { ctrl_k, meta_k } = useMagicKeys();
let tour = null;
watch([ctrl_k, meta_k, () => route.path], () => {
  if (tour.isActive()) tour.cancel();
});
onMounted(() => {
  const navbar = document.querySelector(".layout-navbar");
  const layout_vertical_nav = document.querySelector(".layout-vertical-nav");
  const nav_home = document.querySelector(".nav-home");
  const nav_Accounts = document.querySelector(".nav-Accounts");
  const nav_forms_Apartments = document.querySelector(".nav-forms-Apartments");
  const nav_forms = document.querySelector(".nav-forms");
  const nav_owners = document.querySelector(".nav-owners");

  tour = useShepherd({
    useModalOverlay: true,
    stepsContainer: document.querySelector(".layout-wrapper"),
    modelContainer: document.querySelector(".layout-wrapper"),
    defaultStepOptions: {
      cancelIcon: { enabled: true },
      modalOverlayOpeningPadding: 2,
      modalOverlayOpeningRadius: 5,
    },
  });
  //  👉 Tour steps
  tour.addSteps([
    {
      id: "مرحبا",
      title: "مرحبا بك",
      arrow: true,
      attachTo: {
        element: document.querySelector(".st"),
        on: "bottom",
      },
      text:
        "مرحبا بك في الصفحةالرئيسية سوف يتم ارشادك لكي تتعلم طريقة استخدام هذه الصفحة.",
      buttons: [
        {
          action: tour.cancel,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "الشريط العلوي",
      title: "الشريط العلوي",
      arrow: true,
      attachTo: {
        element: navbar,
        on: "bottom",
      },
      text:
        "في هذا الشريط يوجد زر للتحكم في لغة النظام ( عربي , انكليزي , كردي ) وايضاً زر للتحكم في مود النظام ( ليلي , نهاري ) وزر الذي يحتوي على الصورة الشخصية يمكنك من خلاله عرض الملف الشخصي او تسجيل الخروج.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "الشريط الجانبي",
      title: "الشريط الجانبي",
      arrow: true,
      attachTo: {
        element: layout_vertical_nav,
        on: "left",
      },
      text:
        "في هذا القسم توجد الصفحات الخاصة بادارة النظام او التطبيق او الملاك والموظفين وجميع تفاصيل نظام المجمع.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "الصفحة الرئيسية",
      title: "الصفحة الرئيسية",
      arrow: true,
      attachTo: {
        element: nav_home,
        on: "left",
      },
      text: "في هذه الصفحة يضهر لك التقارير الخاصة بالمجمع.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "الحسابات",
      title: "الحسابات",
      arrow: true,
      attachTo: {
        element: nav_Accounts,
        on: "left",
      },
      text: "في هذه الصفحة يمكنك ادارة جميع الحسابات الخاصة بالمجمع.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "نماذج الشقق",
      title: "نماذج الشقق",
      arrow: true,
      attachTo: {
        element: nav_forms_Apartments,
        on: "left",
      },
      text:
        "في هذه الصفحة يمكنك ادارة النماذج التي تخص المجمع من عمليات اضافة او عرض وايضا عرض الوحدات السكنية مع حالة كل وحدة.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "نماذج المنازل",
      title: "نماذج المنازل",
      arrow: true,
      attachTo: {
        element: nav_forms,
        on: "left",
      },
      text:
        "في هذه الصفحة يمكنك ادارة النماذج التي تخص المجمع من عمليات اضافة او عرض وايضا عرض الوحدات السكنية مع حالة كل وحدة.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "ادارة الملاك",
      title: "ادارة الملاك",
      arrow: true,
      attachTo: {
        element: nav_owners,
        on: "left",
      },
      text:
        "في هذه الصفحة يمكنك ادارة الملاك من إضافة او عرض او تعديل او اعادة بيع الوحدة السكنية او .",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عرض التقارير",
      title: "قسم عرض التقارير",
      arrow: true,
      attachTo: {
        element: document.querySelector(".VContainer"),
        on: "top",
      },
      text: "في هذا القسم يتم عرض تقارير مفصله عن المجمع.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "اضغط على مخطط بياني للوحدات السكنية",
      title: "اضغط على مخطط بياني للوحدات السكنية",
      arrow: true,
      attachTo: {
        element: document.querySelector(".expansionPanelsOwners"),
        on: "bottom",
      },
      text:
        "في هذا القسم يتم عرض مخطط للوحدات السكنية وحالاتها واعدادها وتكون ملونه حسب حالاتها .",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "اضغط على مخطط بياني لزوار الملاك",
      title: "اضغط على مخطط بياني لزوار الملاك",
      arrow: true,
      attachTo: {
        element: document.querySelector(".OwnersVisits"),
        on: "top",
      },
      text:
        "في هذا القسم يتم عرض مخطط لزوار الملاك حسب كل شهر وعدد الزوار الخاص بهذا الشهر ويمكن عرض السنين السابقة عن طريق تغيير السنة في الحقل الذي في الاسفل.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "استفسارات الزبائن",
      title: "استفسارات الزبائن",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allCallCenter"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد الزبائن الذين اتصلو للاستفسار حول المجمع.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "موظفين المبيعات",
      title: "استفسارات الزبائن",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allSalesEmployee"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد موظفين المبيعات.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "أستمارات طلب حجز وحدة سكنية",
      title: "أستمارات طلب حجز وحدة سكنية",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allApplicationForm"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد أستمارات طلب حجز وحدة سكنية.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "أستمارات طلب موافقة",
      title: "أستمارات طلب موافقة",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allConfirmationsForm"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد أستمارات طلب موافقة.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد طلبات الوحدات السكنية",
      title: "عدد طلبات الوحدات السكنية",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allReservations"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد طلبات الوحدات السكنية.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد عقود المبيعات",
      title: "عدد عقود المبيعات",
      arrow: true,
      attachTo: {
        element: document.querySelector(".SalesContracts"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد عقود المبيعات.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد خدمات الصيانة",
      title: "عدد خدمات الصيانة",
      arrow: true,
      attachTo: {
        element: document.querySelector(".AllServicesMaintenance"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد خدمات الصيانة.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد خدمات الشحن",
      title: "عدد خدمات الشحن",
      arrow: true,
      attachTo: {
        element: document.querySelector(".AllServicesThatShipping"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد خدمات الشحن.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد الأعلانات",
      title: "عدد الأعلانات",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allAds"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد الأعلانات.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد المميزات",
      title: "عدد المميزات",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allAdvantages"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد المميزات.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد الموظفين",
      title: "عدد الموظفين",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allEmployee"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد الموظفين.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد الحراس",
      title: "عدد الحراس",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allGuards"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد الحراس.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد حجوزات الخدمات",
      title: "عدد حجوزات الخدمات",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allReservationsInServices"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد حجوزات الخدمات.",
      buttons: [
        {
          action: tour.back,
          classes: "backBtnClass",
          text: "السابق",
        },
        {
          action: tour.next,
          text: "التالي",
          classes: "nextBtnClass",
        },
      ],
    },
    {
      id: "عدد المستخدمين",
      title: "عدد المستخدمين",
      arrow: true,
      attachTo: {
        element: document.querySelector(".allUsers"),
        on: "top",
      },
      text: "في هذا الكارت يتم عرض عدد المستخدمين.",
      buttons: [
        {
          label: "السابق",
          text: "السابق",
          action: tour.back,
          classes: "backBtnClass",
        },
        {
          label: "انهاء",
          text: "انهاء",
          action: tour.complete,
          classes: "nextBtnClass",
        },
      ],
    },
  ]);
});
</script>

<template>
  <div>
    <VBtn
      variant="outlined"
      @click="
        () => {
          tour && tour.start();
        }
      "
    >
      التعليمات
    </VBtn>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/shepherd.scss";
</style>
