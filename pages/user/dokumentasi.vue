<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Upload Dokumen</div>

        <div class="flex flex-col justify-center items-center space-y-10">
            <div class="flex flex-col w-[500px]">
                <label for="berkas" class="mb-4 text-xl font-semibold">Pilih Berkas</label>
                <input id="berkas" type="file" name="berkas" placeholder="Input Pilih Berkas"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Upload Dokumen</button>
            </div>

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
