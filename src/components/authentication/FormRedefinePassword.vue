<script setup lang="ts">
import TitlePage from '@/components/components/TitlePage.vue'
import ButtonPrimary from '@/components/components/ButtonPrimary.vue'
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'
</script>

<template>
  <main class="w-full lg:w-5/12 bg-white p-8 lg:p-12 lg:rounded-2xl">
    <div class="my-8 text-center">
      <TitlePage>Insira sua nova senha</TitlePage>
    </div>

    <form class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <div class="flex justify-between items-baseline">
          <LabelBase for="password">Nova senha</LabelBase>
          <small class="mr-1 text-granite-gray">Mínimo 8 caracteres</small>
        </div>
        <InputBase id="password" type="password" />
      </div>

      <div>
        <ButtonPrimary>Salvar senha</ButtonPrimary>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
