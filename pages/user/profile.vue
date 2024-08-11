<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-row justify-center items-center gap-10 ">
            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <input id="email" type="text" name="email" placeholder="Input Email"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <input id="nik" type="text" name="nik" placeholder="Input NIK"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="alamat" class="mb-2 text-lg font-semibold">Alamat</label>
                    <input id="alamat" type="text" name="alamat" placeholder="Input Alamat"
                        class="rounded-lg bg-gray-50" />
                </div>
                <div class="flex flex-col w-[500px] py-4">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <input id="telp" type="text" name="telp" placeholder="Input Telp"
                        class="rounded-lg bg-gray-50" />
                </div>
            </div>

            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <input id="password" type="text" name="password" placeholder="Input Password"
                        class="rounded-lg bg-gray-50 w-full" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="nama" class="mb-2 text-lg font-semibold">Nama</label>
                    <input id="nama" type="text" name="nama" placeholder="Input Nama "
                        class="rounded-lg bg-gray-50 " />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <input id="email" type="text" name="email" placeholder="Input Email"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <input id="kelompok_tani" type="text" name="kelompok_tani" placeholder="Input Nama Kelompok Tani"
                        class="rounded-lg bg-gray-50" />
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full py-4 px-56">
            <label for="catatan_verifikasi" class="mb-2 text-lg font-semibold">Catatan Verifikasi</label>
            <textarea id="catatan_verifikasi" name="catatan_verifikasi" placeholder="Input Catatan Verifikasi"
                class="rounded-lg bg-gray-50 w-full h-20 resize-none"></textarea>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Edit Profile</button>
        </div>
    </section>
</template>

<script>
import AdminTopNav from '~/components/admin/TopNav.vue';

export default {
    components: {
        AdminTopNav
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
