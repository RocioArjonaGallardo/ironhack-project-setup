<template>
  <router-link :to="route">{{ text }}</router-link>
</template>

<script setup>
defineProps({
  route: String,
  text: String,
});
</script>

<style></style>
