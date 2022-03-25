<template>
  <AppHeader />
  <router-view></router-view>
  <!-- <SignIn /> -->
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "Auth",
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
