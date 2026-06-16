<script setup>
import AutoFitText from '../components/AutoFitText.vue'
import TitleRibbon from '../components/TitleRibbon.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="left-title-wrap">
      <TitleRibbon align="center" plane-side="left" :show-plane="false" :min="24" :max="44" line-height="1.05">
        <slot name="leftTitle">Agrega un título</slot>
      </TitleRibbon>
    </div>

    <div class="right-title-wrap">
      <TitleRibbon align="center" plane-side="left" :show-plane="false" :min="24" :max="44" line-height="1.05">
        <slot name="rightTitle">Agrega un título</slot>
      </TitleRibbon>
    </div>

    <div class="left-content">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="31" line-height="1.28">
        <slot name="left" />
      </AutoFitText>
    </div>

    <div class="right-content">
      <AutoFitText tag="div" class="column-fit" :min="14" :max="31" line-height="1.28">
        <slot name="right" />
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
.left-title-wrap, .right-title-wrap { position: absolute; z-index: 3; top: 16%; width: 46%; min-height: 8.8%; --ribbon-min-height: clamp(58px, 7.5vh, 90px); --ribbon-padding-x: 1.8rem; }
.left-title-wrap { left: 0%; }
.right-title-wrap { right: 0%; }
.left-content, .right-content { position: absolute; z-index: 2; top: 30.2%; width: 40%; height: 56%; color: #233763 !important; font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif); }
.left-content { left: 6.5%; }
.right-content { left: 53.5%; }

.column-fit :deep(*) { color: #233763 !important; }
.column-fit :deep(p) { margin: 0 0 0.75rem 0; }
.column-fit :deep(strong) { font-weight: 900; }
.column-fit :deep(ul),
.column-fit :deep(ol) {
  list-style-position: outside !important;
  margin: 0 0 0.75rem 0;
  padding-left: 1.65rem;
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
