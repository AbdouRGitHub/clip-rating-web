import { checkSession } from '@/services/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/Login.vue') },
    { path: '/home', component: () => import('@/views/Home.vue'), meta: { requiresAuth: true } },
    {
      path: '/settings',
      component: () => import('@/views/settings/Settings.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'profile',
          component: () => import('@/views/settings/ProfileSettings.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'password',
          component: () => import('@/views/settings/ChangePasswordSettings.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated: boolean = await checkSession();
    if (isAuthenticated) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;
