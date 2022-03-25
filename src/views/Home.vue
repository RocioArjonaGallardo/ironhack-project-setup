<script>
import TodoList from "../components/TodoList.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    Nav,
  },
};
</script>

<template>
  <div>
    <Nav />
    <TodoList />
  </div>
</template>

<style scoped></style>
