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
      //console.log(data);
      return data;
    },

    async addTask(task) {
      const id = this.getId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: task, user_id: id }]);
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async statusTask(status) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ is_complete: this.state })
          .match({ id: id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
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
    async updateTask(task) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: this.editedTask })
          .match({ id: id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
