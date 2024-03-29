<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import InputBase from '@/components/base/InputBase.vue'
import SocialLogin from '@/components/pages/authentication/login/SocialLogin.vue'
import TitlePage from '@/components/components/TitlePage.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputWithLabel from '@/components/components/InputWithLabel.vue'
import backend from '@/services/backend/backend'
import { Form } from '@/support/form/Form'
import { ref } from 'vue'
import InputFeedback from '@/components/components/InputFeedback.vue'
import router from '@/router'
import { __ } from '@/support/helpers'

const form = new Form({
  name: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const error = ref('')

async function save() {
  await form
    .onSuccess(() => {
      router.push({ name: 'home' })
    })
    .onFail(() => {
      error.value = __('An error has occurred. Try again.')
    })
    .send(backend.register)
}
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>{{ __('Create your account now') }}</TitlePage>
    </div>

    <div
      v-if="error"
      class="text-red-700 bg-red-100 border border-red-300 rounded flex items-center justify-center p-1 mb-2"
    >
      <small>{{ error }}</small>
    </div>

    <form class="flex flex-col gap-6" @submit.prevent="save">
      <InputWithLabel
        v-model="form.fields.name"
        id="name"
        :label="__('Name')"
        :error="form.errors.name"
      />

      <InputWithLabel
        v-model="form.fields.email"
        id="email"
        :label="__('Email')"
        type="email"
        :error="form.errors.email"
      />

      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="username">{{ __('Username') }}</LabelBase>
          <small class="mr-1 text-granite-gray">{{
            __('Only letters, numbers and underscore')
          }}</small>
        </div>
        <InputBase v-model="form.fields.username" id="username" />
        <InputFeedback type="danger" :message="form.errors.username" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="password">{{ __('Password') }}</LabelBase>
          <small class="mr-1 text-granite-gray">{{ __('Minimum 8 characters') }}</small>
        </div>
        <InputBase v-model="form.fields.password" id="password" type="password" />
        <InputFeedback type="danger" :message="form.errors.password" />
      </div>

      <InputWithLabel
        id="password_confirmation"
        :label="__('Password Confirmation')"
        type="password"
        v-model="form.fields.password_confirmation"
      />

      <div>
        <ButtonPrimary>{{ __('Register') }}</ButtonPrimary>
      </div>
    </form>

    <div class="p-2 text-center my-8">
      {{ __('Already have an account?') }}
      <LinkBase :to="{ name: 'login' }" class="">{{ __('Log in') }}</LinkBase>
    </div>

    <SocialLogin />
  </main>
</template>

<style scoped></style>
