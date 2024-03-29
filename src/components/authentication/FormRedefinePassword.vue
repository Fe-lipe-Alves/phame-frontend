<script setup lang="ts">
import TitlePage from '@/components/components/TitlePage.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import InputWithLabel from '@/components/components/InputWithLabel.vue'
import { Form } from '@/support/form/Form'
import InputFeedback from '@/components/components/InputFeedback.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import backend from '@/services/backend/backend'
import router from '@/router'
import { __ } from '@/support/helpers'

const route = useRoute()

const form = new Form({
  token: route.query?.token,
  email: route.query?.email,
  password: '',
  password_confirmation: ''
})

const error = ref('')

function submit() {
  console.log(form)

  form
    .onSuccess(() => {
      router.push({ name: 'login' })
    })
    .onFail(() => {
      error.value = __('An error has occurred. Try again.')
    })
    .send(backend.resetPassword)
}
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>{{ __('Enter your new password') }}</TitlePage>
    </div>

    <div
      v-if="error"
      class="text-red-700 bg-red-100 border border-red-300 rounded flex items-center justify-center p-1 mt-2"
    >
      <small>{{ error }}</small>
    </div>

    <form class="flex flex-col gap-6" @submit.prevent="submit">
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="password">{{ __('New password') }}</LabelBase>
          <small class="mr-1 text-granite-gray">{{ __('Minimum 8 characters') }}</small>
        </div>
        <InputBase id="password" type="password" v-model="form.fields.password" />
        <InputFeedback type="danger" :message="form.errors.password" />
      </div>

      <InputWithLabel
        v-model="form.fields.password_confirmation"
        id="password_confirmation"
        type="password"
        :label="__('Password Confirmation')"
      />

      <div>
        <ButtonPrimary>{{ __('Save password') }}</ButtonPrimary>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
