<script setup>
import NavBarI18n from "@core/components/I18n.vue";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { isAppRtl } = useThemeConfig();
const { locale } = useI18n();

const i18nCompLanguages = [
  {
    label: "English",
    i18nLang: "en",
  },
  {
    label: "Arabic",
    i18nLang: "ar",
  },
  {
    label: "Kurdish",
    i18nLang: "kr",
  },
];
var t = document.getElementById("ti");

onMounted(() => {
  const storedLang = localStorage.getItem("selectedLanguage");
  if (storedLang) {
    locale.value = storedLang;
    isAppRtl.value = storedLang === "ar" || storedLang === "kr"; // اجعل الكردية RTL
    t.innerText =
      storedLang === "ar"
        ? "المجمعات السكنية"
        : storedLang === "kr"
        ? "Kompleksên malî"
        : "Housing complexes";
  } else {
    const defaultLang = "ar";
    locale.value = defaultLang;
    isAppRtl.value = defaultLang === "ar";
    localStorage.setItem("selectedLanguage", defaultLang);
    t.innerText = "Housing complexes";
  }
});

const handleLangChange = (lang) => {
  locale.value = lang;
  isAppRtl.value = lang === "ar" || lang === "kr"; // اجعل الكردية RTL
  localStorage.setItem("selectedLanguage", lang);
  if (lang) {
    if (lang === "ar") {
      t.innerText = "المجمعات السكنية";
    } else if (lang === "kr") {
      t.innerText = "Kompleksên malî"; // استخدم الترجمة المناسبة
    } else {
      t.innerText = "Housing complexes";
    }
  }
};
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" @change="handleLangChange" />
</template>
