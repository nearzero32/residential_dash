<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)} ( ${data.name} )`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />

    <v-card :loading="loading" v-if="data !== null">
    <v-container fluid class="down-top-padding">
        <div v-if="data.status == 'تم البيع'">
        <v-btn
            color="primary"
            class="ml-auto"
            v-if="data.status == 'تم البيع'"
            @click="cancelPayingHouse"
        >
            اعادة بيع الوحدة السكنية
        </v-btn>
        <br />
        <br />
        <hr />
        <br />
        </div>
        <p v-if="data && data.name">رقم الوحدة السكنية : {{ data.name }}</p>
        <p v-if="data && data.status">حالة الوحدة السكنية : {{ data.status }}</p>
        <p v-if="data && data.owners">المالك الحالي : {{ data.owners.name }}</p>
        <p v-if="data && data.owners">رقم هاتف المالك الحالي : {{ data.owners.phone }}</p>
        <p v-if="data && data.current_owner">تاريخ الشراء : {{ data.current_owner.date }}</p>
        <p>الملاك السابقين :
        <ul
        style="list-style-type: disclosure-closed; margin-right: 65px"
        v-if="data.previous_owners && data.previous_owners.length > 0"
        >
        <li v-for="(item, i) in data.previous_owners" :key="i">
            <div
            style="
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            "
            >
            <p style="margin-left: 83px">الأسم : {{ item.name }}</p>
            <p>رقم الهاتف : {{ item.phone }}</p>
            </div>
        </li>
        </ul>
        <span v-else>لا يوحد</span>
        </p>
        <p>الحالات السابقة :
        <ul style="list-style-type: disclosure-closed; margin-right: 65px" v-if="data.previous_status && data.previous_status.length > 0">
        <li v-for="(ite, i) in data.previous_status" :key="i">
            <p>{{ ite }}</p>
        </li>
        </ul>
        <span v-else>لا يوحد</span></p>
        <v-container>
        <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
            <strong>محتويات الوحدة السكنية</strong>
        </h3>
        <v-card v-for="(floor, indR) in data.floors" :key="indR" style="margin-bottom: 15px;">
            <v-container>
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
                <strong>أسم الطابق : {{ floor.name }}</strong>
            </h3>

            <div>
            <v-carousel :progress="true" progress-color="primary" hide-delimiters>
                <v-carousel-item v-for="(imgFloor, inde) in floor.images" :key="inde">
                <v-sheet height="100%">
                    <div class="d-flex fill-height justify-center align-center">
                    <img style="width: 100%;height: 100%;" :src="content_url + imgFloor" alt="" />
                    </div>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
            </div>
            <h3 style="display: grid; place-items: center; padding-block: 10px 20px">
                <strong>محتويات الطابق</strong>
            </h3>
            <v-row v-for="(room, indeR) in floor.rooms" :key="indeR">
                <v-col cols="12" md="4" style="padding: 10px">
                <v-card
                    class="mx-auto"
                    style="height: 100%; display: grid; place-items: center"
                    >{{ room.name }}</v-card
                >
                </v-col>
                <v-col cols="12" md="4" style="padding: 10px">
                <v-card
                    class="mx-auto"
                    style="height: 100%; display: grid; place-items: center"
                    >مساحة {{ room.space }}</v-card
                >
                </v-col>
                <v-col cols="12" md="4" style="padding: 10px">
                <v-card
                    class="mx-auto"
                    style="height: 100%; display: grid; place-items: center"
                >
                    <img style="padding-block: 10px;width: 100px" v-if="room.image" :src="content_url + room.image" alt="" />
                    
                    <p v-else>صورة  ( لا توجد صوره ) </p>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
        </v-container>
    </v-container>
    </v-card>


    <!-- Message Dialog -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            {{ t("Finish") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->
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
        title: "Residential Unit File",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "House Models",
          disabled: false,
          to: "/admin-show-house-models",
        },
        {
          text: "Form details",
          disabled: false,
          to: "/admin-profile-house-models",
        },
        {
          text: "Residential Unit File",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      loading: false,
      data: {},
      id: JSON.parse(localStorage.getItem("profileFloor"))._id,
      form_id: this.$route.params.id,

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;
        const response = await adminApi.getProfileHouse({
          form_id: this.form_id,
          house_id: this.id,
        });
        this.content_url = response.data.content_url;
        this.data = response.data.results;
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
    async cancelPayingHouse() {
      try {
        this.loading = true;
        const response = await adminApi.cancelPayingHouse({
          id: this.house_id,
        });
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
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
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
  },
};
</script>
