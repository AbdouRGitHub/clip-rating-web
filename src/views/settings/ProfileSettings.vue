<script setup lang="ts">
import { useUserStore } from '@/store/user';
import BaseInput from '@/components/BaseInput.vue';
import { reactive, watchEffect } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

const userStore = useUserStore();
let formData = reactive({
  username: '',
  email: '',
});

watchEffect(() => {
  if (userStore.user) {
    formData.username = userStore.user?.username || '';
    formData.email = userStore.user?.email || '';
  }
});
</script>

<template>
  <div class="profile-settings-container">
    <section class="account">
      <h3 class="title">Account</h3>
      <form>
        <label>username</label>
        <BaseInput type="text" v-model="formData.username" />
        <label>email</label>
        <BaseInput type="email" v-model="formData.email" />
        <BaseButton type="submit" class="confirm-button">change</BaseButton>
      </form>
    </section>
    <section class="avatar">
      <h3 class="title">Avatar</h3>
    </section>
  </div>
</template>

<style scoped>
.profile-settings-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--color-box-primary);
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  row-gap: 20px;

}

.account {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.title {
  color: var(--color-text-white);
  align-self: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
}

label {
  color: var(--color-text-white);
}

.avatar {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.confirm-button {
  align-self: center;
}
</style>
