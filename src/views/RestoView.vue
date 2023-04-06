<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import BaseCard from "../components/BaseCard.vue"
import BaseContainer from "../components/BaseContainer.vue";
import Navbar from '../components/Navbar.vue';

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
    <Navbar />
        <div class="flex justify-around pt-28">
            <p class="font-Poppins text-3xl">Hallo EveryOne ^_^</p>
        </div>
        <div class="border-b-4 pt-5 border-gray-600 mx-[450px]"></div>
        <div class="border-b-4 pt-5 border-gray-600 mx-56"></div>
        <div class="bg-[#abd1c6] py-8 pl-6 pr-10 flex justify-center rounded-xl mt-5 mx-[210px]">
            <div>
                <p class="font-medium text-4xl">Welcome to</p>
                <p class="font-Righteous text-8xl">Restoku</p>
                <p class="w-[500px] font-serif">looking for restaurants with delicious and cheap food is not an easy and fast. So we make it easy with the presence of Restoku. looking for delicious and cheap food, easier with .Restoku</p>
            </div>
            <div>
                <img src="../../public/img-2.jpg"
                class="object-contain rounded-3xl h-[250px] w-96" alt="">
            </div>
        </div>
        <div class="border-b-4 pt-3 border-gray-600 mx-56"></div>
        <BaseContainer>
            <div class="grid grid-cols-12 gap-4 py-4">
                <div v-for="resto in restos" :key="resto.id" class="col-span-4">
                    <BaseCard :to="{ name: 'restos-show', params: {id: resto.id} }">
                        <template #title>{{ resto.name }}</template>
                            {{ excerpt(resto.description,40) }}                               
                    </BaseCard>
                </div>
            </div>
        </BaseContainer>
</template>