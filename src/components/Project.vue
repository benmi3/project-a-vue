<script setup lang="ts">
import { ref } from "vue";

const project_id = ref(0)
const project_name = ref("Unknown")
comnst project_owner = ref("Uknown User name")

interface AnimalFacts {
    text: string
}
const catFacts = ref([] as AnimalFacts[])
const fetchingFacts = ref(false)
async function loadMoreFacts() {
    fetchingFacts.value = true
    const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
    catFacts.value.push(...(catFactsResponse.data || []))

    fetchingFacts.value = false
}
async function fetchInitialCatFacts() {
    const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
    catFacts.value = catFactsResponse.data
}
onMounted(async () => {
    await fetchInitialCatFacts()
})

const</script>

<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
