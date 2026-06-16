<script setup>
import AutoFitText from '../components/AutoFitText.vue'
import TitleRibbon from '../components/TitleRibbon.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="title-wrap">
      <TitleRibbon align="center" :show-plane="false" :min="21" :max="38" line-height="1.2">
        <slot name="title">Agrega un título</slot>
      </TitleRibbon>
    </div>

    <div class="content-wrap">
      <AutoFitText tag="div" class="content-fit" :min="15" :max="30" line-height="1.26">
        <slot name="content" />
      </AutoFitText>
    </div>

    <div class="image-wrap uni-image-slot">
      <slot name="image" />
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }

.title-wrap {
  position: absolute;
  z-index: 3;
  left: 0;
  top: 16%;
  width: 52.8%;
  min-height: 9.2%;
  --ribbon-min-height: clamp(60px, 7.8vh, 92px);
  --ribbon-padding-x: 2.2rem;
}

.content-wrap {
  position: absolute;
  z-index: 2;
  left: 6.2%;
  top: 31.0%;
  width: 40.6%;
  height: 55.2%;
  color: #233763 !important;
  font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif);
}

.image-wrap {
  position: absolute;
  z-index: 2;
  left: 60%;
  top: 16%;
  width: 39.2%;
  height: 75%;
}

.image-wrap :deep(p) { margin: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.55rem; }
.image-wrap :deep(img), .image-wrap :deep(video), .image-wrap :deep(iframe) { display: block; width: auto; height: auto; max-width: 100%; max-height: 100%; object-fit: contain; object-position: center; border: 0; }

.content-fit :deep(*) { color: #233763 !important; }
.content-fit :deep(p) { margin: 0 0 0.75rem 0; }
.content-fit :deep(strong) { font-weight: 900; }
.content-fit :deep(ul),
.content-fit :deep(ol) {
  list-style-position: outside !important;
  margin: 0 0 0.75rem 0;
  padding-left: 1.65rem;
}
.content-fit :deep(ul) { list-style-type: disc !important; }
.content-fit :deep(ol) { list-style-type: decimal !important; }
.content-fit :deep(ol[type='a']) { list-style-type: lower-alpha !important; }
.content-fit :deep(ol[type='A']) { list-style-type: upper-alpha !important; }
.content-fit :deep(ol[type='i']) { list-style-type: lower-roman !important; }
.content-fit :deep(ol[type='I']) { list-style-type: upper-roman !important; }
.content-fit :deep(li) { display: list-item !important; margin-bottom: 0.46rem; padding-left: 0.15rem; }
.content-fit :deep(li::marker) { color: #233763 !important; font-weight: 900; }
.content-fit :deep(pre) { font-size: 0.58em; line-height: 1.22; }
</style>
