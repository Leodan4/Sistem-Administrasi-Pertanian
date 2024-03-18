<template>
  <div class="px-4 py-4">
    <div
      class="bg-white rounded-lg relative border-2 border-[#E9EDF5] shadow-sm px-6 py-6"
    >
      <div class="absolute bottom-4 right-10">
        <button
          class="bg-[#C53030] px-4 text-white py-2 rounded-lg"
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
            <td>{{ props.data.yangDiterima.nama }}</td>
          </tr>
          <tr class="px-2 py-6">
            <td><span class="px-2">2.</span>No Telp</td>
            <td class="px-4">:</td>
            <td>{{ props.data.yangDiterima.no_tlp }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">3.</span>Asal Instansi</td>
            <td class="px-4">:</td>
            <td>{{ props.data.asal_instansi }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">4.</span>Nama Penerima</td>
            <td class="px-4">:</td>
            <td>{{ props.data.tamu.nama_tamu }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2 min-w-16">5.</span>No Telp Penerima</td>
            <td class="px-4">:</td>
            <td>{{ props.data.tamu.no_tlp }}</td>
          </tr>
          <tr class="py-6">
            <td><span class="px-2">6.</span>Tanggal Dititipkan</td>
            <td class="px-4">:</td>
            <td>{{ props.data.tanggal_dititipkan }}</td>
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
                <img
                  class="max-w-full max-h-[220px] object-contain"
                  :src="imageUrl + props.data.foto"
                  @load="handleImageLoad"
                  @error="handleImageError"
                  :class="{ 'opacity-0': loadingImage }"
                />
                <div v-if="loadingImage" role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
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

const { imageUrl } = useRuntimeConfig().public;

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const loadingImage = ref(true);

const handleImageLoad = () => {
  // Image has loaded
  loadingImage.value = false;
};

const handleImageError = () => {
  // Image failed to load
  loadingImage.value = false;
  // You can handle the error here, e.g., show a placeholder image or an error message.
};
</script>
