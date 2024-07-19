<script setup>
import log from "@/assets/images/avatars/building.png"
import { useRouter } from "vue-router";
import avatar1 from "@images/avatars/avatar-1.png";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

const r = JSON.parse(localStorage.getItem("results"));
let logo = null;
let name = null;
let name2 = null;
if (r.type === "super_admin") {
  logo = log;
  name = "Super Admin";
} else {
  logo = r.content_url + localStorage.getItem("logo");
  name = r.center_id.name;
  name2 = r.name;
}
function Logout() {
  localStorage.clear();
  router.push("/login");
}
</script>

<template>
  <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg :src="logo" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                  <VAvatar color="primary" variant="tonal">
                    <VImg :src="logo" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-medium">
              {{ name }}
            </VListItemTitle>
            <VListItemSubtitle>{{ name2 }}</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="mdi-account-outline" size="22" />
            </template>

            <VListItemTitle>Profile</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="Logout">
            <template #prepend>
              <VIcon class="me-2" icon="mdi-logout" size="22" />
            </template>

            <VListItemTitle>{{ t("Logout") }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
