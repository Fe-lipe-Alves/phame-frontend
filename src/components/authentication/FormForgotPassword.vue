<script setup lang="ts">
import TitlePage from '@/components/components/TitlePage.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputWithLabel from '@/components/components/InputWithLabel.vue'
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>Esqueceu sua senha?</TitlePage>
      <p>
        Enviaremos um e-mail com um link de redefinição de senha. Informe o endereço de e-mail
        associado à sua conta.
      </p>
    </div>

    <form class="flex flex-col gap-6">
      <InputWithLabel id="email" label="E-mail" type="email" />

      <div>
        <ButtonPrimary>Enviar link</ButtonPrimary>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
