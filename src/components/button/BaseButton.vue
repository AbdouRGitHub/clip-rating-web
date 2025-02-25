<script setup lang="ts">
const props = defineProps<{
  eventName?: string;
}>();

const emit = defineEmits();

const handleClick = () => {
  if (props.eventName) {
    emit(props.eventName);
  }
};
</script>

<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
button {
  width: 150px;
  height: 50px;
  padding: 2px;
  cursor: pointer;
  user-select: none;
}
</style>
