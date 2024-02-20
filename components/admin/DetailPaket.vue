<template>
  <div class="px-4 py-4">
    <div
      class="bg-white rounded-lg relative border-2 border-[#E9EDF5] shadow-sm px-6 py-6"
    >
      <div class="absolute bottom-4 right-10">
        <button
          class="bg-[#E4262C] px-4 text-white py-2 rounded-lg"
          @click="router.back()"
        >
          Back
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="font-bold text-center text-2xl">Detail Data</div>
      </div>
      <table class="mt-8 overflow-y-auto">
        <tbody class="w-full">
          <tr class="px-2 py-4">
            <td><span class="px-2">1.</span>Nama</td>
            <td class="px-4">:</td>
            <td>{{ props.data.nama }}</td>
          </tr>
          <tr class="px-2 py-6">
            <td><span class="px-2">2.</span>No Telp</td>
            <td class="px-4">:</td>
            <td>{{ props.data.noTelp }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">3.</span>Asal Instansi</td>
            <td class="px-4">:</td>
            <td>{{ props.data.asalInstansi }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">4.</span>Nama Penerima</td>
            <td class="px-4">:</td>
            <td>{{ props.data.namaPenerima }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2 min-w-16">5.</span>No Telp Penerima</td>
            <td class="px-4">:</td>
            <td>{{ props.data.noTelp }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">6.</span>Tanggal Dititipkan</td>
            <td class="px-4">:</td>
            <td>{{ props.data.tanggal }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">7.</span>Status</td>
            <td class="px-4">:</td>
            <td>{{ props.data.status }}</td>
          </tr>
          <tr class="">
            <td><span class="px-2">8.</span>Foto</td>
            <td class="px-4">:</td>
            <td class="py-6">
              <div class="flex items-start justify-start">
                <NuxtImg
                  class="max-w-full max-h-[220px] object-contain"
                  src="/assets/bg-login.png"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const props = defineProps(["data", "params"]);
</script>
