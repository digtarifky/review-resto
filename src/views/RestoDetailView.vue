<script setup>
import { useRestoRepository } from "@/composables"; 
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";



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
  <div class="min-h-screen mx-auto ">
        <div class="bg-[#255755]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">.Restoku</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="/restos" class="hover:underline select-none font-Poppins">Home</RouterLink>
                    <RouterLink to="/profile" class="hover:underline select-none font-Poppins">Account</RouterLink>
                </ul>
            </nav>
            <RouterLink :to="{ name: 'restos' }" 
            class="inline-block p-2 px-6 bg-blue-600
          text-white rounded hover:bg-blue-800">
            Back
            </RouterLink>
        </div>
        <BaseContainer>
          <BaseCard class="mt-4 bg-red-600 text-white text-center mx-96 my-6">
            <template #title>Resto</template>
          </BaseCard>
          
          <BaseCard class="mt-4 text-center my-12">
            <template #title>{{ resto.name }}</template>
            {{ resto.description }}
          </BaseCard>
          
          <BaseCard class="mt-4 bg-red-600 text-white text-center mx-44 my-6">
            <template #title>Reviews</template>
          </BaseCard>
          
          <BaseCard v-for="review in reviews" :key="review.id" class="mt-4 text-center">
            <template #title>{{ review.user.name }}</template>
            {{ review.text }}  
          </BaseCard>
          
        </BaseContainer>
  </div>
</template>