<!-- <template>
    <section class="h-screen flex flex-col justify-center items-center bg-white mt-96 md:mt-0">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Profile</div>

        <div v-if="user" class="flex flex-row justify-center gap-10">
            <div class="grid md:grid-cols-2 gap-6">
                
                <div class="flex flex-col w-[500px]">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <div id="email" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.email }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <div id="password" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.password }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <div id="nik" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.nik }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="nama" class="mb-2 text-lg font-semibold">Nama</label>
                    <div id="name" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.name }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="alamat" class="mb-2 text-lg font-semibold">Alamat</label>
                    <div id="alamat" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.alamat }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <div id="telp" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.telp }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="nama_kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <div id="nama_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.nama_kelompok_tani }}
                    </div>
                </div>

                <div class="flex flex-col w-[500px]">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani</label>
                    <div id="alamat_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.alamat_kelompok_tani }}
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center">
            Loading data...
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2" @click="editProfile">Edit Profile</button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import Header2 from '~/components/user/header_2.vue';
import { useUserStore } from '~/stores/user/profile';

export default {
    components: {
        Header2
    },
    setup() {
        const userStore = useUserStore();
        const user = ref(null);

        onMounted(async () => {
            await userStore.getData();
            user.value = userStore.user;
        });

        function editProfile() {
            // Logic untuk menangani edit profile
            console.log("Edit Profile clicked");
        }

        return {
            user,
            editProfile
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style> -->










<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white mt-96 md:mt-0">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Profile</div>

        <div v-if="userStore.user" class="flex flex-row justify-center gap-10">
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Email -->
                <div class="flex flex-col w-[500px]">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <div id="email" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.email }}
                    </div>
                </div>

                <!-- Password -->
                <div class="flex flex-col w-[500px]">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <div id="password" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.password }}
                    </div>
                </div>

                <!-- NIK -->
                <div class="flex flex-col w-[500px]">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <div id="nik" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.nik }}
                    </div>
                </div>

                <!-- Nama -->
                <div class="flex flex-col w-[500px]">
                    <label for="nama" class="mb-2 text-lg font-semibold">Nama</label>
                    <div id="name" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.name }}
                    </div>
                </div>

                <!-- Alamat -->
                <div class="flex flex-col w-[500px]">
                    <label for="alamat" class="mb-2 text-lg font-semibold">Alamat</label>
                    <div id="alamat" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.alamat }}
                    </div>
                </div>

                <!-- Telp -->
                <div class="flex flex-col w-[500px]">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <div id="telp" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.telp }}
                    </div>
                </div>

                <!-- Nama Kelompok Tani -->
                <div class="flex flex-col w-[500px]">
                    <label for="nama_kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <div id="nama_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.nama_kelompok_tani }}
                    </div>
                </div>

                <!-- Alamat Kelompok Tani -->
                <div class="flex flex-col w-[500px]">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani</label>
                    <div id="alamat_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ userStore.user.alamat_kelompok_tani }}
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="userStore.loading" class="text-center">
            Loading data...
        </div>

        <div v-else-if="userStore.error" class="text-center text-red-500">
            {{ userStore.error }}
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2" @click="editProfile">Edit
                Profile</button>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import Header2 from '~/components/user/header_2.vue';
import { useUserStore } from '~/stores/user/profile';

export default {
    components: {
        Header2
    },
    setup() {
        const userStore = useUserStore();

        const fetchUser = async (page = 1) => {
            try {
                await userStore.getData(page);
                console.log("user after fetch:", user.value);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        onMounted(async () => {
            fetchUser().then(() => {
            });
        });

        function editProfile() {
            // Logic untuk menangani edit profile
            console.log("Edit Profile clicked");
        }

        return {
            userStore,
            editProfile
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
