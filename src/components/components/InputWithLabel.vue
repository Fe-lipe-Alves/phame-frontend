<script setup lang="ts">
interface Props {
  type?: string
  id: string
  label: string
}

withDefaults(defineProps<Props>(), {
  type: 'text'
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" class="py-2 px-4 rounded border border-gray-300" >
  </div>
</template>

<style scoped>

</style>
