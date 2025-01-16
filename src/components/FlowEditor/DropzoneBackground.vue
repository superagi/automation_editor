<script setup lang="ts">
import { Background } from "@vue-flow/background";
import { Panel } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
</script>

<template>
  <div class="dropzone-background">
    <Background
      :size="2"
      :gap="20"
      :pattern-color="isDarkMode ? '#2a2a2a' : '#BDBDBD'"
    />

    <Panel position="top-right">
      <Controls />
    </Panel>

    <Panel position="bottom-right">
      <MiniMap />
    </Panel>

    <div class="overlay">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

const isDarkMode = ref(true); // You can toggle this based on your theme system
</script>

<style>
.dropzone-background {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: var(--background-color, #1a1a1a);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
}

.vue-flow__controls {
  box-shadow: 0 0 2px 1px rgb(0 0 0 / 8%);
}

.vue-flow__minimap {
  background-color: var(--background-color, #1a1a1a);
  border-radius: 4px;
}

.vue-flow {
  color: red;
}
</style>
