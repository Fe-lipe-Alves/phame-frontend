import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Authentication/LoginView.vue'
import RegisterView from '@/views/Authentication/RegisterView.vue'
import ForgotPasswordView from '@/views/Authentication/ForgotPasswordView.vue'
import RedefinePasswordView from '@/views/Authentication/RedefinePasswordView.vue'

export const authentication: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordView
  },
  {
    path: '/redefine-password',
    name: 'redefine-password',
    component: RedefinePasswordView
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    component: RedefinePasswordView
  }
]
