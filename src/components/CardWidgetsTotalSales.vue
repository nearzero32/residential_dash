<script setup>
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";

// إعدادات الثيم
const vuetifyTheme = useTheme();
const { theme } = useThemeConfig();

// تعريف الخصائص (props) مع تحقق من وجود البيانات
const props = defineProps({
  visits: {
    type: Object,
    required: true, // نحدد أن البيانات مطلوبة
    default: () => ({ today: 0, week: 0, month: 0, all: 0 }), // قيم افتراضية
  },
});

// إعداد خيارات المخطط البياني
const options = controlledComputed(theme, () => {
  const currentTheme = ref(vuetifyTheme.current.value.colors);
  const variableTheme = ref(vuetifyTheme.current.value.variables);
  const disabledColor = `rgba(${hexToRgb(currentTheme.value["on-surface"])},${
    variableTheme.value["disabled-opacity"]
  })`;

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0.2,
        opacityFrom: 1,
        shadeIntensity: 0,
        type: "horizontal",
        stops: [0, 100, 100],
      },
    },
    stroke: {
      width: 5,
      curve: "smooth",
      lineCap: "round",
    },
    legend: { show: false },
    colors: [currentTheme.value.success],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -10,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["اليوم", "الأسبوع", "الشهر"],
      labels: { style: { colors: disabledColor } },
    },
    yaxis: { labels: { show: false } },
    tooltip: { enabled: false },
  };
});

// استخدام بيانات الزوار في المخطط (مع القيم الافتراضية إذا لم تتوفر)
const series = [
  {
    name: "عدد الزوار",
    data: [
      props.visits.today || 0,
      props.visits.week || 0,
      props.visits.month || 0,
    ],
  },
];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>
        <p class="mb-0">عدد زوار الملاك الكلي</p>
        <p class="mb-0">{{ props.visits.all }}</p>
      </VCardTitle>

      <template #append>
        <div class="mt-n7 me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="line"
        :options="options"
        :series="series"
        :height="206"
      />
    </VCardText>
  </VCard>
</template>
