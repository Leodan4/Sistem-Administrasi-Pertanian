<template>
  <section class="h-screen flex flex-col justify-center items-center bg-white mt-8 md:mt-0 sm:mt-0">
    <Header></Header>

    <div class="flex flex-col justify-center items-center w-full px-12 sm:px-8 md:px-16 lg:px-32 xl:px-64 gap-6">
      <button
        v-for="item in navigation"
        :key="item.url"
        @click="!item.disabled && navigateTo(item.url)"
        :disabled="item.disabled"
        :class="[
          'flex flex-row items-center justify-between gap-6 py-4 px-6 w-full bg-white rounded-xl shadow-xl border-4 cursor-pointer transition disabled:cursor-not-allowed duration-300 ease-in-out',
          { 'hover:bg-gray-100': !item.disabled, 'cursor-not-allowed opacity-50': item.disabled },
        ]"
         :title="item.disabled ? item.tooltip : ''"
      >
        <div class="flex flex-row items-center gap-6">
          <Icon :icon="item.icon" color="#0E9F6E" :height="32" />
          <p class="font-semibold text-lg">{{ item.title }}</p>
        </div>
        <div>
          <Icon :icon="item.icons" color="#0E9F6E" :height="32" />
        </div>
      </button>
    </div>

    <UserNotification :is-open="isNotificationOpen" :notification-name="notification.name" :message="notification.message" @close="handleCloseNotification" />
  </section>
</template>

<script>
import axios from '../plugins/axios';
import { ref, onMounted } from 'vue';
import Header from '~/components/user/header.vue';
import { Icon } from '@iconify/vue';

const $axios = axios().provide.axios;

export default {
  components: {
    Header,
    Icon,
  },

  setup() {
    const id_users = ref(localStorage.getItem('id_users'));
    const isNotificationOpen = ref(false);
    const notification = ref({ name: '', message: '' });

    const getNotifikasi = async () => {
      try {
        const response = await $axios.get(`/notif/${id_users.value}`);
        const notifications = response.data.notifications;

        if (notifications.length > 0) {
          const latestNotification = notifications[notifications.length - 1];

          const existingData = JSON.parse(localStorage.getItem('notification')) || {};

          if (existingData.id_user !== id_users.value || existingData.notification_name !== latestNotification.notification_name) {
            notification.value = {
              name: latestNotification.notification_name,
              message: latestNotification.message,
            };
            isNotificationOpen.value = true;
          }
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data notifikasi:', error);
      }
    };

    const handleCloseNotification = () => {
      localStorage.setItem(
        'notification',
        JSON.stringify({
          id_user: id_users.value,
          notification_name: notification.value.name,
          message: notification.value.message,
        })
      );
      isNotificationOpen.value = false;
    };

    const navigation = ref([
      {
        url: '/user/upload_dokumen/',
        icon: 'ph:upload-bold',
        title: 'Upload Dokumen',
        icons: 'flowbite:chevron-right-outline',
        disabled: false,
        tooltip: '',
      },
      {
        url: '/user/progress_dokumen/',
        icon: 'octicon:hourglass-16',
        title: 'Progres Dokumen',
        icons: 'flowbite:chevron-right-outline',
        disabled: false,
        tooltip: '',
      },
      {
        url: '/user/revisi_dokumen/',
        icon: 'flowbite:file-pen-outline',
        title: 'Revisi Dokumen',
        icons: 'flowbite:chevron-right-outline',
        disabled: localStorage.getItem('docs') === 'false',
        tooltip: localStorage.getItem('docs') === 'false' ? 'Dokumen belum tersedia untuk revisi.' : '',
      },
      {
        url: '/user/pengumuman_hasil/',
        icon: 'flowbite:file-copy-outline',
        title: 'Pengumuman Hasil',
        icons: 'flowbite:chevron-right-outline',
        disabled: localStorage.getItem('formhasil') === 'false',
        tooltip: localStorage.getItem('formhasil') === 'false' ? 'Pengumuman hasil belum dapat diakses.' : '',
      },
      {
        url: '/user/verifikasi/',
        icon: 'flowbite:clipboard-check-outline',
        title: 'Verifikasi Lapangan',
        icons: 'flowbite:chevron-right-outline',
        disabled: localStorage.getItem('Form') === 'false',
        tooltip: localStorage.getItem('Form') === 'false' ? 'Verifikasi lapangan belum dapat diakses.' : '',
      },
      {
        url: '/user/dokumentasi/',
        icon: 'entypo:image',
        title: 'Dokumentasi',
        icons: 'flowbite:chevron-right-outline',
        disabled: false,
        tooltip: '',
      },
    ]);

    const navigateTo = (url) => {
      window.location.href = url;
    };

    onMounted(() => {
      getNotifikasi();
    });

    return {
      navigation,
      isNotificationOpen,
      notification,
      handleCloseNotification,
      navigateTo,
    };
  },
};
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
