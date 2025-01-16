<template>
  <div class="condition-node node-wrapper">
    <Handle type="target" :position="Position.Left" id="left-handle" />
    <Handle type="source" :position="Position.Right" id="right-handle" />
    <div class="node-content">
      <h3>Condition</h3>
      <input v-model="data.label" placeholder="Enter condition name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

defineProps(["data"]);
</script>
