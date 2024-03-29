<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import SocialLogin from '@/components/authentication/login/SocialLogin.vue'
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import TitlePage from '@/components/components/TitlePage.vue'
import { reactive } from 'vue'
import router from '@/router'
import _ from 'lodash'
import { __ } from '@/support/helpers'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const form = reactive({
  email: 'test@example.com',
  password: 'test123'
})

const error = reactive({
  text: '',
  visible: false
})

function showError(text: string) {
  error.text = text
  error.visible = true
}

function login() {
  authStore
    .login(form)
    .then(() => {
      router.push({ name: 'home' })
    })
    .catch((e) => {
      const message =
        _.get(e, 'response.data.errors.email[0]') || __('An error has occurred. Try again.')
      showError(message)
    })
}
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>{{ __('Access your account') }}</TitlePage>
    </div>

    <div
      class="bg-red-100 border border-red-200 p-1 mb-3 rounded flex items-center justify-center text-red-500"
      v-show="error.visible"
    >
      <small>{{ error.text }}</small>
    </div>

    <form class="flex flex-col gap-6" @submit.prevent="login">
      <div class="flex flex-col gap-1">
        <LabelBase for="email">{{ __('Email') }}</LabelBase>
        <InputBase type="email" id="email" v-model="form.email" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="password">{{ __('Password') }}</LabelBase>
          <LinkBase :to="{ name: 'forgot-password' }" class="mr-1">
            {{ __('Forgot your password?') }}
          </LinkBase>
        </div>
        <InputBase type="password" id="password" v-model="form.password" />
      </div>

      <div>
        <ButtonPrimary>{{ __('Login') }}</ButtonPrimary>
      </div>
    </form>

    <div class="p-2 text-center my-8">
      {{ __("Don't have an account?") }}
      <LinkBase :to="{ name: 'register' }" class="">{{ __('Register') }}</LinkBase>
    </div>

    <SocialLogin />
  </main>
</template>

<style scoped></style>
