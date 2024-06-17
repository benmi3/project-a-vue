import { ref } from "vue";
import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

  },
})

const successfull_login = ref(false);
const STORAGE_KEY_LOGIN_STATE = "LOGINSTATEKEY"

async function requestLogin(username: string, password: string) {
  apiClient.post('/api/login', {
    "username": username,
    "pwd": password
  }).then(function(response) {
    console.log(response);
    setLoginState(response.data.result.success)
  })
    .catch(function(error) {
      console.log(error);
      setLoginState(false)
    });


}

function setLoginState(value: boolean) {
  successfull_login.value = value
  console.log("I SET THE LOGIN TO", successfull_login.value)
  localStorage.setItem(STORAGE_KEY_LOGIN_STATE, JSON.stringify(successfull_login.value))
}

function getStorageLoginState() {
  const state = localStorage.getItem(STORAGE_KEY_LOGIN_STATE || '[]');
  console.log("I GOT THE LOGIN STATE, ITS", state)
  if (state) {
    if (state == 'true') {
      return true
    }
  }
  return false
}

export async function doLogin(username: string, password: string) {
  await requestLogin(username, password)
  console.log("LOGIN REQUEST")
}

export async function doLogout() {
  // created this in the same pattern as login,
  // just to create error handleing and logging later
  const logout_response = await apiClient.post('/api/logoff', {
    logoff: true,
  })
  try {
    if (logout_response.data.result.logged_off == true) {
      successfull_login.value = false
    } else {
      successfull_login.value = false

    }
  } catch {
    successfull_login.value = false
  }
  return successfull_login
}

export function isAuthenticated() {
  successfull_login.value = getStorageLoginState()

  // will add a way to get this from
  // local storage aswell
  console.log("login state", successfull_login.value)
  return successfull_login.value
}
