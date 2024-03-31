<script setup lang="ts">
import { __ } from '@/support/helpers'
import InputBase from '@/components/base/InputBase.vue'
import LinkBase from '@/components/base/LinkBase.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import router from '@/router'
import { useRoute } from 'vue-router'

const authStore = useAuthStore()
const { auth } = storeToRefs(authStore)

const route = useRoute()

function logout() {
  authStore.logout().then(() => router.push(route))
}
</script>

<template>
  <header class="w-full p-2 flex gap-16 justify-center items-baseline">
    <form class="w-3/12 hidden lg:block">
      <InputBase class="rounded-full w-full" :placeholder="__('Search for anything')" />
    </form>

    <div>
      <h1 class="font-open-sans text-lg font-semibold">
        Phr<span class="text-zinc-500">ame</span>
      </h1>
    </div>

    <nav class="hidden lg:block">
      <ul class="flex gap-8">
        <li>
          <LinkBase>{{ __('Explore') }}</LinkBase>
        </li>
        <li>
          <LinkBase>{{ __('Collections') }}</LinkBase>
        </li>
        <li>
          <LinkBase>{{ __('Locations') }}</LinkBase>
        </li>
      </ul>
    </nav>

    <div class="w-auto lg:w-3/12 justify-end gap-8 flex">
      <a>{{ auth.user.name }}</a>
      <a @click="logout">Sair</a>
    </div>
  </header>
</template>

<style scoped></style>
