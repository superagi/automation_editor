<template>
  <div class="trigger-node node-wrapper">
    <!-- Header -->
    <div class="header flex items-start justify-between">
      <div class="flex items-center space-x-2">
        <i class="anticon anticon-flag text-blue-500"></i>
        <h3 class="text-lg font-semibold text-gray-700">Trigger</h3>
      </div>
    </div>
    <div class="underline bg-blue-500 h-1 my-2"></div>

    <!-- Content -->
    <div class="content space-y-2">
      <p class="text-sm text-gray-500">
        <strong>Trigger Type:</strong> {{ data.triggerType }}
      </p>
      <p class="text-sm text-gray-500">
        <strong>Date:</strong> {{ data.date }}
      </p>
      <p class="text-sm text-gray-500">
        <strong>Time:</strong> {{ data.time }}
      </p>
      <p class="text-sm text-gray-500">
        <strong>Frequency:</strong> {{ data.frequency }}
      </p>
    </div>

    <!-- Footer -->
    <div class="footer flex items-center justify-between mt-4">
      <button
        class="next-button bg-blue-500 text-white rounded px-4 py-1 text-sm"
      >
        Next
      </button>
      <Handle
        type="source"
        :position="Position.Right"
        class="handle-dot bg-blue-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";
// Props
defineProps(["data"]);
</script>

<style scoped>
.header .anticon {
  font-size: 1.2rem;
}

.underline {
  height: 2px;
  background-color: #0073e6;
}

.footer .handle-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.next-button:hover {
  background-color: #005bb5;
}
</style>
