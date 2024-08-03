import { BACKEND_URL } from "./constants";
import type { Project, Task, TaskProgress, loginPackage, TimeRecord } from "./structs";

export async function list_projects(filter_setting: string): Promise<Array<Project>> {
  const dataPackage = {
    "id": 1,
    "method": "list_projects",
    "params": {
      "filter": {
        filter_setting
      }
    }
  }

  const res = await send_request(JSON.stringify(dataPackage))

  const resjson = await res.json();

  const projects: Array<Project> = JSON.parse(resjson);

  return projects;
}

export async function list_tasks(project_id: number, list_order: string): Promise<Array<Task>> {
  const dataPackage = {
    "id": 1,
    "method": "list_tasks",
    "params": {
      "filter": {
        "filters": {
          "project_id": project_id
        },
        "list_options": {
          "order_bys": list_order
        }

      }
    }
  }

  const res = await send_request(JSON.stringify(dataPackage))

  const resjson = await res.json();

  const tasks: Array<Task> = JSON.parse(resjson);

  return tasks;
}

export async function list_taskprogresses(task_id: number, list_order: string): Promise<Array<TaskProgress>> {
  const dataPackage = {
    "id": 1,
    "method": "list_taskprogresses",
    "params": {
      "filter": {
        "filters": {
          "project_id": task_id
        },
        "list_options": {
          "order_bys": list_order
        }

      }
    }
  }

  const res = await send_request(JSON.stringify(dataPackage))

  const resjson = await res.json();

  const taskprogresss: Array<TaskProgress> = JSON.parse(resjson);

  return taskprogresss;
}

export async function list_timerecords(month: number, list_order: string): Promise<Array<TimeRecord>> {

  const dataPackage = {
    "id": 1,
    "method": "list_timerecords",
    "params": {
      "filter": {
        "filters": {
          "start_time": month // TODO: This is not correct format, and must be changed
        },
        "list_options": {
          "order_bys": list_order
        }

      }
    }
  }

  const res = await send_request(JSON.stringify(dataPackage))

  const resjson = await res.json();

  const timerecords: Array<TimeRecord> = JSON.parse(resjson);

  return timerecords;
}


export async function make_login_request(username: String, pwd: String): Promise<Response> {
  const loginpackage: loginPackage = {
    username: username,
    pwd: pwd,
  }
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "ProcessThisImmediately",
  });

  return fetch(BACKEND_URL + "/api/login", {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify(loginpackage),
  })
}

export async function make_logout_request(): Promise<Response> {
  const logoffPackage = { "logoff": true };

  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "ProcessThisImmediately",
  });

  return fetch(BACKEND_URL + "/api/looff", {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify(logoffPackage),
  })

}

async function send_request(params: BodyInit): Promise<Response> {
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "ProcessThisImmediately",
  });

  return fetch(BACKEND_URL + "/api/rpc", {
    method: "POST",
    headers: reqHeaders,
    body: params,
  })
}
