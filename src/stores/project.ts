import { ref } from 'vue'
import { defineStore } from 'pinia'
import { list_projects } from '@/lib/request'
import type { Project } from '@/lib/structs'

async function listProjects(): Promise<Array<Project>> {
  // TODO: add filters and options
  const projects = await list_projects("");
  return projects;
}


export const mainProjectStore = defineStore('project', () => {
  // -- state / ref()
  const projects = ref<Project[]>()
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getProjects() {
    projects.value = await listProjects();
  }
  // returns an object with the properties and methods we want to expose.
  return { projects, getProjects }
})
