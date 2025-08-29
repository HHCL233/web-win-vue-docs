import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/home.vue"),
  },
  {
    path: "/installation",
    name: "installation",
    component: () => import("@/installation.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import("@/button.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/about.vue"),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;