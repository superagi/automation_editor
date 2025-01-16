<template>
  <div
    class="action-node node-wrapper relative bg-gray-100 shadow-md rounded-md p-4"
    :style="{ height: `${cardHeight}px` }"
  >
    <Handle
      :style="{ top: `20px` }"
      type="target"
      :position="Position.Left"
      id="left-handle"
    />
    <!-- Dynamically Rendered Handles -->
    <div v-for="handle in handles" :key="handle.id">
      <Handle
        :type="handle.type"
        :position="handle.position"
        :id="handle.id"
        class="right-handle"
        :style="{ top: `${handle.offset}px` }"
      />
    </div>

    <!-- Node Content -->
    <div class="node-content flex flex-col items-center space-y-2">
      <h3>Action</h3>
      <input
        v-model="data.label"
        placeholder="Enter action name"
        class="border rounded px-2 py-1"
      />
      <button
        class="add-handle-button bg-blue-500 text-white rounded px-4 py-2 mt-4"
        @click="addHandle"
      >
        Add Handle
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";
import { ref, computed } from "vue";

// Define the type for a handle configuration
interface HandleConfig {
  id: string;
  type: "source" | "target"; // Matches HandleType
  position: Position; // Matches Position from VueFlow
  offset: number;
}

// Props to receive node data
defineProps({
  data: {
    type: Object,
    default: () => ({ label: "Action Node" }),
  },
});

// Reactive state for handles
const handles = ref<HandleConfig[]>([
  {
    id: "right-handle-1",
    type: "source",
    position: Position.Right, // Use the Position enum
    offset: 120, // px from top
  },
]);

// Computed property for dynamic card height
const cardHeight = computed(() => 120 + handles.value.length * 20);

// Function to add a new handle
const addHandle = () => {
  const newHandle: HandleConfig = {
    id: `right-handle-${handles.value.length + 1}`,
    type: "source",
    position: Position.Right, // Use the Position enum
    offset: 120 + handles.value.length * 20, // Adjust offset dynamically
  };
  handles.value.push(newHandle);
};
</script>

<style scoped>
.node-wrapper {
  width: 200px;
  min-height: 100px;
  position: relative;
  transition: height 0.2s ease;
}

.right-handle {
  position: absolute;
  transform: translateX(50%);
  width: 10px;
  height: 10px;
  background-color: #fff; /* Blue */
  border-radius: 50%;
}

.add-handle-button {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-handle-button:hover {
  background-color: #1e40af;
}
</style>
