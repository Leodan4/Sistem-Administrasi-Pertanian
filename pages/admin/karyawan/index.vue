<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full mt-8 px-8">
      <!-- Filter -->
      <div
        class="flex justify-center md:justify-normal items-center space-x-2 md:space-x-0"
      >
        <div class="flex items-center space-x-2 md:space-x-4 md:flex-grow">
          <select
            v-model="limit"
            name="showData"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg py-[6px] focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            id="showData"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <div class="relative md:w-4/12">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              v-model="search"
              type="text"
              id="default-search"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Pencarian"
              required
            />
          </div>
        </div>

        <div class="md:w-4/12 lg:w-2/12">
          <vue-date-picker
            model-type="dd-MM-yyyy"
            :enable-time-picker="false"
            class="custom-date-picker"
            placeholder="Pilih Tanggal"
            v-model="date"
            place
          />
        </div>
      </div>
      <!-- End Filter -->
      <!-- Table -->
      <div
        class="mt-6 relative overflow-x-auto sm:rounded-lg border max-h-[400px] overflow-y-auto"
      >
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 max-h-20"
        >
          <thead class="text-xs text-gray-700 uppercase">
            <tr class="bg-white border-b">
              <th class="px-3 py-4">Nama</th>
              <th class="px-3 py-4">No Telp</th>
              <th class="px-3 py-4">Janji</th>
              <th class="px-3 py-4">Asal Intansi</th>
              <th class="px-3 py-4">Jumlah Tamu</th>
              <th class="px-3 py-4">Orang yang ditemui</th>
              <th class="px-3 py-4">Status</th>
              <th class="px-3 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr
              v-for="(item, index) in tableData"
              :key="index"
              class="hover:bg-gray-50 bg-white"
            >
              <td class="px-3 py-4">{{ item.nama }}</td>
              <td class="px-3 py-4">{{ item.noTelp }}</td>
              <td class="px-3 py-4">
                <div
                  :class="{
                    'bg-green-100': item.janji === 'Ada',
                    'bg-red-100': item.janji === 'Tidak Ada',
                  }"
                  class="max-w-min px-3 flex items-center py-1 rounded-[4px] justify-center space-x-2"
                >
                  <div
                    :class="{
                      'bg-green-600': item.janji === 'Ada',
                      'bg-red-600': item.janji === 'Tidak Ada',
                    }"
                    class="rounded-[3px] min-w-2 min-h-2"
                  ></div>
                  <div
                    :class="{
                      'text-green-500': item.janji === 'Ada',
                      'text-red-500 min-w-16': item.janji === 'Tidak Ada',
                    }"
                    class="font-bold"
                  >
                    {{ item.janji }}
                  </div>
                </div>
              </td>
              <td class="px-3 py-4">{{ item.asalInstansi }}</td>
              <td class="px-3 py-4">{{ item.jumlahTamu }}</td>
              <td class="px-3 py-4">{{ item.orangDitemui }}</td>
              <td class="px-3 py-4">
                <div
                  :class="{
                    'bg-[#ffe8b478]': item.status === 'Proses',
                    'bg-green-100': item.status === 'Selesai',
                    'bg-red-100': item.status === 'Gagal',
                  }"
                  class="max-w-min px-3 flex items-center py-1 rounded-[4px] justify-center space-x-2"
                >
                  <div
                    :class="{
                      'bg-yellow-400': item.status === 'Proses',
                      'bg-green-600': item.status === 'Selesai',
                      'bg-red-600': item.status === 'Gagal',
                    }"
                    class="rounded-[3px] min-w-2 min-h-2"
                  ></div>

                  <div
                    :class="{
                      'text-yellow-400': item.status === 'Proses',
                      'text-green-500': item.status === 'Selesai',
                      'text-red-500': item.status === 'Gagal',
                    }"
                    class="font-bold"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </td>
              <td class="px-3 py-4">
                <button
                  :data-popover-target="index"
                  data-popover-placement="left"
                  data-popover-trigger="click"
                  type="button"
                  class=""
                >
                  <NuxtImg class="w-5" src="/dashboard/dots.svg" />
                </button>
                <!-- PopOver -->
                <div
                  data-popover
                  :id="index"
                  role="tooltip"
                  class="absolute z-10 invisible max-w-min text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                >
                  <div class="bg-white rounded-lg min-w-max p-5">
                    <div class="flex flex-col space-y-5">
                      <div
                        @click="modalVerifikasi = !modalVerifikasi"
                        class="flex space-x-2 items-center cursor-pointer"
                      >
                        <NuxtImg
                          class="w-6"
                          src="/dashboard/MdOutlineVerified.svg"
                        />
                        <div>Verifikasi</div>
                      </div>
                      <div
                        @click="handleDetail(item, index)"
                        class="flex space-x-2 items-center cursor-pointer"
                      >
                        <NuxtImg
                          class="w-6"
                          src="/dashboard/AiOutlineInfoCircle.svg"
                        />
                        <div>Detail</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Pop Over -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End Table -->
      <!-- Pagination -->
      <div class="flex mt-8 items-center justify-between">
        <div>
          <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <!-- current -->
            <span class="font-semibold text-gray-900 dark:text-white">1</span>
            to
            <!-- total page -->
            <span class="font-semibold text-gray-900 dark:text-white">10</span>
            of
            <!-- total data -->
            <span class="font-semibold text-gray-900 dark:text-white">100</span>
            Entries
          </span>
        </div>

        <nav aria-label="Page navigation">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >4</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- End Pagination -->
    </div>
  </MainLayout>
  <!-- modal -->
  <div
    v-if="modalVerifikasi"
    class="absolute top-0 left-0 flex items-center justify-center right-0 z-50 bottom-0 h-screen w-screen"
  >
    <div
      class="bg-white z-50 w-[428px] h-min flex flex-col space-y-6 rounded-xl px-6 py-6"
    >
      <div class="flex justify-between h-min">
        <span class="text-2xl font-bold">Verifikasi</span>
        <div
          @click="modalVerifikasi = false"
          class="relative top-0 cursor-pointer"
        >
          <NuxtImg class="" width="25" src="/dashboard/close-outline.svg" />
        </div>
      </div>
      <form class="min-w-full flex flex-col">
        <div class="flex flex-col pt-4 space-y-3">
          <label
            for="countries"
            class="block font-bold text-md text-gray-900 dark:text-white"
            >Kode Verifikasi</label
          >
          <input
            type="text"
            id="default-search"
            class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Masukan Kode Verifikasi"
            required
            maxlength="4"
          />
        </div>
        <button
          type="button"
          class="place-self-end bg-[#E4262C] text-white py-2 px-10 rounded-lg mt-10"
        >
          Simpan
        </button>
      </form>
    </div>
  </div>
  <div
    v-if="modalVerifikasi"
    class="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-60 z-40 h-screen w-screen"
  ></div>
  <!-- End modal -->
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const date = ref();

