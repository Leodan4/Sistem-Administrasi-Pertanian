<template>
    <div v-if="isOpen" class="modal-backdrop">
        <div class="modal-content">
            <h3 class="font-bold text-lg pb-4">Detail</h3>
            <form ref="form">
    <div class="flex gap-8 justify-center items-center">
        <div class="w-1/2">
        <div class="form-group">
            <label for="document-number">No Dokumen</label>
            <input type="text" id="document-number" v-model="formData.no_doc" readonly
                class="rounded-lg bg-gray-100 border border-gray-300" />
        </div>
        <div class="form-group">
            <label for="status">Status</label>
            <input type="text" id="status" v-model="formData.status" readonly
                class="rounded-lg bg-gray-100 border border-gray-300" />
        </div>
    </div>

    <div class="w-1/2">
        <div class="form-group">
            <label for="title">Judul</label>
            <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300" />
        </div>
        <div class="form-group">
            <label for="date">Tanggal</label>
            <input type="text" id="date" v-model="formData.createdAt" readonly
                class="rounded-lg bg-gray-100 border border-gray-300" />
        </div>
    </div>
</div>

<div class="form-group mt-4">
    <label for="assistance-type">Jenis Bantuan</label>
    <input type="text" id="tittle" v-model="formData.jenis_bantuan" readonly
        class="rounded-lg bg-gray-100 border border-gray-300" />
</div>


                <div class="form-group">
                    <label for="description">Deskripsi</label>
                    <input type="text" id="description" v-model="formData.deskripsi" readonly
                        class="rounded-lg bg-gray-100 border border-gray-300" />
                </div>
                <div class="flex justify-center items-center">
                    <button type="button" class="close-button" @click="closeModal">Tutup</button>
                    <button type="button" class="print-button" @click="printPDF">Cetak PDF</button>  
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import plugin untuk tabel di jsPDF

export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        formData: {
            type: Object,
            required: true,
            default: () => ({
                no_doc: '',
                deskripsi: '',
                status: '',
                createdAt: '',
                jenis_bantuan: '',
                deskripsi: '',
            }),
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        printPDF() {
            // Buat instance jsPDF
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            // Path atau URL gambar kop surat
            const kopImage = '/KOPPTabalong.png'; // Ganti dengan path atau URL gambar kop surat
            
            // Tambahkan gambar kop di bagian atas
            pdf.addImage(kopImage, 'PNG', -10.5, 5, 230, 30); 

            // Pindahkan posisi Y untuk tabel di bawah gambar kop surat
            const startY = 40; // Sesuaikan jarak antara gambar dan tabel

            // Data untuk tabel
            const tableData = [
                ['No Dokumen', this.formData.no_doc],
                ['Judul', this.formData.title],
                ['Tanggal', this.formData.createdAt],
                ['Status', this.formData.status],
                ['Jenis Bantuan', this.formData.jenis_bantuan],
                ['Deskripsi', this.formData.deskripsi],
            ];

            // Tambahkan tabel ke PDF
            pdf.autoTable({
                head: [['Kolom', 'Data yang Diperoleh']],
                body: tableData,
                startY: startY, // Tentukan posisi Y tabel dimulai
                theme: 'grid', // Tema dengan garis grid
                margin: { top: 10, right: 10, bottom: 10, left: 10 },
                headStyles: {
                    fillColor: [0, 100, 0], // Warna latar belakang header tabel (misalnya biru)
                    textColor: [255, 255, 255], // Warna teks header tabel (misalnya putih)
                    fontSize: 12, // Ukuran font header
                }
            });

            // Simpan PDF
            const fileName = `Data Detail Tervalidasi - ${this.formData.no_doc}.pdf`;

// Simpan PDF dengan nama file yang telah ditentukan
pdf.save(fileName);
        },
    },
};
</script>




<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;
    border-radius: 10px;
    width: 800px;
    align-items: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.close-button {
    display: block;
    width: 50%;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    margin-right: 40px;
    text-align: center;
}
.print-button {
    display: block;
    width: 50%;
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
}
</style>
