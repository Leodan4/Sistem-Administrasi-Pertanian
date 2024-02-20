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
                            <img class="object-cover h-full bg-cover rounded-l-lg" width="50" src="public/assets/telkom.png"
                                alt="logo ts" />
                        </div>

                        <div class="flex my-8 sm:mt-5">
                            <div class="inline-flext flex-col items-center justify-center w-full">
                                <h3 class="text-sm font-semibold text-black leading-6 lg:text-xl text-center">
                                    Lupa Kata Sandi
                                </h3>
                            </div>
                        </div>

                        <!-- Tampilan form untuk memasukkan email -->
                        <div v-if="currentStep === 'email'">
                            <form @submit.prevent="handleResetPassword">
                                <div class="mt-6 space-y-6 mx-0 md:mx-6">
                                    <div>
                                        <h3 class="mb-1">Email</h3>
                                        <label for="email" class="sr-only">Email</label>
                                        <input required type="email" name="email" id="email"
                                            class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Masukkan Email" v-model="email" />
                                    </div>
                                </div>

                                <div class="flex flex-col mt-4 lg:space-y-2 py-6">
                                    <button type="submit" name="resetPassword"
                                        class="flex items-center text-base justify-center mx-20 py-2 font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#E4262C] rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 lg:w-auto">
                                        Kirim
                                    </button>
                                </div>
                            </form>
                        </div>

                        <!-- Tampilan form untuk memasukkan OTP -->
                        <div v-else-if="currentStep === 'otp'">
                            <form @submit.prevent="handleVerifyOTP">
                                <div class="mt-6 space-y-6 mx-0 md:mx-6">
                                    <div>
                                        <h3 class="mb-1">OTP</h3>
                                        <label for="otp" class="sr-only">OTP</label>
                                        <input required type="text" name="otp" id="otp"
                                            class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Masukkan OTP" v-model="otp" />
                                    </div>
                                </div>

                                <div class="flex flex-col mt-4 lg:space-y-2 py-6">
                                    <button type="submit" name="verifyOTP"
                                        class="flex items-center text-base justify-center mx-20 py-2 font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#E4262C] rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 lg:w-auto">
                                        Verifikasi OTP
                                    </button>
                                </div>
                            </form>
                        </div>

                        <!-- Tampilan form untuk memasukkan password baru -->
                        <div v-else-if="currentStep === 'newPassword'">
                            <form @submit.prevent="handleSetNewPassword">
                                <div class="mt-6 space-y-6 mx-0 md:mx-6">
                                    <div>
                                        <h3 class="mb-1">Password Baru</h3>
                                        <label for="newPassword" class="sr-only">Password Baru</label>
                                        <input required type="password" name="newPassword" id="newPassword"
                                            class="block w-full px-3 py-1 text-base bg-gray-50 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-with-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Masukkan Password Baru" v-model="newPassword" />
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
import { useRouter } from 'vue-router';
import { useGeneralStore } from "~/stores/general"; // Importing the Pinia store
import Swal from 'sweetalert2';


export default {
    setup() {
        const email = ref('');
        const router = useRouter();
        const generalStore = useGeneralStore(); // Accessing the Pinia store

        // Variabel reaktif untuk mengontrol tampilan form lupa kata sandi
        const currentStep = ref('email');
        const otp = ref('');
        const newPassword = ref('');

        const handleResetPassword = async () => {
            const resetData = {
                email: email.value,
            };

            try {
                // Kirim email dengan permintaan reset password
                // await axios.post('/reset-password/', resetData);

                // Pindah ke langkah selanjutnya
                currentStep.value = 'otp';
            } catch (error) {
                console.error('Error occurred while sending reset email:', error);
                // Tampilkan pesan kesalahan kepada pengguna
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to send reset email. Please try again later.',
                });
            }
        };

        const handleVerifyOTP = async () => {
            const otpData = {
                email: email.value,
                otp: otp.value,
            };

            try {
                // Kirim permintaan verifikasi OTP ke backend
                const response = await axios.post('/verify-otp/', otpData);

                // Tanggapan dari backend akan memberikan informasi apakah OTP valid atau tidak
                if (response.data.valid) {
                    // OTP valid, lanjutkan ke langkah selanjutnya atau lakukan tindakan yang sesuai
                    console.log('OTP is valid');
                } else {
                    // OTP tidak valid, tampilkan pesan kesalahan kepada pengguna
                    console.error('Invalid OTP');
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Invalid OTP. Please enter a valid OTP.',
                    });
                }
            } catch (error) {
                console.error('Error occurred while verifying OTP:', error);
                // Tampilkan pesan kesalahan kepada pengguna
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to verify OTP. Please try again later.',
                });
            }
        };

        const handleSetNewPassword = async () => {
            const newPasswordData = {
                email: email.value,
                newPassword: newPassword.value,
            };

            try {
                // Kirim permintaan untuk menyetel password baru ke backend
                await axios.post('/set-new-password/', newPasswordData);
                
                // Password berhasil disetel, mungkin Anda ingin melakukan sesuatu di sini
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

        return {
            email,
            currentStep,
            otp,
            newPassword,
            handleResetPassword,
            handleVerifyOTP,
            handleSetNewPassword,
        };
    },
};
</script>
  
<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
</style>