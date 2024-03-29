import type { RouteLocationNormalized } from 'vue-router'

export function applyTitle(route: RouteLocationNormalized) {
  const page = route.meta.title ? `${route.meta.title} - ` : ''
  document.title = `${page}${import.meta.env.VITE_APP_NAME}`
}
