<template>
  <div>
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <v-card class="mx-auto">
      <v-container>
        <v-btn
          style="margin-bottom: 20px"
          color="primary"
          depressed
          elevation="5"
          outlined
          @click="ModifyPassword"
          plain
          raised
          rounded
          >تعديل كلمة المرور</v-btn
        >
        <hr />
        <br />
        <v-spacer></v-spacer>
        <v-form v-model="isFormvalid">
          <v-row style="justify-content: center">
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">الأسم</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.name"
                :rules="Rules.name"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.phone"
                :rules="Rules.phone"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">العنوان</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.address"
                :rules="Rules.address"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">فيس بوك</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.facebook"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">انستغرام</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.instagram"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">سناب جات</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.snapchat"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">تيك توك</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.tiktok"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">واتساب</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.whatsapp"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-row>
                <v-col cols="12" md="6" style="padding: 10px">
                  <v-label class="mb-2 font-weight-medium">الوكو</v-label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/bmp"
                    @change="handleFileChange"
                    ref="fileInput"
                    style="display: none"
                  />
                  <v-text-field
                    @click="$refs.fileInput.click()"
                    variant="outlined"
                    v-model="results.logo"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  style="padding: 10px; display: grid; place-items: center"
                >
                  <img
                    v-if="results.logo"
                    style="width: 130px"
                    :src="
                      isBase64(results.logo)
                        ? results.logo
                        : content_url + results.logo
                    "
                    alt="logo"
                    @click.stop
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="12">
              <v-label class="mb-2 font-weight-medium">التفاصيل</v-label>
              <v-textarea
                variant="outlined"
                v-model="results.description"
                color="primary"
                outlined
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="12">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الفيديو</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="results.video"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <iframe
                    width="200"
                    height="200"
                    :src="results.video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
        <v-divider></v-divider>
        <!----Personal Info---->
        <v-card-actions>
          <v-btn
            size="large"
            @click="addCenter"
            color="primary"
            :loading="addLoading"
            :disabled="!isFormvalid"
            text
            >تعديل</v-btn
          >
          <v-btn class="bg-lighterror text-error ml-4" @click="backPage" text
            >الغاء</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>

    <!-- - ModifyPassword -->
    <v-dialog v-model="dialogModifyPassword" max-width="500px">
      <v-toolbar color="primary" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          <v-form v-model="isFormvalidModifyPassword">
            <v-row style="justify-content: center">
              <v-col cols="12" md="12">
                <v-label class="mb-2 font-weight-medium"
                  >كلمة المرور القديمة</v-label
                >
                <v-text-field
                  variant="outlined"
                  v-model="old_password"
                  :rules="Rules.old_password"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-label class="mb-2 font-weight-medium"
                  >كلمة المرور الجديدة</v-label
                >
                <v-text-field
                  variant="outlined"
                  v-model="new_password"
                  :rules="Rules.new_password"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-label class="mb-2 font-weight-medium"
                  >تأكيد كلمة المرور</v-label
                >
                <v-text-field
                  variant="outlined"
                  v-model="confirm_password"
                  :rules="Rules.confirm_password"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            :loading="loadingModifyPassword"
            @click="changePassword"
            :disabled="!isFormvalidModifyPassword"
          >
            تعديل
          </v-btn>
          <v-btn color="primary" text @click="dialogModifyPassword = false">
            الغاء
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - ModifyPassword -->

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
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "Profile",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Profile",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      userDataString: null,
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // showDetail
      showDetail: {
        open: false,
        color: "primary",
        bodyText: null,
      },
      // showDetail
      // ModifyPassword
      loadingModifyPassword: false,
      dialogModifyPassword: false,
      isFormvalidModifyPassword: false,
      old_password: null,
      new_password: null,
      confirm_password: null,
      // ModifyPassword
      // add
      results: {},
      content_url: null,
      addLoading: false,
      isFormvalid: true,
      Rules: {
        old_password: [(value) => !!value || "يرجى أدخال كلمة المرور الحالية"],
        new_password: [(value) => !!value || "يرجى أدخال كلمة المرور الجديدة"],
        confirm_password: [
          (value) => !!value || "يرجى تأكيد كلمة المرور الجديدة",
          (value) =>
            value === this.new_password ||
            "كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقين",
        ],
        name: [(value) => !!value || "يرجى أضافة أسم"],
        phone: [(value) => !!value || "يرجى أضافة رقم الهاتف"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        address: [(value) => !!value || "يرجى أدخال العنوان"],
        description: [(value) => !!value || "يرجى إضافة تفاصيل"],
        video: [(value) => !!value || "يرجى إضافة فيديو"],
      },
      // add
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
  },
  watch: {
    is_available(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
    type(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
  },
  methods: {
    backPage() {
      this.dialogData.open = false;
      this.$router.push("/Index");
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.results.logo = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async getCenter() {
      try {
        const response = await adminApi.getCenter();
        this.content_url = response.data.content_url;
        this.results = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    getDataCenter() {
      this.$store.dispatch("getCenterP");
    },
    async addCenter() {
      this.addLoading = true;
      try {
        const response = await adminApi.editCenter({
          name: this.results.name,
          phone: this.results.phone,
          address: this.results.address,
          description: this.results.description,
          video: this.results.video,
          facebook: this.results.facebook,
          instagram: this.results.instagram,
          snapchat: this.results.snapchat,
          tiktok: this.results.tiktok,
          whatsapp: this.results.whatsapp,
          logo: this.results.logo,
        });
        this.addLoading = false;
        this.getCenter();
        this.getDataCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.addLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.addLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.addLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },

    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    ModifyPassword() {
      this.dialogModifyPassword = true;
    },
    async changePassword() {
      try {
        this.loadingModifyPassword = true;
        const response = await adminApi.changePassword({
          old_password: this.old_password,
          new_password: this.new_password,
          confirm_password: this.confirm_password,
        });
        this.dialogModifyPassword = false;
        this.old_password = null;
        this.new_password = null;
        this.confirm_password = null;
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 404) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loadingModifyPassword = false;
      }
    },
  },
};
</script>

<style>
</style>