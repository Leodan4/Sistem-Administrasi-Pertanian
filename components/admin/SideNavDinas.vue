<template>
    <button @click="toggleSidebar" class="fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z">
            </path>
        </svg>
    </button>

    <aside
        :class="['text-gray-600 bg-white h-full border-2 flex z-40 fixed flex-col overflow-y-scroll transition-transform duration-300', { '-translate-x-full': !isSidebarOpen, 'w-[250px]': isSidebarOpen }]">
        <div class="flex justify-center pt-16">
            <img src="/logo.png" alt="Logo" class="w-36">
        </div>
        <svg class="w-6 h-6 font-bold fill-white" fill="#fff" aria-hidden="true" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>

        <div class="menu mx-6">
            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'dashboard' }"
                @click.prevent="navigateTo('/adminDinas/dashboard/', 'dashboard')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">
                <i class="fb-icon fb-home mr-2"></i>
                Dashboard
            </a>
        </div>

        <!-- daftar dokumen -->
        <div class="menu mx-6">
            <h1 class="text-sm mx-2 text-gray-400">Daftar Dokumen</h1>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'baru' }"
                @click.prevent="navigateTo('/adminDinas/baru/', 'baru')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Baru</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'tidak-sesuai' }"
                @click.prevent="navigateTo('/adminDinas/tidak-sesuai/', 'tidak-sesuai')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Tidak
                Sesuai</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'tervalidasi' }"
                @click.prevent="navigateTo('/adminDinas/tervalidasi/', 'tervalidasi')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Tervalidasi</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'realisasi' }"
                @click.prevent="navigateTo('/adminDinas/realisasi/', 'realisasi')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Realisasi</a>
        </div>

        <!-- Lainnya -->
        <div class="menu mb-8 mx-6">
            <h1 class="text-sm mx-2 text-gray-400">Lainnya</h1>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'sumber-dana' }"
                @click.prevent="navigateTo('/adminDinas/sumber-dana/', 'sumber-dana')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Sumber
                Dana</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'import-data' }"
                @click.prevent="navigateTo('/adminDinas/import-data/', 'import-data')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Import
                Data</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'rekap-data' }"
                @click.prevent="navigateTo('/adminDinas/rekap-data/', 'rekap-data')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Rekap
                Data</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'arsip-data' }"
                @click.prevent="navigateTo('/adminDinas/arsip-data/', 'arsip-data')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Arsip
                Data</a>

            <a href="#" :class="{ 'active rounded-lg': activeMenu === 'help' }"
                @click.prevent="navigateTo('/adminDinas/help/', 'help')"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Help</a>

            <button @click.prevent="handleLogout"
                class="block my-2 py-2 px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Logout</button>
        </div>
    </aside>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'; // Import stylesheet Font Awesome
import { initFlowbite } from "flowbite";
import { useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { useLoginStore } from "~/stores/login"; // Adjust the import path as needed

export default {
    setup() {
        const loginStore = useLoginStore();
        const isSidebarOpen = ref(true);

        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value;
        };

        const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
        // Hapus semua item dari localStorage
        localStorage.clear();
        
        // Jika ingin lebih spesifik:
        localStorage.removeItem("id_users");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("username");

        // Lakukan logout dari store, jika ada
        loginStore.logout();

        // Redirect ke halaman login atau beranda setelah logout
        router.push('/');
    }
};

        const router = useRouter();
        const activeMenu = ref('dashboard'); // Default menu yang aktif

        onMounted(() => {
            initFlowbite();
            // Saat komponen dimuat, cek apakah kita berada di laman yang cocok dengan activeMenu
            checkActiveMenu();
        });

        const setActiveMenu = (menu) => {
            activeMenu.value = menu;
        };

        const navigateTo = (path, menu) => {
            setActiveMenu(menu);
            router.push(path);
        };

        const checkActiveMenu = () => {
            const currentPath = router.currentRoute.value.path;
            if (currentPath === '/adminDinas/dashboard/') {
                setActiveMenu('dashboard');
            } else if (currentPath === '/adminDinas/baru/') {
                setActiveMenu('baru');
            } else if (currentPath === '/adminDinas/baru/detail') {
                setActiveMenu('baru');
            } else if (currentPath === '/adminDinas/tidak-sesuai/') {
                setActiveMenu('tidak-sesuai'); // Ensure this matches the actual route
            } else if (currentPath === '/adminDinas/revisi/') {
                setActiveMenu('revisi'); // Fix any inconsistencies here
            } else if (currentPath === '/adminDinas/tervalidasi/') {
                setActiveMenu('tervalidasi');
            } else if (currentPath === '/adminDinas/tervalidasi/form_realisasi') {
                setActiveMenu('tervalidasi');
            } else if (currentPath === '/adminDinas/realisasi/') {
                setActiveMenu('realisasi');
            } else if (currentPath === '/adminDinas/realisasi/Pengumuman_hasil') {
                setActiveMenu('realisasi');
            } else if (currentPath === '/adminDinas/sumber-dana/') {
                setActiveMenu('sumber-dana');
            } else if (currentPath === '/adminDinas/import-data/') {
                setActiveMenu('import-data');
            } else if (currentPath === '/adminDinas/rekap-data/') {
                setActiveMenu('rekap-data');
            } else if (currentPath === '/adminDinas/rekap-data/rincian') {
                setActiveMenu('rekap-data');
            } else if (currentPath === '/adminDinas/arsip-data/') {
                setActiveMenu('arsip-data');
            } else if (currentPath === '/adminDinas/arsip-data/rincian') {
                setActiveMenu('arsip-data');
            } else if (currentPath === '/adminDinas/help/') {
                setActiveMenu('help');
            }
        };

        // Watch for route changes to update the active menu
        watch(() => router.currentRoute.value.path, () => {
            checkActiveMenu();
        });

        return { activeMenu, navigateTo, handleLogout, toggleSidebar, isSidebarOpen };
    }
};
</script>

<style scoped>
.menu a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #4B5563;
    transition: background-color 0.3s;
}

.menu a:hover {
    color: white;
}

.menu a.active {
    background-color: #0E9F6E;
    color: white;
    /* Ubah warna teks untuk menu yang aktif menjadi putih */
}
</style>
