import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { BACKEND_URL, HEADERS, TIMEOUT } from './store_settings';

// for now declare the axios client locally
export const requestClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
  withCredentials: false, // needs to be same origin to be set to true
  headers: HEADERS,
})

interface Project {
  id: number,
  name: string,
  ownerId: number,
  cid: number,
}
const listofProjects = ref([])

function updateProjectList(newData: []) {
  listofProjects.value = newData

}

async function listProjects() {
  requestClient.post('/api/rpc', {
    "id": 1,
    "methos": "list_projects",
    "params": {
      "filters": {
      }
    }
  }).then(function (response) {
    updateProjectList(response.data)
  })
    .catch(function (error) {
      console.log(error);
    });

}


export const mainProjectStore = defineStore('project', () => {
  // -- state / ref()
  const projects = ref([{

  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getProjects() {
    await listProjects();

    projects.value = listofProjects.value
  }
  // returns an object with the properties and methods we want to expose.
  return { projects, getProjects }
})
