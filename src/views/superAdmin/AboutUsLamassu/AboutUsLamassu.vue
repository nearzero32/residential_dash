<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
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
              <v-label class="mb-2 font-weight-medium">الويب سايت</v-label>
              <v-text-field
                variant="outlined"
                v-model="results.website"
                :rules="Rules.website"
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
                :rules="Rules.description"
                color="primary"
                outlined
              ></v-textarea>
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
  </v-container>
</template>

<script>
import API from "@/api/superAPI";

export default {
  data() {
    return {
      userDataString: null,
      // nav
      page: {
        title: "معلومات عنا",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/SuperAdminHome",
        },
        {
          text: "معلومات عنا",
          disabled: true,
        },
      ],
      // nav
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
      // add
      results: {},
      content_url: null,
      addLoading: false,
      isFormvalid: true,
      Rules: {
        name: [(value) => !!value || "يرجى أضافة أسم"],
        phone: [(value) => !!value || "يرجى أضافة رقم الهاتف"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        address: [(value) => !!value || "يرجى أدخال العنوان"],
        description: [(value) => !!value || "يرجى إضافة تفاصيل"],
      },
      // add
    };
  },
  created() {
    this.getCenter();
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
        const response = await API.getAboutUsLamassu();
        this.content_url = response.data.content_url;
        this.results = response.data.results;
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
    async addCenter() {
      if (this.results.logo == null) {
        this.showDialogfunction("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else {
        event.preventDefault();
        this.addLoading = true;
        try {
          const response = await API.editAboutUsLamassu({
            name: this.results.name,
            description: this.results.description,
            address: this.results.address,
            phone: this.results.phone,
            website: this.results.website,
            facebook: this.results.facebook,
            instagram: this.results.instagram,
            logo: this.results.logo,
          });
          this.addLoading = false;
          this.getCenter();
          this.$store.state.logo = response.data.results.logo;
          localStorage.setItem("logo", response.data.results.logo);
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.addLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
            this.$router.push("/login");
          } else if (error.response && error.response.status === 500) {
            this.addLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else {
            this.addLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        }
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
