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
const onSubmit = async () => {
  isLoggingIn.value = true;
  try {
    repository.register(credentials);

    router.replace({name: 'login'})
  } 
  catch (e) {
    console.error(e);
  }
  isLoggingIn.value = false;
};

</script>

<template>
    <main class="grid grid-cols-12 gap-4 min-h-screen">
    <section class="col-span-6 bg-white h-full shadow-xl">
        <form method="post" :action="route.path" class="p-32" @submit.prevent="onSubmit">
            <div class="mb-4">
                <p class="text-center mb-5 font-bold text-2xl">Register</p>
                <label for="name" class="block mb-2">name</label>
                <input 
                v-model="credentials.name"
                type="text" 
                placeholder="Name"
                required 
                class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-2">Email</label>
                <input 
                v-model="credentials.email"
                type="email" 
                placeholder="Email"
                required 
                class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
            </div>
            <div class="mb-4">
                <label for="password" class="block mb-2">Password</label>
                <input 
                v-model="credentials.password"
                type="password"
                placeholder="password"
                required
                class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
            </div>
            <div class="mb-4">
                <label for="confirmed_password" class="block mb-2">Confirm Password</label>
                <input 
                v-model="credentials.password_confirmation"
                type="password"
                placeholder="password"
                required
                class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
            </div>
            <button type="submit" class="bg-blue-600 text-white p-2 w-full block 
            hover:bg-blue-800 rounded transition-colors duration-200">Buat</button>
            <p class="pt-2 text-slate-600">Already have an account ?
            <router-link to="/" class="text-blue-500 hover:text-blue-900 hover:font-bold transition-colors duration-200">Login</router-link> here</p>
        </form>
    </section>
    </main>
</template>