<script setup lang="ts">
import HeaderGuest from '@/components/layouts/guest/HeaderGuest.vue'
import FooterGuest from '@/components/layouts/guest/FooterGuest.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-white">
    <HeaderGuest />

    <div class="flex-1 w-full flex justify-center">
      <slot></slot>
    </div>

    <FooterGuest />
  </div>
</template>

<style scoped></style>