const search = ref(null);
const limit = ref(5);

const { $generalStore } = useNuxtApp();

const router = useRouter();
const route = useRoute();

const modalVerifikasi = ref(false);

const handleDetail = (item, index) => {
  $generalStore.detail(item);
  router.push(`${route.fullPath}/${index}`);
};

const tableData = ref([
  {
    nama: "Atsal Faiz",
    noTelp: "0889790990",
    janji: "Ada",
    asalInstansi: "SMK Telkom Malang",
    jumlahTamu: 3,
    orangDitemui: "Raffi Joeta",
    status: "Proses",
    keterangan: "Sesuai dengan janji",
  },
  {
    nama: "Budi Setiawan",
    noTelp: "0812345678",
    janji: "Tidak Ada",
    asalInstansi: "Universitas ABC",
    jumlahTamu: 2,
    orangDitemui: "Ani Susanti",
    status: "Gagal",
    keterangan: "Tidak ada pemberitahuan sebelumnya",
  },
  {
    nama: "Citra Dewi",
    noTelp: "0856789012",
    janji: "Ada",
    asalInstansi: "Politeknik XYZ",
    jumlahTamu: 5,
    orangDitemui: "Darma Pratama",
    status: "Selesai",
    keterangan: "Semua berjalan lancar",
  },
  // ... (objek-objek lainnya)
]);
</script>

<style scoped>
input {
  outline-style: none;
  box-shadow: none;
}

.custom-date-picker {
  --dp-border-radius: 8px;
  --dp-input-padding: 6.5px;
}
</style>
