<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <div class="flex gap-2 items-center justify-center border border-gray-300 rounded-full p-2">
    <img class="w-6" :src="image" v-if="image" alt="" />
    <slot></slot>
  </div>
</template>

<style scoped></style>
