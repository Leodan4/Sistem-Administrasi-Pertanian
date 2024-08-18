<script setup>
import NoData from "~/components/general/nodata.vue";

const props = defineProps({
  headers: Array,
  rows: Array,
  size: String,
  class: String,
  centeredHeaders: Array,
});
</script>

<template>
  <div
    v-if="rows?.length == 0"
    class="h-[calc(100vh-20rem)] flex items-center justify-center"
  >
    <NoData :size="300" :height="300" text="No data available in table" />
  </div>
  <div
    v-else
    :class="['w-full overflow-x-auto', size === 'small' ? 'border rounded-lg' : 'rounded-xl border']"
  >
    <table class="min-w-full rounded-xl overflow-hidden">
      <thead class="bg-slate-50 border">
        <tr>
          <th
            v-for="(header, index) in props.headers"
            :key="index"
            :class="[
              'text-sm font-bold text-left text-gray-600 ',
              props.centeredHeaders?.includes(header) ? 'text-center font-bold' : ''
            ]"
          >
            <slot :name="`header-${header}`">{{ header }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="rows" :rows="props.rows"></slot>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
th {
  @apply py-3 px-6;
}
</style>
