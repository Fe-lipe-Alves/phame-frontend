import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Authentication/LoginView.vue'
import RegisterView from '@/views/Authentication/RegisterView.vue'

export const authentication: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  }
]
