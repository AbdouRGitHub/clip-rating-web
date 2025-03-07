<script setup lang="ts">
import MainHeader from '@/components/header/MainHeader.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import { profile } from '@/services/user';
import { onMounted, ref } from 'vue';

const passwordData = ref<{ currentPassword: string }>({
  currentPassword: '',
});
</script>

<template>
  <div class="password-settings-container">
    <h1>Change password</h1>
    <BaseInput type="password" placeholder="Current password" />
    <BaseInput type="password" placeholder="New password" />
    <BaseInput type="password" placeholder="Confirm new password" />
    <BaseButton>Confirm</BaseButton>
  </div>
</template>

<style scoped>
.password-settings-container {
  background-color: var(--color-box-primary);
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
}
</style>
