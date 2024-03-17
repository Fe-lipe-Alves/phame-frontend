<script setup lang="ts">
interface Props {
  type: string
}

withDefaults(defineProps<Props>(), {
  type: 'text'
})
</script>

<template>
  <input :type="type" class="py-2 px-4 rounded border border-gray-300">
</template>

<style scoped>

</style>
