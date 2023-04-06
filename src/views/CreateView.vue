<script setup>
import Navbar from '../components/Navbar.vue';
import { useRestoRepository  } from '../composables/useRestoRepository';
import { reactive } from "vue";
import { useRoute, useRouter } from 'vue-router';

const repository = useRestoRepository();
const route = useRoute();
const router = useRouter();

const value = reactive({
    name : "",
    description : "",
    address : "",
});


const onSubmit = async () => {
    try {
        await repository.store(value);
        router.replace({name: 'restos'})
    } catch (e) {
        console.log(e)
    }
}
 



</script>

<template>
    <Navbar />
        <section class="col-span-full row-span-3 mx-10">
            <div class="min-h-screen p-44 pt-12">
                <div class=" bg-white h-full shadow-xl rounded-2xl">
                    <p class="text-center pt-16 font-bold text-3xl">create</p>
                    <form :action="route.path" method="post" @submit.prevent="onSubmit" class="p-12">
                        <div class="p-2 ml-9">
                            <div>
                                <label for="" class="mr-14 font-semibold text-xl">Resto Name</label>
                                <input type="text" v-model="value.name"
                                class=" border-2 bg-gray-50 rounded-lg w-full p-2 outline-none ">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Address</label>
                                <input type="text" v-model="value.address"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none">
                            </div>
                            <div class="pt-7 pb-7">
                                <label for="" class="mr-7 font-semibold text-xl">description</label>
                                <input type="text" v-model="value.description"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 pb-16 outline-none">
                            </div>
                            <button type="submit" class="bg-blue-600 text-white p-2 ml-44 inline-block w-96
                            hover:bg-blue-800 rounded transition-colors duration-200">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</template>