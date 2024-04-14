<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-col cols="12" md="6">
              <v-label class="mb-2 font-weight-medium">حالة الخدمة</v-label>
              <v-select
                :items="items"
                v-model="is_deleted"
                label="حالة الخدمة"
                outlined
              ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              outlined
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            :items="table.centers"
            :options.sync="tableOptions"
            :server-items-length="table.totalItems"
            :loading="table.loading"
            class="elevation-1"
            no-results-text="لا توجد بيانات !"
            @update:options="getCenter"
          >
            <template v-slot:item.num="{ item }">
              {{ table.centers.indexOf(item) + 1 }}
            </template>
            <template v-slot:item.service.price="{ item }">
              {{ $func(item.service.price) }}
            </template>

            <template v-slot:item.is_available="{ item }">
              <p v-if="item.service.is_available == true">مفعلة</p>
              <p v-else>غير مفعلة</p>
            </template>
            <template v-slot:item.image="{ item }">
              <img
                v-if="item.service.image !== null"
                @click="showImgs(item.service.image)"
                :src="table.content_url + item.service.image"
                style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
              />
            </template>
            <template v-slot:item.actions="{ item }">
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
        </v-card>
      </div>
    </div>

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
          <img style="width: 100%" :src="table.content_url + showImg.dataImg" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false"> إغلاق </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

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

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا الحجز ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false"> الغاء </v-btn>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userDataString: null,

      // nav
      page: {
        title: "حجوزات الخدمات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "حجوزات الخدمات",
          disabled: true,
        },
      ],
      // nav
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: null,
        name: null,
      },
      // showImg

      // table
      table: {
        content_url: null,
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "اسم المالك", value: "name" },
          { text: "رقم الهاتف", value: "phone" },
          { text: "اسم الخدمة", value: "service.name" },
          { text: "مبلغ الخدمة", value: "service.price" },
          { text: "الحالة", value: "is_available" },
          { text: "الصوره", value: "image" },
          { text: "النوع", value: "service.type" },
          { text: "تاريخ الحجز", value: "createdAt" },
          { text: "العمليات", value: "actions" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
      },
      // table
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // add
      selectedFiles: [],
      is_deleted: false,
      type: "شحن",
      OwnersAll: [],
      items: [
        { text: "محذوفة", value: true },
        { text: "غير مخذوفة", value: false },
      ],
      itemsType: [
        { text: "شحن", value: "شحن" },
        { text: "صيانة", value: "صيانة" },
      ],
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      receiver_type: null,
      existing_type: "بيع",
      data: {
        name: null,
        price: null,
        image: null,
        is_available: null,
        type: null,
      },
      selectedFile: null,
      Rules: {
        name: [(value) => !!value || "يرجى أضافة أسم"],
        price: [(value) => !!value || "يرجى أضافة سعر"],
        image: [(value) => !!value || "يرجى أضافة صورة"],
        is_available: [
          (value) => (value !== null && value !== undefined) || "يرجى أضافة الحالة",
        ],
        type: [(value) => !!value || "يرجى أدخال نوع الخدمة"],
      },
      // add
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
    };
  },
  computed: {
    ...mapGetters(["getMessage"]),
  },
  watch: {
    is_deleted(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
    getMessage(newValue) {
      if (newValue === true) {
        this.getCenter();
        this.updateMessage();
      }
    },
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ['add', 'edit', 'remove']
    }
  },
  methods: {
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item;
    },
    async getCenter() {
      try {
        this.table.loading = true;

        const key =
          this.tableOptions.sortBy.length > 0 ? this.tableOptions.sortBy[0] : "createdAt";
        const order =
          this.tableOptions.sortDesc.length > 0
            ? this.tableOptions.sortDesc[0]
              ? "desc"
              : "asc"
            : "desc";

        const sortByJSON = JSON.stringify({ key, order });

        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
        const response = await API.getReservationsService({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          is_deleted: this.is_deleted,
          sortBy: sortByJSON,
          type: this.type,
        });

        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
        this.table.totalItems = response.data.results.count;
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
    updateMessage() {
      this.$store.commit('updateMessage', false);
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
        const response = await API.removeReservationsService(this.deletedItem._id);

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
.v-image {
  height: 100% !important;
}
</style>
