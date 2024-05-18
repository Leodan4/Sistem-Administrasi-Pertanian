<template>
  <section>
    <div class="h-full w-full bg-[#F6F7FF]">
      <img class="w-40 md:w-64" src="/wellcompage/wp.svg" />

      <div
        class="flex justify-center gap-2 md:gap-48 flex-col md:flex-row md:items-center"
      >
        <div class="my-10 md:my-24 mx-5 md:block lg:hidden">
          <img src="/wellcompage/wp2.svg" class="md:my-24 mb-4 md:mb-0" />
        </div>

        <div class="kata-sambutan md:my-36">
          <h1 class="font-semibold text-3xl md:text-5xl mx-5">
            Bertamu dan kirim paket <br class="block" />
            lebih mudah dengan
            <span style="color: red">
              buku <br />
              tamu!</span
            >
          </h1>
          <hr class="border-t-4 border-[#C53030] my-4 mx-5 w-80" />
          <h3 class="text-sm md:text-lg mx-5">
            Proses digitalisasi penerimaan tamu dan kirim paket dengan <br />
            Buku Tamu!
          </h3>
          <button
            class="text-white py-2 px-6 my-4 mx-5 rounded-lg bg-[#C53030]"
          >
            Buat Janji
          </button>
        </div>

        <div class="my-24 hidden md:block">
          <img src="/wellcompage/wp2.svg" class="lg:block md:hidden lg:my-24" />
        </div>
      </div>

      <div class="">
        <h1
          class="font-semibold text-2xl md:text-4xl flex justify-center my-10"
        >
          Daftar Pilihan
        </h1>

        <div
          class="flex flex-col justify-center gap-5 md:gap-16 my-10 mx-20 md:mx-40 md:flex-row"
        >
          <div
            class="flex flex-col justify-center w-full h-[500px] md:h-[600px] bg-white rounded-xl border-t-8 shadow-lg border-t-[#C53030]"
          >
            <img
              src="/wellcompage/well 3.svg"
              class="w-96 h-96 py-4 md:py-20 px-8 md:px-20"
            />
            <h1
              class="flex justify-center font-bold text-xl md:text-2xl md:py-2"
            >
              Siswa
            </h1>
            <p
              class="flex justify-center font-semibold text-sm md:text-md md:py-2"
            >
              Buat janjian dengan siswa siswi!
            </p>
            <button
              @click="navigateTo('/user/form_siswa')"
              class="text-white py-2 mx-16 md:mx-20 my-10 rounded-lg bg-[#C53030]"
            >
              Buat janjian
            </button>
          </div>

          <div
            class="flex flex-col justify-center w-full h-[500px] md:h-[600px] bg-white rounded-xl border-t-8 shadow-lg border-t-[#C53030]"
          >
            <img
              src="/wellcompage/well 2.svg"
              class="w-96 h-96 py-4 md:py-20 px-8 md:px-20"
            />
            <h1 class="flex justify-center font-bold text-xl md:text-2xl">
              Guru/Karyawan
            </h1>
            <p
              class="flex justify-center text-center font-semibold text-sm md:text-md px-8 py-3"
            >
              Buat janjian dengan Guru atau Karyawan!
            </p>
            <button
              @click="navigateTo('/user/form_guru')"
              class="text-white py-2 mx-16 md:mx-20 my-9 rounded-lg bg-[#C53030]"
            >
              Buat janjian
            </button>
          </div>

          <div
            class="flex flex-col justify-center w-full h-[500px] md:h-[600px] bg-white rounded-xl border-t-8 shadow-lg border-t-[#C53030]"
          >
            <img
              src="/wellcompage/well.svg"
              class="w-96 h-96 py-4 md:py-20 px-8 md:px-20"
            />
            <h1
              class="flex justify-center font-bold text-xl md:text-2xl pt-5 pb-3"
            >
              Layanan Kirim
            </h1>
            <p
              class="flex justify-center font-semibold text-sm md:text-md py-2"
            >
              Titip barang anda di pos satpam!
            </p>
            <button
              @click="navigateTo('/user/form_kurir')"
              class="text-white py-2 mx-12 md:mx-20 my-10 rounded-lg bg-[#C53030]"
            >
              Titipkan Barang
            </button>
          </div>
        </div>
      </div>

      <footer class="bg-[#C53030] h-auto w-full mt-40">
        <div class="flex flex-col justify-center md:flex-row">
          <div class="flex flex-col md:flex-row gap-5 md:gap-40 mx-10 my-10">
            <div class="md:w-1/4">
              <img class="w-44" src="/wellcompage/telkom.svg" />
              <h1 class="text-white py-6 text-sm md:text-md">
                Sekolah IT terbaik di Indonesia yang <br />
                mengedepankan attitude is <br />
                everything
              </h1>
            </div>

            <div class="md:w-1/4">
              <h1 class="text-white text-3xl">Tautan Lain</h1>
              <div class="flex flex-col">
                <nuxt-link
                  to="https://smktelkom-mlg.sch.id/"
                  class="text-white pt-8 text-sm md:text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </nuxt-link>
                <nuxt-link
                  to="https://ppdb.smktelkom-mlg.sch.id/"
                  class="text-white pt-2 text-sm md:text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PPDB
                </nuxt-link>
              </div>
            </div>

            <div class="md:w-1/4">
              <h1 class="text-white text-3xl">Bantuan</h1>
              <h3 class="text-white text-sm md:text-md pt-8">
                Official SMK Telkom Malang
              </h3>
              <h2 class="text-white text-sm md:text-md pt-2">
                +62 812 2348 8999
              </h2>
            </div>

            <div class="md:w-1/4">
              <h1 class="text-white text-3xl">Lokasi Kami</h1>
              <h3 class="text-white text-sm md:text-md pt-8">
                Jl. Danau Ranau, Sawojajar
              </h3>
              <h3 class="text-white text-sm md:text-md pt-2">
                Kec. Kendungkandang
              </h3>
              <h3 class="text-white text-sm md:text-md pt-2">Kota Malang</h3>
              <h3 class="text-white text-sm md:text-md pt-2">65139</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script></script>
