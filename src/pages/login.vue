<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-form v-model="isFormValidAdd" :loading="loading">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="500"
        rounded="lg"
      >
        <v-card-title style="text-align: center">
          <div v-if="url == 'admin.alfakhertowers.com'">
            تسجيل الدخول الى ابراج الفاخر السكني
          </div>
          <div v-else-if="url == 'admin.alrawan.net'">
            تسجيل الدخول الى مجمع الروان السكني
          </div>
          <div v-else-if="url == 'admin.karambaghdad.com'">
            تسجيل الدخول الى مجمع كرم بغداد
          </div>
          <div v-else-if="url == 'admin.lamacc.com'">
            تسجيل الدخول الى مجمع لاماك
          </div>
          <div v-else-if="url == 'admin.alwedd.net'">
            تسجيل الدخول الى مجمع الود
          </div>
          <div v-else-if="url == 'admin.aljanain.com'">
            تسجيل الدخول الى مجمع الجنائن
          </div>
          <div v-else>تسجيل الدخول</div>
        </v-card-title>
        <hr />
        <br />
        <div class="text-subtitle-1 text-medium-emphasis">
          البريد الألكتروني
        </div>

        <v-text-field
          density="compact"
          v-model="data.email"
          :rules="Rules.email"
          placeholder="البريد الألكتروني"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
        <br />
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          كلمة المرور
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          v-model="data.password"
          :rules="Rules.password"
          placeholder="كلمة المرور"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <br />

        <v-btn
          class="mb-8"
          @click="login"
          color="blue"
          size="large"
          variant="tonal"
          block
          :disabled="!isFormValidAdd"
          :loading="loading"
        >
          تسجيل الدخول
        </v-btn>
      </v-card>
    </v-form>
    <!-- message -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            <!-- {{ lanN[lan].ok }} -->
            تم
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- message -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      errorM: (state) => state.errorM,
    }),
  },
  data: () => ({
    url: localStorage.getItem("currentPath"),
    visible: false,
    isFormValidAdd: false,
    loading: false,
    data: {
      email: null,
      password: null,
    },
    Rules: {
      email: [
        (v) => !!v || "البريد الإلكتروني مطلوب",
        (v) => /.+@.+\..+/.test(v) || "البريد الإلكتروني غير صالح",
      ],
      password: [(v) => !!v || "كلمة المرور مطلوبة"],
    },
    dialogData: {
      open: false,
      color: "primary",
      bodyText: "test",
    },
  }),
  mounted() {
    this.$store.dispatch("checkAccessTokenOnLoad");
  },
  methods: {
    async login() {
      localStorage.clear();
      this.loading = true;
      await this.$store.dispatch("submitLogin", {
        email: this.data.email,
        password: this.data.password,
      });
      if (this.errorM) {
        this.showDialogfunction(this.errorM, "#FF5252");
        this.$store.commit("SET_ERROR", null); // إعادة تعيين الخطأ بعد العرض
      }
      this.loading = false;
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>

<route lang="yaml">
meta:
  layout: blank
</route>
