<template>
  <VLocaleProvider :rtl="isAppRtl">
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <RouterView />
      <v-snackbar
        v-model="loding"
        vertical
        timeout="-1"
        class="custom-snackbar"
      >
        <div class="text-subtitle-1 pb-2">يوجد تحديث جديد</div>

        <p>
          التحديث الجديد الذي تم إضافته هو <br /><br />
          ( {{ data.description }} )<br /><br />
          ارجاء اعادة تحميل الصفحة لكي يتم تحميل التحديث الجديد
        </p>

        <template v-slot:actions>
          <v-btn color="indigo" variant="text" @click="Restart">
            اعادة تشغيل
          </v-btn>
        </template>
      </v-snackbar>

      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>

<script>
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";
import { useStore } from "vuex";
import adminApi from "@/api/adminApi";

export default {
  components: {
    ScrollToTop,
  },
  setup() {
    const store = useStore();

    const {
      syncInitialLoaderTheme,
      syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
      isAppRtl,
      handleSkinChanges,
    } = useThemeConfig();

    store.dispatch("checkCurrentPath");

    const { global } = useTheme();

    syncInitialLoaderTheme();
    syncConfigThemeWithVuetifyTheme();
    handleSkinChanges();

    return {
      isAppRtl,
      global,
      hexToRgb,
    };
  },
  data() {
    return {
      data: null,
      checkDashInterval: null,
      loding: false,
    };
  },
  created() {
    this.initializeCheckDash();
  },
  beforeDestroy() {
    if (this.checkDashInterval) {
      clearInterval(this.checkDashInterval);
    }
  },
  methods: {
    async initializeCheckDash() {
      const checkDash = JSON.parse(localStorage.getItem("checkDash"));

      if (checkDash == null) {
        await this.startCheckDash();
      } else {
        this.fetchDashboardVersions();
        this.startCheckDashInterval();
      }
    },
    async startCheckDash() {
      await this.fetchDashboardVersions();
      this.startCheckDashInterval();
    },
    async fetchDashboardVersions() {
      try {
        const response = await adminApi.getDashboardVersions();
        const fetchedData = response.data.results;

        const storedData = JSON.parse(localStorage.getItem("checkDash"));

        if (!storedData) {
          localStorage.setItem("checkDash", JSON.stringify(fetchedData));
        }
        if (storedData !== null && fetchedData.version !== storedData.version) {
          this.loding = true;
        }

        this.data = fetchedData;
      } catch (error) {
        console.error("Error fetching dashboard versions:", error);
      }
    },
    startCheckDashInterval() {
      this.checkDashInterval = setInterval(() => {
        this.fetchDashboardVersions();
      }, 300000);
    },
    Restart() {
      this.loding = false;
      localStorage.setItem("checkDash", JSON.stringify(this.data));
      location.reload();
    },
  },
};
</script>

<style>
.custom-snackbar {
  bottom: 75% !important;
  left: 15% !important;
  transform: translateX(-50%);
}
</style>