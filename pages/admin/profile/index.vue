<template>
  <MainLayout>
    <div
      class="w-full h-full px-10 flex md:flex-row max-h-full overflow-y-auto flex-col justify-center space-y-2 md:space-y-0 py-5 items-center md:space-x-6"
    >
      <div
        class="bg-white w-full md:w-[300px] h-full md:h-[400px] flex flex-col space-y-7 items-center justify-center rounded-lg border border-[#E9EDF5] p-4"
      >
        <NuxtImg
          class="md:w-40 md:h-40 w-[100px] h-[100px] rounded-full self-center cursor-pointer"
          src="/assets/bg-login.png"
          alt="Rounded
        avatar"
        />
        <div
          class="items-center cursor-pointer justify-normal transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Pengaturan />
          <p class="block sm:text-[16px] md:text-lg">Pengaturan Akun</p>
        </div>
        <div
          class="items-center justify-normal cursor-pointer transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Keamanan />
          <p class="block sm:text-[16px] md:text-lg">Keamanan</p>
        </div>
      </div>
      <div
        class="bg-white w-full md:w-[444px] h-full md:h-[400px] rounded-lg border border-[#E9EDF5] p-4"
      ></div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Keamanan from "~/assets/icon/MdOutlinePassword.svg?component";
import Pengaturan from "~/assets/icon/user-settings-outline.svg?component";
</script>
