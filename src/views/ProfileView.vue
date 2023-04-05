<script></script>

<template>
  <div class="min-h-screen mx-auto">
        <div class="bg-[#255755]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">
                .Restoku
                </p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                <RouterLink
                    to="/restos"
                    class="select-none font-Poppins hover:text-white duration-500"
                    >Home</RouterLink>
                <RouterLink
                    to="/create"
                    class="select-none font-Poppins hover:text-white duration-500"
                    >create</RouterLink>
                <RouterLink to="" class="select-none font-Poppins"
                    >Account</RouterLink>
                </ul>
            </nav>
        </div>
        <div class="min-h-screen flex flex-col items-center">
            <div class="flex flex-col items-center">
                <div class="w-[120px] relative mt-20">
                    <div class="w-[130px] relative mt-6">
                        <img
                        src="../../public/img-profile.jpg"
                        class="rounded-full"
                        alt=""
                        />
                    </div>
                </div>
                <div class="text-2xl mt-4 font-Poppins">
                <p>Digta rifky</p>
                </div>
            </div>
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
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Lorem, ipsum dolor.
                            </th>
                            <td class="px-6 py-4">
                                Lorem, ipsum dolor.
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquam.
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
            
        </div>
    </div>
</template>
