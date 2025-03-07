<script setup lang="ts">
import MainHeader from '@/components/header/MainHeader.vue';
import { profile } from '@/services/user';
import { onMounted, ref } from 'vue';
import { useUser } from '@/composables/user';
const { user } = useUser('profile');
</script>

<template>
  <div class="settings">
    <MainHeader :avatarPath="user?.avatar_path ?? ''" />
    <main>
      <div class="settings-nav">
        <RouterLink to="/settings/" exactActiveClass="exactActiveClass">Settings</RouterLink>
        <RouterLink to="/settings/profile" exactActiveClass="exactActiveClass">Profile</RouterLink>
        <RouterLink to="/settings/password" exactActiveClass="exactActiveClass">
          Password
        </RouterLink>
      </div>
      <div class="settings-wrap">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.settings {
  min-height: 100vh;
}

main {
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.settings-nav {
  flex: 1;
  background-color: var(--color-box-primary);
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: var(--color-text-white);
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
}

.settings-wrap {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.exactActiveClass {
  background-color: #131d2c;
}
</style>
