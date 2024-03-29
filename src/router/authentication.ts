import type { RouteRecordRaw } from 'vue-router'
import { guestMiddleware } from '@/router/middleware'
import { __ } from '@/support/helpers'

export const authentication: Readonly<RouteRecordRaw[]> = [
  {
    path: 'login',
    name: 'login',
    component: () => import('../views/Authentication/LoginView.vue'),
    meta: {
      ...guestMiddleware,
      title: __('Login')
    }
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('../views/Authentication/RegisterView.vue'),
    meta: {
      ...guestMiddleware,
      title: __('Register')
    }
  },
  {
    path: 'forgot-password',
    name: 'forgot-password',
    component: () => import('../views/Authentication/ForgotPasswordView.vue'),
    meta: {
      ...guestMiddleware,
      title: __('Forgot your password?')
    }
  },
  {
    path: 'redefine-password',
    name: 'redefine-password',
    component: () => import('../views/Authentication/RedefinePasswordView.vue'),
    meta: {
      ...guestMiddleware,
      title: __('Enter your new password')
    }
  },
  {
    path: 'password-reset',
    name: 'password-reset',
    component: () => import('../views/Authentication/RedefinePasswordView.vue'),
    meta: {
      ...guestMiddleware,
      title: __('Enter your new password')
    }
  }
]
