<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full mt-20 text-white px-8">
      <!-- End Header -->
      <div
        class="bg-[#C53030] rounded-xl h-[90px] px-6 flex py-4 justify-between relative w-full"
      >
        <div class="flex flex-col justify-between">
          <h4 class="md:text-xl text-sm tracking-normal md:tracking-wide">
            Selamat Datang di Website Digest!
          </h4>
          <p class="text-sm tracking-wide">
            Halo, {{ $profileStore.data?.nama_admin }}!
          </p>
        </div>
        <div class="lg:block hidden">
          <img
            class="absolute bottom-0 right-6 h-[130px]"
            src="/dashboard/welcome_dashboard.svg"
          />
        </div>
      </div>
      <!-- Header -->
      <div class="grid md:grid-cols-3 grid-cols-1 mt-10 gap-3 md:gap-6">
        <div
          class="bg-white border-2 flex space-x-4 border-[#E9EDF5] rounded-lg p-4 shadow-sm items-center"
        >
          <div
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <UsersIcon class="fill-blue-500" width="30" height="30" />
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="font-bold text-2xl text-black">30</h3>
            <span class="text-gray-500 text-sm tracking-wide"
              >Pengunjung Tamu Umum</span
            >
          </div>
        </div>
        <div
          class="bg-white border-2 flex space-x-4 border-[#E9EDF5] rounded-lg p-4 shadow-sm items-center"
        >
          <div
            class="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center"
          >
            <BsBoxSeamIcon class="fill-red-500" width="33" height="33" />
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="font-bold text-2xl text-black">41</h3>
            <span class="text-gray-500 text-sm tracking-wide"
              >Pengunjung Layanan Kirim</span
            >
          </div>
        </div>
        <div
          class="bg-white border-2 flex space-x-4 border-[#E9EDF5] rounded-lg p-4 shadow-sm items-center"
        >
          <div
            class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center"
          >
            <ChartIcon class="fill-green-500" width="30" height="30" />
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="font-bold text-2xl text-black">76</h3>
            <span class="text-gray-500 text-sm tracking-wide"
              >Total Pengunjung</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row my-10 gap-6 md:gap-5">
        <div class="bg-white p-3 roundend-lg flex flex-col lg:w-8/12 w-full">
          <div class="text-black">Total Pengunjung</div>
          <apexchart
            type="line"
            class="text-black w-full"
            :options="chartOptions"
            height="350"
            :series="series"
          ></apexchart>
        </div>

        <div
          class="flex-grow bg-white p-3 flex items-center justify-center rounded-lg"
        >
          <apexchart
            type="donut"
            height="350"
            class="text-black w-full"
            :options="chartPie"
            :series="series2"
          ></apexchart>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import BsBoxSeamIcon from "~/assets/icon/BsBoxSeam.svg?component";
import UsersIcon from "~/assets/icon/users-group-outline.svg?component";
import ChartIcon from "~/assets/icon/chart-outline.svg?component";

const { $profileStore } = useNuxtApp();

const chartOptions = {
  chart: {
    id: "basic-line",
    toolbar: {
      ...toolbar,
      tools: {
        download:
          '<img src="/dashboard/Vector.svg" class="h-5 w-5" alt="Dowload Logo" />',
        selection: true,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
    },
  },
  xaxis: {
    categories: [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ],
  },
  colors: ["#C53030", "#3F83F8"],
};

const series = [
  {
    name: "Layanan Kirim",
    data: [30, 40, 45, 50, 49, 60, 70],
  },
  {
    name: "Tamu umum",
    data: [10, 20, 30, 60, 90, 80, 70],
  },
];

const chartPie = {
  chart: {
    width: 380,
    type: "donut",
    toolbar: {
      show: true,
      tools: {
        download:
          '<img src="/dashboard/Vector.svg" class="h-5 w-5" alt="Dowload Logo" />',
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: "zoom",
    },
  },
  colors: ["#C53030", "#3F83F8"],
  labels: ["Layanan Kirim", "Tamu umum"],
};

const series2 = [30, 20];
</script>
