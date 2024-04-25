<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
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
        <br />
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
          <template v-slot:item.ac="{ item }">
            <VTooltip bottom>
              <template #activator="{ attrs }">
                <v-icon
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
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      userDataString: null,
      // nav
      page: {
        title: "أستماراة طلب موافقة",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "أستماراة طلب موافقة",
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
          { text: "اسم الزبون", value: "customer_name" },
          { text: "هاتف الزبون", value: "customer_phone" },
          { text: "تفاصيل", value: "details" },
          { text: "أسم الموظف", value: "employee_name" },
          { text: "أسم النموذج", value: "form_name" },
          { text: "المساحة الكلية", value: "form_total_space" },
          { text: "مساحة البناء", value: "form_building_space" },
          { text: "البلوك", value: "form_block_number" },
          { text: "رقم الشارع", value: "form_street_number" },
          { text: "التصنيف", value: "form_category" },
          { text: "كود النموذج", value: "form_code" },
          { text: "رقم المنزل", value: "house_name" },
          { text: "التاريخ", value: "createdAt" },
          { text: "العمليات", value: "ac" },
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
    Print(item) {
      localStorage.setItem("PrintConfirmationsForm", JSON.stringify(item));
      window.open("/Print-Confirmations-Form", "_blank");
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
        const response = await API.getConfirmationsForm({
          page,
          limit: itemsPerPage,
          search: this.table.search,
          sortBy: sortByJSON,
        });

        this.table.centers = response.data.results.data;
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
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
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
</style>
