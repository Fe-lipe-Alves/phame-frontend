<script setup lang="ts">
import AuthorizationLayout from '@/components/layouts/authorizarion/AuthorizationLayout.vue'
import FormForgotPassword from '@/components/authentication/FormForgotPassword.vue'
import FormRedefinePassword from '@/components/authentication/FormRedefinePassword.vue'
</script>

<template>
  <AuthorizationLayout>
    <FormRedefinePassword />
  </AuthorizationLayout>
</template>

<style scoped></style>
