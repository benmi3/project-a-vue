<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { mainTimeRecordStore } from "../stores/timerecord.ts"
const store = mainTimeRecordStore()
const timerecords = ref(null)
const starttime = ref(new Date())

const stoptime = ref(new Date())

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

const selectedPlace = ref(0)
const optionPlace = ref(["Arendal", "Jobb"])
</script>

<template>
  <div>
    <h1>Potato</h1>
    <h2>{{ props.year }}/{{ props.month }}/{{ props.day }}</h2>
    <input :v-model="props.year" />
    <input :v-model="props.month" />
    <input :v-model="props.day" />
    <input type=time :v-model="starttime" />
    <input type=time :v-model="stoptime" />
    <select :selected="selectedPlace">
      <option v-for="place in optionPlace" :key="place"> {{ place }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
