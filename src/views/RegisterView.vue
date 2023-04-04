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
  device_name: 'browser',
});

const isLoggingIn = ref(false);
const onSubmit = async () => {
  isLoggingIn.value = true;
  try {
    const { data } = await repository.login(credentials);
    if (data) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.replace({ name: "restos" });
    }
  } catch (e) {
    console.error(e);
  }
  isLoggingIn.value = false;
};

</script>

<template>
    <!-- <main class="min-h-screen flex justify-center mx-auto py-14 px-16 bg-gray-300">
        <section class=" bg-white w-9/12 shadow-xl rounded-xl">
            <form action="" class="p-28">
            <div class="mb-4">
            <p class="text-center text-3xl">Register</p>
            <label for="name" class="block mb-2">Name</label>
            <input 
            class="border p-2 w-full bg-gray-50 rounded"
            type="name"
            placeholder="Your Name"
            required>
        </div>
        <div class="mb-4">
            <label for="password" class="block mb-2">Email</label>
            <input 
            class="border p-2 w-full bg-gray-50 rounded"
            type="email"
            placeholder="Email"
            required>
        </div>
        <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input 
            class="border p-2 w-full bg-gray-50 rounded"
            type="Password"
            placeholder="Password"
            required>
        </div>
        <button type="submit" class="bg-blue-600 text-white p-2 w-full block 
        hover:bg-blue-800 rounded transition-colors duration-200"><router-link to="/">Register</router-link></button>
        <p class="text-slate-600 pt-2">You was register 
        <router-link to="/" 
        class="text-blue-500 hover:text-blue-900 hover:font-bold transition-colors duration-200">
        Login</router-link> here</p>
            </form>
        </section>
    </main> -->

    <main class="grid grid-cols-12 gap-4 min-h-screen">
    <section class="col-span-6 bg-white h-full shadow-xl">
        <form method="post" :action="route.path" class="p-32" @submit.prevent="onSubmit">
            <div class="mb-4">
                <p class="text-center mb-5 font-bold text-2xl">Register</p>
                <label for="email" class="block mb-2">name</label>
                <input 
                v-model="credentials.name"
                type="email" 
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
            <button type="submit" class="bg-blue-600 text-white p-2 w-full block 
            hover:bg-blue-800 rounded transition-colors duration-200">Masuk</button>
            <p class="pt-2 text-slate-600">Already have an account ?
            <router-link to="/" class="text-blue-500 hover:text-blue-900 hover:font-bold transition-colors duration-200">Login</router-link> here</p>
        </form>
    </section>
    </main>
</template>