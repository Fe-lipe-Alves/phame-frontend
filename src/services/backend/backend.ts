import request from '@/services/backend/request'
import  backend from '@/services/backend/backend'

// const controllers: { [k in keyof backend]: { controller: AbortController; sending: boolean } } = {}

async function forgotPassword(input: any) {
  await request('/sanctum/csrf-cookie').get()

  const { data } = await request('/forgot-password').post(input)
  return data
}

async function login(input: any) {
  const req = { ...input, device_name: 'Navegador' }

  await request('/sanctum/csrf-cookie').get()

  const { data } = await request('/login').post(req)

  return data
}

async function register(input: any) {
  await request('/sanctum/csrf-cookie').get()

  const { data } = await request('/register').post(input)
  return data
}

async function resetPassword(input: any) {
  await request('/sanctum/csrf-cookie').get()

  const { data } = await request('/reset-password').post(input)
  return data
}

async function test(input: any) {
  const { data } = await request('/api/test').post(input)
  return data
}

export default {
  forgotPassword,
  login,
  register,
  resetPassword,
  test,
}
