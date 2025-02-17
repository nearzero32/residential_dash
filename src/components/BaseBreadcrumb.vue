<template>
  <v-row
    class="page-breadcrumb"
    style="
      border: solid 1px;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      border-color: #ffffff30;
      margin-right: 15px;
      margin-left: 15px;
    "
  >
    <v-col cols="10" sm="10" class="pa-0">
      <div class="px-2">
        <h2 class="text--primary">{{ title }}</h2>
        <ul
          v-if="breadcrumbs"
          style="
            list-style-type: none;
            display: flex;
            flex-direction: row;
            align-items: center;
          "
        >
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <router-link v-if="breadcrumb.to" :to="breadcrumb.to">{{
              breadcrumb.text
            }}</router-link>
            <span v-else>{{ breadcrumb.text }}</span>
            <v-icon v-if="index < breadcrumbs.length - 1">mdi-chevron-left</v-icon>
          </li>
        </ul>
      </div>
    </v-col>
    <v-col cols="2" sm="2" class="pa-0">
      <component :is="tour" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BaseBreadcrumb",
  props: {
    title: String,
    breadcrumbs: Array,
    icon: String,
    tour: Object,
  },
};
</script>

<style lang="scss">
.page-breadcrumb {
  margin: -24px -25px 27px -25px;
}
</style>
