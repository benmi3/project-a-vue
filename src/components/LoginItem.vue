<script setup lang="ts">
import { ref } from "vue";
import { doLogin } from "../services/LoginService"

const password = ref("")
const username = ref("")

async function loginUser(username: string, password: string) {
  doLogin(username, password)
}

</script>

<template>
  <form class="row" @submit.prevent="loginUser">
    <input id="username" :v-model="username.value" placeholder="Enter a name..." type="username" />
    <input id="password" :v-model="password.value" placeholder="Enter a password..." type="password" />
    <button type="submit">Login</button>
  </form>
  <p>{{ loginFails }}</p>
</template>
