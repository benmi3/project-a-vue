import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import About from "../views/AboutView.vue";
import LoginView from '../views/LoginView.vue';
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";
import { isAuthenticated } from '@/services/LoginService';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/timerecord",
    name: "TimeRecords",
    props: true,
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
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/about",
    name: "About",
    component: LoginView,
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

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' })
  else next()
})

export default router
