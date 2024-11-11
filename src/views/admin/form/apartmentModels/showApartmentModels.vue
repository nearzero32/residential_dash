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
          <VCol cols="12" md="3" style="text-align: center">
            <VBtn
              tile
              color="primary"
              prepend-icon="mdi-plus"
              @click="goToPageAdd"
              v-if="userData.includes('add')"
            >
              {{ t("Adding a new model") }}
            </VBtn>
          </VCol>
          <VCol cols="12" md="3" style="text-align: center">
            <VBtn
              tile
              color="primary"
              prepend-icon="mdi-eye"
              @click="goToPageShowBuildings"
            >
              {{ t("Displaying the buildings") }}
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
        title: "Apartment models",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Apartment models",
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
        actions: ["تعديل", "بحث"],
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

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
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
          link: `/admin-show-profile-apartments`,
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
          title: this.t("Total area"),
          type: "strong",
          link: ``,
          key: "total_space",
        },
        {
          title: this.t("The buildings"),
          type: "strong",
          link: ``,
          key: "apartment_building",
        },
        {
          title: this.t("The block"),
          type: "strong",
          link: ``,
          key: "block_number",
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
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
  },
  methods: {
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
        const response = await adminApi.getApartments();

        this.table.Data = response.data.results;
        this.table.totalItems = response.data.results.length;
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.table.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.table.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    // Get Data

    // showImgs
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.selectable.images;
    },
    // showImgs

    // goToPage
    goToPageAdd() {
      this.$router.push("/admin-add-apartment-models");
    },
    goToPageShowBuildings() {
      this.$router.push("/admin-show-building");
    },
    editItem(item) {
      localStorage.setItem("editApartmentsModels", JSON.stringify(item));
      this.$router.push("/admin-edit-apartments-models");
    },
    // goToPage

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
