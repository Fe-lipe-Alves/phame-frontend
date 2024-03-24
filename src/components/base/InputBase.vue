<script setup lang="ts">
interface Props {
  type?: string
}

const model = defineModel()

withDefaults(defineProps<Props>(), {
  type: 'text'
})
</script>

<template>
  <input :type="type" class="py-2 px-4 rounded border border-gray-300" v-model="model">
</template>

<style scoped>

</style>
