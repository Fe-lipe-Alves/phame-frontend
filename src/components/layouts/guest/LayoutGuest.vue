<script setup lang="ts">
import HeaderAuthorization from '@/components/layouts/guest/HeaderGuest.vue'
import FooterAuthorization from '@/components/layouts/guest/FooterGuest.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-white">
    <HeaderAuthorization />

    <div class="flex-1 w-full flex justify-center">
      <slot></slot>
    </div>

    <FooterAuthorization />
  </div>
</template>

<style scoped></style>
