<!-- <template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-row justify-center items-center gap-10 ">
            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                    <input id="no_doc" type="text" name="no_doc" placeholder="Input No Dokumen"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                    <input id="penerima" type="text" name="penerima" placeholder="Input Nama Penerima"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <input id="bantuan" type="text" name="bantuan" placeholder="Input Jenis Bantuan"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>
            </div>

            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                    <input id="judul_doc" type="text" name="judul_doc" placeholder="Input Judul Dokumen"
                        class="rounded-lg bg-gray-50 w-full  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                    <input id="penanggung_jawab" type="text" name="penanggung_jawab" placeholder="Input Nama Penanggung Jawab"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="sumber_daya" class="mb-2 text-lg font-semibold">Sumber Daya</label>
                    <input id="sumber_daya" type="text" name="sumber_daya" placeholder="Input Sumber DayaN"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>
            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Serah Terima</button>
        </div>
    </section>
</template>

<script>
import Header2 from '~/components/user/header_2.vue';

export default {
    components: {
        Header2
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
</style> -->





<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Pengumuman Hasil</div>

        <div class="flex flex-row justify-center items-center gap-10 ">
            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                    <input v-model="formData.no_doc" id="no_doc" type="text" name="no_doc" 
                        class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                    <input v-model="formData.nama_penerima" id="penerima" type="text" name="penerima" 
                        class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <input v-model="formData.jenis_bantuan" id="bantuan" type="text" name="bantuan"
                        class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                </div>
            </div>

            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                    <input v-model="formData.judul_dokumen" id="judul_doc" type="text" name="judul_doc" 
                        class="rounded-lg bg-gray-50 w-full border-2 border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                    <input v-model="formData.nama_penanggung_jawab" id="penanggung_jawab" type="text" name="penanggung_jawab" 
                        class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="sumber_daya" class="mb-2 text-lg font-semibold">Sumber Dana</label>
                    <input v-model="formData.sumber_dana" id="sumber_daya" type="text" name="sumber_daya"
                        class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                </div>
            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Serah Terima</button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Directly import axios
import AdminTopNav from '~/components/admin/TopNav.vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        AdminTopNav
    },
    setup() {
        const router = useRouter();
        const formData = ref({
            no_doc: '',
            nama_penerima: '',
            jenis_bantuan: '',
            judul_dokumen: '',
            nama_penanggung_jawab: '',
            sumber_dana: ''
        });

        const getData = async () => {
            try {
                const response = await axios.get('/formhasil/formhasil');
                const data = response.data;

                formData.value = {
                    no_doc: data.no_doc || '',
                    nama_penerima: data.nama_penerima || '',
                    jenis_bantuan: data.jenis_bantuan || '',
                    judul_dokumen: data.judul_dokumen || '',
                    nama_penanggung_jawab: data.nama_penanggung_jawab || '',
                    sumber_dana: data.sumber_dana || ''
                };
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        onMounted(() => {
            getData();
        });

        const navigateTo = (path) => {
            router.push(path);
        };

        return {
            formData,
            navigateTo
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
