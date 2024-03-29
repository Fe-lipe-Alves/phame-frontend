<script setup lang="ts">
import TitlePage from '@/components/components/TitlePage.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputWithLabel from '@/components/components/InputWithLabel.vue'
import { Form } from '@/support/form/Form'
import backend from '@/services/backend/backend'
import { ref } from 'vue'
import { __ } from '@/support/helpers'

const form = new Form({
  email: ''
})

const error = ref('')
const success = ref('')

function submit() {
  form
    .onSuccess((response) => {
      success.value = response.data.message
    })
    .onFail(() => {
      error.value = __('An error has occurred. Try again.')
    })
    .send(backend.forgotPassword)
}
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>{{ __('Forgot your password?') }}</TitlePage>

      <p>
        {{
          __(
            'We will send you an email with a password reset link. Enter the email address associated with your account.'
          )
        }}
      </p>
    </div>

    <form class="flex flex-col gap-6" @submit.prevent="submit">
      <InputWithLabel
        v-model="form.fields.email"
        id="email"
        :label="__('Email')"
        type="email"
        :error="form.errors.email"
        required
      />

      <div>
        <ButtonPrimary :disabled="form.processing.value">{{ __('Send link') }}</ButtonPrimary>
      </div>
    </form>

    <div
      v-if="error"
      class="text-red-700 bg-red-100 border border-red-300 rounded flex items-center justify-center p-1 mt-2"
    >
      <small>{{ error }}</small>
    </div>

    <div
      v-if="success"
      class="text-green-700 bg-green-100 border border-green-300 rounded flex items-center justify-center p-1 mt-2"
    >
      <small>{{ success }}</small>
    </div>
  </main>
</template>

<style scoped></style>
