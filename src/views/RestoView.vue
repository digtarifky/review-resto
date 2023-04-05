<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import BaseCard from "../components/BaseCard.vue"
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
    <div class="min-h-screen mx-auto ">
        <div class="bg-[#255755]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">.Restoku</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="" class="select-none font-Poppins hover:text-white duration-500">Home</RouterLink>
                    <RouterLink to="/profile" class="select-none font-Poppins hover:text-white duration-500">Account</RouterLink>
                </ul>
            </nav>
        </div>
        <div class="flex justify-around">
            <p class="font-Poppins text-3xl pt-16">Welcome to <span class="font-Righteous">.Restoku</span></p>
        </div>
        <div class="border-b-4 pt-5 border-gray-600 mx-[450px]"></div>
        <div class="border-b-4 pt-5 border-gray-600 mx-56"></div>
        <div class="p-12 flex justify-center">
            <div class="bg-[#abd1c6] rounded "> 
                <img src="../../public/img-2.jpg"
                class="object-contain h-96 w-[900px]" alt="">
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
    </div>
</template>