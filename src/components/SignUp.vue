
   
<template>
<section class="py-24 md:py-32 bg-white background-position: center;">
  <div class="container px-4 mx-auto">
    <div class="max-w-sm mx-auto">
      <div class="mb-6 text-center">
        <!-- <a class="inline-block mb-6" href="#">
          <img class="h-16" src="flex-ui-assets/logos/flex-circle-green.svg" alt="">
        </a> -->
        <h3 class="mb-4 text-2xl md:text-3xl font-bold">Sign Up</h3>
      </div>
      <form action="">
        <div class="mb-6">
          <label class="block mb-2 text-coolGray-800 font-medium" for="">Email</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="Email">
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-coolGray-800 font-medium" for="">Password</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="Password">
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-coolGray-800 font-medium" for="">Repeat Password</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="Repeat Password">
        </div>
        <div class="flex flex-wrap items-center justify-between mb-6">
          <div class="w-full md:w-1/2">
            <label class="relative inline-flex items-center">
              <input class="form-checkbox appearance-none" type="checkbox">
              <img class="absolute top-1/2 transform -translate-y-1/2 left-0" src="flex-ui-assets/elements/sign-up/checkbox-icon.svg" alt="">
              
            </label>
          </div>
        </div>
        <a class="inline-block py-2 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-black hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl shadow-sm" href="#">Register</a>
        <p class="text-center">
          <span class="text-xs font-medium">Have an account already? </span>
          <a class="inline-block text-xs font-medium text-teal-600 hover:text-green-600 hover:underline" href="./views/SignIn.vue"> Sign In</a>
        </p>
      </form>
    </div>
  </div>
</section>
</template>