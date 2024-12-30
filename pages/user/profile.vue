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
            await getData();
            user.value = user;
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
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Profile</div>
        <div class="w-full max-w-6xl">
            <div class="grid md:grid-cols-2 gap-6 px-8 md:px-20">
                <!-- Email -->
                <div class="flex flex-col w-full">
                    <label for="email" class="mb-2 text-lg font-semibold">Email</label>
                    <div v-if="!isEdit" id="email" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.email }}
                    </div>
                    <input
                        v-else
                        id="email"
                        type="email"
                        v-model="user.email"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Password -->
                <div class="flex flex-col w-full">
                    <label for="password" class="mb-2 text-lg font-semibold">Password</label>
                    <div v-if="!isEdit" id="password" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                       
                    </div>
                    <input
                        v-else
                        id="password"
                        type="password"
                        v-model="user.password"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- NIK -->
                <div class="flex flex-col w-full">
                    <label for="nik" class="mb-2 text-lg font-semibold">NIK</label>
                    <div v-if="!isEdit" id="nik" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.nik }}
                    </div>
                    <input
                        v-else
                        id="nik"
                        type="text"
                        v-model="user.nik"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Nama -->
                <div class="flex flex-col w-full">
                    <label for="nama" class="mb-2 text-lg font-semibold">Nama</label>
                    <div v-if="!isEdit" id="nama" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.username }}
                    </div>
                    <input
                        v-else
                        id="nama"
                        type="text"
                        v-model="user.username"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Alamat -->
                <div class="flex flex-col w-full">
                    <label for="alamat" class="mb-2 text-lg font-semibold">Alamat</label>
                    <div v-if="!isEdit" id="alamat" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.addres_kab + ', ' + user.addres_kec + ', ' + user.addres_des }}
                    </div>
                    <input
                        v-else
                        id="alamat"
                        type="text"
                        v-model="user.addres_kab"
                        placeholder="Kabupaten"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2 mb-2"
                    />
                    <input
                        v-else
                        type="text"
                        v-model="user.addres_kec"
                        placeholder="Kecamatan"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2 mb-2"
                    />
                    <input
                        v-else
                        type="text"
                        v-model="user.addres_des"
                        placeholder="Desa"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Telp -->
                <div class="flex flex-col w-full">
                    <label for="telp" class="mb-2 text-lg font-semibold">Telp</label>
                    <div v-if="!isEdit" id="telp" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.telp }}
                    </div>
                    <input
                        v-else
                        id="telp"
                        type="text"
                        v-model="user.telp"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Nama Kelompok Tani -->
                <div class="flex flex-col w-full">
                    <label for="nama_kelompok_tani" class="mb-2 text-lg font-semibold">Nama Kelompok Tani</label>
                    <div v-if="!isEdit" id="nama_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.name_kel_tani }}
                    </div>
                    <input
                        v-else
                        id="nama_kelompok_tani"
                        type="text"
                        v-model="user.name_kel_tani"
                        class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                    />
                </div>

                <!-- Alamat Kelompok Tani -->
                <div class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">{{ isEdit ? 'Alamat Kelompok Tani Kabupaten' : 'Alamat Kelompok Tani' }}</label>
                    <div v-if="!isEdit" id="alamat_kelompok_tani" class="rounded-lg h-11 bg-gray-50 flex items-center px-3 border-2">
                        {{ user.addres_kel_kab + ', ' + user.addres_kel_kac + ', ' + user.addres_kel_des }}
                    </div>
                    <template v-else>
                        <input
                            type="text"
                            v-model="user.addres_kel_kab"
                            placeholder="Kabupaten"
                            class="rounded-lg h-11 bg-gray-50 px-3 border-2 mb-2"
                        />
                    </template>
                </div>
                <div v-if="isEdit" class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani Kecamatan</label>
                    <input
                            type="text"
                            v-model="user.addres_kel_kac"
                            placeholder="Kecamatan"
                            class="rounded-lg h-11 bg-gray-50 px-3 border-2 mb-2"
                        />
                </div>
                <div v-if="isEdit" class="flex flex-col w-full">
                    <label for="alamat_kelompok_tani" class="mb-2 text-lg font-semibold">Alamat Kelompok Tani Desa</label>
                    <input
                            type="text"
                            v-model="user.addres_kel_des"
                            placeholder="Desa"
                            class="rounded-lg h-11 bg-gray-50 px-3 border-2"
                        />
                </div>
            </div>
        </div>

        <div class="py-6">
            <button
                class="bg-green-500 text-white border rounded-xl px-10 py-2"
                @click="toggleEdit"
            >
                {{ isEdit ? 'Save' : 'Edit Profile' }}
            </button>
        </div>
        <pre>
            {{ notif }}
        </pre>
    </section>
</template>

<script>
import axios from '/plugins/axios';
import { onMounted, ref } from 'vue';
import Header2 from '~/components/user/header_2.vue';
import { toast } from 'vue3-toastify'; 

const $axios = axios().provide.axios;

export default {
    components: {
        Header2,
    },
    setup() {
        const user = ref({});
        const isEdit = ref(false);
        const idUsers = localStorage.getItem('id_users');
        const notif = ref({});

        async function getData() {
            try {
                const response = await $axios.get(`/user/id/?id_users=${idUsers}`);
                user.value = response.data.data;
                user.value.password = '';
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }

        function toggleEdit() {
            if (isEdit.value) {
                saveData();
            }
            isEdit.value = !isEdit.value;
        }

        async function saveData() {
            try {
                await $axios.put(`/user/${idUsers}`, user.value);
                toast.success('Berhasil Update Profile!', {
                    autoClose: 2000,
                });
                getData();
            } catch (error) {
                console.error('Failed to save user data:', error);
                toast.error('Terdapat Error. Mohon Coba Lagi.', {
                    autoClose: 3000,
                });
            }
        }

        onMounted(() => {
            getData();
        });

        return {
            user,
            isEdit,
            toggleEdit,
        };
    },
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
