<template>

    <section class="h-screen flex flex-col justify-center items-center bg-white mt-96 md:mt-32 px-10 md:px-40 lg:px-80">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10 mt-4">Pendaftaran Akun</div>

        <div class="flex flex-col justify-center gap-10 w-full">

            <div class="grid md:grid-cols-2 gap-6 w-full">
                <div class="flex flex-col w-full">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <input id="email" type="text" name="email" placeholder="Input Email"
                        class="rounded-lg bg-gray-50 w-full" v-model="user.email" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <input id="password" type="text" name="password" placeholder="Input Password"
                        class="rounded-lg bg-gray-50 w-full" v-model="user.password" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <input id="nik" type="text" name="nik" placeholder="Input NIK" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.nik" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="nama" class="mb-2 text-lg font-semibold">Username</label>
                    <input id="nama" type="text" name="nama" placeholder="Input Username "
                        class="rounded-lg bg-gray-50 w-full" v-model="user.username" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <input id="telp" type="text" name="telp" placeholder="Input Telp"
                        class="rounded-lg bg-gray-50 w-full" v-model="user.telp" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_kabupaten" class="mb-2 text-lg font-semibold">Alamat Kabupaten</label>
                    <input id="alamat_kabupaten" type="text" name="alamat_kabupaten"
                        placeholder="Input Alamat Kabupaten" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_kab" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_kecamatan" class="mb-2 text-lg font-semibold">Alamat Kecamatan</label>
                    <input id="alamat_kecamatan" type="text" name="alamat_kecamatan"
                        placeholder="Input Alamat Kecamatan" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_kec" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_desa_kelurahan" class="mb-2 text-lg font-semibold">Alamat Desa/Kelurahan</label>
                    <input id="alamat_desa_kelurahan" type="text" name="alamat_desa_kelurahan"
                        placeholder="Input Alamat Desa/Kelurahan" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_des" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="nama_kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <input id="nama_kelompok_tani" type="text" name="nama_kelompok_tani"
                        placeholder="Input Nama Kelompok Tani " class="rounded-lg bg-gray-50 w-full"
                        v-model="user.name_kel_tani" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani_kabupaten" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani
                        Kabupaten</label>
                    <input id="alamat_kelompok_tani_kabupaten" type="text" name="alamat_kelompok_tani_kabupaten"
                        placeholder="Input Alamat Kelompok Tani" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_kel_kab" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani_kecamatan" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani
                        Kecamatan</label>
                    <input id="alamat_kelompok_tani_kecamatan" type="text" name="alamat_kelompok_tani_kecamatan"
                        placeholder="Input Alamat Kelompok Tani" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_kel_kac" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani_desa" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani
                        Desa</label>
                    <input id="alamat_kelompok_tani_desa" type="text" name="alamat_kelompok_tani_desa"
                        placeholder="Input Alamat Kelompok Tani" class="rounded-lg bg-gray-50 w-full"
                        v-model="user.addres_kel_des" />
                </div>

            </div>

            <div class="flex flex-col w-full">
                <label for="pilih_bpp" class="mb-2 text-lg font-semibold">Pilih BPP</label>
                <select id="pilih_bpp" class="bg-gray-100 border border-gray-300 rounded-lg w-full">
                    <option value="" selected disabled>Pilih BPP</option>
                    <option value="">BPP MUARA UYA</option>
                    <option value="">BPP JARO</option>
                    <option value="">BPP KEMBANG KUNING</option>
                    <option value="">BPP BINTANG ARA</option>
                    <option value="">BPP TANJUNG</option>
                    <option value="">BPP TANTA</option>
                    <option value="">BPP KALUA</option>
                    <option value="">BPP BENUA LAWAS</option>
                </select>
            </div>

        </div>

        <div class="py-6">
            <button @click="submitForm" class="bg-green-500 text-white border rounded-xl px-10 py-2">Daftar</button>
        </div>
    </section>
</template>
<script>
import axios from "../plugins/axios";
import { ref } from 'vue';
import { toast } from 'vue3-toastify'; // Import toast
import 'vue3-toastify/dist/index.css'; // Import CSS for toast
import Header2 from '~/components/user/header_2.vue';

const $axios = axios().provide.axios;

export default {
    components: {
        Header2
    },
    setup() {
        const user = ref({
            email: '',
            password: '',
            nik: '',
            username: '',
            telp: '',
            addres_kab: '',
            addres_kec: '',
            addres_des: '',
            name_kel_tani: '',
            addres_kel_kab: '',
            addres_kel_kac: '',
            addres_kel_des: '',
            pilih_bpp: ''
        });

        const validateForm = () => {
            // Check if any field is empty
            for (const key in user.value) {
                if (user.value[key] === '') {
                    return false;
                }
            }
            return true;
        };

        const submitForm = async () => {
            if (!validateForm()) {
                toast.error('Semua field harus diisi!', {
                    autoClose: 3000,
                });
                return;
            }

            try {
                const response = await $axios.post('/user/adduser', {
                    email: user.value.email,
                    password: user.value.password,
                    nik: user.value.nik,
                    username: user.value.username,
                    telp: user.value.telp,
                    addres_kab: user.value.addres_kab,
                    addres_kec: user.value.addres_kec,
                    addres_des: user.value.addres_des,
                    name_kel_tani: user.value.name_kel_tani,
                    addres_kel_kab: user.value.addres_kel_kab,
                    addres_kel_kac: user.value.addres_kel_kac,
                    addres_kel_des: user.value.addres_kel_des,
                    pilih_bpp: user.value.pilih_bpp
                });
                console.log('User registered successfully:', response.data);
                toast.success('Berhasil Terdaftar! Silahkan Login', {
                    autoClose: 2000,
                });
            } catch (error) {
                console.error('Error registering user:', error);
                toast.error('Terdapat Error. Mohon Coba Lagi.', {
                    autoClose: 3000,
                });
            }
        };

        return {
            user,
            submitForm
        };
    }
};
</script>


<style scoped>
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>