<template>
  <VCard class="ramadan-card">
    <VCardTitle class="text-center"> 🌙 رمضان كريم! </VCardTitle>
    <VCardText class="text-center">
      تتمنى لكم <strong>شركة لماسو</strong> رمضان مبارك مليء بالخيرات 🕌✨
    </VCardText>
    <div class="moon-container">
      <img src="@/assets/ramadan-moon.png" alt="Ramadan Moon" class="moon-animation" />
    </div>
  </VCard>
</template>

<script setup></script>

<style scoped>
.ramadan-card {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.moon-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.moon-animation {
  width: 50px;
  height: 50px;
  animation: moonFloat 3s ease-in-out infinite alternate;
}

@keyframes moonFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
