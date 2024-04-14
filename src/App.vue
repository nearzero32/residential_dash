<template>
  <v-app
    id="flexy"
    :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`"
  >
    <router-view />
  </v-app>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

export default {
  name: "App",
  beforeCreate() {
    const userSession = JSON.parse(localStorage.getItem("user"));

    if (!userSession) {
      this.$router.push({ name: "login" });
    }
    const firebaseConfig = {
      apiKey: "AIzaSyCC4LJuGZm5TVzVyJj_2oGkfB4nOwS-GBg",
      authDomain: "residential-8d38f.firebaseapp.com",
      projectId: "residential-8d38f",
      storageBucket: "residential-8d38f.appspot.com",
      messagingSenderId: "969992321728",
      appId: "1:969992321728:web:0873eaa6314075dd40cb25",
      measurementId: "G-YPLXNQ2VJ7",
    };

    try {
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        this.$store.commit('updateMessage', true);

        console.log("Message received. ", payload.notification.title);
      });
      // eslint-disable-next-line no-unused-vars
      const analytics = getAnalytics(app);
      // console.log(analytics);
    } catch (error) {
      console.error("حدث خطأ أثناء تهيئة Firebase:", error);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&family=Cairo:wght@500&display=swap");

body,
h1,
h2,
h3,
h4,
h5,
h6,
span,
strong,
div,
p,
a {
  font-family: "Cairo", sans-serif !important;
}
</style>
