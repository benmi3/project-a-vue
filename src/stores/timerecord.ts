import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TimeRecord } from '@/lib/structs'
import { list_timerecords } from '@/lib/request'

async function listTimeRecords(month: number): Promise<Array<TimeRecord>> {
  // TODO: add filters and options
  const taskprogresses = await list_timerecords(month, "start_time");
  return taskprogresses;
}

export const mainTimeRecordStore = defineStore('timerecord', () => {
  // -- state / ref()
  /*const timerecords = ref<TimeRecord[]>([{
    id: 0,
    place: "place",
    starTime: "2024-05-02T13:40:39.635577783Z",
    stopTime: "2024-05-03T13:40:39.635577783Z",
    cid: 0,
  },])*/
  const timerecords = ref<TimeRecord[]>();
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTimeRecords(month: number) {
    timerecords.value = await listTimeRecords(month)
  }
  // returns an object with the properties and methods we want to expose.
  return { timerecords, getTimeRecords }
})

