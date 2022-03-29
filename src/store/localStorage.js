const app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: null,
  },
  mounted() {
    if (localStorage.getItem("tasks")) {
      try {
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
      } catch (e) {
        localStorage.removeItem("tasks");
      }
    }
  },
  methods: {
    addTask() {
      // ensure they actually typed something
      if (!this.newTask) return;
      this.tasks.push(this.newTask);
      this.newTask = "";
      this.saveTasks();
    },
    removeTask(x) {
      this.tasks.splice(x, 1);
      this.saveTasks();
    },
    saveTasks() {
      let parsed = JSON.stringify(this.tasks);
      localStorage.setItem("tasks", parsed);
    },
  },
});
