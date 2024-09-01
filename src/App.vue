<script setup>
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";

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

function startCheckDash() {
  store.dispatch("checkDash");

  setInterval(() => {
    store.dispatch("checkDash");
  }, 10 * 60 * 1000);
}

const snackbar = ref(false);

startCheckDash();

const isVersionEqual = computed(() => store.state.isVersionEqual);

watch(isVersionEqual, (newValue, oldValue) => {
  if (newValue === false) {
    snackbar.value = true;
    console.log(snackbar.value);
  }
});
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <RouterView />
      <v-snackbar v-model="snackbar" vertical>
        <div class="text-subtitle-1 pb-2">This is a snackbar message</div>

        <p>This is a longer paragraph explaining something</p>

        <template v-slot:actions>
          <v-btn color="indigo" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>
