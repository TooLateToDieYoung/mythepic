import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/Home',
      redirect: '/'
    },
    {
      path: '/Test',
      component: () => import('./components/Test.vue')
    }
  ],
});