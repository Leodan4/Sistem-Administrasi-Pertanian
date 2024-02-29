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
          :class="{ 'opacity-0': loadingImage }"
          @load="handleImageLoad"
          @error="handleImageError"
          :src="imageUrl + $profileStore.data.foto"
          alt="Rounded
        avatar"
        />
        <div v-if="loadingImage" role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <div class="flex flex-col items-start justify-center">
          <button @click="router.push('/admin/profile')" class="text-sm">
            {{ $profileStore.data.nama_admin }}
          </button>
        </div>
        <div class="cursor-pointer flex pl-4" @click="logout">
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
const { imageUrl } = useRuntimeConfig().public;

const { $profileStore } = useNuxtApp();

const loadingImage = ref(true);

const handleImageLoad = () => {
  // Image has loaded
  loadingImage.value = false;
};

const handleImageError = () => {
  // Image failed to load
  loadingImage.value = false;
  // You can handle the error here, e.g., show a placeholder image or an error message.
};
const logout = () => {
  router.push("/admin/login");
  $profileStore.logout();
};
onMounted(async () => {
  initFlowbite();
});
</script>
