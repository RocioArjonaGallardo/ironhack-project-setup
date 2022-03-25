<template>
  <section class="flex justify-center">
    <div class="container w-3/5 px-4 md:mx-auto">
      <!--form header -->
      <div class="max-w-sm mx-auto">
        <div class="m-8 text-center">
          <h1 class="text-3xl md:text-2xl font-bold font-rocioTitle">
            Sign Up
          </h1>
        </div>
        <!-- Error msg -->
        <div v-if="errorMsg" class="m-5 p-4 rounded-mb bg-slate-100">
          <p class="text-red-500">{{ errorMsg }}</p>
        </div>
        <!-- Sign up form -->
        <form
          @submit.prevent="register"
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
              type="text"
              placeholder="Password"
              id="password"
              v-model="password"
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-teal-600 font-bold font-rocioBody"
              for="confirmPassword"
              >Repeat Password</label
            >
            <input
              class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="text"
              placeholder="Repeat Password"
              id="confirmPassword"
              v-model="confirmPassword"
            />
          </div>
          <!--button -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="mt-3 py-2 px-6 rounded-md self-start text-sm text-white bg-slate-900 font-rocioBody font-bold duration-200 border-solid border-2 border-transparent hover:bg-teal-600 hover:text-black"
            >
              Sign Up
            </button>
          </div>
          <!-- router link to sign in -->
          <router-link
            class="text-xs font-medium font-rocioBody mt-4"
            :to="'/auth/sign-in'"
            >Already have an account?
            <span
              class="text-xs font-bold font-rocioBody text-teal-600 hover:text-black hover:underline"
              >Sign In</span
            >
          </router-link>
          <!-- <p>
            <span>Have an account?</span>
            <PersonalRouter
              :route="route"
              :routeText="routeText"
              class="text-xs font-bold font-rocioBody text-teal-600 hover:text-black hover:underline"
            />
          </p> -->
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

import { storeToRefs } from "pinia";
export default {
  name: "SignUp",
  setup() {
    //create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    // Route Variables
    const route = "/auth";
    const routeText = "Sign In";

    //Sign up function
    const register = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push("/");
        } catch (error) {
          console.log({ error });
          errorMsg.value = error.message;
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }
      } else {
        errorMsg.value = "Error: Password do not match";
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };

    return { email, password, confirmPassword, errorMsg, register };
  },
};
</script>

<style></style>
