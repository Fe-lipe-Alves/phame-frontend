<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import { __ } from '@/support/helpers'
import { useAuthStore } from '@/stores/auth'

function logout() {
  const authStore = useAuthStore()
  authStore.logout()
}
</script>

<template>
  <div>
    <div>
      <LinkBase :to="{ name: 'login' }">Login</LinkBase>
    </div>

    <div>
      {{ __('Username') }}
    </div>

    <div>
      <a @click="logout">Logout</a>
    </div>

    <div></div>
  </div>
</template>
