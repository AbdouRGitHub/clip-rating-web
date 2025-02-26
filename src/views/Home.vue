<script setup lang="ts">
import { profile } from '@/services/user';
import { onMounted, reactive, ref } from 'vue';
import MainHeader from '@/components/header/MainHeader.vue';
import PlaylistCard from '@/components/card/PlaylistCard.vue';
import type Playlist from '@/models/playlist';

const avatarPath = ref<string | null>(null);
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

onMounted(async () => {
  try {
    const response = await profile();
    avatarPath.value = response?.avatar_path ?? '';
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="home">
    <MainHeader :avatarPath="avatarPath" />
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
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 40px 40px;
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
