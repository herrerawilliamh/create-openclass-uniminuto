<script setup>
import AutoFitText from '../components/AutoFitText.vue'
</script>

<template>
  <div class="slide-layout">
    <img
      class="slide-bg"
      src="/fondos/slide-04-imagen-derecha.png"
      alt="Fondo diapositiva imagen derecha"
    />

    <div class="image-wrap">
      <slot name="image" />
    </div>

    <div class="title-wrap">
      <AutoFitText tag="h1" class="title" :min="18" :max="36" line-height="1.05">
        <slot name="title">Agrega un título</slot>
      </AutoFitText>
    </div>

    <div class="content-wrap">
      <AutoFitText tag="div" class="content-fit" :min="15" :max="28" line-height="1.32">
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

.image-wrap {
  position: absolute;
  z-index: 2;
  left: 51.2%;
  top: 15%;
  width: 40%;
  height: 78%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-wrap :deep(img),
.image-wrap :deep(video),
.image-wrap :deep(iframe) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  display: block;
}

.title-wrap {
  position: absolute;
  z-index: 2;
  left: 0%;
  top: 20.5%;
  width: 51.2%;
  height: 6.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
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
  top: 32%;
  width: 41%;
  height: 50%;
  color: #233763 !important;
  font-family: var(--font-body, 'Atkinson Hyperlegible', Arial, sans-serif);
}

.content-fit :deep(*) { color: #233763 !important; }
.content-fit :deep(p) { margin: 0 0 0.75rem 0; }
.content-fit :deep(ul) { list-style-type: disc !important; list-style-position: outside !important; margin: 0; padding-left: 1.6rem; }
.content-fit :deep(li) { display: list-item !important; margin-bottom: 0.5rem; }
.content-fit :deep(li::marker) { color: #233763 !important; }
</style>
