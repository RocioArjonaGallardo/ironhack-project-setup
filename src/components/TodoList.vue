<template>
  <div class="container mx-auto px-4">
      <h2 class="text-center text-xl mt-20">Ironhack Vue Todo List</h2>

      <!-- Input -->
      <div class="flex justify-center mt-5">
          <input v-model="task" type="text" placeholder="Enter new task" class="border">
          <button @click="submitTask" class="btn text-white bg-teal-500 rounded-md p-1 m-1">DO IT</button>
      </div>

      <!-- task table -->
      <div class="flex justify-center mt-5">
          <table class="table-fixed border-2 mt-3 ">
  <thead>
    <tr class="border-2 bg-slate-100">
      <th class="text-left border-2 p-2">Task</th>
      <th class="text-left border-2 p-2">Status</th>
      <th class="text-center border-2 p-2">Edit</th>
      <th class="text-center border-2 p-2">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td class="text-left border-2 p-2">
          <span :class="{'done' : task.status === 'Done'}">
            {{task.name}}
          </span>
      </td>
      <td class="text-left border-2 p-2 w-32">
          <span @click="changeStatus(index)" class="pointer"
          :class=" {
              'danger' : task.status === 'To-do',
              'warning' : task.status === 'In-progress',
              'success' : task.status === 'Done'}">{{task.status}}</span>
      </td>
      <td class="text-center border-2 p-3">
         <div @click="editTask(index)">
              <span class="text-center p-3">✍</span>
          </div>
      </td>
      <td class="text-center border-2 p-3">
          <div @click="deleteTask(index)">
              <span class="text-center p-3">❌</span>
          </div>
     </td>
    </tr>
  </tbody>
</table>
      </div>

​</div>

</template>

<script>import { isTemplateNode } from "@vue/compiler-core";

export default {
    name: "TodoList",
    props: {
        msg: String,
    },
    data(){
        return{
            task:'',
            editedTask: null,
            availableSatuses: ['To-do', 'In-progress', 'Done'],
            tasks: [
                {
                    name: 'Here will be your task',
                    status: 'To-do',
                }
            ]
        }
    },
    methods: {
        submitTask(){
            if(this.task.length === 0) return;

            if(this.editedTask === null){
                this.tasks.push({
                name: this.task,
                status: 'To-do',
                });
            }else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            this.task = '';
        },

        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },

        changeStatus(index){
            let newIndex = this.availableSatuses.indexOf(this.tasks[index].status);
            if(++newIndex > 2) newIndex = 0;
            this.tasks[index].status = this.availableSatuses[newIndex];
        },
    }


}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
.danger {
color: red;
}

.warning {
color:darkorange;
}

.success {
color: green;
}

.done {
    font-weight:lighter;
    text-decoration: line-through;
}

</style>