<template>
    <section>
        <div class="h-screen w-screen flex items-center justify-center bg-cover"
            :style="{ 'background-image': 'url(/assets/bg-login.png)' }">
            <div
                class="w-full mx-4 text-left align-bottom transition-all transform bg-white rounded-[40px] sm:align-middle sm:max-w-lg ">
                <div
                    class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-1 rounded-[40px]">
                    <div class="w-full px-8 py-5">
                        <div class="flex justify-center w-full mt-4">
                            <img class="object-cover h-full bg-cover rounded-l-lg" width="50"
                                src="public/assets/telkom.png" alt="logo ts" />
                        </div>

                        <div class="flex my-8 sm:mt-5">
                            <div class="inline-flext flex-col items-center justify-center w-full">
                                <h3 class="text-sm font-semibold text-black leading-6 lg:text-xl text-center">
                                    Lupa Kata Sandi
                                </h3>
                            </div>
                        </div>

                        <!-- Tampilan form untuk memasukkan email -->
                        <div>
                            <form @submit.prevent="handleSetNewPassword">
                                <div class="mt-6 space-y-6 mx-0 md:mx-6">
                                    <div>
                                        <span class="mb-1">Sandi Baru</span>
                                        <input required type="password" name="newPassword" id="newPassword"
                                            class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Masukkan Sandi Baru" v-model="newPassword" />
                                    </div>
                                </div>

                                <div class="mt-6 space-y-6 mx-0 md:mx-6">
                                    <div>
                                        <h3 class="mb-1">Konfirmasi Sandi</h3>
                                        <input required type="password" name="confirmPassword" id="confirmPassword"
                                            class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Konfirmasi Sandi Baru" v-model="confirmPassword" />
                                    </div>
                                </div>

                                <div class="flex flex-col mt-4 lg:space-y-2 py-6">
                                    <button type="submit" name="setNewPassword"
                                        class="flex items-center text-base justify-center mx-20 py-2 font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#E4262C] rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 lg:w-auto">
                                        Setel Password Baru
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="text-sm text-center hover:text-red-500 my-2">
                            <button @click="navigateTo('/admin/login')">
                                <h3>Kembali ke Login</h3>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "../plugins/axios";
import { ref } from 'vue';
import Swal from 'sweetalert2';


export default {
    setup() {
        const newPassword = ref('');
        const confirmPassword = ref('');
        const router = useRouter();
        const { $forgetPasswordStore } = useNuxtApp(); // Accessing the Pinia store

        const handleSetNewPassword = async () => {
            // Pastikan confirmPassword sama dengan newPassword
            if (newPassword.value !== confirmPassword.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Konfirmasi sandi tidak cocok dengan sandi baru. Silakan coba lagi.',
                });
                return; // Hentikan eksekusi jika tidak cocok
            }

            const newPasswordData = {
                newPassword: newPassword.value,
                confirmPassword: confirmPassword.value,
            };

            try {
                const response = await $forgetPasswordStore.setNewPassword(newPasswordData);
                console.log('New password set successfully');
            } catch (error) {
                console.error('Error occurred while setting new password:', error);
                // Tampilkan pesan kesalahan kepada pengguna
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to set new password. Please try again later.',
                });
            }
        };

        // const navigateTo = (path) => {
        //     router.push(path);
        // };

        return {
            newPassword,
            confirmPassword,
            handleSetNewPassword,
            navigateTo,
        };
    },
};
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
