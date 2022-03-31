<template>
  <div class="container mx-auto px-4">
    <h1 class="text-center text-4xl mt-20">Ironhack Vue Todo List</h1>

    <!-- Input -->
    <div class="flex justify-center mt-5">
      <input
        v-model="task"
        type="text"
        placeholder="Enter new task"
        class="border"
      />
      <button
        @click="submitTask"
        class="text-lg ring ring-offset-2 ring-teal-500 rounded-md px-5 py-2 m-2 text-justify text-white bg-black font-extrabold"
      >
        +
      </button>
    </div>

    <!-- task table -->
    <div class="flex justify-center mt-5">
      <table class="table-fixed border-2 mt-3">
        <thead>
          <tr class="border-2 bg-slate-100">
            <th class="text-left border-2 p-2">Task</th>
            <th class="text-center border-2 p-2">Status</th>
            <th class="text-center border-2 p-2">Edit</th>
            <th class="text-center border-2 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td class="text-left border-2 p-3">
              <span :class="{ done: task.status === 'Done' }">
                {{ task.title }}
              </span>
            </td>
            <td v-if="state" class="text-center border-2 p-2 w-32">
              <span
                @click="changeStatus(task)"
                class="pointer"
                :class="{
                  danger: task.is_complete === 'To-do',
                  //warning: is_complete === 'In-progress',
                  success: task.is_complete === 'Done',
                }"
                >{{ task.is_complete }}</span
              >
            </td>
            <td class="text-center border-2 p-3">
              <div @click="editTask(task)" class="pointer">
                <span class="text-center p-3">✍</span>
              </div>
            </td>
            <td class="text-center border-2 p-3">
              <div @click="deleteTask(task)" class="pointer">
                <span class="text-center p-3">❌</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { isTemplateNode } from "@vue/compiler-core";
import { ref } from "vue";
import { supabase } from "../supabase/";
import { useRouter } from "vue-router";

import { useTaskStore } from "../store/task";
import { storeToRefs } from "pinia";

// const main = useTaskStore();

// const { tasks, is_complete } = storeToRefs(main);

export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
  data() {
    return {
      //reactive values
      task: "",
      editedTask: null,
      state: ["To-do", "Done"], //"In-progress",
      tasks: [],
    };
  },
  mounted() {
    this.getAllTasks();
  },
  methods: {
    //al cargar la app se cargan todas las task que haya en usuario.
    async getAllTasks() {
      const task = await this.taskStore.fetchTasks();
      this.tasks = task;
      //console.log(task);
    },
    async submitTask() {
      const res = await this.taskStore.addTask(this.task);
      this.task = res;
      console.log(res);
    },

    async deleteTask(task) {
      const delTask = await this.taskStore.deleteTask(task.id);
      this.task = delTask;
      console.log(delTask);
    },

    async editTask(task) {
      console.log(task);
      const editedTask = await this.taskStore.updateTask(this.task);
      this.task = editedTask;
      console.log(editedTask);
    },

    async changeStatus(task) {
      console.log(task);
      if (task.is_complete === "To-do") {
        task.is_complete = "Done";
      } else {
        task.is_complete = "To-do";
      }
      const status = await this.taskStore.statusTask(this.task);
      this.is_complete = status;
      console.log(status);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.danger {
  color: red;
}

.warning {
  color: darkorange;
}

.success {
  color: green;
}

.done {
  font-weight: lighter;
  text-decoration: line-through;
}
</style>
