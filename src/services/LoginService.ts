import { ref } from "vue";
import { make_login_request, make_logout_request } from "../lib/request";

const successfull_login = ref(false);
const STORAGE_KEY_LOGIN_STATE = "LOGINSTATEKEY"

async function requestLogin(username: string, password: string) {
  const response = await make_login_request(username, password);
  const res = await response.json()
  try {
    if (res.result.success) {
      setLoginState(res.result.success)
    }
  } catch (e) {
    alert("Login Failed")
    setLoginState(false)
  }
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
  const logout_response = await make_logout_request();
  const res = await logout_response.json();
  if (res.data.result.logged_off == true) {
    successfull_login.value = false
  } else {
    successfull_login.value = false
  }
}

export function isAuthenticated() {
  successfull_login.value = getStorageLoginState()

  // will add a way to get this from
  // local storage aswell
  return successfull_login.value
}
