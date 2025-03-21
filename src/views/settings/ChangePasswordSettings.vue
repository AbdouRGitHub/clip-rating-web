<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { reactive } from 'vue';

const changePwdData = reactive({
  currentPwd: '',
  newPwd: '',
  confirmNewPwd: '',
});
</script>

<template>
  <div class="password-settings-container">
    <form>
      <BaseInput
        type="password"
        placeholder="Current password"
        v-model="changePwdData.currentPwd"
      />
      <BaseInput type="password" placeholder="New password" autocomplete="new-password" v-model="changePwdData.newPwd" />
      <BaseInput
        type="password"
        placeholder="Confirm new password"
        v-model="changePwdData.newPwd"
      />
      <BaseButton type="submit" class="confirm-button">change</BaseButton>
    </form>
  </div>
</template>

<style scoped>
.password-settings-container {
  background-color: var(--color-box-primary);
  border-radius: 5px;
  padding: 10px;
  width: 80%;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
}

.confirm-button {
  align-self: center;
}
</style>
