<template>
  <MainLayout>
    <div class="w-full mt-20 text-white px-8">
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
      <div class="grid md:grid-cols-3 grid-cols-1 mt-10 gap-3 md:gap-6">
        <div
          class="bg-white border-2 flex space-x-4 border-[#E9EDF5] rounded-lg p-4 shadow-sm items-center"
        >
          <div
            class="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center"
          >
            <UsersIcon class="fill-red-500" width="30" height="30" />
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="font-bold text-2xl text-black">
              {{ $mainDashboard.$state.dashboard.data?.totalTamuUmum }}
            </h3>
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
            <h3 class="font-bold text-2xl text-black">
              <!-- {{
                $mainDashboard.dashboard?.data[1]
                  ? $mainDashboard.dashboard?.data[1]
                  : "loading"
              }} -->
              {{ $mainDashboard.$state.dashboard.data?.totalLayananKirim }}
            </h3>
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
            <h3 class="font-bold text-2xl text-black">
              <!-- {{
                $mainDashboard.dashboard?.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )
              }} -->
              {{ $mainDashboard.$state.dashboard.data?.totalKeseluruhan }}
            </h3>
            <span class="text-gray-500 text-sm tracking-wide"
              >Total Pengunjung</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row my-10 gap-6 md:gap-5">
        <div class="bg-white p-3 roundend-lg flex flex-col lg:w-8/12 w-full">
          <div class="pt-2 pb-6 px-5 flex justify-between items-center">
            <p class="text-black font-semibold text-lg">Statistik Pengunjung</p>
            <select
              @change="getLineChart"
              v-model="weekLine"
              id="countries"
              class="bg-gray-20 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            >
              <option :value="null" disabled>Pilih Kurun Waktu</option>
              <option value="1" selected>Minggu Ini</option>
              <option value="2">2 Minggu Terakhir</option>
              <option value="3">3 Minggu Terakhir</option>
              <option value="4">4 Minggu Terakhir</option>
            </select>
          </div>
          <apexchart
            type="line"
            class="text-black w-full"
            :options="chartLines"
            height="350"
            :series="$mainDashboard.$state.dashboard.dataLine"
          ></apexchart>
        </div>

        <div
          class="flex-grow bg-white p-3 flex flex-col items-center rounded-lg"
        >
          <div class="pt-2 pb-6 px-5 w-full text-left">
            <p class="text-black font-semibold text-left text-lg">
              Total Pengunjung
            </p>
          </div>
          <apexchart
            type="donut"
            height="350"
            class="text-black w-full"
            :options="chartPie"
            :series="$mainDashboard.dashboard.dataPie"
          ></apexchart>
          <div class="w-full text-left py-5">
            <select
              @change="getPieChart"
              v-model="weekPie"
              id="countries"
              class="bg-gray-20 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            >
              <option :value="null" disabled>Pilih Kurun Waktu</option>
              <option value="1" selected>7 Hari Terakhir</option>
              <option value="2">14 Hari Terakhir</option>
              <option value="3">21 Hari Terakhir</option>
              <option value="4">28 Hari Terakhir</option>
            </select>
          </div>
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

const { $profileStore, $mainDashboard } = useNuxtApp();

const weekPie = ref(1);
const weekLine = ref(1);

const getLineChart = () => {
  $mainDashboard.getAllStatistik(weekLine.value, "line");
  console.log($mainDashboard.dashboard.dataLine);
};

const getPieChart = () => {
  $mainDashboard.getAllStatistik(weekPie.value, "pie");
  console.log($mainDashboard.dashboard.dataPie);
};
const chartLines = {
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

const chartPie = {
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "bottom",
    horizontalAlign: "center",
    floating: false,
    fontSize: "14px",
    fontFamily: "Lato",
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: undefined,
      useSeriesColors: false,
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10,
      },

      donut: {
        size: "70%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            color: undefined,
            offsetY: 25,
            formatter: function (val) {
              return val;
            },
          },
          value: {
            show: true,
            fontSize: "26px",
            fontFamily: "Lato",
            fontWeight: 550,
            color: undefined,
            offsetY: -20,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Pengunjung",
            fontSize: "14px",
            fontFamily: "Lato",
            fontWeight: 500,
            color: "#888988",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  },
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
  labels: $mainDashboard.dashboard?.labels,
};

onMounted(async () => {
  try {
    await $mainDashboard.getAllDashboard();
    await $mainDashboard.getAllStatistik(1, "line");
    await $mainDashboard.getAllStatistik(1, "pie");
  } catch (error) {
    console.log(error);
  }
});
</script>
