<template>
  <div
    class="bg-white w-[18%] h-screen pt-20 rounded-r-xl z-10 relative top-0 flex flex-col"
  >
    <div class="flex justify-center font-bold text-xl mb-7">Logo</div>
    <div class="flex flex-col space-y-4 flex-grow">
      <MenuItem menuText="Beranda" icon="Home" navigate="/admin/dashboard" />
      <MenuItem
        menuText="Guru & Karyawan"
        icon="Users"
        navigate="/admin/karyawan"
      />
      <MenuItem menuText="Siswa" icon="Student" navigate="/admin/siswa" />
      <MenuItem
        menuText="Layanan Kirim"
        icon="BsBoxSeam"
        navigate="/admin/layanan"
      />
    </div>
    <div class="bg-gray-100 h-20 flex px-4 items-center">
      <div class="flex items-center w-full space-x-2 justify-normal">
        <NuxtImg
          class="w-12 h-12 rounded-full self-center"
          src="/dashboard/test_image.png"
          alt="Rounded avatar"
        />
        <div class="flex flex-col items-start justify-center">
          <h4 class="text-sm">Atsal Faiz</h4>
          <p class="text-sm">Atsalfaiz@gmail.com</p>
        </div>
        <div class="cursor-pointer flex pl-4"><LogoutIcon /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import LogoutIcon from "../../assets/icon/logout.svg?component";
</script>
