<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
                                                                                                                                                                                                                                                                                                                                                                <Header2 />
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

                <div class="flex flex-col w-full">
                    <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <div class="relative">
                        <div @click="toggleDropdown"
                            class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 cursor-pointer">
                            <span v-if="!selectedSubOption">{{ selectedOption ? selectedOption : 'Pilih Jenis Bantuan' }}</span>
                            <span v-if="selectedSubOption">{{ selectedSubOption }}</span>
                        </div>
                        <div v-if="isDropdownOpen"
                            class="absolute z-10 mt-1 w-full rounded-lg bg-white border-2 border-gray-400">
                            <ul>
                                <li v-for="option in displayedOptions" :key="option.value"
                                    @click="onOptionSelect(option)"
                                    :class="{ 'bg-green-500 text-white': selectedOption === option.label, 'hover:bg-green-600 hover:text-white': selectedOption !== option.label }">
                                    <span>{{ option.label }}</span>
                                    <ul v-if="selectedOption === option.label" class="pl-4">
                                        <li v-for="subOption in option.subOptions" :key="subOption.value"
                                            @click.stop="onSubOptionSelect(subOption)"
                                            class="p-2 cursor-pointer hover:bg-white hover:text-green-500"
                                            :class="{ 'text-green-500': selectedSubOption === subOption.label }">
                                            {{ subOption.label }}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
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
import { useUploadDokumen } from '~/stores/user/upload_dokumen';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


export default {
    components: {
        Header2,
    },
    setup() {
        const id_users = localStorage.getItem("id_users");
        const title = ref("");
        const deskripsi = ref("");
        const selectedOption = ref("");
        const selectedSubOption = ref("");
        const isDropdownOpen = ref(false);
        const router = useRouter();
        const uploadDokumen = useUploadDokumen();

        const categories = [
            {
                name: "Jenis Bantuan Sarana",
                subOptions: [
                    { value: "pupuk", label: "Pupuk" },
                    { value: "obat_obatan", label: "Obat-obatan" },
                    { value: "bibit", label: "Bibit" },
                    { value: "alsin", label: "Alsin" },
                    { value: "dll_sarana", label: "dll" }
                ]
            },
            {
                name: "Jenis Bantuan Prasarana",
                subOptions: [
                    { value: "gabang", label: "Gabang" },
                    { value: "gudang", label: "Gudang" },
                    { value: "sumur_bor", label: "Sumur Bor" },
                    { value: "saluran_irigasi", label: "Saluran Irigasi" },
                    { value: "cetak_sawah", label: "Cetak Sawah" },
                    { value: "embung", label: "Embung" },
                    { value: "dll_prasarana", label: "dll" }
                ]
            },
            {
                name: "Jenis Bantuan Ketahanan Pangan",
                subOptions: [
                    { value: "lumbung", label: "Lumbung" },
                    { value: "bansos_modal_usaha", label: "Bansos Modal Usaha" },
                    { value: "lantai_jemur", label: "Lantai Jemur" },
                    { value: "alat_pengolahan_hasil", label: "Alat Pengolahan Hasil" },
                    { value: "dll_pangan", label: "dll" }
                ]
            }
        ];

        const displayedOptions = ref(categories.map(category => ({
            value: category.name,
            label: category.name,
            subOptions: category.subOptions
        })));

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const onOptionSelect = (option) => {
            if (option.subOptions) {
                selectedOption.value = option.label;
            }
        };

        const onSubOptionSelect = (subOption) => {
            selectedSubOption.value = subOption.label;
            isDropdownOpen.value = false;
        };

        const handleFileUpload = (key, event) => {
            const file = event.target.files[0];
            if (file) {
                uploadDokumen.formData.append(key, file);
            }
        };

        const handleUploadDokumen = async () => {
            uploadDokumen.formData.append("id_users", id_users);
            uploadDokumen.formData.append("title", title.value);
            uploadDokumen.formData.append("deskripsi", deskripsi.value);
            uploadDokumen.formData.append("jenis_bantuan", selectedSubOption.value || selectedOption.value);

            try {
                const response = await uploadDokumen.submitForm();
                console.log(response);

                toast.success("Dokumen berhasil diupload", {
                    onClose: () => {
                        router.push('/user/dashboard');
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
            selectedOption,
            selectedSubOption,
            displayedOptions,
            isDropdownOpen,
            toggleDropdown,
            onOptionSelect,
            onSubOptionSelect,
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





<!-- .bg-green-500 {
    background-color: #48bb78;
}

.bg-green-200 {
    background-color: #c6f6d5;
}

.bg-green-100 {
    background-color: #f0fdf4;
}

.text-white {
    color: #ffffff;
} -->