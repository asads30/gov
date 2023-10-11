import { createRouter, createWebHistory } from 'vue-router'
import GosUslugiIndex from '@/views/GosUslugiIndex.vue'
import SearchGosUslugiIndex from '@/views/SearchGosUslugiIndex.vue'

const routes = [
  {
    path: '/',
    name: 'gos.uslugi.index',
    component: GosUslugiIndex
  },
  {
    path: '/search',
    name: 'gos.uslugi.search',
    component: SearchGosUslugiIndex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
