export interface loginPackage {
  username: String,
  pwd: String,
}

export interface Project {
  id: number,
  name: string,
  ownerId: number,
  cid: number,
}

export interface Task {
  id: number,
  projectId: number,
  title: string,
  done: boolean,
  cid: number,
}

export interface TaskProgress {
  id: number,
  taskId: number,
  progress: number,
  cid: number,
}


export interface TimeRecord {
  id: number,
  place: string,
  startTime: string,
  stopTime: string,
  cid: number,
}
