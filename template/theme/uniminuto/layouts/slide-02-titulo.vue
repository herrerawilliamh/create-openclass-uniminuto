<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-02-layout">
    <img
      class="slide-bg"
      src="/fondos/slide-02-titulo.png"
      alt="Fondo diapositiva título"
    />

    <div class="titulo-wrap">
      <AutoFitText
        tag="h1"
        class="titulo"
        :min="20"
        :max="42"
        line-height="1.05"
      >
        <slot name="title">Título de la presentación</slot>
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.slide-02-layout {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
}

.slide-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titulo-wrap {
  position: absolute;
  z-index: 2;
  left: 33%;
  top: 52%;
  width: 43%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.titulo {
  margin: 0 !important;
  color: #ffffff !important;
  font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif);
  font-weight: 800;
}
</style>
