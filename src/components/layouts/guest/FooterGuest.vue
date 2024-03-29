<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
import { __ } from '@/support/helpers'
</script>

<template>
  <footer
    class="text-sm flex flex-col lg:flex-row gap-x-16 gap-y-2 items-center justify-center text-granite-gray mt-8"
  >
    <nav>
      <ul class="order-2 lg:order-1 flex gap-8">
        <li>
          <LinkBase>{{ __('Privacy policy') }}</LinkBase>
        </li>
        <li>
          <LinkBase>{{ __('Terms of use') }}</LinkBase>
        </li>
        <li>
          <LinkBase>{{ __('Help Center') }}</LinkBase>
        </li>
      </ul>
    </nav>

    <div class="order-1 lg:order-2">
      <span>2024&copy;Phrame</span>
    </div>
  </footer>
</template>

<style scoped></style>
