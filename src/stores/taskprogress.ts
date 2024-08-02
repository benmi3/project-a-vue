import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TaskProgress } from '@/lib/structs'
import { list_taskprogresses } from '@/lib/request';

async function listTasksProgress(taskId: number): Promise<Array<TaskProgress>> {
  // TODO: add filters and options
  const taskprogresses = await list_taskprogresses(taskId, "ctime");
  return taskprogresses;
}


export const mainTimeProgressStore = defineStore('task', () => {
  // -- state / ref()
  const taskprogresses = ref<TaskProgress[]>()
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTaskProgressess(taskId: number) {
    taskprogresses.value = await listTasksProgress(taskId);
  }
  // returns an object with the properties and methods we want to expose.
  return { taskprogresses, getTaskProgressess }
})


