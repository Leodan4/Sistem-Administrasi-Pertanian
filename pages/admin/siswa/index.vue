<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full mt-8 px-8">
      <div class="md:flex justify-between md:space-y-0 space-y-2 items-center">
        <div class="w-full md:w-4/12">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
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
              type="text"
              id="default-search"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Pencarian"
              required
            />
          </div>
        </div>

        <div class="w-full md:w-4/12 lg:w-3/12">
          <vue-date-picker
            class="custom-date-picker"
            placeholder="Pilih Tanggal"
            v-model="date"
            place
            :format="format"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const date = ref();
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
</script>

<style scoped>
input {
  outline-style: none;
  box-shadow: none;
}

.custom-date-picker {
  --dp-border-radius: 8px;
  --dp-input-padding: 8px;
}
</style>
