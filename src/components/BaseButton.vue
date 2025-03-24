<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  eventName?: string;
  type?: 'submit' | 'delete';
}>();

const emit = defineEmits();

const handleClick = () => {
  if (props.eventName) {
    emit(props.eventName);
  }
};

const buttonStyle = computed(() => {
  switch (props.type)
  {
    case 'submit':
      return {
        'background-color': 'rgb(65,147,247)',
      };
    case 'delete':
      return {
        'background-color': 'rgb(219,47,67)',
      };
    default:
      return {
        'background-color': 'rgb(65,147,247)',
      };
  }
});
</script>

<template>
  <button class="button" :style="buttonStyle" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
.button {
  width: auto;
  display: inline-flex;
  border: none;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  text-align: center;
  box-shadow: none;
  font-size: 12px;
  font-weight: 400;
}
</style>
