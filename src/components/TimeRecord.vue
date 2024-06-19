<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
const daytimestring = ref('' + props.year.toString() + props.month.toString() + props.day.toString())

</script>

<template>
  <tr>
    <td>
      <input type="date" :v-model="daytimestring" />
    </td>
    <td>
      <input type=time :v-model="starttime" min="00:00" max="23:59" />
    </td>
    <td>
      <input type=time :v-model="stoptime" min="00:00" max="23:59" />
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
