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
                    <label for="sumber_dana" class="mb-2 text-lg font-semibold">Sumber Dana</label>
                    <div id="sumber_dana" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.sumber_dana }}
                    </div>
                </div>
                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="sumber_dana" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <div id="sumber_dana" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.tanggal }}
                    </div>
                </div>
                <div class="flex flex-col w-[350px] md:w-[500px]">
                    <label for="sumber_dana" class="mb-2 text-lg font-semibold">Surat Serah Terima Bantuan</label>
                    <div class="flex justify-between items-center gap-3">
                        <div id="sumber_dana" class="rounded-lg bg-gray-50 border-2 border-gray-400 w-full p-2 h-11 ">
                        </div>
                        <div class="">
                            <a
                        v-if="formData.surat_serah_terima_bantuan"
                        :href="formData.surat_serah_terima_bantuan"
                        download
                        class=" flex group justify-between items-center gap-1 bg-blue-500 text-white px-2 py-3 rounded-lg hover:bg-blue-700 "
                    >
                        <Icon icon="material-symbols:download" :width="24" />
                        Download 
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-6">
            <button @click="printPDF" class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Serah Terima</button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from "../plugins/axios";
import Header2 from '~/components/user/header_2.vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useRouter } from 'vue-router';
import { formateDate } from '~/lib/utils';
import { Icon } from '@iconify/vue';

const $axios = axios().provide.axios;

export default {
    components: {
        Header2,
        Icon
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
                    const response = await $axios.get(`/formhasil/formhasil/${id_users}`);
                    const data = response.data.data[0];

                    formData.value = {
                        no_doc: data.no_doc || "",
                        nama_penerima: data.nama_penerima || "",
                        jenis_bantuan: data.jenis_bantuan || "",
                        judul_dokumen: data.title || "",
                        nama_penanggung_jawab: data.nama_penangung_jawab || "",
                        sumber_dana: data.sumber_dana || "",
                        tanggal: formateDate(data.createdAt),
                        surat_serah_terima_bantuan: data.surat_serah_terima_bantuan
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

        const printPDF = () => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Gambar kop surat
            const kopImage = '/KOPPTabalong.png';
            pdf.addImage(kopImage, 'PNG', -10.5, 5, 230, 30);

            const startY = 40;

            // Data tabel
            const tableData = [
                ['No Dokumen', formData.value.no_doc],
                ['Judul Dokumen', formData.value.judul_dokumen],
                ['Nama Penerima', formData.value.nama_penerima],
                ['Nama Penanggung Jawab', formData.value.nama_penanggung_jawab],
                ['Jenis Bantuan', formData.value.jenis_bantuan],
                ['Sumber Dana', formData.value.sumber_dana]
            ];

            pdf.autoTable({
                head: [['Kolom', 'Data yang Diperoleh']],
                body: tableData,
                startY: startY,
                theme: 'grid',
                margin: { top: 10, right: 10, bottom: 10, left: 10 },
                headStyles: {
                    fillColor: [0, 100, 0],
                    textColor: [255, 255, 255],
                    fontSize: 12,
                }
            });

            const fileName = `Surat Serah Terima - ${formData.value.no_doc}.pdf`;
            pdf.save(fileName);
        };

        return {
            formData,
            printPDF
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
