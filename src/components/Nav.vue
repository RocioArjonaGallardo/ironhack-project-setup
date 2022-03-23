<template>
  <header class="bg-main-green text-white">
      <div class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
        <div class="md:container md:mx-auto bg-teal-600 py-24 md:py-32 text-center w-full h-full">
           <h1 class="mb-1 text-3xl md:text-2xl text-white font-bold diegoTest">
             Welcome
           </h1>
           </div>
        <div class="flex items-center gap-x-4">
          <nav class="text-white">
            <router-link to="/">Home</router-link> |
            <router-link to="/auth">Log In</router-link> |
          </nav>
            <router-view/>
          </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
/* .rocio-title {
  @apply mb-1 text-3xl md:text-2xl text-white font-bold;
} */
</style>
