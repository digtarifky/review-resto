<script>
</script>

<template>
    <div class="min-h-screen mx-auto ">
        <div class="bg-[#255755]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">.Restoku</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="/restos" class="hover:underline select-none font-Poppins">Home</RouterLink>
                    <RouterLink to="/create" class="hover:underline select-none font-Poppins">create</RouterLink>
                    <RouterLink to="" class="hover:underline select-none font-Poppins">Account</RouterLink>
                </ul>
            </nav>
        </div>
        <div class="bg-white min-h-screen flex flex-col items-center p-2">
            <div class="flex flex-col items-center">
                <div class="w-[120px] relative mt-20">
                    <div class="w-[130px] relative mt-6">
                        <img src="../../public/img-profile.jpg"
                        class="rounded-full" alt="" />
                    </div>
                </div>
                <div class="text-2xl mt-4 font-Poppins">
                    <p>Digta rifky</p>

                </div>
            </div>
        </div>
    </div>
</template>