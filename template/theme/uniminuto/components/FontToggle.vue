<template>
  <button class="font-toggle" @click="toggleFont">
    {{ isOpenDyslexic ? 'Fuente institucional' : 'OpenDyslexic' }}
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isOpenDyslexic = ref(false)

function applyFont(value) {
  isOpenDyslexic.value = value
  document.documentElement.classList.toggle('opendyslexic', value)
  localStorage.setItem('slidev-font-opendyslexic', value ? '1' : '0')
}

function toggleFont() {
  applyFont(!isOpenDyslexic.value)
}

onMounted(() => {
  applyFont(localStorage.getItem('slidev-font-opendyslexic') === '1')
})
</script>

<style scoped>
.font-toggle {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 9999;
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(35, 55, 99, 0.25);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #233763;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
