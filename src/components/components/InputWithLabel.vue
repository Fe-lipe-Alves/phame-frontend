<script setup lang="ts">
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'

interface Props {
  type?: string
  id: string
  label: string
}

withDefaults(defineProps<Props>(), {
  type: 'text'
})

const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-1">
    <LabelBase :for="id">{{ label }}</LabelBase>
    <InputBase :id="id" :type="type" />
  </div>
</template>

<style scoped>

</style>
