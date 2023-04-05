<script setup>

import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthRepository } from '../composables/useAuthRepository';

const userData = JSON.parse(localStorage.getItem('user'));
    
const repository_auth = useAuthRepository();
const router = useRouter()

const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        repository_auth.logout();
        router.replace({name: 'login'})
    }

const excerpt = (text, maxLength = 10, indicator = "...") => {
    let textCopy = text;
    
    if (textCopy.length > maxLength) {
        textCopy = textCopy.substring(0, maxLength) + indicator;
    }
    return textCopy
}
</script>

<template>
    <div class="mx-auto">
        <div class="bg-[#255755]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">.Restoku</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="/restos" class="select-none font-Poppins hover:text-white duration-500">Home</RouterLink>
                    <RouterLink to="/profile" class="select-none font-Poppins hover:text-white duration-500">Profile</RouterLink>
                    <RouterLink to="/create" class="select-none font-Poppins hover:text-white duration-500">Create</RouterLink>
                    <button @click="logout" class="select-none font-Poppins hover:text-white duration-500 pb-3">
                        Logout
                    </button>
                </ul>
            </nav>
        </div>
    </div>
</template>