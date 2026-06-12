<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="portada-layout">
    <img
      class="portada-bg"
      src="/fondos/slide-01-portada.png"
      alt="Fondo portada UNIMINUTO"
    />

    <div class="titulo-wrap">
      <AutoFitText
        tag="h1"
        class="portada-titulo"
        :min="34"
        :max="76"
        line-height="1.05"
      >
        <slot name="title">Título de la presentación</slot>
      </AutoFitText>
    </div>

    <div class="meta-wrap">
      <AutoFitText
        tag="div"
        class="portada-semana"
        :min="18"
        :max="34"
        line-height="1.05"
      >
        <slot name="week">SEMANA 1</slot>
      </AutoFitText>

      <AutoFitText
        tag="div"
        class="portada-fecha"
        :min="15"
        :max="28"
        line-height="1.05"
      >
        <slot name="date">MAYO 03 DE 2026</slot>
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.portada-layout {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
}

.portada-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titulo-wrap {
  position: absolute;
  z-index: 2;
  left: 34%;
  right: 5%;
  top: 46.5%;
  height: 27%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.portada-titulo {
  margin: 0 !important;
  color: #f2b51b;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.meta-wrap {
  position: absolute;
  z-index: 2;
  right: 19%;
  bottom: 5%;
  width: 30%;
  height: 12%;
  text-align: right;
  display: grid;
  grid-template-rows: 1fr 0.85fr;
  gap: 0.25rem;
}

.portada-semana {
  margin: 0 !important;
  color: #000000;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.portada-fecha {
  margin: 0 !important;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
