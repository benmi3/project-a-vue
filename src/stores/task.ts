import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/lib/structs';
import { list_tasks } from '@/lib/request';

async function listTasks(projectId: number): Promise<Array<Task>> {
  // TODO: add filters and options
  const tasks = await list_tasks(projectId, "!title");
  return tasks;
}

export const mainTaskStore = defineStore('task', () => {
  // -- state / ref()
  const tasks = ref<Task[]>()
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTasks(projectId: number) {
    tasks.value = await listTasks(projectId);
  }
  // returns an object with the properties and methods we want to expose.
  return { tasks, getTasks }
})


