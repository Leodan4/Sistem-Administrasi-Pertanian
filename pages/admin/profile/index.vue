<template>
  <MainLayout>
    <div
      class="w-full px-10 flex md:flex-row h-full flex-col justify-center space-y-2 md:space-y-0 py-5 items-center md:space-x-6"
    >
      <div
        class="bg-white w-full md:w-[300px] h-min md:h-[400px] flex flex-col space-y-7 items-center justify-center rounded-lg border border-[#E9EDF5] p-4"
      >
        <img
          class="md:w-40 md:h-40 w-[100px] h-[100px] rounded-full self-center cursor-pointer"
          src="/assets/bg-login.png"
          alt="Rounded avatar"
        />
        <div
          :class="{
            'bg-[#E4262C] fill-white text-white': activeTab === 'pengaturan',
          }"
          @click="setActiveTab('pengaturan')"
          class="items-center cursor-pointer justify-normal transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Pengaturan />
          <p class="block sm:text-[16px] md:text-lg">Pengaturan Akun</p>
        </div>
        <div
          :class="{
            'bg-[#E4262C] fill-white text-white': activeTab === 'keamanan',
          }"
          @click="setActiveTab('keamanan')"
          class="items-center justify-normal cursor-pointer transition-colors duration-200 inline-flex ease-in-out md:min-w-full w-7/12 hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2"
        >
          <Keamanan />
          <p class="block sm:text-[16px] md:text-lg">Keamanan</p>
        </div>
      </div>
      <div
        v-if="activeTab === 'pengaturan'"
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
              v-model="nama"
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
              v-model="telp"
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
              v-model="email"
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
              v-model="jabatan"
            />
          </div>
        </div>
        <button
          type="button"
          class="place-self-end bg-[#E4262C] text-white py-2 px-6 rounded-lg mt-10"
        >
          Edit
        </button>
      </div>
      <div
        v-if="activeTab === 'keamanan'"
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
            v-model="password"
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
          type="button"
          class="place-self-end bg-[#E4262C] text-white py-2 px-6 rounded-lg mt-10"
        >
          Edit
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Keamanan from "~/assets/icon/MdOutlinePassword.svg?component";
import Pengaturan from "~/assets/icon/user-settings-outline.svg?component";

const activeTab = ref("pengaturan");
const { $profileStore } = useNuxtApp();
const nama = ref($profileStore.data.nama_admin);
const telp = ref($profileStore.data.no_tlp);
const email = ref($profileStore.data.email);
const jabatan = ref($profileStore.data.role);
const showPassword = ref(false);
const password = ref(null);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
