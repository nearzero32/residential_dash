<script setup>
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();
const currentTheme = vuetifyTheme.current.value.colors;

const props = defineProps({
  allCallCenter: {
    type: Number,
    default: 0,
  },
});

const series = [
  {
    name: "Subscribers",
    data: [0, 10, 25, props.allCallCenter],
  },
];

// خيارات الرسم البياني
const chartOptions = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  stroke: {
    curve: "smooth",
    width: 2.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 80, 100],
    },
  },
  xaxis: {
    type: "numeric",
    lines: { show: false },
    axisBorder: { show: false },
    labels: { show: false },
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0,
      },
    },
  ],
  tooltip: { enabled: false },
  theme: {
    monochrome: {
      enabled: true,
      color: currentTheme.success,
      shadeTo: "light",
      shadeIntensity: 0.65,
    },
  },
};
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">{{ allCallCenter }}</h6>
      <VueApexCharts
        type="area"
        :height="116"
        :options="chartOptions"
        :series="series"
      />
      <h6 class="text-sm text-center font-weight-medium">
        عدد استفسارات الزبائن
      </h6>
    </VCardText>
  </VCard>
</template>
