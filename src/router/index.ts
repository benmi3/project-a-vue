import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import About from "../views/AboutView.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/timerecord",
    name: "TimeRecord",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    props: true,
    component: ProjectView,
  },
  {
    path: "/project/:id",
    name: "Project",
    props: true,
    component: ProjectView,
  },
  {
    path: "/tasks",
    name: "Tasks",
    props: true,
    component: About,
  },
  {
    path: "/task/:id",
    name: "Task",
    props: true,
    component: About,
  },
  {
    path: "/tasktime",
    name: "TaskTime",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
