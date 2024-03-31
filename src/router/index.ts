import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authentication } from '@/router/authentication'
import { Lang, type TLangs } from '@/support/lang/lang'
import { setLang } from '@/support/helpers'
import { applyMiddleware } from '@/router/middleware'
import { applyTitle } from '@/router/titled'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial',
      redirect: (to) => {
        const lang = to.params?.lang ?? (Lang.default as any)
        return { name: 'home', params: { lang: lang } }
      }
    },
    {
      path: '/:lang',
      beforeEnter: (to) => {
        const lang = (to.params?.lang ?? Lang.default) as keyof TLangs
        setLang(lang)
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home/HomeView.vue')
        },

        ...authentication
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const success = applyMiddleware(to, next)
  if (success) {
    applyTitle(to)
  }
})

export default router
