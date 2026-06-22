<template>
  <component
    :is="tag"
    ref="boxEl"
    class="auto-fit-text"
    :class="{ 'auto-fit-text--debug': debug }"
    :style="{
      fontSize: `${fontSize}px`,
      lineHeight: lineHeight
    }"
  >
    <div ref="contentEl" class="auto-fit-text__content">
      <slot />
    </div>
  </component>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  min: {
    type: Number,
    default: 16
  },
  max: {
    type: Number,
    default: 34
  },
  lineHeight: {
    type: String,
    default: '1.18'
  },
  debug: {
    type: Boolean,
    default: false
  }
})

const boxEl = ref(null)
const contentEl = ref(null)
const fontSize = ref(props.max)

let resizeObserver = null
let mutationObserver = null
let rafId = 0

function hasOverflow() {
  const box = boxEl.value
  const content = contentEl.value
  if (!box || !content) return false

  return (
    content.scrollHeight > box.clientHeight + 1 ||
    content.scrollWidth > box.clientWidth + 1
  )
}

async function fitText() {
  await nextTick()

  const box = boxEl.value
  const content = contentEl.value
  if (!box || !content) return
  if (box.clientWidth <= 0 || box.clientHeight <= 0) return

  let low = props.min
  let high = props.max
  let best = props.min

  for (let i = 0; i < 14; i += 1) {
    const mid = (low + high) / 2
    fontSize.value = mid

    await nextTick()

    if (!hasOverflow()) {
      best = mid
      low = mid
    } else {
      high = mid
    }
  }

  fontSize.value = Math.floor(best)
}

function scheduleFit() {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    fitText()
  })
}

onMounted(async () => {
  await fitText()

  if (boxEl.value) {
    resizeObserver = new ResizeObserver(scheduleFit)
    resizeObserver.observe(boxEl.value)
  }

  if (contentEl.value) {
    mutationObserver = new MutationObserver(scheduleFit)
    mutationObserver.observe(contentEl.value, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  if (document?.fonts?.ready) {
    document.fonts.ready.then(scheduleFit)
  }

  window.addEventListener('resize', scheduleFit)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  mutationObserver?.disconnect()
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', scheduleFit)
})

watch(
  () => [props.min, props.max, props.lineHeight],
  () => scheduleFit()
)
</script>

<style scoped>
.auto-fit-text {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.auto-fit-text__content {
  display: block;
  width: 100%;
  font: inherit;
  color: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  box-sizing: border-box;
}

.auto-fit-text__content :deep(*) {
  box-sizing: border-box;
}

.auto-fit-text--debug {
  outline: 2px dashed rgba(242, 181, 27, 0.85);
  background: rgba(242, 181, 27, 0.08);
}
</style>