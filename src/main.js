/* eslint-disable import/order */
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import i18n from "@/plugins/i18n";
import layoutsPlugin from "@/plugins/layouts";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import "@core/scss/template/index.scss";
import "@styles/styles.scss";
import { createPinia } from "pinia";
import { createApp } from "vue";
import store from "./store/index";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

loadFonts();
// Firebase imports
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCC4LJuGZm5TVzVyJj_2oGkfB4nOwS-GBg",
  authDomain: "residential-8d38f.firebaseapp.com",
  projectId: "residential-8d38f",
  storageBucket: "residential-8d38f.appspot.com",
  messagingSenderId: "969992321728",
  appId: "1:969992321728:web:0873eaa6314075dd40cb25",
  measurementId: "G-YPLXNQ2VJ7",
};

const appp = initializeApp(firebaseConfig);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
const options = {
  transition: "Vue-Toastification__slideBlurred",
  maxToasts: 20,
  newestOnTop: true
};

// Create vue app
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(layoutsPlugin);
app.use(store);
app.use(i18n);
app.use(Toast, options);

// Mount vue app
app.mount("#app");
