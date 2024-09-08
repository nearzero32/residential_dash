<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VContainer>
      <VRow style="justify-content: center">
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
        <!-- <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong>عدد عقود المبيعات <br />( لا يوجد )</strong>
            </VCardText>
          </VCard>
        </VCol> -->
        <VCol cols="12" md="3">
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
        </VCol>
        <VCol cols="12" md="3">
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
        </VCol>
      </VRow>
      <hr style="margin-block: 20px" />
      <VRow style="justify-content: center">
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/house-owner.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of property owners") }} <br />(
                {{ data.allOwners }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/visitors.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of property owners' visitors") }} <br />(
                {{ data.allOwnersVisits }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/recipient.png"
                style="width: 35px"
              /><br />
              <strong
                >{{ t("Number of owners who received the housing unit") }}
                <br />( {{ data.allReceivedOwners }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="3">
          <VCard elevation="16" :loading="loading" outlined shaped>
            <VCardText style="text-align: center">
              <img
                src="@/assets/images/icon/not-received.png"
                style="width: 35px"
              /><br />
              <strong
                >{{
                  t("Number of owners who have not received the housing unit")
                }}
                <br />( {{ data.allUnReceivedOwners }} )</strong
              >
            </VCardText>
          </VCard>
        </VCol>
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

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
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
