<template>
  <div class="bg-[#C53030] w-full h-min fixed z-20 top-0">
    <div class="py-5 grid place-content-end px-4 text-white">
      {{ formattedDate }}
    </div>
  </div>
</template>

<script setup>
const currentDate = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formatter = new Intl.DateTimeFormat("id-ID", options);

const formattedDate = formatter.format(currentDate);
</script>
