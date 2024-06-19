<script setup>
import { ref, onMounted } from 'vue'
import TimeRecord from '@/components/TimeRecord.vue'
import { mainTimeRecordStore } from "../stores/timerecord.ts"
const store = mainTimeRecordStore()
const timerecords = ref(null)


const props = defineProps({
  year: { required: false, },
  month: { required: false, },
});

const year = props.year ? props.yeair : 2024;
const month = props.month ? props.month : 6;

onMounted(() => console.log(month))


const januar = 31
const februar = (year % 4 == 0) ? 29 : 28;
const mars = 31
const april = 30
const mai = 31
const juni = 30
const juli = 31
const august = 31
const september = 30
const oktober = 31
const november = 30
const desember = 31

function howManyDays(month) {
  switch (month) {
    case 1:
      return januar
    case 2:
      return februar
    case 3:
      return mars
    case 4:
      return april
    case 5:
      return mai;
    case 6:
      return juni;
    case 7:
      return juli
    case 8:
      return august
    case 9:
      return september;
    case 10:
      return oktober;
    case 11:
      return november;
    case 12:
      return desember;
    default:
      break;
  }
  return 0;
}

const days = ref(howManyDays(month))
</script>

<template>
  <div class="about">
    <h1 class="text-white">This is an about page</h1>
    <p class="text-slate-400 ">This is darker</p>
    <a>amount of days {{ days }}</a>
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>starttime</td>
          <td>stoptime</td>
          <td>place</td>
        </tr>
      </thead>
      <tbody>
        <TimeRecord v-for="day in days" :key="day.id" :year=year :month=month :day=day />
      </tbody>
    </table>
  </div>
</template>

<style></style>
