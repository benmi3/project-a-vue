import { ref } from "vue";
import axios from 'axios'

const requestClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  withCredentials: false, // needs to be same origin to be set to true
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'

  },
})
const successfull_login = ref(false);
const STORAGE_KEY_LOGIN_STATE = "LOGINSTATEKEY"

async function requestLogin(username: string, password: string) {
  requestClient.post('/api/login', {
    "username": username,
    "pwd": password
  }).then(function(response) {
    setLoginState(response.data.result.success)
  })
    .catch(function(error) {
      console.log(error);
      setLoginState(false)
    });


}

function setLoginState(value: boolean) {
  successfull_login.value = value
  localStorage.setItem(STORAGE_KEY_LOGIN_STATE, JSON.stringify(successfull_login.value))
}

function getStorageLoginState() {
  const state = localStorage.getItem(STORAGE_KEY_LOGIN_STATE || '[]');
  if (state) {
    if (state == 'true') {
      return true
    }
  }
  return false
}

export async function doLogin(username: string, password: string) {
  await requestLogin(username, password)
  return isAuthenticated()
}

export async function doLogout() {
  // created this in the same pattern as login,
  // just to create error handleing and logging later
  const logout_response = await requestClient.post('/api/logoff', {
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
  return successfull_login.value
}
