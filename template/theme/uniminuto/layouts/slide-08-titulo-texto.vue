<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="title-wrap">
      <AutoFitText tag="h1" class="title" :min="20" :max="42" line-height="1.05">
        <slot name="title">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="content-wrap">
      <AutoFitText tag="div" class="content-fit" :min="16" :max="32" line-height="1.35">
        <slot name="content" />
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.slide-layout {
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
  z-index: 1;
}

.title-wrap {
  position: absolute;
  z-index: 2;
  left: 3.2%;
  top: 2%;
  width: 49%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  box-sizing: border-box;
}

.title {
  margin: 0 !important;
  color: #ffffff !important;
  font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif);
  font-weight: 800;
}

.content-wrap {
  position: absolute;
  z-index: 2;
  left: 6%;
  top: 17%;
  width: 84%;
  height: 68%;
  color: #233763 !important;
  font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif);
}

.content-fit :deep(*) { color: #233763 !important; }
.content-fit :deep(p) { margin: 0 0 1rem 0; }
.content-fit :deep(ul) { list-style-type: disc !important; padding-left: 1.6rem; }
.content-fit :deep(li) { display: list-item !important; margin-bottom: 0.55rem; }
.content-fit :deep(pre) { font-size: 0.62em; line-height: 1.25; }
</style>
