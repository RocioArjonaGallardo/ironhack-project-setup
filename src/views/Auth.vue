<template>
<h1>auth page</h1>
<AppHeader />
<SignIn />




</template>
<script>
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'Auth',
  components: {
    AppHeader,
    SignIn,
    SignUp,
  }
}


</script>

<style scoped>

</style>
