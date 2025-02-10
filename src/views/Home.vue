<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';

const formData = reactive<{ email: string; password: string }>({
  email: '',
  password: '',
});

const submitForm: () => void = () => {};
</script>

<template>
  <div class="home">
    <div class="login-container">
      <form @submit.prevent="submitForm">
        <BaseInput type="email" placeholder="Email" v-model="formData.email" />
        <BaseInput type="password" placeholder="Password" v-model="formData.password" />
        <BaseButton type="submit">Login</BaseButton>
      </form>
      <a> forget your password ? </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  padding: 20px;
  width: 400px;
  height: 500px;
  background-color: var(--color-box-primary);
  border-radius: 2%;
}

.login-container form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  width: 100%;
  height: 100%;
}

button {
  width: 150px;
  height: 50px;
  padding: 2px;
}
</style>
