import axios from "axios";

const apiClient = axios.create({
  baseURL: 'github.com/benmi3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application',
  },
})


export default {
  getProjects() {
    return apiClient.post('/api/rpc', {
      id: 1,
      method: "list_projects",
      params: {
        "filters": {
        }
      }
    })
  },
  getProject(id: number) {
    return apiClient.post('/api/rpc', {
      id: 1,
      method: "list_projects",
      params: {
        "filters": {
          "project_id": id
        }
      }
    })
  }
}
