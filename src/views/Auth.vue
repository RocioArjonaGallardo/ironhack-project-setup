<template>

  <TodoList />
  <!-- <SignIn v-if="loadSignIn" />
  <SignUp v-else/> -->
  <!-- <div class="container mx-auto px-4">
    <button @click="loadSignIn = !loadSignIn" class="">Log In</button>
  </div> -->
  
  
</template>
<script setup>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import TodoList from '../components/TodoList.vue';
// import { StoreToRef } from "pinia";
// import { UserSignStore } from '../store/user.js';
// const main = UserSignStore();
</script>

<style scoped>

</style>
