import { defineStore } from 'pinia'
import { onMounted, reactive, type UnwrapNestedRefs } from 'vue'
import { User } from '@/models/user'
import backend from '@/services/backend/backend'

interface IAuth {
  user?: User
  checked: boolean
}

export const useAuthStore = defineStore('auth-store', () => {
  const auth = reactive<IAuth>({
    user: undefined,
    checked: false,
  })

  function authenticated(): boolean {
    return !!getUser()
  }

  async function login(form: { email: string; password: string }) {
    const response = await backend.login(form).then(response => response)

    await backend.auth().then(response => {
      const user = new User().fill(response)
      setUser(user)
    })

    return response
  }

  function getUser(): UnwrapNestedRefs<User>|undefined {
    if (auth.user) {
      return auth.user
    }

    const session = localStorage.getItem('auth.user')
    if (session) {
      const user = new User().fill(JSON.parse(session))
      setUser(user)
      return user;
    }

    return undefined
  }

  function setUser(user: User) {
    auth.user = user
    localStorage.setItem('auth.user', JSON.stringify(user))
  }

  return {
    auth,
    authenticated,
    login,
  }
})
