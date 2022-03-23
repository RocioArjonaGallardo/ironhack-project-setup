<template>
  <!-- <AppHeader />  -->
  <Nav />
  <SignIn v-if="loadSignIn" />
  <SignUp v-else/>
  <div class="container flex justify-center mx-auto px-4 ">
    <button @click="loadSignIn = !loadSignIn" class="bg-black w-40 p-2 m-5 rounded-md text-white font-rocioTitle font-bold">Log In</button>
  </div>
  <footer>
    <p class="text-center">
          <span class="text-xs font-medium font-rocioBody">Have an account already? </span>
          <a class="inline-block text-xs font-bold font-rocioBody text-teal-600 hover:text-black hover:underline" href="./SignIn.vue"> Sign In</a>
        </p>
  </footer>
  
  
</template>
<script setup>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import AppHeader from '../components/AppHeader.vue';
import Nav from '../components/Nav.vue';
// import { StoreToRef } from "pinia";
// import { UserSignStore } from '../store/user.js';
// const main = UserSignStore();
</script>

<style scoped>

</style>
