<template>
  <v-row class="page-breadcrumb">
    <v-col cols="10" sm="10" class="pa-0">
      <div class="px-2">
        <v-toolbar dense flat class="transparent pa-0" height="40px">
          <v-toolbar-title class="pt-3">
            <span class="text--primary">{{ title }}</span>
          </v-toolbar-title>
          <v-toolbar-title
            class="toobar-extension transparent pb-3"
            slot="extension"
          >
            <v-breadcrumbs :items="breadcrumbs" class="pa-0">
              <template v-slot:divider v-if="breadcrumbs">
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>

            <slot></slot>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </div>
    </v-col>
    <v-col cols="2" sm="2" class="pa-0">
      <div class="px-2">
        <!-- <v-btn
          color="rgb(251 151 120)"
          density="comfortable"
          variant="plain"
          @click="emitConsoleEvent"
        >
          <v-icon size="20" color="white">mdi-help-circle</v-icon>
        </v-btn> -->
      </div>
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
  },
  methods: {
    emitConsoleEvent() {
      this.$emit("console-click");
    },
  },
};
</script>

<style lang="scss">
.page-breadcrumb {
  margin: -24px -25px 27px -25px;
}
</style>
