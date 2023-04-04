<script setup>
</script>

<template>
    <main class="grid grid-cols-12 gap-rows-3 bg-[#255755]">
        <div class="bg-yellow-200">
            <p class="font-Righteous text-4xl p-5">.Restoku</p>
            <div class="text-right bg-white">
                <p class="font-semibold text-2xl">Home</p>
            </div>
        </div>
    </main>
        <section class="col-span-full row-span-3 mx-10">
            <div class="min-h-screen p-44 pt-12">
                <div class=" bg-white h-full shadow-xl">
                    <p class="text-center pt-16 font-bold text-3xl">Update</p>
                    <form action="" class="p-12">
                        <div class="p-2 ml-9">
                            <div>
                                <label for="" class="mr-14 font-semibold text-xl">Resto Name</label>
                                <input type="text"
                                class=" border-2 bg-gray-50 rounded-lg w-full p-2 outline-none ">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Address</label>
                                <input type="text"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Add Resto Photo</label>
                                <input type="file"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none">
                            </div>
                            <div class="pt-7 pb-7">
                                <label for="" class="mr-7 font-semibold text-xl">description</label>
                                <input type="text"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 pb-16 outline-none">
                            </div>
                            <button type="submit" class="bg-blue-600 text-white p-2 ml-44 inline-block w-96
                            hover:bg-blue-800 rounded transition-colors duration-200">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</template>