<!-- <template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Pengumuman Hasil</div>

        <div class="flex flex-row justify-center items-center gap-5 md:gap-10">

            <div class="grid md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-20">
                <div class="flex flex-col w-[350px] md:md:w-[500px] ">
                    <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                    <input v-model="formData.no_doc" id="no_doc" type="text" name="no_doc"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                    <input v-model="formData.judul_dokumen" id="judul_doc" type="text" name="judul_doc"
                        class="rounded-lg bg-gray-50 md:w-[500px] border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                    <input v-model="formData.nama_penerima" id="penerima" type="text" name="penerima"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                    <input v-model="formData.nama_penanggung_jawab" id="penanggung_jawab" type="text"
                        name="penanggung_jawab" class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <input v-model="formData.jenis_bantuan" id="bantuan" type="text" name="bantuan"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="sumber_daya" class="mb-2 text-lg font-semibold">Sumber Dana</label>
                    <input v-model="formData.sumber_dana" id="sumber_daya" type="text" name="sumber_daya"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
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
import axios from "../plugins/axios";
import Header2 from '~/components/user/header_2.vue';
import { useRouter } from 'vue-router';

const $axios = axios().provide.axios;

export default {
    components: {
        Header2
    },
    setup() {
        const router = useRouter();
        const formData = ref({
            no_doc: "",
            nama_penerima: "",
            jenis_bantuan: "",
            judul_dokumen: "",
            nama_penanggung_jawab: "",
            sumber_dana: ""
        });
        const getData = async () => {
            try {
                const id_users = localStorage.getItem('id_users');

                if (id_users) {
                    const response = await $axios.get(`/formhasil/formhasil/?id_users=${id_users}`);
                    const data = response.data;

                    formData.value = {
                        no_doc: data.no_doc || "",
                        nama_penerima: data.nama_penerima || "",
                        jenis_bantuan: data.jenis_bantuan || "",
                        judul_dokumen: data.title || "",
                        nama_penanggung_jawab: data.nama_penanggung_jawab || "",
                        sumber_dana: data.sumber_dana || ""
                    };
                } else {
                    console.error('User ID not found in local storage');
                }
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
</style> -->









<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Pengumuman Hasil</div>

        <div class="flex flex-row justify-center items-center gap-5 md:gap-10">

            <div class="grid md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-20">
                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.no_doc }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                    <div id="judul_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.judul_dokumen }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                    <div id="penerima" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.nama_penerima }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                    <div id="penanggung_jawab" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.nama_penanggung_jawab }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <div id="bantuan" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.jenis_bantuan }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="sumber_daya" class="mb-2 text-lg font-semibold">Sumber Dana</label>
                    <div id="sumber_daya" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.sumber_dana }}
                    </div>
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
import axios from "../plugins/axios";
import Header2 from '~/components/user/header_2.vue';
import { useRouter } from 'vue-router';

const $axios = axios().provide.axios;

export default {
    components: {
        Header2
    },
    setup() {
        const router = useRouter();
        const formData = ref({
            no_doc: "",
            nama_penerima: "",
            jenis_bantuan: "",
            judul_dokumen: "",
            nama_penanggung_jawab: "",
            sumber_dana: ""
        });

        const getData = async () => {
            try {
                const id_users = localStorage.getItem('id_users');

                if (id_users) {
                    const response = await $axios.get(`/formhasil/formhasil/?id_users=${id_users}`);
                    const data = response.data.data[0];

                    formData.value = {
                        no_doc: data.no_doc || "",
                        nama_penerima: data.nama_penerima || "",
                        jenis_bantuan: data.jenis_bantuan || "",
                        judul_dokumen: data.title || "",
                        nama_penanggung_jawab: data.nama_penangung_jawab || "",
                        sumber_dana: data.sumber_dana || ""
                    };
                } else {
                    console.error('User ID not found in local storage');
                }
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
