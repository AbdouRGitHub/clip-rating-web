<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import PlaylistCard from '@/components/PlaylistCard.vue';
import type Playlist from '@/models/playlist';
import { useUserStore } from '@/store/user';

const playlists = reactive<Playlist[]>([
  {
    id: 'DOZAJDAZPOD',
    name: 'Playlist 1',
    user: {
      id: 'DOZAJDAZPOD',
      username: 'User 1',
      avatar_path: '',
    },
  },
  {
    id: 'DOZAJDAZPODAS',
    name: 'Playlist 2',
    user: {
      id: 'DOZAJDAZPODdazdadadazq',
      username: 'User 2',
      avatar_path: '',
    },
  },
  {
    id: 'DOZAJDAZPODASazf',
    name: 'Playlist 3',
    user: {
      id: 'DOZAJDAZPODazdadazdazazd',
      username: 'User 3',
      avatar_path: '',
    },
  },

  {
    id: 'DOZAJDAZPODASazfazfafa',
    name: 'Playlist 4',
    user: {
      id: 'DOZAJDAZPODazdadazd',
      username: 'User 4',
      avatar_path: '',
    },
  },
  {
    id: 'DOZAJDAZPODASazfazfzafzafazf',
    name: 'Playlist 5',
    user: {
      id: 'DOZAJDAZPODdazda',
      username: 'User 5',
    },
  },
  {
    id: 'DOZAJDAZPODASazfazfzafzafazfDZPAOJDPAZO',
    name: 'Playlist 6',
    user: {
      id: 'DOZAJDAZPOazdazD',
      username: 'User 6',
    },
  },
]);

const userStore = useUserStore();

onMounted(async () => {
  await userStore.fetchUserData();
});
</script>

<template>
  <div class="home">
    <MainHeader :avatarPath="userStore.user?.avatar_path ?? ''" />
    <main>
      <div class="content">
        <PlaylistCard v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

main {
  margin: 10px 40px auto 40px;
  display: flex;
  justify-content: center;
  height: 100%;
}
.sidebar {
  flex: 1;
  background-color: bisque;
  width: 100%;
  border-radius: 2%;
}

.content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 10px;
}
</style>
