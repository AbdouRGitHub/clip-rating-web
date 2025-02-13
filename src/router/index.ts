import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/Login.vue') },
    { path: '/home', component: () => import('../views/Home.vue') },
  ],
});

export default router;
