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
];
var t = document.getElementById("ti");

onMounted(() => {
  const storedLang = localStorage.getItem("selectedLanguage");
  if (storedLang) {
    locale.value = storedLang;
    isAppRtl.value = storedLang === "ar";
    t.innerText = "المجمعات السكنية";

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
  isAppRtl.value = lang === "ar";
  localStorage.setItem("selectedLanguage", lang);
  if (lang) {
    if (lang === "ar") {
      t.innerText = "المجمعات السكنية";
    } else {
      t.innerText = "Housing complexes";
    }
  }

};
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" @change="handleLangChange" />
</template>
