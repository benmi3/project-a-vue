import { ref } from 'vue'
import { defineStore } from 'pinia'
import { doLogin, doLogout } from '@/services/LoginService'
import axios from 'axios'

interface UserInfo {
  id: number,
  username: string,
}

export const mainUserStore = defineStore('user', () => {
  // -- state / ref()
  const userInfo = ref<Project>({
    id: 0,
    username: "username",
  })
  const username = ref("")
  const loginFails = ref<number>(0)
  const login_state = ref(false)
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions


  function isAuthenticated() {
    return login_state.value
  }
  // returns an object with the properties and methods we want to expose.
  return { userInfo, loginUser, loginFails, isAuthenticated }
})


