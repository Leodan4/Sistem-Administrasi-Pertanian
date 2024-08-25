<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2/>
        <div class="text-2xl font-bold mb-10">Upload Dokumen</div>

        <div class="flex flex-row justify-center items-center gap-5 md:gap-10">
            
            <div class="grid md:grid-cols-2 gap-6 px-8 md:px-20">
                <div class="flex flex-col w-full ">
                    <label for="title" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <input id="title" type="text" v-model="title" placeholder="Input Judul Proposal"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full ">
                    <label for="deskripsi" class="mb-2 text-lg font-semibold">Deskripsi</label>
                    <input id="deskripsi" type="text" v-model="deskripsi" placeholder="Input Deskripsi"
                        class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full ">
                    <label for="jenis_bantuan_sarana" class="mb-2 text-lg font-semibold">Jenis Bantuan Sarana</label>
                    <select id="jenis_bantuan_sarana" v-model="jenis_bantuan_sarana"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="pupuk">Pupuk</option>
                        <option value="obat_obatan">Obat-obatan</option>
                        <option value="bibit">Bibit</option>
                        <option value="alsin">Alsin</option>
                        <option value="dll">dll</option>
                    </select>
                </div>

                <div class="flex flex-col w-full ">
                    <label for="jenis_bantuan_prasarana" class="mb-2 text-lg font-semibold">Jenis Bantuan
                        Prasarana</label>
                    <select id="jenis_bantuan_prasarana" v-model="jenis_bantuan_prasarana"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="gabang">Gabang</option>
                        <option value="gudang">Gudang</option>
                        <option value="sumur_bor">Sumur Bor</option>
                        <option value="saluran_irigasi">Saluran Irigasi</option>
                        <option value="cetak_sawah">Cetak Sawah</option>
                        <option value="embung">Embung</option>
                        <option value="dll">dll</option>
                    </select>
                </div>

                <div class="flex flex-col w-full ">
                    <label for="jenis_bantuan_pangan" class="mb-2 text-lg font-semibold">Jenis Bantuan Ketahanan
                        Pangan</label>
                    <select id="jenis_bantuan_pangan" v-model="jenis_bantuan_pangan"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="lumbung">Lumbung</option>
                        <option value="bansos_modal_usaha">Bansos Modal Usaha</option>
                        <option value="lantai_jemur">Lantai Jemur</option>
                        <option value="alat_pengolahan_hasil">Alat Pengolahan Hasil</option>
                        <option value="dll">dll</option>
                    </select>
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kepala_desa" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kepala Desa</label>
                    <input id="lembar_persetujuan_kepala_desa" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kepala_desa', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full ">
                    <label for="lembar_persetujuan_PPL_Mantri" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        PPL/Mantri</label>
                    <input id="lembar_persetujuan_PPL_Mantri" type="file"
                        @change="handleFileUpload('lembar_persetujuan_PPL_Mantri', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_BPP" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        BPP</label>
                    <input id="lembar_persetujuan_BPP" type="file"
                        @change="handleFileUpload('lembar_persetujuan_BPP', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kecamatan" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kecamatan</label>
                    <input id="lembar_persetujuan_kecamatan" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kecamatan', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="sk_pembentukan_kelompok" class="mb-2 text-lg font-semibold">SK Pembentukan
                        Kelompok</label>
                    <input id="sk_pembentukan_kelompok" type="file"
                        @change="handleFileUpload('sk_pembentukan_kelompok', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="keanggotaan_SIMHULTAN" class="mb-2 text-lg font-semibold">Keanggotaan SIMHULTAN</label>
                    <input id="keanggotaan_SIMHULTAN" type="file"
                        @change="handleFileUpload('keanggotaan_SIMHULTAN', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Daftar_anggota_dan_ktp_anggota" class="mb-2 text-lg font-semibold">Daftar Anggota dan
                        KTP Anggota</label>
                    <input id="Daftar_anggota_dan_ktp_anggota" type="file"
                        @change="handleFileUpload('Daftar_anggota_dan_ktp_anggota', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Rincian_proposal" class="mb-2 text-lg font-semibold">Rincian Proposal (Luas lahan,
                        komoditas, geo, rincian permohonan)</label>
                    <input id="Rincian_proposal" type="file" @change="handleFileUpload('Rincian_proposal', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2"
                @click="handleUploadDokumen">Simpan</button>
        </div>

    </section>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header2 from '~/components/user/header_2.vue';
import { useUploadDokumen } from '~/stores/user/upload_dokumen'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    components: {
        Header2
    },
    setup() {
        const id_users = localStorage.getItem("id_users");
        const title = ref("");
        const deskripsi = ref("");
        const jenis_bantuan_sarana = ref("");
        const jenis_bantuan_pangan = ref("");
        const jenis_bantuan_prasarana = ref("");
        const router = useRouter();
        const uploadDokumen = useUploadDokumen();

        const handleFileUpload = (key, event) => {
            const file = event.target.files[0];
            if (file) {
                uploadDokumen.formData.append(key, file);
            }
        };

        const handleUploadDokumen = async () => {
            // Menambahkan data teks ke FormData
            uploadDokumen.formData.append("id_users", id_users);
            uploadDokumen.formData.append("title", title.value);
            uploadDokumen.formData.append("deskripsi", deskripsi.value);
            uploadDokumen.formData.append("jenis_bantuan_sarana", jenis_bantuan_sarana.value);
            uploadDokumen.formData.append("jenis_bantuan_pangan", jenis_bantuan_pangan.value);
            uploadDokumen.formData.append("jenis_bantuan_prasarana", jenis_bantuan_prasarana.value);

            try {
                const response = await uploadDokumen.submitForm();
                console.log(response);

                toast.success("Dokumen berhasil diupload", {
                    onClose: () => {
                        router.push('/user/dashboard');
                        // window.location.reload();
                    }
                });
            } catch (error) {
                console.error("Gagal upload dokumen", error);
                toast.error("Gagal upload dokumen");
            }
        };

        return {
            title,
            deskripsi,
            jenis_bantuan_sarana,
            jenis_bantuan_pangan,
            jenis_bantuan_prasarana,
            handleFileUpload,
            handleUploadDokumen,
        };
    },
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>