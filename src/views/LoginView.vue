<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthRepository } from "@/composables";

const repository = useAuthRepository();
const route = useRoute();
const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
  device_name: "browser",
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
  <main class="grid grid-cols-12 gap-4 min-h-screen">
    <section class="col-span-6 bg-white h-full shadow-xl">
      <form
        method="post"
        :action="route.path"
        class="p-32"
        @submit.prevent="onSubmit"
      >
        <div class="mb-4">
          <p class="text-center mb-5 font-bold text-2xl">Login</p>
          <label for="email" class="block mb-2">Email</label>
          <input
            v-model="credentials.email"
            type="email"
            placeholder="someone@email.com"
            required
            class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input
            v-model="credentials.password"
            type="password"
            required
            class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-600 text-white p-2 w-full block hover:bg-blue-800 rounded transition-colors duration-200"
        >
          Masuk
        </button>
        <p class="pt-2 text-slate-600">
          You haven't Account ?
          <router-link
            to="/register"
            class="text-blue-500 hover:text-blue-900 hover:font-bold transition-colors duration-200"
            >Register</router-link
          >
        </p>
      </form>
    </section>
  </main>
</template>
