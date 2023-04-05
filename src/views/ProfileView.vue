<script setup>

import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useAuthRepository } from "../composables/useAuthRepository";
import { useRestoRepository } from "../composables/useRestoRepository";
import Navbar from '../components/Navbar.vue';

const DataUser = JSON.parse(localStorage.getItem('user'));
const AuthRepository = useAuthRepository();

const isLoading = ref(true);
const profile = ref([]);

const fetchUserProfile = async () => {
    isLoading.value = true;
    try {
        const {data} = await AuthRepository.profile();
        profile.value = data;
    }catch (e) {
        console.error(e);
    }
    isLoading.value = false;
};

onMounted(() => {
  fetchUserProfile();
});

</script>


<template>
    <Navbar />
        <div class="min-h-screen flex flex-col items-center">
            <div class="flex flex-col items-center">
                <div class="w-[120px] relative mt-20">
                    <div v-if="profile.profile_picture" class="w-[130px] relative mt-6">
                        <img src="profile" alt="" class="rounded-full">
                    </div>
                    <div v-else class="w-[130px] relative mt-6">
                        <img
                        src="../../public/img-profile.jpg"
                        class="rounded-full"
                        alt=""
                        />
                    </div>
                </div>
                <div class="text-2xl mt-4 space-y-3 font-Poppins text-center">
                    <p class="font-bold">{{ DataUser.name }}</p>
                    <p>{{ profile.email }}</p>
                    <p v-if="profile.description">{{ profile.description }}</p>
                    <p v-else>No description</p>
                </div>
                <div class="border-b-4 pt-5 w-full border-gray-600 mx-[150px]"></div>
                <div class="p-8 space-x-10">
                    <router-link to="">
                        <button class="p-4 font-Poppins bg-[#abd1c6] rounded-xl">See resto</button>
                    </router-link>
                    <router-link to="">
                        <button class="p-4 font-Poppins bg-[#abd1c6] rounded-xl">edit resto</button>
                    </router-link>
                </div>
            </div>
        </div>
</template>
