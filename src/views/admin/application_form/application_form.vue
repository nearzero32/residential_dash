<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-card color="#ffe179">
              <v-card-text style="text-align: center">
                <h4>
                  <strong>عدد الطلبات المعلقة ( {{ table.pending }} )</strong>
                </h4>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card color="#13ffc5">
              <v-card-text style="text-align: center">
                <h4>
                  <strong>عدد الطلبات المؤكدة ( {{ table.approved }} )</strong>
                </h4>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card color="#ff7a7a">
              <v-card-text style="text-align: center">
                <h4>
                  <strong>عدد الطلبات الملغية ( {{ table.canceled }} )</strong>
                </h4>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card>
          <v-card-title>
            <v-row style="width: 100%">
              <v-col cols="12" md="6">
                <v-select
                  v-model="status"
                  label="نوع البيانات"
                  :items="items"
                  outlined
                  single-line
                  hide-details
                  @input="getCenter"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" class="r">
                <v-text-field
                  v-model="table.search"
                  @input="getCenter"
                  append-icon="mdi-magnify"
                  label="بحث"
                  outlined
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
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
            <template v-slot:item.price="{ item }">
              {{ $func(item.house_info.price) }}
            </template>
            <template v-slot:item.actions="{ item }">
              <!-- <VTooltip bottom v-if="userData.includes('remove')">
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
              </VTooltip> -->
              <VTooltip bottom v-if="item.status == 'معلق'">
                <template #activator="{ attrs }">
                  <v-icon
                    style="margin-inline: 4px"
                    color="success"
                    v-bind="attrs"
                    size="20"
                    @click="confirmIteme(item)"
                  >
                    mdi-check
                  </v-icon>
                </template>
                <span>تأكيد</span>
              </VTooltip>
              <VTooltip bottom v-if="item.status == 'معلق'">
                <template #activator="{ attrs }">
                  <v-icon
                    style="margin-inline: 4px"
                    color="red"
                    v-bind="attrs"
                    size="20"
                    @click="cancelIteme(item)"
                  >
                    mdi-alpha-x-circle-outline
                  </v-icon>
                </template>
                <span>الغاء</span>
              </VTooltip>
              <VTooltip bottom>
                <template #activator="{ attrs }">
                  <v-icon
                    style="margin-inline: 4px"
                    color="#fffc00"
                    v-bind="attrs"
                    size="20"
                    @click="Print(item)"
                  >
                    mdi-printer
                  </v-icon>
                </template>
                <span>طباعه</span>
              </VTooltip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

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

    <!-- confirm dialog -->
    <v-dialog v-model="dialogConfirm" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من الموافقة على هذا الطلب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="confirmItemLoading"
            @click="confirmItemConfirm"
          >
            تأكيد
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End confirm dailog -->

    <!-- cancel dialog -->
    <v-dialog v-model="dialogCancel" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من رفض هذا الطلب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogCancel = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="cancelItemLoading"
            @click="cancelItemConfirm"
          >
            رفض
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End cancel dailog -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذه الأستمارة ؟
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
        title: "أستماراة طلب حجز",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "أستماراة طلب حجز",
          disabled: true,
        },
      ],
      // nav
      // table
      items: [
        {
          text: "الكل",
          value: null,
        },
        {
          text: "معلق",
          value: "معلق",
        },
        {
          text: "مؤكد",
          value: "مؤكد",
        },
        {
          text: "ملغي",
          value: "ملغي",
        },
      ],
      status: null,
      table: {
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "اسم الزبون", value: "buyer_info.customer_name" },
          { text: "رقم الهاتف", value: "buyer_info.customer_phone" },
          { text: "رقم الهاتف الثاني", value: "buyer_info.customer_phone_two" },
          { text: "اسم النموذج", value: "form_name" },
          { text: "اسم المنزل", value: "house_name" },
          { text: "المساحة الكلية", value: "house_total_space" },
          { text: "مساحة البناء", value: "house_building_space" },
          { text: "السعر", value: "price" },
          { text: "أسم موظف المبيعات", value: "employee_name" },
          { text: "تاريخ الأستمارة", value: "createdAt" },
          { text: "العمليات", value: "actions" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
        approved: 0,
        canceled: 0,
        pending: 0,
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
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
      // cancel
      cancelItemLoading: false,
      dialogCancel: false,
      cancelItem: {},
      // cancel
      // confirm
      confirmItemLoading: false,
      dialogConfirm: false,
      confirmItem: {},
      // confirm
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
  methods: {
    showFullDetails(item) {
      this.$set(item, "showFullDetails", true);
    },
    hideFullDetails(item) {
      this.$set(item, "showFullDetails", false);
    },
    async getCenter() {
      try {
        this.table.loading = true;
        const key =
          this.tableOptions.sortBy.length > 0
            ? this.tableOptions.sortBy[0]
            : "createdAt";
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
        const response = await API.getApplicationForm({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: false,
          status: this.status,
        });
        this.table.centers = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.table.approved = response.data.results.approved;
        this.table.canceled = response.data.results.canceled;
        this.table.pending = response.data.results.pending;
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
    Print(item) {
      localStorage.setItem("PrintForm", JSON.stringify(item));
      // this.$router.push("/Print");
      window.open("/Print", "_blank");
    },
    confirmIteme(item) {
      this.confirmItem = { ...item };
      this.dialogConfirm = true;
    },
    async confirmItemConfirm() {
      this.confirmItemLoading = true;

      try {
        const response = await API.confirmApplicationForm(this.confirmItem._id);

        this.confirmItemLoading = false;
        this.dialogConfirm = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.confirmItemLoading = false;
          this.dialogConfirm = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.confirmItemLoading = false;
          this.dialogConfirm = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    cancelIteme(item) {
      this.cancelItem = { ...item };
      this.dialogCancel = true;
    },
    async cancelItemConfirm() {
      this.cancelItemLoading = true;

      try {
        const response = await API.cancelApplicationForm(this.cancelItem._id);

        this.cancelItemLoading = false;
        this.dialogCancel = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.cancelItemLoading = false;
          this.dialogCancel = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.status === 400) {
          this.cancelItemLoading = false;
          this.dialogCancel = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeApplicationForm(this.deletedItem._id);

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
.pointer-cursor {
  cursor: pointer;
}
.r {
  text-align: left;
}
</style>
