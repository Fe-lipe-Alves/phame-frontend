<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import InputBase from '@/components/base/InputBase.vue'
</script>

<template>
  <header class="w-full p-2 flex gap-16 justify-center items-baseline">
    <form class="w-3/12 hidden lg:block">
      <InputBase class="rounded-full w-full" placeholder="Pesquise por qualquer coisa" />
    </form>

    <div>
      <h1 class="font-open-sans text-lg font-semibold">Phrame</h1>
    </div>

    <nav class="hidden lg:block">
      <ul class="flex gap-8">
        <li>
          <LinkBase>Explorar</LinkBase>
        </li>
        <li>
          <LinkBase>Coleções</LinkBase>
        </li>
        <li>
          <LinkBase>Lugares</LinkBase>
        </li>
      </ul>
    </nav>

    <div class="w-auto lg:w-3/12 justify-end gap-4 flex">
      <LinkBase>Cadastre-se</LinkBase>
      <LinkBase class="font-semibold">Enviar foto</LinkBase>
    </div>
  </header>
</template>

<style scoped></style>
