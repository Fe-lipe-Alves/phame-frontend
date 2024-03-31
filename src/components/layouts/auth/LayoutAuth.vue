<script setup lang="ts">
import HeaderAuth from '@/components/layouts/auth/HeaderAuth.vue'
import FooterAuth from '@/components/layouts/auth/FooterAuth.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-white">
    <HeaderAuth />

    <div class="flex-1 w-full flex justify-center">
      <slot></slot>
    </div>

    <FooterAuth />
  </div>
</template>

<style scoped></style>
