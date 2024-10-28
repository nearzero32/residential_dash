<script setup>
import { HorizontalNavGroup, HorizontalNavLink } from "@layouts/components";

const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const resolveNavItemComponent = (item) => {
  if ("children" in item) return HorizontalNavGroup;
  return HorizontalNavLink;
};

const userType = JSON.parse(localStorage.getItem("results")).type.toLowerCase();

const filteredMenuItems = props.navItems
  .map((item) => {
    const itemTypes = item.type.map((type) => type.toLowerCase());

    const filteredItem = itemTypes.includes(userType) ? { ...item } : null;

    if (filteredItem && filteredItem.children) {
      filteredItem.children = filteredItem.children.filter((child) => {
        const childTypes = child.type.map((type) => type.toLowerCase());
        return childTypes.includes(userType);
      });

      if (filteredItem.children.length === 0) {
        delete filteredItem.children;
      }
    }

    return filteredItem;
  })
  .filter((item) => item !== null);
</script>

<template>
  <ul class="nav-items">
    <Component
      :is="resolveNavItemComponent(item)"
      v-for="(item, index) in filteredMenuItems"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<style lang="scss">
.layout-wrapper.layout-nav-type-horizontal {
  .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
