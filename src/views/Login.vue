<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import { login } from '@/services/auth';
import { useRouter, type Router } from 'vue-router';

const router: Router = useRouter();

const formData = reactive<{ email: string; password: string }>({
  email: '',
  password: '',
});

const errors = reactive<{ email: string | null; password: string | null }>({
  email: null,
  password: null,
});

const serverError = ref<string>();

const validateEmail = (email: string): boolean => {
  if (!email) {
    errors.email = 'Email is required';
    return false;
  }
  errors.email = null;
  return true;
};

const validatePassword = (password: string): boolean => {
  if (!password) {
    errors.password = 'Password is required';
    return false;
  }
  errors.password = null;
  return true;
};

const submitForm = async () => {
  const isEmailValid = validateEmail(formData.email);
  const isPasswordValid = validatePassword(formData.password);

  if (isEmailValid && isPasswordValid) {
    const response: { success: boolean; message?: string } = await login(
      formData.email,
      formData.password,
    );

    if (response.success == true) {
      router.replace('/home');
    } else {
      serverError.value = response.message;
    }
  }
};
</script>

<template>
  <div class="login">
    <div class="login-container">
      <span v-if="serverError" class="error-message">{{ serverError }}</span>
      <form @submit.prevent="submitForm">
        <BaseInput type="email" placeholder="Email" v-model="formData.email" />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        <BaseInput type="password" placeholder="Password" v-model="formData.password" />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        <BaseButton type="submit">Login</BaseButton>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
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

.error-message {
  color: var(--color-text-danger);
}
</style>
