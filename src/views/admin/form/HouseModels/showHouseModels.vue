<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
      <VCardText>
        <VRow style="justify-content: space-between">
          <VCol cols="12" md="4">
            <VBtn
              tile
              color="primary"
              prepend-icon="mdi-plus"
              @click="goToPage"
              v-if="userData.includes('add')"
            >
              {{ t("Addition") }}
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardTitle>
        <VRow
          justify="space-between"
          style="align-items: center; margin-bottom: 15px"
        >
          <VCol cols="12" sm="12" md="12">
            <VTextField
              v-model="table.search"
              append-inner-icon="mdi-magnify"
              density="compact"
              :label="t('Search')"
              variant="solo"
              hide-details
              single-line
              @click:clear="getCenter"
              clearable
            />
          </VCol>
        </VRow>
      </VCardTitle>
      <VCardText>
        <Table
          :table="table"
          :content_url="content_url"
          :tableOptions="tableOptions"
          :headers="headers"
          @update:options="getCenter"
          @editItems="editItem"
          @emitShowImgs="showImgs"
          @empShowIteme="showIteme"
        />
      </VCardText>
    </VCard>

    <!-- - showImg -->
    <VDialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <VCard style="padding-top: 20px">
        <VCardText
          class="headline justify-center"
          v-if="showImg.dataImg !== null"
        >
          <VCarousel>
            <VCarousel-item v-for="(img, i) in showImg.dataImg" :key="i">
              <img :src="content_url + img" style="width: 100%" />
            </VCarousel-item>
          </VCarousel>
        </VCardText>
        <VCard-actions>
          <VSpacer />
          <VBtn color="primary" text @click="showImg.open = false">
            إغلاق
          </VBtn>
        </VCard-actions>
      </VCard>
    </VDialog>
    <!-- - showImg -->

    <br />
    <v-card class="mx-auto" v-if="dialogshowHouse == true">
      <v-btn
        icon="mdi-close-circle-outline"
        @click="closeShowHouse"
        color="#FF5252"
        variant="outlined"
      ></v-btn>
      <v-card-title
        class="headline justify-center"
        style="text-align: center; color: #fb9778"
      >
        وحدات النموذج ( {{ showHouseItem.name }} ) <br />
        عدد الوحدات السكنية الأجمالي ( {{ showHouseItem.houses.length }} )
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="3" style="padding: 10px">
            <v-card
              shaped
              color="rgb(255 255 255)"
              style="
                height: 60px;
                display: grid;
                place-items: center;
                text-align: center;
              "
            >
              عدد الوحدات السكنية الغير محجوزة ( {{ statusNotReserved }} )
            </v-card>
          </v-col>
          <v-col cols="12" md="3" style="padding: 10px">
            <v-card
              shaped
              color="#d9d9d9"
              style="
                height: 60px;
                display: grid;
                place-items: center;
                text-align: center;
              "
            >
              عدد الوحدات السكنية المحجوزة مبدئياً (
              {{ statusInitialReservation }} )
            </v-card>
          </v-col>
          <v-col cols="12" md="3" style="padding: 10px">
            <v-card
              shaped
              color="rgb(249 249 134)"
              style="
                height: 60px;
                display: grid;
                place-items: center;
                text-align: center;
              "
            >
              عدد الوحدات السكنية المحجوزة ( {{ statusBookedUp }} )
            </v-card>
          </v-col>
          <v-col cols="12" md="3" style="padding: 10px">
            <v-card
              shaped
              color="rgb(34 208 220)"
              style="
                height: 60px;
                display: grid;
                place-items: center;
                text-align: center;
                color: white;
              "
            >
              عدد الوحدات السكنية التي تم بيعها ( {{ statusSold }} )
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-item-group
          class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
          style="flex-wrap: wrap; justify-content: flex-start !important"
        >
          <v-item v-for="(item, index) in showHouseItem.houses" :key="index">
            <VTooltip top>
              <template #activator="{ props }">
                <v-btn
                  style="margin: 5px"
                  :style="item.status === 'تم البيع' ? 'color: white' : 'black'"
                  :height="40"
                  @click="goHouse(item)"
                  :color="
                    item.status === 'حجز مبدئي'
                      ? 'rgb(217 217 217)'
                      : item.status === 'محجوز'
                      ? 'rgb(249, 249, 134)'
                      : item.status === 'تم البيع'
                      ? 'rgb(34 208 220)'
                      : item.status === 'غير محجوز'
                      ? 'rgb(255 255 255)'
                      : ''
                  "
                  :width="40"
                  :border="true"
                  v-bind="props"
                  v-on="on"
                >
                  {{ item.name }}
                </v-btn>
              </template>
              <span>{{ item.status }}</span>
            </VTooltip>
          </v-item>
        </v-item-group>
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
import Table from "@/components/table.vue";

