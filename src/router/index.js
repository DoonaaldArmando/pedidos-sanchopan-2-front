// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Inicio.vue'),
      },
      {
        path: '/crearpersona',
        name: 'CrearPersona',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CrearPersona.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
