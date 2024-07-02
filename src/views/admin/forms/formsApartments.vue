<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn
              color="primary"
              class="ml-auto"
              v-if="userData.includes('add')"
              @click="AddAnApartmentModel"
            >
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة نموذج جديد
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="rr">
            <v-btn
              color="primary"
              class="ml-auto"
              @click="showBuilding"
            >
              <v-icon class="mr-2">mdi-eye</v-icon>عرض العمارات
            </v-btn>
          </v-col>
        </v-row>

        <v-data-table
          :headers="table.headers"
          loading-text="جاري التحميل ... الرجاء الانتظار"
          :items="table.centers"
          :loading="table.loading"
          class="elevation-1"
          no-results-text="لا توجد بيانات !"
        >
          <template v-slot:item.num="{ item }">
            {{ table.centers.indexOf(item) + 1 }}
          </template>
          <template v-slot:item.images="{ item }">
            <img
              v-if="item.images[0]"
              @click="showImgs(item)"
              :src="content_url + item.images[0]"
              style="
                width: 60px;
                border: solid 1px rebeccapurple;
                cursor: pointer;
              "
            />
          </template>
          <template v-slot:item.name="{ item }">
            <v-btn @click="showApartments(item)" text color="primary">
              {{ item.name }}
            </v-btn>
          </template>
          <template v-slot:item.building_space="{ item }">
            <ul>
              <li
                v-for="(building_spac, index) in item.building_space"
                :key="index"
              >
                {{ building_spac }}
              </li>
            </ul>
          </template>
          <template v-slot:item.total_space="{ item }">
            <ul>
              <li v-for="(total_spac, index) in item.total_space" :key="index">
                {{ total_spac }}
              </li>
            </ul>
          </template>
          <template v-slot:item.apartment_building="{ item }">
            <ul>
              <li
                v-for="(apartment_buildin, index) in item.apartment_building"
                :key="index"
              >
                {{ apartment_buildin }}
              </li>
            </ul>
          </template>

          <template v-slot:item.ac="{ item }">
            <VTooltip bottom v-if="userData.includes('edit')">
              <template #activator="{ attrs }">
                <v-icon
                  color="rgb(243 216 1)"
                  v-bind="attrs"
                  size="20"
                  @click="editApartments(item)"
                >
                  mdi-note-edit
                </v-icon>
              </template>
              <span>تعديل</span>
            </VTooltip>
            <VTooltip bottom v-if="userData.includes('remove')">
              <template #activator="{ attrs }">
                <v-icon
                  color="#FF5252"
                  v-bind="attrs"
                  size="20"
                  @click="deleteItem(item)"
                >
                  mdi-delete-restore
                </v-icon>
              </template>
              <span>حذف</span>
            </VTooltip>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
    <br />

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="clossMess"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text
          class="headline justify-center"
          v-if="showImg.dataImg !== null"
        >
          <v-carousel>
            <v-carousel-item v-for="(img, i) in showImg.dataImg" :key="i">
              <img :src="content_url + img" style="width: 100%" />
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false">
            إغلاق
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا النموذج ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            حذف
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End delete dailog -->
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
        title: "نماذج شقق",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "نماذج شقق",
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
      // edit
      editItemLoading: false,
      dialogEdit: false,
      old_image: null,
      editdItem: {},
      tagsE: [],
      editedImages: [],
      housesE: "",
      file: { size: 123, name: "Icon", type: "image/png" },
      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete

      // showHouse
      showHouseLoading: false,
      dialogshowHouse: false,
      statusNotReserved: null,
      statusInitialReservation: null,
      statusBookedUp: null,
      statusSold: null,
      showHouseItem: [],
      // showHouse

      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg
      table: {
        content_url: null,
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "الأسم", value: "name" },
          { text: "الصوره", value: "images" },
          { text: "مساحات البناء", value: "building_space" },
          { text: "مساحات الأرض", value: "total_space" },
          { text: "العمارات", value: "apartment_building" },
          { text: "البلوك", value: "block_number" },
          { text: "العمليات", value: "ac" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
    };
  },
  created() {
    var FormMass = localStorage.getItem("itemFormMass");
    if (FormMass) {
      this.showDialogfunction(FormMass, "primary");
    }

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
    clossMess() {
      var FormMass = localStorage.getItem("itemFormMass");
      if (FormMass) {
        localStorage.removeItem("itemFormMass");
        this.dialogData.open = false;
      } else {
        this.dialogData.open = false;
      }
    },
    showApartments(item) {
      localStorage.setItem("itemForm", JSON.stringify(item));
      this.$router.push("/admin-profileApartments/Show");
    },
    editApartments(item) {
      localStorage.setItem("itemForm", JSON.stringify(item));
      this.$router.push("/admin-profileApartments/Edit");
    },
    AddAnApartmentModel() {
      this.$router.push("/addApartments");
    },
    showBuilding() {
      this.$router.push(`/admin-showBuilding`);
    },
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.images;
    },

    async getCenter() {
      try {
        this.table.loading = true;
        const response = await API.getApartments();
        this.content_url = response.data.content_url;
        this.table.centers = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
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
        const response = await API.deleteForms(this.deletedItem._id);

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

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.ti-input[data-v-61d92e31] {
  padding-block: 15px !important;
}
.vue-dropzone > .dz-preview .dz-remove {
  width: 100%;
}
@media (max-width: 600px) {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    border-bottom: solid 1px #cbcbcb;
    padding-bottom: 10px;
  }
  .rr {
    text-align: start;
  }
}
@media (min-width: 600px) {
  .rr {
    text-align: end;
  }
}
</style>
