<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import BaseContainer from "../components/BaseContainer.vue";

const repository = useRestoRepository();

const isLoading = ref(true);
const restos = ref([]);
const fetchRestos = async () => {
    isLoading.value = true;

    try {
        const { data } = await repository.index();
        restos.value = data;
    }   catch (e) {
        console.error(e);
    }

    isLoading.value = false;
};
onMounted(() => fetchRestos());

const excerpt = (text, maxLenght = 10, indicator = "...") => {
    let textCopy = text;

    if (textCopy.legth > maxLenght) {
        textCopy = textCopy.substring(0, maxLenght) + indicator;
    }

    return textCopy;
}
</script>

<template>
    <main class="grid grid-cols-12 gap-rows-3 bg-[#255755]">
        <section class="col-span-full row-span-3 mx-10">
            <div class="text-right">
                <p class="font-Righteous mr-96 text-4xl inline-block text-left pt-2">.Restoku</p>
                <router-link to="/create" 
                class="inline-block p-2 my-8 px-6 bg-green-600 
                text-white rounded hover:bg-green-700 mr-8">Create</router-link> 
            </div>
        </section>
    </main>
    <div class="py-8">
        <div class="bg-yellow-200 p-20">
            <img src="../../public/image-1.jpg" alt=""
            class="">
        </div>
    </div>
    <BaseContainer>
        <div class="grid grid-cols-12 gap-4 py-4">
            <div v-for="resto in restos" :key="resto.id" class="col-span-4">
                <!-- Card -->
                <RouterLink :to="{ name: 'restos-show', params: { id: resto.id } }" 
                class="block bg-white shadow-md p-4 rounded select-none">
                    <h1 class="text-lg font-bold capitalize">{{ resto.name }}</h1>
                    <p class="text-gray-500">{{ excerpt(resto.description, 40) }}</p>
                </RouterLink>
            </div>
        </div>
    </BaseContainer>
</template>