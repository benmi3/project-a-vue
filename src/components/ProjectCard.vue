<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <span>@{{ project.time }} on {{ project.date }}</span>
  </div>
</template>

<style scoped></style>
