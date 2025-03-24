<script setup lang="ts">
let model = defineModel({
  required: true,
});
</script>

<template>
  <input v-model="model" />
</template>

<style>
input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text-white);
}
</style>
