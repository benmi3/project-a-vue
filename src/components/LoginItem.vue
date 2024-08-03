<script setup lang="ts">
import { ref } from "vue";
import { doLogin } from "../services/LoginService"
import router from '../router/index'
import { validateUsername, validatePassword } from "@lib/validateInput"



const usernameInput = ref("")
const passwordInput = ref("")


function validateCredentials() {
  if (validateUsername(usernameInput.value) && validatePassword(passwordInput)) {
    return true
  }
  return false
}

async function loginUser() {
  if (validateCredentials()) {
    var result = await doLogin(usernameInput.value, passwordInput.value)
    if (result == true) {
      router.push('/')
    }
  }

}

</script>

<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username" @click="loginUser">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Username" v-model="usernameInput" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password" placeholder="******************" v-model="passwordInput" />
      <p class="text-red-500 text-xs italic">Autentication failed. Please Check your credentials, then try again.</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @submit.prevent="loginUser">
        Sign In
      </button>

      <a class=" inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</template>
