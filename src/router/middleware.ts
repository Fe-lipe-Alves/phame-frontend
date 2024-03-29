import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export const guestMiddleware = {
  middleware: 'guest'
}

export const authMiddleware = {
  middleware: 'auth'
}

export function applyMiddleware(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const authStore = useAuthStore()

  if (to.meta.middleware === 'authenticated' && !authStore.check()) {
    next({ name: 'login' })
  } else if (to.meta.middleware === 'guest' && authStore.check()) {
    next({ name: 'home' })
  }

  next()
}
