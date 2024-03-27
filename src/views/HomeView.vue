<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import { __ } from '@/support/helpers'
</script>

<template>
  <div>
    <div>
      <LinkBase :to="{ name: 'login' }">Login</LinkBase>
    </div>

    <div>
      {{ __('Username') }}
    </div>

    <div></div>
  </div>
</template>
