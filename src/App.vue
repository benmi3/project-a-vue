<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-800">
    <header class="bg-slate-900 ring-slate-900/5 shadow-xl">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />

      <div class="text-white">

        <nav class="text-slate-100 grid grid-cols-5">
          <RouterLink class="grid-cols-1" to="/">Home</RouterLink>
          <RouterLink class="grid-cols-2" :to="{ name: 'TimeRecords' }">TimeRecords</RouterLink>
          <RouterLink class="grid-cols-3" :to="{ name: 'Projects' }">Projects</RouterLink>
          <RouterLink class="grid-cols-4" :to="{ name: 'Tasks' }">Tasks</RouterLink>
          <RouterLink class="grid-cols-5" to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  height: 4vh;
  min-height: 5vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
