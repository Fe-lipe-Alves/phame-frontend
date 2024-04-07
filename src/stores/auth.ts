import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { User } from '@/models/user'
import backend from '@/services/backend/backend'
import _ from 'lodash'

export const useAuthStore = defineStore(
  'auth-store',
  () => {
    const auth = reactive<{ user: User }>({} as { user: User })

    const authenticated = computed<boolean>(() => {
      return !_.isEmpty(auth.user)
    })

    async function login(form: { email: string; password: string }) {
      const response = await backend.login(form)

      await backend.auth().then((response) => {
        const user = new User().fill(response)
        setUser(user)
      })

      return response
    }

    async function logout() {
      return backend.logout().then((response) => {
        $reset()
        return response
      })
    }

    function $reset() {
      // @ts-ignore
      auth.user = undefined
    }

    function setUser(user: User) {
      auth.user = user
    }

    return {
      auth,
      authenticated,
      login,
      logout,
      $reset
    }
  },
  {
    persist: {
      beforeRestore: (ctx) => {
        console.log('about to restore', ctx.store.$state)
      }
    }
  }
)
