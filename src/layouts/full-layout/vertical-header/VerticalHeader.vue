<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    :color="navbarColor"
    :dark="navbarColor !== '#fafafa'"
    class="app-navbar"
  >
    <!-- ---------------------------------------------- -->
    <!---/Toggle sidebar part -->
    <!-- ---------------------------------------------- -->
    <div>
      <v-app-bar-nav-icon
        @click="
          $vuetify.breakpoint.smAndDown
            ? setSidebarDrawer(!Sidebar_drawer)
            : $emit('input', !value)
        "
      />
    </div>
    <!---/Toggle sidebar part -->

    <!-- ---------------------------------------------- -->
    <!---Search part -->
    <!-- ---------------------------------------------- -->
    <v-btn icon class="mr-1 d-sm-block d-none" @click="searchbox">
      <feather type="search" class="feather-sm"></feather>
    </v-btn>

    <v-card v-if="showSearch" class="searchinput">
      <template>
        <v-text-field
          placeholder="Search & hit enter"
          class="mt-3 mb-0"
          append-icon="mdi-close"
          @click:append="searchbox"
        ></v-text-field>
      </template>
    </v-card>
    <!---/Search part -->

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
      min-width="385"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge color="secondary" dot offset-x="4" offset-y="4">
            <feather type="message-square" class="feather-sm"></feather>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-8">
        <h4 class="font-weight-medium fs-18">
          Messages
          <v-chip class="ma-2" label small color="secondary"> 5 new </v-chip>
        </h4>

        <v-list-item
          v-for="(item, i) in messages"
          class="px-0"
          :key="i"
          @click="href"
        >
          <v-list-item-title>
            <div class="d-flex align-center py-4 px-3 border-bottom">
              <div class>
                <v-badge
                  bordered
                  bottom
                  :color="item.avatarstatus"
                  dot
                  offset-x="20"
                  offset-y="40"
                >
                  <v-avatar size="42" class="mr-3"
                    ><img
                      :src="require(`@/assets/images/users/${item.image}`)"
                      :alt="item.image"
                  /></v-avatar>
                </v-badge>
              </div>
              <div class="ml-3">
                <h4 class="font-weight-medium">{{ item.title }}</h4>
                <span
                  class="grey--text subtitle-2 descpart d-block text-truncate font-weight-regular"
                  >{{ item.desc }}</span
                >
                <small class="grey--text caption">{{ item.time }}</small>
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
        <v-btn block depressed color="primary" class="mt-4 py-4"
          >See all Messages</v-btn
        >
      </v-list>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
      min-width="385"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge color="primary" dot offset-x="5" offset-y="5">
            <feather type="bell" class="feather-sm"></feather>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-8">
        <h4 class="font-weight-medium fs-18">
          Notifications
          <v-chip class="ma-2" label small color="warning"> 5 new </v-chip>
        </h4>
        <v-list-item
          class="px-0"
          v-for="(item, i) in notifications"
          :key="i"
          @click="href"
        >
          <v-list-item-title>
            <div class="d-flex align-center py-4 px-3 border-bottom">
              <div class>
                <v-btn :color="item.color" fab small elevation="0" class="mr-3">
                  <feather :type="item.icon" size="18"></feather>
                </v-btn>
              </div>
              <div class="ml-2">
                <h4 class="font-weight-medium">{{ item.title }}</h4>
                <span
                  class="grey--text subtitle-2 descpart d-block text-truncate font-weight-regular"
                  >{{ item.desc }}</span
                >
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
        <v-btn block depressed color="secondary" class="mt-4 py-4"
          >See all Notifications</v-btn
        >
      </v-list>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
      min-width="385"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="35">
            <img v-if="logo !== null" :src="content_url + logo" alt="Julia" />
            <img v-else :src="logoo" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-8">
        <v-btn block depressed color="secondary" v-if="user.type !== 'super_admin'" class="mt-4 py-4" @click="Profile"
          >الملف الشخصي</v-btn
        >
        <v-btn block depressed color="secondary" class="mt-4 py-4" @click="handleLogout"
          >تسجيل الخروج</v-btn
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
import logoo from '@/assets/images/office-building.png'
export default {
  name: "VerticalHeader",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showSearch: false,
    drawer: false,
      logoo,
    group: null,
    content_url: null,
    user: JSON.parse(localStorage.getItem("user")),
    href() {
      return undefined;
    },
  }),
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.content_url = user.content_url;
  },
  computed: {
    ...mapState(["navbarColor", "Sidebar_drawer", "logo"]),
  },

  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    },
    Profile() {
      this.$router.push("Profile");
    },
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),

    searchbox: function () {
      this.showSearch = !this.showSearch;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.hidelogo {
  display: none;
}
.searchinput {
  position: absolute;
  width: 100%;
  margin: 0;
  left: 0;
  z-index: 10;
  padding: 0 15px;
}
.descpart {
  max-width: 220px;
}

@media (min-width: 960px) {
  .v-application--is-ltr {
    .app-navbar.v-sheet {
      width: calc(100% - 265px) !important;
      margin-left: auto;
    }
  }
  .v-application--is-rtl {
    .app-navbar.v-sheet {
      width: calc(100% - 265px) !important;
      margin-left: unset;
      margin-right: auto;
    }
  }
}
</style>
