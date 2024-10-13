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
      @click.native="handleChartClick"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
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

const daysSeries = ref([]);

const showDays = ref(false);

watch(daysSeries, (newSeries) => {
  series.value = newSeries;
});

const initialSeriesData = ref(props.visits.map((item) => item.visits));
series.value = [
  {
    name: "Visitors",
    data: initialSeriesData.value,
  },
];

const balanceChartConfig = ref(
  getLineChartSimpleConfig(vuetifyTheme.current.value, props.visits)
);

const handleChartClick = (event, chartContext, opts) => {
  if (showDays.value) return;

  const seriesIndex = opts.seriesIndex;
  const dataPointIndex = opts.dataPointIndex;

  if (dataPointIndex < props.visits.length) {
    const clickedData = props.visits[dataPointIndex];
    const clickedDate = clickedData.date;
    const days = clickedData.days;

    const newDaysSeries = [
      {
        name: `Visits in ${clickedDate}`,
        data: days.map((day) => day.number),
      },
    ];

    daysSeries.value = newDaysSeries;

    balanceChartConfig.value = {
      ...getLineChartSimpleConfig(vuetifyTheme.current.value, props.visits),
      xaxis: {
        categories: days.map((day) => day.day),
      },
    };

    showDays.value = true;
  } else {
    console.warn("Invalid data point index:", dataPointIndex);
  }
};

const goBackToMonths = () => {
  series.value = [
    {
      name: "Visitors",
      data: initialSeriesData.value,
    },
  ];

  balanceChartConfig.value = getLineChartSimpleConfig(
    vuetifyTheme.current.value,
    props.visits
  );
  showDays.value = false;
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
