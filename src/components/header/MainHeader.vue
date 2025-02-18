<script setup lang="ts">
const props = defineProps<{
  avatarURL: string;
}>();
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
      <img :src="props.avatarURL" class="avatar" />
      <img src="@/assets/arrow-down-navbar.svg" height="15" width="15" alt="Arrow navbar" />
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
ul {
  display: flex;
  column-gap: 20px;
}
li {
  list-style-type: none;
}
</style>
