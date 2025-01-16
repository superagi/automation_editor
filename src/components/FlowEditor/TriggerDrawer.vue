<template>
  <a-drawer
    title="Edit Trigger"
    :visible="visible"
    @close="onClose"
    placement="right"
  >
    <a-form class="h-full" layout="vertical" @finish="onSave">
      <div class="flex flex-col h-full justify-between">
        <div>
          <a-form-item label="Trigger Type" name="triggerType">
            <a-input v-model:value="form.triggerType" />
          </a-form-item>

          <a-form-item label="Date" name="date">
            <a-date-picker
              v-model:value="form.date"
              class="w-full"
              format="YYYY-MM-DD"
            />
          </a-form-item>

          <a-form-item label="Time" name="time">
            <a-time-picker
              v-model:value="form.time"
              class="w-full"
              format="HH:mm:ss"
            />
          </a-form-item>

          <a-form-item label="Frequency" name="frequency">
            <a-input
              v-model:value="form.frequency"
              placeholder="e.g., Daily, Weekly"
            />
          </a-form-item>
        </div>
        <div>
          <div class="drawer-footer flex justify-end">
            <a-button @click="onClose" class="mr-2">Cancel</a-button>
            <a-button type="primary" html-type="submit">Save</a-button>
          </div>
        </div>
      </div>
    </a-form>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";

// Props
defineProps({
  visible: Boolean,
  data: {
    type: Object,
    default: () => ({
      triggerType: "Default",
      date: "2025-01-01",
      time: "12:00:00",
      frequency: "Daily",
    }),
  },
  onClose: Function,
  onSave: Function,
});

// Form State
const form = ref({});
// console.log(visible, "data in the drawer");
// Initialize form with default or provided data
// watch(
//   () => data,
//   (newData) => {
//     form.value = { ...newData };
//   },
//   { immediate: true }
// );

// Methods
const handleSave = () => {
  onSave(form.value);
};
</script>

<style scoped>
.drawer-footer {
  margin-top: 16px;
}
</style>
