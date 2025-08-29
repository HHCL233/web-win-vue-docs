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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;