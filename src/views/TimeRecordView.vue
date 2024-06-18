<script setup>
import { ref, onMounted } from "vue";
import { mainTimeRecordStore } from "../stores/timerecord.ts"

const store = mainTimeRecordStore()

const props = defineProps({
  year: { required: false, },
  month: { required: false, },
});

const timerecords = ref(null)


onMounted(() => {
  timerecords.value = store.getTimeRecords()
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
