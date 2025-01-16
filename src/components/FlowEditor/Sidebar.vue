<script setup lang="ts">
const onDragStart = (event: DragEvent, nodeType: string) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData("application/vueflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  }
};
</script>

<template>
  <aside>
    <div class="description">Drag nodes to the canvas</div>
    <div class="nodes">
      <div
        class="vue-flow__node-trigger"
        :draggable="true"
        @dragstart="onDragStart($event, 'trigger')"
      >
        Trigger Node
      </div>
      <div
        class="vue-flow__node-action"
        :draggable="true"
        @dragstart="onDragStart($event, 'action')"
      >
        Action Node
      </div>
      <div
        class="vue-flow__node-condition"
        :draggable="true"
        @dragstart="onDragStart($event, 'condition')"
      >
        Condition Node
      </div>
    </div>
  </aside>
</template>

<style>
aside {
  width: 20%;
  max-width: 250px;
  background-color: var(--sidebar-bg);
  padding: 15px;
  border-right: 1px solid var(--border-color);
}

.description {
  margin-bottom: 10px;
}

.nodes > * {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: grab;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.nodes > *:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0 0 0 / 3%);
}
</style>
