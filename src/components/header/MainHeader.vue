<script setup lang="ts">
import { logout } from '@/services/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps<{
  avatarPath: string | null;
}>();
const avatarURL = `${import.meta.env.VITE_SUPABASE_AVATAR_URL}`;
const isDropdownOpen = ref<boolean>(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const disconnect = async () => {
  await logout();
  await router.push('/login');
};
</script>

<template>
  <header>
    <div class="logo">
      <img
        src="@/assets/logo.png"
        alt="logo"
        width="100"
        height="80"
        style="cursor: pointer; object-fit: contain"
      />
    </div>
    <div class="nav">
      <nav>
        <ul>
          <li><a>Browse</a></li>
        </ul>
      </nav>
    </div>
    <div class="profile">
      <img :src="avatarURL + '/' + props.avatarPath" class="avatar" @click="toggleDropdown" />
      <img
        src="@/assets/arrow-down-navbar.svg"
        height="15"
        width="15"
        alt="Arrow navbar"
        @click="toggleDropdown"
      />
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <ul class="dropdown-list">
          <li>
            <a><RouterLink to="/settings">Settings</RouterLink></a>
          </li>
          <li><a @click="disconnect">Logout</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  margin: auto 20px;
  height: 80px;
  user-select: none;
  color: var(--color-text-white);
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  object-fit: cover;
  border-radius: 1px;
  height: 38px;
  width: 38px;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

ul {
  display: flex;
  column-gap: 20px;
}
ul.dropdown-list :hover {
  background-color: var(--color-box-secondary);
  color: var(--color-text-white);
}

li {
  list-style-type: none;
  width: 100%;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 35%;
  background-color: white;
  border: 1px solid #ddd;
  min-width: 150px;
}

.dropdown-menu ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 8px;
}

.dropdown-menu a {
  color: #333;
  text-decoration: none;
}
</style>
