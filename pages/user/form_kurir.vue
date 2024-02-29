<template>
    <section>
        <div class="h-screen bg-[#F6F7FF]">
            <div class="flex justify-end">
                <img src="/form/tlkm.svg">
            </div>

            <div class="flex flex-col items-center mx-5 md:mx-60">
                <h1 class="mx-10 py-10 text-center text-2xl md:text-3xl font-semibold">Form Pengisian Kurir</h1>

                <div class="box-utama w-full h-[550px] md:w-[600px] bg-white rounded-xl border p-10 overflow-y-auto">
                    <div class="flex flex-col md:flex-row md:gap-10">
                        <div class="w-full">
                            <div class="py-3">
                                <span for="nama" class="font-semibold">Nama Pengirim</span>
                                <input required type="text" name="nama" id="nama"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Masukan Nama" v-model="nama_pengirim" />
                            </div>
                            <div class="py-3">
                                <span for="no_telp" class="font-semibold">No Telp</span>
                                <input required type="bolean" name="no_telp" id="no_telp"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Masukan No Telp" v-model="no_tlp" />
                            </div>
                            <div class="py-3">
                                <span for="ditemui" class="font-semibold">Orang Yang Ditemui</span>
                                <Multiselect v-model="id_guru" id="ditemui" :options="filteredGuru" label="nama_guru"
                                    valueProp="id_guru" :searchable="true" />
                            </div>
                            <div class="py-3">
                                <span for="instansi" class="font-semibold">Asal Instansi</span>
                                <input required type="text" name="instansi" id="instansi"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Pilih Instansi" v-model="asal_instansi" />
                            </div>
                            <div class="py-3">
                                <span for="file" class="font-semibold">Upload file</span>
                                <input required type="file" name="file" id="file"
                                    class="block w-full px-3 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Masukan No Telp" @change="handleFileChange" />
                            </div>
                            
                        </div>

                    </div>

                    <div class="flex justify-end mt-10">
                        <button class=" text-white py-2 px-10 rounded-lg bg-[#E4262C]">Simpan</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import Multiselect from '@vueform/multiselect'

export default {
    setup() {
        const nama_pengirim = ref('');
        const no_tlp = ref('');
        const id_siswa = ref(''); 
        const id_guru = ref('');
        const asal_instansi = ref('');
        const foto = ref(null);
        const { $formSiswaStore } = useNuxtApp();
        const handleFileChange = (event) => {
            foto.value = event.target.files[0];
        };
        // Computed property to filter options based on user input
        const filteredSiswa = computed(() => {
            return $formSiswaStore.daftarSiswa.data;
        });

        const filteredGuru = computed(() => {
            return $formGuruStore.daftarGuru.data;
        });

        const saveData = async () => {
            try {
                const formData = new FormData();
                formData.append('nama_pengirim', nama_pengirim.value);
                formData.append('no_tlp', no_tlp.value);
                formData.append('id_siswa', id_siswa.value); 
                formData.append('id_guru', id_guru.value);
                formData.append('asal_instansi', asal_instansi.value);
                formData.append('foto', foto.value);
                const response = await $formSiswaStore.transaksiSiswa(formData);
                console.log('Data saved successfully');
                Swal.fire('Success', 'Data saved successfully', 'success');
                // Redirect or show success message here
            }
            catch (error) {
                console.error('Failed to save data:', error);
                Swal.fire('Error', 'Failed to save data', 'error');
            }
        };
        onMounted(() => {
            $formSiswaStore.fetchDataSiswa();
        });
        return {
            nama_pengirim,
            no_tlp,
            id_siswa,
            id_guru,
            asal_instansi,
            foto,
            handleFileChange,
            saveData,
            daftarSiswa: $formSiswaStore.daftarSiswa.data,
            filteredSiswa,
        };
    },
    components: {
        Multiselect,
    },
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>   
