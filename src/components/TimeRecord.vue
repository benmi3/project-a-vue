<script setup>
import { ref, onMounted } from 'vue'
import { mainTimeRecordStore } from "../stores/timerecord.ts"
const store = mainTimeRecordStore()
const timerecords = ref(null)


onMounted(() => {
  timerecords.value = store.getTimeRecords()
})

const props = defineProps({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div>
    <h1>Potato</h1>
    <h2>{{ props.year }}/{{ props.month }}/{{ props.day }}</h2>
  </div>
</template>

<style scoped></style>
