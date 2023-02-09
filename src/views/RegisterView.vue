<script setup>

import { reactive,ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthRepository } from "@/composables";

const repository = useAuthRepository();
const route = useRoute(); 
const router = useRouter();

const credentials = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation:'',
});

const isLoggingIn = ref(false);
const onSubmit = async() => {
  isLoggingIn.value = true;

  try {
    const {data} = await repository.register(credentials);
    if (data) {      
      router.replace({name: "login"}); 
    }
  } catch (e) {
    console.error(e)
  }

  isLoggingIn.value = false
};
</script>

<template>
    <main class="grid grid-cols-12 gap-4 min-h-screen">
      <section class="col-span-6 bg-white h-full shadow-xl">
        <form method="post" :action="route.path" class="p-40" @submit.prevent="onSubmit">
        <p class="text-center mb-5 font-bold text-2xl">Register</p>
          <div class="mb-4">
            <label for="name" class="block mb-2">Name</label>
          <input
          v-model="credentials.name" 
           type="text" 
           placeholder="Name"
           required class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
        </div>
        <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
          <input
          v-model="credentials.email" 
           type="email" 
           placeholder="your@email.com"
           required class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input 
           v-model="credentials.password"
           type="password"
           required
           class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password confirmation</label>
          <input 
           v-model="credentials.password_confirmation"
           type="password"
           required
           class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
        </div>
          <button type="submit" class="bg-blue-600 text-white p-2 w-full block 
          hover:bg-blue-800 rounded transition-colors duration-200">register</button>
          <p class="text-gray-500 p-3">You have account ? <router-link to="/" class="text-blue-600">Login</router-link> here!</p>
      </form>
      </section>
    </main>
  </template>
  