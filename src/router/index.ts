import { createRouter, createWebHistory } from 'vue-router'
import FGInicio from '@/views/FGInicio.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: FGInicio
    },
    /*
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    */
  ]
})

export default router