export default {
  components: {
    Table,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      // nav
      page: {
        title: "House Models",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "House Models",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      // table
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "عرض"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      // table

      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg

      // showHouse
      showHouseLoading: false,
      dialogshowHouse: false,
      statusNotReserved: null,
      statusInitialReservation: null,
      statusBookedUp: null,
      id: null,
      statusSold: null,
      showHouseItem: [],
      // showHouse

      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // Delete

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
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
  },
  computed: {
    headers() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("The name"),
          type: "link",
          link: `/admin-profile-house-models`,
          key: "name",
        },
        {
          title: this.t("The image"),
          type: "images",
          link: ``,
          key: "images",
        },
        {
          title: this.t("Building areas"),
          type: "strong",
          link: ``,
          key: "building_space",
        },
        {
          title: this.t("Land areas"),
          type: "strong",
          link: ``,
          key: "total_space",
        },
        {
          title: this.t("Number of Residential Units"),
          type: "strong",
          link: ``,
          key: "houses.length",
        },
        {
          title: this.t("The block"),
          type: "strong",
          link: ``,
          key: "block_number",
        },
        {
          title: this.t("Category"),
          type: "strong",
          link: ``,
          key: "categories",
        },
        {
          title: this.t("Street Number"),
          type: "strong",
          link: ``,
          key: "street_number",
        },
        {
          title: this.t("Number of Floors"),
          type: "floors",
          link: ``,
          key: "floors",
        },
        {
          title: this.t("Operations"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
  },
  methods: {
    showIteme(item) {
      this.id = item._id;
      this.showHouseLoading = true;
      this.showHouseItem = item;
      var filteredStatusNotReserved = item.houses.filter(function (ite) {
        return ite.status === "غير محجوز";
      });
      this.statusNotReserved = filteredStatusNotReserved.length;

      var filteredStatusInitialReservation = item.houses.filter(function (
        iteReservation
      ) {
        return iteReservation.status === "حجز مبدئي";
      });
      this.statusInitialReservation = filteredStatusInitialReservation.length;

      var filteredStatusBookedUp = item.houses.filter(function (iteReservatio) {
        return iteReservatio.status === "محجوز";
      });
      this.statusBookedUp = filteredStatusBookedUp.length;

      var filteredStatusSold = item.houses.filter(function (iteReservati) {
        return iteReservati.status === "تم البيع";
      });
      this.statusSold = filteredStatusSold.length;

      this.dialogshowHouse = true;
      this.showHouseLoading = false;
    },
    closeShowHouse() {
      this.showHouseItem = [];
      this.statusNotReserved = null;

      this.statusInitialReservation = null;

      this.statusBookedUp = null;

      this.statusSold = null;

      this.dialogshowHouse = false;
    },
    goHouse(item) {
      localStorage.setItem("profileFloor", JSON.stringify(item));
      this.$router.push(`/admin-profile-house/${encodeURIComponent(this.id)}`);
    },

    // Get Data
    async getCenter(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
      }

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getForms();

        this.table.Data = response.data.results;
        this.table.totalItems = response.data.results.length;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    // Get Data

    // deleteItem
    deleteItem(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      try {
        const response = await adminApi.removeComplain(
          this.dialogDelete.deletedItem._id
        );
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
      }
    },
    // deleteItem

    // goToPage
    goToPage() {
      this.$router.push("/admin-add-house-models");
    },
    // goToPage

    // editItem
    editItem(item) {
      localStorage.setItem("editForm", JSON.stringify(item));
      this.$router.push(
        `/admin-edit-house-models/${encodeURIComponent(item._id)}`
      );
    },
    // editItem

    // showImgs
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.selectable.images;
    },
    // showImgs

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