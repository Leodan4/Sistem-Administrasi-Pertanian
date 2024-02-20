<template>
  <section>
    <div class="h-screen w-screen flex items-center justify-center bg-cover"
      :style="{ 'background-image': 'url(/assets/bg-login.png)' }">

      <div
        class="w-full mx-4 text-left align-bottom transition-all transform bg-white rounded-[40px] sm:max-w-md sm:w-full">
        <div
          class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-1 rounded-[40px]">
          <div class="w-full px-8 py-5">
            <div>
              <div class="flex justify-center w-full mt-4">
                <img class="object-cover h-full bg-cover rounded-l-lg" width="50" src="public/assets/telkom.png" alt="" />
              </div>
              <div class="flex my-8 sm:mt-5">
                <div class="inline-flext flex-col items-center justify-center w-full">
                  <h3 class="text-sm font-semibold text-black leading-6 lg:text-xl text-center">Buku Tamu <br> SMK Telkom
                    Malang
                  </h3>
                  <p class="text-sm font-semibold text-black leading-6 lg:text-xl text-center"></p>
                </div>
              </div>
            </div>

            <form @submit.prevent="handleLogin">
              <div class="lg:mx-6 md:mx-2 mt-6 space-y-6">
                <div>
                  <span class="">Email</span>
                  <input required for="email" type="text" name="email" id="email"
                    class="block w-full px-3 py-1 my-2 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Masukkan Email" v-model="email" />
                </div>
                <div>
                  <h3 class="">Sandi</h3>
                  <div class="relative">
                    <input required for="password" :type="showPassword ? 'text' : 'password'" name="password" id="password"
                      class="block w-full px-3 py-1 my-2 text-base text-neutral-600 bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Masukkan Sandi" v-model="password" />
                    <button type="button" class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      @click="togglePasswordVisibility">
                      <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                    </button>
                  </div>
                </div>
                <div class="text-xs text-gray-400 flex justify-end">
                  <button @click="navigateTo('/admin/forget_password')" id="lupaKataSandiButton" class="bg-transparent border-none hover:text-red-500">
                    <h3>Lupa Kata Sandi <hr><hr> </h3>
                  </button>
                </div>

                <div class="flex flex-col lg:space-y-2 py-2">
                  <button type="submit" name="login"
                    class="flex items-center text-base justify-center mx-14 py-2 font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#E4262C] rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 lg:w-auto">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useLoginStore } from "~/stores/login"; // Impor store login

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const router = useRouter();
    const loginStore = useLoginStore(); // Gunakan store login

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = () => {
      const loginData = {
        email: email.value,
        password: password.value,
      };

      // Panggil action loginUser dari store login
      loginStore.loginUser(loginData)
        .then(() => {
          // Jika login berhasil, navigasi ke halaman dashboard
          router.push('/dashboard');

          // Tambahkan logika lain jika perlu
        })
        .catch((error) => {
          // Tangani kesalahan jika login gagal
          console.error('Login failed:', error);
          // Tampilkan pesan kesalahan kepada pengguna jika diperlukan
        });
    };

    return {
      email,
      password,
      showPassword,
      togglePasswordVisibility,
      handleLogin,
    };
  },
};
</script>
  
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
</style>