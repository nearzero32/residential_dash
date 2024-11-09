<template>
  <div>
    <v-container id="print-card" v-if="data !== null">
      <v-card>
        <v-card-title>
          <v-row
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
            "
          >
            <v-col
              cols="3"
              md="3"
              style="padding: 10px; text-align: right; white-space: pre-wrap"
            >
              <p style="font-size: 14px">
                <strong v-if="dataResidential.center_id">{{
                  dataResidential.center_id.name
                }}</strong>
              </p>
            </v-col>
            <v-col
              cols="6"
              md="6"
              style="padding: 10px; text-align: center; white-space: pre-wrap"
            >
              <div
                style="
                  background-color: #ffd147;
                  padding: 10px;
                  border-radius: 10px;
                "
              >
                <strong style="font-size: 14px">
                  {{ t("فاتورة التطبيق للمالك") }} ( {{ data.name }} )</strong
                >
              </div>
            </v-col>
            <v-col cols="3" md="3" style="text-align: center">
              <img
                :src="
                  dataResidential.content_url + dataResidential.center_id.logo
                "
                style="width: 100px"
                alt=""
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <div>
            <p>{{ t("اسم المالك") }}: {{ data.name }}</p>
            <p>{{ t("رقم الهاتف") }}: {{ data.phone }}</p>
            <p>{{ t("كود النموذج") }}: {{ data.form_code }}</p>
            <p>
              {{ t("المبلغ") }}:
              {{ numberWithComma(data.price) }}
            </p>
            <p>
              {{ t("الحالة") }}:
              <span v-if="data.is_paid == false">غير مسددة</span
              ><span v-else>مسددة</span>
            </p>
            <p>
              {{ t("تاريخ الاصدار") }}:
              <span style="border-bottom: dashed 1px">{{ dateString }}</span>
            </p>
          </div>
        </v-container>
      </v-card>
    </v-container>
    <div class="text-center">
      <v-row style="justify-content: center">
        <v-col cols="4" md="4">
          <v-btn
            class="mb-3 no-print"
            color="secondary"
            block
            outlined
            @click="printInvoice"
          >
            {{ t("طباعة") }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Api from "@/api/api";
import numberWithComma from "@/constant/number";
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      id: this.$route.params.id,
      data: null,
      dataResidential: null,
      dateString: null,
    };
  },
  setup() {
    const { t, locale } = useI18n();
    const isAppRtl = ref(false);

    onMounted(() => {
      const storedLang = localStorage.getItem("selectedLanguage");
      if (storedLang) {
        locale.value = storedLang;
        isAppRtl.value = storedLang === "ar" || storedLang === "kr";
      } else {
        const defaultLang = "en";
        locale.value = defaultLang;
        isAppRtl.value = defaultLang === "ar" || storedLang === "kr";
      }
    });

    return {
      t,
      locale,
      isAppRtl,
    };
  },
  created() {
    this.dataResidential = JSON.parse(localStorage.getItem("results"));
    const date = new Date();

    this.dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    this.getData();
  },
  methods: {
    async getData() {
      const response = await Api.getApplicationServiceBillsOne(this.id);

      if (response.status === 200 && response.data.error == true) {
        this.showDialogfunction(response.data.results, "#FF5252");
      }
      if (response.status === 401) {
        this.$store.dispatch("submitLogout");
      } else if (response.status === 500) {
        this.showDialogfunction("حصلت مشكلة يرجى المحاولة مجددا", "#FF5252");
      } else {
        this.data = response.data.results;
      }
    },
    printInvoice() {
      const printContent = document.getElementById("print-card");
      const originalContent = document.body.innerHTML;

      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
    },
    numberWithComma,
  },
};
</script>