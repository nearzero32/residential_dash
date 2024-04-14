<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="12" class="d-flex align-center">
        <v-container>
          <div class="pa-7 pa-sm-12">
            <v-row>
              <v-col cols="12" lg="12" xl="12">
                <!-- <img src="@/assets/images/logo-icon.png" /> -->
                <h2
                  class="font-weight-bold mt-4 blue-grey--text text--darken-2"
                >
                  المجمعات السكنية
                </h2>
                <!-- <h6 class="subtitle-1">مرحبا بك في المجمعا</h6> -->

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/dashboards/analytical"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="البريد الألكتروني"
                    class="mt-4"
                    required
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="كلمة المرور"
                    required
                    outlined
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="togglePasswordVisibility"
                  ></v-text-field>

                  <v-btn
                    :disabled="!valid"
                    color="info"
                    :loading="loading"
                    block
                    class="mr-4"
                    submit
                    @click="submit"
                    >تسجيل الدخول</v-btn
                  >
                </v-form>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
    </v-row>
    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->
  </div>
</template>

<script>
import router from "@/router/index";

export default {
  name: "FullLogin",
  data: () => ({
    valid: true,
    password: "",
    show1: false,
    loading: false,
    passwordRules: [
      (v) => !!v || "كلمة المرور مطلبة",
      (v) => (v && v.length > 5) || "يجب أن تكون كلمة المرور أكثر من 6",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "البريد الألكتروني مطلوب",
      (v) => /.+@.+\..+/.test(v) || "يجب ان يكون البريد الاكتروني صحيح",
    ],
    checkbox: false,
    // message
    dialogData: {
      open: false,
      color: "primary",
      bodyText: "test",
    },
    // message
  }),
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user.type === "super_admin") {
        router.push("/SuperAdminHome");
      } else if (user.type === "admin") {
        router.push(this.returnUrl || "/Index");
      } else if (user.type === "assistance") {
        router.push(this.returnUrl || "/customers");
      }
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.show1 = !this.show1;
    },
    async submit() {
      this.loading = true;
      
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        
        this.loading = false;
      } catch (error) {
        this.showDialogfunction(
          "فشل, أسم المستخدم أو كلمة المرور خطاء",
          "#FF5252"
        );
        this.loading = false;
      }
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>

<style>
@media (min-width: 750px) {
  .v-application .pa-sm-12 {
    padding: 200px 300px !important;
  }
}
</style>