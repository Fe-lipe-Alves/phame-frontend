<script setup lang="ts">
import LinkBase from '@/components/base/LinkBase.vue'
</script>

<template>
  <footer
    class="text-sm flex flex-col lg:flex-row gap-x-16 gap-y-2 items-center justify-center text-granite-gray"
  >
    <nav>
      <ul class="order-2 lg:order-1 flex gap-8">
        <li>
          <LinkBase>Política de Privacidade</LinkBase>
        </li>
        <li>
          <LinkBase>Termos de uso</LinkBase>
        </li>
        <li>
          <LinkBase>Central de ajuda</LinkBase>
        </li>
      </ul>
    </nav>

    <div class="order-1 lg:order-2">
      <span>2024&copy;Phrame</span>
    </div>
  </footer>
</template>

<style scoped></style>
