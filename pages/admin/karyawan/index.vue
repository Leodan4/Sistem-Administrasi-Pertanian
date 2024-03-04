<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full my-8 px-8">
      <div>
        <div
          class="flex justify-center md:justify-normal items-center space-x-2 md:space-x-0"
        >
          <div class="flex items-center space-x-2 md:space-x-4 md:flex-grow">
            <select
              v-model="limit"
              @change="handleFilterChange"
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
                @input="handleFilterChange"
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
              @update:model-value="handleFilterChange"
              model-type="yyyy-MM-dd"
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
        <div class="mt-6" v-if="$generalStore.isLoading">
          <div class="animate-pulse">
            <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
            <div class="h-4 bg-gray-300 mb-6 rounded"></div>
            <div class="h-4 bg-gray-200 mb-6 rounded"></div>
            <div class="h-4 bg-gray-300 mb-6 rounded"></div>
            <div class="h-4 bg-gray-200 mb-6 rounded"></div>
          </div>
        </div>
        <div
          v-if="!$generalStore.isLoading"
          class="mt-6 overflow-x-auto overflow-y-visible sm:rounded-lg border h-min"
        >
          <table
            class="w-full overflow-y-visible text-sm text-left rtl:text-right text-gray-500 max-h-20"
          >
            <thead class="text-xs text-gray-700 uppercase">
              <tr class="bg-white border-b">
                <th class="px-3 py-4">Nama</th>
                <th class="px-3 py-4">No Telp</th>
                <th class="px-3 py-4">Asal Instansi</th>
                <th class="px-3 py-4">Janji</th>
                <th class="px-3 py-4">Jumlah Tamu</th>
                <th class="px-3 py-4">Orang yang ditemui</th>
                <th class="px-3 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr
                v-if="
                  $generalStore.error.status !== null ||
                  !$dashboardKaryawanStore.data
                "
              >
                <td class="text-center py-4" colspan="7">
                  <div v-if="$generalStore.error.message">
                    {{ $generalStore.error.message }}
                  </div>
                  <div v-else class="animate-pulse">
                    <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                    <div class="h-4 bg-gray-300 mb-6 rounded"></div>
                    <div class="h-4 bg-gray-200 mb-6 rounded"></div>
                  </div>
                </td>
              </tr>
              <tr
                v-else
                v-for="(item, index) in $dashboardKaryawanStore.data"
                :key="index"
                class="hover:bg-gray-50 bg-white"
              >
                <td class="px-3 py-4">{{ item.tamu.nama_tamu }}</td>
                <td class="px-3 py-4">{{ item.tamu.no_tlp }}</td>
                <td class="px-3 py-4">{{ item.asal_instansi }}</td>
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
                <td class="px-3 py-4">{{ item.jumlah_tamu }}</td>
                <td class="px-3 py-4">{{ item.guru.nama_guru }}</td>
                <td class="px-3 py-4">
                  <div
                    @click="handleDetail(item, item.id_transaksiGuru)"
                    class="flex space-x-2 items-center cursor-pointer"
                  >
                    <img class="w-6" src="/dashboard/AiOutlineInfoCircle.svg" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Table -->
        <!-- Pagination -->
        <div
          class="flex mt-8 items-center justify-between"
          v-if="
            $dashboardKaryawanStore.data &&
            !$generalStore.isLoading &&
            $generalStore.error.status === null
          "
        >
          <div>
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white">{{
                ($dashboardKaryawanStore.pagination.currentPage - 1) * limit + 1
              }}</span>
              to
              <span class="font-semibold text-gray-900 dark:text-white">{{
                $dashboardKaryawanStore.pagination.currentPage * limit >
                $dashboardKaryawanStore.pagination.totalItems
                  ? $dashboardKaryawanStore.pagination.totalItems
                  : $dashboardKaryawanStore.pagination.currentPage * limit
              }}</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">{{
                $dashboardKaryawanStore.pagination.totalItems
              }}</span>
              Entries
            </span>
          </div>
          <nav aria-label="Page navigation">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <button
                  :disabled="!$dashboardKaryawanStore.pagination.hasPrev"
                  @click="
                    changePage(
                      $dashboardKaryawanStore.pagination.currentPage - 1
                    )
                  "
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
                </button>
              </li>
              <!-- Render the pagination links based on totalPages -->
              <template
                v-for="page in $dashboardKaryawanStore.pagination.totalPages"
              >
                <li>
                  <button
                    @click="changePage(page)"
                    :class="{
                      'z-10 flex items-center justify-center px-3 h-8 leading-tight text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
                        page === $dashboardKaryawanStore.pagination.currentPage,
                      'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
                        page !== $dashboardKaryawanStore.pagination.currentPage,
                    }"
                  >
                    {{ page }}
                  </button>
                </li>
              </template>
              <li>
                <button
                  :disabled="!$dashboardKaryawanStore.pagination.hasNext"
                  @click="
                    changePage(
                      $dashboardKaryawanStore.pagination.currentPage + 1
                    )
                  "
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
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <!-- End Pagination -->
      </div>
    </div>
  </MainLayout>

  <!-- End modal -->
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const date = ref(formatDate(new Date()));

const search = ref(null);
const limit = ref(5);

const { $generalStore, $dashboardKaryawanStore } = useNuxtApp();

const router = useRouter();
const route = useRoute();

const handleDetail = (item, index) => {
  $generalStore.detail(item);
  router.push(`${route.fullPath}/${index}`);
};

const changePage = async (page) => {
  try {
    await $dashboardKaryawanStore.getAllKaryawan(
      page,
      limit.value,
      search.value,
      date.value
    );
  } catch (error) {
    console.log(error);
  }
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const handleFilterChange = debounce(async () => {
  try {
    await $dashboardKaryawanStore.getAllKaryawan(
      1,
      limit.value,
      search.value,
      date.value
    );
  } catch (error) {
    console.log(error);
  }
}, 600);

onMounted(async () => {
  try {
    await $dashboardKaryawanStore.getAllKaryawan();
  } catch (error) {
    console.log(error);
  }
});
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
