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
      component: () => import("../views/RestoView.vue"),
    },

    {
      path: "/restos/:id",
      name: "restos-show",
      component: () => import("../views/RestoDetailView.vue"),
    },

    {
      path: "/register",
      name: 'register',
      component: () => import("../views/RegisterView.vue"),
    },

    {
      path: "/create",
      name: 'create',
      component: () => import("../views/CreateView.vue"),
    },

    {
      path: "/update/:id",
      name: 'update',
      component: () => import("../views/UpdateView.vue"),
    },
    
    {
      path: "/percobaan",
      name: 'percobaan',
      component: () => import("../views/PercobaanView.vue"),
    },

    {
      path: "/profile",
      name: 'profile',
      component: () => import("../views/ProfileView.vue"),
    },

    {
      path: "/crudpage",
      name: 'crudpage',
      component: () => import("../views/CRUDPage.vue"),
    },

  ]
})

export default router
