<template>
  <div>
    <button v-if="showDays" @click="goBackToMonths">
      <span>
        <VIcon
          style="background-color: #000000; color: white; border-radius: 100px"
          size="30"
          >mdi-arrow-left</VIcon
        >
      </span>
    </button>
    <VueApexCharts
      type="line"
      height="250"
      :options="balanceChartConfig"
      :series="series"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";
import { getLineChartSimpleConfig } from "@core/libs/apex-chart/apexCharConfig";

const props = defineProps({
  visits: {
    type: Array,
    default: () => [],
  },
});

const vuetifyTheme = useTheme();
const series = ref([]);
const showDays = ref(false);

// تهيئة balanceChartConfig قبل استدعاء updateChart
const balanceChartConfig = ref(
  getLineChartSimpleConfig(vuetifyTheme.current.value, props.visits)
);

// دالة لتحديث المخطط بناءً على البيانات الجديدة
const updateChart = () => {
  const months = props.visits.map((item) => `Month ${item.month}`);
  const counts = props.visits.map((item) => item.count);

  series.value = [
    {
      name: "Visitors",
      data: counts,
    },
  ];

  balanceChartConfig.value = {
    ...getLineChartSimpleConfig(vuetifyTheme.current.value, props.visits),
    xaxis: {
      categories: months,
    },
  };
};

// مراقبة البيانات لتحديث المخطط عند تغيّرها
watch(
  () => props.visits,
  () => {
    updateChart();
  },
  { deep: true, immediate: true }
);

const goBackToMonths = () => {
  updateChart();
  showDays.value = false;
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
