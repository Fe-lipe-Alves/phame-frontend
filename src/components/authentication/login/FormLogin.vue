<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import SocialLogin from '@/components/authentication/login/SocialLogin.vue'
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import TitlePage from '@/components/components/TitlePage.vue'
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>Acesse sua conta</TitlePage>
    </div>

    <form class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <LabelBase for="email">Email</LabelBase>
        <InputBase type="email" id="email" />
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex justify-between">
          <LabelBase for="password">Senha</LabelBase>
          <LinkBase class="mr-1">Esqueceu sua senha?</LinkBase>
        </div>
        <InputBase type="password" id="password" />
      </div>

      <div>
        <ButtonPrimary> Entrar</ButtonPrimary>
      </div>
    </form>

    <div class="p-2 text-center my-8">
      Não tem uma conta
      <LinkBase class="">Cadastre-se</LinkBase>
    </div>

    <SocialLogin />
  </main>
</template>

<style scoped></style>
