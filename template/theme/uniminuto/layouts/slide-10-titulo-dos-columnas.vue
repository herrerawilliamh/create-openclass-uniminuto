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

    <div class="left-wrap">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="28" line-height="1.35">
        <slot name="left" />
      </AutoFitText>
    </div>

    <div class="right-wrap">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="28" line-height="1.35">
        <slot name="right" />
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

.left-wrap,
.right-wrap {
  position: absolute;
  z-index: 2;
  top: 17%;
  height: 68%;
  color: #233763 !important;
  font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif);
}

.left-wrap { left: 11%; width: 36%; }
.right-wrap { left: 52%; width: 36%; }

.column-fit :deep(*) { color: #233763 !important; }
.column-fit :deep(h1),
.column-fit :deep(h2),
.column-fit :deep(h3) { margin: 0 0 0.6rem 0; font-weight: 800; color: #233763 !important; }
.column-fit :deep(p) { margin: 0 0 0.8rem 0; }
.column-fit :deep(ul) { list-style-type: disc !important; margin: 0; padding-left: 1.5rem; }
.column-fit :deep(li) { display: list-item !important; margin-bottom: 0.5rem; }
.column-fit :deep(pre) { font-size: 0.58em; line-height: 1.22; }
</style>
