<template>
    <MainLayoutDInas>
      <div class="w-full mt-20 text-black px-8">
        <table class="min-w-full bg-white-800 rounded-xl overflow-hidden">
          <thead class="bg-gray-100 border-2 border-gray-200 text-gray-500">
            <tr>
              <th class="py-2 px-4 text-center ">No Dokumen</th>
              <th class="py-2 px-4 text-center ">Sumber Dana</th>
              <th class="py-2 px-4 text-center ">Aksi</th>
            </tr>
          </thead>
          <tbody class="border-2 border-gray-300">
            <!-- Baris data contoh  -->
            <tr>
              <td class="py-2 px-4 text-center text-black font-bold ">#9012</td>
              <td class="py-2 px-4 text-center ">Tabalong</td>
              <td class="py-2 px-4 text-center ">
                <button class="bg-[#1C64F2] hover:bg-blue-800 text-white py-1 px-4 mx-2 rounded">Edit</button>
                <button class="bg-[#E02424] hover:bg-red-800 text-white py-1 px-4 rounded">Hapus</button>
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
  