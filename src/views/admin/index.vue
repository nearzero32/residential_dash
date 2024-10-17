<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <VContainer>
      <br />
      <CrmSalesOverview
        :key="componentKey"
        :allHouses="
          data && data.houses && data.houses.allHouses
            ? data.houses.allHouses
            : 0
        "
        :allOwners="data && data.allOwners ? data.allOwners : 0"
        :allReceivedOwners="
          data && data.allReceivedOwners ? data.allReceivedOwners : 0
        "
        :allUnReceivedOwners="
          data && data.allUnReceivedOwners ? data.allUnReceivedOwners : 0
        "
      ></CrmSalesOverview>
      <br />
      <VCard>
        <VCardText class="d-flex flex-wrap justify-space-between gap-4">
          <VRow>
            <VCol cols="12" md="5">
              <VCardTitle>مخطط بياني لزوار الملاك</VCardTitle>
              <VCardSubtitle>السنوي &amp; السهري &amp; اليومي</VCardSubtitle>
            </VCol>
            <VCol cols="12" md="2">
              <div class="d-flex align-center" style="justify-content: center">
                <VueDatePicker v-model="year" year-picker />
              </div>
            </VCol>
            <VCol cols="12" md="5">
              <div class="d-flex align-center" style="justify-content: center">
                <h6 class="text-h6 me-3">
                  عدد الزوار الكلي لسنة ( {{ year }} )
                  <!-- 401 -->
                </h6>
                <!-- <VChip label color="success" class="font-weight-medium">
                  <VIcon start icon="mdi-arrow-up" size="15" />
                   <span>22%</span>
                </VChip> -->
              </div>
            </VCol>
          </VRow>
        </VCardText>

        <VCardText>
          <ApexChartBalance :visits="visits" />
        </VCardText>
      </VCard>
      <br />
      <hr style="margin-block: 20px" />

      <VRow style="justify-content: center">
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/phone.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of customer inquiries") }} <br />(
                {{ data.allCallCenter }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/sales-marketing.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of sales staff") }} <br />(
                {{ data.allSalesEmployee }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/request.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of housing unit reservation forms") }} <br />(
                {{ data.allApplicationForm }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/application-architecture.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of approval request forms") }} <br />(
                {{ data.allConfirmationsForm }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/communications.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of housing unit requests") }} <br />(
                {{ data.allReservations }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong>عدد عقود المبيعات <br />( لا يوجد )</strong>
            </VCardText>
          </VCard>
        </VCol>
        <!-- <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/rent.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of rental units") }} <br />(
                {{ data.allHousesRent }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol> -->
        <!-- <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/sold.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of residential units sold") }} <br />(
                {{ data.allHousesSelling }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol> -->
      </VRow>
      <hr style="margin-block: 20px" />
      <VRow style="justify-content: center">
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of maintenance services") }} <br />(
                {{ data.AllServicesMaintenance }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/delivery-truck.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of shipping services") }} <br />(
                {{ data.AllServicesThatShipping }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/ads.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of advertisements") }} <br />(
                {{ data.allAds }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/new-features.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of features") }} <br />(
                {{ data.allAdvantages }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/staff.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of employees") }} <br />(
                {{ data.allEmployee }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/policeman.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of guards") }} <br />(
                {{ data.allGuards }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/reserve.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of service bookings") }} <br />
                ( {{ data.allReservationsInServices }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/team.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of users") }} <br />(
                {{ data.allUsers }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <!-- Message Dialog -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            {{ t("Finish") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";
import CrmSalesOverview from "@/components/CrmSalesOverview.vue";
import ApexChartBalance from "@/components/ApexChartBalance.vue";
import CrmAreaCharts from "@/components/CrmAreaCharts.vue";

export default {
  components: {
    CrmSalesOverview,
    ApexChartBalance,
    CrmAreaCharts,
  },
  setup() {
    const { t } = useI18n();

    const year = ref(new Date().getFullYear());

    return {
      t,
      year,
      // nav
      page: {
        title: "Home Page",
      },
      b: [
        {
          text: "Home Page",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      //data
      loading: false,
      data: {},
      //data
      visits: [],
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  created() {
    this.getCenter();
  },
  watch: {
    data: {
      handler(newData) {
        this.componentKey++;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getCounts();

        this.loading = false;

        this.data = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },

    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message
  },
};
</script>

<style></style>
