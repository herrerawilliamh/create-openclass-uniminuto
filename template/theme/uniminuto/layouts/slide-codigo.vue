<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout codigo-slide">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="title-wrap">
      <AutoFitText tag="h1" class="title" :min="30" :max="60" line-height="1.04">
        <slot name="title">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="code-wrap">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
.title-wrap { position: absolute; z-index: 2; left: 3.4%; top: 1.2%; width: 59.2%; height: 11.4%; display: flex; align-items: center; justify-content: flex-start; padding-left: 0.75rem; box-sizing: border-box; }
.title { margin: 0 !important; color: #ffffff !important; font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif); font-weight: 900; letter-spacing: -0.025em; text-wrap: balance; }
.code-wrap { position: absolute; z-index: 2; left: 6.7%; top: 15.5%; width: 86.5%; height: 74%; overflow: hidden; display: flex; flex-direction: column; min-height: 0; }
.code-wrap :deep(div.slidev-code-wrapper), .code-wrap :deep(.slidev-code-wrapper) { flex: 1; min-height: 0; display: flex; flex-direction: column; width: 100%; height: 100%; }
.code-wrap :deep(pre), .code-wrap :deep(pre.slidev-code), .code-wrap :deep(.slidev-code) { flex: 1; min-height: 0; max-height: 100% !important; height: 100% !important; overflow-y: auto !important; overflow-x: auto !important; background: #0f172a !important; color: #e5e7eb !important; border: 2px solid rgba(242, 181, 27, 0.78); border-radius: 14px; font-size: 0.66rem !important; line-height: 1.42 !important; padding: 0.78rem 0.95rem !important; box-sizing: border-box; scrollbar-width: thin; scrollbar-color: rgba(242, 181, 27, 0.75) #1e293b; }
.code-wrap :deep(pre::-webkit-scrollbar) { width: 8px; height: 8px; }
.code-wrap :deep(pre::-webkit-scrollbar-track) { background: #1e293b; border-radius: 999px; }
.code-wrap :deep(pre::-webkit-scrollbar-thumb) { background: rgba(242, 181, 27, 0.75); border-radius: 999px; }
.code-wrap :deep(code) { background: transparent !important; color: inherit !important; font-size: inherit !important; }
.code-wrap :deep(.line-numbers-wrapper) { background: #0f172a !important; border-color: rgba(242, 181, 27, 0.3) !important; }
.code-wrap :deep(.slidev-code-copy) { color: #e5e7eb !important; background: rgba(15, 23, 42, 0.7) !important; border-radius: 6px; padding: 2px; }
.code-wrap :deep(.slidev-code-copy:hover) { color: #f2b51b !important; background: rgba(15, 23, 42, 0.95) !important; }
</style>
