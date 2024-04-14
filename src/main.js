import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import InstantSearch from "vue-instantsearch";
import VueFeather from "vue-feather";
import DatetimePicker from "vuetify-datetime-picker";
import { VTextField } from "vuetify/lib";
import VCurrencyField from "v-currency-field";
import { VListSubheader } from 'vuetify/lib';


import '@mdi/font/css/materialdesignicons.css';
import { formatNumberWithSeparator } from "./utils/globalFunctions";

Vue.prototype.$func = formatNumberWithSeparator;
Vue.use(VueFeather);
Vue.use(DatetimePicker);
Vue.use(VueSkycons, {
  color: "#1e88e5",
});
Vue.component('v-list-subheader', VListSubheader);

Vue.use(InstantSearch);
Vue.config.productionTip = false;
Vue.use(Vuebar);
Vue.component("v-text-field", VTextField);
Vue.use(VCurrencyField, {
  locale: "en-US",
  decimalLength: 0,
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: 0,
  valueAsInteger: false,
  allowNegative: false,
});
new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
