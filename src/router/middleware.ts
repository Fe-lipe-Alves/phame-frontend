import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export const guestMiddleware = {
  middleware: 'guest'
}

export const authMiddleware = {
  middleware: 'auth'
}

export function applyMiddleware(to: RouteLocationNormalized, next: NavigationGuardNext): boolean {
  const authStore = useAuthStore()

  if (to.meta.middleware === 'authenticated' && !authStore.authenticated) {
    next({ name: 'login', params: to.params })
  } else if (to.meta.middleware === 'guest' && authStore.authenticated) {
    next({ name: 'home', params: to.params })
  } else {
    next()
    return true
  }
  return false
}
