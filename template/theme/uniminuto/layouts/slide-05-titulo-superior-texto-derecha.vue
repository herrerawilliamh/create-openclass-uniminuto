<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout">
    <img class="slide-bg" src="/fondos/slide-05-template.png" alt="Fondo institucional" />

    <div class="image-wrap uni-image-slot">
      <slot name="image" />
    </div>

    <div class="title-wrap">
      <AutoFitText tag="h1" class="title" :min="28" :max="60" line-height="1.04">
        <slot name="title">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="content-wrap">
      <AutoFitText tag="div" class="content-fit" :min="16" :max="34" line-height="1.28">
        <slot name="content" />
      </AutoFitText>
    </div>
  </div>
</template>

<style scoped>
.slide-layout { position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
.slide-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }

.title-wrap {
  position: absolute;
  z-index: 2;
  left: 3.6%;
  top: 1%;
  width: 55%;
  height: 10.2%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.75rem;
  box-sizing: border-box;
}

.title { margin: 0 !important; color: #ffffff !important; font-family: var(--font-title, 'Merriweather Sans', Arial, sans-serif); font-weight: 900; letter-spacing: -0.025em; text-wrap: balance; }

.image-wrap { position: absolute; z-index: 2; left: 10%; top: 16.2%; width: 40%; height: 75%; }
.content-wrap { position: absolute; z-index: 2; left: 50.2%; top: 17.0%; width: 43%; height: 67.5%; color: #233763 !important; font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif); }

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
