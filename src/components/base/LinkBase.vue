<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

interface Props {
  to?: any
}

const route = useRoute()

const props = defineProps<Props>()

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
