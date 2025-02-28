import type User from '@/models/user';
import { authInfo } from '@/services/auth';
import { profile } from '@/services/user';
import { ref, onMounted } from 'vue';

export function useUser(InitialType: string) {
  const user = ref<User | null>(null);
  const type = ref<string>(InitialType);

  const fetchUserData = async (newType = type.value) => {
    type.value = newType;
    console.table('OUAISSSSSSSSSSSSSSSS');
    switch (type.value) {
      case 'profile':
        console.log('profile');
        user.value = await profile();
        break;
      case 'authInfo':
        console.log('authInfo');
        user.value = await authInfo();
        break;
    }
  };

  onMounted(fetchUserData);

  return { user, fetchUserData };
}
