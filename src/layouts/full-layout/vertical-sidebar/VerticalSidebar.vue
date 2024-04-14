<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-breakpoint="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="70"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
    v-bar
    width="265"
  >
    <v-list expand nav>
      <!-- ---------------------------------------------- -->
      <!---Logo part -->
      <!-- ---------------------------------------------- -->

      <!---Dark Logo part -->
      <v-toolbar-title
        class="align-center d-flex mb-9" style="justify-content: center;"
        v-if="SidebarColor == 'white' && !$vuetify.theme.dark"
      >
      <h5 style="colore: rgb(0, 0, 0)">المجمعات السكنية</h5>
        <!-- <img src="" class="mt-2" /> -->
      </v-toolbar-title>
      <v-toolbar-title class="align-center d-flex mb-9" v-else>
        <h5 style="colore: white">المجمعات السكنية</h5>
        <!-- <img src="" class="mt-2" /> -->
      </v-toolbar-title>
      <!-- ---------------------------------------------- -->
      <!---Logo part -->
      <!-- ---------------------------------------------- -->
      <template v-for="(item, i) in filteredItems">
        <!---If Sidebar Caption -->
        <v-row v-if="item.header" :key="item.header" align="center">
          <v-col cols="12">
            <v-subheader v-if="item.header" class="d-block text-truncate">{{
              item.header
            }}</v-subheader>
          </v-col>
        </v-row>
        <!---If Sidebar Caption -->
        <BaseItemGroup
          v-else-if="item.children"
          :key="`group-${i}`"
          :item="item"
        ></BaseItemGroup>

        <BaseItem v-else :key="`item-${i}`" :item="item" />
      </template>
      <!---Sidebar Items -->
    </v-list>
    <!--- Buy Now -->
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import VerticalSidebarItems from "./VerticalSidebarItems";

export default {
  name: "Vertical-Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showLogo: true,
  }),
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
    },
    userType() {
      // استرجاع نوع المستخدم من localStorage
      return JSON.parse(localStorage.getItem("user")).type;
    },
    filteredItems() {
      // تصفية المسارات بناءً على نوع المستخدم
      return VerticalSidebarItems.filter((item) => {
        // إظهار العناصر التي تحتوي على "type" المستخدم أو تكون فارغة
        return !item.type || item.type === this.userType;
      });
    },
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    },
  },
};
</script>

<style lang="scss">
.hidelogo {
  display: none;
}
#main-sidebar {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  .v-navigation-drawer__border {
    display: none;
  }
  .v-list {
    padding: 8px 15px;
  }
  .v-list-item {
    &__icon--text,
    &__icon:first-child {
      justify-content: center;
      text-align: center;
      width: 20px;
    }
  }
  .sidebar-footer {
    position: relative;
    border-radius: 9px;
    padding: 20px 25px;
    .buy-now-img {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .sidebar-footer-text {
      position: relative;
    }
  }
}
</style>
