import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { User } from '@/models/user'
import backend from '@/services/backend/backend'

interface IAuth {
  user?: User
  checked: boolean
}

export const useAuthStore = defineStore(
  'auth-store',
  () => {
    const auth = reactive<IAuth>({
      user: undefined,
      checked: false
    })

    function authenticated(): boolean {
      updateState()
      return auth.checked
    }

    async function login(form: { email: string; password: string }) {
      const response = await backend.login(form).then((response) => response)

      await backend.auth().then((response) => {
        const user = new User().fill(response)
        setUser(user)
      })

      return response
    }

    function setUser(user: User) {
      auth.user = user
      updateState()
    }

    function updateState() {
      auth.checked = !!auth.user
    }

    return {
      auth,
      authenticated,
      login
    }
  },
  {
    persist: true
  }
)
