<script setup lang="ts">
import HeaderAuthorization from '@/components/layouts/authorizarion/HeaderAuthorization.vue'
import FooterAuthorization from '@/components/layouts/authorizarion/FooterAuthorization.vue'
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col items-center bg-white">
    <HeaderAuthorization />

    <slot></slot>

    <FooterAuthorization />
  </div>
</template>

<style scoped></style>
