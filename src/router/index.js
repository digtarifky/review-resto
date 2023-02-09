import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue";

  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    {
      path: '/restos',
      name: 'restos',
      component: () => ('../view/RestosView.vue')
    },

  ]
})

export default router
