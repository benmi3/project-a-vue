<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue"
/*import ProjectStore from "../stores/project"

const projects = ref(null)

onMounted(() => {
  ProjectService.getEvents()
    .then((response) => {
      project.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})*/

</script>

<template>
  <h1>Home View</h1>
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
