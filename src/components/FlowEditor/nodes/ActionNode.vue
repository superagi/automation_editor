<template>
  <div class="action-node node-wrapper">
    <Handle type="target" position="left" />
    <Handle type="source" position="right" />
    <div class="node-content">
      <h3>Action</h3>
      <input v-model="data.label" placeholder="Enter action name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Handle } from '@vue-flow/core'

defineProps(['data'])
</script>