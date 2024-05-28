<template>
    <MainLayoutDInas>
      <div class="w-full mt-20 text-black px-8">
        <table class="min-w-full bg-white-800 rounded-xl overflow-hidden">
          <thead class="bg-gray-100 border-2 border-gray-200 text-gray-500">
            <tr>
              <th class="py-2 px-4 text-center ">No Dokumen</th>
              <th class="py-2 px-4 text-center ">Uraian</th>
              <th class="py-2 px-4 text-center ">Status</th>
              <th class="py-2 px-4 text-center ">Aksi</th>
            </tr>
          </thead>
          <tbody class="border-2 border-gray-300">
            <!-- Baris data contoh -->
            <tr>
              <td class="py-2 px-4 text-center text-black font-bold ">#9012</td>
              <td class="py-2 px-4 text-center ">Dokumen Contoh 1</td>
              <td class="py-2 px-4 text-center">
                <span class="bg-green-100 text-green-700 font-semibold px-4 py-1 rounded">Terverivikasi</span>
              </td>
              <td class="py-2 px-4 text-center ">
                <button class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded">Pengumuman Hasil</button>
              </td>
            </tr>
            <!-- Baris data contoh lain dapat ditambahkan di sini -->
          </tbody>
        </table>
  
        <div class="flex justify-end mt-8">
          <button class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
          <button class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
        </div>
  
      </div>
    </MainLayoutDInas>
  </template>
  
  <script setup>
  import MainLayoutDInas from "~/layouts/MainLayoutDinas.vue";
  
  
  </script>
  