<template>
  <section class="bg-teal-600 w-full">
    <nav class="flex justify-between p-6 px-4">
      <div class="flex justify-between items-center w-full">
        <div class="xl:w-1/3">
          <a class="block max-w-max" href="#">
            <img class="h-8" src="../assets/logo.png" alt="" />
          </a>
        </div>
        <div class="">
          <!-- class hidden xl:block xl:w-1/3 -->
          <ul class="flex items-center justify-center">
            <li class="mr-12">
              <a class="font-medium text-white" href="/">Home</a>
            </li>
            <!-- router link to log out to auth view -->
            <li class="mr-12">
              <button
                class="font-medium text-white p-2 border-solid bg-black rounded-md"
                @click="logOut"
              >
                <span class="hover:text-teal-500 hover:underline">Log out</span>
              </button>
            </li>
          </ul>
        </div>
        <!-- ESTO ERA UNA MEDIA QUERY DEL NAV
          <div class="hidden xl:block xl:w-1/3">
          <div class="flex items-center justify-end"></div>
        </div> -->
      </div>
    </nav>
  </section>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import MyRouter from "../components/MyRouter.vue";

export default {
  name: "SignOut",
  setup() {
    //create data / vars
    const router = useRouter();
    const errorMsg = ref(null);
    // Route Variables
    const route = "/auth";
    const text = "Sign Out";
    //Log out function
    const logOut = async () => {
      try {
        const { error } = await supabase.auth.signOut({});
        if (error) throw error;
        router.push("/auth");
      } catch (error) {
        console.log({ error });
      }
    };
    return { errorMsg, logOut };
  },
  components: { MyRouter },
};
</script>

<style scoped></style>
