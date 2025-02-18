<script setup lang="ts">
import { profile } from '@/services/user';
import { onMounted, reactive, ref } from 'vue';
import MainHeader from '@/components/header/MainHeader.vue';
import PlaylistCard from '@/components/card/PlaylistCard.vue';
import type Playlist from '@/models/playlist';

const avatarURL = ref<string>(
  `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.VITE_SUPABASE_AVATAR_BUCKET}`,
);

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
    console.log(playlists);
    const response = await profile();
    avatarURL.value = avatarURL.value + `/${response?.avatar_path}`;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <MainHeader :avatarURL="avatarURL" />
  <main>
    <div class="navbar"></div>
    <div class="content">
      <PlaylistCard v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  margin: 20px 20px;
  column-gap: 20px;
}
.navbar {
  flex: 1;
  background-color: bisque;
  width: 100%;
  border-radius: 2%;
}

.content {
  flex: 2;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
}
</style>
