<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { TimeRecord } from '../lib/structs.ts'
import { mainTimeRecordStore } from '../stores/timerecord'

const store = mainTimeRecordStore();

const viewMonth = ref(1)

onMounted(() => {
  store.getTimeRecords(viewMonth.value)
})

const props = defineProps({
  timerecord: {
    type: Object as PropType<TimeRecord>,
    required: true,
  }
})

const selectedPlace = ref(0)
const optionPlace = ref(["Arendal", "Jobb"])

const timerecord = props.timerecord;

</script>

<template>
  <tr>
    <td>
      <input type="date" :v-model="timerecord.startTime" />
    </td>
    <td>
      <input type=time :v-model="timerecord.startTime" min="00:00" max="23:59" />
    </td>
    <td>
      <input type=time :v-model="timerecord.stopTime" min="00:00" max="23:59" />
    </td>
    <td>
      <select :selected="selectedPlace">
        <option v-for="place in optionPlace" :key="place"> {{ place }}
        </option>
      </select>
    </td>
  </tr>
</template>

<style scoped></style>
