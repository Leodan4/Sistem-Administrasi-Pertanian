<template>
  <MainLayout>
    <div class="w-full mt-20 text-black px-8">
      <table class="min-w-full bg-white-800 rounded-xl overflow-hidden">
        <thead class="bg-gray-100 border-2 border-gray-200 text-gray-500">
          <tr>
            <th class="py-2 px-4 text-center ">No Dokumen</th>
            <th class="py-2 px-4 text-center ">Judul</th>
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
              <span class="bg-green-100 text-green-700 font-semibold px-4 py-1 rounded">Completed</span>
            </td>
            <td class="py-2 px-4 text-center ">
              <button class="bg-[#0E9F6E] hover:bg-green-700 text-white font-bold py-1 px-4 rounded">Detail</button>
            </td>
          </tr>
          <!-- Baris data contoh lain dapat ditambahkan di sini -->
        </tbody>
      </table>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";


</script>
