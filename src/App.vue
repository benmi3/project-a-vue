<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showItems = ref(true)

function toggleMenu() {
  showItems.value != showItems.value
}

</script>

<template>
  <div class="bg-slate-800">
    <header class="bg-slate-900  shadow-xl">
      <nav class="flex items-center justify-between flex-wrap ring-slate-900/5 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6"><img alt="Vue logo" class="logo"
            src="@/assets/logo.svg" width="80" height="80" />
          <span class="font-semibold text-xl tracking-tight">Project-a</span>
        </div>
        <div class="block lg:hidden" @click="toggleMenu()">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow" v-show="showItems" :class="showItems ? 'block' : 'hidden'">
            <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/">Home
            </RouterLink>
            <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              :to="{ name: 'TimeRecords' }">TimeRecords
            </RouterLink>
            <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              :to="{ name: 'Projects' }">Projects
            </RouterLink>
            <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              :to="{ name: 'Tasks' }">Tasks
            </RouterLink>
            <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/about">About
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <div class="flex items-center justify-center h-screen">
      <RouterView class="w-full max-w-xs flex-grow " />
    </div>
    <p class="text-center text-gray-500 text-xs">
      &copy;2024 Project-a
    </p>
  </div>
</template>

<style scoped></style>
