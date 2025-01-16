<script setup>
import { ref } from "vue";
import {
  VueFlow,
  useVueFlow,
  MarkerType,
  ConnectionMode,
} from "@vue-flow/core";
import DropzoneBackground from "./DropzoneBackground.vue";
import Sidebar from "./Sidebar.vue";
import TriggerNode from "./nodes/TriggerNode.vue";
import ActionNode from "./nodes/ActionNode.vue";
import ConditionNode from "./nodes/ConditionNode.vue";

const nodes = ref([]);
const edges = ref([]);
const { addNodes, addEdges, project } = useVueFlow();

const isDragOver = ref(false);

const onDragOver = (event) => {
  event.preventDefault();
  isDragOver.value = true;
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

const onDragLeave = () => {
  isDragOver.value = false;
};

const onDrop = (event) => {
  event.preventDefault();
  isDragOver.value = false;

  if (event.dataTransfer) {
    const type = event.dataTransfer.getData("application/vueflow");
    const position = project({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: `${type} node` },
    };
    addNodes([newNode]);
  }
};

// Connection logic
const onConnect = (connection) => {
  const newEdge = {
    id: `e${connection.source}-${connection.target}-${connection.sourceHandle}-${connection.targetHandle}`,
    source: connection.source,
    target: connection.target,
    sourceHandle: connection.sourceHandle, // Ensure this points to the source handle id
    targetHandle: connection.targetHandle, // Ensure this points to the target handle id
    type: "bezier",
    style: { stroke: "#fff" },
    markerEnd: {
      type: "arrowclosed",
      color: "#fff",
    },
  };

  addEdges([newEdge]);
};
</script>

<template>
  <div class="dnd-flow">
    <Sidebar />

    <VueFlow
      :connection-mode="ConnectionMode.Strict"
      v-model:nodes="nodes"
      v-model:edges="edges"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @connect="onConnect"
      :default-edge-options="{
        type: 'bezier',
        style: { stroke: '#fff' },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#fff',
        },
      }"
    >
      <template #node-trigger="props">
        <TriggerNode v-bind="props" />
      </template>

      <template #node-action="props">
        <ActionNode v-bind="props" />
      </template>

      <template #node-condition="props">
        <ConditionNode v-bind="props" />
      </template>

      <DropzoneBackground
        :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      >
        <p v-if="isDragOver" class="drop-indicator">Drop here</p>
      </DropzoneBackground>
    </VueFlow>
  </div>
</template>

<style>
.dnd-flow {
  flex-direction: row;
  display: flex;
  height: 100vh;
}

.drop-indicator {
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: bold;
}

.vue-flow__edge-path {
  stroke-width: 2;
}

/* Remove animation styles */
.vue-flow__edge {
  stroke: #fff;
}

.vue-flow__edge-text {
  display: none; /* Remove edge labels */
}

/* Style for the arrow marker */
.vue-flow__edge-marker path {
  fill: #fff;
}
</style>
