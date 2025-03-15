<script setup>
import NavBarI18n from "@core/components/I18n.vue";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { isAppRtl } = useThemeConfig();
const { locale } = useI18n();

const i18nCompLanguages = [
  {
    label: "Arabic",
    i18nLang: "ar",
  },
  {
    label: "English",
    i18nLang: "en",
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
      "admin.loamrealestate.net": "Lome Real Estate Company",
      "admin.baghdadmarina.com": "Baghdad Marina Residential Complex",
      "admin.baghdad-residences.com": "Baghdad Residence Complex",
      "admin.karambaghdad.com": "Karim Baghdad Residential Complex",
      "admin.lamacc.com": "Lamac Residential Complex",
      "admin.alwedd.net": "Alwedd Residential Complex",
      "admin.alkholood.net": "ALkholood Residential Complex",
      "admin.shatalarab-city.com": "Shat Alarab Residential Complex",
      "admin.buruj-realstate.com": "ALburuj Residential Complex",
      "admin.aljanain.com": "Aljanain Residential Complex",
      localhost: "Development of Complexes",
      default: "Residential Complexes",
    },
    ar: {
      "admin.alfakhertowers.com": "مجمع الفاخر السكني",
      "admin.loamrealestate.net": "شركة لوم العقارية",
      "admin.alrawan.net": "مجمع الروان السكني",
      "admin.baghdadmarina.com": "مجمع مارينا السكني",
      "admin.baghdad-residences.com": "مجمع بغداد رزدنس",
      "admin.karambaghdad.com": "مجمع كرم بغداد السكني",
      "admin.lamacc.com": "مجمع لاماك السكني",
      "admin.shatalarab-city.com": "مجمع شط العرب",
      "admin.alwedd.net": "مجمع الود السكني",
      "admin.alkholood.net": "مجمع الخلود السكني",
      "admin.buruj-realstate.com": "مجمع البروج السكني",
      "admin.aljanain.com": "مجمع الجنائن",
      localhost: "مطور المجمعات",
      default: "المجمعات السكنية",
    },
    kr: {
      "admin.alfakhertowers.com": "مجمع الفاخر السكني",
      "admin.alrawan.net": "مجمع الروان السكني",
      "admin.loamrealestate.net": "کۆمپانیای ڕەچینەوەی لۆم",
      "admin.baghdadmarina.com": "مجمع مارينا السكني",
      "admin.baghdad-residences.com": "مجمع بغداد رزدنس",
      "admin.karambaghdad.com": "مجمع كرم بغداد السكني",
      "admin.shatalarab-city.com": "مجمع شط العرب",
      "admin.alkholood.net": "مجمع الخلود السكني",
      "admin.buruj-realstate.com": "مجمع البروج السكني",
      "admin.alwedd.net": "مجمع الود السكني",
      "admin.lamacc.com": "مجمع لاماك السكني",
      "admin.aljanain.com": "مجمع الجنائن",
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
