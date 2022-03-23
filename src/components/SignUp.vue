
   
<template>
<section class="bg-white flex justify-center">
  <div class="container w-3/5 px-4 md:mx-auto">
    <div class="max-w-sm mx-auto">
      <div class="mb-6 text-center">
        <!-- <a class="inline-block mb-6" href="#">
          <img class="h-16" src="flex-ui-assets/logos/flex-circle-green.svg" alt="">
        </a> -->
        <h3 class="mt-8 text-2xl md:text-2xl font-bold font-rocioTitle">Sign Up</h3>
      </div>
      <form action="">
        <div class="mb-6">
          <label class="block mb-2 text-coolGray-800 font-medium font-rocioBody" for="">Email</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="Email">
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-coolGray-800 font-medium font-rocioBody" for="">Password</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="Password">
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-coolGray-800 font-medium font-rocioBody" for="">Repeat Password</label>
          <input class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="Repeat Password">
        </div>
        <div class="flex flex-wrap items-center justify-between mb-6">
          <div class="w-full md:w-1/2">
          </div>
        </div>
        <!-- <button class="inline-block py-2 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-black hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl shadow-sm" href="#">Register</button> -->
        
      </form>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>

</style>