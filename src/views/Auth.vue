<template>
  <div>This is auth...</div>
  <NavBar />
  <SignIn />
  
</template>
<script>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import NavBar from '../components/Nav.vue';
import { StoreToRef } from "pinia";
import { UserSignStore } from '../store/user';
const main = UserSignStore();
</script>
