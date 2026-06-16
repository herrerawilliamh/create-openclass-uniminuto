<template>
  <div
    class="title-ribbon"
    :class="[
      `title-ribbon--${side}`,
      {
        'title-ribbon--with-plane': resolvedShowPlane,
        'title-ribbon--shadow': shadow,
      },
    ]"
    :style="cssVars"
  >
    <img
      v-if="resolvedShowPlane"
      class="title-ribbon__plane"
      :src="planeSrc"
      alt=""
      aria-hidden="true"
    />

    <div class="title-ribbon__bar">
      <div class="title-ribbon__text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  side: {
    type: String,
    default: "center",
  },

  showPlane: {
    type: Boolean,
    default: false,
  },

  withPlane: {
    type: Boolean,
    default: false,
  },

  planeSrc: {
    type: String,
    default: "/imagenes/avion.png",
  },

  width: {
    type: String,
    default: "100%",
  },

  minHeight: {
    type: String,
    default: "2.95rem",
  },

  paddingX: {
    type: String,
    default: "2rem",
  },

  paddingY: {
    type: String,
    default: "0.26rem",
  },

  fontSize: {
    type: String,
    default: "clamp(1.18rem, 1.72vw, 1.92rem)",
  },

  planeSize: {
    type: String,
    default: "7.4rem",
  },

  planeOffsetX: {
    type: String,
    default: "-42%",
  },

  planeOffsetY: {
    type: String,
    default: "0%",
  },

  ribbonColor: {
    type: String,
    default: "#243764",
  },

  textColor: {
    type: String,
    default: "#ffffff",
  },

  shadow: {
    type: Boolean,
    default: true,
  },
});

const resolvedShowPlane = computed(() => props.showPlane || props.withPlane);

const cssVars = computed(() => ({
  "--title-ribbon-width": props.width,
  "--title-ribbon-min-height": props.minHeight,
  "--title-ribbon-padding-x": props.paddingX,
  "--title-ribbon-padding-y": props.paddingY,
  "--title-ribbon-font-size": props.fontSize,
  "--title-ribbon-color": props.ribbonColor,
  "--title-ribbon-text-color": props.textColor,
  "--title-ribbon-plane-size": props.planeSize,
  "--title-ribbon-plane-offset-x": props.planeOffsetX,
  "--title-ribbon-plane-offset-y": props.planeOffsetY,
}));
</script>

<style scoped>
.title-ribbon {
  position: relative;
  width: var(--title-ribbon-width);
  min-height: var(--title-ribbon-min-height);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 5;

  /* ajuste fino */
  margin-top: -0.18rem;
  margin-bottom: 0.55rem;
}

.title-ribbon--left {
  justify-content: flex-start;
}

.title-ribbon--center {
  justify-content: center;
}

.title-ribbon--right {
  justify-content: flex-end;
}

.title-ribbon__bar {
  position: relative;
  width: 100%;
  min-height: var(--title-ribbon-min-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--title-ribbon-padding-y) var(--title-ribbon-padding-x);
  background: var(--title-ribbon-color);
  color: var(--title-ribbon-text-color);
  box-sizing: border-box;
  overflow: visible;
}

.title-ribbon--shadow .title-ribbon__bar {
  box-shadow: 0 0.55rem 1rem rgba(16, 30, 64, 0.09);
}

.title-ribbon__text {
  width: 100%;
  max-width: none;
  display: block;
  color: var(--title-ribbon-text-color);
  font-family: "Merriweather Sans", "Arial", sans-serif;
  font-size: var(--title-ribbon-font-size);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.018em;
  text-align: center;
  text-wrap: balance;
  overflow-wrap: normal;
  word-break: normal;
  hyphens: none;
  text-shadow: 0 0.055em 0 rgba(0, 0, 0, 0.12);
}

.title-ribbon__text :deep(*) {
  margin: 0;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
}

.title-ribbon__plane {
  position: absolute;
  left: 0;
  top: 50%;
  width: var(--title-ribbon-plane-size);
  height: auto;
  transform:
    translateX(var(--title-ribbon-plane-offset-x))
    translateY(calc(-50% + var(--title-ribbon-plane-offset-y)));
  z-index: 3;
  pointer-events: none;
  user-select: none;
  filter: drop-shadow(0 0.55rem 0.75rem rgba(0, 0, 0, 0.14));
}

@media print {
  .title-ribbon--shadow .title-ribbon__bar {
    box-shadow: none;
  }

  .title-ribbon__plane {
    filter: none;
  }
}
</style>