import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/Eventos.vue')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: () => import('../views/DetalleNoticia.vue'),
      props: true,
    },
  ]
})

export default router
