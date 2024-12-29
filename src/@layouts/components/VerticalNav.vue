<script setup>
import { useLayouts } from "@layouts";
import {
  VerticalNavGroup,
  VerticalNavLink,
  VerticalNavSectionTitle,
} from "@layouts/components";
import { config } from "@layouts/config";
import { injectionKeyIsVerticalNavHovered } from "@layouts/symbols";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import log from "@/assets/images/avatars/building.png";

const props = defineProps({
  tag: {
    type: [String, null],
    required: false,
    default: "aside",
  },
  navItems: {
    type: Array,
    required: true,
  },
  isOverlayNavActive: {
    type: Boolean,
    required: true,
  },
  toggleIsOverlayNavActive: {
    type: Function,
    required: true,
  },
});

const refNav = ref();
const { width: windowWidth } = useWindowSize();
const isHovered = useElementHover(refNav);

provide(injectionKeyIsVerticalNavHovered, isHovered);

const {
  isVerticalNavCollapsed: isCollapsed,
  isLessThanOverlayNavBreakpoint,
  isVerticalNavMini,
  isAppRtl,
} = useLayouts();

const hideTitleAndIcon = isVerticalNavMini(windowWidth, isHovered);

const resolveNavItemComponent = (item) => {
  if ("heading" in item) return VerticalNavSectionTitle;
  if ("children" in item) return VerticalNavGroup;
  return VerticalNavLink;
};

const route = useRoute();

watch(
  () => route.name,
  () => {
    props.toggleIsOverlayNavActive(false);
  }
);

// جلب البيانات من LocalStorage
const results = JSON.parse(localStorage.getItem("results"));
const accountType = localStorage.getItem("account_type")?.toLowerCase();
const pages = JSON.parse(localStorage.getItem("pages"));
const buildingType = results ? results.building_type : null;
const centerId = results?.center_id?._id ?? null;

let filteredNavItems = props.navItems
  .map((item) => {
    const itemTypes = Array.isArray(item.type)
      ? item.type.map((type) => type.toLowerCase())
      : [];
    const matchesAccountType = itemTypes.includes(accountType);

    const matchesBuildingType =
      buildingType === "منازل وشقق" ||
      item.building_type === "منازل وشقق" ||
      item.building_type === buildingType;

    let matchesCenterId = true;

    // التحقق من العناصر الرئيسية
    if (centerId) {
      matchesCenterId =
        item.name !== "marketing Residentail" ||
        [
          "663944d5260d48b0635862ad",
          "6638d6a4c8462a1d83346b54",
          "672981a677eecc001eb05f4a",
        ].includes(centerId);
    }

    const filteredItem =
      matchesAccountType && matchesBuildingType && matchesCenterId ? { ...item } : null;

    if (filteredItem && filteredItem.children) {
      // فلترة الأطفال داخل children
      filteredItem.children = filteredItem.children.filter((child) => {
        let matchesChildCenterId = true;

        // التحقق الخاص بـ "Marketing Staff Tasks"
        if (child.name === "admin-show-marketing-tasks" && centerId) {
          matchesChildCenterId = [
            "6638d6a4c8462a1d83346b54",
            "672981a677eecc001eb05f4a",
          ].includes(centerId);
        }

        return matchesChildCenterId;
      });

      // حذف 'children' إذا لم يتبقَ عناصر مرئية
      if (filteredItem.children.length === 0) {
        delete filteredItem.children;
      }
    }

    return filteredItem;
  })
  .filter((item) => item !== null);

// الفلترة حسب نوع الحساب 'assistance'
if (accountType === "assistance") {
  filteredNavItems = filteredNavItems.filter((item) => {
    const isIncludedInPages = pages.includes(item.name);
    const hasVisibleChildren = item.children && item.children.length > 0;
    return isIncludedInPages || hasVisibleChildren;
  });
}

// إذا كان نوع الحساب لا يساوي 'assistance'
// نقوم بعرض جميع البيانات بدون تصفية الأسماء
if (accountType !== "assistance") {
  filteredNavItems = filteredNavItems.filter((item) => item !== null);
}
</script>

<template>
  <Component
    :is="props.tag"
    ref="refNav"
    class="layout-vertical-nav"
    :class="[
      {
        'overlay-nav': isLessThanOverlayNavBreakpoint(windowWidth),
        hovered: isHovered,
        visible: isOverlayNavActive,
        scrolled: isVerticalNavScrolled,
      },
    ]"
  >
    <div class="nav-header">
      <slot name="nav-header">
        <RouterLink to="/" class="app-logo d-flex align-center gap-x-3 app-title-wrapper">
          <img :src="log" style="width: 30px" />
          <Transition name="vertical-nav-app-title">
            <h1
              v-show="!hideTitleAndIcon"
              class="font-weight-medium leading-normal text-xl text-uppercase"
            >
              {{ name }}
            </h1>
          </Transition>
        </RouterLink>
        <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
          <Component
            :is="config.app.iconRenderer || 'div'"
            v-show="isCollapsed && !hideTitleAndIcon"
            class="header-action"
            v-bind="config.icons.verticalNavUnPinned"
            @click="isCollapsed = !isCollapsed"
          />
          <Component
            :is="config.app.iconRenderer || 'div'"
            v-show="!isCollapsed && !hideTitleAndIcon"
            class="header-action"
            v-bind="config.icons.verticalNavPinned"
            @click="isCollapsed = !isCollapsed"
          />
        </template>
        <template v-else>
          <Component
            :is="config.app.iconRenderer || 'div'"
            class="header-action"
            v-bind="config.icons.close"
            @click="toggleIsOverlayNavActive(false)"
          />
        </template>
      </slot>
    </div>
    <slot name="before-nav-items">
      <div class="vertical-nav-items-shadow" />
    </slot>
    <slot name="nav-items" :update-is-vertical-nav-scrolled="updateIsVerticalNavScrolled">
      <PerfectScrollbar
        :key="isAppRtl"
        tag="ul"
        class="nav-items"
        :options="{ wheelPropagation: false }"
        @ps-scroll-y="handleNavScroll"
      >
        <Component
          :is="resolveNavItemComponent(item)"
          v-for="(item, index) in filteredNavItems"
          :key="index"
          :item="item"
        />
      </PerfectScrollbar>
    </slot>
  </Component>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: variables.$layout-vertical-nav-width;
  inset-block-start: 0;
  inset-inline-start: 0;
  transition: transform 0.25s ease-in-out, inline-size 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;
  will-change: transform, inline-size;

  .nav-header {
    display: flex;
    align-items: center;

    .header-action {
      cursor: pointer;
    }
  }

  .app-title-wrapper {
    margin-inline-end: auto;
  }

  .nav-items {
    block-size: 100%;

    // ℹ️ We no loner needs this overflow styles as perfect scrollbar applies it
    // overflow-x: hidden;

    // // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    // overflow-y: auto;
  }

  .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed & {
    &:not(.hovered) {
      inline-size: variables.$layout-vertical-nav-collapsed-width;
    }
  }

  // 👉 Overlay nav
  &.overlay-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});

      @include mixins.rtl {
        transform: translateX(variables.$layout-vertical-nav-width);
      }
    }
  }
}
</style>
