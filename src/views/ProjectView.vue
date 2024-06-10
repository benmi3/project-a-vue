<script setup>
import { ref, onMounted } from "vue";
import ProjectService from "../services/ProjectService.ts"

const props = defineProps({
  id: { required: true, },
});

const project = ref(null)

onMounted(() => {
  ProjectService.getEvent(props.id)
    .then((response) => {
      project.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
  <div class="about">
    <h1 class="text-white">This is an about page</h1>
    <p class="text-slate-400 ">This is darker</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
