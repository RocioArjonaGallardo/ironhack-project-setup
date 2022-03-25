<template>
  <section class="flex justify-center">
    <div class="container w-3/5 px-4 md:mx-auto">
      <!--form header -->
      <div class="max-w-sm mx-auto">
        <div class="m-8 text-center">
          <h1 class="text-3xl md:text-2xl font-bold font-rocioTitle">
            Sign In
          </h1>
        </div>
        <!-- Error msg -->
        <div v-if="errorMsg" class="m-5 p-4 rounded-mb bg-slate-100">
          <p class="text-red-500">{{ errorMsg }}</p>
        </div>
        <!-- Sign in form -->
        <form
          @submit.prevent="login"
          class="p-8 flex flex-col rounded-md shadow-md bg-light-grey"
        >
          <div class="mb-4">
            <label
              class="block mb-2 text-teal-600 font-bold font-rocioBody"
              for="email"
              >Email</label
            >
            <input
              class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="text"
              placeholder="Email"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-teal-600 font-bold font-rocioBody"
              for="password"
              >Password</label
            >
            <input
              class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="password"
              placeholder="Password"
              id="password"
              v-model="password"
            />
          </div>

          <!--button -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="mt-3 py-2 px-6 rounded-md self-start text-sm text-white bg-slate-900 font-rocioBody font-bold duration-200 border-solid border-2 border-transparent hover:bg-teal-600 hover:text-black"
            >
              Sign In
            </button>
          </div>
          <!-- router link to sign in -->
          <router-link
            class="text-xs font-medium font-rocioBody mt-4"
            :to="'/auth'"
            >Don't have an account?
            <span
              class="text-xs font-bold font-rocioBody text-teal-600 hover:text-black hover:underline"
              >Sign Up</span
            >
          </router-link>
          <!-- <p>
            <span>Don't have an account?</span>
            <MyRouter
              class="text-xs font-bold font-rocioBody text-teal-600 hover:text-black hover:underline"
              :route="route"
              :routeText="routeText"
            />
          </p> -->
          <!-- <MyRouter :route="route" :text="text" /> -->
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import MyRouter from "../components/MyRouter.vue";

//create data / vars
const router = useRouter();
const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);
// Route Variables
const route = "/auth";
const text = "Sign Up";
//Sign in function
const login = async () => {
  try {
    const { error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/");
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
