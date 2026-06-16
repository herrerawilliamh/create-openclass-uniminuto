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

    <div class="left-wrap">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="33" line-height="1.28">
        <slot name="left" />
      </AutoFitText>
    </div>

    <div class="right-wrap">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="33" line-height="1.28">
        <slot name="right" />
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
.title-wrap { position: absolute; z-index: 2; left: 3.4%; top: 1.2%; width: 59.2%; height: 11.4%; display: flex; align-items: center; justify-content: flex-start; padding-left: 0.75rem; box-sizing: border-box; }
.title { margin: 0 !important; color: #ffffff !important; font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif); font-weight: 900; letter-spacing: -0.025em; text-wrap: balance; }
.left-wrap, .right-wrap { position: absolute; z-index: 2; top: 16.2%; height: 69.5%; color: #233763 !important; font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif); }
.left-wrap { left: 7.5%; width: 40%; }
.right-wrap { left: 53%; width: 40%; }

.column-fit :deep(*) { color: #233763 !important; }
.column-fit :deep(p) { margin: 0 0 0.75rem 0; }
.column-fit :deep(strong) { font-weight: 900; }
.column-fit :deep(ul),
.column-fit :deep(ol) {
  list-style-position: outside !important;
  margin: 0 0 0.75rem 0;
  padding-left: 2.5rem;
}
.column-fit :deep(ul) { list-style-type: disc !important; }
.column-fit :deep(ol) { list-style-type: decimal !important; }
.column-fit :deep(ol[type='a']) { list-style-type: lower-alpha !important; }
.column-fit :deep(ol[type='A']) { list-style-type: upper-alpha !important; }
.column-fit :deep(ol[type='i']) { list-style-type: lower-roman !important; }
.column-fit :deep(ol[type='I']) { list-style-type: upper-roman !important; }
.column-fit :deep(li) { display: list-item !important; margin-bottom: 0.46rem; padding-left: 0.15rem; }
.column-fit :deep(li::marker) { color: #233763 !important; font-weight: 900; }
.column-fit :deep(pre) { font-size: 0.58em; line-height: 1.22; }

</style>
