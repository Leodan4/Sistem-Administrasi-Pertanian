<template>
    <section>
        <div class="h-screen w-screen flex items-center justify-center bg-cover"
            :style="{ 'background-image': 'url(/assets/bg-login.png)' }">
            <div
                class="mx-auto text-left align-bottom transition-all transform bg-white rounded-[40px] sm:align-middle sm:max-w-lg sm:w-full">
                <div
                    class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-1 rounded-[40px]">
                    <div class="w-full px-8 py-5">
                        <div>
                            <div class="flex justify-center w-full mt-4">
                                <img class="object-cover h-full bg-cover rounded-l-lg" width="50"
                                    src="public/assets/telkom.png" alt="" />
                            </div>
                            <div class="flex my-8 sm:mt-5">
                                <div class="inline-flext flex-col items-center justify-center w-full">
                                    <h3 class="text-sm font-semibold text-black leading-6 lg:text-xl text-center">Buku Tamu
                                    </h3>
                                    <p class="text-sm font-semibold text-black leading-6 lg:text-xl text-center">SMK Telkom
                                        Malang</p>
                                </div>
                            </div>
                        </div>

                        <form @submit.prevent="handleLogin">
                            <div class="mt-6 space-y-6 mx-6">
                                <div>
                                    <h3 class="mb-1">Email</h3>
                                    <label for="email" class="sr-only">Email</label>
                                    <input required type="text" name="email" id="email"
                                        class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        placeholder="Masukkan Email" v-model="email" />
                                </div>
                                <div>
                                    <h3 class="mb-1">Sandi</h3>
                                    <label for="password" class="sr-only">Password</label>
                                    <div class="relative">
                                        <input required :type="showPassword ? 'text' : 'password'" name="password"
                                            id="password"
                                            class="block w-full px-3 py-1 text-base text-neutral-600 bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Masukkan Sandi" v-model="password" />
                                        <button type="button"
                                            class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                            @click="togglePasswordVisibility">
                                            <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="flex flex-col mt-4 lg:space-y-2 py-6">
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
import axios from "../plugins/axios";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from "~/stores/auth";
import { defineStore } from "pinia";
import Swal from 'sweetalert2';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const showPassword = ref(false);
        const router = useRouter();

        const auth_data = computed(() => {
            useAuth().isAuth_data = true
        })

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

        const handleLogin = () => {
            const loginData = {
                email: email.value,
                password: password.value,
            };


            const defaultUrl = process.env.API_BASE;

            const api = axios.create({
                baseURL: defaultUrl,
                // headers: {
                //   common: {
                //     Authorization: Bearer ${localStorage.getItem("token")},
                //   },
                // },
            });

            api.post('/login/', loginData)
                .then((response) => {
                    console.log('Login successful:', response.data);
                    localStorage.setItem('token', response.data.token)
                    // Navigasi ke halaman dashboard setelah login berhasil

                    router.push('/dashboard');

                    Swal.fire({
                        icon: 'success',
                        title: '<span style="font-size: 40px; font-weight: bold; color: green;"> Welcome Back! </span>',
                        showConfirmButton: false,
                        timer: 2000, // Auto-close the alert after 2 seconds
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
</script>
  
<style scoped>@import '@fortawesome/fontawesome-free/css/all.css';</style>