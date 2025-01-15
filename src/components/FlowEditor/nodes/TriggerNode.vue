<template>
  <div class="trigger-node node-wrapper">
    <Handle type="source" position="right" />
    <div class="node-content">
      <h3>Trigger</h3>
      <input v-model="data.label" placeholder="Enter trigger name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Handle } from '@vue-flow/core'

defineProps(['data'])
</script>