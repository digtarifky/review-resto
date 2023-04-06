<script setup>

import Navbar from '../components/Navbar.vue';
</script>

<template>
    <Navbar />
    <div class="p-28">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name Resto
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                            description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>    
                <!--<tbody v-for="resto in restos" :key="resto.id" > -->
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <!-- {{ resto.name }} -->
                        </th>
                        <td class="px-6 py-4">
                            <!-- {{ resto.address }} -->
                        </td>
                        <td class="px-6 py-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquam.
                        </td>
                        <td class="px-6 py-4">
                            <!-- v-if="resto.image" -->
                        </td>
                        <td class="px-6 py-4 space-x-6">
                            <router-link to="/update" class="font-medium bg-blue-600 text-white p-2 px-5 hover:bg-blue-700 rounded ">Edit</router-link>
                            <router-link to="" class="font-medium bg-yellow-400 text-white p-2 px-5 hover:bg-yellow-600 rounded ">Show</router-link>
                            <router-link to="" class="font-medium bg-red-600 text-white p-2 px-5 hover:bg-red-700 rounded ">Delete</router-link>
                        </td>
                    </tr>
                    <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lorem, ipsum dolor.
                        </th>
                        <td class="px-6 py-4">
                            Lorem, ipsum dolor.
                        </td>
                        <td class="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, labore?
                        </td>
                        <td class="px-6 py-4">
                            Lorem, ipsum dolor.
                        </td>
                        <td class="px-6 py-4 space-x-6">
                            <router-link to="" class="font-medium bg-blue-600 text-white p-2 px-5 hover:bg-blue-700 rounded ">Edit</router-link>
                            <router-link to="" class="font-medium bg-yellow-400 text-white p-2 px-5 hover:bg-yellow-600 rounded ">Show</router-link>
                            <router-link to="" class="font-medium bg-red-600 text-white p-2 px-5 hover:bg-red-700 rounded ">Delete</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>