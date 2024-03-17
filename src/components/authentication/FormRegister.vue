<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import InputBase from '@/components/base/InputBase.vue'
import SocialLogin from '@/components/authentication/login/SocialLogin.vue'
import TitlePage from '@/components/components/TitlePage.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputWithLabel from '@/components/components/InputWithLabel.vue'
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>Crie sua conta agora</TitlePage>
    </div>

    <form class="flex flex-col gap-6">
      <InputWithLabel id="name" label="Nome" />

      <InputWithLabel id="email" label="E-mail" type="email" />

      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="username">Nome de usuário</LabelBase>
          <small class="mr-1 text-granite-gray">Somente letras, números e sublinhado</small>
        </div>
        <InputBase id="username" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="password">Senha</LabelBase>
          <small class="mr-1 text-granite-gray">Mínimo 8 caracteres</small>
        </div>
        <InputBase id="password" type="password" />
      </div>

      <div>
        <ButtonPrimary>Cadastrar</ButtonPrimary>
      </div>
    </form>

    <div class="p-2 text-center my-8">
      Já tem uma conta
      <LinkBase :to="{name: 'login'}" class="">Entre aqui</LinkBase>
    </div>

    <SocialLogin />
  </main>
</template>

<style scoped></style>
