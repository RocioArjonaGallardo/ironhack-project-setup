import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  id: "taskStore",
  state: () => ({
    tasks: null,
    status: "To-do",
  }),
  actions: {
    getId() {
      const local = localStorage.getItem("supabase.auth.token");
      const goodLocal = JSON.parse(local);
      const id = goodLocal.currentSession.user.id;
      return id;
    },
    async fetchTasks() {
      const { data } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.task = data;
      console.log(data);
      return data;
    },

    async addTask(task) {
      const id = this.getId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: task, user_id: id, is_complete: statuses }]);
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTaks() {
      const id = this.getId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .delete()
          .match({ id: id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTask(title) {
      const id = this.getId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: title })
          .match({ id: this.id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async statusTask(status) {
      const id = this.getId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ is_complete: this.status })
          .match({ id: this.tasks.id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

// const app = new Vue({
//   el: '#app',
//   data: {
//     cats: [],
//     newCat: null
//   },
//   mounted() {
//     if (localStorage.getItem('cats')) {
//       try {
//         this.cats = JSON.parse(localStorage.getItem('cats'));
//       } catch(e) {
//         localStorage.removeItem('cats');
//       }
//     }
//   },
//   methods: {
//     addCat() {
//       // ensure they actually typed something
//       if (!this.newCat) {
//         return;
//       }

//       this.cats.push(this.newCat);
//       this.newCat = '';
//       this.saveCats();
//     },
//     removeCat(x) {
//       this.cats.splice(x, 1);
//       this.saveCats();
//     },
//     saveCats() {
//       const parsed = JSON.stringify(this.cats);
//       localStorage.setItem('cats', parsed);
//     }
//   }
// })
