import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// for now declare the axios client locally
export const requestClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  withCredentials: false, // needs to be same origin to be set to true
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'

  },
})


interface TimeRecord {
  id: number,
  place: string,
  starTime: string,
  stopTime: string,
  cid: number,
}
const listofTimeRecords = ref([])

function updateTimeRecordsList(newData: []) {
  listofTimeRecords.value = newData

}

async function listTimeRecords() {
  requestClient.post('/api/rpc', {
    "id": 1,
    "methos": "list_projects",
    "params": {
      "filters": {
      }
    }
  }).then(function(response) {
    updateTimeRecordsList(response.data)
  })
    .catch(function(error) {
      console.log(error);
    });

}


export const mainTimeRecordStore = defineStore('timerecord', () => {
  // -- state / ref()
  const timerecords = ref<TimeRecord[]>([{
    id: 0,
    place: "place",
    starTime: "2024-05-02T13:40:39.635577783Z",
    stopTime: "2024-05-03T13:40:39.635577783Z",
    cid: 0,
  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTimeRecords(month: number) {
    await listTimeRecords()
    console.log(month)
    return listofTimeRecords.value
  }
  // returns an object with the properties and methods we want to expose.
  return { timerecords, getTimeRecords }
})

