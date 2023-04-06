<script setup>
import { useRestoRepository } from "@/composables"; 
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";
import Navbar from '../components/Navbar.vue';




const repository = useRestoRepository();
const route = useRoute();

const isLoading = ref(true);
const resto = ref({});
const fetchDetail = async () => {
  isLoading.value = true;

  try {
    const id = route.params.id;
    const { data } = await repository.show(id);
    resto.value = data;
  } catch (e) {
    console.log(e);
  }

  isLoading.value = false;
};
onMounted(() => fetchDetail());

const reviews = ref([]);
const fetchReviews = async () => {
  isLoading.value = true;
  try {
    const id = route.params.id;
    const { data } = await repository.reviews(id);
    reviews.value = data;
  } catch (e) {
    console.log(e);
  }
  isLoading.value = false;
};
onMounted(() => fetchReviews());
</script>

<template>
  <Navbar />
    <button class="p-4">
      <RouterLink
      :to="{ name: 'restos' }"
      class="inline-block p-2 px-6 hover:bg-[#7eb9a9] bg-[#4e8374] text-white rounded">
      Back
    </RouterLink>
  </button>
    <button class="p-4">
      <RouterLink
      :to="{ name: 'update' }"
      class="inline-block p-2 px-6  bg-blue-500 text-white rounded">
      Edit
    </RouterLink>
  </button>
    <div class="flex justify-around">
      <p class="font-Righteous text-3xl pt-16">.Restoku</p>
      <p class="font-Poppins text-3xl pt-16">This resto !</p>
    </div>
    <div class="border-b-4 pt-5 border-gray-600 mx-56"></div>
    <div class="p-7 flex justify-center">
      <div class="bg-[#abd1c6] ">
        <img
          src="../../public/img-2.jpg"
          class="object-contain h-96 w-[900px]"
          alt=""/>
        </div>
      </div>
        <BaseCard class="mt-4 text-center my-12">
          <template #title>{{ resto.name }}</template>
          {{ resto.description }}
        </BaseCard>
        <div class="grid grid-cols-12 grid-rows-3">
          <!-- Mengambil Beberapa Grid untuk dijadikan container -->
          <div class="col-span-full row-span-3 mx-10 my-10">
            <div class="container">
              <p class="uppercase font-bold text-center pt-1 text-xl font-Poppins">
                Review
              </p>
              <div class="border-b-4 pt-4 border-gray-600"></div>
            <!-- Container Khusus untuk 1 Barang pada Katalog -->
            <div class="flex flex-row flex-wrap justify-around mt-5">
              <div class="flex flex-col py-3 px-3 shadow-xl rounded-lg">
                <BaseCard v-for="review in reviews" :key="review.id" class="mt-4 text-center">
                  <template #title>{{ review.user.name }}</template>
                  {{ review.text }}  
                </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
