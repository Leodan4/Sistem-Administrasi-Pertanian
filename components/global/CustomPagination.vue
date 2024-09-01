<template>
    <div class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
        <button v-for="page in totalPages" :key="page" @click="changePage(page)"
            :class="{ active: page === currentPage }">
            {{ page }}
        </button>
        <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    totalPages: Number,
    currentPage: Number,
});

const emit = defineEmits(['page-change']);

const changePage = (page) => {
    if (page > 0 && page <= props.totalPages) {
        emit('page-change', page);
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
}

button.active {
    background-color: #007bff;
    color: white;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>