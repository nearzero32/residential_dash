<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
      @console-click="handleConsoleClick"
    ></BaseBreadcrumb>
    <v-container>
      <v-row style="justify-content: center">
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/sales-marketing.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد موظفين المبيعات <br />(
                {{ data.allSalesEmployee }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/phone.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد استفسارات الزبائن <br />(
                {{ data.allCallCenter }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/request.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد أستمارات طلب حجز وحدة سكنية (
                {{ data.allApplicationForm }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/application-architecture.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد أستمارات طلب موافقة <br />(
                {{ data.allConfirmationsForm }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/communications.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد طلبات الوحدات السكنية <br />(
                {{ data.allReservations }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong>عدد عقود المبيعات <br />( لا يوجد )</strong>
            </v-card-text>
          </v-card>
        </v-col> -->
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/rent.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد وحدات الأيجار <br />( {{ data.allHousesRent }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/sold.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد الوحدات السكنية المباعة <br />(
                {{ data.allHousesSelling }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row style="justify-content: center">
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/house-owner.png"
                style="width: 35px"
              /><br />
              <strong>عدد الملاك <br />( {{ data.allOwners }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/visitors.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد زوار الملاك <br />( {{ data.allOwnersVisits }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row style="justify-content: center">
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد خدمات الصيانة <br />(
                {{ data.AllServicesMaintenance }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/delivery-truck.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد خدمات الشحن <br />(
                {{ data.AllServicesThatShipping }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/ads.png"
                style="width: 35px"
              /><br />
              <strong>عدد الأعلانات <br />( {{ data.allAds }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/new-features.png"
                style="width: 35px"
              /><br />
              <strong>عدد المميزات <br />( {{ data.allAdvantages }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/staff.png"
                style="width: 35px"
              /><br />
              <strong>عدد الموظفين <br />( {{ data.allEmployee }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/policeman.png"
                style="width: 35px"
              /><br />
              <strong>عدد الحراس <br />( {{ data.allGuards }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/reserve.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد حجوزات الخدمات <br />
                ( {{ data.allReservationsInServices }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/team.png"
                style="width: 35px"
              /><br />
              <strong>عدد المستخدمين <br />( {{ data.allUsers }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="help">
      <div class="he" style="padding: 10px;">
        <v-btn
          color="rgb(251 151 120)"
          density="comfortable"
          variant="plain"
          @click="closeEvent"
        >
          <v-icon size="20" color="white">mdi-close-box</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";

export default {
  components: {
    BaseBreadcrumb,
  },

  data() {
    return {
      // nav
      page: {
        title: "الصفحة الرئيسية",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: true,
        },
      ],
      // nav

      loading: false,
      data: {},
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    handleConsoleClick() {
      var help = document.getElementById("help");
      help.style.display = "block";
    },
    closeEvent() {
      var help = document.getElementById("help");
      help.style.display = "none";
    },
    async getCenter() {
      try {
        this.loading = true;

        const response = await API.getCounts();

        this.loading = false;

        this.data = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style>
#help {
  display: none;
  width: 100%;
  height: 100%;
  background-color: #0000008c;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 100;
}
</style>
