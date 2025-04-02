<template>
  <v-row
    class="page-breadcrumb"
    :style="{
      border: 'solid 1px #ffffff30',
      alignItems: 'center',
      padding: '15px',
      borderRadius: '12px',
      margin: '0 15px',
      backgroundColor: backgroundColor,
      color: 'white',
      textAlign: 'center',
    }"
  >
    <v-col cols="12" sm="6" class="pa-0">
      <div class="px-2">
        <h2 class="text--primary" style="text-align: right; color: white">{{ title }}</h2>
        <ul v-if="breadcrumbs" class="breadcrumbs">
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
    <!-- <v-col cols="12" sm="6" class="pa-0 ramadan-container" style="margin-top: 15px">
      <h3 class="ramadan-text">
        🌙 تتمنى لكم <strong>شركة لماسو</strong> رمضان كريم! 🕌✨
      </h3>
      <h4 class="iftar-countdown">{{ timeRemaining }}</h4>
      <div class="ramadan-decorations">
        <img
          src="@/assets/images/v.png"
          style="width: 8%"
          alt="Lantern"
          class="lantern left-lantern"
        />
        <img
          src="@/assets/images/v.png"
          style="width: 10%"
          alt="Lantern"
          class="lantern left-lantern"
        />
        <img src="@/assets/images/h.png" style="width: 15%" alt="Moon" class="moon" />
        <img
          src="@/assets/images/v.png"
          style="width: 10%"
          alt="Lantern"
          class="lantern right-lantern"
        />
        <img
          src="@/assets/images/v.png"
          style="width: 8%"
          alt="Lantern"
          class="lantern right-lantern"
        />
      </div>
    </v-col> -->
  </v-row>
</template>

<script>
import { useTheme } from "vuetify";
import { computed, ref, onMounted, onUnmounted } from "vue";

export default {
  name: "BaseBreadcrumb",
  setup() {
    const theme = useTheme();
    const backgroundColor = computed(() => theme.current.value.colors.r);
    const timeRemaining = ref("");

    const updateCountdown = () => {
      const now = new Date();
      const iftarTime = new Date();
      iftarTime.setHours(18, 6, 0, 0); // وقت الإفطار: 6:06 مساءً

      const diff = iftarTime - now;

      if (diff <= 0) {
        timeRemaining.value = "🌙 حان وقت الإفطار!";
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timeRemaining.value = `🕰️ تبقى ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية للإفطار`;
    };

    let interval = null;

    onMounted(() => {
      updateCountdown();
      interval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      backgroundColor,
      timeRemaining,
    };
  },
  props: {
    title: String,
    breadcrumbs: Array,
    icon: String,
    tour: Object,
  },
};
</script>

<style lang="scss" scoped>
.page-breadcrumb {
  margin: -24px -25px 27px -25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
a {
  color: rgb(222 178 68);
}
.breadcrumbs {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: white;
}

.ramadan-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

.ramadan-text {
  margin-bottom: 10px;
  color: white;
}

.iftar-countdown {
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00;
  text-align: center;
  margin-top: 8px;
}

.ramadan-decorations {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.lantern {
  width: 30px;
  animation: swing 3s infinite ease-in-out alternate;
}

.left-lantern {
  animation-delay: 0.3s;
}

.right-lantern {
  animation-delay: 0.6s;
}

.moon {
  width: 40px;
  animation: glow 2s infinite alternate;
}

@keyframes swing {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(8px) rotate(3deg);
  }
}

@keyframes glow {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
