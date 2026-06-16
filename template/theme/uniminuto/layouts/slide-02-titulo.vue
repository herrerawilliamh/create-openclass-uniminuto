<script setup>
import TitleRibbon from '../components/TitleRibbon.vue'
</script>

<template>
  <section class="slide-02-title">
    <TitleRibbon
      class="slide-02-title__ribbon"
      align="center"
      :show-plane="true"
      width="76%"
      min-height="clamp(72px, 9vh, 104px)"
      padding-x="clamp(2.2rem, 4.2vw, 5.2rem)"
      padding-y="0.6rem"
      plane-size="clamp(14rem, 9vw, 11rem)"
      plane-offset-x="-7rem"
      plane-offset-y="-8%"
      :min="30"
      :max="42"
      line-height="1.25"
    >
      <slot name="title">Título de la sesión</slot>
    </TitleRibbon>
  </section>
</template>

<style scoped>
.slide-02-title {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url('/fondos/slide-05-template.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide-02-title__ribbon {
  position: absolute;
  left: 51%;
  top: 50.5%;
  transform: translate(-50%, -50%);
}
</style>
