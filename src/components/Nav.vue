<template>
<section class="bg-teal-600 w-full">
  <nav class="flex justify-between p-6 px-4">
    <div class="flex justify-between items-center w-full">
      <div class="xl:w-1/3">
        <a class="block max-w-max" href="#">
          <img class="h-8" src="../assets/logo.png" alt="">
        </a>
      </div>
      <div class=""> <!-- class hidden xl:block xl:w-1/3 -->
        <ul class="flex justify-center">
          <li class="mr-12"><a class="text-coolGray-500 hover:text-coolGray-900 font-medium text-white" href="/">Home</a></li>
          <!-- <li class="mr-12"><a class="text-coolGray-500 hover:text-coolGray-900 font-medium text-white" href="/auth">Auth</a></li> -->
          <li class="mr-12"><a class="text-coolGray-500 hover:text-coolGray-900 font-medium text-white" href="../views/Auth.vue">Logout</a></li>
        </ul>
      </div>
      <div class="hidden xl:block xl:w-1/3">
        <div class="flex items-center justify-end">
        </div>
      </div>
    </div>
  </nav>
</section>
</template>

<script setup>

</script>

<style scoped>

</style>
