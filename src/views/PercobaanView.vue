<script setup></script>

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
            class="select-none font-Poppins"
            >Home</RouterLink
          >
          <RouterLink
            to="/profile"
            class="select-none font-Poppins"
            >Account</RouterLink
          >
        </ul>
      </nav>
      <!-- <RouterLink
        :to="{ name: 'restos' }"
        class="inline-block p-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Back
      </RouterLink> -->
    </div>
    <div class="flex justify-around">
      <p class="font-Righteous text-3xl pt-16">.Restoku</p>
      <p class="font-Poppins text-3xl pt-16">This resto !</p>
    </div>
    <div class="border-b-4 pt-5 border-gray-600 mx-56"></div>
    <div class="p-7 flex justify-center">
      <div class="bg-[#abd1c6] rounded">
        <img
          src="../../public/img-2.jpg"
          class="object-contain h-96 w-[900px]"
          alt=""
        />
      </div>
    </div>
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
              <a href="">
                <img src="../../public/image-1.jpg" class="w-44 rounded-lg" />
                <p class="w-44 truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos incidunt hic facilis sequi, atque voluptates
                  officia odit rerum repellendus voluptate beatae doloribus eum
                  architecto eaque aspernatur ex rem. Adipisci, doloribus.
                </p>
                <button
                  class="w-44 truncate p-1 my-3 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Lihat
                </button>
              </a>
            </div>
            <div class="flex flex-col py-3 px-3 shadow-xl rounded-lg">
              <a href="">
                <img src="../../public/image-1.jpg" class="w-44 rounded-lg" />
                <p class="w-44 truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos incidunt hic facilis sequi, atque voluptates
                  officia odit rerum repellendus voluptate beatae doloribus eum
                  architecto eaque aspernatur ex rem. Adipisci, doloribus.
                </p>
                <button
                  class="w-44 truncate p-1 my-3 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Lihat
                </button>
              </a>
            </div>
            <div class="flex flex-col py-3 px-3 shadow-xl rounded-lg">
              <a href="">
                <img src="../../public/image-1.jpg" class="w-44 rounded-lg" />
                <p class="w-44 truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos incidunt hic facilis sequi, atque voluptates
                  officia odit rerum repellendus voluptate beatae doloribus eum
                  architecto eaque aspernatur ex rem. Adipisci, doloribus.
                </p>
                <button
                  class="w-44 truncate p-1 my-3 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Lihat
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
