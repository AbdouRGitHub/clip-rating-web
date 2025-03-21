import { defineStore } from 'pinia';
import type User from '@/models/user';
import { profile } from '@/services/user';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  async function fetchUserData() {
    user.value = await profile();
  }

  return { user, fetchUserData };
});
