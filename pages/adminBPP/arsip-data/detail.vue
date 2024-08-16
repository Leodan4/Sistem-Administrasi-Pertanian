<template>
    <div v-if="isOpen" class="modal-backdrop">
        <div class="modal-content">
            <h3 class="font-bold text-lg pb-4">Detail</h3>
            <form>
                <div class="flex gap-8 justify-center">
                    <div class="w-1/2">
                        <div class="form-group">
                            <label for="title">No Dokumen</label>
                            <input type="text" id="title" v-model="formData.no_doc" readonly
                                class="rounded-lg bg-gray-100 border border-gray-300" />
                        </div>

                        <div class="form-group">
                            <label for="status">Status</label>
                            <input type="text" id="status" v-model="formData.status" readonly
                                class="rounded-lg bg-gray-100 border border-gray-300" />
                        </div>

                        <div class="form-group">
                            <label for="assistance-type">Jenis Bantuan</label>
                            <input type="text" id="assistance-type" v-model="formData.jenis_bantuan" readonly
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

                <div class="form-group">
                    <label for="description">Deskripsi</label>
                    <input type="text" id="description" v-model="formData.deskripsi" readonly
                        class="rounded-lg bg-gray-100 border border-gray-300" />
                </div>
                <div class="flex justify-center items-center">
                    <button type="button" class="close-button " @click="closeModal">Tutup</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';

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
                title: '',
                status: '',
                date: '',
                assistanceType: '',
                description: '',
            }),
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
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
    /* Adds some space above the button */
    text-align: center;
}
</style>