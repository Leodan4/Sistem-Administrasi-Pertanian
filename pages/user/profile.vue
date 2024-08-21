
<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white mt-96 md:mt-0">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-row justify-center gap-10">

            <div class="grid md:grid-cols-2 gap-6">
                <div class="flex flex-col w-[500px] ">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <input id="email" type="text" name="email" placeholder="Input Email"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <input id="password" type="text" name="password" placeholder="Input Password"
                        class="rounded-lg bg-gray-50 w-full" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <input id="nik" type="text" name="nik" placeholder="Input NIK" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama" class="mb-2 text-lg font-semibold">Nama</label>
                    <input id="nama" type="text" name="nama" placeholder="Input Nama " class="rounded-lg bg-gray-50 " />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="alamat" class="mb-2 text-lg font-semibold">Alamat</label>
                    <input id="alamat" type="text" name="alamat" placeholder="Input Alamat"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <input id="telp" type="text" name="telp" placeholder="Input Telp" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama_kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <input id="nama_" type="text" name="nama_" placeholder="Input Nama Kelompok Tani"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani</label>
                    <input id="alamat_kelompok_tani" type="text" name="alamat_kelompok_tani" placeholder="Input Alamat Kelompok Tani"
                        class="rounded-lg bg-gray-50" />
                </div>
            </div>

        </div>


        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Edit Profile</button>
        </div>
    </section>
</template>

<script>
import Header2 from '~/components/user/header_2.vue';
import { useUserStore } from '~/stores/user/profile';

export default {
    components: {
        Header2
    },
    setup() {
        const userStore = useUserStore();
        const user = ref({}); // Gunakan ref untuk reactive data

        onMounted(async () => {
            await userStore.getData();
            user.value = userStore.user;
        });

        function editProfile() {
            // Logic untuk menangani edit profile, jika diperlukan
        }

        return {
            user,
            editProfile
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
