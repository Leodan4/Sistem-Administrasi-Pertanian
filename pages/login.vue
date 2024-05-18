<template>
  <section>
    <div class="h-screen w-screen flex items-center justify-center bg-cover"
      :style="{ 'background-image': 'url(/assets/bg-login.svg)' }">
      <div
        class="w-full mx-4 text-left align-bottom transition-all transform bg-white rounded-xl sm:max-w-md sm:w-full">
        <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-1 rounded-xl">
          <div class="w-full px-8 py-5">
            <div>
              <div class="flex my-8 sm:mt-5">
                <div class="inline-flext flex-col items-center justify-center w-full">
                  <h3 class="text-sm font-semibold text-black leading-6 lg:text-2xl text-center">
                    Login
                  </h3>
                  <p class="text-sm font-semibold text-black leading-6 lg:text-xl text-center"></p>
                </div>
              </div>
            </div>

            <form @submit.prevent="handleLogin">
              <div class="lg:mx-6 md:mx-2 mt-6 space-y-6">
                <div>
                  <span class="font-semibold">Username</span>
                  <input required for="email" type="text" name="email" id="email" v-model="email"
                    class="block w-full px-3 py-1 my-2 text-base bg-white placeholder-gray-500 transition duration-500 ease-in-out transform border-1 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Masukkan Email" />
                </div>
                <div>
                  <h3 class="font-semibold">Sandi</h3>
                  <div class="relative">
                    <input required for="password" :type="showPassword ? 'text' : 'password'" name="password"
                      id="password" v-model="password"
                      class="block w-full px-3 py-1 my-2 text-base text-neutral-600 bg-white placeholder-gray-500 transition duration-500 ease-in-out transform border-1 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Masukkan Sandi" />
                    <button type="button" class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      @click="togglePasswordVisibility">
                      <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'
                        "></i>
                    </button>
                  </div>
                </div>
                <!-- <div class="text-xs text-gray-400 flex justify-end">
                  <button @click="navigateTo('/admin/forget_password')" type="button" id="lupaKataSandiButton"
                    class="bg-transparent border-none hover:text-red-500">
                    <h3>
                      Lupa Kata Sandi
                      <hr />
                      <hr />
                    </h3>
                  </button>
                </div> -->

                <div class="flex flex-col lg:space-y-2 py-2">
                  <button :disabled="$generalStore.isLoading" type="submit" name="login"
                    :class="$generalStore.isLoading && 'opacity-80'"
                    class="flex items-center text-lg justify-center mx-14 py-2 font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#0E9F6E] rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 lg:w-auto">
                    <span v-if="$generalStore.isLoading" class="mr-2">
                      <i class="animate-spin mr-1 fas fa-spinner"></i>
                    </span>
                    {{
                      $generalStore.isLoading ? "Tunggu Sebentar.." : "Login"
                    }}
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
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const router = useRouter();
    const { $loginStore, $profileStore } = useNuxtApp(); // Initialize your store

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = async () => {
      const loginData = {
        email: email.value,
        password: password.value,
      };

      try {
        const response = await $loginStore.loginUser(loginData);
        // Navigasi ke halaman dashboard setelah login berhasil
        await new Promise((resolve) => {
          router.afterEach(resolve);
          router.replace("/admin/dashboard");
        });

        // Setelah navigasi selesai, tampilkan notifikasi
        useNuxtApp().$toast.success(
          `Selamat Datang ${$profileStore.data.nama_admin}`,
          {
            autoClose: 2000,
          }
        );

        return response;
      } catch (error) {
        // Handle error here if needed
        console.error("Failed to login", error);
      }
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
@import "@fortawesome/fontawesome-free/css/all.css";
</style>




















<!-- <script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios'; 
// import { useLoginStore } from "~/stores/login"; 

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const router = useRouter();
    // const loginStore = useLoginStore();  

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = async () => {
      const loginData = {
        email: email.value,
        password: password.value,
      };

      axios.post('/login', loginData)
        .then((response) => {
          console.log('Login successful:', response.data);
          localStorage.setItem('token', response.data.token)
          // Navigasi ke halaman dashboard setelah login berhasil

          router.push('/dashboard');

          Swal.fire({
            icon: 'success',
            title: '<span style="font-size: 40px; font-weight: bold; color: green;"> Welcome Back! </span>',
            showConfirmButton: false,
            timer: 2000,
            didClose: () => {
              // Optionally perform any action after the alert is closed
            },
          });
        })
        .catch((error) => {
          if (error.response) {
            // Objek error.response ada, kita dapat membaca propertinya
            console.error('Login failed. Server response:', error.response);
            console.error('Error message:', error.response.data);
          } else {
            // Objek error.response tidak ada, mungkin masalah koneksi atau server mati
            console.error('Login failed. Unable to connect to the server.');
          }
          Swal.fire({
            icon: 'error',
            title: '<span style="font-size: 40px; font-weight: bold; color: red; padding-top: 5px;"> Login Failed! </span>',
            html: '<div style="padding-bottom: 10px; font-weight: bold;">Invalid email or password. Please try again</div>',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Try Again!',
          });
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
</script> -->
