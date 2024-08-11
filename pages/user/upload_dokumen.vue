<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Upload Dokumen</div>

        <div class="flex flex-row justify-center items-center gap-10 ">
            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="title" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <input id="titlw" type="text" v-model="title" placeholder="Input Judul Proposal"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="bantuan_sarana" class="mb-2 text-lg font-semibold">Jenis Bantuan Sarana</label>
                    <select id="bantuan_sarana" v-model="bantuan_sarana" class="rounded-lg bg-gray-50">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="pupuk">Pupuk</option>
                        <option value="obat_obatan">Obat-obatan</option>
                        <option value="bibit">Bibit</option>
                        <option value="alsin">Alsin</option>
                        <option value="dll">dll</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="ketahanan_pangan" class="mb-2 text-lg font-semibold">Jenis Bantuan Ketahanan Pangan</label>
                    <select id="ketahanan_pangan" v-model="ketahanan_pangan" class="rounded-lg bg-gray-50">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="lumbung">Lumbung</option>
                        <option value="bansos_modal_usaha">Bansos Modal Usaha</option>
                        <option value="lantai_jemur">Lantai Jemur</option>
                        <option value="alat_pengolahan_hasil">Alat Pengolahan Hasil</option>
                        <option value="dll">dll</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="persetujuan_mantri" class="mb-2 text-lg font-semibold">Lembar Persetujuan PPL/Mantri</label>
                    <input id="persetujuan_mantri" type="file" name="persetujuan_mantri"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="persetujuan_kecamatan" class="mb-2 text-lg font-semibold">Lembar Persetujuan Kecamatan</label>
                    <input id="persetujuan_kecamatan" type="file" name="persetujuan_kecamatan"
                        class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="simhultan" class="mb-2 text-lg font-semibold">Keanggotaan SIMHULTAN</label>
                    <input id="simhultan" type="file" name="simhultan" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="rincian_proposal" class="mb-2 text-lg font-semibold">
                        RIncian Proposal (Luas lahan, komoditas, geo, rincian permohonan)
                    </label>    
                    <input id="rincian_proposal" type="file" name="rincian_proposal" class="rounded-lg bg-gray-50" />
                </div>
            </div>



            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="deskripsi" class="mb-2 text-lg font-semibold">Deskripsi</label>
                    <input id="deskripsi" type="text" v-model="deskripsi" placeholder="Input Deskripsi"
                        class="rounded-lg bg-gray-50 w-full" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="bantuan_prasarana" class="mb-2 text-lg font-semibold">Jenis Bantuan Prasarana</label>
                    <select id="bantuan_prasarana" v-model="bantuan_prasarana" class="rounded-lg bg-gray-50">
                        <option value="" disabled selected>Pilih Jenis Bantuan</option>
                        <option value="gabang">Gabang</option>
                        <option value="gudang">Gudang</option>
                        <option value="sumur_bor">Sumur Bor</option>
                        <option value="saluran_irigasi">Saluran Irigasi</option>
                        <option value="cetak_sawah">Cetak Sawah</option>
                        <option value="embung">Embung</option>
                        <option value="dll">dll</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                
                <div class="flex flex-col w-[500px] py-4">
                    <label for="persetujuan_kepala_desa" class="mb-2 text-lg font-semibold">Lembar Persetujuan Kepala Desa</label>
                    <input id="persetujuan_kepala_desa" type="file" name="persetujuan_kepala_desa" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="persetujuan_bpp" class="mb-2 text-lg font-semibold">Lembar Persetujuan BPP</label>
                    <input id="persetujuan_bpp" type="file" name="persetujuan_bpp" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="sk_pembentukan_kelompok" class="mb-2 text-lg font-semibold">SK Pembentukan Kelompok</label>
                    <input id="sk_pembentukan_kelompok" type="file" name="sk_pembentukan_kelompok" class="rounded-lg bg-gray-50" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="daftar_ktp_anggota" class="mb-2 text-lg font-semibold">Daftar Anggota dan KTP Anggota</label>
                    <input id="daftar_ktp_anggota" type="file" name="daftar_ktp_anggota" class="rounded-lg bg-gray-50" />
                </div>

            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Simpan</button>
        </div>

    </section>
</template>

<script>
import AdminTopNav from '~/components/admin/TopNav.vue';
import { useUploadDokumen } from '~/stores/user/upload_dokumen'

export default {
    components: {
        AdminTopNav
    },

    setup() {
        const uploadDokumen = useUploadDokumen();

        // Handle file upload
        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            // Handle file here, e.g., set it in the form data or process it
            if (file) {
                uploadDokumen.formData.document = file.name;
                 // Example: just store the file name
            }
        };

        // Submit form data
        const submitForm = async () => {
            try {
                await formStore.submitForm();
                alert(formStore.responseMessage);
                formStore.$reset(); // Optional: reset form data after submission
            } catch (error) {
                alert(formStore.error);
            }
        };

        return {
            formData: uploadDokumen.formData,
            submitForm,
            handleFileUpload
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
