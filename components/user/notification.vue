<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-10 flex items-center justify-center" :class="{ hidden: !isOpen }">
      
      <div class="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out" :class="{ 'opacity-25': isOpen, 'opacity-0': !isOpen }" @click="closeModal"></div>

      <div ref="modalContent" class="relative z-20 w-full max-w-md bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out" :class="{ 'scale-100 opacity-100': isOpen, 'scale-90 opacity-0': !isOpen }">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="closeModal">
          <Icon icon="material-symbols:close-rounded" class="h-6 w-6" />
        </button>

        <div class="flex justify-center pt-8">
          <div class="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
            <Icon icon="mingcute:notification-fill" class="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div class="text-center px-6 mt-4">
          <h2 class="text-xl font-semibold mb-3">{{ notificationName }}</h2>
          <p class="text-gray-500">{{ message }}</p>
        </div>

        <div class="flex gap-3 p-6">
          <button @click="closeModal" class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  notificationName: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close']);

const modalContent = ref(null);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.transform {
  transform-origin: center center;
}
.scale-90 {
  transform: scale(0.9);
}
.scale-100 {
  transform: scale(1);
}
</style>
