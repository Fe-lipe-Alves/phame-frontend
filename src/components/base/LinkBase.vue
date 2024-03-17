<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const props = defineProps<{
  to: any
}>()

const redirectTo = computed(() => {
  return props.to ?? {name: route.name}
})
</script>

<template>
  <RouterLink :to="redirectTo" class="underline text-granite-gray hover:text-raisin-black">
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>
