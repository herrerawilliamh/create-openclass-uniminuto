<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="left-title-wrap">
      <AutoFitText tag="h2" class="column-title" :min="18" :max="36" line-height="1.05">
        <slot name="leftTitle">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="right-title-wrap">
      <AutoFitText tag="h2" class="column-title" :min="18" :max="36" line-height="1.05">
        <slot name="rightTitle">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="left-content">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="28" line-height="1.35">
        <slot name="left" />
      </AutoFitText>
    </div>

    <div class="right-content">
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

.left-title-wrap,
.right-title-wrap {
  position: absolute;
  z-index: 2;
  top: 25.5%;
  height: 6.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #233763;
  color: #ffffff;
  text-align: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.left-title-wrap { left: 0%; width: 44%; }
.right-title-wrap { left: 56.5%; width: 43.5%; }

.column-title {
  margin: 0 !important;
  color: #ffffff !important;
  font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif);
  font-weight: 800;
}

.left-content,
.right-content {
  position: absolute;
  z-index: 2;
  top: 36%;
  width: 36%;
  height: 50%;
  color: #233763 !important;
  font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif);
}

.left-content { left: 6%; }
.right-content { left: 56.7%; }

.column-fit :deep(*) { color: #233763 !important; }
.column-fit :deep(p) { margin: 0 0 0.8rem 0; }
.column-fit :deep(ul) { list-style-type: disc !important; padding-left: 1.5rem; }
.column-fit :deep(li) { display: list-item !important; margin-bottom: 0.5rem; }
.column-fit :deep(pre) { font-size: 0.58em; line-height: 1.22; }
</style>
