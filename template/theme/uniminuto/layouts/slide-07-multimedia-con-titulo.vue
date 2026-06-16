<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="title-wrap">
      <AutoFitText tag="h1" class="title" :min="30" :max="60" line-height="1.04">
        <slot name="title">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="media-wrap uni-media-slot">
      <slot name="media" />
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }

.title-wrap { position: absolute; z-index: 2; left: 3.4%; top: 1.2%; width: 59.2%; height: 11.4%; display: flex; align-items: center; justify-content: flex-start; padding-left: 0.75rem; box-sizing: border-box; }
.title { margin: 0 !important; color: #ffffff !important; font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif); font-weight: 900; letter-spacing: -0.025em; text-wrap: balance; }

.media-wrap { position: absolute; z-index: 2; left: 10%; top: 16.5%; width: 80%; height: 74%; overflow: hidden; background: transparent; }
.media-wrap :deep(p) { margin: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.media-wrap :deep(img), .media-wrap :deep(video), .media-wrap :deep(iframe) { display: block; width: 100%; height: 100%; max-width: 100%; max-height: 100%; object-fit: contain; object-position: center; border: 0; }
</style>
