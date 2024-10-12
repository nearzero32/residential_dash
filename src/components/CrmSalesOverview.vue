<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";

const props = defineProps({
  allHouses: Number,
  allOwners: Number,
  allReceivedOwners: Number,
  allUnReceivedOwners: Number,
  default: 0,
});

const vuetifyTheme = useTheme();
const { theme } = useThemeConfig();

const options = controlledComputed(theme, () => {
  const currentTheme = ref(vuetifyTheme.current.value.colors);
  const variableTheme = ref(vuetifyTheme.current.value.variables);
  const secondaryTextColor = `rgba(${hexToRgb(
    currentTheme.value["on-surface"]
  )},${variableTheme.value["medium-emphasis-opacity"]})`;
  const primaryTextColor = `rgba(${hexToRgb(
    currentTheme.value["on-surface"]
  )},${variableTheme.value["high-emphasis-opacity"]})`;

  return {
    chart: { sparkline: { enabled: true } },
    colors: [
      currentTheme.value.primary,
      `rgba(${hexToRgb(currentTheme.value.primary)}, 0.7)`,
      `rgba(${hexToRgb(currentTheme.value.primary)}, 0.5)`,
      currentTheme.value["grey-100"],
    ],
    stroke: { width: 0 },
    legend: { show: false },
    dataLabels: { enabled: false },
    labels: [
      "عدد الوحدات المباعة",
      "عدد المستلمين",
      "عدد الغير مستلمين",
      "عدد الوحدات الغير مباعة",
    ],
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              offsetY: 25,
              color: secondaryTextColor,
            },
            value: {
              offsetY: -15,
              fontWeight: 600,
              fontSize: "24px",
              color: primaryTextColor,
              formatter: (value) => `${value}`,
            },
            total: {
              show: true,
              label: "عدد الوحدات الكلي",
              fontSize: "12px",
              color: secondaryTextColor,
              formatter: () => `${props.allHouses}`,
            },
          },
        },
      },
    },
  };
});

// تحديد عدد الوحدات غير المباعة
const unsoldUnits = props.allHouses - props.allOwners;

const series = [
  props.allOwners,
  props.allReceivedOwners,
  props.allUnReceivedOwners,
  unsoldUnits,
];

const salesOverviews = [
  {
    product: "عدد الوحدات الكلي",
    sales: props.allHouses,
  },
  {
    product: "عدد الملاك",
    sales: props.allOwners,
  },
  {
    product: "عدد الملاك المستلمين للوحدة السكنية",
    sales: props.allReceivedOwners,
  },
  {
    product: "عدد الملاك الغير مستلمين للوحدة السكنية",
    sales: props.allUnReceivedOwners,
  },
];
</script>



<template>
  <div>
    <VCard>
      <VCardItem>
        <VCardTitle>مخطط بياني للوحدات السكنية</VCardTitle>

        <template #append>
          <div class="me-n3">
            <MoreBtn />
          </div>
        </template>
      </VCardItem>

      <VCardText class="pt-4">
        <VRow>
          <VCol sm="6" cols="12">
            <VueApexCharts
              type="donut"
              :options="options"
              :series="series"
              :height="220"
            />
          </VCol>

          <VCol cols="12" sm="6">
            <div class="d-flex align-center">
              <div class="me-3">
                <VAvatar rounded color="primary" variant="tonal">
                  <!-- <VIcon icon="mdi-currency-usd" /> -->
                </VAvatar>
              </div>

              <div>
                <p class="mb-0">تفاصيل المخطط البياني</p>
                <!-- <h6 class="text-h6">$86,400</h6> -->
              </div>
            </div>

            <VDivider class="my-3" />
            <VRow>
              <VCol v-for="sale in salesOverviews" :key="sale.product" cols="6">
                <p class="mb-1">
                  <VIcon
                    icon="mdi-checkbox-blank-circle"
                    color="primary"
                    size="12"
                    class="me-2"
                  />
                  <span>{{ sale.product }}</span>
                </p>
                <p class="text-base font-weight-medium mb-0">
                  {{ sale.sales }}
                </p>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
