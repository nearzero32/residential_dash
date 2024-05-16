<template>
  <div>
    <v-container fluid class="down-top-padding indigo lighten-5 my-5">
      <v-bottom-navigation color="#00BCD4" :value="value">
        <v-btn :exact="selectedComponent === 'Show'" @click="selectedComponent = 'Show'">
          <span>ملف النموذج</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn :exact="selectedComponent === 'Edit'" @click="selectedComponent = 'Edit'">
          <span>تعديل النموذج</span>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <component :is="selectedComponent" />
    </v-container>
  </div>
</template>

<script>
import Edit from "./edit.vue";
import Show from "./show.vue";

export default {
  components: {
    Edit,
    Show,
  },
  data() {
    return {
      value: 0,
      selectedComponent: this.$route.params.ac || 'Show',
    };
  },
  mounted() {
    this.value = this.selectedComponent === 'Show' ? 0 : 1;
  },
};
</script>

