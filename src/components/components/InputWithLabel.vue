<script setup lang="ts">
import InputBase from '@/components/base/InputBase.vue'
import LabelBase from '@/components/base/LabelBase.vue'
import InputFeedback from '@/components/components/InputFeedback.vue'

interface Props {
  type?: string
  id: string
  label: string
  error?: string[]
  success?: string[]
}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<Props>(), {
  type: 'text'
})

const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-1">
    <LabelBase :for="id">{{ label }}</LabelBase>
    <InputBase v-model="model" v-bind="$attrs" :id="id" :type="type" />
    <InputFeedback type="danger" :message="error" v-if="error" />
    <InputFeedback type="success" :message="success" v-if="success" />
  </div>
</template>

<style scoped></style>
