<script setup lang="ts">
import SocialButtonLogin from '@/components/authentication/login/SocialButtonLogin.vue'
</script>

<template>
  <div class="w-10/12 mx-auto flex flex-col gap-4">
    <SocialButtonLogin image="https://static.vecteezy.com/ti/vetor-gratis/p1/13948549-logotipo-do-google-em-fundo-branco-transparente-gratis-vetor.jpg">
      Continuar com Google
    </SocialButtonLogin>


    <SocialButtonLogin image="https://auth.services.adobe.com/img/social/f_logo_RGB-Blue_58.png">
      Continuar com Facebook
    </SocialButtonLogin>

    <SocialButtonLogin image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrbPpgPDWrj1UhXhv96IJZNlwDLhq8wPeNw&usqp=CAU">
      Continuar com Microsoft
    </SocialButtonLogin>
  </div>
</template>

<style scoped>

</style>
