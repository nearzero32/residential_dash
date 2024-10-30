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

const getTitleByLanguage = (lang) => {
  const currentPathh = window.location.hostname;
  const titles = {
    en: {
      "admin.alfakhertowers.com": "Al-Fakher Residential Complex",
      "admin.alrawan.net": "Al-Rawan Residential Complex",
      "admin.karambaghdad.com": "Karim Baghdad Residential Complex",
      "admin.lamacc.com": "Lamac Residential Complex",
      "admin.alwedd.net": "Alwedd Residential Complex",
      localhost: "Development of Complexes",
      default: "Residential Complexes",
    },
    ar: {
      "admin.alfakhertowers.com": "مجمع الفاخر السكني",
      "admin.alrawan.net": "مجمع الروان السكني",
      "admin.karambaghdad.com": "مجمع كرم بغداد السكني",
      "admin.lamacc.com": "مجمع لاماك السكني",
      "admin.alwedd.net": "مجمع الود السكني",
      localhost: "مطور المجمعات",
      default: "المجمعات السكنية",
    },
    kr: {
      "admin.alfakhertowers.com": "مجمع الفاخر السكني",
      "admin.alrawan.net": "مجمع الروان السكني",
      "admin.karambaghdad.com": "مجمع كرم بغداد السكني",
      "admin.alwedd.net": "مجمع الود السكني",
      "admin.lamacc.com": "مجمع لاماك السكني",
      localhost: "مطور المجمعات",
      default: "المجمعات السكنية",
    },
  };

  return titles[lang][currentPathh] || titles[lang].default;
};

const pathh = () => {
  const storedLang = localStorage.getItem("selectedLanguage") || "ar"; // Default to Arabic if no language is stored
  return getTitleByLanguage(storedLang);
};

onMounted(() => {
  const storedLang = localStorage.getItem("selectedLanguage");
  if (storedLang) {
    locale.value = storedLang;
    isAppRtl.value = storedLang === "ar" || storedLang === "kr";
    t.innerText = pathh(); // Set the title based on the current language
  } else {
    const defaultLang = "ar";
    locale.value = defaultLang;
    isAppRtl.value = defaultLang === "ar";
    localStorage.setItem("selectedLanguage", defaultLang);
    t.innerText = pathh(); // Set the title based on the default language
  }
});

const handleLangChange = (lang) => {
  locale.value = lang;
  isAppRtl.value = lang === "ar" || lang === "kr";
  localStorage.setItem("selectedLanguage", lang);
  t.innerText = pathh(); // Set the title based on the selected language
};
</script>

<template>
  <NavBarI18n :languages="i18nCompLanguages" @change="handleLangChange" />
</template>
