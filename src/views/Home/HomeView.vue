<script setup lang="ts">
import LayoutAuth from '@/components/layouts/auth/LayoutAuth.vue'
import { useAuthStore } from '@/stores/auth'
import LayoutGuest from '@/components/layouts/guest/LayoutGuest.vue'

const authStore = useAuthStore()
</script>

<template>
  <LayoutAuth v-if="authStore.$state.auth.user"> </LayoutAuth>

  <LayoutGuest v-else> </LayoutGuest>
</template>

<style scoped></style>
