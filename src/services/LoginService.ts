import axios from "axios";

const apiClient = axios.create({
  baseURL: 'github.com/benmi3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application',
  },
})

let successfull_login = false;

export async function doLogin(username: string, password: string) {
  const login_response = await apiClient.post('/api/login', {
    "username": username,
    "password": password
  })
  try {
    if (login_response.data.result.success == true) {
      successfull_login = true
    } else {
      successfull_login = false

    }
  } catch {
    successfull_login = false
  }

  return successfull_login
}

export async function doLogout() {
  // created this in the same pattern as login,
  // just to create error handleing and logging later
  const logout_response = await apiClient.post('/api/logoff', {
    logoff: true,
  })
  try {
    if (logout_response.data.result.logged_off == true) {
      successfull_login = false
    } else {
      successfull_login = false

    }
  } catch {
    successfull_login = false
  }
  return successfull_login
}

export function isAuthenticated() {
  // will add a way to get this from
  // local storage aswell
  return successfull_login
}
