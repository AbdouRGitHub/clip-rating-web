<script setup lang="ts">
import type Playlist from '@/models/playlist';
import avatarDefault from '@/assets/avatar-default.png';
import { ref } from 'vue';
const props = defineProps<{
  playlist: Playlist;
}>();
const avatarURL = ref<string>(
  `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.VITE_SUPABASE_AVATAR_BUCKET}`,
);
</script>
<template>
  <div class="card">
    <div class="user">
      <img
        :src="
          props.playlist.user.avatar_path
            ? `${avatarURL}/${props.playlist.user.avatar_path}`
            : avatarDefault
        "
        alt="user avatar"
        class="avatar"
      />
      <p>{{ props.playlist.user.username }}</p>
    </div>
    <div class="playlist">
      <h3>{{ props.playlist.name }}</h3>
      <img src="@/assets/video.png" alt="playlist preview image" />
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 90%;
  height: 100%;
  background-color: var(--color-box-primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: var(--color-text-white);
  padding: 10px;
}

.user {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  align-self: flex-start;
}

.avatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: contain;
}

.playlist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}
</style>
