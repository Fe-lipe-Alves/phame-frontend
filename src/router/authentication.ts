import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Authentication/LoginView.vue'

export const authentication: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]
