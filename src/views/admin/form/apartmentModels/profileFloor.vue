<template>
  <div class="team">
    <BaseBreadcrumb
      :title="`${t(page.title)} ( ${data.name} )`"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard class="mb-6" v-if="data.status === 'تم البيع'">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="3" style="text-align: center">
            <VBtn
              color="primary"
              class="ml-auto"
              v-if="data.status === 'تم البيع'"
              append-icon="mdi-refresh-circle"
              :loading="loading"
              @click="cancelPayingHouse"
            >
              {{ t("Resale of the residential unit") }}
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mb-6">
      <VCardText>
        <strong>{{ t("Apartment number") }} : ( {{ data.name }} )</strong>
        <br />
        <br />
        <strong>اسم العمارة : ( {{ data.exact_apartment_building }} )</strong>
        <br />
        <br />
        <strong>رقم الطابق : ( {{ data.apartment_floor_number }} )</strong>
        <br />
        <br />
        <strong>المساحة الكلية : ( {{ data.total_space }} )</strong>
        <br />
        <br />
        <strong>مساحة البناء : ( {{ data.building_space }} )</strong>
        <br />
        <br />
        <strong>{{ t("Status") }} : ( {{ data.status }} )</strong>
        <br />
        <br />
        <strong v-if="data.previous_status && data.previous_status.length > 0"
          >{{ t("Previous statuses") }} :
          <br />
          <br />
          <ul style="list-style-type: disclosure-closed; margin-right: 65px">
            <li v-for="(ite, i) in data.previous_status" :key="i">
              <p>{{ ite }}</p>
            </li>
          </ul>
        </strong>
        <strong v-if="data.previous_owners && data.previous_owners.length > 0"
          >{{ t("Previous owners") }} :
          <br />
          <br />
          <ul style="list-style-type: disclosure-closed; margin-right: 65px">
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
                <p>{{ t("Phone number") }} : {{ item.phone }}</p>
              </div>
            </li>
          </ul>
        </strong>
        <strong v-if="data.current_owner && data.current_owner.date !== null"
          >{{ t("Purchase date") }} : {{ data.current_owner.date }}</strong
        >
        <br />
        <br />
        <v-container>
          <strong> {{ t("Apartment components") }} </strong>
          <v-row v-for="(room, indR) in data.rooms" :key="indR">
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
                >{{ t("The area") }} {{ room.space }}</v-card
              >
            </v-col>
            <v-col cols="12" md="4" style="padding: 10px">
              <v-card
                class="mx-auto"
                style="height: 100%; display: grid; place-items: center"
              >
                <img
                  style="padding-block: 0px; width: 100px"
                  v-if="room.image"
                  :src="content_url + room.image"
                  alt=""
                />

                <p v-else>
                  {{ t("The image") }} ( {{ t("No image available") }} )
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </VCardText>
    </VCard>

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
import { useToast } from "vue-toastification";

export default {
  setup() {
    const { t } = useI18n();
    const toast = useToast();

    return {
      toast,
      t,
      // nav
      page: {
        title: "Apartment details",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Apartment models",
          disabled: false,
          to: "/admin-show-apartment-models",
        },
        {
          text: "Displaying the buildings",
          disabled: false,
          to: "/admin-show-building",
        },
        {
          text: "Apartment details",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      data: JSON.parse(localStorage.getItem("profileFloor")),
      loading: false,

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  methods: {
    async cancelPayingHouse() {
      try {
        this.loading = true;
        const response = await adminApi.cancelPayingHouse({
          id: this.data._id,
        });
        this.$router.push({ name: "admin-show-building" });
        this.toast.success(response.data.message, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
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

    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message
  },
};
</script>
