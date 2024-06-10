<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  msg: string
}>()
</script>

<template>
  <header class="bg-slate-900 ring-slate-900/5 shadow-xl">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="60" />

    <div class="text-white">
      <nav class="text-slate-300">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 8vh;
  max-height: 100vh;
  min-height: 7vh;

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
  padding: 0 1rem;
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
