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
                v-if="results && results.name !== null && results.name !== undefined"
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
                v-if="results && results.phone !== null && results.phone !== undefined"
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
                v-if="
                  results && results.address !== null && results.address !== undefined
                "
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
                v-if="
                  results && results.facebook !== null && results.facebook !== undefined
                "
                variant="outlined"
                v-model="results.facebook"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">انستغرام</v-label>
              <v-text-field
                v-if="
                  results && results.instagram !== null && results.instagram !== undefined
                "
                variant="outlined"
                v-model="results.instagram"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">سناب جات</v-label>
              <v-text-field
                v-if="
                  results && results.snapchat !== null && results.snapchat !== undefined
                "
                variant="outlined"
                v-model="results.snapchat"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">تيك توك</v-label>
              <v-text-field
                v-if="results && results.tiktok !== null && results.tiktok !== undefined"
                variant="outlined"
                v-model="results.tiktok"
                color="primary"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label class="mb-2 font-weight-medium">واتساب</v-label>
              <v-text-field
                v-if="
                  results && results.whatsapp !== null && results.whatsapp !== undefined
                "
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
                  v-if="results && results.logo !== null && results.logo !== undefined"
                >
                  <img
                    style="width: 130px"
                    :src="
                      isBase64(results.logo) ? results.logo : content_url + results.logo
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
                v-if="
                  results &&
                  results.description !== null &&
                  results.description !== undefined
                "
                v-model="results.description"
                :rules="Rules.description"
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
                    v-if="
                      results && results.video !== null && results.video !== undefined
                    "
                    v-model="results.video"
                    :rules="Rules.video"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <iframe
                    width="200"
                    v-if="
                      results && results.video !== null && results.video !== undefined
                    "
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

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      userDataString: null,
      // nav
      page: {
        title: "الملف الشخصي",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الملف الشخصي",
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
      results: null,
      content_url: null,
      addLoading: false,
      isFormvalid: true,
      Rules: {
        name: [(value) => !!value || "يرجى أضافة أسم"],
        price: [(value) => !!value || "يرجى أضافة سعر"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        is_available: [
          (value) => (value !== null && value !== undefined) || "يرجى أضافة الحالة",
        ],
        type: [(value) => !!value || "يرجى أدخال نوع الخدمة"],
        houses: [(value) => !!value || "يرجى أدخال ارقام المنازل"],
        details: {
          title: [(value) => !!value || "يرجى أدخال أسم الطابق"],
          sub_details: {
            name: [(value) => !!value || "يرجى أدخال أسم الغرفة"],
            value: [(value) => !!value || "يرجى أدخال مساحة الغرفة"],
          },
        },
      },
      // add
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("user"));
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
        const response = await API.getCenter();
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
    getDataCenter() {
      this.$store.dispatch("getCenterP");
    },
    async addCenter() {
      if (this.results.logo == null) {
        this.showDialogfunction("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else {
        event.preventDefault();
        this.addLoading = true;
        try {
        const response = await API.editCenter({
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
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
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
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeServices(this.deletedItem._id);

        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
  },
};
</script>
