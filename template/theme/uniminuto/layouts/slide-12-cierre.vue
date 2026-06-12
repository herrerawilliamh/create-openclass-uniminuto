<template>
  <div class="slide-layout">
    <img
      class="slide-bg"
      src="/fondos/slide-06-cierre.png"
      alt="Fondo cierre"
    />
  </div>
</template>

<style scoped>
.slide-layout {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}

.slide-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
