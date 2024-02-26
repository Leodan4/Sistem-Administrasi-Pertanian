<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="fixed sm:hidden top-3 left-5 z-20 flex p-2 items-center max-w-min hover:bg-red-300 justify-center"
  >
    <svg
      class="w-6 h-6 font-bold fill-white"
      fill="#fff"
      aria-hidden="true"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>
  <aside
    id="default-sidebar"
    aria-label="Sidebar"
    class="bg-white min-h-screen max-w-[250px] overflow-y-auto pt-20 flex transition-transform -translate-x-full sm:translate-x-0 rounded-r-xl z-40 fixed top-0 left-0 flex-col"
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
    <div class="bg-gray-100 w-full h-20 flex px-4 items-center">
      <div class="flex items-center w-full space-x-2 justify-center">
        <img
          @click="router.push('/admin/profile')"
          class="w-12 h-12 rounded-full self-center cursor-pointer"
          src="/dashboard/test_image.png"
          alt="Rounded
        avatar"
        />
        <div class="flex flex-col items-start justify-center">
          <button @click="router.push('/admin/profile')" class="text-sm">
            {{ $profileStore.data.nama_admin }}
          </button>
        </div>
        <div class="cursor-pointer flex pl-4">
          <LogoutIcon />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import LogoutIcon from "../../assets/icon/logout.svg?component";
const router = useRouter();
import { initFlowbite } from "flowbite";

const { $profileStore } = useNuxtApp();

onMounted(async () => {
  await $profileStore.getUserLogin();
  initFlowbite();
});
</script>
