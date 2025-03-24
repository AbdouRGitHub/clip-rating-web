<script setup lang="ts">
import { useUserStore } from '@/store/user';
import BaseInput from '@/components/BaseInput.vue';
import { reactive, watchEffect } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

const avatarURL = `${import.meta.env.VITE_SUPABASE_AVATAR_URL}`;
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
      <form @submit.prevent="">
        <label>username</label>
        <BaseInput type="text" v-model="formData.username" />
        <label>email</label>
        <BaseInput type="email" v-model="formData.email" />
        <BaseButton type="submit" class="confirm-button">change</BaseButton>
      </form>
    </section>
    <section class="avatar">
      <h3 class="title">Avatar</h3>
      <p class="label-info"> Allowed Formats: JPEG, PNG. Max size: 3mb. Optimal dimensions: 200x200 </p>
      <div class="avatar-container">
        <img
          :src="
            userStore.user?.avatar_path
              ? avatarURL + '/' + userStore.user.avatar_path
              : '@/assets/avatar-default.png'
          "
          alt="avatar"
          height="200"
          width="200"
        />
        <BaseButton>change</BaseButton>
      </div>
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
.label-info {
  color: var(--color-text-white);
  font-style: italic;
  font-size: 10px;
  align-self: center;
}
.avatar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 10px;
}
</style>
