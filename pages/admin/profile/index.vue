<template>
  <MainLayout>
    <div
      class="w-full px-10 flex md:flex-row h-full flex-col justify-center space-y-2 md:space-y-0 py-5 items-center md:space-x-6"
    >
      <div v-if="$generalStore.isLoading" role="status">
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
      <div
        v-if="!$generalStore.isLoading"
        class="bg-white w-full md:w-[300px] h-min md:h-[400px] flex flex-col space-y-7 items-center justify-center rounded-lg border border-[#E9EDF5] p-4"
      >
        <img
          class="md:w-40 md:h-40 w-[100px] h-[100px] rounded-full self-center cursor-pointer"
          :src="imageUrl + $profileStore.data.foto"
          alt="Rounded avatar"
        />
        <div
          :class="{
            'bg-[#E4262C] fill-white text-white': activeTab === 1,
          }"
          @click="setActiveTab(1)"
          class="items-center cursor-pointer justify-normal transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Pengaturan />
          <p class="block sm:text-[16px] md:text-lg">Pengaturan Akun</p>
        </div>
        <div
          :class="{
            'bg-[#E4262C] fill-white text-white': activeTab === 2,
          }"
          @click="setActiveTab(2)"
          class="items-center justify-normal cursor-pointer transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Keamanan />
          <p class="block sm:text-[16px] md:text-lg">Keamanan</p>
        </div>
      </div>
      <div
        v-if="activeTab === 1 && !$generalStore.isLoading"
        class="bg-white w-full md:w-[444px] h-full flex flex-col md:h-[400px] rounded-lg border border-[#E9EDF5] p-4"
      >
        <div class="flex flex-col space-y-2">
          <div>
            <h3 class="mb-1">Nama</h3>
            <label for="nama" class="sr-only">Nama</label>
            <input
              required
              type="text"
              name="nama"
              id="nama"
              class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Masukkan Nama"
              v-model="payload.nama_admin"
            />
          </div>
          <div>
            <h3 class="mb-1">No Telp</h3>
            <label for="telp" class="sr-only">No Telp</label>
            <input
              required
              type="text"
              name="telp"
              id="telp"
              class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Masukkan Telephone"
              v-model="payload.no_tlp"
            />
          </div>
          <div>
            <h3 class="mb-1">Email</h3>
            <label for="email" class="sr-only">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Masukkan Email"
              v-model="payload.email"
            />
          </div>
          <div>
            <h3 class="mb-1">Jabatan</h3>
            <label for="jabatan" class="sr-only">Jabatan</label>
            <input
              required
              type="text"
              name="jabatan"
              id="jabatan"
              class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Masukkan Jabatan"
              v-model="payload.role"
            />
          </div>
        </div>
        <button
          @click="editProfil(1)"
          type="button"
          class="place-self-end bg-[#E4262C] text-white py-2 px-6 rounded-lg mt-10"
        >
          Save
        </button>
      </div>
      <div
        v-if="activeTab === 2 && !$generalStore.isLoading"
        class="bg-white w-full md:w-[444px] h-full flex flex-col justify-center md:h-[400px] overflow-y-auto rounded-lg border border-[#E9EDF5] p-8"
      >
        <h3 class="mb-1">Sandi</h3>
        <label for="password" class="sr-only">Password</label>
        <div class="relative">
          <input
            required
            :type="showPassword ? 'text' : 'password'"
            name="password"
            id="password"
            class="block w-full px-3 py-1 text-base text-neutral-600 bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            placeholder="Masukkan Sandi"
            v-model="payload.password"
          />
          <button
            type="button"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            @click="showPassword = !showPassword"
          >
            <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
          </button>
        </div>
        <button
          @click="editProfil(2)"
          type="button"
          class="place-self-end bg-[#E4262C] text-white py-2 px-6 rounded-lg mt-10"
        >
          Save
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Keamanan from "~/assets/icon/MdOutlinePassword.svg?component";
import Pengaturan from "~/assets/icon/user-settings-outline.svg?component";

const activeTab = ref(1);
const { $profileStore } = useNuxtApp();
const { imageUrl } = useRuntimeConfig().public;

const payload = reactive({
  nama_admin: $profileStore.data.nama_admin,
  no_tlp: $profileStore.data.no_tlp,
  email: $profileStore.data.email,
  role: $profileStore.data.role,
  password: null,
});

const showPassword = ref(false);

onMounted(async () => {
  try {
    await $profileStore.getUserLogin();
  } catch (error) {
    console.log(error);
  }
});

const editProfil = async (type) => {
  await $profileStore.editProfile(payload, type);
  await $profileStore.getUserLogin();
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
