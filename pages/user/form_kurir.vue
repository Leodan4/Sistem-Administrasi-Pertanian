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
                                    placeholder="Masukan Nama" v-model="nama" />
                            </div>
                            <div class="py-3">
                                <span for="no_telp" class="font-semibold">No Telp</span>
                                <input required type="bolean" name="no_telp" id="no_telp"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Masukan No Telp" v-model="no_telp" />
                            </div>
                            <div class="py-3">
                                <span for="penerima" class="font-semibold">Nama Penerima</span>
                                <select required name="penerima" id="penerima"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Pilih Nama Penerima" v-model="penerima">
                                    <option value="Opsi A">Saipul</option>
                                    <option value="Opsi B">Rojali</option>
                                    <option value="Opsi C">Mahmud</option>
                                </select>
                            </div>
                            <div class="py-3">
                                <span for="instansi" class="font-semibold">Asal Instansi</span>
                                <input required type="text" name="instansi" id="instansi"
                                    class="block w-full px-3 py-1 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Pilih Instansi" v-model="instansi" />
                            </div>
                            <div class="py-3">
                                <span for="file" class="font-semibold">Upload file</span>
                                <input required type="file" name="file" id="file"
                                    class="block w-full px-3 my-2 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                    placeholder="Masukan No Telp" />
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

</script>