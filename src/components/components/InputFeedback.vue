<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: 'success' | 'danger'
  message?: string[]
}

const props = defineProps<Props>()

const arrayMessages = computed(() => {
  return props.message ?? []
})
</script>

<template>
  <small :class="type">
    <slot>
      <span v-for="error in arrayMessages" :key="error">
        {{ error }}
      </span>
    </slot>
  </small>
</template>

<style scoped>
.success {
  @apply text-green-700;
}

.danger {
  @apply text-red-700;
}
</style>
